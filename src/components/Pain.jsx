import LeadForm from './LeadForm'

export default function Pain() {
    return (
        <section className="relative w-full py-20 md:py-32 px-4 overflow-hidden flex justify-center bg-dark">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-surface via-dark to-dark opacity-80" />
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-cyan-brand/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-green-brand/10 rounded-full blur-[100px]" />

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">

                {/* Intro - The Status Quo */}
                <div className="text-center mb-16 md:mb-24 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-8">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-slow" />
                        A dura realidade
                    </div>

                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
                        Você ajuda empresas. Resolve problemas. <br className="hidden md:block" />
                        <span className="text-shimmer">Entrega resultado.</span>
                    </h2>

                    <div className="p-[1px] rounded-2xl bg-gradient-to-r from-red-500/30 to-orange-500/10 max-w-2xl mx-auto shadow-xl">
                        <div className="bg-[#111420] rounded-2xl px-6 py-5 md:px-8 md:py-6 border border-white/5">
                            <p className="text-xl md:text-2xl font-semibold text-white">
                                Mas quem fica com a recorrência? <br />
                                <span className="text-red-400 mt-2 block font-bold">👉 A ferramenta.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* The Contrast Grid */}
                <div className="w-full grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
                    {/* Card 1: The Problem */}
                    <div className="flex flex-col gap-6 p-8 md:p-10 rounded-3xl bg-[#111420] border border-white/5 relative overflow-hidden group hover:border-red-500/20 transition-colors shadow-2xl">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-red-500 group-hover:opacity-10 transition-opacity">
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                        </div>

                        <h3 className="text-2xl font-display font-bold text-white mb-2">O seu lado atual</h3>

                        <ul className="space-y-5 relative z-10 flex-grow">
                            <li className="flex gap-4 text-gray-400 text-lg items-start">
                                <span className="text-red-500 mt-1 shrink-0">✕</span>
                                <span>Você trabalha duro na implantação.</span>
                            </li>
                            <li className="flex gap-4 text-gray-400 text-lg items-start">
                                <span className="text-red-500 mt-1 shrink-0">✕</span>
                                <span>A ferramenta fatura todo mês.</span>
                            </li>
                            <li className="flex gap-4 text-gray-400 text-lg items-start">
                                <span className="text-red-500 mt-1 shrink-0">✕</span>
                                <span>Quem usa o software, paga a mensalidade.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2: The Solution */}
                    <div className="flex flex-col gap-6 p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#111827] to-dark-surface border border-green-brand/20 relative overflow-hidden group hover:border-green-brand/40 transition-colors glow-green shadow-2xl">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.05] text-green-brand group-hover:opacity-10 transition-opacity">
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        </div>

                        <h3 className="text-2xl font-display font-bold text-white mb-2">O lado DeskChat</h3>

                        <ul className="space-y-5 relative z-10 flex-grow">
                            <li className="flex gap-4 text-gray-200 text-lg items-start">
                                <span className="text-green-brand mt-1 shrink-0">✓</span>
                                <span>O problema não é automação. É quem é dono dela.</span>
                            </li>
                            <li className="flex gap-4 text-gray-200 text-lg font-medium items-start">
                                <span className="text-green-brand mt-1 shrink-0">✓</span>
                                <span>Quem é dono do software, cobra a mensalidade.</span>
                            </li>
                            <li className="flex gap-4 text-white text-xl font-bold mt-4 items-start bg-green-brand/10 p-4 rounded-xl border border-green-brand/20">
                                <span className="text-green-brand mt-1 shrink-0">✓</span>
                                <span className="text-gradient">O DeskChat te coloca do lado de quem cobra.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="w-full max-w-md mx-auto text-center">
                    <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest font-medium">Vire o jogo hoje mesmo</p>
                    <LeadForm buttonText="Quero ser dono do meu software" source="pain" />
                </div>
            </div>
        </section>
    )
}
