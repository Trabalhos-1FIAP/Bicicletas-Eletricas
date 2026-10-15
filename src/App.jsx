import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import "./css/style.css"

export default function App() {
  return (
    <div className="min-h-screen bg-claro text-carvao font-sans">
      <Header />
      <Home/>
      <Footer />
    </div>
  )
}
