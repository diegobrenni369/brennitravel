interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {label && (
        <p className="text-blue-600 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
          {label}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-stone-900 mb-6 leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg mb-8 md:text-xl text-stone-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
