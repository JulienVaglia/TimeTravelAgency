import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DestinationsSection } from "@/components/destinations-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <FeaturesSection />
      <Footer />
      <ChatbotWidget />
    </main>
  )
}
