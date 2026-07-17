import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { buildMetadata, pageTitle } from "@/lib/metadata";
import { breadcrumbTrails } from "@/lib/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: pageTitle("Privacy policy"),
  description:
    "How Incygames Ltd handles personal information on this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section tone="primary" ariaLabelledBy="privacy-heading">
      <Breadcrumbs items={breadcrumbTrails.privacy} />

      <div className="max-w-3xl">
        <h1
          id="privacy-heading"
          className="text-text-primary text-4xl font-bold sm:text-5xl"
        >
          Privacy policy
        </h1>
        <p className="text-text-secondary mt-4">Last updated: 17 July 2026</p>

        <div className="text-text-secondary mt-10 space-y-8 text-lg">
          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Who we are
            </h2>
            <p className="mt-3">
              This website is operated by Incygames Ltd, a company registered in
              England and Wales, company number 10517638
              (&ldquo;Incygames&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Information collected through the contact form
            </h2>
            <p className="mt-3">
              The contact form on this website does not currently submit data to
              a server or database operated by Incygames. When you use it, your
              device opens a pre-filled email in your own email application,
              addressed to Incygames, and you choose whether to send it. We only
              receive the information contained in that email once you send it,
              in the same way as any other email you choose to send us.
            </p>
            <p className="mt-3">
              This page will be updated if the contact form is changed to submit
              data directly to Incygames.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Purpose and legal basis
            </h2>
            <p className="mt-3">
              Any information you send us by email is used only to respond to
              your enquiry, on the basis of our legitimate interest in
              communicating with people who contact us, or to take steps at your
              request before entering into an agreement.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Hosting
            </h2>
            <p className="mt-3">
              This website is hosted on Vercel. Visiting this website causes
              your browser to make requests to Vercel&rsquo;s infrastructure,
              which may process technical information such as your IP address as
              part of delivering the site.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Analytics
            </h2>
            <p className="mt-3">
              This website does not currently use any analytics or tracking
              technology.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Data retention
            </h2>
            <p className="mt-3">
              Emails sent to us are retained for as long as reasonably necessary
              to deal with your enquiry and for our business records.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Your rights
            </h2>
            <p className="mt-3">
              Under UK data protection law, you have rights to access, correct,
              delete or restrict use of your personal information. To exercise
              these rights, contact us using the details on our{" "}
              <a href="/contact" className="text-accent underline">
                contact page
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Complaints
            </h2>
            <p className="mt-3">
              If you are unhappy with how we handle your personal information,
              you can complain to the Information Commissioner&rsquo;s Office
              (ICO) at ico.org.uk.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
