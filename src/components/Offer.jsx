import LeadForm from './LeadForm'

const features = [
    'Sistema completo',
    'Código-fonte incluso',
    'Área de membros',
    'Suporte inicial',
]

export default function Offer() {
    return (
        <section className="relative w-full py-20 md:py-32 px-4 overflow-hidden flex justify-center">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-card via-dark to-dark" />

            {/* Decorative glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-brand/5 rounded-full blur-3xl" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-brand/20 to-transparent" />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center text-center">
                {/* Badge */}
                <div className="inline-flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-brand/10 border border-green-brand/20 text-green-brand text-sm font-semibold mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-brand animate-pulse-slow shrink-0" />
                    Valor por tempo limitado
                </div>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
                    Acesso completo ao <span className="text-gradient">DeskChat</span>
                </h2>

                {/* Features checklist */}
                <div className="w-full max-w-sm mx-auto mb-10 md:mb-12">
                    <ul className="space-y-4 text-left w-full mx-auto flex flex-col items-start px-8 sm:px-0">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 w-full">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-green-brand/20 flex items-center justify-center">
                                    <svg className="w-3.5 h-3.5 text-green-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-200 text-lg font-medium whitespace-nowrap">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Guarantee badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 mb-10 md:mb-12 mx-auto">
                    <span className="text-2xl shrink-0">🛡️</span>
                    <div className="text-left">
                        <p className="text-white font-bold text-sm">7 dias de garantia total</p>
                        <p className="text-gray-400 text-xs">Não gostou? Devolvemos 100% do valor</p>
                    </div>
                </div>

                {/* CTA Form */}
                <div className="w-full max-w-md mx-auto">
                    <LeadForm buttonText="👉 Quero garantir minha vaga agora" source="offer" />
                </div>
            </div>
        </section>
    )
}
