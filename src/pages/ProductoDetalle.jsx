import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ProductoDetalle = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)

  // Datos de productos (mismo que en Productos.jsx)
  const products = {
    equiposOzono: [
      {
        id: 'oz-001',
        name: 'OZONO PET',
        description: 'Este producto ha sido desarrollado con un diseño básico pero funcional para el aseo e higiene de mascotas, está al alcance de todos aquellos que quieren ofrecer algo novedoso a sus clientes y a la vez muy saludable para nuestra familia de peludos, convirtiendo su uso en un SPA para nuestras mascotas.',
        category: 'equiposOzono',
        image: '/images/Ozonopet.jpeg',
        features: ['Elimina virus y bacterias', 'Instalación fácil', 'Switch de activación', 'Funciona como ducha convencional'],
        specifications: {
          'Material': 'Poliestireno alto impacto',
          'Color': 'Blanco',
          'Ducha': 'Cromo',
          'Función': 'Desinfectar eliminando virus y bacterias',
          'Dimensiones': '44.5 x 27 x 15 (cm)',
          'Conexiones': '110vAC 60Hz'
        },
        fullDescription: 'Es de muy fácil instalación, solo requiere de un punto hidráulico para alimentar la entrada de agua al equipo OZONE PET y una conexión a 110vAC. El equipo está provisto de un switch para activar o desactivar la generación de ozono de acuerdo a la necesidad del usuario. En cualquier caso, aun estando la generación de ozono activada o desactivada permite el paso de agua para utilizarlo como una ducha convencional si así se requiere. El diseño de este equipo proporciona ozono instantáneo, es de muy bajo mantenimiento y no requiere de elementos consumibles para su funcionamiento.'
      },
      {
        id: 'oz-002',
        name: 'DIAMANT INOX',
        description: 'Mini planta de purificación de agua ideal para uso doméstico, elaborada en acero inoxidable (.1 quirúrgico). Elimina: sedimentos, piedras, pesticidas, cloro, bacterias y virus. Con el revolucionario sistema de purificación de agua a base de Ozono.',
        category: 'equiposOzono',
        image: '/images/Diamantinox.jpeg',
        features: ['Acero inoxidable quirúrgico', 'Elimina múltiples contaminantes', 'Sistema de ozono', 'Kit de instalación incluido'],
        specifications: {
          'Agua purificada': '140 litros',
          'Durabilidad': '20 a 25 años',
          'Medidas': '28 x 13 x 9 (cm)',
          'Consumo': '25w',
          'Inyección ozono': '250mgO3/litro',
          'Conexiones': '110vAC 60Hz'
        },
        fullDescription: 'Promedio de agua purificada: 140litros. Durabilidad promedio: 20 a 25 años. Medidas: 28 x 13 x 9 (cm). Consumo de energía: 25w. Inyección de ozono: 250mgO3/litro de agua. Conexiones: 110vAC 60Hz. Incluye: Filtro: Mixto 10", Carcasa: 10", Kit de instalación (manguera 3/8, racores, llave registro, Te).'
      },
      {
        id: 'oz-003',
        name: 'GTOR',
        description: 'Sistema de purificación de agua portátil. Permite obtener agua segura y de buen sabor en cualquier lugar, eliminando contaminantes y mejorando la calidad del agua, sin necesidad de comprar agua embotellada.',
        category: 'equiposOzono',
        image: '/images/Gtor.jpeg',
        features: ['Portátil', 'Elimina contaminantes', 'Mejora sabor del agua', 'No requiere agua embotellada'],
        specifications: {
          'Capacidad': '90 litros',
          'Filtro': 'Mixto ap200 de 7"',
          'Carcasa': '7"',
          'Consumo': '25w a 110v',
          'Manguera': 'Conexión bypass'
        },
        fullDescription: 'Capacidad de producción: 90litros. Filtro: Mixto ap200 de 7". Carcasa: 7". Consumo de energía: 25w a 110v. Manguera: conexión bypass.'
      },
      {
        id: 'oz-004',
        name: 'CABEZOTE INOX',
        description: 'Sistema de purificación a base de ozono elaborado en acero inoxidable. Sustituye los botellones de agua del dispensador.',
        category: 'equiposOzono',
        image: '/images/Cabezote.jpeg',
        features: ['Acero inoxidable', 'Sistema automático', 'Larga durabilidad', 'Kit de instalación incluido'],
        specifications: {
          'Agua purificada': '120 litros',
          'Durabilidad': '20 a 25 años',
          'Medidas': '26 x 23 x 9 (cm)',
          'Sistema': 'Automático de llenado',
          'Filtro': 'Mixto 10"',
          'Carcasa': '10"'
        },
        fullDescription: 'Promedio de agua purificada: 120 litros. Durabilidad promedio: 20 a 25 años. Medidas: 26 x 23 x 9 (cm). Sistema automático de llenado de agua. NOTA: No incluye dispensador. Incluye: Filtro: Mixto 10", Carcasa: 10", Kit de instalación (manguera 3/8, racores, llave registro, Te).'
      }
    ],
    sistemasFiltracion: [
      {
        id: 'sf-001',
        name: 'FILTROS DE POLIDENT (SEDIMENTOS) DE 10" Y 20"',
        description: 'Eliminan partículas sólidas suspendidas en el agua, como arena, óxido, tierra y limo. Estos filtros protegen los sistemas de purificación posteriores y evitan obstrucciones en tuberías y electrodomésticos.',
        category: 'sistemasFiltracion',
        image: '/images/Filtrosplisados.jpeg',
        features: ['Elimina sedimentos', 'Protege sistemas posteriores', 'Evita obstrucciones', 'Múltiples tamaños disponibles'],
        specifications: {
          'Tipo': 'Filtro de sedimentos',
          'Tamaños': '10" y 20"',
          'Función': 'Eliminar partículas sólidas',
          'Aplicación': 'Protección de sistemas'
        },
        fullDescription: 'Eliminan partículas sólidas suspendidas en el agua, como arena, óxido, tierra y limo. Estos filtros protegen los sistemas de purificación posteriores y evitan obstrucciones en tuberías y electrodomésticos.'
      },
      {
        id: 'sf-002',
        name: 'FILTROS DE CARBÓN ACTIVADO EN BLOQUE DE 10" Y 20"',
        description: 'Purifican agua y aire, eliminando contaminantes como cloro, sedimentos, compuestos orgánicos volátiles, sabores, olores y algunos productos químicos. En aplicaciones residenciales y comerciales, mejoran la calidad del agua eliminando sabores y olores desagradables, así como contaminantes químicos.',
        category: 'sistemasFiltracion',
        image: '/images/Filtrosplisados.jpeg',
        features: ['Elimina cloro', 'Mejora sabor y olor', 'Elimina contaminantes químicos', 'Aplicaciones residenciales y comerciales'],
        specifications: {
          'Tipo': 'Carbón activado en bloque',
          'Tamaños': '10" y 20"',
          'Función': 'Purificación química',
          'Aplicación': 'Residencial y comercial'
        },
        fullDescription: 'Purifican agua y aire, eliminando contaminantes como cloro, sedimentos, compuestos orgánicos volátiles, sabores, olores y algunos productos químicos. En aplicaciones residenciales y comerciales, mejoran la calidad del agua eliminando sabores y olores desagradables, así como contaminantes químicos.'
      },
      {
        id: 'sf-003',
        name: 'FILTROS GRANULADO DE 10"',
        description: 'Eliminan de cloro, compuestos orgánicos volátiles, malos olores y sabores. El carbón activado granulado, con su estructura porosa, adsorbe y retiene contaminantes químicos, mejorando significativamente la calidad y el sabor del agua.',
        category: 'sistemasFiltracion',
        image: '/images/Filtrosplisados.jpeg',
        features: ['Elimina cloro', 'Elimina malos olores', 'Mejora sabor del agua', 'Estructura porosa eficiente'],
        specifications: {
          'Tipo': 'Carbón activado granulado',
          'Tamaño': '10"',
          'Función': 'Eliminación química',
          'Estructura': 'Porosa y eficiente'
        },
        fullDescription: 'Eliminan de cloro, compuestos orgánicos volátiles, malos olores y sabores. El carbón activado granulado, con su estructura porosa, adsorbe y retiene contaminantes químicos, mejorando significativamente la calidad y el sabor del agua. Estos filtros son ideales para aplicaciones residenciales y comerciales donde se busca una purificación avanzada y una experiencia de consumo más agradable.'
      },
      {
        id: 'sf-004',
        name: 'FILTROS PLISADOS DE 10" Y 20"',
        description: 'Proporcionan una alta capacidad de retención de sedimentos y partículas finas. Gracias a su estructura plisada, estos filtros ofrecen una mayor superficie de filtración en un espacio compacto, mejorando la eficiencia y prolongando la vida útil del filtro.',
        category: 'sistemasFiltracion',
        image: '/images/Filtrosplisados.jpeg',
        features: ['Alta capacidad de retención', 'Estructura plisada', 'Mayor superficie de filtración', 'Vida útil prolongada'],
        specifications: {
          'Tipo': 'Filtro plisado',
          'Tamaños': '10" y 20"',
          'Ventaja': 'Mayor superficie de filtración',
          'Aplicación': 'Residencial, comercial e industrial'
        },
        fullDescription: 'Proporcionan una alta capacidad de retención de sedimentos y partículas finas. Gracias a su estructura plisada, estos filtros ofrecen una mayor superficie de filtración en un espacio compacto, mejorando la eficiencia y prolongando la vida útil del filtro. Son ideales para aplicaciones donde se requiere una filtración precisa y duradera, como en sistemas residenciales, comerciales e industriales, garantizando un suministro de agua más limpio y protegido contra contaminantes.'
      },
      {
        id: 'sf-005',
        name: 'FILTRO MIXTO (POLIPROPILENO Y CARBÓN GRANULADO) DE 10"',
        description: 'Ofrecen una solución integral de filtración de agua. El segmento de polipropileno elimina eficazmente sedimentos y partículas finas, mientras que la sección de carbón activado granulado adsorbe contaminantes químicos, mejorando el sabor y olor del agua.',
        category: 'sistemasFiltracion',
        image: '/images/Filtrosplisados.jpeg',
        features: ['Filtración integral', 'Elimina sedimentos', 'Mejora sabor y olor', 'Solución completa'],
        specifications: {
          'Tipo': 'Filtro mixto',
          'Tamaño': '10"',
          'Componentes': 'Polipropileno + carbón activado',
          'Función': 'Filtración integral'
        },
        fullDescription: 'Ofrecen una solución integral de filtración de agua. El segmento de polipropileno elimina eficazmente sedimentos y partículas finas, mientras que la sección de carbón activado granulado adsorbe contaminantes químicos, mejorando el sabor y olor del agua. Esta combinación asegura una purificación completa, ideal para aplicaciones residenciales y comerciales, donde se busca una calidad de agua superior.'
      },
      {
        id: 'sf-006',
        name: 'FILTRO MINERALIZADOR DE 10"',
        description: 'Añade minerales esenciales al agua que ha sido tratada, especialmente después de pasar por procesos como la ósmosis inversa. Estos filtros buscan restaurar el equilibrio natural del agua, mejorando su sabor y aportando beneficios para la salud.',
        category: 'sistemasFiltracion',
        image: '/images/Filtrosplisados.jpeg',
        features: ['Añade minerales esenciales', 'Restaura equilibrio natural', 'Mejora sabor del agua', 'Beneficios para la salud'],
        specifications: {
          'Tipo': 'Mineralizador',
          'Tamaño': '10"',
          'Función': 'Restaurar minerales',
          'Beneficio': 'Mejora sabor y salud'
        },
        fullDescription: 'Añade minerales esenciales al agua que ha sido tratada, especialmente después de pasar por procesos como la ósmosis inversa. Estos filtros buscan restaurar el equilibrio natural del agua, mejorando su sabor y aportando beneficios para la salud al incorporar minerales como calcio, magnesio, sodio y potasio.'
      }
    ],
    sistemasOsmosis: [
      {
        id: 'so-001',
        name: 'ÓSMOSIS INVERSA DE 5 ETAPAS',
        description: 'Limpia, filtra y purifica. El sistema incluye filtro de sedimentos que elimina partículas grandes, filtro granulado que elimina pesticidas, cloro y herbicidas; y filtro de carbón activado que elimina sabores y olores desagradables. También cuenta con una membrana de ósmosis inversa que elimina minerales nocivos e impurezas y un cartucho post carbón activado para eliminar cualquier sabor residual que puede haber quedado después del proceso.',
        category: 'sistemasOsmosis',
        image: '/images/Osmosis5etapas.jpeg',
        features: ['5 etapas de filtración', 'Elimina múltiples contaminantes', 'Membrana de ósmosis inversa', 'Post carbón activado'],
        specifications: {
          'Uso': 'Doméstico',
          'Medidas': '45 x 36 x 20 (cm)',
          'Conexiones': '110vAC 60Hz',
          'Producción': '100 litros diarios',
          'pH': '8.0 - 9.5',
          'Estructura': 'Metálica'
        },
        fullDescription: 'Purificador de uso doméstico. Medidas: 45 x 36 x 20 (cms). Conexiones: 110vAC 60Hz. Capacidad de producción: 100 litros diarios. Manguera de 1/4. Manómetro de presión. Valor equilibrado de pH de 8.0 – 9.5. Estructura metálica. Tres carcasas de 10" x 2.5. 1 filtro de sedimentos de 10" x 2.5. 1 Filtro granulado de 10" x 2.5. 1 filtro de carbón activado de 10" x2.5. 1 membrana de Ósmosis Inversa. 1 cartucho post carbón activado. 1 tanque de reserva de 3.2 galones.'
      },
      {
        id: 'so-002',
        name: 'ÓSMOSIS INVERSA DE 7 ETAPAS + LÁMPARA UV',
        description: 'Limpia, filtra y purifica. El sistema incluye filtro de sedimentos que elimina partículas grandes, filtro granulado que elimina pesticidas, cloro y herbicidas; y filtro de carbón activado que elimina sabores y olores desagradables. También cuenta con una membrana de ósmosis inversa que elimina minerales nocivos e impurezas, un cartucho post carbón activado para eliminar cualquier sabor residual que puede haber quedado después del proceso, un mineralizador que mejora el sabor y pureza del agua, un Alcalinizador para aumentar la calidad y una lámpara UV que ayuda a desinfectar el agua.',
        category: 'sistemasOsmosis',
        image: '/images/Osmosis7etapas.jpeg',
        features: ['7 etapas de filtración', 'Lámpara UV germicida', 'Mineralizador', 'Alcalinizador', 'Desinfección completa'],
        specifications: {
          'Uso': 'Doméstico',
          'Medidas': '45 x 36 x 20 (cm)',
          'Conexiones': '110vAC 60Hz',
          'Producción': '100 litros diarios',
          'pH': '8.0 - 9.5',
          'Estructura': 'Metálica'
        },
        fullDescription: 'Purificador de uso doméstico. Medidas: 45 x 36 x 20 (cms). Conexiones: 110vAC 60Hz. Capacidad de producción: 100 litros diarios. Manguera de 1/4. Manómetro de presión. Valor equilibrado de pH de 8.0 – 9.5. Estructura metálica. Tres carcasas de 10" x 2.5. 1 filtro de sedimentos de 10" x 2.5. 1 filtro granulado de 10" x 2.5. 1 filtro de carbón activado de 10" x2.5. 1 membrana de Ósmosis Inversa. 1 cartucho post carbón activado. 1 mineralizador. 1 Alcalinizador. 1 lámpara UV de 1 galón/min. 1 tanque de reserva de 3.2 galones.'
      }
    ],
    repuestosPartes: [
      {
        id: 'rp-001',
        name: 'MEMBRANA DE ÓSMOSIS INVERSA',
        description: 'Elimina impurezas del agua. Estas membranas cuentan con poros microscópicos que permiten el paso de moléculas de agua mientras retienen sales disueltas, metales pesados, bacterias y otras contaminantes. Este proceso garantiza un suministro de agua pura y segura para beber y cocinar.',
        category: 'repuestosPartes',
        image: '/images/Filtrosplisados.jpeg',
        features: ['Poros microscópicos', 'Elimina sales disueltas', 'Retiene metales pesados', 'Elimina bacterias'],
        specifications: {
          'Función': 'Eliminación de impurezas',
          'Tecnología': 'Poros microscópicos',
          'Aplicación': 'Residencial y corporativo',
          'Beneficio': 'Agua pura y segura'
        },
        fullDescription: 'Elimina impurezas del agua. Estas membranas cuentan con poros microscópicos que permiten el paso de moléculas de agua mientras retienen sales disueltas, metales pesados, bacterias y otras contaminantes. Este proceso garantiza un suministro de agua pura y segura para beber y cocinar. En entornos residenciales, estas membranas mejoran la calidad del agua del grifo, mientras que en entornos corporativos aseguran agua limpia para empleados y procesos industriales. Su eficiencia y fiabilidad las hacen indispensables en sistemas de purificación de agua de alta calidad.'
      },
      {
        id: 'rp-002',
        name: 'FILTRO POST CARBÓN',
        description: 'Se utiliza en sistemas de ósmosis inversa para eliminar sabores y olores residuales del agua, mejorando así su calidad. Además, puede ayudar a retener partículas finas que hayan pasado las etapas anteriores de filtración.',
        category: 'repuestosPartes',
        image: '/images/Filtrosplisados.jpeg',
        features: ['Elimina sabores residuales', 'Elimina olores residuales', 'Retiene partículas finas', 'Mejora calidad del agua'],
        specifications: {
          'Uso': 'Sistemas de ósmosis inversa',
          'Función': 'Eliminación de residuos',
          'Beneficio': 'Mejora calidad del agua',
          'Aplicación': 'Post filtración'
        },
        fullDescription: 'Se utiliza en sistemas de ósmosis inversa para eliminar sabores y olores residuales del agua, mejorando así su calidad. Además, puede ayudar a retener partículas finas que hayan pasado las etapas anteriores de filtración.'
      },
      {
        id: 'rp-003',
        name: 'CARCASAS BIG BLUE DE 10" Y 20"',
        description: 'Diseñadas para alojar cartuchos filtrantes, brindando una barrera segura y resistente contra impurezas en el agua. Son ideales para sistemas de filtración residenciales, comerciales e industriales.',
        category: 'repuestosPartes',
        image: '/images/Filtrosplisados.jpeg',
        features: ['Alojamiento seguro', 'Barrera resistente', 'Múltiples aplicaciones', 'Diseño profesional'],
        specifications: {
          'Función': 'Alojar cartuchos filtrantes',
          'Tamaños': '10" y 20"',
          'Aplicación': 'Residencial, comercial e industrial',
          'Característica': 'Barrera segura y resistente'
        },
        fullDescription: 'Diseñadas para alojar cartuchos filtrantes, brindando una barrera segura y resistente contra impurezas en el agua. Son ideales para sistemas de filtración residenciales, comerciales e industriales.'
      }
    ]
  }

  useEffect(() => {
    // Buscar el producto por ID
    const allProducts = Object.values(products).flat()
    const foundProduct = allProducts.find(p => p.id === id)

    if (foundProduct) {
      setProduct(foundProduct)
    } else {
      // Si no se encuentra el producto, redirigir a la página de productos
      navigate('/productos')
    }
  }, [id, navigate])

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando producto...</p>
        </div>
      </div>
    )
  }

  const getCategoryName = (category) => {
    const categoryNames = {
      'equiposOzono': 'Equipos de Purificación a Base de Ozono',
      'sistemasFiltracion': 'Sistemas de Filtración',
      'sistemasOsmosis': 'Sistemas de Ósmosis Inversa',
      'repuestosPartes': 'Repuestos y Partes'
    }
    return categoryNames[category] || category
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate('/productos')}
              className="mr-4 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-primary-100">{getCategoryName(product.category)}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {product.name}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            {product.description}
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category Badge */}
              <div className="text-center">
                <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium">
                  {getCategoryName(product.category)}
                </span>
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.description}
                </p>
                {product.fullDescription && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Descripción Completa</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {product.fullDescription}
                    </p>
                  </div>
                )}
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Características Principales</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Especificaciones Técnicas</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                          <span className="font-medium text-gray-700">{key}:</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="/contacto"
                  className="btn-primary text-lg px-8 py-4 text-center"
                >
                  Solicitar Cotización
                </a>
                <a
                  href={`https://wa.me/593998692215?text=Hola, me interesa el producto: %0A%0A*${product.name}*%0A%0A${product.description}%0A%0APor favor, envíenme más información y precios.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-8 py-4 text-center"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Productos Relacionados
            </h2>
            <p className="text-xl text-gray-600">
              Descubre más soluciones en la misma categoría
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products[product.category]
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <button
                      onClick={() => navigate(`/producto/${relatedProduct.id}`)}
                      className="btn-primary w-full"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductoDetalle
