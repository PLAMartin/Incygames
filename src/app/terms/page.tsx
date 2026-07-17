import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { buildMetadata, pageTitle } from "@/lib/metadata";
import { breadcrumbTrails } from "@/lib/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: pageTitle("Website terms"),
  description: "Terms of use for the Incygames website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section tone="primary" ariaLabelledBy="terms-heading">
      <Breadcrumbs items={breadcrumbTrails.terms} />

      <div className="max-w-3xl">
        <h1
          id="terms-heading"
          className="text-text-primary text-4xl font-bold sm:text-5xl"
        >
          Website terms
        </h1>
        <p className="text-text-secondary mt-4">Last updated: 17 July 2026</p>

        <div className="text-text-secondary mt-10 space-y-8 text-lg">
          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Informational nature
            </h2>
            <p className="mt-3">
              This website provides information about Incygames Ltd and its
              portfolio of products. It does not itself provide any product
              functionality, accounts or paid services.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Ownership of content
            </h2>
            <p className="mt-3">
              Unless otherwise stated, the content of this website, including
              text, logos and images, is owned by Incygames Ltd or its licensors
              and may not be reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Product availability
            </h2>
            <p className="mt-3">
              Product status shown on this website (such as available, beta,
              waitlist, prototype, in development or experiment) reflects our
              current understanding at the time of publication and may change.
              We do not guarantee that any product described as in development,
              an experiment or a prototype will be released.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              External product links
            </h2>
            <p className="mt-3">
              Links to individual product websites take you to independently
              operated destinations with their own terms, pricing and privacy
              policies. Incygames is not responsible for the content of those
              external websites.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Liability
            </h2>
            <p className="mt-3">
              This website is provided on an &ldquo;as is&rdquo; basis. To the
              extent permitted by law, Incygames excludes liability for any loss
              arising from your use of this website, other than liability that
              cannot be excluded by law, such as for death or personal injury
              caused by negligence, or for fraud.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Governing law
            </h2>
            <p className="mt-3">
              These terms are governed by the laws of England and Wales, and any
              disputes will be subject to the exclusive jurisdiction of the
              courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
