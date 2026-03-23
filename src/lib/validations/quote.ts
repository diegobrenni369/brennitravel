import { z } from 'zod'

export const quoteFormSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  cargo: z.enum(['apoderado', 'profesor', 'centro_alumnos', 'otro'], {
    required_error: 'Por favor selecciona tu cargo',
  }),
  colegio: z.string().min(2, 'Por favor ingresa el nombre del colegio'),
  ciudad: z.string().min(2, 'Por favor ingresa la ciudad'),
  curso: z.string().min(1, 'Por favor ingresa el curso'),
  numeroEstudiantes: z.number().min(10, 'Mínimo 10 estudiantes').max(500, 'Máximo 500 estudiantes'),
  destinoInteres: z.array(z.string()).min(1, 'Selecciona al menos un destino'),
  fechasTentativas: z.string().min(3, 'Por favor ingresa las fechas tentativas'),
  presupuestoEstimado: z.string().optional(),
  email: z.string().email('Por favor ingresa un email válido'),
  telefono: z.string().min(8, 'Por favor ingresa un teléfono válido'),
  preferenciaContacto: z.enum(['whatsapp', 'email', 'llamada'], {
    required_error: 'Por favor selecciona tu preferencia de contacto',
  }),
  mensaje: z.string().optional(),
})

export type QuoteFormSchema = z.infer<typeof quoteFormSchema>
