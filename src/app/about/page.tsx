import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { buildMetadata, pageTitle } from "@/lib/metadata";
import { breadcrumbTrails } from "@/lib/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: pageTitle("About"),
  description:
    "Incygames is an independent software company based in Bath, UK, developing focused digital products.",
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
          Incygames is an independent software company based in Bath, UK. It
          develops focused digital products designed to make particular tasks
          clearer, easier or more enjoyable.
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
            Product-development principles
          </h2>
          <ul className="text-text-secondary mt-3 list-disc space-y-2 pl-5 text-lg">
            <li>Useful before impressive.</li>
            <li>Clear before complicated.</li>
            <li>Tested before scaled.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-text-primary text-2xl font-semibold">Founder</h2>
          <p className="text-text-secondary mt-3 text-lg">
            Incygames was founded by Phil Martin, following more than 30 years
            in telecommunications spanning strategy, operations and commercial
            roles, alongside a background in technology and computing. That
            experience, combined with a transition to independent product
            development, shapes an interest in building simple, useful software.
          </p>
          <p className="text-text-secondary mt-3 text-lg">
            Incygames is currently founder-led and works with specialist
            collaborators and technology partners where required.
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

        <div className="mt-12">
          <Button href="/contact" variant="primary">
            Contact Incygames
          </Button>
        </div>
      </div>
    </Section>
  );
}
