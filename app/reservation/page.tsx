"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { 
  CreditCard, 
  Calendar, 
  Users, 
  CheckCircle2,
  ArrowLeft,
  Shield,
  Clock
} from "lucide-react"

export default function ReservationPage() {
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      setIsProcessing(true)
      setTimeout(() => {
        setIsProcessing(false)
        setIsComplete(true)
      }, 2000)
    }
  }

  if (isComplete) {
    return (
      <main className="min-h-screen bg-slate-950">
        <Header />
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/20 border-4 border-green-500 flex items-center justify-center"
            >
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
                Réservation Confirmée !
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Félicitations ! Votre voyage temporel est confirmé.
              </p>
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-lg p-6 mb-8">
                <p className="text-slate-400 mb-2">Numéro de réservation</p>
                <p className="text-2xl font-mono text-amber-500 mb-4">TT-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                <p className="text-sm text-slate-400">
                  Un email de confirmation a été envoyé à votre adresse.
                  Vous recevrez toutes les informations nécessaires pour préparer votre voyage dans le temps.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950">
                    Retour à l'accueil
                  </Button>
                </Link>
                <Link href="/#destinations">
                  <Button variant="outline" className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10">
                    Découvrir d'autres destinations
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

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/#destinations"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour aux destinations</span>
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Réservation de Voyage Temporel
            </h1>
            <p className="text-slate-400">
              Complétez les étapes ci-dessous pour finaliser votre réservation
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center flex-1">
                  <div className={`flex flex-col items-center ${num < 3 ? 'flex-1' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      step >= num 
                        ? 'bg-amber-500 border-amber-500 text-slate-950' 
                        : 'bg-slate-900 border-slate-700 text-slate-500'
                    }`}>
                      {num}
                    </div>
                    <span className={`text-xs mt-2 ${step >= num ? 'text-amber-500' : 'text-slate-500'}`}>
                      {num === 1 ? 'Informations' : num === 2 ? 'Détails' : 'Paiement'}
                    </span>
                  </div>
                  {num < 3 && (
                    <div className={`h-0.5 flex-1 mx-4 transition-colors ${
                      step > num ? 'bg-amber-500' : 'bg-slate-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-900/50 border-slate-800/50">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-2xl font-serif text-white mb-6">
                            Informations Personnelles
                          </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-white">Prénom *</Label>
                            <Input 
                              id="firstName" 
                              required 
                              placeholder="Jean"
                              className="bg-slate-950 border-slate-700 text-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-white">Nom *</Label>
                            <Input 
                              id="lastName" 
                              required 
                              placeholder="Dupont"
                              className="bg-slate-950 border-slate-700 text-white"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">Email *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            required 
                            placeholder="jean.dupont@example.com"
                            className="bg-slate-950 border-slate-700 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white">Téléphone *</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            required 
                            placeholder="+33 6 12 34 56 78"
                            className="bg-slate-950 border-slate-700 text-white"
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-medium"
                        >
                          Continuer
                        </Button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-2xl font-serif text-white mb-6">
                            Détails du Voyage
                          </h2>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination" className="text-white">Destination *</Label>
                          <Select required>
                            <SelectTrigger className="bg-slate-950 border-slate-700 text-white">
                              <SelectValue placeholder="Sélectionnez une destination" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-slate-700">
                              <SelectItem value="paris-1889">Paris 1889 - La Belle Époque</SelectItem>
                              <SelectItem value="cretace">Période Crétacé - Les Géants du Passé</SelectItem>
                              <SelectItem value="florence-1504">Florence 1504 - Art de la Renaissance</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date" className="text-white">Date de départ *</Label>
                          <Input 
                            id="date" 
                            type="date" 
                            required 
                            className="bg-slate-950 border-slate-700 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="travelers" className="text-white">Nombre de voyageurs *</Label>
                          <Select required>
                            <SelectTrigger className="bg-slate-950 border-slate-700 text-white">
                              <SelectValue placeholder="Sélectionnez" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-slate-700">
                              <SelectItem value="1">1 personne</SelectItem>
                              <SelectItem value="2">2 personnes</SelectItem>
                              <SelectItem value="3">3 personnes</SelectItem>
                              <SelectItem value="4">4 personnes</SelectItem>
                              <SelectItem value="more">5+ personnes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex gap-4">
                          <Button 
                            type="button"
                            variant="outline"
                            onClick={() => setStep(1)}
                            className="flex-1 border-slate-700 text-white"
                          >
                            Retour
                          </Button>
                          <Button 
                            type="submit" 
                            className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-medium"
                          >
                            Continuer
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-2xl font-serif text-white mb-6">
                            Paiement Sécurisé
                          </h2>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardName" className="text-white">Nom sur la carte *</Label>
                          <Input 
                            id="cardName" 
                            required 
                            placeholder="JEAN DUPONT"
                            className="bg-slate-950 border-slate-700 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber" className="text-white">Numéro de carte *</Label>
                          <div className="relative">
                            <Input 
                              id="cardNumber" 
                              required 
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              className="bg-slate-950 border-slate-700 text-white pl-10"
                            />
                            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry" className="text-white">Date d'expiration *</Label>
                            <Input 
                              id="expiry" 
                              required 
                              placeholder="MM/AA"
                              maxLength={5}
                              className="bg-slate-950 border-slate-700 text-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv" className="text-white">CVV *</Label>
                            <Input 
                              id="cvv" 
                              required 
                              placeholder="123"
                              maxLength={3}
                              className="bg-slate-950 border-slate-700 text-white"
                            />
                          </div>
                        </div>
                        <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 flex items-start gap-3">
                          <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-white font-medium mb-1">Paiement 100% sécurisé</p>
                            <p className="text-xs text-slate-400">
                              Vos données sont cryptées et protégées par notre système de sécurité temporelle.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button 
                            type="button"
                            variant="outline"
                            onClick={() => setStep(2)}
                            className="flex-1 border-slate-700 text-white"
                            disabled={isProcessing}
                          >
                            Retour
                          </Button>
                          <Button 
                            type="submit" 
                            className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-medium"
                            disabled={isProcessing}
                          >
                            {isProcessing ? (
                              <>
                                <Clock className="w-4 h-4 mr-2 animate-spin" />
                                Traitement...
                              </>
                            ) : (
                              'Confirmer le paiement'
                            )}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-900/50 border-slate-800/50 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white">Résumé</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Destination</span>
                      <span className="text-white">À sélectionner</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Voyageurs</span>
                      <span className="text-white">À sélectionner</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Durée</span>
                      <span className="text-white">5 jours / 4 nuits</span>
                    </div>
                  </div>

                  <Separator className="bg-slate-800" />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Sous-total</span>
                      <span className="text-white">4 500 €</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Assurance voyage</span>
                      <span className="text-white">Incluse</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Frais de service</span>
                      <span className="text-white">0 €</span>
                    </div>
                  </div>

                  <Separator className="bg-slate-800" />

                  <div className="flex justify-between">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-2xl font-serif text-amber-500">4 500 €</span>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Annulation gratuite 30j avant</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Guide historien inclus</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Tous les repas inclus</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
