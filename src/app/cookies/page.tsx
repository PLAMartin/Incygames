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
        <p className="text-text-secondary mt-4">Last updated: 18 July 2026</p>

        <div className="text-text-secondary mt-10 space-y-8 text-lg">
          <section>
            <p>
              This website does not set any cookies of its own. The contact form
              does not submit data to a server, so no form-related cookies are
              set either. We do use Google Analytics &mdash; see below.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Analytics cookies
            </h2>
            <p className="mt-3">
              Google Analytics (Google Ireland Limited) sets the following
              cookies to distinguish visitors and measure site usage:
            </p>
            <div className="border-border mt-4 overflow-x-auto rounded-md border">
              <table className="w-full text-left text-base">
                <thead className="bg-background-secondary text-text-primary">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Name</th>
                    <th className="px-4 py-2 font-semibold">Purpose</th>
                    <th className="px-4 py-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-border border-t">
                    <td className="px-4 py-2">_ga</td>
                    <td className="px-4 py-2">Distinguishes unique visitors</td>
                    <td className="px-4 py-2">2 years</td>
                  </tr>
                  <tr className="border-border border-t">
                    <td className="px-4 py-2">_ga_*</td>
                    <td className="px-4 py-2">
                      Persists session state for this property
                    </td>
                    <td className="px-4 py-2">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
