'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { quoteFormSchema, type QuoteFormSchema } from '@/lib/validations/quote'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

const destinations = [
  { value: 'bariloche', label: 'Bariloche' },
  { value: 'puerto-varas', label: 'Puerto Varas' },
  { value: 'camboriu', label: 'Camboriú' },
  { value: 'pucon', label: 'Pucón' },
  { value: 'otro', label: 'Otro destino' },
]

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormSchema>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      destinoInteres: [],
    },
  })

  const onSubmit = async (data: QuoteFormSchema) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        reset()
        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 mb-8 flex items-start gap-4 animate-fade-in-up">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-green-900 text-lg mb-1">
              ¡Cotización Enviada Exitosamente!
            </h3>
            <p className="text-green-700">
              Gracias por tu interés. Nos contactaremos contigo en las próximas 24 horas para 
              entregarte una propuesta personalizada.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-6 mb-8 flex items-start gap-4 animate-fade-in-up">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-red-900 text-lg mb-1">
              Error al Enviar
            </h3>
            <p className="text-red-700">
              Hubo un problema al procesar tu solicitud. Por favor intenta nuevamente o 
              contáctanos directamente por WhatsApp.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Personal Information */}
        <div className="mb-10">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Información Personal
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo *
              </label>
              <input
                {...register('nombre')}
                type="text"
                id="nombre"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Tu nombre completo"
              />
              {errors.nombre && (
                <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-2">
                Cargo *
              </label>
              <select
                {...register('cargo')}
                id="cargo"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              >
                <option value="">Selecciona tu cargo</option>
                <option value="apoderado">Apoderado</option>
                <option value="profesor">Profesor</option>
                <option value="centro_alumnos">Centro de Alumnos</option>
                <option value="otro">Otro</option>
              </select>
              {errors.cargo && (
                <p className="mt-1 text-sm text-red-600">{errors.cargo.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Institution Information */}
        <div className="mb-10">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Información del Colegio
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="colegio" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre del Colegio *
              </label>
              <input
                {...register('colegio')}
                type="text"
                id="colegio"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Ej: Colegio San Alberto"
              />
              {errors.colegio && (
                <p className="mt-1 text-sm text-red-600">{errors.colegio.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-2">
                Ciudad *
              </label>
              <input
                {...register('ciudad')}
                type="text"
                id="ciudad"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Ej: Santiago"
              />
              {errors.ciudad && (
                <p className="mt-1 text-sm text-red-600">{errors.ciudad.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="curso" className="block text-sm font-medium text-gray-700 mb-2">
                Curso *
              </label>
              <input
                {...register('curso')}
                type="text"
                id="curso"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Ej: 4° Medio A"
              />
              {errors.curso && (
                <p className="mt-1 text-sm text-red-600">{errors.curso.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="numeroEstudiantes" className="block text-sm font-medium text-gray-700 mb-2">
                Número de Estudiantes *
              </label>
              <input
                {...register('numeroEstudiantes', { valueAsNumber: true })}
                type="number"
                id="numeroEstudiantes"
                min="10"
                max="500"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Ej: 35"
              />
              {errors.numeroEstudiantes && (
                <p className="mt-1 text-sm text-red-600">{errors.numeroEstudiantes.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Trip Details */}
        <div className="mb-10">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Detalles del Viaje
          </h3>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Destinos de Interés * (puedes seleccionar varios)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {destinations.map((dest) => (
                <label
                  key={dest.value}
                  className="flex items-center gap-2 p-3 border-2 border-gray-200 rounded-xl hover:border-primary cursor-pointer transition-colors"
                >
                  <input
                    {...register('destinoInteres')}
                    type="checkbox"
                    value={dest.value}
                    className="w-5 h-5 text-primary rounded focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-gray-700">{dest.label}</span>
                </label>
              ))}
            </div>
            {errors.destinoInteres && (
              <p className="mt-2 text-sm text-red-600">{errors.destinoInteres.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fechasTentativas" className="block text-sm font-medium text-gray-700 mb-2">
                Fechas Tentativas *
              </label>
              <input
                {...register('fechasTentativas')}
                type="text"
                id="fechasTentativas"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Ej: Diciembre 2026"
              />
              {errors.fechasTentativas && (
                <p className="mt-1 text-sm text-red-600">{errors.fechasTentativas.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="presupuestoEstimado" className="block text-sm font-medium text-gray-700 mb-2">
                Presupuesto por Estudiante (Opcional)
              </label>
              <input
                {...register('presupuestoEstimado')}
                type="text"
                id="presupuestoEstimado"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Ej: $500.000 - $800.000"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-10">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Información de Contacto
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono *
              </label>
              <input
                {...register('telefono')}
                type="tel"
                id="telefono"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="+56 9 1234 5678"
              />
              {errors.telefono && (
                <p className="mt-1 text-sm text-red-600">{errors.telefono.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="preferenciaContacto" className="block text-sm font-medium text-gray-700 mb-2">
                Preferencia de Contacto *
              </label>
              <select
                {...register('preferenciaContacto')}
                id="preferenciaContacto"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              >
                <option value="">Selecciona tu preferencia</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
                <option value="llamada">Llamada Telefónica</option>
              </select>
              {errors.preferenciaContacto && (
                <p className="mt-1 text-sm text-red-600">{errors.preferenciaContacto.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje Adicional (Opcional)
              </label>
              <textarea
                {...register('mensaje')}
                id="mensaje"
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                placeholder="Cuéntanos más sobre lo que buscas para tu gira..."
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            'Solicitar Cotización Gratuita'
          )}
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Al enviar este formulario, aceptas nuestros términos y condiciones y política de privacidad.
        </p>
      </form>
    </div>
  )
}
