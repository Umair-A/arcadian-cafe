import { BRAND, STORY_POINTS, TEAM } from '../data/brand'

export function About() {
  return (
    <div className="space-y-16 bg-cream py-16">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow">About Arcadian Cafe</p>
        <h1 className="text-4xl">A defining name in Lahore's dining scene.</h1>
        <p className="mt-6 text-lg text-forest/80">{BRAND.description}</p>
        <p className="mt-4 text-lg text-forest/80">
          From our flagship location at Gulberg's 28-K MM Alam Road to our presence in Emporium Mall, Packages Mall, Defence Raya, and our newest addition at The Vertical on Pine Avenue Road, Arcadian Café continues to grow — without ever compromising on taste, style, or experience.
        </p>
        <p className="mt-4 text-lg text-forest/80">
          Our diverse menu celebrates culinary artistry through a rich blend of Asian-Fusion, Continental, and French-Italian offerings. At the core of every dish is a philosophy rooted in freshness, innovation, and bold flavor.
        </p>
        <p className="mt-4 text-lg text-forest/80">
          Inside, guests are welcomed by a contemporary setting and our signature 360-degree oblong bar, offering an extensive selection of mocktails, lattes, and hand-crafted coffees — a perfect complement to the dining experience.
        </p>
        <p className="mt-4 text-lg text-forest/80">
          Our chefs constantly push creative boundaries, introducing new and exciting dishes such as Bai ze Chicken, Red Dragon Chicken, Weaveball Prawns, Stuffed Chicken Butter with Spicy Sauce, Basil Leaf Chicken, and K-Mac n Cheese, to name a few. These innovations are not only celebrated but nurtured, ensuring our menu remains dynamic and memorable.
        </p>
        <p className="mt-4 text-lg text-forest/80">
          Each branch is thoughtfully designed to elevate comfort and sophistication. From warm lighting to curated furniture, every element reflects our commitment to creating an unforgettable atmosphere.
        </p>
        <p className="mt-4 text-lg text-forest/80">
          At Arcadian Café, every visit is more than just a meal — it's a complete experience. Whether you're at Gulberg, Emporium Mall, Packages Mall, Defence Raya, or The Vertical, you'll find the same dedication to excellence, personalized service, and culinary creativity that has made us a favorite among food lovers in Lahore.
        </p>
      </section>

      <section className="bg-cloud py-12">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {STORY_POINTS.map((point) => (
            <article key={point.year} className="card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">{point.year}</p>
              <h3 className="mt-4 text-2xl">{point.title}</h3>
              <p className="mt-3 text-sm text-forest/80">{point.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <p className="eyebrow">Team</p>
          <h2 className="text-3xl">People behind the plates & pours.</h2>
          <p className="text-lg text-forest/80">
            Our kitchen, bar, and event teams collaborate daily to bring thoughtful details to every guest experience.
          </p>
        </header>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TEAM.map((member) => (
            <article key={member.name} className="card overflow-hidden">
              <img src={member.image} alt={member.name} className="h-64 w-full object-cover" loading="lazy" />
              <div className="space-y-3 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">{member.role}</p>
                <h3 className="text-2xl">{member.name}</h3>
                <p className="text-sm text-forest/80">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

