import type { Metadata } from 'next'
import { Inter, Archivo } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'BrenniTravel - Giras de Estudio Inolvidables',
    template: '%s | BrenniTravel'
  },
  description: 'Especialistas en giras de estudio para colegios de Chile. Experiencias únicas, seguridad garantizada y momentos inolvidables en Bariloche, Camboriú, Pucón y más.',
  keywords: ['giras de estudio', 'viajes estudiantiles', 'colegios chile', 'bariloche', 'camboriú', 'pucón', 'giras escolares'],
  authors: [{ name: 'BrenniTravel' }],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://brennitravel.cl',
    title: 'BrenniTravel - Giras de Estudio Inolvidables',
    description: 'Especialistas en giras de estudio para colegios de Chile',
    siteName: 'BrenniTravel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrenniTravel - Giras de Estudio Inolvidables',
    description: 'Especialistas en giras de estudio para colegios de Chile',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${archivo.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}