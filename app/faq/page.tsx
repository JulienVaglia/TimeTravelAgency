"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <div className="pt-20">
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
