# BrenniTravel - Website de Giras de Estudio

Sitio web moderno y profesional para agencia de giras de estudio en Chile.

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ y npm/yarn/pnpm

### Instalación

```bash
# Clonar el repositorio
git clone <repo-url>
cd brennitravel-nextjs

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev

# Abrir en navegador
# http://localhost:3000
```

### Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Crea build de producción
npm run start        # Inicia servidor de producción
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos de TypeScript
```

## 📁 Estructura del Proyecto

```
brennitravel-nextjs/
├── src/
│   ├── app/                      # Páginas (Next.js App Router)
│   │   ├── page.tsx              # Home
│   │   ├── conocenos/            # Sobre nosotros
│   │   ├── la-gira/              # Información del tour
│   │   ├── seguridad-primero/    # Protocolos de seguridad
│   │   ├── te-apoyamos/          # Soporte al cliente
│   │   ├── experiencias/         # Experiencias disponibles
│   │   ├── cotiza-tu-viaje/      # Formulario de cotización
│   │   ├── api/
│   │   │   └── quote/            # API endpoint para cotizaciones
│   │   ├── layout.tsx            # Layout principal
│   │   └── globals.css           # Estilos globales
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Header con navegación
│   │   │   └── Footer.tsx        # Footer
│   │   ├── shared/
│   │   │   ├── Hero.tsx          # Hero section reutilizable
│   │   │   ├── FeatureGrid.tsx   # Grid de features
│   │   │   ├── SectionHeader.tsx # Encabezados de sección
│   │   │   └── CTABand.tsx       # Call-to-action sections
│   │   └── forms/
│   │       └── QuoteForm.tsx     # Formulario de cotización
│   ├── lib/
│   │   └── validations/
│   │       └── quote.ts          # Schemas de validación (Zod)
│   └── types/
│       └── quote.ts              # TypeScript types
├── public/                       # Assets estáticos
├── docs/
│   └── decisions.md              # Decisiones técnicas
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Validación**: Zod + React Hook Form
- **Iconos**: Lucide React
- **Deployment**: Vercel (recomendado)

## 📄 Páginas Implementadas

### ✅ Completadas

1. **Home** (`/`)
   - Hero con CTA principal
   - Features grid (Por qué elegirnos)
   - Destinos destacados
   - Safety highlights
   - Support section
   - CTA final

2. **Conócenos** (`/conocenos`)
   - Historia de la empresa
   - Valores corporativos
   - Estadísticas
   - Equipo
   - Certificaciones

3. **Cotiza tu Viaje** (`/cotiza-tu-viaje`)
   - Formulario completo con validación
   - Proceso paso a paso
   - CTAs alternativos (WhatsApp, llamada)

### 🚧 Pendientes (Implementar según necesidad)

4. **La Gira** (`/la-gira`)
   - Proceso end-to-end
   - Qué incluye/no incluye
   - Destinos detallados

5. **Seguridad Primero** (`/seguridad-primero`)
   - Protocolos detallados
   - Seguros y coberturas
   - Staff y coordinación

6. **Te Apoyamos** (`/te-apoyamos`)
   - Acompañamiento
   - Reuniones informativas
   - Gestión de pagos

7. **Experiencias** (`/experiencias`)
   - Catálogo de experiencias
   - Filtros
   - Ejemplos de itinerarios

## 🔧 Configuración del Formulario de Cotización

El formulario actualmente **imprime en consola** para desarrollo.

### Para Producción: Integrar con Email Service

**Opción Recomendada: Resend**

```bash
npm install resend
```

Crear archivo `.env.local`:
```env
RESEND_API_KEY=re_tu_api_key_aqui
```

Modificar `/src/app/api/quote/route.ts`:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Dentro de la función POST:
await resend.emails.send({
  from: 'onboarding@brennitravel.cl',
  to: 'info@brennitravel.cl',
  subject: `Nueva Cotización - ${validatedData.colegio}`,
  html: `
    <h1>Nueva Solicitud de Cotización</h1>
    <p><strong>Nombre:</strong> ${validatedData.nombre}</p>
    <p><strong>Colegio:</strong> ${validatedData.colegio}</p>
    <p><strong>Ciudad:</strong> ${validatedData.ciudad}</p>
    <p><strong>Estudiantes:</strong> ${validatedData.numeroEstudiantes}</p>
    <p><strong>Destinos:</strong> ${validatedData.destinoInteres.join(', ')}</p>
    <p><strong>Email:</strong> ${validatedData.email}</p>
    <p><strong>Teléfono:</strong> ${validatedData.telefono}</p>
  `
})
```

Ver más opciones en `/docs/decisions.md`

## 🎨 Personalización de Diseño

### Colores
Editar `/tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#1e5a8e',  // Tu azul principal
    dark: '#0d47a1',
    light: '#2196F3',
  },
  accent: {
    orange: '#FF6B35',   // Cambiar según marca
    yellow: '#FFC107',
  },
}
```

### Tipografía
Editar `/src/app/layout.tsx`:

```typescript
const poppins = Poppins({ ... })
const montserrat = Montserrat({ ... })
```

### Logo
Reemplazar texto "BrenniTravel" en:
- `/src/components/layout/Header.tsx`
- `/src/components/layout/Footer.tsx`

Con:
```tsx
<Image src="/logo.svg" alt="BrenniTravel" width={180} height={50} />
```

## 📱 Responsive Design

El sitio es **mobile-first** y totalmente responsive:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1280px+

## ♿ Accesibilidad

- ✅ Contraste de colores WCAG AA
- ✅ Labels en todos los form inputs
- ✅ Focus visible en elementos interactivos
- ✅ Navegación por teclado
- ✅ Aria labels en iconos

## 🚀 Deployment

### Vercel (Recomendado)

1. Push código a GitHub
2. Importar en [Vercel](https://vercel.com)
3. Vercel detecta Next.js automáticamente
4. Configurar variables de entorno
5. Deploy automático

### Otras Opciones
- Netlify
- AWS Amplify
- Railway
- Render

## 📊 SEO

Cada página tiene metadata optimizada:
- Title único
- Description
- Keywords
- Open Graph tags
- Twitter cards

## 🐛 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Error de TypeScript
```bash
npm run type-check
```

### Port 3000 ocupado
```bash
# Usar otro puerto
PORT=3001 npm run dev
```

## 📈 Métricas de Performance

Target (Lighthouse):
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## 🔐 Seguridad

- ✅ Validación server-side con Zod
- ✅ Sanitización de inputs
- ✅ CORS configurado
- ✅ Rate limiting (agregar en producción)

## 📝 Checklist de Aceptación

### ✅ Completado

- [x] Menú con 6 secciones especificadas
- [x] Home page funcional con todos los componentes
- [x] Página "Conócenos" completa
- [x] Página "Cotiza tu Viaje" con formulario funcional
- [x] Formulario con validación completa
- [x] Diseño responsive
- [x] SEO básico por página
- [x] Header y Footer funcionales
- [x] Componentes reutilizables documentados
- [x] Instrucciones de ejecución y build
- [x] Documentación técnica

### 🚧 Pendiente (Nice-to-Have)

- [ ] Páginas internas restantes (La Gira, Seguridad, Te Apoyamos, Experiencias)
- [ ] Integración real de email/CRM
- [ ] Sistema de testimonios
- [ ] Galería de fotos
- [ ] Blog
- [ ] Testing automatizado
- [ ] Analytics integrado
- [ ] Optimizaciones de performance avanzadas

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📞 Contacto

BrenniTravel - info@brennitravel.cl

## 📄 Licencia

Propiedad de BrenniTravel © 2026
