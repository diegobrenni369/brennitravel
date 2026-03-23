import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

interface CTABandProps {
  title: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  variant?: 'gradient' | 'solid'
}

export default function CTABand({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'gradient',
}: CTABandProps) {
  const bgClass = variant === 'gradient' 
    ? 'bg-gradient-to-br from-primary to-primary-dark' 
    : 'bg-primary'

  return (
    <section className={`${bgClass} text-white section-padding relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orange rounded-full filter blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 animate-fade-in-up">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-white/90 mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="bg-accent-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
