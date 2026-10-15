const numeros = [
  { valor: '80 km', texto: 'de autonomia' },
  { valor: '25 km/h', texto: 'com assistência' },
  { valor: '2 anos', texto: 'de garantia' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
      <img
        src="https://images.unsplash.com/photo-1636945254914-819f1011d1f8?w=1200&q=80&auto=format&fit=crop"
        alt="Homem ao lado de uma bicicleta elétrica na calçada"
        className="aspect-[4/5] w-full object-cover"
      />
      <div>
        <h2 className="text-4xl font-black uppercase md:text-5xl">Feita para a cidade</h2>
        <p className="mt-5 text-lg leading-relaxed">
          Motor silencioso, bateria removível e quadro leve. Chegue no trabalho sem suar.
        </p>
        <dl className="mt-10 grid grid-cols-3 gap-4 border-t-2 border-carvao pt-6">
          {numeros.map((n) => (
            <div key={n.valor}>
              <dt className="text-2xl font-black md:text-3xl">{n.valor}</dt>
              <dd className="text-sm text-carvao/70">{n.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}