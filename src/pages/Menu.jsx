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
    <div className="min-h-screen bg-gradient-to-b from-cream via-cream to-beige/40">
      {/* Header Section - Mobile Optimized */}
      <section className="pt-8 pb-6 px-4 sm:pt-12 sm:pb-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <header className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <p className="eyebrow text-xs sm:text-sm">Our Menu</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-forest leading-tight px-2">
              Globally Inspired Cuisine
            </h1>
            <p className="text-base sm:text-lg text-forest/80 max-w-2xl mx-auto px-4 leading-relaxed">
              Explore our diverse menu featuring Asian-Fusion, Continental, and French-Italian offerings. 
              Each dish is crafted with fresh ingredients and bold flavors.
            </p>
          </header>

          {/* Filter Buttons - Horizontal Scroll on Mobile */}
          <div className="sticky top-0 z-30 bg-cream/95 backdrop-blur-sm -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 sm:py-4 border-b border-forest/10 mb-6 sm:mb-8">
            <div
              className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide"
              role="tablist"
              aria-label="Menu categories"
            >
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  role="tab"
                  aria-selected={filter === option.id}
                  onClick={() => setFilter(option.id)}
                  className={`flex-shrink-0 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-200 touch-manipulation ${
                    filter === option.id
                      ? 'bg-forest text-cream shadow-lg shadow-forest/20 scale-105'
                      : 'bg-white text-forest active:bg-forest/10 border border-forest/10 shadow-sm'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid - Single Column on Mobile, Masonry on Desktop */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="menu-masonry">
            {visibleCategories.map((category) => (
              <article
                key={category.id}
                className="group bg-white rounded-2xl overflow-hidden border border-forest/10 shadow-md hover:shadow-xl transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-1 mb-6 md:mb-0"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-forest/5 to-transparent p-5 sm:p-6 border-b border-forest/10 flex-shrink-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-forest mb-1.5 sm:mb-2 leading-tight">
                    {category.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-forest/65 font-medium">{category.blurb}</p>
                </div>

                {/* Menu Items */}
                <div className="p-5 sm:p-6">
                  <ul className="space-y-5 sm:space-y-6">
                    {category.items.map((item) => (
                      <li
                        key={item.name}
                        className="pb-5 sm:pb-6 border-b border-forest/5 last:border-0 last:pb-0"
                      >
                        {/* Item Header - Stack on Mobile */}
                        <div className="mb-2.5 sm:mb-3">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-start gap-2">
                                <h3 className="font-bold text-base sm:text-lg text-forest leading-tight flex-1 min-w-0">
                                  {item.name}
                                </h3>
                                {item.highlight && (
                                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-gold border border-gold/30 flex-shrink-0">
                                    <span className="text-xs sm:text-sm">⭐</span>
                                    <span className="hidden sm:inline">Chef's Pick</span>
                                    <span className="sm:hidden">Pick</span>
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="text-lg sm:text-xl font-bold text-forest whitespace-nowrap flex-shrink-0 self-start">
                              {item.price}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-forest/70 leading-relaxed mb-3 sm:mb-4 font-medium">
                          {item.description}
                        </p>

                        {/* Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-lg bg-forest/8 px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-forest/75 border border-forest/10"
                                aria-label={`Dietary: ${tag}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {visibleCategories.length === 0 && (
            <div className="text-center py-16 sm:py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-forest/10 mb-4">
                <span className="text-3xl sm:text-4xl">🍽️</span>
              </div>
              <p className="text-forest/60 text-base sm:text-lg font-medium">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 640px) {
          .touch-manipulation {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
        }
        /* Masonry layout for desktop to balance content and reduce white space */
        .menu-masonry {
          display: block;
        }
        @media (min-width: 768px) {
          .menu-masonry {
            column-count: 2;
            column-gap: 2rem;
            column-fill: balance;
          }
        }
        @media (min-width: 1024px) {
          .menu-masonry {
            column-count: 3;
            column-gap: 2rem;
          }
        }
        @media (min-width: 768px) {
          .menu-masonry article {
            break-inside: avoid;
            page-break-inside: avoid;
            display: inline-block;
            width: 100%;
            margin-bottom: 2rem;
          }
          .menu-masonry article:last-child {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  )
}

