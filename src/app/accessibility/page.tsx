import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { buildMetadata, pageTitle } from "@/lib/metadata";
import { breadcrumbTrails } from "@/lib/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: pageTitle("Accessibility"),
  description: "The Incygames website's approach to accessibility.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <Section tone="primary" ariaLabelledBy="accessibility-heading">
      <Breadcrumbs items={breadcrumbTrails.accessibility} />

      <div className="max-w-3xl">
        <h1
          id="accessibility-heading"
          className="text-text-primary text-4xl font-bold sm:text-5xl"
        >
          Accessibility statement
        </h1>
        <p className="text-text-secondary mt-4">Last updated: 17 July 2026</p>

        <div className="text-text-secondary mt-10 space-y-8 text-lg">
          <section>
            <p>
              Incygames wants this website to be usable by as many people as
              possible, including people using assistive technology such as
              screen readers, screen magnification, speech recognition or
              keyboard-only navigation.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Our target
            </h2>
            <p className="mt-3">
              We aim for this website to meet WCAG 2.2 Level AA. This includes
              semantic HTML, a logical heading structure, a skip-to-content
              link, keyboard-accessible navigation, visible focus indicators,
              sufficient colour contrast, and status information that does not
              rely on colour alone.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Known limitations
            </h2>
            <p className="mt-3">
              This website is under active development. If you find any part of
              it difficult to use, please let us know using the contact details
              on our{" "}
              <a href="/contact" className="text-accent underline">
                contact page
              </a>{" "}
              so we can address it.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
