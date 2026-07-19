"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { FormField } from "@/components/forms/FormField";
import { SelectField } from "@/components/forms/SelectField";
import { SuccessMessage } from "@/components/forms/SuccessMessage";
import { ErrorMessage } from "@/components/forms/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import {
  contactFormSchema,
  CONTACT_ENQUIRY_TYPES,
  CONTACT_RELATED_PRODUCTS,
} from "@/lib/validation";

// Placeholder until a real Incygames contact address is confirmed.
const CONTACT_EMAIL = "hello@incygames.com";
const MIN_COMPLETION_TIME_MS = 3000;

type FieldErrors = Partial<Record<string, string>>;
type SubmitOutcome = "sent" | "mailto";

export function ContactForm() {
  const mountedAt = useRef<number | null>(null);
  const startedRef = useRef(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [outcome, setOutcome] = useState<SubmitOutcome | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  function handleFormStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("contact_form_start", { page_path: "/contact" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const formData = new FormData(event.currentTarget);
    const rawPrivacy = formData.get("privacyAcknowledged");

    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
      enquiryType: formData.get("enquiryType"),
      message: formData.get("message"),
      privacyAcknowledged: rawPrivacy === "on",
      company: formData.get("company") || undefined,
      relatedProduct: formData.get("relatedProduct") || undefined,
      website: formData.get("website"),
    };

    const tooFast =
      mountedAt.current === null ||
      Date.now() - mountedAt.current < MIN_COMPLETION_TIME_MS;
    const honeypotFilled =
      typeof values.website === "string" && values.website.length > 0;

    if (tooFast || honeypotFilled) {
      setFormError(
        "Your message could not be sent. Please check the form and try again.",
      );
      return;
    }

    const result = contactFormSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }
      setErrors(nextErrors);
      setFormError(
        "Your message could not be sent. Please check the form and try again.",
      );
      return;
    }

    setErrors({});
    const { name, email, enquiryType, message, company, relatedProduct } =
      result.data;

    trackEvent("contact_form_submit", { enquiry_type: enquiryType });
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const payload: { ok: boolean; reason?: string } = await response
        .json()
        .catch(() => ({ ok: false }));

      if (payload.ok) {
        trackEvent("contact_form_success", { enquiry_type: enquiryType });
        setOutcome("sent");
        setSubmitting(false);
        return;
      }

      if (payload.reason === "not_configured") {
        // Documented fallback: server email isn't configured yet, so open a
        // pre-filled mailto instead of pretending the message was sent.
        openMailtoFallback({
          name,
          email,
          enquiryType,
          message,
          company,
          relatedProduct,
        });
        setOutcome("mailto");
        setSubmitting(false);
        return;
      }

      trackEvent("contact_form_error", { enquiry_type: enquiryType });
      setFormError(
        "Your message could not be sent. Please try again shortly, or email us directly.",
      );
      setSubmitting(false);
    } catch {
      // Network/server unreachable: fall back rather than block the visitor.
      openMailtoFallback({
        name,
        email,
        enquiryType,
        message,
        company,
        relatedProduct,
      });
      setOutcome("mailto");
      setSubmitting(false);
    }
  }

  if (outcome === "sent") {
    return (
      <SuccessMessage>
        <p className="font-medium">
          Thank you. Your message has been sent to Incygames.
        </p>
      </SuccessMessage>
    );
  }

  if (outcome === "mailto") {
    return (
      <SuccessMessage>
        <p className="font-medium">Your email application should now open.</p>
        <p className="mt-1">
          Your message has been pre-filled and addressed to Incygames &mdash;
          please review it and press send in your email application to complete
          your enquiry. If nothing opened, email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </SuccessMessage>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={handleFormStart}
      noValidate
      className="space-y-6"
    >
      <p className="text-text-secondary text-sm">
        Submitting sends your enquiry directly to Incygames. If direct sending
        isn&rsquo;t available, we&rsquo;ll open a pre-filled email in your email
        application instead.
      </p>
      <FormField
        id="name"
        name="name"
        label="Name"
        required
        error={errors.name}
      />
      <FormField
        id="email"
        name="email"
        type="email"
        label="Email address"
        required
        error={errors.email}
      />
      <SelectField
        id="enquiryType"
        name="enquiryType"
        label="Enquiry type"
        required
        placeholder="Select an enquiry type"
        options={CONTACT_ENQUIRY_TYPES}
        error={errors.enquiryType}
      />
      <FormField
        id="company"
        name="company"
        label="Company or organisation (optional)"
      />
      <SelectField
        id="relatedProduct"
        name="relatedProduct"
        label="Related product (optional)"
        placeholder="Select a product"
        options={CONTACT_RELATED_PRODUCTS}
      />
      <FormField
        id="message"
        name="message"
        as="textarea"
        label="Message"
        required
        error={errors.message}
        hint="Between 20 and 5,000 characters."
      />

      {/* Honeypot field: hidden from sighted and screen-reader users, left empty by real visitors */}
      <div
        aria-hidden="true"
        className="absolute top-auto left-[-9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="privacyAcknowledged"
          name="privacyAcknowledged"
          type="checkbox"
          required
          aria-required
          aria-invalid={Boolean(errors.privacyAcknowledged)}
          aria-describedby={
            errors.privacyAcknowledged ? "privacyAcknowledged-error" : undefined
          }
          className="mt-1 min-h-5 min-w-5"
        />
        <label
          htmlFor="privacyAcknowledged"
          className="text-text-secondary text-sm"
        >
          I understand how Incygames will use the information in this form, as
          described in the{" "}
          <a href="/privacy" className="text-accent underline">
            privacy policy
          </a>
          .
        </label>
      </div>
      {errors.privacyAcknowledged ? (
        <ErrorMessage id="privacyAcknowledged-error">
          {errors.privacyAcknowledged}
        </ErrorMessage>
      ) : null}

      {formError ? <ErrorMessage>{formError}</ErrorMessage> : null}

      <Button
        type="submit"
        variant="primary"
        loading={submitting}
        disabled={submitting}
      >
        Send message
      </Button>
    </form>
  );
}

function openMailtoFallback({
  name,
  email,
  enquiryType,
  message,
  company,
  relatedProduct,
}: {
  name: string;
  email: string;
  enquiryType: string;
  message: string;
  company?: string;
  relatedProduct?: string;
}) {
  const subject = `Incygames enquiry: ${enquiryType}`;
  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    relatedProduct ? `Related product: ${relatedProduct}` : null,
    "",
    message,
  ].filter((line): line is string => line !== null);

  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  window.location.href = mailtoUrl;
}
