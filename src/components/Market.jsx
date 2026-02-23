import LeadForm from './LeadForm'

const stats = [
    { icon: '📱', number: '+21 milhões', label: 'de empresas no Brasil' },
    { icon: '🏪', number: '+90%', label: 'são pequenas ou micro' },
    { icon: '💬', number: 'Quase todas', label: 'usam WhatsApp' },
]

const features = [
    { icon: '🎨', title: 'Coloque sua marca', desc: 'Sistema 100% white-label com a identidade do seu negócio' },
    { icon: '💰', title: 'Cobre mensalidade', desc: 'Defina seus preços e receba recorrente dos seus clientes' },
    { icon: '📦', title: 'Crie planos', desc: 'Monte pacotes com recursos diferentes para cada perfil' },
    { icon: '🔒', title: 'Sem mensalidade', desc: 'Pagamento único. Você não paga mensalidade pra ninguém' },
]

export default function Market() {
    return (
        <section className="relative w-full py-20 md:py-32 px-4 overflow-hidden flex justify-center">
            {/* Background */}
            <div className="absolute inset-0 bg-dark-card" />

            {/* Decorative */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-brand/20 to-transparent" />
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-brand/5 rounded-full blur-3xl" />

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
                {/* Section title */}
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 text-balance">
                    O mercado <span className="text-gradient">já existe.</span>
                </h2>
                <p className="text-gray-400 text-center text-lg mb-12 md:mb-16 max-w-2xl mx-auto text-balance">
                    Essas empresas já pagam caro para não perder clientes.
                </p>

                {/* Stats */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="text-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-green-brand/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <span className="text-4xl mb-3 block">{stat.icon}</span>
                            <p className="font-display text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.number}</p>
                            <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* What is DeskChat */}
                <div className="text-center mb-12 md:mb-16 w-full">
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 text-balance">
                        O <span className="text-gradient">DeskChat</span> é um sistema profissional
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-300">
                        de atendimento via WhatsApp.
                    </p>
                    <p className="text-gray-400 text-lg mt-4">Com ele, você pode:</p>
                </div>

                {/* Features grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-20">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="group p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-green-brand/30 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1"
                        >
                            <span className="text-3xl md:text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                            <h4 className="font-display text-lg md:text-xl font-bold text-white mb-2">{feature.title}</h4>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="w-full max-w-md mx-auto">
                    <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest font-medium text-center">Comece agora</p>
                    <LeadForm buttonText="Quero ter meu próprio sistema" source="market" />
                </div>
            </div>
        </section>
    )
}
