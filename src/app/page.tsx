import Hero from '@/components/shared/Hero'
import SectionHeader from '@/components/shared/SectionHeader'
import { Target, Users, Heart, Award } from 'lucide-react'
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
    icon: Award,
    title: 'Mejor Relación Calidad-Precio',
    description: 'Planes flexibles de pago y la mejor calidad de servicios al precio más competitivo',
  },
]

const destinations = [
  {
    name: 'Bariloche',
    description: 'La magia de la Patagonia argentina te espera',
    image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=80',
    href: '/la-gira#bariloche',
  },
  {
    name: 'Puerto Varas',
    description: 'La ciudad de las rosas y los volcanes',
    image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&q=80',
    href: '/la-gira#puerto-varas',
  },
  {
    name: 'Camboriú',
    description: 'El paraíso brasileño te espera',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=80',
    href: '/la-gira#camboriu',
  },
  {
    name: 'Pucón',
    description: 'Aventura pura en la Araucanía',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    href: '/la-gira#pucon',
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
          text: 'Explorar Destinos',
          href: '/la-gira',
        }}
        secondaryCTA={{
          text: 'Solicitar Cotización',
          href: '/cotiza-tu-viaje',
        }}
        backgroundImage="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=2000&q=80"
      />

      {/* Why Choose Us - Editorial grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            label="¿POR QUÉ ELEGIRNOS?"
            title="Hacemos que cada gira sea especial"
            subtitle="Con más de 15 años de experiencia, somos expertos en crear momentos inolvidables"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="group">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-stone-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Destinations - Large editorial cards */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <SectionHeader
            label="DESTINOS"
            title="Descubre tu próxima aventura"
            subtitle="Desde la Patagonia argentina hasta las playas de Brasil, cada destino ofrece experiencias únicas"
          />

          {/* Large featured destination */}
          <Link 
            href={destinations[0].href}
            className="block relative h-[600px] rounded-3xl overflow-hidden mb-8 group"
          >
            <Image
              src={destinations[0].image}
              alt={destinations[0].name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <h3 className="text-5xl md:text-6xl font-display font-semibold text-white mb-4">
                {destinations[0].name}
              </h3>
              <p className="text-xl text-white/90 max-w-2xl">
                {destinations[0].description}
              </p>
            </div>
          </Link>

          {/* Grid of other destinations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.slice(1).map((destination, index) => (
              <Link
                key={index}
                href={destination.href}
                className="group relative h-[400px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-display font-semibold text-white mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-white/90">
                    {destination.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Safety - Clean info section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
                alt="Seguridad"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="max-w-xl">
                <p className="text-blue-600 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
                  NUESTRA PRIORIDAD
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-semibold text-stone-900 mb-6 leading-tight">
                  Seguridad garantizada en cada momento
                </h2>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  La tranquilidad de los estudiantes y sus familias es lo más importante para nosotros. 
                  Cada detalle está pensado para garantizar una experiencia segura y memorable.
                </p>

                <div className="space-y-6">
                  {[
                    'Transporte certificado con GPS',
                    'Alojamiento verificado con seguridad 24/7',
                    'Seguro de viaje completo incluido',
                    'Comunicación constante con apoderados',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-stone-700 text-lg">{item}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/seguridad-primero"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-8 hover:gap-4 transition-all"
                >
                  Ver todos los protocolos
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Clean and minimal */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6 max-w-4xl mx-auto leading-tight">
            ¿Listo para la aventura de tu vida?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Solicita una cotización personalizada y comienza a planificar la gira perfecta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cotiza-tu-viaje"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-stone-100 transition-all shadow-lg hover:shadow-xl"
            >
              Cotizar Ahora
            </Link>
            <Link
              href="https://wa.me/56987654321"
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all"
            >
              Hablar por WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
