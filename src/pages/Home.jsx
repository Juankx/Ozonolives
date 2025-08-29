import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import FeatureCard from '../components/FeatureCard'
import { Link } from 'react-router-dom';

const Home = () => {
  // Productos destacados - solo OZONO PET y Diamant Inox
  const featuredProducts = [
    {
      id: 'oz-001',
      name: 'OZONO PET',
      description: 'Este producto ha sido desarrollado con un diseño básico pero funcional para el aseo e higiene de mascotas, está al alcance de todos aquellos que quieren ofrecer algo novedoso a sus clientes y a la vez muy saludable para nuestra familia de peludos, convirtiendo su uso en un SPA para nuestras mascotas.',
      image: '/images/Ozonopet.jpeg',
      category: 'Equipos de Purificación a Base de Ozono',
      isNew: true,
      isPopular: true
    },
    {
      id: 'oz-002',
      name: 'DIAMANT INOX',
      description: 'Mini planta de purificación de agua ideal para uso doméstico, elaborada en acero inoxidable (.1 quirúrgico). Elimina: sedimentos, piedras, pesticidas, cloro, bacterias y virus. Con el revolucionario sistema de purificación de agua a base de Ozono.',
      image: '/images/Diamantinox.jpeg',
      category: 'Equipos de Purificación a Base de Ozono',
      isNew: false,
      isPopular: true
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
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face"
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
      />

      {/* Featured Products Section */}
          {/* Productos Destacados */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Productos Destacados
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Descubre nuestras soluciones más populares en purificación de agua
                </p>
              </div>

              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                  {featuredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      {...product}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/productos"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <span>Ver Todos los Productos</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Ozonolive?
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
