import { useState, useEffect, lazy, Suspense } from 'react'
import Hero from './components/Hero'

const Pain = lazy(() => import('./components/Pain'))
const Market = lazy(() => import('./components/Market'))
const Offer = lazy(() => import('./components/Offer'))
const FAQ = lazy(() => import('./components/FAQ'))

// const REVEAL_DELAY_MS = 180000 // 180.000ms — reativar quando o vídeo estiver pronto
const REVEAL_DELAY_MS = 0

export default function App() {
  const [showRest, setShowRest] = useState(REVEAL_DELAY_MS === 0)

  useEffect(() => {
    if (REVEAL_DELAY_MS === 0) return
    const timer = setTimeout(() => {
      setShowRest(true)
    }, REVEAL_DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-[#0A0F1C]">
      {/* Block 1 — Always visible */}
      <Hero />

      {/* Blocks 2–5 — Revealed after timer */}
      {showRest && (
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-green-brand/30 border-t-green-brand rounded-full animate-spin" />
          </div>
        }>
          <div className="animate-fade-in-up">
            <Pain />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Market />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Offer />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <FAQ />
          </div>
        </Suspense>
      )}

      {/* Footer minimal */}
      <footer className="relative py-8 px-4 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <img
            src="/logo-colorida-deskchat-horizontal.png"
            alt="DeskChat"
            className="h-6 mx-auto mb-3 opacity-40"
          />
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} DeskChat. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
