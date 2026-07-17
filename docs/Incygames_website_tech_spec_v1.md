# Incygames Ltd Website Technical Specification

**Domain:** [incygames.com](https://incygames.com)  
**Website type:** Corporate and product portfolio website  
**Company:** Incygames Ltd  
**Primary purpose:** Present Incygames as the parent company and product studio behind a portfolio of independent SaaS products.

---

## 1. Project overview

Develop a modern, responsive business website for Incygames Ltd.

Incygames is an independent software company developing a portfolio of focused digital products, including:

- Daily View
- Daily Product Idea
- Role CV
- Conxy
- Future products and experiments

The website should establish Incygames as a credible company while directing visitors to the individual product websites.

The Incygames website must not attempt to combine the products into one application, user account or shared commercial proposition. Each product should retain its own brand, website, customer journey and application infrastructure.

The site should act as:

1. The corporate home of Incygames Ltd.
2. A portfolio showing its products.
3. A source of confidence for customers, partners and suppliers.
4. A place for general company enquiries.
5. A flexible platform for introducing future products.

---

## 2. Public positioning

Although Incygames functions as the parent company for several products, the public website should describe it as an **independent software company** or **product studio**, rather than repeatedly using the term **holding company**.

“Product studio” communicates that Incygames actively identifies problems, develops products, tests them with users and operates successful services.

### Recommended positioning statement

> Incygames develops simple, useful and fun software for real-world problems.

### Supporting description

> We build focused digital products that make everyday tasks clearer, easier or more enjoyable. Our current projects cover independent living, career development, product discovery and games.

### Optional brand line

> Simple, useful and fun software.

### Brand attributes

The company should feel:

- Thoughtful
- Practical
- Curious
- Human
- Experienced
- Uncomplicated
- Experimental without appearing unreliable

Avoid generic startup language such as:

- Disrupting industries
- Revolutionary technology
- World-leading solutions
- Transforming the future
- Cutting-edge innovation

The products should provide the evidence. The company site should explain the philosophy connecting them.

---

## 3. Objectives

### Primary objectives

The website must:

- Explain what Incygames is within five seconds.
- Display its product portfolio clearly.
- Direct visitors to the appropriate product website.
- Establish that the products are operated by a legitimate UK company.
- Provide a way to contact Incygames.
- Allow new products to be added without redesigning the site.
- Support products at different stages of development.
- Provide company-level legal and privacy information.
- Work well on mobile, tablet and desktop devices.

### Secondary objectives

The website should:

- Explain the company’s approach to product development.
- Introduce founder Phil Martin.
- Support partnership, media and commercial enquiries.
- Improve search visibility for the Incygames name.
- Provide consistent company attribution across all products.
- Create a credible destination for payment providers, banks, suppliers and prospective partners.

### Non-objectives

Version one should not include:

- Customer registration or authentication
- Shared product accounts
- Subscription management
- Product dashboards
- E-commerce
- A company-wide customer support portal
- A custom content-management system
- User comments
- Community forums
- Product functionality embedded into the company site
- A large company blog

Product-specific waitlists, demonstrations, pricing, support and user accounts should remain on the relevant product websites.

---

## 4. Target audiences

### Prospective product users

People who arrive after seeing “Incygames Ltd” in a footer, email, payment description or privacy policy.

They need to understand:

- What Incygames is
- Which products it operates
- Where to find the relevant product

### Partners and suppliers

Potential technology, distribution, care, recruitment, marketing or commercial partners.

They need:

- A concise explanation of the business
- Evidence of active products
- Company information
- A contact route

### Banks and payment providers

Organisations conducting business verification or due diligence.

They need:

- A professional public presence
- Clear company identity
- Product descriptions
- Contact details
- Terms and privacy documents

### Journalists and content creators

People looking for:

- The company story
- Founder information
- Product summaries
- Product logos or screenshots
- Contact information

A separate press page is not required in version one, but the site architecture should allow one to be added later.

### Prospective collaborators

Designers, developers, advisers and early product contributors.

They should be able to understand the company’s interests and product-development approach.

---

## 5. Information architecture

### Primary navigation

- Products
- About
- Contact

### Header actions

- Incygames logo linking to the homepage
- Primary navigation
- Optional highlighted **View products** button
- Mobile navigation menu

Do not include:

- Login
- Pricing
- Dashboard
- Support

Those functions belong to individual products.

### Recommended routes

```text
/
├── /products
│   ├── /products/daily-view
│   ├── /products/daily-product-idea
│   ├── /products/role-cv
│   └── /products/conxy
├── /about
├── /contact
├── /privacy
├── /cookies
├── /terms
├── /accessibility
├── /sitemap.xml
├── /robots.txt
└── /404
```

### Future routes

```text
/updates
/updates/[slug]
/press
/brand
/partners
```

Do not build these future routes during the initial implementation unless content is available.

---

## 6. Homepage specification

### 6.1 Header

The header must contain:

- Incygames wordmark or logo
- Products
- About
- Contact
- Optional **Explore our products** button

Behaviour:

- Remain visible when scrolling on desktop.
- Use a compact mobile menu below the desktop breakpoint.
- Provide a visible keyboard focus state.
- Use a solid or lightly translucent background.
- Avoid excessive animation.

### 6.2 Hero section

#### Recommended heading

> Small software products for real-world problems.

#### Supporting text

> Incygames is an independent software company developing simple, useful and occasionally game-inspired digital products.

#### Primary action

**Explore our products**

Link to `/products` or scroll to the homepage product section.

#### Secondary action

**About Incygames**

Link to `/about`.

#### Visual treatment

Use an abstract visual representing several connected products rather than a generic photograph of people working at laptops.

Possible treatments include:

- Four softly coloured product tiles
- Connected geometric shapes
- A restrained portfolio constellation
- Small product-interface fragments
- An animated but subtle sequence of product icons

The hero must remain understandable with images and animation disabled.

### 6.3 Featured products section

#### Heading

> Products we’re developing

#### Introduction

> Each product starts with a specific problem and is developed as an independent service with its own audience and identity.

Display a responsive product-card grid.

Recommended initial order:

1. Daily View
2. Role CV
3. Daily Product Idea
4. Conxy

The order must be controlled through product data rather than hard-coded into the page.

Each card must contain:

- Product logo
- Product name
- Short description
- Product category
- Product status
- Optional screenshot or illustration
- **Learn more** link
- External product website link where available

### Initial product descriptions

#### Daily View

> A calm, clear daily display that helps older adults see today’s activities and understand what happens next.

#### Role CV

> A career tool that scores roles by personal fit, identifies skill gaps and helps people create tailored job applications.

#### Daily Product Idea

> A daily source of evaluated, practical product ideas for people who want to stop searching and start building.

#### Conxy

> A simple connection-based puzzle game built around completing challenges in as few moves as possible.

### 6.4 How Incygames works

#### Heading

> From problem to practical product

Use three or four concise stages.

#### Recommended stages

**Find a real problem**

Start with something people regularly find confusing, frustrating or unnecessarily difficult.

**Build the simplest useful version**

Create enough of the product to demonstrate the idea and allow people to experience it.

**Test it with real users**

Use customer behaviour and feedback to decide what to improve, change or stop.

**Develop what proves useful**

Invest further where the product shows evidence of solving a worthwhile problem.

This section should communicate disciplined experimentation, not a collection of unrelated ideas.

### 6.5 Company philosophy section

#### Recommended heading

> Different products. A common approach.

#### Suggested copy

> Incygames products address different audiences, but they share the same principles: begin with a recognisable problem, remove unnecessary complexity and create something people can understand quickly.

Present three principles:

- **Useful before impressive**
- **Clear before complicated**
- **Tested before scaled**

### 6.6 Founder section

#### Heading

> Built on experience. Driven by curiosity.

#### Suggested copy

> Incygames was founded by Phil Martin following a career spanning technology, telecommunications, strategy, operations and commercial development. It combines that experience with a willingness to start again, learn new tools and turn ideas into working products.

Include:

- Professional founder photograph
- Short biography
- Optional link to the About page
- Optional external link to Phil’s LinkedIn profile
- Optional link to the A Bit Gamey publication

Keep this section concise. The primary focus of the homepage must remain the products.

### 6.7 Closing call to action

#### Heading

> See what we’re building

#### Supporting text

> Explore the current products, try those already available or join a waitlist to follow their development.

#### Action

**View all products**

Optional secondary link:

**Contact Incygames**

### 6.8 Footer

The footer must include:

- Incygames logo
- One-sentence company description
- Product links
- Company links
- Legal links
- Contact link
- Copyright year generated dynamically

Recommended legal wording:

> Incygames Ltd is a company registered in England and Wales. Company number 10517638.

Do not publish a residential registered-office address in the general footer unless it is legally or operationally necessary. Include the appropriate address in formal legal documents where required.

---

## 7. Products index page

### Route

`/products`

### Purpose

Provide a complete and filterable overview of current and previous products.

### Page structure

1. Page introduction
2. Status or category filters
3. Product grid
4. Company-development approach
5. Contact call to action

### Suggested heading

> Products and experiments

### Suggested introduction

> Incygames develops independent products around specific problems. Some are available today, while others are being tested, refined or explored.

### Filters

Version one may display simple client-side filters:

- All
- Available
- In development
- Experiments
- Games

Filters should only appear when there are enough products to make them useful. With four products, a single unfiltered grid is acceptable.

---

## 8. Product detail page template

### Route pattern

`/products/[slug]`

Every product must have an Incygames portfolio page, even when it has a separate website.

The Incygames page should provide a concise corporate overview and then direct visitors to the product’s own site.

### Page content

- Product logo
- Product name
- Strapline
- Status badge
- Category
- Hero image or screenshot
- Problem being addressed
- Product approach
- Intended users
- Current stage
- External product website
- Optional contact link
- Related products

### Recommended sections

#### The problem

Explain the customer problem in two or three paragraphs.

#### The product

Describe the proposed or current solution.

#### Who it is for

Describe the intended users or customers.

#### Current status

Clearly state whether the product is:

- Available
- Beta
- Waitlist
- Prototype
- In development
- Experiment
- Paused
- Retired

#### Product call to action

Examples:

- Visit Daily View
- Explore Role CV
- View today’s product idea
- Learn about Conxy
- Join the waitlist
- Try the demo

External links should normally open in the same browser tab. Use an external-link indicator where helpful.

### Content duplication

Do not copy the complete product landing page into Incygames.

The company page should contain:

- A concise summary
- Corporate context
- A clear outbound route

The product website should remain the authoritative source for detailed features, pricing, waitlists and support.

---

## 9. About page

### Route

`/about`

### Purpose

Explain why Incygames exists, its approach and the experience behind it.

### Recommended page structure

1. Company introduction
2. What Incygames builds
3. Product-development principles
4. Founder biography
5. Company details
6. Contact action

### Recommended opening

> Incygames is an independent software company based in Bath, UK. It develops focused digital products designed to make particular tasks clearer, easier or more enjoyable.

### Company story

Explain that Incygames:

- Develops several independent products.
- Starts with identifiable customer problems.
- Uses prototypes and early releases to test demand.
- Builds products gradually in response to evidence.
- Is prepared to change, pause or stop products when the evidence suggests it.

### Founder biography

The biography should mention:

- Phil Martin
- More than 30 years in telecommunications
- Experience across strategy, operations and commercial roles
- Technology and computing background
- Transition from corporate work to independent product development
- Interest in simple, useful software

Avoid presenting the company as a large team.

Use honest language such as:

> Incygames is currently founder-led and works with specialist collaborators and technology partners where required.

Do not use stock photographs implying a larger organisation.

---

## 10. Contact page

### Route

`/contact`

### Heading

> Contact Incygames

### Introduction

> Use the form below for company, partnership, media or general product enquiries. For product support, please use the support route provided on the relevant product website.

### Form fields

Required:

- Name
- Email address
- Enquiry type
- Message
- Privacy acknowledgement

Optional:

- Company or organisation
- Related product

### Enquiry type options

- General enquiry
- Product feedback
- Partnership
- Press or media
- Supplier enquiry
- Other

### Related product options

- Incygames
- Daily View
- Daily Product Idea
- Role CV
- Conxy
- Other

### Validation

- Name: 2–100 characters
- Email: valid email format
- Message: 20–5,000 characters
- Enquiry type: allow-listed value
- Product: allow-listed value
- Privacy acknowledgement: required
- All input trimmed and sanitised server-side

### Submission behaviour

1. Validate data on the server.
2. Apply spam and rate-limit checks.
3. Send the enquiry through Resend or the selected transactional email provider.
4. Optionally store the enquiry in Supabase.
5. Display a clear confirmation message.
6. Log only operational metadata and never include the full message in analytics.

### Success message

> Thank you. Your message has been sent to Incygames.

### Error message

> Your message could not be sent. Please check the form and try again.

### Spam controls

Implement:

- Hidden honeypot field
- Minimum form-completion time
- Server-side rate limiting
- Payload size limit
- Input allow lists
- Logging of repeated failures

Add Cloudflare Turnstile or another challenge only if automated spam becomes a problem. Avoid creating unnecessary friction at launch.

---

## 11. Product content model

Store products as structured content rather than hard-coded page markup.

Recommended implementation:

```text
src/content/products/
├── daily-view.mdx
├── daily-product-idea.mdx
├── role-cv.mdx
└── conxy.mdx
```

### Product schema

```typescript
type ProductStatus =
  | "available"
  | "beta"
  | "waitlist"
  | "prototype"
  | "in-development"
  | "experiment"
  | "paused"
  | "retired";

type ProductCategory =
  | "independent-living"
  | "career"
  | "productivity"
  | "entrepreneurship"
  | "game"
  | "other";

interface Product {
  id: string;
  slug: string;
  name: string;
  strapline: string;
  summary: string;
  category: ProductCategory;
  status: ProductStatus;
  featured: boolean;
  displayOrder: number;

  logoPath: string;
  heroImagePath?: string;
  cardImagePath?: string;
  altText: string;

  websiteUrl?: string;
  ctaLabel?: string;

  problem: string;
  solution: string;
  audience: string[];
  currentStage: string;

  themeKey?: string;
  launchedYear?: number;
  lastReviewed: string;
}
```

Validate all content at build time with Zod.

A missing required field must fail the build rather than produce an incomplete page.

---

## 12. Product status presentation

Use consistent human-readable labels.

| Stored value | Display label |
|---|---|
| `available` | Available |
| `beta` | Beta |
| `waitlist` | Join the waitlist |
| `prototype` | Prototype |
| `in-development` | In development |
| `experiment` | Experiment |
| `paused` | Paused |
| `retired` | Previous product |

Do not describe products as **coming soon** unless there is a defined launch plan.

Status badges must include text and must not rely on colour alone.

---

## 13. Design system

### Overall visual direction

Create a calm, modern corporate framework that allows individual product identities to appear within it.

The Incygames brand should be more neutral than any single product brand.

### Recommended visual characteristics

- Generous whitespace
- Clear typography
- Rounded but not excessively playful components
- Light backgrounds
- Strong dark text
- Restrained accent colour
- Product-specific colour accents
- Limited animation
- Large, clear product imagery

### Colour approach

Define company-level tokens:

```css
--background-primary;
--background-secondary;
--surface;
--text-primary;
--text-secondary;
--border;
--accent;
--accent-hover;
--focus;
--success;
--warning;
--error;
```

Each product may optionally supply:

```css
--product-accent;
--product-accent-soft;
```

Product colours should be used on cards and product pages without changing the fundamental Incygames navigation and layout.

### Typography

Use a highly legible sans-serif family.

Preferred approaches:

1. A system font stack for maximum performance.
2. A single variable font loaded through `next/font`.

Use no more than two typefaces.

Suggested hierarchy:

- Hero heading: 48–72px desktop, 38–48px mobile
- Page heading: 40–56px desktop
- Section heading: 28–40px
- Card heading: 20–26px
- Body: 17–19px
- Small metadata: minimum 14px

Maintain comfortable line height and limit long text blocks to approximately 65–75 characters per line.

### Spacing

Use a consistent 4px or 8px spacing scale.

Example:

```text
4, 8, 12, 16, 24, 32, 48, 64, 96, 128
```

### Breakpoints

Recommended:

```text
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Design mobile-first.

### Motion

Permitted:

- Small hover changes
- Subtle card elevation
- Short section transitions
- Gentle hero animation

Requirements:

- Respect `prefers-reduced-motion`.
- Do not delay access to content.
- Avoid parallax effects.
- Avoid continuously moving background objects.

---

## 14. Component library

Create reusable components including:

```text
SiteHeader
MobileNavigation
SiteFooter
Container
Section
Button
TextLink
ExternalLink
ProductCard
ProductGrid
ProductStatusBadge
ProductLogo
ProductHero
PrincipleCard
FounderProfile
CallToAction
ContactForm
FormField
SelectField
ConsentBanner
Breadcrumbs
SocialLinks
StructuredData
ErrorMessage
SuccessMessage
```

### Button variants

- Primary
- Secondary
- Text
- External product action

All buttons must support:

- Keyboard navigation
- Visible focus
- Disabled state
- Loading state where relevant
- Minimum touch target of approximately 44px

---

## 15. Recommended technical architecture

### Application framework

Use:

- Next.js
- App Router
- TypeScript with strict mode
- React
- Tailwind CSS
- MDX or typed local content
- Zod
- Vercel

Use the latest stable mutually compatible releases available when implementation begins. Do not use experimental framework features without a clear requirement.

### Rendering approach

Use static generation for:

- Homepage
- Products index
- Product detail pages
- About
- Legal pages

Use server-side execution only for:

- Contact-form submission
- Future dynamic integrations

The public site should remain usable if the email or database service is temporarily unavailable, apart from form submission.

### Database

A database is not required for the basic portfolio website.

When enquiries need to be stored, use the existing Supabase environment or a dedicated Incygames project.

Do not connect the website directly to the databases used by individual products.

### Email

Use Resend or the existing transactional email service.

Configure email addresses through environment variables:

```text
CONTACT_FROM_EMAIL
CONTACT_TO_EMAIL
CONTACT_REPLY_TO_EMAIL
RESEND_API_KEY
```

Do not hard-code personal email addresses into the source code.

---

## 16. Suggested repository structure

```text
incygames/
├── public/
│   ├── images/
│   │   ├── company/
│   │   └── products/
│   │       ├── daily-view/
│   │       ├── daily-product-idea/
│   │       ├── role-cv/
│   │       └── conxy/
│   ├── icons/
│   ├── favicon.ico
│   ├── icon.svg
│   └── manifest.webmanifest
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── cookies/
│   │   │   └── page.tsx
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   ├── accessibility/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── manifest.ts
│   │   ├── not-found.tsx
│   │   └── error.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── products/
│   │   ├── forms/
│   │   ├── analytics/
│   │   └── ui/
│   │
│   ├── content/
│   │   ├── products/
│   │   └── legal/
│   │
│   ├── lib/
│   │   ├── products.ts
│   │   ├── validation.ts
│   │   ├── analytics.ts
│   │   ├── metadata.ts
│   │   ├── email.ts
│   │   └── rate-limit.ts
│   │
│   └── types/
│       └── index.ts
│
├── tests/
│   ├── unit/
│   └── e2e/
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 17. Search-engine optimisation

### Core requirements

Every page must include:

- Unique page title
- Unique meta description
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter/X card metadata

### Title format

Homepage:

```text
Incygames | Simple, useful software
```

Internal pages:

```text
Products | Incygames
Daily View | Incygames
About | Incygames
Contact | Incygames
```

### Canonical domain

Use:

```text
https://incygames.com
```

Redirect:

```text
https://www.incygames.com/* → https://incygames.com/*
http://incygames.com/* → https://incygames.com/*
```

### Sitemap

Generate the sitemap from:

- Static routes
- Product content collection

Exclude:

- API routes
- Preview deployments
- Error pages

### Robots

Production:

```text
User-agent: *
Allow: /
Sitemap: https://incygames.com/sitemap.xml
```

Preview deployments must be marked `noindex`.

### Structured data

Add JSON-LD for:

- `Organization`
- `WebSite`
- `BreadcrumbList` on internal pages

The Organization record should include only accurate, visible information such as:

- Name
- URL
- Logo
- Founding year
- Company description
- Founder
- Same-as social profiles

Do not add unsupported ratings, reviews or claims.

### Search registration

After launch:

- Register the domain with Google Search Console.
- Submit the sitemap.
- Inspect the homepage and product pages.
- Confirm any old directory listing is removed from the index.
- Add Bing Webmaster Tools if useful.

---

## 18. Analytics and event tracking

### Recommended analytics

Use Google Analytics 4, configured through:

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID
```

Do not include analytics code when the environment variable is absent.

### Events

Track:

```text
product_card_click
product_external_visit
contact_form_start
contact_form_submit
contact_form_error
navigation_click
founder_profile_click
external_social_click
cookie_consent_accept
cookie_consent_reject
cookie_preferences_update
```

Recommended event parameters:

```text
product_name
product_slug
product_status
link_destination
page_path
enquiry_type
```

Never send:

- Names
- Email addresses
- Contact messages
- Form field contents
- Other personally identifiable information

### Consent

Implement:

- Necessary cookies enabled by default
- Analytics disabled by default
- **Accept analytics** action
- **Reject analytics** action with equal visual prominence
- Cookie preferences control in the footer
- Google Consent Mode where GA4 is used

For the simplest conservative implementation, do not load GA4 until the user has consented.

---

## 19. Legal pages

Provide:

- Privacy policy
- Cookie policy
- Website terms
- Accessibility statement

### Privacy policy contents

Cover:

- Identity of Incygames Ltd
- Contact method
- Information collected through the contact form
- Purpose of processing
- Legal basis
- Email provider
- Hosting provider
- Analytics provider
- Data retention
- International transfers where applicable
- Individual rights
- ICO complaint route
- Policy update date

### Cookie policy contents

List:

- Necessary cookies
- Consent-preference cookie
- Analytics cookies
- Purpose
- Provider
- Duration
- How preferences can be changed

### Website terms

Cover:

- Informational nature of the website
- Ownership of content
- Product availability
- External product links
- No guarantee that experimental products will launch
- Liability limitations
- Governing law

The legal text should be reviewed for the final service configuration and should not merely be copied from another product.

---

## 20. Accessibility

Target WCAG 2.2 Level AA.

Requirements include:

- Semantic HTML
- Logical heading structure
- Skip-to-content link
- Keyboard-accessible navigation
- Visible focus indicators
- Sufficient colour contrast
- Text alternatives for meaningful images
- Empty alt attributes for decorative images
- Labels and instructions for all form controls
- Accessible validation messages
- Status announcements using appropriate live regions
- No colour-only status communication
- Reduced-motion support
- Page zoom to at least 200% without loss of content
- Touch targets appropriate for mobile use
- No autoplaying audio or video

Product logos should have alt text using the product name. Product screenshots should describe the information shown rather than repeating surrounding text.

---

## 21. Performance requirements

### Performance targets

On representative mobile tests, aim for:

- Lighthouse Performance: 90 or above
- Accessibility: 95 or above
- Best Practices: 95 or above
- SEO: 95 or above
- Largest Contentful Paint below 2.5 seconds
- Cumulative Layout Shift below 0.1
- Interaction to Next Paint below 200ms

These are project targets rather than reasons to compromise essential functionality.

### Implementation requirements

- Use optimised WebP or AVIF images.
- Provide explicit image dimensions.
- Lazy-load below-the-fold images.
- Preload only essential hero assets.
- Avoid large animation libraries.
- Minimise client-side JavaScript.
- Use server components by default.
- Use system fonts or optimised font loading.
- Do not embed heavy product applications.
- Do not autoplay product videos.
- Cache static assets with versioned filenames.

---

## 22. Security

Implement the following response headers where compatible:

```text
Content-Security-Policy
Strict-Transport-Security
X-Content-Type-Options: nosniff
Referrer-Policy
Permissions-Policy
```

Additional requirements:

- Force HTTPS.
- Validate all server inputs.
- Escape user-generated content.
- Limit contact-form request sizes.
- Rate-limit form submissions.
- Do not expose database service keys.
- Do not place email API keys in client-side variables.
- Disable source maps in production where appropriate.
- Keep dependencies updated.
- Run dependency and secret scanning in CI.
- Do not log full form messages unnecessarily.
- Use generic public errors while retaining useful server logs.

Store secrets as deployment environment variables rather than in source control.

---

## 23. Deployment and domain configuration

### Recommended hosting

Deploy the website to Vercel.

Create:

- GitHub repository: `PLAMartin/incygames`
- Vercel project: `incygames-web`
- Production domain: `incygames.com`
- Redirect domain: `www.incygames.com`

### Environments

#### Development

```text
localhost
```

#### Preview

Generated for branches and pull requests.

Preview deployments must:

- Use test or disabled email configuration
- Avoid writing production enquiries
- Include `noindex`
- Display an optional preview-environment indicator

#### Production

```text
https://incygames.com
```

### DNS migration

Migration sequence:

1. Build and test the website on its Vercel preview address.
2. Add `incygames.com` and `www.incygames.com` to the Vercel project.
3. Record the current DNS configuration.
4. Preserve any MX, SPF, DKIM and DMARC records used for email.
5. Change only the web-related A, AAAA or CNAME records required by Vercel.
6. Confirm HTTPS certificate creation.
7. Confirm `www` redirects to the apex domain.
8. Test all legal, product and contact routes.
9. Remove the old hosting directory or disable public indexing.
10. Submit the new sitemap to search engines.

Do not change nameservers if doing so would accidentally remove existing email records unless all DNS records have first been replicated.

---

## 24. Continuous integration

Configure GitHub Actions or equivalent to run on every pull request:

```text
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

Optional additional checks:

- Accessibility scan
- Broken-link check
- Bundle-size check
- Dependency audit
- Secret scan
- Lighthouse CI

Do not permit production deployment when linting, type checking or the production build fails.

---

## 25. Testing requirements

### Unit tests

Cover:

- Product schema validation
- Product ordering
- Status-label mapping
- Contact-form validation
- Metadata generation
- Analytics payload filtering

### Component tests

Cover:

- Product cards
- Navigation
- Mobile menu
- Status badges
- Contact form
- Consent controls
- Error and success messages

### End-to-end tests

Test:

1. Homepage loads.
2. Main navigation works.
3. Product cards open the correct Incygames detail pages.
4. External product calls to action use the configured URLs.
5. Mobile menu opens, closes and returns focus correctly.
6. Contact-form validation blocks invalid submissions.
7. Valid contact submission displays confirmation.
8. Analytics remain disabled before consent.
9. Analytics consent can be accepted and withdrawn.
10. Privacy, cookie, terms and accessibility pages load.
11. Unknown routes display the custom 404 page.
12. `www` redirects to the apex domain.
13. HTTP redirects to HTTPS.

### Browser coverage

Test current versions of:

- Chrome
- Safari
- Edge
- Firefox
- Mobile Safari
- Chrome for Android

---

## 26. Acceptance criteria

The initial release is complete when:

- `incygames.com` displays the new website.
- Any old directory listing is no longer accessible.
- The site explains Incygames clearly above the fold.
- Daily View, Daily Product Idea, Role CV and Conxy are represented.
- Each product has a portfolio detail page.
- Available product websites are linked correctly.
- Product status can be changed through structured content.
- A new product can be added without editing page-layout code.
- The site works from 320px mobile width upwards.
- Navigation is fully keyboard accessible.
- Contact enquiries can be submitted successfully.
- Spam and rate-limit protections are enabled.
- Analytics do not receive personally identifiable form data.
- Analytics cookies are not created before consent.
- Legal pages are present.
- Metadata, sitemap, robots and structured data are present.
- Production pages are indexable.
- Preview deployments are not indexable.
- The site passes linting, type checking and production build.
- No client-side secrets are exposed.
- There are no broken internal links.
- Product images do not cause visible layout shifts.
- A custom 404 page is displayed for invalid routes.

---

## 27. Implementation phases

### Phase 1: Corporate foundation

Build:

- Design system
- Header and footer
- Homepage
- Products index
- Product detail template
- Four initial product records
- About page
- Legal pages
- SEO infrastructure
- Vercel deployment

### Phase 2: Contact and measurement

Add:

- Contact form
- Resend integration
- Optional Supabase storage
- Spam protection
- Cookie consent
- GA4
- Analytics events
- Search Console

### Phase 3: Richer company presence

Potential later additions:

- Company updates
- Product-development notes
- Press and media resources
- Downloadable company and product logos
- Partner information
- Product launch timeline
- Case studies
- Shared support directory

These additions should only be implemented when there is sufficient content and a clear visitor need.

---

## 28. Instructions for the coding agent

The coding agent must:

1. Build the company website at `incygames.com`.
2. Treat Incygames as the parent company and product studio.
3. Keep all product applications and product data separate.
4. Use structured content for the portfolio.
5. Build all pages mobile-first.
6. Use server components unless browser interactivity is required.
7. Avoid unnecessary dependencies.
8. Do not invent testimonials, customer numbers, funding, team members or product launch dates.
9. Do not describe unavailable products as available.
10. Do not create login, pricing or account functionality.
11. Do not duplicate complete product landing pages.
12. Make every product status and external URL configurable.
13. Ensure the site still builds when an optional product URL or image is absent.
14. Include realistic initial content rather than lorem ipsum.
15. Add a comprehensive README covering local setup, environment variables, deployment and product-content editing.

The final result should feel like a coherent, credible company portfolio while allowing every Incygames product to retain its own identity.
