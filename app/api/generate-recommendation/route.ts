import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { destinationId, answers, percentage } = await request.json()

    const destinationContext = {
      "paris-1889": {
        name: "Paris 1889 - La Belle Époque",
        keywords: "culture, art, modernité, monuments, élégance urbaine, Exposition Universelle, Tour Eiffel, Moulin Rouge"
      },
      "cretace": {
        name: "Période Crétacé - Les Géants du Passé",
        keywords: "aventure, nature sauvage, dinosaures, exploration, faune préhistorique, T-Rex, Tricératops"
      },
      "florence-1504": {
        name: "Florence 1504 - Art de la Renaissance",
        keywords: "art, architecture, musées, Renaissance, Michel-Ange, Léonard de Vinci, culture raffinée"
      }
    }

    const destination = destinationContext[destinationId as keyof typeof destinationContext]

    if (!destination) {
      return NextResponse.json(
        { error: "Destination non trouvée" },
        { status: 404 }
      )
    }

    const apiKey = process.env.MISTRAL_API_KEY

    if (!apiKey) {
      // Fallback if no API key
      return NextResponse.json({
        recommendation: `Avec un score de compatibilité de ${percentage}%, ${destination.name} correspond parfaitement à vos attentes. Cette destination allie ${destination.keywords.split(', ').slice(0, 3).join(', ')} pour vous offrir une expérience inoubliable. Vos réponses indiquent une affinité naturelle pour ce type d'aventure temporelle.`
      })
    }

    // Call Mistral API
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [
          {
            role: "system",
            content: "Tu es un expert en voyage temporel qui aide les clients à choisir leur destination idéale. Tu dois créer des recommandations personnalisées, enthousiastes et convaincantes en 3-4 phrases maximum. Utilise un ton chaleureux et professionnel."
          },
          {
            role: "user",
            content: `Le client a obtenu ${percentage}% de compatibilité avec la destination "${destination.name}". 
Cette destination se caractérise par : ${destination.keywords}.
Répondses du client aux questions du quiz : ${answers.join(', ')}.

Rédige une recommandation personnalisée de 3-4 phrases qui explique pourquoi cette destination correspond au client, en te basant sur ses réponses et la compatibilité calculée. Sois enthousiaste et convaincant.`
          }
        ],
        temperature: 0.7,
        max_tokens: 200
      })
    })

    if (!response.ok) {
      throw new Error("Erreur lors de l'appel à l'API Mistral")
    }

    const data = await response.json()
    const recommendation = data.choices[0]?.message?.content || 
      `Avec un score de compatibilité de ${percentage}%, ${destination.name} est fait pour vous !`

    return NextResponse.json({ recommendation })

  } catch (error) {
    console.error("Error generating recommendation:", error)
    return NextResponse.json(
      { error: "Erreur lors de la génération de la recommandation" },
      { status: 500 }
    )
  }
}
