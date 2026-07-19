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
        <p className="text-text-secondary mt-4">Last updated: 19 July 2026</p>

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
              The contact form collects your name, email address, enquiry type,
              message, and optionally your company/organisation and which
              product your enquiry relates to.
            </p>
            <p className="mt-3">
              When Incygames&rsquo; email delivery is configured, submitting the
              form sends this information directly to Incygames through Resend,
              our transactional email provider, over an encrypted connection. If
              direct sending isn&rsquo;t available, your device instead opens a
              pre-filled email in your own email application, addressed to
              Incygames, and you choose whether to send it &mdash; in that case
              we only receive the information in that email once you send it,
              the same as any other email. The form always tells you which of
              these will happen before you submit it.
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
              With your consent, this website uses Google Analytics to
              understand how visitors use the site. Google Analytics is only
              loaded, and its cookies are only set, if you accept them via the
              cookie banner shown on your first visit. You can change your
              choice at any time using &ldquo;Manage cookie preferences&rdquo;
              in the footer. See our{" "}
              <a href="/cookies" className="text-accent underline">
                cookie policy
              </a>{" "}
              for details of the cookies involved.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Data retention
            </h2>
            <p className="mt-3">
              Enquiries sent to us, whether delivered directly or by email, are
              retained for as long as reasonably necessary to deal with your
              enquiry and for our business records, and are then deleted.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              Your rights
            </h2>
            <p className="mt-3">
              Under UK data protection law, you have rights to access, correct,
              delete or restrict use of your personal information. To exercise
              these rights, including asking us to delete an enquiry you have
              sent us, contact us using the details on our{" "}
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
