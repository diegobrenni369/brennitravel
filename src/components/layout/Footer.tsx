import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const footerNavigation = {
  navegacion: [
    { name: 'Conócenos', href: '/conocenos' },
    { name: 'La Gira', href: '/la-gira' },
    { name: 'Seguridad', href: '/seguridad-primero' },
    { name: 'Te Apoyamos', href: '/te-apoyamos' },
    { name: 'Experiencias', href: '/experiencias' },
  ],
  destinos: [
    { name: 'Bariloche', href: '/la-gira#bariloche' },
    { name: 'Puerto Varas', href: '/la-gira#puerto-varas' },
    { name: 'Camboriú', href: '/la-gira#camboriu' },
    { name: 'Pucón', href: '/la-gira#pucon' },
  ],
  legal: [
    { name: 'Términos y Condiciones', href: '/terminos' },
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Preguntas Frecuentes', href: '/faq' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-slate text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-display font-extrabold text-accent-yellow mb-4 block">
              BrenniTravel
            </Link>
            <p className="text-gray-900 text-sm mb-6 leading-relaxed">
              Creamos experiencias educativas y recreativas que transforman la vida de los estudiantes. 
              Tu gira de estudios más inolvidable comienza aquí.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-orange transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-accent-yellow font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {footerNavigation.navegacion.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-900 text-sm hover:text-accent-yellow transition-colors hover:pl-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-accent-yellow font-semibold mb-4">Destinos</h3>
            <ul className="space-y-2">
              {footerNavigation.destinos.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-900 text-sm hover:text-accent-yellow transition-colors hover:pl-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-accent-yellow font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-900 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+56987654321" className="hover:text-accent-yellow transition-colors">
                    +56 9 8765 4321
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-gray-900 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@brennitravel.cl" className="hover:text-accent-yellow transition-colors">
                    info@brennitravel.cl
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-gray-900 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>Santiago, Chile</div>
              </li>
              <li className="text-gray-900 text-sm">
                Lun - Vie: 9:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-900 text-sm text-center md:text-left">
              © {new Date().getFullYear()} BrenniTravel. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 hover:text-accent-yellow transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-gray-900 text-xs text-center mt-4">
            Registro SERNATUR N° XXXXX
          </p>
        </div>
      </div>
    </footer>
  )
}
