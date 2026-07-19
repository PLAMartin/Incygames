import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { ProductJsonLd } from "@/components/seo/StructuredData";
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
      <ProductJsonLd product={product} />
      <Breadcrumbs items={productBreadcrumbTrail(product)} />

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-text-secondary text-sm font-medium">
            {product.category}
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
            <ProductStatusBadge
              stage={product.stage}
              hiddenSupportingText={product.stageDescription}
            />
          </div>
          <p className="mt-6">
            <ExternalLink href={product.externalUrl} className="text-lg">
              {product.primaryCtaLabel}
            </ExternalLink>
          </p>
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

          {product.whatHasBeenBuilt ? (
            <section className="mt-10 lg:mt-0">
              <h2 className="text-text-primary text-2xl font-semibold">
                What has been built
              </h2>
              <p className="text-text-secondary mt-3 text-lg">
                {product.whatHasBeenBuilt}
              </p>
            </section>
          ) : null}

          {product.currentTest ? (
            <section className="mt-10 lg:mt-0">
              <h2 className="text-text-primary text-2xl font-semibold">
                What is being tested
              </h2>
              <p className="text-text-secondary mt-3 text-lg">
                {product.currentTest}
              </p>
            </section>
          ) : null}

          {product.nextStep ? (
            <section className="mt-10 lg:mt-0">
              <h2 className="text-text-primary text-2xl font-semibold">
                What happens next
              </h2>
              <p className="text-text-secondary mt-3 text-lg">
                {product.nextStep}
              </p>
            </section>
          ) : null}
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-text-primary text-lg font-semibold">
              Who it&rsquo;s for
            </h2>
            <ul className="text-text-secondary mt-3 space-y-1 text-base">
              {product.audience.map((item) => (
                <li key={item} className="first-letter:uppercase">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="border-border mt-20 rounded-2xl border p-8 text-center sm:p-12">
        <h2 className="text-text-primary text-2xl font-bold">
          See what we&rsquo;re building
        </h2>
        <p className="text-text-secondary mx-auto mt-3 max-w-xl text-lg">
          Explore the current products, try the live experiments or get in touch
          if this problem is relevant to you.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href={product.externalUrl} variant="primary" external>
            {product.primaryCtaLabel}
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Incygames
          </Button>
        </div>
      </div>

      {related.length > 0 ? (
        <nav aria-label="Other products" className="mt-12">
          <h2 className="text-text-primary text-lg font-semibold">
            Other products
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-base">
            {related.map((relatedProduct) => (
              <li key={relatedProduct.slug}>
                <TextLink href={`/products/${relatedProduct.slug}`}>
                  {relatedProduct.name}
                </TextLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </Section>
  );
}
