import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  // Datos de productos por categoría actualizados
  const products = {
    osmosis: [
      {
        id: 'p-001',
        name: 'Sistema de Ósmosis Inversa Residencial',
        description: 'Sistema completo de ósmosis inversa para hogares, elimina hasta 99% de contaminantes.',
        category: 'osmosis',
        price: '$599.99',
        features: ['Capacidad: 75 GPD', '5 etapas de filtración', 'Tanque de almacenamiento incluido'],
        isPopular: true
      },
      {
        id: 'p-002',
        name: 'Sistema de Ósmosis Inversa Industrial',
        description: 'Sistema de alta capacidad para aplicaciones comerciales e industriales.',
        category: 'osmosis',
        price: '$2,999.99',
        features: ['Capacidad: 500 GPD', 'Filtración automática', 'Monitoreo digital'],
        isNew: true
      },
      {
        id: 'p-003',
        name: 'Sistema de Ósmosis Inversa Compacto',
        description: 'Sistema de bajo perfil ideal para espacios reducidos y cocinas pequeñas.',
        category: 'osmosis',
        price: '$399.99',
        features: ['Capacidad: 50 GPD', 'Diseño compacto', 'Instalación fácil']
      }
    ],
    ozono: [
      {
        id: 'p-004',
        name: 'Sistema de Purificación por Ozono',
        description: 'Sistema de ozonización para purificación completa del agua sin químicos.',
        category: 'ozono',
        price: '$899.99',
        features: ['Producción: 5g/h', 'Control automático', 'Elimina bacterias y virus'],
        isPopular: true
      },
      {
        id: 'p-005',
        name: 'Sistema de Ozono para Piscinas',
        description: 'Sistema de ozonización para piscinas residenciales y comerciales.',
        category: 'ozono',
        price: '$1,299.99',
        features: ['Capacidad: 50,000 litros', 'Ahorro en químicos', 'Agua cristalina'],
        isNew: true
      },
      {
        id: 'p-006',
        name: 'Sistema de Ozono para Agricultura',
        description: 'Sistema de ozonización para riego agrícola y cultivos hidropónicos.',
        category: 'ozono',
        price: '$799.99',
        features: ['Producción: 3g/h', 'Control de pH', 'Mejora crecimiento de plantas']
      }
    ],
    filtracion: [
      {
        id: 'p-007',
        name: 'Sistema de Filtración Multi-Etapa',
        description: 'Sistema de filtración avanzada para agua potable residencial.',
        category: 'filtracion',
        price: '$299.99',
        features: ['3 etapas de filtración', 'Filtro de sedimentos', 'Filtro de carbón activado'],
        isPopular: true
      },
      {
        id: 'p-008',
        name: 'Sistema de Filtración Industrial',
        description: 'Sistema de filtración de alta capacidad para aplicaciones industriales.',
        category: 'filtracion',
        price: '$1,899.99',
        features: ['Capacidad: 100 GPM', 'Filtros automáticos', 'Monitoreo de presión'],
        isNew: true
      },
      {
        id: 'p-009',
        name: 'Sistema de Filtración para Pozos',
        description: 'Sistema especializado para purificación de agua de pozos y manantiales.',
        category: 'filtracion',
        price: '$499.99',
        features: ['Filtro de arena', 'Filtro de carbón', 'Elimina hierro y manganeso']
      }
    ]
  }

  const categories = [
    { id: 'todos', name: 'Todos los Productos', count: Object.values(products).flat().length },
    { id: 'osmosis', name: 'Sistemas de Ósmosis Inversa', count: products.osmosis.length },
    { id: 'ozono', name: 'Sistemas a base de Ozono', count: products.ozono.length },
    { id: 'filtracion', name: 'Filtración', count: products.filtracion.length }
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
                price={product.price}
                features={product.features}
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
