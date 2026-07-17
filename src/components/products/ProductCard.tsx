import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { PRODUCT_CATEGORY_LABELS } from "@/types";
import { ProductLogo } from "@/components/products/ProductLogo";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="border-border bg-surface flex flex-col rounded-2xl border p-6">
      {product.cardImagePath ? (
        <Image
          src={product.cardImagePath}
          alt={product.altText}
          width={640}
          height={360}
          className="mb-4 w-full rounded-xl object-cover"
        />
      ) : null}

      <div className="flex items-center gap-3">
        <ProductLogo product={product} />
        <div>
          <h3 className="text-text-primary text-xl font-semibold">
            <Link
              href={`/products/${product.slug}`}
              className="hover:text-accent"
            >
              {product.name}
            </Link>
          </h3>
          <p className="text-text-secondary text-sm">
            {PRODUCT_CATEGORY_LABELS[product.category]}
          </p>
        </div>
      </div>

      <p className="text-text-secondary mt-4 flex-1 text-base">
        {product.summary}
      </p>

      <div className="mt-4">
        <ProductStatusBadge status={product.status} />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-medium">
        <Link
          href={`/products/${product.slug}`}
          className="text-accent hover:underline"
        >
          Learn more
        </Link>
        {product.websiteUrl ? (
          <ExternalLink href={product.websiteUrl}>
            Visit {product.name}
          </ExternalLink>
        ) : null}
      </div>
    </article>
  );
}
