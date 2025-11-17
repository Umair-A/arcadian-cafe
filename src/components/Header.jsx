import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BRAND } from '../data/brand'
import { getOpenStatus } from '../utils/hours'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/events', label: 'Events' },
  { to: '/visit', label: 'Visit' }
]

export function Header() {
  const [open, setOpen] = useState(false)
  const status = getOpenStatus()

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest font-serif text-lg text-cream">
            AC
          </span>
          <span>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Arcadian Cafe</p>
            <p className="font-serif text-lg text-forest">{BRAND.cityTag}</p>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-forest/80 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative pb-1 transition hover:text-forest ${
                  isActive ? 'text-forest' : 'text-forest/70'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-gold transition ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden flex-col text-right text-xs font-semibold text-forest/70 sm:flex">
          <span className={status.isOpen ? 'text-forest' : 'text-muted'}>{status.label}</span>
          <span>{BRAND.phone}</span>
        </div>

        <button
          className="lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="h-5 w-6 space-y-1.5">
            <span className={`block h-0.5 bg-forest transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block h-0.5 bg-forest transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-forest transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden">
          <div className="space-y-1 border-t border-forest/10 bg-cream px-4 py-3 text-sm font-semibold text-forest/80">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 ${isActive ? 'bg-forest/10 text-forest' : 'hover:bg-forest/5'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

