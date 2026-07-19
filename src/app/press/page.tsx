import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getAllProducts } from "@/lib/products";
import { buildMetadata, pageTitle } from "@/lib/metadata";
import { breadcrumbTrails } from "@/lib/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: pageTitle("Press"),
  description:
    "Company facts, founder background and media assets for journalists and partners covering Incygames.",
  path: "/press",
});

export default function PressPage() {
  const products = getAllProducts();

  return (
    <Section tone="primary" ariaLabelledBy="press-heading">
      <Breadcrumbs items={breadcrumbTrails.press} />

      <div className="max-w-3xl">
        <h1
          id="press-heading"
          className="text-text-primary text-4xl font-bold sm:text-5xl"
        >
          Press
        </h1>
        <p className="text-text-secondary mt-6 text-xl">
          Company facts, founder background and media assets for journalists,
          partners and anyone writing about Incygames.
        </p>

        <section className="mt-12">
          <h2 className="text-text-primary text-2xl font-semibold">
            Company boilerplate
          </h2>
          <p className="text-text-secondary mt-3 text-lg">
            Incygames is an independent software company based in Bath, UK. It
            develops focused digital products designed to make particular tasks
            clearer, easier or more enjoyable, starting from an identifiable
            customer problem and building gradually in response to evidence.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-text-primary text-2xl font-semibold">Founder</h2>
          <p className="text-text-secondary mt-3 text-lg">
            Incygames was founded by Phil Martin, following more than 30 years
            in telecommunications spanning strategy, operations and commercial
            roles, alongside a background in technology and computing. Incygames
            is currently founder-led and works with specialist collaborators and
            technology partners where required.
          </p>
          <p className="text-text-secondary mt-3 text-lg">
            Phil writes about product development at{" "}
            <a
              href="https://abitgamey.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              A Bit Gamey
            </a>{" "}
            and more about his background at{" "}
            <a
              href="https://www.philmartin.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              philmartin.net
            </a>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-text-primary text-2xl font-semibold">
            Company details
          </h2>
          <p className="text-text-secondary mt-3 text-lg">
            Incygames Ltd is a company registered in England and Wales. Company
            number 10517638.
          </p>
        </section>
      </div>

      <section className="mt-16">
        <h2 className="text-text-primary text-2xl font-semibold">Products</h2>
        <p className="text-text-secondary mt-3 max-w-2xl text-lg">
          Incygames develops several independent products. Some are available
          today, while others are being tested, refined or explored.
        </p>
        <div className="mt-8">
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-text-primary text-2xl font-semibold">
          Media assets
        </h2>
        <p className="text-text-secondary mt-3 text-lg">
          The Incygames logo is available to download for editorial use.
        </p>
        <div className="mt-5">
          <a
            href="/images/company/incygames-logo.png"
            download
            className="border-accent text-accent hover:bg-background-secondary inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-2.5 text-base font-medium transition-colors"
          >
            Download logo
          </a>
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-text-primary text-2xl font-semibold">
          Media enquiries
        </h2>
        <p className="text-text-secondary mt-3 text-lg">
          For interviews, quotes or further information, get in touch using the
          contact form.
        </p>
        <div className="mt-6">
          <Button href="/contact" variant="primary">
            Contact Incygames
          </Button>
        </div>
      </section>
    </Section>
  );
}
