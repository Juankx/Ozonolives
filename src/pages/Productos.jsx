import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  // Datos de productos por categoría actualizados según especificaciones
  const products = {
    sistemasOzono: [
      {
        id: 'oz-001',
        name: 'OZONO PET',
        description: 'Sistema de purificación por ozono para botellas PET, ideal para purificación de agua en botellas reutilizables.',
        category: 'sistemasOzono',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
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

  const categories = [
    { id: 'todos', name: 'Todos los Productos', count: Object.values(products).flat().length },
    { id: 'sistemasOzono', name: 'Sistemas a base de Ozono', count: products.sistemasOzono.length },
    { id: 'sistemasOsmosis', name: 'Sistemas de Ósmosis Inversa', count: products.sistemasOsmosis.length },
    { id: 'filtrosPartes', name: 'Filtros y Partes', count: products.filtrosPartes.length }
  ]

  const getFilteredProducts = () => {
    if (selectedCategory === 'todos') {
      return Object.values(products).flat()
    }
    return products[selectedCategory] || []
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Nuestros Productos
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto animate-slide-up">
            Soluciones avanzadas de purificación de agua para hogares, empresas e industrias
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Categorías de Productos
            </h2>
            <p className="text-gray-600">
              Explora nuestras soluciones especializadas en purificación de agua
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredProducts().map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                category={product.category}
                image={product.image}
                features={product.features}
                specifications={product.specifications}
                isNew={product.isNew}
                isPopular={product.isPopular}
              />
            ))}
          </div>
          
          {getFilteredProducts().length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💧</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-600">
                Prueba seleccionando una categoría diferente o contáctanos para solicitudes especiales.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Información de Categorías */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tecnologías de Purificación
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce las diferentes tecnologías que utilizamos para garantizar agua limpia y segura
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ósmosis Inversa */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sistemas de Ósmosis Inversa
              </h3>
              <p className="text-gray-600 mb-4">
                Tecnología avanzada que utiliza membranas semipermeables para eliminar hasta el 99% 
                de contaminantes, incluyendo sales disueltas, metales pesados y microorganismos.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Eliminación de sales y minerales</li>
                <li>• Filtración de partículas microscópicas</li>
                <li>• Agua de alta pureza</li>
                <li>• Ideal para consumo humano</li>
              </ul>
            </div>

            {/* Ozono */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sistemas a base de Ozono
              </h3>
              <p className="text-gray-600 mb-4">
                Tecnología natural que utiliza ozono para desinfectar y purificar el agua, 
                eliminando bacterias, virus y otros microorganismos sin dejar residuos químicos.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Desinfección natural</li>
                <li>• Sin residuos químicos</li>
                <li>• Eliminación de olores</li>
                <li>• Aplicaciones múltiples</li>
              </ul>
            </div>

            {/* Filtración */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sistemas de Filtración
              </h3>
              <p className="text-gray-600 mb-4">
                Sistemas de filtración multi-etapa que combinan diferentes tecnologías para 
                remover sedimentos, cloro, sabores y olores del agua de manera efectiva.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Filtración multi-etapa</li>
                <li>• Remoción de sedimentos</li>
                <li>• Eliminación de cloro</li>
                <li>• Mejora del sabor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Necesitas asesoría técnica?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a elegir la solución 
            perfecta para tus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="btn-secondary text-lg px-8 py-4"
            >
              Solicitar Asesoría
            </a>
            <a
              href="/repuestos"
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
            >
              Ver Repuestos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Productos
