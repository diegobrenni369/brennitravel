import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface Feature {
  icon: LucideIcon | string
  title: string
  description: string
}

interface FeatureGridProps {
  title?: string
  subtitle?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  variant?: 'default' | 'compact'
}

export default function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
  variant = 'default',
}: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <section className="section-padding bg-neutral-light">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {subtitle && (
              <p className="text-accent-orange font-semibold uppercase tracking-wider text-sm mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 md:gap-8`}>
          {features.map((feature, index) => {
            const Icon = typeof feature.icon === 'string' ? null : feature.icon
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm card-hover group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mb-5 transform -rotate-6 group-hover:rotate-0 transition-transform">
                    {Icon ? (
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    ) : (
                      <span className="text-3xl md:text-4xl">{feature.icon}</span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
