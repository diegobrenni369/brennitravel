# Decisiones Técnicas - BrenniTravel Website

## Stack Tecnológico

### Framework: Next.js 14 (App Router)
**Razón**: Next.js proporciona:
- Renderizado del lado del servidor (SSR) para mejor SEO
- Generación estática de páginas para máximo rendimiento
- Rutas basadas en archivos para organización clara
- Optimización automática de imágenes
- API Routes integradas para backend

### Estilos: Tailwind CSS
**Razón**:
- Desarrollo rápido con utility classes
- Bundle size optimizado (solo incluye clases usadas)
- Diseño responsive fácil de implementar
- Configuración de tema centralizada
- Excelente DX con autocompletado

### TypeScript
**Razón**:
- Type safety previene errores en tiempo de desarrollo
- Mejor IntelliSense y autocompletado
- Código más mantenible y documentado
- Escalabilidad para futuras features

### Validación: Zod + React Hook Form
**Razón**:
- Validación type-safe tanto en cliente como servidor
- Mejor UX con validación en tiempo real
- Mensajes de error personalizados
- Fácil integración con TypeScript

## Arquitectura del Proyecto

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx           # Home page
│   ├── conocenos/         # About page
│   ├── la-gira/           # Tour info page
│   ├── seguridad-primero/ # Safety page
│   ├── te-apoyamos/       # Support page
│   ├── experiencias/      # Experiences page
│   ├── cotiza-tu-viaje/   # Quote page
│   └── api/               # API routes
│       └── quote/         # Quote submission endpoint
├── components/
│   ├── layout/            # Header, Footer
│   ├── shared/            # Reusable components
│   └── forms/             # Form components
├── lib/
│   └── validations/       # Zod schemas
└── types/                 # TypeScript types
```

## Decisiones de Diseño

### Mobile-First Approach
Todos los componentes se diseñaron primero para móvil, luego se adaptaron para desktop usando breakpoints de Tailwind (sm, md, lg, xl).

### Componentes Reutilizables
Se crearon componentes base que se pueden usar en múltiples páginas:
- `Hero`: Hero section con variantes
- `FeatureGrid`: Grid de features/beneficios
- `SectionHeader`: Encabezados de sección consistentes
- `CTABand`: Call-to-action sections

### Sistema de Colores
Paleta inspirada en la marca:
- Primary Blue: #1e5a8e (confianza, profesionalismo)
- Accent Orange: #FF6B35 (energía, juventud)
- Accent Yellow: #FFC107 (optimismo, diversión)

## Manejo de Formularios

### Estado del Formulario
- Validación en tiempo real con React Hook Form
- Mensajes de error inline
- Estados de loading durante submit
- Mensajes de éxito/error post-submit

### API Route (`/api/quote`)
Actualmente implementado con console.log para desarrollo.

**Para producción, reemplazar con una de estas opciones:**

#### Opción 1: Email Service (Recomendado)
```bash
npm install resend
```

```typescript
// En /api/quote/route.ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'onboarding@brennitravel.cl',
  to: 'info@brennitravel.cl',
  subject: `Nueva Cotización - ${validatedData.colegio}`,
  html: generateEmailHTML(validatedData)
})
```

#### Opción 2: Base de Datos
```bash
npm install @prisma/client
npx prisma init
```

```typescript
// Crear modelo en schema.prisma y guardar lead
await prisma.lead.create({
  data: validatedData
})
```

#### Opción 3: Webhook a Backend Externo
```typescript
await fetch('https://your-backend.com/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(validatedData)
})
```

## SEO y Performance

### Metadata por Página
Cada página tiene metadata específica (title, description) para SEO.

### Optimización de Imágenes
- Next/Image para lazy loading automático
- WebP format cuando disponible
- Responsive images automático

### Performance
- Code splitting automático por ruta
- Componentes de cliente separados de servidor
- CSS crítico inline automático

## Accesibilidad

- Contraste de colores cumple WCAG AA
- Labels en todos los inputs del formulario
- Focus visible en elementos interactivos
- Navegación por teclado funcional
- Aria labels en iconos

## Próximos Pasos (Nice-to-Have)

### Fase 2
- [ ] Sistema de CMS para gestionar destinos
- [ ] Galería de fotos de giras anteriores
- [ ] Sistema de testimonios con moderación
- [ ] Blog de viajes y tips

### Fase 3
- [ ] Panel de administración
- [ ] Sistema de reservas online con pagos
- [ ] Chat en vivo
- [ ] App móvil nativa

### Fase 4
- [ ] Sistema de tracking de grupo en tiempo real
- [ ] App para apoderados con actualizaciones
- [ ] Gamificación pre-viaje
- [ ] Sistema de fotografías compartidas

## Configuración de Deployment

### Vercel (Recomendado)
1. Conectar repo de GitHub
2. Vercel detecta Next.js automáticamente
3. Configurar variables de entorno
4. Deploy automático en cada push

### Variables de Entorno
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://brennitravel.cl
RESEND_API_KEY=your_key_here  # Si usas Resend
DATABASE_URL=your_db_url       # Si usas DB
```

## Testing

### Recomendado para Fase 2
```bash
npm install -D @testing-library/react @testing-library/jest-dom jest
npm install -D @playwright/test  # Para E2E tests
```

## Monitoreo

### Recomendado para Producción
- Vercel Analytics (incluido gratis)
- Sentry para error tracking
- Google Analytics para analytics
- Hotjar para heatmaps y session recordings
