# Arcadian Cafe Marketing Site

Modern React + Vite build that recreates Arcadian Cafe’s brand with a multi-page marketing experience. The UI uses Tailwind CSS, React Router, and data-driven content files so non-developers can adjust copy, menu items, events, and hours without touching layout logic.

## Stack

- React 19 + Vite
- React Router 7 (multi-page routing)
- Tailwind CSS 3 with custom tokens (colors, shadows, typography)
- ESLint (default Vite rules)

## Getting Started

```bash
npm install
npm run dev     # local dev server
npm run build   # production build
npm run preview # serve the built output
```

## Key Files & Customization

| Need to change… | Update this file |
| --------------- | ---------------- |
| Brand info, hero copy, highlights, team, FAQs | `src/data/brand.js` |
| Hours of operation + weekday order | `src/data/hours.js` |
| Menu categories, descriptions, prices, dietary tags | `src/data/menu.js` |
| Events listings + CTAs | `src/data/events.js` |
| Gallery image URLs + alt text | `src/data/gallery.js` |
| Colors, fonts, radii, shadows | `tailwind.config.js` |

- Global layout, sticky nav, and footer: `src/components/Layout.jsx`, `src/components/Header.jsx`, `src/components/Footer.jsx`
- Pages live in `src/pages/` (`Home`, `Menu`, `About`, `Gallery`, `Events`, `Visit`, plus `Privacy` & `Terms` placeholders).
- The “Open now” indicator + hours table pull from `src/data/hours.js` via helper utilities in `src/utils/hours.js`.

## Content Editing Tips

- Menu dietary tags accept any short strings (e.g., `V`, `GF`, `DF`, `P`).
- Event dates should be ISO strings (`YYYY-MM-DD`); the Events page auto-sorts into upcoming vs. past.
- Gallery uses high-quality Unsplash URLs—swap with production assets when ready.
- The contact form currently simulates submission with a short timeout; connect it to an API in `src/pages/Visit.jsx` if needed.

## Design System Notes

- Typography: Playfair Display for headings, Inter for body text (imported in `src/index.css`).
- Color palette: forest green, warm cream, beige, muted gold, deep ink (see Tailwind config).
- Utility classes `.btn-primary`, `.btn-ghost`, `.card`, and `.eyebrow` are defined via Tailwind’s `@layer components` in `src/index.css`.

## Accessibility & Responsiveness

- Semantic HTML for all major sections `<header>`, `<main>`, `<section>`, `<footer>`.
- Fully keyboard navigable with visible focus states and aria attributes on interactive components (nav toggle, gallery lightbox, filters, form controls).
- Responsive from mobile-first up through large desktop screens using Tailwind’s breakpoint utilities.

## Deployment

Run `npm run build` and deploy the contents of `dist/` to your hosting provider (Vercel, Netlify, S3, etc.). Update environment-specific URLs (maps, external services) as needed before launch.
