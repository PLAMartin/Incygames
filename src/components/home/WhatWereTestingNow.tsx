import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { getExperimentProducts } from "@/lib/products";

export function WhatWereTestingNow() {
  const experiments = getExperimentProducts();

  if (experiments.length === 0) return null;

  return (
    <Section tone="secondary" ariaLabelledBy="testing-now-heading">
      <h2
        id="testing-now-heading"
        className="text-text-primary text-3xl font-bold sm:text-4xl"
      >
        What we&rsquo;re testing now
      </h2>
      <p className="text-text-secondary mt-4 max-w-2xl text-lg">
        The products evolve through small releases, real use and direct
        feedback. These are the questions currently shaping the next versions.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {experiments.map((product) => (
          <div
            key={product.slug}
            className="border-border bg-surface rounded-2xl border p-6"
          >
            <h3 className="text-text-primary text-lg font-semibold">
              <Link
                href={`/products/${product.slug}`}
                className="hover:text-accent"
              >
                {product.name}
              </Link>
            </h3>
            {product.currentTest ? (
              <p className="text-text-secondary mt-3 text-base">
                {product.currentTest}
              </p>
            ) : null}
            {product.secondaryCtaLabel ? (
              <p className="mt-4 text-sm font-medium">
                <Link
                  href={`/products/${product.slug}`}
                  className="text-accent hover:underline"
                >
                  {product.secondaryCtaLabel}
                </Link>
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
