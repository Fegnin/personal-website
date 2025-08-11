'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const locales = ['es', 'en'] as const

export default function Header({ locale }: { locale: 'es' | 'en' }) {
  const pathname = usePathname() || `/${locale}`
  const switchLocalePath = (loc: 'es' | 'en') => {
    const parts = pathname.split('/')
    parts[1] = loc
    return parts.join('/') || '/'
  }

  const nav = [
    { href: `/${locale}`, label: locale === 'es' ? 'Inicio' : 'Home' },
    { href: `/${locale}/about`, label: locale === 'es' ? 'Sobre mí' : 'About' },
    { href: `/${locale}/curriculum`, label: locale === 'es' ? 'Currículum' : 'Curriculum' },
    { href: `/${locale}/blog`, label: 'Blog' },
    { href: `/${locale}/tools`, label: locale === 'es' ? 'Herramientas' : 'Tools' },
  ]

  return (
    <header className="w-full sticky top-0 z-50 bg-paper/80 backdrop-blur border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Marca solo con texto (sin logo) */}
        <Link href={`/${locale}`} className="flex items-center min-w-0 group">
          <span
            className="
              truncate font-bold text-lg sm:text-xl md:text-2xl
              bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
              drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.01]
            "
          >
            Fernando Parada Z., Ph.D.
          </span>
        </Link>

        {/* CTA fijo en móvil */}
        <a
          href="https://encuadrado.com/p/dr-fernando-parada-zelada"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden inline-flex items-center px-4 py-2 rounded-2xl bg-primary text-white font-medium
                     transition-transform duration-200 hover:scale-[1.03] hover:shadow-md"
          aria-label={locale === 'es' ? 'Agenda tu hora' : 'Book an appointment'}
        >
          {locale === 'es' ? 'Agenda tu hora' : 'Book'}
        </a>

        {/* Navegación (desktop/tablet) */}
        <nav className="hidden sm:flex items-center gap-5">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative hover:text-primary transition-colors
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary
                after:transition-all hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}

          {/* Cambiador de idioma */}
          <div className="flex items-center gap-2">
            {locales.map(loc => (
              <Link
                key={loc}
                href={switchLocalePath(loc)}
                className={`text-sm px-2 py-1 rounded transition
                  ${loc === locale ? 'bg-secondary' : 'hover:bg-secondary/60'}`}
                aria-label={`Switch to ${loc.toUpperCase()}`}
              >
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* CTA en desktop con micro-animación */}
          <a
            href="https://encuadrado.com/p/dr-fernando-parada-zelada"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-2xl bg-primary text-white
                       transition-transform duration-200 hover:scale-[1.03] hover:shadow-md"
          >
            {locale === 'es' ? 'Agenda tu hora' : 'Book an appointment'}
          </a>
        </nav>
      </div>
    </header>
  )
}

