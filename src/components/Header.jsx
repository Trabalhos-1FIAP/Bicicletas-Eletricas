import { useState } from 'react'

const links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#produtos', label: 'Bikes' },
    { href: '#contato', label: 'Contato' },
]

export default function Header() {
    const [aberto, setAberto] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-carvao text-claro">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <a href="#" className="text-2xl font-black tracking-tight">
                    VOLT<span className="text-volt">/</span>BIKES
                </a>

                <ul className="hidden gap-8 font-semibold md:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="hover:text-volt focus-visible:outline-2 focus-visible:outline-volt">
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setAberto(!aberto)}
                    className="text-3xl leading-none md:hidden"
                    aria-label="Abrir menu"
                    aria-expanded={aberto}
                >
                    {aberto ? '×' : '≡'}
                </button>
            </nav>

            {aberto && (
                <ul className="flex flex-col gap-4 px-5 pb-5 text-lg md:hidden">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} onClick={() => setAberto(false)}>{l.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}
