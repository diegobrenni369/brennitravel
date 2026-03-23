import type { Metadata } from 'next'
import Hero from '@/components/shared/Hero'
import FeatureGrid from '@/components/shared/FeatureGrid'
import SectionHeader from '@/components/shared/SectionHeader'
import CTABand from '@/components/shared/CTABand'
import { Target, Users, Heart, Award, TrendingUp, Globe, Shield, Sparkles } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Conócenos',
  description: 'Conoce a BrenniTravel, especialistas en giras de estudio con más de 15 años de experiencia creando momentos inolvidables.',
}

const values = [
  {
    icon: Shield,
    title: 'Seguridad Primero',
    description: 'La seguridad de los estudiantes es nuestra máxima prioridad en cada decisión que tomamos.',
  },
  {
    icon: Heart,
    title: 'Pasión por el Servicio',
    description: 'Nos apasiona crear experiencias que transformen la vida de los estudiantes.',
  },
  {
    icon: Target,
    title: 'Compromiso con la Excelencia',
    description: 'Buscamos constantemente superar las expectativas en cada detalle de nuestros servicios.',
  },
  {
    icon: Users,
    title: 'Trabajo en Equipo',
    description: 'Colaboramos con colegios, apoderados y estudiantes para lograr giras extraordinarias.',
  },
]

const stats = [
  { number: '15+', label: 'Años de Experiencia' },
  { number: '500+', label: 'Giras Realizadas' },
  { number: '25,000+', label: 'Estudiantes Felices' },
  { number: '98%', label: 'Satisfacción' },
]

const team = [
  {
    name: 'Equipo de Coordinación',
    description: 'Profesionales dedicados a planificar cada detalle de tu gira',
    icon: '🎯',
  },
  {
    name: 'Guías Especializados',
    description: 'Expertos en destinos con formación en turismo educativo',
    icon: '🧭',
  },
  {
    name: 'Soporte 24/7',
    description: 'Disponibles en todo momento durante tu viaje',
    icon: '📞',
  },
  {
    name: 'Equipo de Seguridad',
    description: 'Capacitados en primeros auxilios y protocolos de emergencia',
    icon: '🚨',
  },
]

export default function ConocenosPage() {
  return (
    <>
      <Hero
        variant="page"
        subtitle="QUIÉNES SOMOS"
        title="Conócenos"
        description="Especialistas en crear experiencias educativas y recreativas que transforman la vida de los estudiantes"
      />

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="NUESTRA HISTORIA"
                title="Más de 15 Años Creando Recuerdos"
                subtitle="Comenzamos con un sueño: hacer que cada gira de estudios sea una experiencia inolvidable"
                align="left"
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BrenniTravel nació de la convicción de que una gira de estudios es mucho más que un simple viaje. 
                  Es una oportunidad única para que los estudiantes crezcan, aprendan y creen vínculos que durarán toda la vida.
                </p>
                <p>
                  Con más de 15 años en la industria, hemos perfeccionado el arte de combinar educación, diversión y seguridad 
                  en cada experiencia que creamos. Hemos tenido el privilegio de acompañar a más de 25,000 estudiantes en sus 
                  giras de estudio, creando momentos que recordarán para siempre.
                </p>
                <p>
                  Nuestro compromiso va más allá de organizar viajes. Trabajamos codo a codo con colegios, apoderados y estudiantes 
                  para diseñar experiencias que cumplan objetivos educativos mientras garantizamos diversión y seguridad absoluta.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="Equipo BrenniTravel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-accent-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <FeatureGrid
        subtitle="NUESTROS VALORES"
        title="Lo Que Nos Define"
        features={values}
        columns={4}
      />

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="NUESTRO EQUIPO"
            title="Profesionales Dedicados a Tu Experiencia"
            subtitle="Un equipo multidisciplinario comprometido con hacer de tu gira un éxito"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-4 text-center">{member.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <SectionHeader
            label="CERTIFICACIONES"
            title="Avalados por las Mejores Instituciones"
          />

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <p className="font-semibold text-gray-900">Registro SERNATUR</p>
                <p className="text-sm text-gray-600">N° XXXXX</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
                <p className="font-semibold text-gray-900">Chile Confianza Turística</p>
                <p className="text-sm text-gray-600">Certificado</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-12 h-12 text-primary" />
                </div>
                <p className="font-semibold text-gray-900">ISO 9001</p>
                <p className="text-sm text-gray-600">Calidad Certificada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="¿Quieres Ser Parte de Nuestra Historia?"
        description="Únete a los miles de estudiantes que han vivido experiencias inolvidables con nosotros"
        primaryCTA={{
          text: 'Cotiza tu Gira',
          href: '/cotiza-tu-viaje',
        }}
        secondaryCTA={{
          text: 'Contáctanos',
          href: 'https://wa.me/56987654321',
        }}
      />
    </>
  )
}
