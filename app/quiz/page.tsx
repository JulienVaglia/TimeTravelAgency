"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { quizQuestions, getTopRecommendation } from "@/lib/quiz-logic"
import { getDestinationById } from "@/lib/destinations-data"
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Loader2
} from "lucide-react"
import Image from "next/image"

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [aiRecommendation, setAiRecommendation] = useState<string>("")
  const [isLoadingAI, setIsLoadingAI] = useState(false)

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex)
  }

  const handleNext = async () => {
    if (selectedOption === null) return

    const newAnswers = [...answers, selectedOption]
    setAnswers(newAnswers)
    setSelectedOption(null)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz completed, get recommendation
      setIsLoadingAI(true)
      setShowResult(true)
      
      const topResult = getTopRecommendation(newAnswers)
      
      // Call AI API for personalized recommendation
      try {
        const response = await fetch("/api/generate-recommendation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destinationId: topResult.destinationId,
            answers: newAnswers,
            percentage: topResult.percentage
          }),
        })

        const data = await response.json()
        setAiRecommendation(data.recommendation)
      } catch (error) {
        console.error("Error getting AI recommendation:", error)
        setAiRecommendation("Impossible de générer une recommandation personnalisée pour le moment.")
      } finally {
        setIsLoadingAI(false)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
      setSelectedOption(null)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setSelectedOption(null)
    setShowResult(false)
    setAiRecommendation("")
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  if (showResult) {
    const topResult = getTopRecommendation(answers)
    const destination = getDestinationById(topResult.destinationId)

    if (!destination) return null

    return (
      <main className="min-h-screen bg-slate-950">
        <Header />
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Result Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-500/20 border-4 border-amber-500 flex items-center justify-center"
                >
                  <Sparkles className="w-10 h-10 text-amber-500" />
                </motion.div>
                <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
                  Votre Destination Idéale
                </h1>
                <p className="text-xl text-slate-300">
                  Basé sur vos réponses, nous vous recommandons :
                </p>
              </div>

              {/* Recommended Destination Card */}
              <Card className="bg-slate-900/50 border-slate-800/50 overflow-hidden mb-8">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block text-amber-500 text-sm tracking-[0.3em] uppercase mb-2">
                      {destination.tagline}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-white">
                      {destination.title}
                    </h2>
                  </div>
                </div>
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-slate-400">Compatibilité</span>
                          <span className="text-2xl font-serif text-amber-500">
                            {topResult.percentage}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${topResult.percentage}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {isLoadingAI ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
                      <span className="ml-3 text-slate-300">
                        Génération de votre recommandation personnalisée...
                      </span>
                    </div>
                  ) : (
                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-amber-500" />
                        Pourquoi cette destination vous correspond
                      </h3>
                      <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                        {aiRecommendation}
                      </p>
                    </div>
                  )}

                  <div className="space-y-3 mb-6">
                    <h3 className="text-lg font-medium text-white">Aperçu de l'expérience</h3>
                    <p className="text-slate-400">{destination.description}</p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                        <p className="text-xs text-slate-400 mb-1">Durée</p>
                        <p className="text-sm text-white font-medium">{destination.duration}</p>
                      </div>
                      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                        <p className="text-xs text-slate-400 mb-1">À partir de</p>
                        <p className="text-sm text-white font-medium">{destination.price}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/destinations/${destination.id}`} className="flex-1">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-medium">
                        Découvrir cette destination
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={handleRestart}
                      className="flex-1 border-amber-500/50 text-amber-500 hover:bg-amber-500/10"
                    >
                      Refaire le quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Other Destinations */}
              <div className="text-center">
                <p className="text-slate-400 mb-4">Vous hésitez encore ?</p>
                <Link href="/#destinations">
                  <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                    Voir toutes les destinations
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil</span>
            </Link>
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center"
              >
                <Sparkles className="w-8 h-8 text-amber-500" />
              </motion.div>
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
                Trouvez Votre Destination Idéale
              </h1>
              <p className="text-slate-400">
                Répondez à quelques questions pour découvrir le voyage temporel parfait pour vous
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-400">
                Question {currentQuestion + 1} sur {quizQuestions.length}
              </span>
              <span className="text-sm text-amber-500 font-medium">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
              />
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-slate-900/50 border-slate-800/50">
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-8">
                    {question.question}
                  </h2>

                  <div className="space-y-4">
                    {question.options.map((option, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleOptionSelect(index)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                          selectedOption === index
                            ? "bg-amber-500/10 border-amber-500"
                            : "bg-slate-950/50 border-slate-800 hover:border-amber-500/50"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            selectedOption === index
                              ? "border-amber-500 bg-amber-500"
                              : "border-slate-600"
                          }`}>
                            {selectedOption === index && (
                              <CheckCircle2 className="w-4 h-4 text-slate-950" />
                            )}
                          </div>
                          <span className={`text-lg ${
                            selectedOption === index ? "text-amber-500 font-medium" : "text-white"
                          }`}>
                            {option.text}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-8">
                    {currentQuestion > 0 && (
                      <Button
                        onClick={handlePrevious}
                        variant="outline"
                        className="border-slate-700 text-white hover:bg-slate-800"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Précédent
                      </Button>
                    )}
                    <Button
                      onClick={handleNext}
                      disabled={selectedOption === null}
                      className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {currentQuestion === quizQuestions.length - 1 ? "Voir ma destination" : "Suivant"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  )
}
