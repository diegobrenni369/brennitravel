import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  variant?: 'home' | 'page'
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export default function Hero({
  variant = 'home',
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80',
}: HeroProps) {
  if (variant === 'page') {
    return (
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center">
          {subtitle && (
            <p className="text-white/90 font-medium uppercase tracking-[0.2em] text-sm mb-6 animate-fade-in">
              {subtitle}
            </p>
          )}
          <h1 className="text-white mb-6 leading-tight animate-fade-in-up text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-white/95 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {description}
            </p>
          )}
        </div>
      </section>
    )
  }

  // Home variant - full-screen editorial hero
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay - lighter than before for editorial feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content - centered and spacious */}
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-white mb-8 leading-[1.1] animate-fade-in-up max-w-5xl mx-auto text-balance">
          {title}
        </h1>
        
        {description && (
          <p className="text-white/95 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {description}
          </p>
        )}

        {/* CTAs - more subtle and spaced */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {primaryCTA && (
            <Link 
              href={primaryCTA.href} 
              className="bg-white text-stone-900 px-8 py-4 rounded-lg font-medium text-base hover:bg-stone-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 group"
            >
              {primaryCTA.text}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
          {secondaryCTA && (
            <Link 
              href={secondaryCTA.href} 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium text-base border border-white/30 hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>

      {/* Scroll indicator - subtle */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}