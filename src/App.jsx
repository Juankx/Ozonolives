import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/ProductoDetalle'
import Servicios from './pages/Servicios'
import Empresa from './pages/Empresa'
import Repuestos from './pages/Repuestos'
import Contacto from './pages/Contacto'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/repuestos" element={<Repuestos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
