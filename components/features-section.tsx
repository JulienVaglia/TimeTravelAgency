"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Sécurité Absolue",
    description:
      "Notre technologie brevetée de Bouclier Temporel assure une protection complète tout au long de votre voyage, surveillée 24/7 par notre centre de contrôle quantique.",
  },
  {
    icon: Eye,
    title: "Immersion Totale",
    description:
      "Vivez l'histoire avec tous vos sens. Notre technologie de synchronisation neuronale vous permet de vous immerger pleinement dans chaque époque tout en restant invisible.",
  },
  {
    icon: Users,
    title: "Guides Experts",
    description:
      "Chaque voyage est dirigé par des Chrononautes certifiés, dotés de décennies d'expérience temporelle et d'une expertise approfondie de leurs périodes assignées.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">
            Pourquoi nous choisir
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white text-balance">
            L'Excellence TimeTravel
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group text-center"
            >
              {/* Icon Container with Glassmorphism */}
              <div className="relative inline-flex mb-8">
                <div className="w-20 h-20 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-amber-500" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 className="font-serif text-2xl text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed max-w-sm mx-auto text-pretty">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
