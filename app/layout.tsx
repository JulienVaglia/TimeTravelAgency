import React from "react"
import type { Metadata } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ChatbotWidget } from "@/components/chatbot-widget"

const _geist = Geist({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TimeTravel Agency | Voyage Temporel de Luxe',
  description: "Vivez le passé comme jamais auparavant...",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <body className={`font-sans antialiased bg-slate-950`}>
        {children}
        <ChatbotWidget />
        <Analytics />
      </body>
    </html>
  )
}
