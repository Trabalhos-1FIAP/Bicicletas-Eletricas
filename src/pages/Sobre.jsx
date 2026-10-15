import { Link } from 'react-router-dom'

const marcos = [
  { ano: '2021', texto: 'Primeira oficina em São Paulo, com três protótipos montados à mão.' },
  { ano: '2023', texto: 'Linha urbana completa e 2.000 bicicletas rodando na cidade.' },
  { ano: '2026', texto: 'Quatro modelos, assistência técnica própria e bateria com 2 anos de garantia.' },
]

const valores = [
  {
    titulo: 'Feita para durar',
    texto: 'Quadro de alumínio, peças substituíveis e manutenção simples. Bicicleta não deveria ser produto descartável.',
  },
  {
    titulo: 'Preço honesto',
    texto: 'Vendemos direto, sem revenda no meio do caminho. O que você paga é bicicleta, não margem de loja.',
  },
  {
    titulo: 'Suporte de gente',
    texto: 'Oficina própria em São Paulo e atendimento humano para dúvida, revisão e garantia.',
  },
]

export default function Sobre() {
  return (
    <main>
      <section className="bg-carvao text-claro">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="text-sm font-extrabold uppercase tracking-widest text-volt">Quem somos</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            Tirando carros<br />da <span className="text-volt">rua desde 2021.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-claro/85">
            A Volt Bikes nasceu numa garagem em São Paulo com uma pergunta simples: por que atravessar
            a cidade tem que ser caro, lento e cansativo?
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1636512956695-326e80029848?w=1200&q=80&auto=format&fit=crop"
          alt="Bicicleta elétrica Volt apoiada em um muro"
          className="aspect-[4/5] w-full object-cover"
        />
        <div>
          <h2 className="text-4xl font-black uppercase md:text-5xl">Nossa história</h2>
          <p className="mt-5 text-lg leading-relaxed">
            Começamos consertando bicicletas de amigos e adaptando motores em quadros usados. Quando a
            fila de pedidos passou de cinquenta pessoas, viramos fabricante.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Hoje projetamos cada modelo pensando em quem pedala todo dia: subida de ladeira, chuva,
            bagageiro cheio e tomada de casa.
          </p>

          <ul className="mt-10 border-t-2 border-carvao">
            {marcos.map((m) => (
              <li key={m.ano} className="flex gap-6 border-b border-carvao/20 py-4">
                <span className="w-16 shrink-0 text-xl font-black">{m.ano}</span>
                <span className="text-carvao/80">{m.texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-grafite text-claro">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-4xl font-black uppercase md:text-5xl">No que acreditamos</h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {valores.map((v, i) => (
              <li key={v.titulo} className="border-t-4 border-volt pt-5">
                <span className="text-sm font-black text-volt">0{i + 1}</span>
                <h3 className="mt-2 text-2xl font-extrabold">{v.titulo}</h3>
                <p className="mt-3 text-claro/75 leading-relaxed">{v.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col items-start gap-6 border-4 border-carvao p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black uppercase md:text-4xl">Quer conhecer de perto?</h2>
            <p className="mt-2 text-lg">Av. Paulista, 1000 — seg a sáb, 9h às 19h.</p>
          </div>
          <Link
            to="/contato"
            className="bg-carvao px-8 py-4 font-extrabold uppercase text-claro hover:bg-volt hover:text-carvao"
          >
            Agendar test ride
          </Link>
        </div>
      </section>
    </main>
  )
}
