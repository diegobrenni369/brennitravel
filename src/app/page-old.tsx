import Hero from '@/components/shared/Hero'
import FeatureGrid from '@/components/shared/FeatureGrid'
import SectionHeader from '@/components/shared/SectionHeader'
import CTABand from '@/components/shared/CTABand'
import { Target, Users, Heart, Trophy, MapPin, Shield, Clock, Headphones } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    icon: Target,
    title: 'Experiencia Comprobada',
    description: 'Más de 15 años organizando giras de estudio exitosas para colegios de todo Chile',
  },
  {
    icon: Users,
    title: 'Equipo Profesional',
    description: 'Guías capacitados y personal dedicado 24/7 para garantizar una experiencia perfecta',
  },
  {
    icon: Heart,
    title: 'Atención Personalizada',
    description: 'Cada gira es única y adaptada a las necesidades específicas de tu curso y colegio',
  },
  {
    icon: Trophy,
    title: 'Mejor Relación Calidad-Precio',
    description: 'Planes flexibles de pago y la mejor calidad de servicios al precio más competitivo',
  },
]

const destinations = [
  {
    name: 'Bariloche',
    emoji: '🏔️',
    description: 'La magia de la Patagonia argentina te espera',
    image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80',
    href: '/la-gira#bariloche',
  },
  {
    name: 'Puerto Varas',
    emoji: '🌋',
    description: 'La ciudad de las rosas y los volcanes',
    image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80',
    href: '/la-gira#puerto-varas',
  },
  {
    name: 'Camboriú',
    emoji: '🏖️',
    description: 'El paraíso brasileño te espera',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
    href: '/la-gira#camboriu',
  },
  {
    name: 'Pucón',
    emoji: '🏞️',
    description: 'Aventura pura en la Araucanía',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    href: '/la-gira#pucon',
  },
]

const safetyHighlights = [
  {
    icon: '🚌',
    title: 'Transporte Certificado',
    description: 'Buses modernos con GPS y conductores profesionales',
  },
  {
    icon: '🏨',
    title: 'Alojamiento Seguro',
    description: 'Hoteles verificados con seguridad 24/7',
  },
  {
    icon: '🩺',
    title: 'Seguro de Viaje',
    description: 'Cobertura médica completa incluida',
  },
  {
    icon: '📱',
    title: 'Comunicación Constante',
    description: 'WhatsApp con padres en tiempo real',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        title="Tu Gira de Estudios Más Inolvidable"
        description="Experiencias únicas, seguridad garantizada y momentos que durarán para siempre"
        primaryCTA={{
          text: 'Descubre Nuestros Destinos',
          href: '/la-gira',
        }}
        secondaryCTA={{
          text: 'Solicitar Cotización',
          href: '/cotiza-tu-viaje',
        }}
      />

      {/* Why Choose Us */}
      <FeatureGrid
        subtitle="¿QUIÉNES SOMOS?"
        title="Por Qué Elegirnos"
        features={features}
        columns={4}
      />

      {/* Destinations */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="DESTINOS"
            title="La Gira de Tus Sueños"
            subtitle="Descubre nuestros destinos más populares, diseñados para crear recuerdos inolvidables"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.name}
                href={destination.href}
                className="group relative h-[450px] rounded-3xl overflow-hidden card-hover"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-display font-bold mb-2 flex items-center gap-3">
                    <span className="text-4xl">{destination.emoji}</span>
                    {destination.name}
                  </h3>
                  <p className="text-lg text-white/90 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {destination.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-transparent" />
        
        <div className="container-custom relative z-10">
          <SectionHeader
            label="NUESTRA PRIORIDAD"
            title="Seguridad Primero"
            subtitle="Tu tranquilidad y la de tus padres es lo más importante para nosotros"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/seguridad-primero"
              className="inline-flex items-center gap-2 text-accent-yellow font-semibold hover:gap-4 transition-all"
            >
              Ver todos los protocolos de seguridad
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="Apoyo estudiantil"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <SectionHeader
                label="ESTAMOS CONTIGO"
                title="Te Apoyamos en Todo"
                subtitle="Facilitamos cada paso del proceso para que solo te preocupes de disfrutar"
                align="left"
              />

              <div className="space-y-4">
                {[
                  {
                    icon: '💳',
                    title: 'Planes de Pago Flexibles',
                    description: 'Cuotas mensuales adaptadas a tu presupuesto',
                  },
                  {
                    icon: '📋',
                    title: 'Gestión de Documentación',
                    description: 'Te ayudamos con todos los trámites necesarios',
                  },
                  {
                    icon: '🎯',
                    title: 'Coordinación con el Colegio',
                    description: 'Trabajamos directamente con profesores y directivas',
                  },
                  {
                    icon: '📞',
                    title: 'Atención 24/7',
                    description: 'Línea directa disponible en todo momento',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl border-l-4 border-accent-orange hover:shadow-lg transition-all hover:translate-x-2"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/te-apoyamos"
                className="inline-block mt-8 btn-primary"
              >
                Conoce más sobre nuestro apoyo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="¿Listo para la Aventura de tu Vida?"
        description="Solicita una cotización personalizada y comienza a planificar la gira de estudios perfecta"
        primaryCTA={{
          text: 'Cotizar Ahora',
          href: '/cotiza-tu-viaje',
        }}
        secondaryCTA={{
          text: 'Hablar por WhatsApp',
          href: 'https://wa.me/56987654321',
        }}
      />
    </>
  )
}
