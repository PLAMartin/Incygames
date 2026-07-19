import { Section } from "@/components/ui/Section";

const STAGES = [
  {
    title: "Find a worthwhile problem",
    description:
      "Start with something people regularly find confusing, frustrating or unnecessarily difficult.",
  },
  {
    title: "Build the simplest useful version",
    description:
      "Create enough of the product for people to understand and experience the idea.",
  },
  {
    title: "Test it with real people",
    description:
      "Use behaviour and feedback to learn what is useful, unclear or unnecessary.",
  },
  {
    title: "Develop what proves valuable",
    description:
      "Invest further where there is evidence that the product solves a worthwhile problem.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="secondary" ariaLabelledBy="how-it-works-heading">
      <h2
        id="how-it-works-heading"
        className="text-text-primary text-3xl font-bold sm:text-4xl"
      >
        How Incygames works
      </h2>

      <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((stage, index) => (
          <li key={stage.title}>
            <span className="text-accent text-sm font-semibold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-text-primary mt-2 text-lg font-semibold">
              {stage.title}
            </h3>
            <p className="text-text-secondary mt-2 text-base">
              {stage.description}
            </p>
          </li>
        ))}
      </ol>

      <p className="text-text-primary mt-12 text-lg font-medium">
        Useful before impressive. Clear before complicated. Tested before
        scaled.
      </p>
    </Section>
  );
}
