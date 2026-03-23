import type { Metadata } from 'next'
import Hero from '@/components/shared/Hero'
import QuoteForm from '@/components/forms/QuoteForm'
import { MessageCircle, Clock, CheckCircle, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cotiza tu Viaje',
  description: 'Solicita una cotización personalizada para la gira de estudios de tu curso. Te respondemos en menos de 24 horas.',
}

const process = [
  {
    icon: '📝',
    title: 'Completa el Formulario',
    description: 'Cuéntanos sobre tu curso y qué tipo de gira están buscando',
  },
  {
    icon: '💬',
    title: 'Nos Contactamos Contigo',
    description: 'En menos de 24 horas nos comunicaremos para conocer más detalles',
  },
  {
    icon: '📊',
    title: 'Recibe tu Propuesta',
    description: 'Te enviamos una cotización personalizada con itinerario detallado',
  },
  {
    icon: '✅',
    title: '¡Confirma y Viaja!',
    description: 'Reserva tu gira y comienza a prepararte para la aventura',
  },
]

const benefits = [
  {
    icon: Clock,
    text: 'Respuesta en menos de 24 horas',
  },
  {
    icon: CheckCircle,
    text: 'Cotización 100% gratuita y sin compromiso',
  },
  {
    icon: MessageCircle,
    text: 'Asesoría personalizada para tu curso',
  },
  {
    icon: Mail,
    text: 'Propuesta detallada vía email',
  },
]

export default function CotizaTuViajePage() {
  return (
    <>
      <Hero
        variant="page"
        subtitle="EMPIEZA AHORA"
        title="Cotiza tu Viaje"
        description="Completa el formulario y recibe una propuesta personalizada en menos de 24 horas"
      />

      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          {/* Benefits */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-lg transition-all"
                  >
                    <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-sm font-medium text-gray-700">{benefit.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <QuoteForm />
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-accent-orange font-semibold uppercase tracking-wider text-sm mb-3">
              PROCESO SIMPLE
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              ¿Cómo Funciona?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En solo 4 pasos simples, estarás más cerca de vivir la gira de estudios perfecta
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent-orange to-transparent transform translate-x-[-50%]" />
                  )}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative z-10">
                    <div className="text-5xl mb-4 text-center">{step.icon}</div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-accent-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              ¿Prefieres Hablar Directamente?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nuestro equipo está disponible para responder todas tus preguntas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/56987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Escribir por WhatsApp
              </a>
              <a
                href="tel:+56987654321"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white hover:text-primary transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                📞 Llamar Ahora
              </a>
            </div>
            <p className="mt-6 text-white/70">
              Lunes a Viernes: 9:00 - 18:00 hrs
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
