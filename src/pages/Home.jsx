import { Link } from 'react-router-dom'
import { BRAND, HIGHLIGHTS, TEAM } from '../data/brand'
import { getOpenStatus } from '../utils/hours'

export function Home() {
  const status = getOpenStatus()

  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-b from-cream via-cream to-beige/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">{BRAND.cityTag}</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">
              {BRAND.tagline}
            </h1>
            <p className="mt-6 text-lg text-forest/80">{BRAND.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary">
                View Menu
              </Link>
              <Link to="/visit" className="btn-ghost">
                Plan Your Visit
              </Link>
            </div>
            <div className="mt-8 card p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Today’s Hours
              </p>
              <p className={`mt-2 text-lg font-semibold ${status.isOpen ? 'text-forest' : 'text-muted'}`}>
                {status.label}
              </p>
              <div className="mt-4 flex gap-4 text-sm font-semibold text-forest/70">
                <Link to="/menu" className="hover:text-forest">
                  Menu
                </Link>
                <Link to="/events" className="hover:text-forest">
                  Events
                </Link>
                <Link to="/visit" className="hover:text-forest">
                  Visit
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="card relative h-full overflow-hidden rounded-[1.5rem] bg-forest shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80"
                alt="Arcadian Cafe hero latte art"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">Featured</p>
                <p className="mt-2 font-serif text-2xl">Arcadian Latte Rituals</p>
                <p className="text-sm text-cream/80">Single-origin espresso with cedar maple smoke.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <p className="eyebrow">Highlights</p>
          <h2 className="text-3xl">Crafted for cozy mornings & golden hour gatherings.</h2>
          <p className="text-lg text-forest/80">
            From cedar lattes to fireside suppers, Arcadian celebrates farmers, roasters, and
            the neighborhood we call home.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((highlight) => (
            <article key={highlight.title} className="card p-6">
              <p className="text-3xl">{highlight.icon}</p>
              <h3 className="mt-4 text-xl font-semibold">{highlight.title}</h3>
              <p className="mt-3 text-sm text-forest/80">{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="text-3xl">A community living room rooted in seasonal cooking.</h2>
          <p className="mt-6 text-lg text-forest/80">
            In just over 12 years, Arcadian Café has established itself as a defining name in Lahore's dining scene. 
            With a passion for exceptional food and a dedication to quality, we proudly bring globally inspired cuisine 
            to the heart of the city through our five locations across Lahore.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/about" className="btn-ghost">
              Meet the team
            </Link>
            <Link to="/events" className="btn-ghost">
              Upcoming events
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          {TEAM.slice(0, 2).map((member) => (
            <article key={member.name} className="card flex items-center gap-4 p-4">
              <img
                src={member.image}
                alt={member.name}
                className="h-20 w-20 rounded-2xl object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  {member.role}
                </p>
                <p className="font-serif text-xl">{member.name}</p>
                <p className="text-sm text-forest/80">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

