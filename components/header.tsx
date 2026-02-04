"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-amber-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <span className="font-serif text-xl text-white">TimeTravel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#destinations"
              className="text-white font-medium hover:text-amber-500 transition-colors text-sm tracking-wide drop-shadow-lg"
            >
              Destinations
            </Link>
            <Link
              href="/quiz"
              className="text-white font-medium hover:text-amber-500 transition-colors text-sm tracking-wide drop-shadow-lg"
            >
              Quiz
            </Link>
            <Link
              href="/#features"
              className="text-white font-medium hover:text-amber-500 transition-colors text-sm tracking-wide drop-shadow-lg"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white font-medium hover:text-amber-500 transition-colors text-sm tracking-wide drop-shadow-lg"
            >
              Contact
            </Link>
            <Link href="/reservation">
              <button className="px-6 py-2 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 text-sm tracking-wide font-medium">
                Réserver
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-amber-500/20"
          >
            <div className="flex flex-col gap-4 py-6">
              <Link
                href="/#destinations"
                className="text-white font-medium hover:text-amber-500 transition-colors px-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/quiz"
                className="text-white font-medium hover:text-amber-500 transition-colors px-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quiz
              </Link>
              <Link
                href="/#features"
                className="text-white font-medium hover:text-amber-500 transition-colors px-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-white font-medium hover:text-amber-500 transition-colors px-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4">
                <Link href="/reservation">
                  <button className="w-full px-6 py-2 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 font-medium">
                    Réserver
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
