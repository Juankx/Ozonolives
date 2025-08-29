import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductosOpen, setIsProductosOpen] = useState(false)
  const [isRepuestosOpen, setIsRepuestosOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const location = useLocation()

  // Cerrar todos los menús cuando cambie la página
  useEffect(() => {
    closeAllMenus()
  }, [location.pathname])

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos', hasDropdown: true },
    { name: 'Repuestos', path: '/repuestos', hasDropdown: true },
    { name: 'Contacto', path: '/contacto' }
  ]

  // Menú de productos con enlaces a páginas específicas
  const productosMenu = [
    {
      category: 'Equipos de Purificación a base de ozono',
      items: [
        { name: 'OZONO PET', path: '/producto/oz-001' },
        { name: 'Diamant Inox', path: '/producto/oz-002' },
        { name: 'GTOR', path: '/producto/oz-003' },
        { name: 'Cabezote Inox', path: '/producto/oz-004' },
        { name: 'Ozono Dispent', path: '/productos?category=equiposOzono' },
        { name: 'Línea Fiesta – Nova', path: '/productos?category=equiposOzono' },
        { name: 'Línea Fiesta – Manzana Verde', path: '/productos?category=equiposOzono' },
        { name: 'Línea Fiesta – Manzana Roja', path: '/productos?category=equiposOzono' },
        { name: 'Línea Fiesta – Vaca', path: '/productos?category=equiposOzono' },
        { name: 'Nova Touch', path: '/productos?category=equiposOzono' }
      ]
    },
    {
      category: 'Sistemas de filtración',
      items: [
        { name: 'Filtros de Polident (Sedimentos)', path: '/producto/sf-001' },
        { name: 'Filtros de Carbón Activado en Bloque', path: '/producto/sf-002' },
        { name: 'Filtros Granulados', path: '/producto/sf-003' },
        { name: 'Filtros Plisados', path: '/producto/sf-004' },
        { name: 'Filtros Mixtos', path: '/producto/sf-005' },
        { name: 'Filtros Mineralizadores', path: '/producto/sf-006' },
        { name: 'Sistema de filtración 2 etapas', path: '/productos?category=sistemasFiltracion' },
        { name: 'Sistema de filtración 3 etapas', path: '/productos?category=sistemasFiltracion' },
        { name: 'Sistema de filtración 4 etapas', path: '/productos?category=sistemasFiltracion' }
      ]
    },
    {
      category: 'Sistemas de Ósmosis Inversa',
      items: [
        { name: 'Ósmosis Inversa de 5 etapas', path: '/producto/so-001' },
        { name: 'Ósmosis Inversa de 6 etapas', path: '/productos?category=sistemasOsmosis' },
        { name: 'Ósmosis Inversa de 7 etapas', path: '/producto/so-002' },
        { name: 'Ósmosis Inversa de 5 etapas + Lámpara UV', path: '/productos?category=sistemasOsmosis' },
        { name: 'Ósmosis Inversa de 6 etapas + Lámpara UV', path: '/productos?category=sistemasOsmosis' },
        { name: 'Ósmosis Inversa de 7 etapas + Lámpara UV', path: '/producto/so-002' }
      ]
    }
  ]

  // Menú de repuestos con enlaces a páginas específicas
  const repuestosMenu = [
    {
      category: 'Repuestos y partes',
      items: [
        { name: 'Membrana de Ósmosis Inversa', path: '/producto/rp-001' },
        { name: 'Filtro Post Carbón', path: '/producto/rp-002' },
        { name: 'Carcasas Big Blue', path: '/producto/rp-003' },
        { name: 'Para equipos a base de ozono', path: '/productos?category=equiposOzono' },
        { name: 'Para equipos de ósmosis inversa', path: '/productos?category=sistemasOsmosis' }
      ]
    }
  ]

  const isActive = (path) => location.pathname === path

  const handleCategoryHover = (category) => {
    setHoveredCategory(category)
  }

  const closeAllMenus = () => {
    setIsProductosOpen(false)
    setIsRepuestosOpen(false)
    setHoveredCategory(null)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/OZONOLIVE.png" 
              alt="Ozonolive Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.hasDropdown ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => {
                        if (link.name === 'Productos') {
                          setIsProductosOpen(true)
                          setIsRepuestosOpen(false)
                        } else if (link.name === 'Repuestos') {
                          setIsRepuestosOpen(true)
                          setIsProductosOpen(false)
                        }
                      }}
                      className={`font-medium transition-colors duration-300 flex items-center space-x-1 ${
                        isActive(link.path)
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      <span>{link.name}</span>
                      <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu Productos */}
                    {link.name === 'Productos' && isProductosOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                        onMouseEnter={() => setIsProductosOpen(true)}
                        onMouseLeave={() => {
                          setTimeout(() => setIsProductosOpen(false), 1)
                        }}
                      >
                        <div className="flex">
                          {/* Columna izquierda con categorías */}
                          <div className="w-1/2 border-r border-gray-200">
                            {productosMenu.map((section, sectionIndex) => (
                              <div 
                                key={sectionIndex} 
                                className="px-4 py-2 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                onMouseEnter={() => handleCategoryHover(section.category)}
                              >
                                <h3 className="text-sm font-semibold text-primary-600">
                                  {section.category}
                                </h3>
                              </div>
                            ))}
                          </div>
                          
                          {/* Columna derecha con productos */}
                          <div className="w-1/2">
                            {hoveredCategory && (
                              <div className="px-4">
                                {productosMenu
                                  .find(section => section.category === hoveredCategory)
                                  ?.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="py-1">
                                      <Link
                                        to={item.path}
                                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors duration-200"
                                        onClick={closeAllMenus}
                                      >
                                        {item.name}
                                      </Link>
                                    </div>
                                  ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Dropdown Menu Repuestos */}
                    {link.name === 'Repuestos' && isRepuestosOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                        onMouseEnter={() => setIsRepuestosOpen(true)}
                        onMouseLeave={() => {
                          setTimeout(() => setIsRepuestosOpen(false), 1)
                        }}
                      >
                        <div className="px-4">
                          {repuestosMenu.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <h3 className="text-sm font-semibold text-primary-600 mb-2 border-b border-gray-100 pb-1">
                                {section.category}
                              </h3>
                              <ul className="space-y-1">
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <Link
                                      to={item.path}
                                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors duration-200"
                                      onClick={closeAllMenus}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium transition-colors duration-300 ${
                      isActive(link.path)
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
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
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
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
              <div key={link.path}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (link.name === 'Productos') {
                          setIsProductosOpen(!isProductosOpen)
                          setIsRepuestosOpen(false)
                        } else if (link.name === 'Repuestos') {
                          setIsRepuestosOpen(!isRepuestosOpen)
                          setIsProductosOpen(false)
                        }
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-between ${
                        isActive(link.path)
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {link.name}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${
                        ((link.name === 'Productos' && isProductosOpen) || (link.name === 'Repuestos' && isRepuestosOpen))
                          ? 'rotate-180' : ''
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {((link.name === 'Productos' && isProductosOpen) || (link.name === 'Repuestos' && isRepuestosOpen)) && (
                      <div className="ml-4 mt-2 space-y-2">
                        {link.name === 'Productos' ? (
                          productosMenu.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="space-y-2">
                              <h4 className="text-sm font-semibold text-primary-600 px-4">
                                {section.category}
                              </h4>
                              {section.items.map((item, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={item.path}
                                  onClick={() => {
                                    setIsOpen(false)
                                    closeAllMenus()
                                  }}
                                  className="block px-8 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))
                        ) : (
                          repuestosMenu.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="space-y-2">
                              <h4 className="text-sm font-semibold text-primary-600 px-4">
                                {section.category}
                              </h4>
                              {section.items.map((item, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={item.path}
                                  onClick={() => {
                                    setIsOpen(false)
                                    closeAllMenus()
                                  }}
                                  className="block px-8 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
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
                )}
              </div>
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
