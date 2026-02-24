import { useState } from 'react'

const KIWIFY_URL = '#' // Placeholder — substituir pela URL real da Kiwify

export default function LeadForm({ buttonText = '👉 Quero garantir minha vaga agora', source = 'generic' }) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, '').slice(0, 11)
        if (digits.length <= 2) return digits
        if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim() || phone.replace(/\D/g, '').length < 10) return

        setSubmitted(true)

        // Salvar lead (pode integrar com webhook/API futuramente)
        console.log(`[DeskChat Lead] Source: ${source}`, { name, phone })

        // Redirecionar para Kiwify após breve delay
        setTimeout(() => {
            window.open(KIWIFY_URL, '_blank')
        }, 500)
    }

    if (submitted) {
        return (
            <div className="text-center py-6 animate-scale-in flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-brand/20 mb-4">
                    <svg className="w-8 h-8 text-green-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p className="text-xl font-bold text-white mb-1">Estamos te redirecionando...</p>
                <p className="text-gray-400 text-sm">Aguarde um momento</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
            <div className="w-full">
                <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-base font-medium focus:outline-none focus:ring-2 focus:ring-green-brand/50 focus:border-green-brand/50 transition-all duration-300 backdrop-blur-sm"
                />
            </div>
            <div className="w-full">
                <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-base font-medium focus:outline-none focus:ring-2 focus:ring-green-brand/50 focus:border-green-brand/50 transition-all duration-300 backdrop-blur-sm"
                />
            </div>
            <button
                type="submit"
                className="group relative w-full px-8 py-5 rounded-xl bg-gradient-to-r from-green-brand to-cyan-brand text-dark font-extrabold text-lg cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(74,222,128,0.5)] active:scale-[0.98] glow-green block"
            >
                {/* Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer x-0 pointer-events-none" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {buttonText}
                </span>
            </button>
        </form>
    )
}
