import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";

export function FounderSection() {
  return (
    <Section tone="primary" ariaLabelledBy="founder-heading">
      <div className="max-w-2xl">
        <h2
          id="founder-heading"
          className="text-text-primary text-3xl font-bold sm:text-4xl"
        >
          Built on experience. Driven by curiosity.
        </h2>
        <p className="text-text-secondary mt-4 text-lg">
          Incygames was founded by Phil Martin following a career spanning
          technology, telecommunications, strategy, operations and commercial
          development. It combines that experience with a willingness to start
          again, learn new tools and turn ideas into working products.
        </p>
        <p className="mt-4">
          <TextLink href="/about">More about Incygames</TextLink>
        </p>
      </div>
    </Section>
  );
}
