import { useState } from 'react'
import { Link } from 'react-router-dom'

const submenuHome = [
    { hash: '#produtos', label: 'Produtos' },
    { hash: '#informacoes', label: 'Informações' },
]

export default function Header() {
    const [aberto, setAberto] = useState(false)
    const [dropdownAberto, setDropdownAberto] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-carvao text-claro">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <Link to="/" className="text-2xl font-black tracking-tight">
                    VOLT<span className="text-volt">/</span>BIKES
                </Link>

                <ul className="hidden gap-8 font-semibold md:flex">
                    <li
                        className="relative"
                        onMouseEnter={() => setDropdownAberto(true)}
                        onMouseLeave={() => setDropdownAberto(false)}
                    >
                        <Link
                            to="/"
                            onClick={() => setDropdownAberto(true)}
                            className="hover:text-volt focus-visible:outline-2 focus-visible:outline-volt"
                        >
                            Home
                        </Link>

                        {dropdownAberto && (
                            <ul className="absolute left-0 top-full min-w-[180px] bg-carvao py-2 shadow-lg">
                                {submenuHome.map((item) => (
                                    <li key={item.hash}>
                                        <Link
                                            to={`/${item.hash}`}
                                            onClick={() => setDropdownAberto(false)}
                                            className="block px-4 py-2 hover:bg-grafite hover:text-volt"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link to="/contato" className="hover:text-volt focus-visible:outline-2 focus-visible:outline-volt">
                            Contato
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre" className="hover:text-volt focus-visible:outline-2 focus-visible:outline-volt">
                            Sobre
                        </Link>
                    </li>
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
                    <li>
                        <Link to="/" onClick={() => setAberto(false)} className="font-semibold">Home</Link>
                    </li>
                    {submenuHome.map((item) => (
                        <li key={item.hash} className="pl-4">
                            <Link to={`/${item.hash}`} onClick={() => setAberto(false)}>{item.label}</Link>
                        </li>
                    ))}
                    <li><Link to="/contato" onClick={() => setAberto(false)}>Contato</Link></li>
                    <li><Link to="/sobre" onClick={() => setAberto(false)}>Sobre</Link></li>
                </ul>
            )}
        </header>
    )
}
