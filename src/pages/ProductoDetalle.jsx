import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ProductoDetalle = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)

  // Datos de productos (mismo que en Productos.jsx)
  const products = {
    sistemasOzono: [
      {
        id: 'oz-001',
        name: 'OZONO PET',
        description: 'Sistema de purificación por ozono para botellas PET, ideal para purificación de agua en botellas reutilizables.',
        category: 'sistemasOzono',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        features: ['Producción: 3g/h de ozono', 'Capacidad: 500ml por ciclo', 'Tiempo de purificación: 5-10 min'],
        specifications: {
          'Potencia': '50W',
          'Voltaje': '220V AC',
          'Dimensiones': '15 x 10 x 8 cm',
          'Material': 'Plástico ABS resistente'
        }
      },
      {
        id: 'oz-002',
        name: 'DIAMANT INOX',
        description: 'Sistema de ozonización industrial de alta capacidad con carcasa de acero inoxidable.',
        category: 'sistemasOzono',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
        features: ['Producción: 10g/h de ozono', 'Capacidad: 10,000 litros/hora', 'Control digital avanzado'],
        specifications: {
          'Potencia': '200W',
          'Voltaje': '220V/380V AC',
          'Dimensiones': '40 x 30 x 25 cm',
          'Material': 'Acero inoxidable 316L'
        }
      },
      {
        id: 'oz-003',
        name: 'GTOR',
        description: 'Generador de ozono de alta eficiencia para aplicaciones comerciales y residenciales.',
        category: 'sistemasOzono',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        features: ['Producción: 5g/h de ozono', 'Capacidad: 2,000 litros/hora', 'Timer programable'],
        specifications: {
          'Potencia': '100W',
          'Voltaje': '220V AC',
          'Dimensiones': '25 x 20 x 15 cm',
          'Material': 'Plástico ABS + acero inoxidable'
        }
      },
      {
        id: 'oz-004',
        name: 'CABEZOTE INOX',
        description: 'Cabezal de distribución de ozono en acero inoxidable para sistemas industriales.',
        category: 'sistemasOzono',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
        features: ['Distribución uniforme', 'Resistente a corrosión', 'Conexiones estándar'],
        specifications: {
          'Material': 'Acero inoxidable 304',
          'Presión': 'Hasta 10 bar',
          'Temperatura': '-10°C a +80°C',
          'Conexiones': '1" NPT hembra'
        }
      }
    ],
    sistemasOsmosis: [
      {
        id: 'os-001',
        name: 'Ósmosis Inversa 5 Etapas',
        description: 'Sistema de ósmosis inversa residencial de 5 etapas para purificación completa del agua.',
        category: 'sistemasOsmosis',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        features: ['5 etapas de filtración', 'Capacidad: 75 GPD', 'Tanque de almacenamiento incluido'],
        specifications: {
          'Capacidad': '75 GPD (283 L/día)',
          'Presión': '2.8 - 6.2 bar',
          'Temperatura': '4°C - 38°C',
          'TDS máximo': '2000 ppm'
        }
      },
      {
        id: 'os-002',
        name: 'Ósmosis Inversa 7 Etapas + Lámpara UV',
        description: 'Sistema avanzado de ósmosis inversa con 7 etapas y desinfección ultravioleta.',
        category: 'sistemasOsmosis',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
        features: ['7 etapas de filtración', 'Lámpara UV germicida', 'Capacidad: 100 GPD', 'Control digital'],
        specifications: {
          'Capacidad': '100 GPD (378 L/día)',
          'Presión': '2.8 - 6.2 bar',
          'Temperatura': '4°C - 38°C',
          'Potencia UV': '11W',
          'TDS máximo': '2000 ppm'
        }
      }
    ],
    filtrosPartes: [
      {
        id: 'fp-001',
        name: 'Filtro de Sedimentos 5 Micras',
        description: 'Filtro de sedimentos de alta capacidad para retener partículas suspendidas.',
        category: 'filtrosPartes',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        features: ['Filtración: 5 micras', 'Capacidad: 10,000 litros', 'Conexiones estándar'],
        specifications: {
          'Filtración': '5 micras',
          'Capacidad': '10,000 litros',
          'Presión': 'Hasta 8 bar',
          'Temperatura': '0°C a +50°C'
        }
      },
      {
        id: 'fp-002',
        name: 'Filtro de Carbón Activado',
        description: 'Filtro de carbón activado para eliminar cloro, sabores y olores del agua.',
        category: 'filtrosPartes',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
        features: ['Elimina cloro', 'Mejora sabor y olor', 'Capacidad: 8,000 litros'],
        specifications: {
          'Filtración': 'Carbón activado',
          'Capacidad': '8,000 litros',
          'Presión': 'Hasta 8 bar',
          'Temperatura': '0°C a +50°C'
        }
      },
      {
        id: 'fp-003',
        name: 'Membrana de Ósmosis Inversa',
        description: 'Membrana de ósmosis inversa de alta eficiencia para sistemas residenciales.',
        category: 'filtrosPartes',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        features: ['Rechazo: 95-98%', 'Capacidad: 75 GPD', 'Vida útil: 2-3 años'],
        specifications: {
          'Capacidad': '75 GPD',
          'Rechazo': '95-98%',
          'Presión': '2.8 - 6.2 bar',
          'Temperatura': '4°C - 38°C'
        }
      },
      {
        id: 'fp-004',
        name: 'Filtro Post-Carbón',
        description: 'Filtro de carbón post-ósmosis para mejorar el sabor final del agua.',
        category: 'filtrosPartes',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
        features: ['Mejora sabor final', 'Capacidad: 6,000 litros', 'Instalación fácil'],
        specifications: {
          'Filtración': 'Carbón activado',
          'Capacidad': '6,000 litros',
          'Presión': 'Hasta 8 bar',
          'Temperatura': '0°C a +50°C'
        }
      }
    ]
  }

  useEffect(() => {
    // Buscar el producto por ID
    const allProducts = Object.values(products).flat()
    const foundProduct = allProducts.find(p => p.id === id)
    
    if (foundProduct) {
      setProduct(foundProduct)
    } else {
      // Si no se encuentra el producto, redirigir a la página de productos
      navigate('/productos')
    }
  }, [id, navigate])

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando producto...</p>
        </div>
      </div>
    )
  }

  const getCategoryName = (category) => {
    const categoryNames = {
      'sistemasOzono': 'Sistemas a base de Ozono',
      'sistemasOsmosis': 'Sistemas de Ósmosis Inversa',
      'filtrosPartes': 'Filtros y Partes'
    }
    return categoryNames[category] || category
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate('/productos')}
              className="mr-4 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-primary-100">{getCategoryName(product.category)}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {product.name}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            {product.description}
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Category Badge */}
              <div className="text-center">
                <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium">
                  {getCategoryName(product.category)}
                </span>
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Características Principales</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Especificaciones Técnicas</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                          <span className="font-medium text-gray-700">{key}:</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="/contacto"
                  className="btn-primary text-lg px-8 py-4 text-center"
                >
                  Solicitar Cotización
                </a>
                <a
                  href="https://wa.me/593998692215?text=Hola, me interesa el producto: %0A%0A*${product.name}*%0A%0A${product.description}%0A%0APor favor, envíenme más información y precios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-8 py-4 text-center"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Productos Relacionados
            </h2>
            <p className="text-xl text-gray-600">
              Descubre más soluciones en la misma categoría
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products[product.category]
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <button
                      onClick={() => navigate(`/producto/${relatedProduct.id}`)}
                      className="btn-primary w-full"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductoDetalle
