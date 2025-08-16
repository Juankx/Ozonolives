import React, { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Imágenes de ejemplo (dummy) - reemplazar con las reales
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Instalación de sistema de ósmosis inversa',
      title: 'Sistema de Ósmosis Inversa Residencial',
      description: 'Instalación profesional en hogar particular'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      alt: 'Sistema de purificación por ozono',
      title: 'Sistema de Ozono Industrial',
      description: 'Instalación en planta de procesamiento'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Mantenimiento de filtros',
      title: 'Mantenimiento Preventivo',
      description: 'Servicio de mantenimiento en sistema comercial'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      alt: 'Instalación de filtros multi-etapa',
      title: 'Filtros Multi-Etapa',
      description: 'Sistema de filtración para oficinas'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Sistema de ósmosis inversa comercial',
      title: 'Ósmosis Inversa Comercial',
      description: 'Instalación en restaurante'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      alt: 'Trabajo de mantenimiento',
      title: 'Servicio Técnico',
      description: 'Reparación y calibración de equipos'
    }
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => openLightbox(image)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <p className="text-sm font-medium">Ver más grande</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
              <p className="text-sm text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Cerrar galería"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
