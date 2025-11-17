import { useMemo, useState } from 'react'
import { MENU_CATEGORIES } from '../data/menu'

const filterOptions = [{ id: 'all', label: 'All' }, ...MENU_CATEGORIES.map(({ id, title }) => ({ id, label: title }))]

export function Menu() {
  const [filter, setFilter] = useState('all')
  const visibleCategories = useMemo(
    () => (filter === 'all' ? MENU_CATEGORIES : MENU_CATEGORIES.filter((category) => category.id === filter)),
    [filter]
  )

  return (
    <div className="bg-cloud py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl space-y-4">
          <p className="eyebrow">Menu</p>
          <h1 className="text-4xl">Made each morning, plated with purpose.</h1>
          <p className="text-lg text-forest/80">
            Sip something new or fall back in love with the classics. Filter by category to explore highlights,
            dietary-friendly dishes, and barista favorites.
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Menu categories">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              role="tab"
              aria-selected={filter === option.id}
              onClick={() => setFilter(option.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === option.id ? 'bg-forest text-cream' : 'bg-beige text-forest hover:bg-forest/10'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {visibleCategories.map((category) => (
            <article key={category.id} className="card p-6">
              <header>
                <h2 className="text-2xl">{category.title}</h2>
                <p className="mt-2 text-sm text-forest/80">{category.blurb}</p>
              </header>
              <ul className="mt-6 space-y-5">
                {category.items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-semibold text-lg">
                        {item.name}{' '}
                        {item.highlight && (
                          <span className="rounded-full bg-gold/20 px-3 py-1 text-xs uppercase tracking-wide text-gold">
                            Chef’s pick
                          </span>
                        )}
                      </p>
                      <p className="text-lg font-semibold text-forest">{item.price}</p>
                    </div>
                    <p className="text-sm text-forest/80">{item.description}</p>
                    <div className="flex gap-2 text-xs font-semibold text-forest/70">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-forest/10 px-2 py-1" aria-label={`Dietary: ${tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

