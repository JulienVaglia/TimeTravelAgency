import { NextResponse } from 'next/server';

// Prompt Système : C'est ici qu'on définit la personnalité du Chatbot
const SYSTEM_PROMPT = `
Tu es Chronos, l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton rôle : conseiller les clients sur les meilleures destinations temporelles.

Ton ton :
- Professionnel mais chaleureux
- Passionné d'histoire
- Toujours enthousiaste sans être trop familier
- Expertise en voyage temporel (fictif mais crédible)

Tu connais parfaitement nos 3 destinations exclusives :
1. Paris 1889 (Belle Époque, Tour Eiffel, 4 500€).
2. Crétacé -66M (Dinosaures, Nature sauvage, 6 200€).
3. Florence 1504 (Renaissance, Michel-Ange, 5 000€).

Ne réponds qu'aux questions concernant le voyage temporel ou l'agence. Fais des réponses concises (max 3 phrases).
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Récupération de la clé API (soit dans .env, soit en dur pour le test rapide)
    const apiKey = process.env.MISTRAL_API_KEY; 

    if (!apiKey) {
      return NextResponse.json({ error: 'Clé API manquante' }, { status: 500 });
    }

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "mistral-small-latest", // Modèle rapide et gratuit/pas cher
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    });

    const data = await response.json();
    
    // On renvoie juste le contenu du message
    return NextResponse.json({ 
      reply: data.choices[0].message.content 
    });

  } catch (error) {
    console.error('Erreur Mistral:', error);
    return NextResponse.json({ error: 'Erreur de communication avec le futur' }, { status: 500 });
  }
}