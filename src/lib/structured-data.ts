import { SITE_NAME, SITE_URL } from "./metadata";
import type { Product } from "@/types";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

const FOUNDER_URL = "https://www.philmartin.net/";

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Incygames Ltd",
    url: SITE_URL,
    logo: `${SITE_URL}/images/company/incygames-logo.png`,
    description:
      "Incygames is an independent, founder-led product studio in Bath that creates, tests and develops focused digital products.",
    founder: {
      "@type": "Person",
      name: "Phil Martin",
      url: FOUNDER_URL,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bath",
      addressCountry: "GB",
    },
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Phil Martin",
    url: FOUNDER_URL,
    image: `${SITE_URL}/images/phil-martin.png`,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "Incygames Ltd",
      url: SITE_URL,
    },
  };
}

export function buildProductJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.summary,
    applicationCategory: product.category,
    operatingSystem: "Web",
    url: product.externalUrl,
    image: product.imageSrc
      ? new URL(product.imageSrc, SITE_URL).toString()
      : undefined,
    provider: {
      "@type": "Organization",
      name: "Incygames Ltd",
      url: SITE_URL,
    },
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}
