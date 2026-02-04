"use client"

import { Clock } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  destinations: [
    { label: "Paris 1889", href: "/destinations/paris-1889" },
    { label: "Période Crétacé", href: "/destinations/cretace" },
    { label: "Florence 1504", href: "/destinations/florence-1504" },
  ],
  company: [
    { label: "À Propos", href: "#" },
    { label: "Sécurité & Protocoles", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Presse", href: "#" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Conditions Générales", href: "#" },
    { label: "Politique de Confidentialité", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <span className="font-serif text-xl text-white">TimeTravel</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pionnier du voyage temporel de luxe depuis 2089. Agréé par l'Autorité de Régulation Temporelle.
            </p>
            <div className="flex gap-4">
              {/* Social Links */}
              {["X", "Ig", "Fb"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300"
                  aria-label={`Suivez-nous sur ${social}`}
                >
                  <span className="text-xs font-medium">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">L'Agence</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} TimeTravel Agency. Tous droits réservés à travers toutes les lignes temporelles.
          </p>
          <p className="text-slate-600 text-xs">
            Licence Temporelle #TRA-2089-7749-LUXE
          </p>
        </div>
      </div>
    </footer>
  )
}
