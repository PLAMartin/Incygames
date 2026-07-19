import { Section } from "@/components/ui/Section";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getFeaturedProducts } from "@/lib/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <Section tone="secondary" ariaLabelledBy="featured-products-heading">
      <h2
        id="featured-products-heading"
        className="text-text-primary text-3xl font-bold sm:text-4xl"
      >
        Products and experiments
      </h2>
      <p className="text-text-secondary mt-4 max-w-2xl text-lg">
        Each product starts with a specific problem. Some are live, some are
        being tested and others are still early experiments.
      </p>

      <div className="mt-10">
        <ProductGrid products={products} />
      </div>
    </Section>
  );
}
