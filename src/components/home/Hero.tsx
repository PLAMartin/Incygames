"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const TILE_VARS = [
  "var(--product-accent-daily-view)",
  "var(--product-accent-role-cv)",
  "var(--product-accent-daily-product-idea)",
  "var(--product-accent-conxy)",
];

export function Hero() {
  return (
    <Section tone="primary" className="pt-16 pb-20 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="max-w-xl">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase">
            Independent product studio · Bath, UK
          </p>
          <h1 className="text-text-primary mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Useful software, built one real problem at a time.
          </h1>
          <p className="text-text-secondary mt-6 text-lg">
            Incygames is an independent product studio founded by Phil Martin in
            Bath. I create, test and develop focused digital products that make
            everyday tasks clearer, easier or more enjoyable.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/products" variant="primary">
              Explore the products
            </Button>
            <Button
              href="https://abitgamey.substack.com/"
              variant="secondary"
              external
              onClick={() =>
                trackEvent("newsletter_click", {
                  link_destination: "https://abitgamey.substack.com/",
                  page_path: "/",
                })
              }
            >
              Follow the experiments
            </Button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="grid grid-cols-2 gap-4 motion-reduce:animate-none sm:gap-6"
        >
          {TILE_VARS.map((color, index) => (
            <div
              key={color}
              className="aspect-square rounded-2xl transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: color,
                opacity: 0.35 + index * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
