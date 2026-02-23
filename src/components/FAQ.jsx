import { useState } from 'react'

const faqItems = [
    {
        q: 'Preciso pagar mensalidade para usar o DeskChat?',
        a: 'Não. O pagamento é único. Você não paga mensalidade.',
    },
    {
        q: 'Pago por usuário, conexão ou campanha?',
        a: 'Não. Você define quantos usuários e como vai usar.',
    },
    {
        q: 'Preciso saber programar?',
        a: 'Não. Tudo é explicado passo a passo, com suporte.',
    },
    {
        q: 'É difícil de instalar?',
        a: 'Não. Em poucas horas o sistema já está rodando com sua marca.',
    },
    {
        q: 'Preciso reinstalar a cada cliente?',
        a: 'Não. O sistema é multiempresa. Você cadastra novos clientes dentro da plataforma.',
    },
    {
        q: 'Posso cobrar mensalidade dos meus clientes?',
        a: 'Sim. Essa é a ideia. Você define planos e valores.',
    },
    {
        q: 'E se eu não gostar?',
        a: 'Você tem 7 dias de garantia total para pedir reembolso.',
    },
]

function AccordionItem({ item, isOpen, onClick }) {
    return (
        <div className="border-b border-white/10 last:border-b-0">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left cursor-pointer group"
                aria-expanded={isOpen}
            >
                <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${isOpen ? 'text-green-brand' : 'text-gray-200 group-hover:text-white'}`}>
                    {item.q}
                </span>
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-green-brand/20 rotate-45' : 'bg-white/5 group-hover:bg-white/10'}`}>
                    <svg className={`w-4 h-4 transition-colors duration-200 ${isOpen ? 'text-green-brand' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </span>
            </button>
            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0 }}
            >
                <p className="text-gray-400 text-sm md:text-base leading-relaxed pb-5 md:pb-6 pr-12">
                    {item.a}
                </p>
            </div>
        </div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className="relative w-full py-20 md:py-32 px-4 overflow-hidden flex justify-center">
            {/* Background */}
            <div className="absolute inset-0 bg-dark-card" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-brand/20 to-transparent" />

            <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 text-balance">
                    Perguntas <span className="text-gradient">Frequentes</span>
                </h2>
                <p className="text-gray-400 text-center text-base md:text-lg mb-12 md:mb-16">
                    Tudo o que você precisa saber antes de começar
                </p>

                {/* Accordion */}
                <div className="w-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm px-6 md:px-8">
                    {faqItems.map((item, i) => (
                        <AccordionItem
                            key={i}
                            item={item}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>

                {/* Footer note */}
                <p className="text-center text-gray-500 text-sm mt-8">
                    Ainda tem dúvidas? Entre em contato com nosso suporte.
                </p>
            </div>
        </section>
    )
}
