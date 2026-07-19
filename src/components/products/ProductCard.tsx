"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { ProductLogo } from "@/components/products/ProductLogo";
import { ProductImagePlaceholder } from "@/components/products/ProductImagePlaceholder";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { trackEvent } from "@/lib/analytics";

export function ProductCard({ product }: { product: Product }) {
  const audienceLine =
    product.audience.length > 0
      ? `For ${product.audience.join(" and ")}.`
      : null;

  return (
    <article className="border-border bg-surface flex flex-col rounded-2xl border p-6">
      {product.imageSrc ? (
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={640}
          height={400}
          className="mb-4 aspect-[16/10] w-full rounded-xl object-cover"
          style={
            product.imageFocalPoint
              ? { objectPosition: product.imageFocalPoint }
              : undefined
          }
        />
      ) : (
        <ProductImagePlaceholder
          product={product}
          className="mb-4 aspect-[16/10] w-full"
        />
      )}

      <div className="flex items-center gap-3">
        <ProductLogo product={product} />
        <div>
          <h3 className="text-text-primary text-xl font-semibold">
            <Link
              href={`/products/${product.slug}`}
              className="hover:text-accent"
              onClick={() =>
                trackEvent("product_card_internal_click", {
                  product_name: product.name,
                  product_stage: product.stage,
                  link_destination: `/products/${product.slug}`,
                })
              }
            >
              {product.name}
            </Link>
          </h3>
          <p className="text-text-secondary text-sm">{product.category}</p>
        </div>
      </div>

      <p className="text-text-secondary mt-4 text-base">{product.summary}</p>
      {audienceLine ? (
        <p className="text-text-secondary mt-2 text-sm">{audienceLine}</p>
      ) : null}

      <div className="mt-4">
        <ProductStatusBadge stage={product.stage} />
      </div>

      <div className="mt-5 flex flex-1 flex-wrap items-end justify-between gap-4 text-sm font-medium">
        <Link
          href={`/products/${product.slug}`}
          className="text-accent hover:underline"
          onClick={() =>
            trackEvent("product_card_internal_click", {
              product_name: product.name,
              product_stage: product.stage,
              link_destination: `/products/${product.slug}`,
            })
          }
        >
          Learn more
        </Link>
        <ExternalLink
          href={product.externalUrl}
          onClick={() =>
            trackEvent("product_external_click", {
              product_name: product.name,
              product_stage: product.stage,
              link_destination: product.externalUrl,
            })
          }
        >
          {product.primaryCtaLabel}
        </ExternalLink>
      </div>
    </article>
  );
}
