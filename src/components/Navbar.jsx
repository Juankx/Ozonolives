import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Empresa', path: '/empresa' },
    { name: 'Repuestos', path: '/repuestos' },
    { name: 'Contacto', path: '/contacto' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/OZONOLIVE.png" 
              alt="Ozonolives Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-primary-600'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:text-primary-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Certifications Logos - Center */}
          <div className="hidden lg:flex items-center space-x-4">
            <img 
              src="/images/ISO9000.jpg" 
              alt="ISO 9000" 
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src="/images/WATERQUALITYASSOCIATION.png" 
              alt="Water Quality Association" 
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src="/images/FDA.png" 
              alt="FDA" 
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src="/images/CE.png" 
              alt="CE" 
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src="/images/NSF.png" 
              alt="NSF" 
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Certifications */}
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-3">
              <img 
                src="/images/ISO9000.jpg" 
                alt="ISO 9000" 
                className="h-6 w-auto opacity-80"
              />
              <img 
                src="/images/WATERQUALITYASSOCIATION.png" 
                alt="Water Quality Association" 
                className="h-6 w-auto opacity-80"
              />
              <img 
                src="/images/FDA.png" 
                alt="FDA" 
                className="h-6 w-auto opacity-80"
              />
              <img 
                src="/images/CE.png" 
                alt="CE" 
                className="h-6 w-auto opacity-80"
              />
              <img 
                src="/images/NSF.png" 
                alt="NSF" 
                className="h-6 w-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
