import { NextRequest, NextResponse } from 'next/server'
import { quoteFormSchema } from '@/lib/validations/quote'
import type { QuoteFormResponse } from '@/types/quote'

/**
 * API Route: POST /api/quote
 * 
 * Handles quote form submissions. Currently logs to console.
 * 
 * TO INTEGRATE WITH YOUR BACKEND:
 * 
 * Option 1 - Email Service (Resend, SendGrid, etc.):
 *   - Install: npm install resend
 *   - Add RESEND_API_KEY to .env.local
 *   - Import and use Resend client to send email
 * 
 * Option 2 - CRM/Database:
 *   - Add database connection (Prisma, MongoDB, etc.)
 *   - Save lead data to your database
 *   - Optionally trigger webhook to CRM (Salesforce, HubSpot, etc.)
 * 
 * Option 3 - Webhook:
 *   - Send POST request to your backend endpoint
 *   - Example: await fetch('https://your-backend.com/api/leads', { ... })
 * 
 * Example with Resend:
 * ```typescript
 * import { Resend } from 'resend'
 * const resend = new Resend(process.env.RESEND_API_KEY)
 * 
 * await resend.emails.send({
 *   from: 'onboarding@brennitravel.cl',
 *   to: 'info@brennitravel.cl',
 *   subject: 'Nueva Cotización',
 *   html: `<h1>Nueva solicitud de ${data.nombre}</h1>...`
 * })
 * ```
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate form data
    const validatedData = quoteFormSchema.parse(body)

    // TODO: Replace this console.log with actual email/CRM integration
    console.log('📧 Nueva cotización recibida:', {
      timestamp: new Date().toISOString(),
      nombre: validatedData.nombre,
      colegio: validatedData.colegio,
      destinos: validatedData.destinoInteres,
      estudiantes: validatedData.numeroEstudiantes,
      email: validatedData.email,
      telefono: validatedData.telefono,
    })

    // Generate a fake lead ID (replace with real ID from your system)
    const leadId = `LEAD-${Date.now()}`

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))

    const response: QuoteFormResponse = {
      success: true,
      message: '¡Cotización enviada exitosamente! Nos contactaremos contigo pronto.',
      leadId,
    }

    return NextResponse.json(response, { status: 200 })
    
  } catch (error) {
    console.error('Error processing quote:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Por favor verifica que todos los campos estén correctos',
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Hubo un error al procesar tu solicitud. Por favor intenta nuevamente.',
      },
      { status: 500 }
    )
  }
}
