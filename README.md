# Ozonolives - Sitio Web de Purificación de Agua

Sitio web responsivo para Ozonolives, especialistas en purificación de agua y productos ecológicos. Desarrollado con React, Vite y TailwindCSS.

## 🚀 Características

- **Diseño Responsivo**: Mobile-first design optimizado para todos los dispositivos
- **Navegación Intuitiva**: Menú sticky con navegación suave entre secciones
- **Componentes Reutilizables**: Arquitectura modular y escalable
- **SEO Optimizado**: Metadatos y estructura semántica para mejor posicionamiento
- **Formularios Validados**: Formulario de contacto con validación en tiempo real
- **Animaciones Suaves**: Transiciones y efectos visuales sutiles
- **Paleta de Colores**: Tema azul-verde relacionado con agua y ecología

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **TailwindCSS** - Framework CSS utilitario
- **React Router** - Enrutamiento de aplicaciones
- **PostCSS** - Procesador CSS
- **ESLint** - Linter para código JavaScript

## 📁 Estructura del Proyecto

```
ozonolives/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Navbar.jsx     # Navegación principal
│   │   ├── Footer.jsx     # Pie de página
│   │   ├── HeroSection.jsx # Sección hero reutilizable
│   │   ├── ProductCard.jsx # Tarjeta de producto
│   │   └── FeatureCard.jsx # Tarjeta de características
│   ├── pages/             # Páginas principales
│   │   ├── Home.jsx       # Página de inicio
│   │   ├── Productos.jsx  # Catálogo de productos
│   │   ├── Servicios.jsx  # Servicios ofrecidos
│   │   ├── Nosotros.jsx   # Información de la empresa
│   │   └── Contacto.jsx   # Formulario de contacto
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite
├── tailwind.config.js     # Configuración de TailwindCSS
└── postcss.config.js      # Configuración de PostCSS
```

## 🚀 Instalación

### Prerrequisitos

- Node.js 16.0 o superior
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd ozonolives
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📱 Páginas y Funcionalidades

### 🏠 Inicio (Home)
- Hero section con llamada a la acción
- Productos destacados
- Características principales
- Testimonios de clientes
- CTA final

### 🛍️ Productos
- Catálogo organizado por categorías
- Filtros residenciales e industriales
- Accesorios y repuestos
- Filtrado dinámico por categoría

### 🔧 Servicios
- Instalación profesional
- Mantenimiento preventivo
- Asesoría técnica
- Proceso de trabajo paso a paso

### 👥 Nosotros
- Misión y visión
- Valores corporativos
- Historia de la empresa
- Equipo directivo
- Línea de tiempo

### 📞 Contacto
- Formulario de contacto validado
- Información de contacto
- Preguntas frecuentes
- Mapa de ubicación (placeholder)

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:

- **Primary**: Azules (agua)
- **Secondary**: Verdes (ecología)
- **Accent**: Azules complementarios

### Componentes
Todos los componentes están diseñados para ser fácilmente personalizables:

- Modificar props para cambiar contenido
- Ajustar clases de Tailwind para estilos
- Agregar nuevas funcionalidades

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Construye para producción
npm run preview      # Vista previa de la construcción

# Linting
npm run lint         # Ejecuta ESLint
```

## 📦 Construcción para Producción

```bash
npm run build
```

Los archivos construidos se generarán en la carpeta `dist/`.

## 🌐 Despliegue

### Netlify
1. Conectar repositorio de GitHub
2. Configurar comando de construcción: `npm run build`
3. Configurar carpeta de publicación: `dist`

### Vercel
1. Importar proyecto desde GitHub
2. Configurar framework: Vite
3. Desplegar automáticamente

### Servidor Tradicional
1. Ejecutar `npm run build`
2. Subir contenido de `dist/` al servidor web
3. Configurar redirecciones para SPA

## 🔧 Configuración Adicional

### Variables de Entorno
Crear archivo `.env.local` para configuraciones específicas:

```env
VITE_API_URL=https://api.ozonolives.com
VITE_GOOGLE_MAPS_KEY=tu_api_key_aqui
```

### Google Maps
Para integrar mapas reales en la página de contacto:

1. Obtener API key de Google Maps
2. Reemplazar placeholder en `Contacto.jsx`
3. Implementar componente de mapa

### Analytics
Para agregar Google Analytics:

1. Instalar `react-ga`
2. Configurar en `App.jsx`
3. Agregar tracking de eventos

## 📱 Responsive Design

El sitio está optimizado para:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accesibilidad

- Navegación por teclado
- Contraste de colores adecuado
- Textos alternativos para imágenes
- Estructura semántica HTML

## 🔍 SEO

- Metadatos optimizados
- Estructura de encabezados jerárquica
- URLs amigables
- Open Graph tags
- Schema markup preparado

## 🚀 Futuras Mejoras

- [ ] Carrito de compras
- [ ] Sistema de usuarios
- [ ] Blog integrado
- [ ] Chat en vivo
- [ ] Integración con CRM
- [ ] Sistema de reservas
- [ ] Multiidioma

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:

- **Email**: info@ozonolives.com
- **Teléfono**: +1 (555) 123-4567

## 📄 Licencia

Este proyecto es propiedad de Ozonolives. Todos los derechos reservados.

---

**© 2025 Ozonolives. Todos los derechos reservados.**
