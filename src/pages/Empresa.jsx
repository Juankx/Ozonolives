import React from 'react'
import FeatureCard from '../components/FeatureCard'

const Empresa = () => {
  const values = [
    {
      icon: "🌱",
      title: "Sostenibilidad",
      description: "Comprometidos con el medio ambiente y la conservación de recursos naturales.",
      color: "secondary"
    },
    {
      icon: "🔬",
      title: "Innovación",
      description: "Desarrollo constante de tecnologías avanzadas para la purificación del agua.",
      color: "primary"
    },
    {
      icon: "🤝",
      title: "Confianza",
      description: "Construyendo relaciones duraderas con nuestros clientes basadas en la calidad y servicio.",
      color: "accent"
    },
    {
      icon: "⭐",
      title: "Excelencia",
      description: "Mantenemos los más altos estándares de calidad en todos nuestros productos y servicios.",
      color: "secondary"
    }
  ]

  const team = [
    {
      name: "Ing. Carlos Mendoza",
      position: "Director General",
      description: "Especialista en sistemas de purificación de agua con más de 15 años de experiencia.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dra. Ana Rodríguez",
      position: "Directora Técnica",
      description: "Doctora en Ingeniería Química, experta en tecnologías de ozonización y filtración.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ing. Luis Torres",
      position: "Jefe de Operaciones",
      description: "Especialista en instalación y mantenimiento de sistemas industriales de purificación.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ]

  const milestones = [
    {
      year: "2010",
      title: "Fundación de Ozonolives",
      description: "Nacimos con la misión de proporcionar soluciones sostenibles para la purificación del agua."
    },
    {
      year: "2013",
      title: "Primer Sistema Industrial",
      description: "Implementamos nuestro primer sistema de ozonización para una empresa manufacturera."
    },
    {
      year: "2016",
      title: "Expansión Regional",
      description: "Ampliamos nuestros servicios a toda la región, estableciendo oficinas en 5 ciudades."
    },
    {
      year: "2019",
      title: "Certificación ISO",
      description: "Obtuvimos la certificación ISO 9001:2015 por nuestros sistemas de gestión de calidad."
    },
    {
      year: "2023",
      title: "Innovación en Ósmosis",
      description: "Lanzamos nuestra nueva línea de sistemas de ósmosis inversa de alta eficiencia."
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Nuestra Empresa
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto animate-slide-up">
            Más de una década de experiencia en purificación de agua y soluciones ecológicas
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Proporcionar soluciones innovadoras y sostenibles para la purificación del agua, 
                contribuyendo a la salud pública y la preservación del medio ambiente a través 
                de tecnologías avanzadas y un servicio excepcional.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Nuestra Visión
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ser líderes reconocidos en América Latina en el desarrollo e implementación 
                de tecnologías de purificación de agua, estableciendo nuevos estándares de 
                calidad y sostenibilidad en la industria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en Ozonolives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                color={value.color}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un viaje de innovación y crecimiento en la industria de la purificación del agua
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesionales comprometidos con la excelencia y la innovación
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
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
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Descubre cómo podemos ayudarte a implementar soluciones de purificación de agua 
            que transformen tu negocio y protejan el medio ambiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="btn-secondary text-lg px-8 py-4"
            >
              Contáctanos
            </a>
            <a
              href="/productos"
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
            >
              Ver Productos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Empresa
