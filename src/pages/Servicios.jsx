import React from 'react'
import FeatureCard from '../components/FeatureCard'

const Servicios = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Instalación Profesional",
      description: "Instalación experta de todos nuestros sistemas de filtración por técnicos certificados.",
      color: "primary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento regular para garantizar el funcionamiento óptimo de tus equipos.",
      color: "secondary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Asesoría Técnica",
      description: "Consultoría especializada para elegir la mejor solución según tus necesidades específicas.",
      color: "accent"
    }
  ]

  const serviceDetails = [
    {
      title: "Instalación Profesional",
      description: "Nuestro equipo de técnicos certificados se encarga de la instalación completa de todos nuestros sistemas de filtración, garantizando un funcionamiento óptimo desde el primer momento.",
      features: [
        "Instalación por técnicos certificados",
        "Pruebas de funcionamiento",
        "Capacitación del usuario",
        "Garantía de instalación",
        "Documentación técnica completa"
      ],
      image: "bg-gradient-to-br from-primary-100 to-secondary-100"
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento personalizados que incluyen inspecciones regulares, limpieza de filtros, reemplazo de componentes y calibración de equipos.",
      features: [
        "Inspecciones programadas",
        "Limpieza y desinfección",
        "Reemplazo de filtros",
        "Calibración de equipos",
        "Reportes de mantenimiento"
      ],
      image: "bg-gradient-to-br from-secondary-100 to-accent-100"
    },
    {
      title: "Asesoría Técnica",
      description: "Nuestros expertos analizan tus necesidades específicas y te recomiendan la solución más adecuada, considerando factores como calidad del agua, volumen de consumo y presupuesto.",
      features: [
        "Análisis de calidad de agua",
        "Evaluación de necesidades",
        "Diseño de soluciones",
        "Presupuestos detallados",
        "Seguimiento post-venta"
      ],
      image: "bg-gradient-to-br from-accent-100 to-primary-100"
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Evaluación Inicial",
      description: "Analizamos tus necesidades y la calidad del agua actual"
    },
    {
      number: "02",
      title: "Propuesta Personalizada",
      description: "Diseñamos una solución adaptada a tus requerimientos"
    },
    {
      number: "03",
      title: "Instalación Profesional",
      description: "Nuestros técnicos instalan y configuran el sistema"
    },
    {
      number: "04",
      title: "Capacitación y Seguimiento",
      description: "Te capacitamos en el uso y damos seguimiento continuo"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Ofrecemos servicios integrales para la instalación, mantenimiento y asesoría 
            de todos nuestros sistemas de purificación de agua.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desde la instalación hasta el mantenimiento continuo, cubrimos todas tus necesidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FeatureCard 
                key={index} 
                {...service} 
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-20">
            {serviceDetails.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className={`w-full h-80 rounded-2xl ${service.image} flex items-center justify-center`}>
                    <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un enfoque sistemático para garantizar la mejor experiencia y resultados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para ayudarte a implementar la solución perfecta para tus necesidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-secondary text-lg px-8 py-4">
              Solicitar Cotización
            </a>
            <a href="/productos" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
              Ver Productos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Servicios
