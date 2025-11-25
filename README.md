# TOMOTOMO - Plataforma de Comercio Electrónico para Manga y Cómics

![Estado del Proyecto](https://img.shields.io/badge/status-active-success.svg)
![Licencia](https://img.shields.io/badge/license-MIT-blue.svg)

## Descripción General del Proyecto

**TOMOTOMO** es una plataforma de comercio electrónico especializada diseñada para la venta minorista de manga y cómics. Construida sobre una pila tecnológica moderna que incluye **React** y **Vite**, la aplicación ofrece una experiencia de usuario de alto rendimiento y capacidad de respuesta. La filosofía de diseño prioriza el compromiso visual a través de una estética inspirada en el anime, manteniendo al mismo tiempo una funcionalidad robusta de comercio electrónico.

## Arquitectura Técnica

El proyecto utiliza una arquitectura basada en componentes para garantizar la escalabilidad y la mantenibilidad.

- **Framework Frontend**: React 18
- **Sistema de Construcción**: Vite
- **Enrutamiento**: React Router DOM
- **Motor de Animación**: Framer Motion
- **Iconografía**: Lucide React
- **Gestión de Estado**: React Context API

## Capacidades Principales

La aplicación implementa características estándar de comercio electrónico optimizadas para el grupo demográfico objetivo:

- **Interfaz Responsiva**: Diseño adaptativo que garantiza una funcionalidad completa en dispositivos de escritorio, tabletas y móviles.
- **Interacciones Dinámicas**: Utilización de Framer Motion para transiciones de estado fluidas y micro-interacciones.
- **Gestión del Carrito**: Funcionalidad de carrito de compras persistente con preservación de estado.
- **Búsqueda y Filtrado Avanzados**: Indexación de productos en tiempo real con filtrado por categorías (Manga, Cómics, Novelas).
- **Sistema de Diseño Visual**: Paleta de colores personalizada y activos visuales alineados con la identidad de la marca.

## Instalación y Configuración

### Requisitos Previos

- Node.js (Versión 16 o superior)
- npm (Gestor de Paquetes de Node)

### Pasos de Despliegue

1.  **Clonar el Repositorio**
    ```bash
    git clone https://github.com/tu-usuario/tomotomo-react.git
    cd tomotomo-react
    ```

2.  **Instalar Dependencias**
    ```bash
    npm install
    ```

3.  **Inicializar Entorno de Desarrollo**
    ```bash
    npm run dev
    ```

4.  **Acceder a la Aplicación**
    Navega a `http://localhost:5173` en tu navegador web.

## Scripts

- `npm run dev`: Inicia el servidor de desarrollo con Reemplazo de Módulos en Caliente (HMR).
- `npm run build`: Compila la aplicación para el despliegue en producción.
- `npm run preview`: Sirve la compilación de producción localmente para verificación.
- `npm run lint`: Ejecuta el análisis de código estático.

## Estructura del Proyecto

```text
src/
├── components/          # Componentes de UI reutilizables
│   ├── Header.jsx       # Navegación y acceso al carrito
│   ├── Hero.jsx         # Visualización principal de aterrizaje
│   ├── Categories.jsx   # Navegación por taxonomía
│   ├── Products.jsx     # Cuadrícula de productos y lógica de filtrado
│   ├── Features.jsx     # Visualización de propuesta de valor
│   ├── Footer.jsx       # Información del sitio y enlaces
│   └── CartModal.jsx    # Interfaz del carrito de compras
├── context/             # Definiciones de estado global
│   └── CartContext.jsx  # Lógica de estado del carrito
├── App.jsx              # Componente raíz y configuración de enrutamiento
├── App.css              # Definiciones de estilo globales
└── main.jsx             # Punto de entrada de la aplicación
```

## Pautas de Contribución

Las contribuciones al código base son bienvenidas. Por favor, adhiérete al siguiente flujo de trabajo:

1.  Haz un Fork del repositorio.
2.  Crea una rama de funcionalidad (`git checkout -b feature/NuevaFuncionalidad`).
3.  Haz Commit de los cambios (`git commit -m 'Implementar NuevaFuncionalidad'`).
4.  Haz Push a la rama (`git push origin feature/NuevaFuncionalidad`).
5.  Envía un Pull Request para revisión.

## Licencia

Este proyecto se distribuye bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
