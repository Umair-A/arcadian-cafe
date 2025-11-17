import { BRAND } from '../data/brand'
import { getReadableHours } from '../utils/hours'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Menu', to: '/menu' },
  { label: 'Events', to: '/events' },
  { label: 'Visit', to: '/visit' }
]

export function Footer() {
  const hours = getReadableHours().slice(0, 4)

  return (
    <footer className="bg-pine text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Arcadian Cafe</p>
          <p className="mt-2 font-serif text-2xl">Gather • Nourish • Repeat</p>
          <p className="mt-4 text-sm text-cream/80">
            {BRAND.phone} <br />
            {BRAND.email} <br />
            <a href={`tel:${BRAND.reservationPhone}`} className="text-gold hover:underline">
              Reservations: {BRAND.reservationPhone}
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Hours</p>
          <div className="mt-3 space-y-2 text-sm text-cream/80">
            {hours.map((entry) => (
              <p key={entry.day} className="flex justify-between gap-4">
                <span className="uppercase tracking-wide">{entry.day.slice(0, 3)}</span>
                <span>{entry.label}</span>
              </p>
            ))}
            <p className="text-xs text-cream/60">Full schedule on the Visit page.</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Connect</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-cream/80">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-cream">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex gap-4 text-sm text-cream">
            <a href={BRAND.social.instagram} className="hover:text-gold">
              Instagram
            </a>
            <a href={BRAND.social.facebook} className="hover:text-gold">
              Facebook
            </a>
            {BRAND.social.pinterest && (
              <a href={BRAND.social.pinterest} className="hover:text-gold">
                Pinterest
              </a>
            )}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Newsletter</p>
          <p className="mt-3 text-sm text-cream/80">
            Monthly menu reveals, playlists, and early event access.
          </p>
          <form
            className="mt-4 flex flex-col gap-3"
            onSubmit={(event) => {
              event.preventDefault()
              alert('Thanks for joining the list!')
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              required
              className="rounded-full border-0 bg-cream/10 px-4 py-2 text-sm text-cream placeholder:text-cream/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pine"
            />
            <button type="submit" className="btn-primary w-full bg-gold text-pine shadow-none">
              Notify Me
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-cream/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Arcadian Cafe. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-cream">
              Privacy
            </a>
            <a href="/terms" className="hover:text-cream">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

