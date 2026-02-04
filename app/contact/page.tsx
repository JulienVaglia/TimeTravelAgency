"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  MessageSquare
} from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
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
                Message Envoyé !
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Merci de nous avoir contactés. Notre équipe d'experts en voyage temporel vous répondra dans les plus brefs délais.
              </p>
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-lg p-6 mb-8">
                <p className="text-sm text-slate-400">
                  Temps de réponse moyen : <span className="text-amber-500 font-medium">24-48 heures</span>
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
                    Voir les destinations
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">
              Contactez-nous
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Parlons de Votre Voyage
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Nos experts en voyage temporel sont à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre aventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              <Card className="bg-slate-900/50 border-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-amber-500/10">
                      <Mail className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email</h3>
                      <p className="text-slate-400 text-sm">contact@timetravelagency.com</p>
                      <p className="text-slate-400 text-sm">support@timetravelagency.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-amber-500/10">
                      <Phone className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Téléphone</h3>
                      <p className="text-slate-400 text-sm">+33 1 23 45 67 89</p>
                      <p className="text-slate-400 text-sm">+33 1 23 45 67 90</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-amber-500/10">
                      <MapPin className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Adresse</h3>
                      <p className="text-slate-400 text-sm">123 Avenue du Temps</p>
                      <p className="text-slate-400 text-sm">75001 Paris, France</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-amber-500/10">
                      <Clock className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Horaires</h3>
                      <p className="text-slate-400 text-sm">Lun - Ven : 9h - 19h</p>
                      <p className="text-slate-400 text-sm">Sam : 10h - 18h</p>
                      <p className="text-slate-400 text-sm">Dim : Fermé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="bg-slate-900/50 border-slate-800/50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-amber-500" />
                    <h2 className="text-2xl font-serif text-white">
                      Envoyez-nous un message
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <Label htmlFor="phone" className="text-white">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+33 6 12 34 56 78"
                          className="bg-slate-950 border-slate-700 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">Sujet *</Label>
                      <Select required>
                        <SelectTrigger className="bg-slate-950 border-slate-700 text-white">
                          <SelectValue placeholder="Sélectionnez un sujet" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-700">
                          <SelectItem value="info">Demande d'information</SelectItem>
                          <SelectItem value="reservation">Question sur une réservation</SelectItem>
                          <SelectItem value="destination">Question sur une destination</SelectItem>
                          <SelectItem value="custom">Voyage sur mesure</SelectItem>
                          <SelectItem value="technical">Problème technique</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination" className="text-white">Destination d'intérêt</Label>
                      <Select>
                        <SelectTrigger className="bg-slate-950 border-slate-700 text-white">
                          <SelectValue placeholder="Optionnel" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-700">
                          <SelectItem value="paris-1889">Paris 1889 - La Belle Époque</SelectItem>
                          <SelectItem value="cretace">Période Crétacé - Les Géants du Passé</SelectItem>
                          <SelectItem value="florence-1504">Florence 1504 - Art de la Renaissance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Décrivez votre demande en détail..."
                        rows={6}
                        className="bg-slate-950 border-slate-700 text-white resize-none"
                      />
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                      <p className="text-xs text-slate-400">
                        En soumettant ce formulaire, vous acceptez que TimeTravel Agency traite vos données personnelles pour répondre à votre demande. Vos données sont protégées et ne seront jamais partagées avec des tiers.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-medium py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-5 h-5 mr-2 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
