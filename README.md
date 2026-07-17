# Incygames website

The corporate and product-portfolio website for Incygames Ltd — presents the company and directs
visitors to its independent products (Daily View, Role CV, Daily Product Idea, Conxy). See
[`docs/Incygames_website_tech_spec_v1.md`](docs/Incygames_website_tech_spec_v1.md) for the full
product/technical specification this build follows.

This repository currently implements **Phase 1 (Corporate foundation)** only: the design system,
all core pages, SEO infrastructure and a static, deployable build. The contact form is
UI-and-validation only and opens a pre-filled email via `mailto:` — there is no backend, database
or analytics yet. Those are Phase 2.

## Stack

Next.js (App Router) · TypeScript (strict) · React 19 · Tailwind CSS v4 · Zod v4 · Vitest +
React Testing Library · Playwright · MUI icons (`@mui/icons-material`) for iconography.

## Local setup

Requires Node.js 20.9+ (this project was built and tested on Node 22/26).

```bash
npm install
npm run dev       # start the dev server at http://localhost:3000
```

## Available scripts

| Script                 | What it does                                                  |
| ---------------------- | ------------------------------------------------------------- |
| `npm run dev`          | Start the local dev server                                    |
| `npm run build`        | Production build (static-generates every route)               |
| `npm run start`        | Serve the production build                                    |
| `npm run lint`         | ESLint                                                        |
| `npm run typecheck`    | `tsc --noEmit`                                                |
| `npm run format`       | Prettier — writes formatting fixes                            |
| `npm run format:check` | Prettier — check only, used in CI                             |
| `npm run test`         | Unit and component tests (Vitest + Testing Library)           |
| `npm run test:watch`   | Unit tests in watch mode                                      |
| `npm run test:e2e`     | Playwright end-to-end tests (builds and serves the app first) |

CI (`.github/workflows/ci.yml`) runs all of the above, plus a production build, on every pull
request and push to `main`.

## Editing product content

Products are structured content, not hard-coded page markup, so a new product or a status change
never requires touching layout code:

- Each product is a typed object in `src/content/products/*.ts`, matching the `Product` interface
  in `src/types/index.ts`.
- All product content is validated against a Zod schema (`src/lib/validation.ts`) the moment it's
  loaded (`src/lib/products.ts`) — a missing or malformed required field throws at build time
  rather than silently producing a broken page.
- `displayOrder` controls homepage/`/products` ordering; `featured` controls homepage inclusion;
  `status` must be one of the values in `ProductStatus` (see the status → label mapping in
  `src/types/index.ts`, which mirrors the tech spec's table).
- `logoPath` / `heroImagePath` / `cardImagePath` are all optional. When absent, `ProductLogo` and
  `ProductHero` render an initials-monogram / gradient placeholder in the product's themed accent
  color (`--product-accent-<themeKey>` in `src/app/globals.css`) instead of a broken image — no
  product currently has real logo/screenshot assets.

To add a new product: create `src/content/products/<slug>.ts`, add it to the array in
`src/lib/products.ts`, and add a placeholder accent color in `globals.css` if you want a themed
monogram. No page or routing code needs to change — `/products/[slug]` and the sitemap pick it up
automatically via `generateStaticParams`.

## Design tokens

The brand palette in `src/app/globals.css` was derived directly from the Incygames logo
(`public/images/company/incygames-logo.png` — sampled navy `#202E6B`, teal `#0AA1B7`, orange
`#FE7505`). The raw logo teal and orange are both too light to pass WCAG AA for text/UI use, so
each has a darkened "safe" variant for interactive elements (`--accent`, `--focus`); the true logo
tones are kept as `--accent-soft` and used only decoratively (product placeholder tiles,
illustration). All pairings are contrast-checked — see the token comments in `globals.css`.

## Known Phase 1 trade-offs

- **Contact form has no backend.** Submitting composes a `mailto:` link with the validated fields
  pre-filled, rather than sending from a server — there is no email/database integration yet
  (Phase 2). The success message reflects this honestly ("your email application should now
  open") rather than falsely claiming the message was sent.
- **`script-src 'self' 'unsafe-inline'` in the CSP** (`next.config.ts`). Next.js App Router injects
  its own inline RSC hydration scripts on every page, including statically generated ones, and
  their content isn't stable enough to pre-hash. Nonces would solve this properly but require
  per-request dynamic rendering, which conflicts with the tech spec's requirement that the
  homepage, `/products`, product pages, `/about` and legal pages all be statically generated. The
  JSON-LD `<script>` tags this app renders are fully build-time-static with no user input, so this
  is a scoped, low-risk trade-off rather than a general script-injection hole.
- **No real founder photo or per-product logos/screenshots yet.** Every component that would show
  one degrades gracefully (see "Editing product content" above) — the build succeeds either way.
- **Placeholder contact email** (`hello@incygames.com` in `src/components/forms/ContactForm.tsx`)
  pending a real address.
- **No analytics, cookie consent banner, or Supabase storage** — nothing to consent to yet, and no
  contact-form storage backend. All Phase 2.

## Deployment

Not yet deployed. Per the tech spec (§23): create the Vercel project, connect
`incygames.com` / `www.incygames.com`, confirm HTTPS + `www` → apex redirect, and only then update
DNS — preserving existing MX/SPF/DKIM/DMARC records for email throughout.
