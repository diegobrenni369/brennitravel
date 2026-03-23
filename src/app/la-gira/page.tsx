import type { Metadata } from 'next'
import Hero from '@/components/shared/Hero'
import SectionHeader from '@/components/shared/SectionHeader'
import CTABand from '@/components/shared/CTABand'
import { CheckCircle, XCircle, Calendar, Users, MapPin, Utensils, Hotel, Bus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'La Gira',
  description: 'Descubre cómo funciona nuestra gira de estudios paso a paso. Conoce los destinos, qué incluye y cómo planificamos cada detalle de tu viaje.',
}

const process = [
  {
    number: '01',
    title: 'Cotización Inicial',
    description: 'Completas el formulario con las necesidades de tu curso. Nos contactamos en menos de 24 horas para conocer más detalles y preferencias.',
    icon: '📝',
  },
  {
    number: '02',
    title: 'Propuesta Personalizada',
    description: 'Diseñamos un itinerario a medida con destinos, actividades, alojamiento y presupuesto adaptado a tu grupo.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Planificación y Ajustes',
    description: 'Trabajamos juntos para afinar detalles. Reuniones con apoderados, gestión de permisos y documentación completa.',
    icon: '📋',
  },
  {
    number: '04',
    title: 'Sistema de Pagos',
    description: 'Planes flexibles de pago en cuotas. Te ayudamos con estrategias de recaudación y gestión de fondos del curso.',
    icon: '💳',
  },
  {
    number: '05',
    title: 'Preparación Pre-Viaje',
    description: 'Reuniones informativas, checklists, grupo de WhatsApp con apoderados, y toda la información necesaria antes de partir.',
    icon: '✈️',
  },
  {
    number: '06',
    title: '¡A Viajar!',
    description: 'Nuestro equipo coordina cada detalle durante el viaje. Actualizaciones diarias, fotos y videos para apoderados.',
    icon: '🎉',
  },
  {
    number: '07',
    title: 'Post-Viaje',
    description: 'Galería de fotos, video resumen, certificado de participación y encuesta de satisfacción.',
    icon: '📸',
  },
]

const includes = [
  { icon: Bus, text: 'Transporte terrestre y/o aéreo completo' },
  { icon: Hotel, text: 'Alojamiento en hoteles certificados' },
  { icon: Utensils, text: 'Alimentación según itinerario (desayuno, almuerzo, cena)' },
  { icon: Users, text: 'Guías y coordinadores 24/7' },
  { icon: CheckCircle, text: 'Seguro de viaje y asistencia médica' },
  { icon: MapPin, text: 'Entradas a todos los atractivos turísticos' },
  { icon: Calendar, text: 'Actividades recreativas y educativas' },
  { icon: CheckCircle, text: 'Kit de bienvenida para cada estudiante' },
]

const notIncludes = [
  'Gastos personales y compras',
  'Comidas no especificadas en el itinerario',
  'Propinas (opcionales)',
  'Actividades opcionales fuera del programa',
  'Documentación (pasaporte, permisos, etc.)',
  'Seguro de cancelación (opcional, disponible)',
]

const destinations = [
  {
    id: 'bariloche',
    name: 'Bariloche',
    country: 'Argentina',
    emoji: '🏔️',
    description: 'La joya de la Patagonia argentina, ideal para estudiantes que buscan aventura y naturaleza',
    highlights: [
      'Centro Cívico y shopping',
      'Cerro Catedral y teleférico',
      'Circuito Chico',
      'Isla Victoria y Bosque de Arrayanes',
      'Noche de despedida con fiesta temática',
    ],
    duration: '7 días / 6 noches',
    image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80',
    bestFor: 'Aventura, naturaleza, experiencia internacional',
  },
  {
    id: 'puerto-varas',
    name: 'Puerto Varas',
    country: 'Chile',
    emoji: '🌋',
    description: 'La ciudad de las rosas, con impresionantes volcanes y cultura del sur de Chile',
    highlights: [
      'Volcán Osorno y termas',
      'Saltos del Petrohué',
      'Puerto Montt y Angelmó',
      'Lago Llanquihue',
      'Actividades en Frutillar',
    ],
    duration: '5-6 días / 4-5 noches',
    image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80',
    bestFor: 'Naturaleza, cultura local, presupuesto accesible',
  },
  {
    id: 'camboriu',
    name: 'Camboriú',
    country: 'Brasil',
    emoji: '🏖️',
    description: 'El paraíso brasileño con playas espectaculares y parques temáticos',
    highlights: [
      'Playa Central y Barra Sul',
      'Parque Unipraias',
      'Beto Carrero World',
      'Cristo Luz',
      'Shopping y gastronomía brasileña',
    ],
    duration: '8 días / 7 noches',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
    bestFor: 'Playa, diversión, cultura brasileña',
  },
  {
    id: 'pucon',
    name: 'Pucón',
    country: 'Chile',
    emoji: '🏞️',
    description: 'Capital de la aventura en la Araucanía chilena',
    highlights: [
      'Termas geométricas',
      'Ojos del Caburgua',
      'Parque Nacional Huerquehue',
      'Actividades extremas (rafting, canopy)',
      'Volcán Villarrica',
    ],
    duration: '5-6 días / 4-5 noches',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    bestFor: 'Deportes extremos, naturaleza, termas',
  },
]

export default function LaGiraPage() {
  return (
    <>
      <Hero
        variant="page"
        subtitle="PLANIFICA TU AVENTURA"
        title="La Gira de Estudios Perfecta"
        description="Descubre cómo funciona nuestro proceso y los increíbles destinos que tenemos para ti"
      />

      {/* Process Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="NUESTRO PROCESO"
            title="De la Cotización al Viaje"
            subtitle="Un proceso simple y transparente que te acompaña en cada paso"
          />

          <div className="max-w-5xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                {index < process.length - 1 && (
                  <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent-orange" />
                )}
                
                {/* Step */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{step.icon}</span>
                      <div>
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <SectionHeader
            label="TRANSPARENCIA TOTAL"
            title="Qué Incluye y Qué No"
            subtitle="Para que no haya sorpresas, te contamos exactamente qué incluye tu paquete"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Includes */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900">
                  ✅ Incluye
                </h3>
              </div>
              
              <ul className="space-y-4">
                {includes.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Not Includes */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-7 h-7 text-accent-orange" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900">
                  ❌ No Incluye
                </h3>
              </div>
              
              <ul className="space-y-4">
                {notIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gray-400 flex-shrink-0">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-orange-50 rounded-xl border-l-4 border-accent-orange">
                <p className="text-sm text-gray-700">
                  <strong>Nota:</strong> Todos estos gastos son opcionales y puedes presupuestarlos con anticipación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="NUESTROS DESTINOS"
            title="Elige Tu Aventura"
            subtitle="Cada destino ofrece experiencias únicas adaptadas a diferentes intereses y presupuestos"
          />

          <div className="space-y-12">
            {destinations.map((dest, index) => (
              <div
                key={dest.id}
                id={dest.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl">{dest.emoji}</span>
                    <div>
                      <h3 className="text-3xl font-display font-bold text-gray-900">
                        {dest.name}
                      </h3>
                      <p className="text-primary font-medium">{dest.country}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6">{dest.description}</p>

                  <div className="bg-neutral-light rounded-2xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      ✨ Highlights del Viaje:
                    </h4>
                    <ul className="space-y-2">
                      {dest.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-accent-orange mt-1">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-medium">{dest.duration}</span>
                    </div>
                    <div className="px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        Ideal para: {dest.bestFor}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/cotiza-tu-viaje"
                    className="inline-flex items-center gap-2 btn-primary"
                  >
                    Cotizar {dest.name}
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="¿Listo para Empezar a Planificar?"
        description="Cuéntanos sobre tu curso y diseñaremos la gira perfecta para ustedes"
        primaryCTA={{
          text: 'Solicitar Cotización',
          href: '/cotiza-tu-viaje',
        }}
        secondaryCTA={{
          text: 'Hablar con un Asesor',
          href: 'https://wa.me/56987654321',
        }}
      />
    </>
  )
}
