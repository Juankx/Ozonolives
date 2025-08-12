import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryButtonText = "Ver Más", 
  primaryButtonLink = "/productos",
  secondaryButtonText = "Contactar",
  secondaryButtonLink = "/contacto",
  backgroundImage = "bg-gradient-to-br from-primary-600 to-secondary-600"
}) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center ${backgroundImage} overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></span>
            Especialistas en Purificación de Agua
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-100">
              {subtitle}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-primary-50 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={primaryButtonLink} className="btn-secondary text-lg px-8 py-4">
              {primaryButtonText}
            </Link>
            <Link to={secondaryButtonLink} className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
