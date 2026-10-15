import { useState } from 'react'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)
  const campo = 'border-2 border-carvao bg-white px-4 py-3 focus:border-volt focus:outline-none'

  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="mb-8 text-4xl font-black uppercase md:text-5xl">Agende um test ride</h2>

      {enviado ? (
        <p className="text-xl font-semibold">Pedido enviado. Ligamos em até 1 dia.</p>
      ) : (
        <div className="grid max-w-xl gap-4">
          <input placeholder="Seu nome" className={campo} />
          <input type="tel" placeholder="Seu telefone" className={campo} />
          <textarea rows="4" placeholder="Qual modelo quer testar?" className={campo} />
          <button
            onClick={() => setEnviado(true)}
            className="justify-self-start bg-carvao px-8 py-4 font-extrabold uppercase text-claro hover:bg-volt hover:text-carvao"
          >
            Agendar
          </button>
        </div>
      )}
    </section>
  )
}