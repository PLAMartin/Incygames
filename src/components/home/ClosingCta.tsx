import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function ClosingCta() {
  return (
    <Section tone="secondary" ariaLabelledBy="closing-cta-heading">
      <div className="bg-accent rounded-2xl px-8 py-12 text-center text-white sm:px-16">
        <h2 id="closing-cta-heading" className="text-3xl font-bold sm:text-4xl">
          See what we&rsquo;re building
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
          Explore the current products, try the live experiments or get in touch
          if one of the problems is relevant to you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            href="/products"
            variant="secondary"
            className="text-accent border-white bg-white hover:bg-white/90"
          >
            View all products
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            className="border-white text-white hover:bg-white/10"
          >
            Contact Incygames
          </Button>
        </div>
      </div>
    </Section>
  );
}
