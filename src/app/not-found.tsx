import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="primary" ariaLabelledBy="not-found-heading">
      <div className="max-w-xl">
        <p className="text-accent text-sm font-semibold">404</p>
        <h1
          id="not-found-heading"
          className="text-text-primary mt-2 text-4xl font-bold sm:text-5xl"
        >
          Page not found
        </h1>
        <p className="text-text-secondary mt-4 text-lg">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have
          moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/" variant="primary">
            Go to homepage
          </Button>
          <Button href="/products" variant="secondary">
            View products
          </Button>
        </div>
      </div>
    </Section>
  );
}
