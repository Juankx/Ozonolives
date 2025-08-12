import React from 'react'

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  color = "primary",
  delay = 0 
}) => {
  const colorClasses = {
    primary: "text-primary-600 bg-primary-50",
    secondary: "text-secondary-600 bg-secondary-50",
    accent: "text-accent-600 bg-accent-50"
  }

  const iconColorClasses = {
    primary: "text-primary-600",
    secondary: "text-secondary-600",
    accent: "text-accent-600"
  }

  return (
    <div 
      className="card text-center group hover:border-primary-200 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${colorClasses[color]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
