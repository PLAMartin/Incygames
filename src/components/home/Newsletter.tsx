"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const NEWSLETTER_URL = "https://abitgamey.substack.com/";

export function Newsletter() {
  return (
    <Section tone="primary" ariaLabelledBy="newsletter-heading">
      <div className="border-border bg-surface rounded-2xl border p-8 sm:p-12">
        <p className="text-accent text-sm font-semibold tracking-wide uppercase">
          A Bit Gamey
        </p>
        <h2
          id="newsletter-heading"
          className="text-text-primary mt-3 text-3xl font-bold sm:text-4xl"
        >
          Follow the experiments
        </h2>
        <p className="text-text-secondary mt-4 max-w-xl text-lg">
          Each week I share what I am building, what I am learning and how the
          products are evolving.
        </p>
        <div className="mt-6">
          <Button
            href={NEWSLETTER_URL}
            variant="primary"
            external
            onClick={() =>
              trackEvent("newsletter_click", {
                link_destination: NEWSLETTER_URL,
                page_path: "/",
              })
            }
          >
            Read the free newsletter
          </Button>
        </div>
      </div>
    </Section>
  );
}
