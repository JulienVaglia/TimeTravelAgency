"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Container Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Paris_Hero_16x9.jpg"
        >
          <source src="https://zpgoxmvadlcsfvipggpf.supabase.co/storage/v1/object/public/TimeTravelMedia/Timeline-Final.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-amber-500 text-sm tracking-[0.3em] uppercase mb-6">
            Voyage Temporel de Luxe
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 text-balance"
        >
          Voyagez Au-delà du Temps.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 text-pretty"
        >
          Vivez les moments les plus extraordinaires de l'histoire avec un luxe inégalé et une sécurité absolue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#destinations"
            className="inline-block px-10 py-4 border-2 border-amber-500 text-amber-500 rounded-full font-medium hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 text-lg tracking-wide group"
          >
            <span className="flex items-center gap-2">
              Explorer les Époques
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - inchangé visuellement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-amber-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
