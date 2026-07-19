import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { buildMetadata, pageTitle } from "@/lib/metadata";
import { breadcrumbTrails } from "@/lib/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: pageTitle("About Incygames"),
  description:
    "Learn about Incygames, Phil Martin and the practical, evidence-led approach used to turn real-world problems into focused digital products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Section tone="primary" ariaLabelledBy="about-heading">
      <Breadcrumbs items={breadcrumbTrails.about} />

      <div className="max-w-3xl">
        <h1
          id="about-heading"
          className="text-text-primary text-4xl font-bold sm:text-5xl"
        >
          About Incygames
        </h1>
        <p className="text-text-secondary mt-6 text-xl">
          Incygames is an independent, founder-led product studio based in Bath,
          UK. It develops focused digital products designed to make particular
          tasks clearer, easier or more enjoyable.
        </p>

        <section className="mt-12">
          <h2 className="text-text-primary text-2xl font-semibold">
            What Incygames builds
          </h2>
          <p className="text-text-secondary mt-3 text-lg">
            Incygames develops several independent products, each starting with
            an identifiable customer problem. Prototypes and early releases are
            used to test demand, and products are built gradually in response to
            evidence &mdash; including being changed, paused or stopped when the
            evidence suggests it.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-text-primary text-2xl font-semibold">
            Product-development approach
          </h2>
          <ul className="text-text-secondary mt-3 list-disc space-y-2 pl-5 text-lg">
            <li>Useful before impressive.</li>
            <li>Clear before complicated.</li>
            <li>Tested before scaled.</li>
          </ul>
        </section>

        <section className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-start">
          <Image
            src="/images/phil-martin.png"
            alt="Phil Martin, founder of Incygames"
            width={220}
            height={220}
            style={{ objectPosition: "center top" }}
            className="aspect-square w-full max-w-[180px] shrink-0 rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-text-primary text-2xl font-semibold">
              Founder
            </h2>
            <p className="text-text-secondary mt-3 text-lg">
              Incygames was founded by Phil Martin following more than 30 years
              in telecommunications spanning strategy, operations and commercial
              roles, alongside a background in technology and computing. After a
              long corporate career, Phil is now applying that experience
              through a series of small product experiments.
            </p>
            <p className="text-text-secondary mt-3 text-lg">
              The approach is deliberately practical: create a simple version,
              share it, observe what happens and use the response to decide what
              to improve, change, pause or stop.
            </p>
            <p className="text-text-secondary mt-3 text-lg">
              Incygames is currently founder-led and works with specialist
              collaborators and technology partners where required.
            </p>
            <p className="text-text-secondary mt-4 flex flex-wrap gap-x-6 gap-y-2 text-lg">
              <ExternalLink href="https://www.philmartin.net/">
                More about Phil
              </ExternalLink>
              <ExternalLink href="https://abitgamey.substack.com/">
                Read A Bit Gamey
              </ExternalLink>
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-text-primary text-2xl font-semibold">
            Company operating model
          </h2>
          <p className="text-text-secondary mt-3 text-lg">
            Each product is developed as an independent service with its own
            audience, brand and website. The Incygames portfolio may evolve,
            pause or change as products are tested and refined.
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

        <div className="mt-12">
          <Button href="/contact" variant="primary">
            Contact Incygames
          </Button>
        </div>
      </div>
    </Section>
  );
}
