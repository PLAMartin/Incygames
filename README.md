# Incygames website

The corporate and product-portfolio website for Incygames Ltd — presents the company as a
founder-led product studio and directs visitors to its independent products (Daily View, Role CV,
Daily Product Idea, Conxy). See
[`docs/Incygames_website_tech_spec_v2.md`](docs/Incygames_website_tech_spec_v2.md) for the full
product/technical specification this build follows (supersedes
[`v1`](docs/Incygames_website_tech_spec_v1.md)).

This repository implements all five v2 phases: the founder-led homepage, product case-study
pages, a server-side contact form (Resend, with an honest mailto fallback while credentials are
unconfigured — see below), SEO/structured data and accessibility passes. Analytics and cookie
consent were already in place from a prior change.

## Stack

Next.js (App Router) · TypeScript (strict) · React 19 · Tailwind CSS v4 · Zod v4 · Resend ·
Vitest + React Testing Library · Playwright. Iconography is a small set of local inline SVGs
(`src/components/ui/icons.tsx`) — this app previously used `@mui/icons-material`, but Emotion's
SSR output under this Next.js version's App Router leaked generated CSS text into rendered link
content, so the MUI/Emotion dependency was removed entirely in favour of plain SVGs.

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

## Environment variables

See `.env.example`. The contact form works without any of these set — it falls back to a mailto
flow — but to send enquiries directly, configure in Vercel (Production and Preview):

```text
CONTACT_TO_EMAIL=       # where enquiries are delivered
CONTACT_FROM_EMAIL=     # the Resend-verified sending address
RESEND_API_KEY=
```

## Editing product content

Products are structured content, not hard-coded page markup, so a new product or a stage change
never requires touching layout code:

- Each product is a typed object in `src/content/products/*.ts`, matching the `Product` interface
  in `src/types/index.ts`.
- All product content is validated against a Zod schema (`src/lib/validation.ts`) the moment it's
  loaded (`src/lib/products.ts`) — a missing or malformed required field throws at build time
  rather than silently producing a broken page.
- Array order in `src/lib/products.ts` controls homepage/`/products` display order; `featured`
  controls homepage inclusion; `featuredExperiment` (max 2) controls the homepage "What we're
  testing now" section; `stage` must be one of the values in `ProductStage` (see the stage → label
  mapping in `src/types/index.ts`, which mirrors the tech spec's table — deliberately no
  "Available" label, per spec).
- `logoSrc` / `imageSrc` are both optional. When `imageSrc` is absent (true for all four products
  today — no real screenshots exist yet), `ProductImagePlaceholder` renders a branded fallback
  (accent gradient, subtle pattern, logo-or-initials, product name) instead of a broken image.

To add a new product: create `src/content/products/<slug>.ts`, add it to the array in
`src/lib/products.ts`, and add a `--product-accent-<slug>` colour in `globals.css` if you want a
themed placeholder/monogram. No page or routing code needs to change — `/products/[slug]`, its
OG image, and the sitemap all pick it up automatically via `generateStaticParams`.

## Design tokens

The brand palette in `src/app/globals.css` was derived directly from the Incygames logo
(`public/images/company/incygames-logo.png` — sampled navy `#202E6B`, teal `#0AA1B7`, orange
`#FE7505`). The raw logo teal and orange are both too light to pass WCAG AA for text/UI use, so
each has a darkened "safe" variant for interactive elements (`--accent`, `--focus`); the true logo
tones are kept as `--accent-soft` and used only decoratively (product placeholder tiles,
illustration). All pairings are contrast-checked — see the token comments in `globals.css`.
Product stage badges deliberately use one neutral treatment (not red/amber/green) — see the
comment in `ProductStatusBadge.tsx`.

## Known trade-offs

- **Contact form backend is inert until credentials are set.** The code path is real (Route
  Handler → Resend), but with no `RESEND_API_KEY`/`CONTACT_TO_EMAIL`/`CONTACT_FROM_EMAIL`
  configured, the API honestly reports "not configured" and the form falls back to a pre-filled
  `mailto:` — never a false success state.
- **No product screenshots.** Every product card/hero uses the branded placeholder
  (`ProductImagePlaceholder`) rather than a real screenshot — swap in `imageSrc` per product
  content file once real screenshots exist.
- **`script-src 'self' 'unsafe-inline'` in the CSP** (`next.config.ts`). Next.js App Router injects
  its own inline RSC hydration scripts on every page, including statically generated ones, and
  their content isn't stable enough to pre-hash. Nonces would solve this properly but require
  per-request dynamic rendering, which conflicts with this app's static generation. The JSON-LD
  `<script>` tags this app renders are fully build-time-static with no user input, so this is a
  scoped, low-risk trade-off rather than a general script-injection hole.
- **Rate limiting on `/api/contact` is per-instance, in-memory** — adequate for this site's
  traffic without adding a Redis/KV dependency, but not a distributed limiter.
- **Placeholder contact email** (`hello@incygames.com` in `src/components/forms/ContactForm.tsx`)
  used only in the mailto fallback, pending a real address.

## Deployment

Not yet deployed. Per the tech spec: create the Vercel project, connect `incygames.com` /
`www.incygames.com`, set the contact-form environment variables above, confirm HTTPS + `www` →
apex redirect, and only then update DNS — preserving existing MX/SPF/DKIM/DMARC records for email
throughout.
