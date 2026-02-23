export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-20 overflow-hidden bg-dark">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Image Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] mix-blend-screen"
                    style={{ backgroundImage: "url('/hero_bg_network_1771852769443.png')" }}
                />

                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-brand/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-brand/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
                {/* Logo */}
                <div className="mb-8 md:mb-10 animate-fade-in mx-auto flex justify-center w-full">
                    <img
                        src="/logo-colorida-deskchat-horizontal.png"
                        alt="DeskChat — Código Fonte"
                        className="h-10 md:h-14"
                    />
                </div>

                {/* Headline */}
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 animate-fade-in-up text-balance">
                    Tenha seu próprio sistema de atendimento no WhatsApp e{' '}
                    <span className="text-shimmer">comece a faturar ainda hoje.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-14 animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
                    Descubra como instalar um software profissional com sua marca, criar seus planos e cobrar mensalidade — <strong className="text-gray-200">sem programação, sem mensalidade, com liberdade total.</strong>
                </p>

                {/* VSL Video Placeholder */}
                <div className="animate-fade-in-up w-full flex justify-center perspective-container mt-6" style={{ animationDelay: '0.4s' }}>
                    <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 video-3d-effect">
                        {/* 16:9 aspect ratio container */}
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            {/* Placeholder — will be replaced with Panda Video embed */}
                            <div className="absolute inset-0 bg-gradient-to-br from-dark-card to-dark-surface flex flex-col items-center justify-center gap-4">
                                {/* Play icon */}
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-green-brand/20 to-cyan-brand/20 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-xl drop-shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-green-brand ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <p className="text-gray-500 text-sm md:text-base font-medium mt-2">Vídeo em produção</p>
                                {/* Decorative bars */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-brand via-cyan-brand to-green-brand opacity-40" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
