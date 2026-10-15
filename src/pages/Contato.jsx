import { useState } from 'react'

const modelos = ['Volt City', 'Volt Trail', 'Volt Leve', 'Volt Pro']

const infos = [
  { titulo: 'Loja', linhas: ['Av. Paulista, 1000', 'São Paulo — SP'] },
  { titulo: 'Horário', linhas: ['Seg a sáb, 9h às 19h'] },
  { titulo: 'Direto com a gente', linhas: ['(11) 4000-0000', 'contato@voltbikes.com.br'] },
]

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  const campo = 'border-2 border-carvao bg-white px-4 py-3 focus:border-volt focus:outline-none'
  const rotulo = 'mb-1 block text-sm font-extrabold uppercase tracking-wide'

  function enviar(e) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <main>
      <section className="bg-carvao text-claro">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="text-sm font-extrabold uppercase tracking-widest text-volt">Contato</p>
          <h1 className="mt-4 max-w-2xl text-5xl font-black uppercase leading-[0.95] md:text-6xl">
            Agende um <span className="text-volt">test ride.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-claro/85">
            Vinte minutos pedalando valem mais que qualquer ficha técnica. Escolha o modelo e a gente
            separa a bike para você na loja.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-20 md:grid-cols-[1.3fr_1fr]">
        <div>
          {enviado ? (
            <div className="border-4 border-carvao p-10">
              <p className="text-3xl font-black uppercase">Pedido enviado</p>
              <p className="mt-3 text-lg">
                A gente liga em até 1 dia útil para confirmar o horário.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-8 bg-carvao px-6 py-3 font-extrabold uppercase text-claro hover:bg-volt hover:text-carvao"
              >
                Enviar outro
              </button>
            </div>
          ) : (
            <form onSubmit={enviar} className="grid gap-5">
              <div>
                <label htmlFor="nome" className={rotulo}>Nome</label>
                <input id="nome" name="nome" required placeholder="Seu nome completo" className={`${campo} w-full`} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefone" className={rotulo}>Telefone</label>
                  <input id="telefone" name="telefone" type="tel" required placeholder="(11) 90000-0000" className={`${campo} w-full`} />
                </div>
                <div>
                  <label htmlFor="email" className={rotulo}>E-mail</label>
                  <input id="email" name="email" type="email" required placeholder="voce@email.com" className={`${campo} w-full`} />
                </div>
              </div>

              <div>
                <label htmlFor="modelo" className={rotulo}>Modelo</label>
                <select id="modelo" name="modelo" required defaultValue="" className={`${campo} w-full`}>
                  <option value="" disabled>Escolha um modelo</option>
                  {modelos.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className={rotulo}>Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  placeholder="Prefere algum dia e horário?"
                  className={`${campo} w-full`}
                />
              </div>

              <button
                type="submit"
                className="justify-self-start bg-carvao px-8 py-4 font-extrabold uppercase text-claro hover:bg-volt hover:text-carvao"
              >
                Agendar
              </button>
            </form>
          )}
        </div>

        <aside>
          <ul className="grid gap-8">
            {infos.map((info) => (
              <li key={info.titulo} className="border-t-4 border-carvao pt-4">
                <h2 className="text-sm font-black uppercase tracking-widest">{info.titulo}</h2>
                {info.linhas.map((linha) => (
                  <p key={linha} className="mt-1 text-lg">{linha}</p>
                ))}
              </li>
            ))}
          </ul>

          <div className="mt-10 bg-grafite p-8 text-claro">
            <p className="text-2xl font-extrabold">Sem compromisso</p>
            <p className="mt-2 text-claro/75 leading-relaxed">
              O test ride é gratuito e não exige cadastro. Leve documento com foto.
            </p>
          </div>
        </aside>
      </section>
    </main>
  )
}
