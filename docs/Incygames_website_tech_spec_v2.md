# Incygames.com Website Improvement Technical Specification

**Document status:** Implementation-ready  
**Target website:** https://www.incygames.com/  
**Primary objective:** Make Incygames.com feel like a distinctive, founder-led product studio rather than a generic product directory, while improving product clarity, credibility, accessibility, SEO and conversion.  
**Implementation approach:** Modify the existing codebase and preserve the current framework, component library, deployment method, analytics consent model, legal pages and visual identity unless this specification explicitly requires a change.

---

## 1. Instructions to the coding agent

1. Inspect the existing repository before making changes.
2. Preserve the current technology stack, routing conventions, styling system and deployment configuration.
3. Do not replace the existing application with a new framework.
4. Reuse existing design tokens and components wherever practical.
5. Refactor duplicated product content into a single structured product-data source.
6. Implement changes incrementally and keep the website deployable after each phase.
7. Do not invent testimonials, customer numbers, usage statistics, partner logos or product screenshots.
8. Where a required product screenshot is unavailable, use a clearly designed branded placeholder rather than fabricated application content.
9. Preserve all existing legal pages and company details.
10. Preserve consent-based Google Analytics behaviour.
11. Ensure all content and layouts work at mobile, tablet and desktop widths.
12. Run the project’s existing linting, type checking, unit tests and production build before completion.
13. Add or update automated tests for the new behaviour described in this specification.
14. Report any requirement that cannot be completed because an asset, credential or external URL is unavailable.

---

## 2. Current-state observations

The current website already includes:

- A homepage with a hero, product cards, development process, principles, founder summary and final call to action.
- Product index and product detail pages.
- About, Contact, Press and legal pages.
- Four featured products:
  - Daily View
  - Role CV
  - Daily Product Idea
  - Conxy
- Consent-controlled Google Analytics.
- Registered company details for Incygames Ltd.
- External product links.
- A contact form.

The main issues to address are:

1. The homepage proposition is clear but generic.
2. Product cards rely mainly on logos or initials rather than visual demonstrations.
3. The label “Available” overstates product maturity.
4. The founder story appears too late and is not visually prominent.
5. There is no strong low-commitment conversion route for people who want to follow the work.
6. Two homepage sections repeat similar product-development principles.
7. Product detail pages are too brief and devote excessive space to repeated related-product cards.
8. External-link icon implementation leaks generated CSS text into crawler-readable link text.
9. The contact-form behaviour and data-handling flow need to be explicit and robust.
10. Structured data and social-sharing metadata can be improved.

---

## 3. Desired positioning

Incygames should be presented as:

> An independent, founder-led product studio in Bath that creates, tests and develops focused digital products around real problems.

The site should communicate:

- Practical usefulness over novelty for its own sake.
- Small, focused experiments.
- Honest product maturity.
- A visible founder with substantial professional experience.
- Evidence-led product development.
- A portfolio that may evolve, pause or change.
- An invitation to try products, provide feedback or follow the journey.

The site must not imply that every product is mature, commercially established or guaranteed to continue.

---

## 4. Success criteria

The implementation is successful when:

1. A first-time visitor can understand what Incygames is within five seconds.
2. The founder-led nature of the company is visible above or immediately below the product section.
3. Each product card communicates:
   - What the product does.
   - Who it is for.
   - Its current maturity.
   - The next action a visitor can take.
4. Product stages use specific labels rather than the generic word “Available”.
5. Product cards display a screenshot, mock-up or intentional branded placeholder.
6. Visitors can follow the product-building journey through A Bit Gamey.
7. The two overlapping process/principles sections are consolidated.
8. No generated CSS class text appears in external-link text, metadata, accessibility names or search snippets.
9. Product pages provide meaningful case-study information or are simplified to avoid thin duplicated content.
10. The site meets WCAG 2.2 AA expectations for the changed components.
11. Metadata and JSON-LD validate without errors.
12. The production build completes without errors or warnings introduced by the changes.

---

## 5. Information architecture

Retain the primary navigation:

- Products
- About
- Contact

Retain the existing footer groups:

- Products
- Company
- Legal

Add a visible “Follow the experiments” route or CTA linking to:

- A Bit Gamey: https://abitgamey.substack.com/

Do not add a new top-level navigation item unless it improves the current design. The newsletter CTA may appear as a button in the hero, founder section or final CTA area.

### Recommended homepage order

1. Header
2. Founder-led hero
3. Featured products
4. Current experiments or “What we’re testing now”
5. Founder section with photograph
6. Consolidated four-step approach
7. A Bit Gamey newsletter/latest article section
8. Final product/contact CTA
9. Footer

---

## 6. Global product data model

Create or refactor to a single product-data source used by:

- Homepage product cards
- Products index
- Product detail pages
- Footer product links
- Related-product navigation, if retained
- Structured data
- Status labels

Use the existing project’s preferred data format. In a TypeScript codebase, use an equivalent of:

```ts
type ProductStage =
  | "live-beta"
  | "seeking-pilot-users"
  | "prototype"
  | "early-development"
  | "in-development"
  | "paused";

interface Product {
  slug: string;
  name: string;
  category: string;
  summary: string;
  strapline: string;
  audience: string[];
  stage: ProductStage;
  stageLabel: string;
  stageDescription: string;
  internalUrl: string;
  externalUrl: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  logoSrc?: string;
  imageSrc?: string;
  imageAlt: string;
  imageFocalPoint?: string;
  featured: boolean;
  featuredExperiment?: boolean;
  problem: string;
  solution: string;
  currentTest?: string;
  nextStep?: string;
}
```

### Initial product stages

Use the following labels unless the existing product owner data indicates a more current status:

| Product | Stage key | Display label |
|---|---|---|
| Daily View | `seeking-pilot-users` | Seeking pilot users |
| Role CV | `live-beta` | Live beta |
| Daily Product Idea | `early-development` | Early development |
| Conxy | `in-development` | In development |

Do not use “Available” as a maturity label.

### Status component requirements

Create a reusable status badge component.

Requirements:

- Text must be visible without relying on colour.
- Use a subtle semantic treatment consistent with the existing design.
- Do not use red, amber or green in a way that implies failure or operational health.
- Badge must remain readable at 200% zoom.
- Include optional visually hidden supporting text only when necessary.
- Do not animate the badge.

---

## 7. Homepage requirements

## 7.1 Hero section

Replace the existing generic hero copy with the following:

### Eyebrow

`Independent product studio · Bath, UK`

### Heading

`Useful software, built one real problem at a time.`

### Supporting paragraph

`Incygames is an independent product studio founded by Phil Martin in Bath. I create, test and develop focused digital products that make everyday tasks clearer, easier or more enjoyable.`

### Primary CTA

Label: `Explore the products`  
Destination: Existing Products page or products section anchor.

### Secondary CTA

Label: `Follow the experiments`  
Destination: https://abitgamey.substack.com/

### Hero implementation requirements

- Retain the existing brand style.
- Use a constrained text width for readability.
- Make the primary CTA visually dominant.
- External newsletter CTA may open in the same tab unless the existing site consistently opens external destinations in new tabs.
- If opening in a new tab, include `rel="noopener noreferrer"` and an accessible indication that it opens a new tab.
- Do not place the founder photograph in the hero if it makes the layout crowded; the dedicated founder section is the preferred location.

---

## 7.2 Featured products section

Change the section heading to:

`Products and experiments`

Supporting copy:

`Each product starts with a specific problem. Some are live, some are being tested and others are still early experiments.`

### Product-card content

Each card must include:

1. Product image or screenshot.
2. Product category.
3. Product name.
4. One-sentence summary.
5. Product-stage badge.
6. Optional one-line audience statement.
7. Internal `Learn more` link.
8. External product CTA.

### Recommended product summaries

#### Daily View

Category: `Independent living`  
Summary: `A calm daily display that helps older adults see what is happening today and what happens next.`  
Audience line: `For older adults, families and carers.`  
Stage: `Seeking pilot users`  
External CTA: `Visit Daily View`

#### Role CV

Category: `Career`  
Summary: `A career tool that assesses how well a role fits a person’s experience and helps create a more relevant application.`  
Audience line: `For job seekers and career changers.`  
Stage: `Live beta`  
External CTA: `Try Role CV`

#### Daily Product Idea

Category: `Entrepreneurship`  
Summary: `A daily source of evaluated product ideas for people who want to spend less time searching and more time building.`  
Audience line: `For aspiring founders and independent builders.`  
Stage: `Early development`  
External CTA: `Visit Daily Product Idea`

#### Conxy

Category: `Game`  
Summary: `A connection-based puzzle game built around completing each challenge in as few moves as possible.`  
Audience line: `For casual puzzle players.`  
Stage: `In development`  
External CTA: `Visit Conxy`

### Product-card visual requirements

- Use a 16:10 or 4:3 media area with a consistent aspect ratio.
- Use `object-fit: cover` or `contain` based on asset type.
- Do not stretch logos.
- Avoid using plain initials as the main visual unless no other asset exists.
- If no screenshot exists, create a branded placeholder using the product logo, name and a subtle background pattern.
- Placeholder must be identified in code as a fallback and be easy to replace.
- Images must be responsive and optimised by the framework’s image pipeline where available.
- Provide explicit width and height to avoid layout shift.

### Suggested asset paths

```text
/public/images/products/daily-view-card.webp
/public/images/products/role-cv-card.webp
/public/images/products/daily-product-idea-card.webp
/public/images/products/conxy-card.webp
```

Also retain original PNG or source files when appropriate.

---

## 7.3 “What we’re testing now” section

Add a compact section after the main product grid.

Heading:

`What we’re testing now`

Introductory copy:

`The products evolve through small releases, real use and direct feedback. These are the questions currently shaping the next versions.`

Render up to two products flagged with `featuredExperiment: true`.

Each experiment item should contain:

- Product name.
- Current question or hypothesis.
- Next action.
- Link to product or contact route.

Initial suggested content:

### Daily View

Current question:

`How much information is useful on a daily display before clarity becomes clutter?`

Action:

`Try the demonstration or ask about joining the pilot.`

### Role CV

Current question:

`Can a role-first assessment help people focus their effort on better-fitting opportunities?`

Action:

`Try the beta and share feedback.`

Keep this content in product data rather than hardcoding the section.

---

## 7.4 Founder section

Place this section after the product and current-experiment sections.

### Founder image

Source supplied by site owner:

`https://www.philmartin.net/image/PhilMartin_logo_1024x1024.png`

Preferred local asset path:

`/public/images/phil-martin.png`

Implementation instructions:

1. Attempt to download and store the source image locally.
2. Do not hotlink in production if a local copy can be created.
3. Preserve the original source quality.
4. Generate responsive formats through the framework’s image tooling where available.
5. Display at an effective rendered size of approximately 240–360 pixels on desktop.
6. Use a square or softly rounded presentation consistent with the current visual language.
7. Do not apply heavy filters.
8. Use `object-position: center top` if cropping is required.
9. Alt text: `Phil Martin, founder of Incygames`
10. If the source URL cannot be downloaded by the build environment, keep the remote URL in a central asset configuration and document the limitation.

### Founder copy

Eyebrow:

`Founder-led in Bath`

Heading:

`Built from experience. Developed through experimentation.`

Body:

`After more than 30 years working across telecommunications, strategy, operations and commercial development, I founded Incygames to turn useful ideas into working products. I build small versions, share them early and use real feedback to decide what happens next.`

Supporting line:

`Incygames is currently founder-led and works with specialist collaborators and technology partners where required.`

Links:

- `More about Phil` → https://www.philmartin.net/
- `Read A Bit Gamey` → https://abitgamey.substack.com/
- Retain or add Phil’s existing LinkedIn URL only if it is already present in the codebase or supplied through configuration. Do not invent a LinkedIn URL.

### Founder-section layout

Desktop:

- Two-column layout.
- Image approximately 35–40% width.
- Copy approximately 60–65% width.

Mobile:

- Image above text.
- Keep image width below viewport width.
- Preserve a logical DOM order: image, eyebrow, heading, body, links.

---

## 7.5 Consolidated approach section

Remove or merge the current overlapping sections:

- `From problem to practical product`
- `Different products. A common approach.`

Replace both with one section.

Heading:

`How Incygames works`

Steps:

1. **Find a worthwhile problem**  
   `Start with something people regularly find confusing, frustrating or unnecessarily difficult.`

2. **Build the simplest useful version**  
   `Create enough of the product for people to understand and experience the idea.`

3. **Test it with real people**  
   `Use behaviour and feedback to learn what is useful, unclear or unnecessary.`

4. **Develop what proves valuable**  
   `Invest further where there is evidence that the product solves a worthwhile problem.`

Optional closing statement:

`Useful before impressive. Clear before complicated. Tested before scaled.`

### Implementation requirements

- Reuse the existing numbered-step visual pattern if it remains effective.
- Do not create a second separate principles grid.
- Ensure the four steps collapse cleanly on mobile.
- Avoid scroll-triggered animation unless the existing site already uses motion.
- Respect `prefers-reduced-motion`.

---

## 7.6 Newsletter section

Add a dedicated section near the end of the homepage.

Eyebrow:

`A Bit Gamey`

Heading:

`Follow the experiments`

Body:

`Each week I share what I am building, what I am learning and how the products are evolving.`

Primary CTA:

`Read the free newsletter`

Destination:

https://abitgamey.substack.com/

Optional secondary content:

- Latest article title.
- Publication date.
- Short excerpt.
- Link to the article.

Do not add a live Substack API dependency unless one already exists. Prefer one of:

1. Static content in site configuration.
2. Build-time feed parsing with graceful failure.
3. A simple permanent link without latest-post content.

The newsletter section must still render correctly if the external feed is unavailable.

---

## 7.7 Final CTA

Replace the current generic closing CTA with:

Heading:

`See what we’re building`

Body:

`Explore the current products, try the live experiments or get in touch if one of the problems is relevant to you.`

Buttons:

- `View all products`
- `Contact Incygames`

---

## 8. Products index page

Update the products index to use the same enhanced product-card component and product-data source as the homepage.

Requirements:

- Show all products.
- Allow optional grouping or filtering by stage only if it can be implemented simply.
- Do not add filtering controls for four products unless the design clearly benefits.
- Use accurate status labels.
- Use product screenshots or placeholders.
- Ensure product cards are not exact duplicates of homepage cards if the index has more room; the index may include longer summaries.

Recommended page heading:

`Products and experiments`

Recommended introduction:

`Incygames develops focused digital products around specific real-world problems. Some are live, some are being tested and some may change direction as more is learned.`

---

## 9. Product detail pages

Retain product detail pages, but convert them into concise case-study pages.

### Required page structure

1. Breadcrumbs
2. Category
3. Product name
4. Strapline
5. Product-stage badge
6. Primary external CTA
7. Product screenshot or branded visual
8. The problem
9. The product
10. Who it is for
11. What has been built
12. What is being tested
13. What happens next
14. Final CTA
15. Compact links to other products

### Remove or reduce

- Remove the large repeated three-card `Related products` grid from every product page.
- Replace it with a compact text-based `Other products` list or a maximum of two small cards.
- Do not duplicate the full homepage product grid.

### Required content fields

Add these fields to product data:

- `whatHasBeenBuilt`
- `currentTest`
- `nextStep`
- `primaryCtaLabel`
- `primaryCtaUrl`

If content is not yet available, omit the section rather than filling it with generic text.

### Current suggested case-study content

#### Daily View

**What has been built**  
`A live website and demonstration of a calm daily display showing the date, time, today’s activities and what happens next.`

**What is being tested**  
`Whether the display gives older adults useful reassurance without adding unnecessary information or complexity.`

**What happens next**  
`Recruit a small group of pilot users in and around Bath and use their feedback to refine the display and family-management experience.`

#### Role CV

**What has been built**  
`A live beta that helps a user assess a role against their experience, identify relevant gaps and prepare a more tailored application.`

**What is being tested**  
`Whether role-first analysis helps people spend more time on suitable opportunities and produce more relevant applications.`

**What happens next**  
`Observe how people use the assessment, improve the clarity of recommendations and test willingness to return for additional roles.`

#### Daily Product Idea

**What has been built**  
`An early product concept and website centred on presenting one evaluated, practical product idea each day.`

**What is being tested**  
`Whether aspiring founders value a curated starting point more than an unrestricted stream of ideas.`

**What happens next**  
`Refine the evaluation framework and test which information makes an idea feel credible and actionable.`

#### Conxy

**What has been built**  
`An early connection-based puzzle concept focused on solving each challenge in as few moves as possible.`

**What is being tested**  
`Whether the move-count mechanic creates enough challenge, replay value and satisfaction for short game sessions.`

**What happens next**  
`Develop a small set of playable levels and observe completion, replay and abandonment behaviour.`

---

## 10. About page

Retain the About page but make it more personal and visually aligned with the homepage founder section.

### Recommended structure

1. Breadcrumbs
2. Page heading
3. Company description
4. Founder photograph and story
5. Product-development approach
6. Company operating model
7. Company details
8. Contact CTA

### Recommended opening copy

Heading:

`About Incygames`

Body:

`Incygames is an independent, founder-led product studio based in Bath, UK. It develops focused digital products designed to make particular tasks clearer, easier or more enjoyable.`

### Founder copy

`Incygames was founded by Phil Martin following more than 30 years in telecommunications spanning strategy, operations and commercial roles, alongside a background in technology and computing. After a long corporate career, Phil is now applying that experience through a series of small product experiments.`

`The approach is deliberately practical: create a simple version, share it, observe what happens and use the response to decide what to improve, change, pause or stop.`

Use the same local founder image asset and alt text as the homepage.

Avoid repeating identical paragraphs word-for-word across the homepage and About page. The meaning may be consistent, but the About page should provide more depth.

---

## 11. Contact form

## 11.1 Preferred behaviour

Implement a genuine server-side contact form rather than relying on a generated `mailto:` link.

Retain the current fields:

- Name
- Email address
- Enquiry type
- Company or organisation, optional
- Related product, optional
- Message
- Consent checkbox
- Honeypot field

### Validation

- Validate on client and server.
- Name: 2–100 characters.
- Email: valid email format, maximum 254 characters.
- Enquiry type: required and allowlisted.
- Company: maximum 150 characters.
- Related product: optional and allowlisted.
- Message: 20–5,000 characters.
- Consent: must be true.
- Honeypot: reject or silently accept without sending.
- Normalise and trim inputs.
- Escape all rendered values.
- Do not include unsanitised HTML in outbound emails.

### Server behaviour

Use the project’s existing serverless/API pattern.

Recommended environment variables:

```text
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
RESEND_API_KEY=
```

Requirements:

- Keep secrets server-side.
- Do not expose the API key in client bundles.
- Return structured success and error responses.
- Disable repeated submissions while a request is pending.
- Show an accessible success message without requiring a page reload.
- Preserve entered content after recoverable errors.
- Log only operational metadata needed to diagnose failures.
- Do not log full message content or consent data in production logs.
- Add basic rate limiting where supported.
- Consider an invisible CAPTCHA only if spam becomes a real issue; do not introduce one by default.

### Email content

Subject format:

`Incygames enquiry: {enquiry type}`

Include:

- Name
- Email
- Organisation
- Enquiry type
- Related product
- Message
- Submission timestamp
- Page URL

Set `reply-to` to the visitor’s validated email address.

### Privacy update

If server-side submission is implemented, update the Privacy page to explain:

- The information collected.
- Why it is processed.
- How it is transmitted.
- Which email delivery processor is used.
- How long enquiries are retained.
- How a visitor can request deletion.

Do not claim the site uses a server-side form until it is deployed.

## 11.2 Fallback behaviour

If email-service credentials are unavailable:

- Keep the existing behaviour temporarily.
- Clearly label the action as `Open in your email app`.
- Explain before submission that the form will create an email rather than send directly.
- Do not show a false success state.
- Document the missing environment variables in the implementation report.

---

## 12. External-link CSS leakage fix

The current rendered link text includes generated CSS similar to:

```text
.css-1l6e05h{-webkit-user-select:none; ... }
```

This must be treated as a priority defect.

### Likely cause

A CSS-in-JS style element associated with an icon component is being rendered or extracted inside the anchor’s readable content during server-side rendering or crawler text extraction.

### Required fix

1. Inspect the rendered server HTML for every external product link.
2. Replace the current external-link icon with one of:
   - A plain inline SVG with no injected `<style>` element.
   - A globally styled reusable icon component.
   - A CSS pseudo-element that is excluded from accessible text.
3. Mark decorative icons with:
   - `aria-hidden="true"`
   - `focusable="false"` for SVG where applicable.
4. Ensure the anchor’s accessible name contains only:
   - The visible link label.
   - Optional explicit new-tab text when applicable.
5. Ensure no `<style>` tags are nested inside anchors.
6. Ensure CSS class definitions are emitted in the document head or framework-approved style location.
7. Check homepage, product index and every product detail page.
8. Search generated HTML for `.css-`, `-webkit-user-select`, `cubic-bezier` and other leaked style strings.

### Acceptance tests

- Crawled page text contains `Visit Daily View`, not CSS.
- Screen-reader accessible name does not contain CSS.
- Generated metadata does not contain CSS.
- `view-source` and server-rendered HTML do not place style declarations inside the link.
- External icon remains visually aligned at 200% zoom.
- Link remains usable without the icon.

---

## 13. SEO and metadata

## 13.1 Page metadata

Provide unique:

- `<title>`
- Meta description
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter/X card metadata

### Suggested homepage metadata

Title:

`Incygames | Useful software for real-world problems`

Description:

`Incygames is a founder-led product studio in Bath creating and testing focused digital products including Daily View, Role CV, Daily Product Idea and Conxy.`

### Suggested About metadata

Title:

`About Incygames | Founder-led product studio in Bath`

Description:

`Learn about Incygames, Phil Martin and the practical, evidence-led approach used to turn real-world problems into focused digital products.`

### Suggested Products metadata

Title:

`Products and experiments | Incygames`

Description:

`Explore the digital products being built and tested by Incygames, including Daily View, Role CV, Daily Product Idea and Conxy.`

## 13.2 Open Graph assets

Create:

```text
/public/images/og/incygames-default-1200x630.png
/public/images/og/incygames-products-1200x630.png
/public/images/og/incygames-about-1200x630.png
```

If product-specific Open Graph images are practical, create one per product.

Requirements:

- 1200 × 630 pixels.
- Include product or company name.
- Use existing brand typography and colours.
- Keep important content within safe margins.
- Do not include tiny text.
- Do not fabricate interface screenshots.

## 13.3 Structured data

Add valid JSON-LD.

### Homepage

Use `Organization` with:

- `name`: `Incygames Ltd`
- `url`: `https://www.incygames.com/`
- `logo`: Existing Incygames logo URL
- `founder`: Person object for Phil Martin
- `address`: Bath, United Kingdom at locality level only
- `sameAs`: Only verified public profile URLs already in the codebase or supplied by the owner

### Founder

Use `Person` with:

- `name`: `Phil Martin`
- `url`: `https://www.philmartin.net/`
- `image`: Local or supplied founder image URL
- `jobTitle`: `Founder`
- `worksFor`: Incygames Ltd
- `sameAs`: Verified profile URLs only

### Product pages

Use `SoftwareApplication` where appropriate.

Include:

- Name
- Description
- Application category
- URL
- Image
- Author or provider
- Operating system: `Web` where accurate

Do not add pricing, ratings or offers unless factually supported.

### Breadcrumbs

Add `BreadcrumbList` on:

- Products index
- Product detail pages
- About
- Contact
- Press and legal pages where breadcrumb UI exists

Validate JSON-LD with a structured-data testing tool.

---

## 14. Accessibility requirements

Changed components must meet WCAG 2.2 AA expectations.

Requirements:

- Preserve the skip-to-content link.
- Maintain one logical `<h1>` per page.
- Use sequential heading levels.
- All meaningful images require accurate alt text.
- Decorative images and icons use empty alt text or `aria-hidden`.
- Status must not be communicated by colour alone.
- Focus indicators must remain visible.
- All interactive controls must be keyboard accessible.
- Minimum touch target approximately 44 × 44 CSS pixels where practical.
- Form errors must be programmatically associated with fields.
- Success and error messages must use an appropriate live region.
- Text must remain readable at 200% zoom.
- Layout must work at 320 CSS pixels without horizontal scrolling.
- Respect reduced-motion preferences.
- Links must be identifiable without depending only on colour.
- External-link behaviour must be consistent and accurately described.
- Founder-image crop must not remove the face at narrow widths.

---

## 15. Performance requirements

Targets for production pages under normal conditions:

- Lighthouse Performance: 90 or above where achievable without harming accessibility.
- Lighthouse Accessibility: 95 or above.
- Lighthouse Best Practices: 95 or above.
- Lighthouse SEO: 95 or above.
- Largest Contentful Paint: below 2.5 seconds on a representative mobile profile.
- Cumulative Layout Shift: below 0.1.
- Interaction to Next Paint: below 200 ms where measurable.

Implementation requirements:

- Optimise product and founder images.
- Use responsive image sizes.
- Avoid loading all product images at full resolution.
- Lazy-load below-the-fold images.
- Do not lazy-load the hero’s primary visual if one is introduced.
- Avoid adding large client-side libraries.
- Prefer server-rendered content.
- Ensure newsletter-feed failure does not block page rendering.
- Preserve caching and deployment behaviour already configured.

---

## 16. Responsive layout

Test at minimum:

- 320 × 568
- 375 × 812
- 768 × 1024
- 1024 × 768
- 1280 × 800
- 1440 × 900

### Breakpoint behaviour

- Product grid:
  - Mobile: one column.
  - Tablet: two columns.
  - Desktop: two or four columns according to the existing page width and readability.
- Founder section:
  - Mobile: image above copy.
  - Desktop: two columns.
- Approach steps:
  - Mobile: stacked.
  - Desktop: four columns or a balanced two-by-two grid.
- CTA groups:
  - Mobile: stack when needed.
  - Desktop: inline.
- Navigation:
  - Preserve the current responsive menu.
  - Do not allow the newsletter CTA to crowd the navigation.

---

## 17. Analytics

Preserve consent-controlled Google Analytics.

Add or verify events for:

```text
product_card_internal_click
product_external_click
newsletter_click
founder_profile_click
contact_form_start
contact_form_submit
contact_form_success
contact_form_error
```

Event parameters may include:

- `product_name`
- `product_stage`
- `link_destination`
- `page_path`
- `enquiry_type`

Requirements:

- Do not send analytics events before consent.
- Do not send form message text, email address, name or organisation.
- Avoid duplicating page-view events.
- Use the existing analytics abstraction if one exists.

---

## 18. Testing requirements

## 18.1 Automated tests

Add or update tests for:

- Product-stage badge rendering.
- Product data driving all cards.
- External-link accessible names.
- Absence of CSS leakage in rendered link text.
- Contact-form validation.
- Contact-form success and error states.
- Newsletter CTA destination.
- Founder image alt text.
- Structured-data output.
- Mobile navigation after homepage changes.

## 18.2 Manual tests

Complete:

1. Keyboard-only navigation.
2. Screen-reader spot check.
3. 200% browser zoom.
4. Mobile layout at 320 pixels.
5. Form submission with valid values.
6. Form submission with each invalid field.
7. Spam honeypot behaviour.
8. Analytics consent accepted.
9. Analytics consent rejected.
10. External product links.
11. Newsletter link.
12. Founder image loading and crop.
13. Product image fallbacks.
14. Search generated HTML for leaked CSS.
15. Social-sharing previews.
16. Production deployment smoke test.

## 18.3 Browser coverage

Test current stable versions of:

- Chrome
- Safari
- Firefox
- Edge
- Mobile Safari
- Chrome on Android

---

## 19. Implementation phases

### Phase 1 — Priority defect and data cleanup

- Fix external-link CSS leakage.
- Introduce central product data.
- Replace “Available” with accurate product-stage labels.
- Add tests for link text and status rendering.

### Phase 2 — Homepage repositioning

- Replace hero copy and CTAs.
- Upgrade product cards.
- Add “What we’re testing now”.
- Add founder section and supplied photograph.
- Consolidate process/principles.
- Add newsletter section.
- Update final CTA.

### Phase 3 — Product and About pages

- Upgrade product detail pages to concise case studies.
- Reduce repeated related-product grids.
- Improve About page and add founder image.
- Ensure all product content comes from the central data source.

### Phase 4 — Contact form

- Implement server-side form submission.
- Add validation, spam controls and success/error states.
- Update privacy text to match the deployed behaviour.

### Phase 5 — SEO, metadata and verification

- Add Open Graph assets.
- Add JSON-LD.
- Validate metadata and structured data.
- Run accessibility, performance and cross-browser checks.
- Complete production smoke test.

---

## 20. Definition of done

The work is complete when:

- All five phases are implemented or any blocked phase is explicitly documented.
- The site builds successfully in production mode.
- No new lint or type errors exist.
- Homepage copy matches this specification unless a documented reason requires a small adaptation.
- The founder photograph is displayed from a reliable asset source.
- All four products show meaningful maturity stages.
- Product cards include images or intentional fallbacks.
- A Bit Gamey is presented as the main “follow the journey” conversion.
- Duplicate process/principles content is removed.
- Product pages contain case-study sections and no oversized repeated related-product grids.
- Contact behaviour is honest and functional.
- CSS no longer leaks into crawler-readable link text.
- Analytics remain consent-controlled.
- Structured data validates.
- Accessibility and responsive checks pass.
- The implementation report lists:
  - Files changed.
  - New environment variables.
  - Assets added.
  - Tests run.
  - Any unresolved issues.

---

## 21. Final agent output

When implementation is complete, return:

1. A concise summary of changes.
2. A list of modified and added files.
3. Any required environment variables.
4. Any manual configuration needed in Vercel or the deployment platform.
5. Test and build results.
6. Any assets still required from the site owner.
7. Any deliberate deviations from this specification and the reason for each.
