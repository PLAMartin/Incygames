import { Section } from "@/components/ui/Section";

const PRINCIPLES = [
  {
    title: "Useful before impressive",
    description:
      "A product earns its place by solving a real problem, not by looking clever.",
  },
  {
    title: "Clear before complicated",
    description:
      "Remove anything that gets in the way of someone understanding a product quickly.",
  },
  {
    title: "Tested before scaled",
    description:
      "Invest further only where real usage shows the idea is worth developing.",
  },
];

export function PrinciplesSection() {
  return (
    <Section tone="secondary" ariaLabelledBy="principles-heading">
      <h2
        id="principles-heading"
        className="text-text-primary text-3xl font-bold sm:text-4xl"
      >
        Different products. A common approach.
      </h2>
      <p className="text-text-secondary mt-4 max-w-2xl text-lg">
        Incygames products address different audiences, but they share the same
        principles: begin with a recognisable problem, remove unnecessary
        complexity and create something people can understand quickly.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {PRINCIPLES.map((principle) => (
          <div
            key={principle.title}
            className="border-border bg-surface rounded-2xl border p-6"
          >
            <h3 className="text-text-primary text-lg font-semibold">
              {principle.title}
            </h3>
            <p className="text-text-secondary mt-2 text-base">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
