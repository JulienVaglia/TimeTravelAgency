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
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
