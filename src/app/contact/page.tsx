import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata, pageTitle } from "@/lib/metadata";
import { breadcrumbTrails } from "@/lib/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: pageTitle("Contact"),
  description:
    "Get in touch with Incygames for company, partnership, media or general product enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section tone="primary" ariaLabelledBy="contact-heading">
      <Breadcrumbs items={breadcrumbTrails.contact} />

      <div className="max-w-2xl">
        <h1
          id="contact-heading"
          className="text-text-primary text-4xl font-bold sm:text-5xl"
        >
          Contact Incygames
        </h1>
        <p className="text-text-secondary mt-4 text-lg">
          Use the form below for company, partnership, media or general product
          enquiries. For product support, please use the support route provided
          on the relevant product website.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
