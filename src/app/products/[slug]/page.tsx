import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import { ProductCard } from "@/components/products/ProductCard";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { PRODUCT_CATEGORY_LABELS } from "@/types";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";
import { buildMetadata, pageTitle } from "@/lib/metadata";
import { productBreadcrumbTrail } from "@/lib/breadcrumbs";

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: pageTitle("Product not found"),
      description: "This product could not be found.",
      path: `/products/${slug}`,
    });
  }

  return buildMetadata({
    title: pageTitle(product.name),
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.slug);

  return (
    <Section tone="primary" ariaLabelledBy="product-heading">
      <Breadcrumbs items={productBreadcrumbTrail(product)} />

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-text-secondary text-sm font-medium">
            {PRODUCT_CATEGORY_LABELS[product.category]}
          </p>
          <h1
            id="product-heading"
            className="text-text-primary mt-2 text-4xl font-bold sm:text-5xl"
          >
            {product.name}
          </h1>
          <p className="text-text-secondary mt-4 text-xl">
            {product.strapline}
          </p>
          <div className="mt-4">
            <ProductStatusBadge status={product.status} />
          </div>
          {product.websiteUrl ? (
            <p className="mt-6">
              <ExternalLink href={product.websiteUrl} className="text-lg">
                {product.ctaLabel ?? `Visit ${product.name}`}
              </ExternalLink>
            </p>
          ) : null}
        </div>

        <ProductHero product={product} />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 lg:space-y-10">
          <section>
            <h2 className="text-text-primary text-2xl font-semibold">
              The problem
            </h2>
            <p className="text-text-secondary mt-3 text-lg">
              {product.problem}
            </p>
          </section>
          <section className="mt-10 lg:mt-0">
            <h2 className="text-text-primary text-2xl font-semibold">
              The product
            </h2>
            <p className="text-text-secondary mt-3 text-lg">
              {product.solution}
            </p>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-text-primary text-lg font-semibold">
              Who it&rsquo;s for
            </h2>
            <ul className="text-text-secondary mt-3 space-y-1 text-base">
              {product.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-text-primary text-lg font-semibold">
              Current status
            </h2>
            <p className="text-text-secondary mt-3 text-base">
              {product.currentStage}
            </p>
          </section>
        </div>
      </div>

      {related.length > 0 ? (
        <div className="mt-20">
          <h2 className="text-text-primary text-2xl font-semibold">
            Related products
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedProduct) => (
              <ProductCard key={relatedProduct.slug} product={relatedProduct} />
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
