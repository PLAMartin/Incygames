import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { buildMetadata, pageTitle } from "@/lib/metadata";
import { breadcrumbTrails } from "@/lib/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: pageTitle("Cookie policy"),
  description: "How Incygames Ltd uses cookies on this website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <Section tone="primary" ariaLabelledBy="cookies-heading">
      <Breadcrumbs items={breadcrumbTrails.cookies} />

      <div className="max-w-3xl">
        <h1
          id="cookies-heading"
          className="text-text-primary text-4xl font-bold sm:text-5xl"
        >
          Cookie policy
        </h1>
        <p className="text-text-secondary mt-4">Last updated: 17 July 2026</p>

        <div className="text-text-secondary mt-10 space-y-8 text-lg">
          <section>
            <p>
              This website does not currently set any cookies of its own, and
              does not use any analytics or advertising technology. The contact
              form does not submit data to a server, so no form-related cookies
              are set either.
            </p>
            <p className="mt-3">
              If Incygames later introduces analytics, this page will be updated
              to list the cookies used, their purpose, provider and duration,
              and a cookie consent banner will be added allowing you to accept
              or reject non-essential cookies before they are set.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Hosting-related cookies
            </h2>
            <p className="mt-3">
              Our hosting provider, Vercel, may set strictly necessary cookies
              required to route requests and protect the site against abuse.
              These are not used to track you across other websites.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
