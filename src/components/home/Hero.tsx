import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

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
        <div>
          <h1 className="text-text-primary text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Small software products for real-world problems.
          </h1>
          <p className="text-text-secondary mt-6 max-w-xl text-lg">
            Incygames is an independent software company developing simple,
            useful and occasionally game-inspired digital products.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/products" variant="primary">
              Explore our products
            </Button>
            <Button href="/about" variant="secondary">
              About Incygames
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
