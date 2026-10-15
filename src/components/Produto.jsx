const bikes = [
    {
        nome: 'Volt City',
        tipo: 'Urbana',
        autonomia: '60 km',
        preco: 'R$ 6.990',
        img: 'https://images.unsplash.com/photo-1636512956594-b717994705ae?w=1200&q=80&auto=format&fit=crop',
    },
    {
        nome: 'Volt Trail',
        tipo: 'Trilha',
        autonomia: '70 km',
        preco: 'R$ 9.490',
        img: 'https://images.unsplash.com/photo-1635816047399-76858585e45d?w=1200&q=80&auto=format&fit=crop',
    },
    {
        nome: 'Volt Leve',
        tipo: 'Passeio',
        autonomia: '50 km',
        preco: 'R$ 5.790',
        img: 'https://images.unsplash.com/photo-1637543376082-68ea9235516c?w=1200&q=80&auto=format&fit=crop',
    },
    {
        nome: 'Volt Pro',
        tipo: 'Longa distância',
        autonomia: '80 km',
        preco: 'R$ 11.990',
        img: 'https://images.unsplash.com/photo-1636512956695-326e80029848?w=1200&q=80&auto=format&fit=crop',
    },
]

export default function Produtos() {
    return (
        <>
            <section className="relative isolate overflow-hidden bg-carvao text-claro">
                <img
                    src="https://images.unsplash.com/photo-1638157527959-a374fcf0040e?w=1200&q=80&auto=format&fit=crop"
                    alt="Mulher pedalando uma bicicleta elétrica na cidade"
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
                />
                <div className="mx-auto max-w-6xl px-5 py-28 md:py-40">
                    <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] md:text-8xl">
                        Pedale menos.<br />Vá <span className="text-volt">mais longe.</span>
                    </h1>
                    <p className="mt-6 max-w-md text-lg text-claro/85">
                        Bicicletas elétricas com até 80 km de autonomia. Carregue na tomada de casa.
                    </p>
                    <a
                        href="#produtos"
                        className="mt-8 inline-block bg-volt px-8 py-4 font-extrabold uppercase text-carvao hover:bg-claro"
                    >
                        Ver modelos
                    </a>
                </div>
            </section>

            <section id="produtos" className="bg-carvao text-claro">
                <div className="mx-auto max-w-6xl px-5 py-20">
                    <h2 className="mb-10 text-4xl font-black uppercase md:text-5xl">Modelos</h2>

                    <ul className="grid gap-6 sm:grid-cols-2">
                        {bikes.map((b) => (
                            <li key={b.nome} className="bg-grafite">
                                <img src={b.img} alt={`Bicicleta elétrica ${b.nome}`} className="aspect-[4/3] w-full object-cover" />
                                <div className="p-6">
                                    <p className="text-sm font-semibold uppercase text-volt">{b.tipo}</p>
                                    <h3 className="mt-1 text-2xl font-extrabold">{b.nome}</h3>
                                    <p className="text-claro/70">Autonomia de {b.autonomia}</p>
                                    <div className="mt-5 flex items-center justify-between">
                                        <span className="text-2xl font-black">{b.preco}</span>
                                        <button className="bg-volt px-5 py-2 font-extrabold uppercase text-carvao hover:bg-claro">
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}
