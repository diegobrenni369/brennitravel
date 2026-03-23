import Link from 'next/link'
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
  backgroundImage,
}: HeroProps) {
  if (variant === 'page') {
    return (
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary">
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,.05)_35px,rgba(255,255,255,.05)_70px)]" />
        </div>
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {subtitle && (
              <p className="text-accent-yellow font-semibold uppercase tracking-wider text-sm mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,.05)_35px,rgba(255,255,255,.05)_70px)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-[20%] left-[10%] w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm animate-float" />
      <div className="absolute top-[60%] right-[15%] w-32 h-32 bg-accent-yellow/20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[15%] left-[15%] w-24 h-24 bg-accent-orange/20 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="container-custom py-32 md:py-40 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
            {title.split(' ').map((word, i, arr) => {
              // Highlight last 2-3 words
              const isHighlight = i >= arr.length - 2
              return isHighlight ? (
                <span key={i} className="text-gradient">
                  {word}{' '}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            })}
          </h1>
          
          {description && (
            <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {primaryCTA && (
              <Link href={primaryCTA.href} className="btn-primary text-lg flex items-center justify-center gap-2">
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="btn-secondary text-lg">
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
