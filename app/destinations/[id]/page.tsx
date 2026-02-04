"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getDestinationById } from "@/lib/destinations-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  MapPin, 
  Users, 
  Shield,
  BookOpen,
  ArrowLeft,
  Sparkles
} from "lucide-react"
import { use } from "react"

interface DestinationPageProps {
  params: Promise<{
    id: string
  }>
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const { id } = use(params)
  const destination = getDestinationById(id)

  if (!destination) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={destination.hero}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">
                {destination.tagline}
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4">
                {destination.title}
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mb-6">
                {destination.description}
              </p>
              <Link href="/#destinations">
                <Button 
                  variant="outline" 
                  className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux destinations
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-slate-900/50 backdrop-blur-sm border-y border-slate-800/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Durée</p>
                <p className="text-sm font-medium text-white">{destination.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Calendar className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Période</p>
                <p className="text-sm font-medium text-white">{destination.period}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Users className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Groupe</p>
                <p className="text-sm font-medium text-white">Max 12 personnes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Tarif</p>
                <p className="text-sm font-medium text-white">{destination.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl text-white mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                  Points Forts du Voyage
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800/50"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl text-white mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-amber-500" />
                  Programme Détaillé
                </h2>
                <div className="space-y-6">
                  {destination.itinerary.map((day, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative pl-8 pb-8 border-l-2 border-amber-500/30 last:pb-0"
                    >
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-amber-500 border-4 border-slate-950" />
                      <div className="bg-slate-900/50 border border-slate-800/50 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-medium text-amber-500 uppercase tracking-wider">
                            Jour {day.day}
                          </span>
                        </div>
                        <h3 className="text-xl font-medium text-white mb-3">
                          {day.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                          {day.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Info Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Tabs defaultValue="safety" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-900/50 border border-slate-800/50">
                    <TabsTrigger value="safety" className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-500">
                      <Shield className="w-4 h-4 mr-2" />
                      Sécurité
                    </TabsTrigger>
                    <TabsTrigger value="culture" className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-500">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Notes Culturelles
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="safety" className="mt-6">
                    <Card className="bg-slate-900/50 border-slate-800/50">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-medium text-white mb-4">
                          Informations de Sécurité
                        </h3>
                        <ul className="space-y-3">
                          {destination.safetyInfo.map((info, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <Shield className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300">{info}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="culture" className="mt-6">
                    <Card className="bg-slate-900/50 border-slate-800/50">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-medium text-white mb-4">
                          Notes Culturelles
                        </h3>
                        <ul className="space-y-3">
                          {destination.culturalNotes.map((note, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <BookOpen className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300">{note}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24"
              >
                <Card className="bg-slate-900/50 border-slate-800/50 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <p className="text-sm text-slate-400 mb-2">À partir de</p>
                      <p className="text-4xl font-serif text-white">
                        {destination.price.replace('Dès ', '')}
                      </p>
                      <p className="text-sm text-slate-400 mt-1">par personne</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <h3 className="font-medium text-white flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-amber-500" />
                        Ce qui est inclus
                      </h3>
                      <ul className="space-y-2">
                        {destination.included.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="text-amber-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/reservation">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-medium py-6">
                        Réserver Maintenant
                      </Button>
                    </Link>

                    <p className="text-xs text-center text-slate-500 mt-4">
                      Annulation gratuite jusqu'à 30 jours avant le départ
                    </p>
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <Card className="bg-slate-900/50 border-slate-800/50 mt-6">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-white mb-3">
                      Besoin d'aide ?
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">
                      Nos experts en voyage temporel sont à votre disposition pour répondre à toutes vos questions.
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-amber-500/30 text-amber-500 hover:bg-amber-500/10">
                        Contacter un Expert
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
