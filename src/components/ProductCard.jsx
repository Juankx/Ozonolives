import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ 
  id, 
  name, 
  description, 
  image, 
  category, 
  price = null,
  features = [],
  isNew = false,
  isPopular = false 
}) => {
  return (
    <div className="card group hover:scale-105 transition-transform duration-300">
      {/* Image Container */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-secondary-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Nuevo
            </span>
          )}
          {isPopular && (
            <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Popular
            </span>
          )}
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        )}

        {/* Price */}
        {price && (
          <div className="text-2xl font-bold text-primary-600">
            ${price}
          </div>
        )}

        {/* Action Button */}
        <Link 
          to={`/productos/${id}`} 
          className="btn-primary w-full text-center group-hover:bg-primary-700 transition-colors"
        >
          Ver Más
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
