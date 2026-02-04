"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { getAllDestinations } from "@/lib/destinations-data"

const destinations = getAllDestinations()

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-24 md:py-32 bg-slate-950">
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
            Choisissez votre Voyage
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white text-balance">
            Nos Époques Exclusives
          </h2>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.id}`}
            >
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-amber-500/30 transition-all duration-500 cursor-pointer"
              >
              {/* Image Container */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-amber-500 text-sm tracking-wide uppercase">
                  {destination.tagline}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white mt-2 mb-3">
                  {destination.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">{destination.price}</span>
                  <motion.span
                    className="text-amber-500 text-sm font-medium flex items-center gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    Découvrir
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.span>
                </div>
              </div>

              {/* Glassmorphism highlight effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
