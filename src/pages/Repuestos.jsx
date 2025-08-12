import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const Repuestos = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  // Datos de repuestos por categoría
  const repuestos = {
    osmosis: [
      {
        id: 'r-001',
        name: 'Membrana de Ósmosis Inversa',
        description: 'Membrana de alta calidad para sistemas de ósmosis inversa residenciales e industriales.',
        category: 'osmosis',
        price: '$89.99',
        features: ['Tamaño estándar 1812', 'Capacidad: 75 GPD', 'Vida útil: 2-3 años'],
        isPopular: true
      },
      {
        id: 'r-002',
        name: 'Filtro de Carbón Activado',
        description: 'Filtro de carbón activado para remover cloro y mejorar el sabor del agua.',
        category: 'osmosis',
        price: '$24.99',
        features: ['Capacidad: 10,000 galones', 'Tamaño: 10" x 2.5"', 'Remueve cloro y sedimentos'],
        isNew: true
      },
      {
        id: 'r-003',
        name: 'Filtro de Sedimentos',
        description: 'Filtro de polipropileno para remover partículas y sedimentos del agua.',
        category: 'osmosis',
        price: '$19.99',
        features: ['Micronaje: 5 micras', 'Tamaño: 10" x 2.5"', 'Capacidad: 15,000 galones']
      }
    ],
    ozono: [
      {
        id: 'r-004',
        name: 'Generador de Ozono',
        description: 'Unidad de generación de ozono para sistemas de purificación por ozonización.',
        category: 'ozono',
        price: '$299.99',
        features: ['Producción: 2g/h', 'Voltaje: 220V', 'Incluye difusor'],
        isPopular: true
      },
      {
        id: 'r-005',
        name: 'Difusor de Ozono',
        description: 'Difusor de cerámica para distribución eficiente del ozono en el agua.',
        category: 'ozono',
        price: '$45.99',
        features: ['Material: Cerámica porosa', 'Tamaño: 2"', 'Compatible con sistemas estándar']
      },
      {
        id: 'r-006',
        name: 'Sensor de Ozono',
        description: 'Sensor digital para monitorear niveles de ozono en tiempo real.',
        category: 'ozono',
        price: '$89.99',
        features: ['Rango: 0-10 ppm', 'Display digital', 'Alarmas configurables']
      }
    ],
    filtracion: [
      {
        id: 'r-007',
        name: 'Filtro de Arena',
        description: 'Filtro de arena de cuarzo para sistemas de filtración industrial.',
        category: 'filtracion',
        price: '$159.99',
        features: ['Capacidad: 50,000 galones', 'Tamaño: 24" x 48"', 'Material: Acero inoxidable'],
        isNew: true
      },
      {
        id: 'r-008',
        name: 'Válvula de Control',
        description: 'Válvula automática para control de flujo en sistemas de filtración.',
        category: 'filtracion',
        price: '$199.99',
        features: ['Control automático', 'Presión: 20-100 PSI', 'Conexión: 1" NPT']
      },
      {
        id: 'r-009',
        name: 'Bomba de Alta Presión',
        description: 'Bomba centrífuga para sistemas de filtración que requieren alta presión.',
        category: 'filtracion',
        price: '$399.99',
        features: ['Presión: 100 PSI', 'Flujo: 50 GPM', 'Motor: 2 HP']
      }
    ]
  }

  const categories = [
    { id: 'todos', name: 'Todos los Repuestos', count: Object.values(repuestos).flat().length },
    { id: 'osmosis', name: 'Ósmosis Inversa', count: repuestos.osmosis.length },
    { id: 'ozono', name: 'Sistemas de Ozono', count: repuestos.ozono.length },
    { id: 'filtracion', name: 'Filtración', count: repuestos.filtracion.length }
  ]

  const getFilteredRepuestos = () => {
    if (selectedCategory === 'todos') {
      return Object.values(repuestos).flat()
    }
    return repuestos[selectedCategory] || []
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Repuestos y Partes
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto animate-slide-up">
            Mantén tus sistemas de purificación funcionando al máximo con repuestos de calidad
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Categorías de Repuestos
            </h2>
            <p className="text-gray-600">
              Encuentra exactamente lo que necesitas para tu sistema
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

      {/* Repuestos Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredRepuestos().map((repuesto) => (
              <ProductCard
                key={repuesto.id}
                id={repuesto.id}
                name={repuesto.name}
                description={repuesto.description}
                category={repuesto.category}
                price={repuesto.price}
                features={repuesto.features}
                isNew={repuesto.isNew}
                isPopular={repuesto.isPopular}
              />
            ))}
          </div>
          
          {getFilteredRepuestos().length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No se encontraron repuestos
              </h3>
              <p className="text-gray-600">
                Prueba seleccionando una categoría diferente o contáctanos para solicitudes especiales.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Información Adicional */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                ¿Necesitas un repuesto específico?
              </h2>
              <p className="text-lg text-gray-600">
                Si no encuentras el repuesto que buscas, nuestro equipo técnico puede ayudarte a 
                identificar la parte correcta para tu sistema específico.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Asesoría técnica especializada
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Repuestos compatibles garantizados
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Envío rápido a toda la región
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Garantía de calidad en todos los repuestos
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Información del Repuesto
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Marca del sistema:</span>
                  <span className="font-medium">Especificar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Modelo:</span>
                  <span className="font-medium">Especificar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Año de instalación:</span>
                  <span className="font-medium">Especificar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tipo de repuesto:</span>
                  <span className="font-medium">Especificar</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-800">
                  <strong>Consejo:</strong> Toma una foto del repuesto dañado o del número de serie 
                  para ayudarnos a identificar la parte correcta más rápidamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo técnico está listo para ayudarte a encontrar el repuesto correcto 
            para mantener tu sistema funcionando perfectamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="btn-secondary text-lg px-8 py-4"
            >
              Contactar Soporte Técnico
            </a>
            <a
              href="/productos"
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
            >
              Ver Sistemas Completos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Repuestos
