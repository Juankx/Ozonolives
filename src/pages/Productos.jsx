import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Productos = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('todos')

  // Efecto para leer parámetros de URL al cargar la página
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam && ['equiposOzono', 'sistemasFiltracion', 'sistemasOsmosis', 'repuestosPartes'].includes(categoryParam)) {
      setSelectedCategory(categoryParam)
    }
  }, [searchParams])

  // Función para cambiar categoría y actualizar URL
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    if (categoryId === 'todos') {
      setSearchParams({})
    } else {
      setSearchParams({ category: categoryId })
    }
  }

  // Datos de productos por categoría actualizados según especificaciones
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
      }
    ]
  }

  const categories = [
    { id: 'todos', name: 'Todos los Productos', count: Object.values(products).flat().length },
    { id: 'equiposOzono', name: 'Equipos de Purificación a Base de Ozono', count: products.equiposOzono.length },
    { id: 'sistemasFiltracion', name: 'Sistemas de Filtración', count: products.sistemasFiltracion.length },
    { id: 'sistemasOsmosis', name: 'Sistemas de Ósmosis Inversa', count: products.sistemasOsmosis.length },
    { id: 'repuestosPartes', name: 'Repuestos y Partes', count: products.repuestosPartes.length }
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
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-sm'
                }`}
              >
                {category.name}
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'todos' ? 'Todos los Productos' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {selectedCategory === 'todos' 
                ? 'Descubre nuestra completa gama de productos de purificación de agua'
                : `Productos de la categoría ${categories.find(c => c.id === selectedCategory)?.name}`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {getFilteredProducts().map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>

          {getFilteredProducts().length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-600">
                Intenta seleccionar otra categoría o contacta con nosotros para más información.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Productos
