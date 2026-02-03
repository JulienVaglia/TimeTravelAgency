"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react"

type Message = {
  id: string
  text: string
  sender: "bot" | "user"
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  // Message d'accueil par défaut
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! Je suis Chronos, votre assistant virtuel. Une question sur nos voyages temporels ? Je suis là pour vous aider !",
      sender: "bot",
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll automatique vers le bas à chaque nouveau message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const handleSend = async () => {
    if (!inputValue.trim()) return

    // 1. Ajouter le message de l'utilisateur
    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
    }
    setMessages((prev) => [...prev, userMsg])
    setInputValue("")
    setIsTyping(true)

    try {
      // 2. Appel à ton API locale (qui contacte Mistral)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text }),
      });

      if (!response.ok) throw new Error("Erreur réseau");

      const data = await response.json();

      // 3. Ajouter la réponse de l'IA
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: "bot",
      }
      setMessages((prev) => [...prev, botMsg])
    } catch (error) {
      console.error(error)
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "Désolé, une perturbation temporelle empêche la connexion (Vérifiez votre clé API ou le terminal).",
        sender: "bot",
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend()
  }

  return (
    <>
      {/* Bouton Flottant (Disparaît quand le chat est ouvert) */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 transition-all duration-300 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Ouvrir l'assistant"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-30" />
      </motion.button>

      {/* Fenêtre de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* En-tête */}
            <div className="bg-slate-950 p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Chronos AI</h3>
                  <span className="text-xs text-amber-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Connecté
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Zone des messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-amber-600 text-white rounded-br-none"
                        : "bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <Sparkles className="w-3 h-3 text-amber-500 mb-1 inline-block mr-2" />
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Animation de frappe "..." */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-700 flex gap-1">
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Zone de saisie */}
            <div className="p-4 bg-slate-950 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Posez une question..."
                  className="flex-1 bg-slate-900 text-white text-sm rounded-full px-4 py-3 border border-slate-800 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-slate-950 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}