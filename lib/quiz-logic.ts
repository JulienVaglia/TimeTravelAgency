export interface QuizQuestion {
  id: number
  question: string
  options: Array<{
    text: string
    scores: {
      "paris-1889": number
      "cretace": number
      "florence-1504": number
    }
  }>
}

export interface QuizResult {
  destinationId: string
  destinationName: string
  score: number
  percentage: number
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quel type d'expérience recherchez-vous ?",
    options: [
      {
        text: "Culturelle et artistique",
        scores: {
          "paris-1889": 2,
          "cretace": 0,
          "florence-1504": 3
        }
      },
      {
        text: "Aventure et nature",
        scores: {
          "paris-1889": 0,
          "cretace": 3,
          "florence-1504": 0
        }
      },
      {
        text: "Élégance et raffinement",
        scores: {
          "paris-1889": 3,
          "cretace": 0,
          "florence-1504": 2
        }
      }
    ]
  },
  {
    id: 2,
    question: "Votre période préférée ?",
    options: [
      {
        text: "Histoire moderne (XIXe-XXe siècle)",
        scores: {
          "paris-1889": 3,
          "cretace": 0,
          "florence-1504": 0
        }
      },
      {
        text: "Temps anciens et origines",
        scores: {
          "paris-1889": 0,
          "cretace": 3,
          "florence-1504": 1
        }
      },
      {
        text: "Renaissance et classicisme",
        scores: {
          "paris-1889": 1,
          "cretace": 0,
          "florence-1504": 3
        }
      }
    ]
  },
  {
    id: 3,
    question: "Vous préférez :",
    options: [
      {
        text: "L'effervescence urbaine",
        scores: {
          "paris-1889": 3,
          "cretace": 0,
          "florence-1504": 2
        }
      },
      {
        text: "La nature sauvage",
        scores: {
          "paris-1889": 0,
          "cretace": 3,
          "florence-1504": 0
        }
      },
      {
        text: "L'art et l'architecture",
        scores: {
          "paris-1889": 2,
          "cretace": 0,
          "florence-1504": 3
        }
      }
    ]
  },
  {
    id: 4,
    question: "Votre activité idéale :",
    options: [
      {
        text: "Visiter des monuments",
        scores: {
          "paris-1889": 3,
          "cretace": 0,
          "florence-1504": 2
        }
      },
      {
        text: "Observer la faune",
        scores: {
          "paris-1889": 0,
          "cretace": 3,
          "florence-1504": 0
        }
      },
      {
        text: "Explorer des musées",
        scores: {
          "paris-1889": 2,
          "cretace": 0,
          "florence-1504": 3
        }
      }
    ]
  }
]

export function calculateQuizResults(answers: number[]): QuizResult[] {
  const scores: { [key: string]: number } = {
    "paris-1889": 0,
    "cretace": 0,
    "florence-1504": 0
  }

  // Calculate total scores based on answers
  answers.forEach((answerIndex, questionIndex) => {
    const question = quizQuestions[questionIndex]
    const selectedOption = question.options[answerIndex]
    
    scores["paris-1889"] += selectedOption.scores["paris-1889"]
    scores["cretace"] += selectedOption.scores["cretace"]
    scores["florence-1504"] += selectedOption.scores["florence-1504"]
  })

  // Calculate max possible score
  const maxScore = quizQuestions.length * 3

  // Convert to array and sort by score
  const results: QuizResult[] = Object.entries(scores).map(([id, score]) => ({
    destinationId: id,
    destinationName: getDestinationName(id),
    score,
    percentage: Math.round((score / maxScore) * 100)
  }))

  return results.sort((a, b) => b.score - a.score)
}

function getDestinationName(id: string): string {
  const names: { [key: string]: string } = {
    "paris-1889": "Paris 1889 - La Belle Époque",
    "cretace": "Période Crétacé - Les Géants du Passé",
    "florence-1504": "Florence 1504 - Art de la Renaissance"
  }
  return names[id] || id
}

export function getTopRecommendation(answers: number[]): QuizResult {
  const results = calculateQuizResults(answers)
  return results[0]
}
