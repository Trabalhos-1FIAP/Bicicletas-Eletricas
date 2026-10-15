import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import "./css/style.css"
import ScrollToHash from './components/ScrollToHash'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-claro text-carvao font-sans">
        <Header />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
