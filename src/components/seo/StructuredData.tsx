import type { Product } from "@/types";
import {
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
  buildPersonJsonLd,
  buildBreadcrumbJsonLd,
  buildProductJsonLd,
  type BreadcrumbItem,
} from "@/lib/structured-data";

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildOrganizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildWebsiteJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildPersonJsonLd()),
        }}
      />
    </>
  );
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildBreadcrumbJsonLd(items)),
      }}
    />
  );
}

export function ProductJsonLd({ product }: { product: Product }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildProductJsonLd(product)),
      }}
    />
  );
}
