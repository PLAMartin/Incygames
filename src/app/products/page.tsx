import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getAllProducts } from "@/lib/products";
import { buildMetadata, pageTitle } from "@/lib/metadata";
import { breadcrumbTrails } from "@/lib/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: pageTitle("Products"),
  description:
    "Incygames develops independent products around specific problems: Daily View, Role CV, Daily Product Idea and Conxy.",
  path: "/products",
});

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <Section tone="primary" ariaLabelledBy="products-heading">
      <Breadcrumbs items={breadcrumbTrails.products} />

      <h1
        id="products-heading"
        className="text-text-primary text-4xl font-bold sm:text-5xl"
      >
        Products and experiments
      </h1>
      <p className="text-text-secondary mt-4 max-w-2xl text-lg">
        Incygames develops independent products around specific problems. Some
        are available today, while others are being tested, refined or explored.
      </p>

      <div className="mt-10">
        <ProductGrid products={products} />
      </div>
    </Section>
  );
}
