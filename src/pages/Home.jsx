import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import FeatureCard from '../components/FeatureCard'

const Home = () => {
  // Datos de productos destacados actualizados
  const featuredProducts = [
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
      id: 'p-004',
      name: 'Sistema de Purificación por Ozono',
      description: 'Sistema de ozonización para purificación completa del agua sin químicos.',
      category: 'ozono',
      price: '$899.99',
      features: ['Producción: 5g/h', 'Control automático', 'Elimina bacterias y virus'],
      isNew: true
    },
    {
      id: 'p-007',
      name: 'Sistema de Filtración Multi-Etapa',
      description: 'Sistema de filtración avanzada para agua potable residencial.',
      category: 'filtracion',
      price: '$299.99',
      features: ['3 etapas de filtración', 'Filtro de sedimentos', 'Filtro de carbón activado']
    }
  ]

  const features = [
    {
      icon: "🔬",
      title: "Tecnología Avanzada",
      description: "Utilizamos las últimas innovaciones en purificación de agua para garantizar resultados óptimos.",
      color: "primary"
    },
    {
      icon: "🌱",
      title: "Sostenibilidad",
      description: "Nuestras soluciones son respetuosas con el medio ambiente y promueven el uso responsable del agua.",
      color: "secondary"
    },
    {
      icon: "⚡",
      title: "Eficiencia Energética",
      description: "Sistemas diseñados para maximizar la purificación minimizando el consumo energético.",
      color: "accent"
    },
    {
      icon: "🛡️",
      title: "Calidad Garantizada",
      description: "Todos nuestros productos cumplen con los más altos estándares de calidad y seguridad.",
      color: "primary"
    }
  ]

  const testimonials = [
    {
      name: "María González",
      position: "Propietaria de Restaurante",
      content: "El sistema de ósmosis inversa de Ozonolives transformó completamente la calidad del agua en nuestro restaurante. Nuestros clientes notan la diferencia.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Carlos Rodríguez",
      position: "Director de Planta Industrial",
      content: "Implementamos el sistema de ozonización para nuestra planta y los resultados han sido excepcionales. Agua más limpia y costos reducidos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ana Martínez",
      position: "Propietaria de Casa",
      content: "El sistema de filtración multi-etapa ha mejorado significativamente el sabor del agua en mi hogar. Excelente servicio y calidad.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection
        title="Purificación de Agua de Vanguardia"
        subtitle="Tecnología Avanzada"
        description="Descubre soluciones innovadoras para la purificación del agua. Desde sistemas residenciales hasta soluciones industriales, garantizamos agua limpia y segura para tu hogar o negocio."
        primaryButtonText="Ver Productos"
        primaryButtonLink="/productos"
        secondaryButtonText="Conoce Nuestra Empresa"
        secondaryButtonLink="/empresa"
      />

      {/* Featured Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestras soluciones más populares en purificación de agua
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
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
          <div className="text-center mt-12">
            <a href="/productos" className="btn-primary text-lg px-8 py-4">
              Ver Todos los Productos
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Ozonolives?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestras ventajas competitivas en el mercado de la purificación de agua
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experiencias reales de clientes satisfechos con nuestros productos y servicios
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para mejorar la calidad de tu agua?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a encontrar la solución 
            perfecta para tus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="btn-secondary text-lg px-8 py-4"
            >
              Solicitar Cotización
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

export default Home
