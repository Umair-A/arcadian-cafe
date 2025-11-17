import { useEffect, useState } from 'react'
import { GALLERY_IMAGES } from '../data/gallery'

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const activeImage = activeIndex !== null ? GALLERY_IMAGES[activeIndex] : null

  useEffect(() => {
    if (activeIndex === null) return
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
      }
      if (event.key === 'Escape') {
        setActiveIndex(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])

  return (
    <div className="bg-cloud py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <p className="eyebrow">Atmosphere</p>
          <h1 className="text-4xl">Glows like golden hour, any time of day.</h1>
          <p className="text-lg text-forest/80">
            A quick glimpse at the light, textures, and tables that make Arcadian a cozy neighborhood living room.
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setActiveIndex(index)}
              className="group relative h-72 overflow-hidden rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent" />
              <p className="absolute bottom-4 left-5 right-5 text-left text-sm font-semibold text-cream">
                {image.alt}
              </p>
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 p-6 backdrop-blur-sm"
          role="dialog"
          aria-label="Expanded gallery image"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            className="absolute right-6 top-6 rounded-full bg-white/10 px-3 py-1 text-2xl text-cream"
            onClick={() => setActiveIndex(null)}
            aria-label="Close image"
          >
            ×
          </button>
          <div
            className="flex h-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[70vh] rounded-[1.5rem] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}

