export interface QuoteFormData {
  // Personal Info
  nombre: string
  cargo: 'apoderado' | 'profesor' | 'centro_alumnos' | 'otro'
  
  // Institution
  colegio: string
  ciudad: string
  curso: string
  numeroEstudiantes: number
  
  // Trip Details
  destinoInteres: string[]
  fechasTentativas: string
  presupuestoEstimado?: string
  
  // Contact
  email: string
  telefono: string
  preferenciaContacto: 'whatsapp' | 'email' | 'llamada'
  mensaje?: string
}

export interface QuoteFormResponse {
  success: boolean
  message: string
  leadId?: string
}
