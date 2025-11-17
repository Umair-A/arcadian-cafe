import { useMemo, useState } from 'react'
import { EVENTS } from '../data/events'

const FILTERS = [
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'past', label: 'Past' },
  { id: 'all', label: 'All' }
]

const categorizeEvents = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const upcoming = []
  const past = []

  EVENTS.forEach((event) => {
    const eventDate = new Date(event.date)
    if (eventDate >= today) {
      upcoming.push(event)
    } else {
      past.push(event)
    }
  })

  upcoming.sort((a, b) => new Date(a.date) - new Date(b.date))
  past.sort((a, b) => new Date(b.date) - new Date(a.date))

  return { upcoming, past }
}

export function Events() {
  const { upcoming, past } = useMemo(() => categorizeEvents(), [])
  const [filter, setFilter] = useState('upcoming')

  const filteredEvents = useMemo(() => {
    if (filter === 'all') return [...upcoming, ...past]
    if (filter === 'past') return past
    return upcoming
  }, [filter, upcoming, past])

  return (
    <div className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <p className="eyebrow">Events & Specials</p>
          <h1 className="text-4xl">Gatherings designed for flavor, music, and community.</h1>
          <p className="text-lg text-forest/80">
            Pop-up makers, chef’s tables, and classes rotate weekly. Join us for upcoming happenings or browse recent highlights.
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Event filters">
          {FILTERS.map((filterOption) => (
            <button
              key={filterOption.id}
              role="tab"
              aria-selected={filter === filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === filterOption.id ? 'bg-forest text-cream' : 'bg-beige text-forest hover:bg-forest/10'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredEvents.map((event) => (
            <article key={event.id} className="card flex h-full flex-col justify-between p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
                <h2 className="mt-3 text-2xl">{event.title}</h2>
                <p className="text-sm text-forest/70">{event.time}</p>
                <p className="mt-4 text-sm text-forest/80">{event.summary}</p>
              </div>
              <a href={event.url} className="btn-ghost mt-6 w-fit">
                {event.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

