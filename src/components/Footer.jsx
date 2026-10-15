export default function Footer() {
  return (
    <footer className="bg-carvao text-claro/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:justify-between">
        <div>
          <p className="text-xl font-black text-claro">
            VOLT<span className="text-volt">/</span>BIKES
          </p>
          <p>Av. Paulista, 1000 — São Paulo</p>
        </div>
        <div>
          <p>Seg a sáb, 9h às 19h</p>
          <a href="https://instagram.com" className="hover:text-volt">Instagram</a>
        </div>
      </div>
      <p className="py-4 text-center text-sm">© 2026 Volt Bikes</p>
    </footer>
  )
}