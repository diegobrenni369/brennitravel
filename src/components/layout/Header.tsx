'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Conócenos', href: '/conocenos' },
  { name: 'La Gira', href: '/la-gira' },
  { name: 'Seguridad Primero', href: '/seguridad-primero' },
  { name: 'Te Apoyamos', href: '/te-apoyamos' },
  { name: 'Experiencias & Diversión', href: '/experiencias' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-white/90 backdrop-blur-sm py-6'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-display font-semibold text-stone-900 tracking-tight hover:text-blue-600 transition-colors"
          >
            BrenniTravel
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-stone-700 hover:text-blue-600 font-medium text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              href="/cotiza-tu-viaje"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
            >
              Cotiza tu Viaje
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-stone-700 p-2 hover:bg-stone-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-stone-200 pt-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-stone-700 hover:text-blue-600 font-medium py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/cotiza-tu-viaje"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition-all shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cotiza tu Viaje
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
