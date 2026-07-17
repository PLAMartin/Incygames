import {
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
  buildBreadcrumbJsonLd,
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
