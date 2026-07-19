import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getAllProducts } from "@/lib/products";
import { buildMetadata, pageTitle } from "@/lib/metadata";
import { breadcrumbTrails } from "@/lib/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: pageTitle("Products and experiments"),
  description:
    "Explore the digital products being built and tested by Incygames, including Daily View, Role CV, Daily Product Idea and Conxy.",
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
        Incygames develops focused digital products around specific real-world
        problems. Some are live, some are being tested and some may change
        direction as more is learned.
      </p>

      <div className="mt-10">
        <ProductGrid products={products} />
      </div>
    </Section>
  );
}
