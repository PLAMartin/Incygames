import { Section } from "@/components/ui/Section";

const STAGES = [
  {
    title: "Find a real problem",
    description:
      "Start with something people regularly find confusing, frustrating or unnecessarily difficult.",
  },
  {
    title: "Build the simplest useful version",
    description:
      "Create enough of the product to demonstrate the idea and allow people to experience it.",
  },
  {
    title: "Test it with real users",
    description:
      "Use customer behaviour and feedback to decide what to improve, change or stop.",
  },
  {
    title: "Develop what proves useful",
    description:
      "Invest further where the product shows evidence of solving a worthwhile problem.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="primary" ariaLabelledBy="how-it-works-heading">
      <h2
        id="how-it-works-heading"
        className="text-text-primary text-3xl font-bold sm:text-4xl"
      >
        From problem to practical product
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
    </Section>
  );
}
