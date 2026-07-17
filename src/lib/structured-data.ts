import { SITE_NAME, SITE_URL } from "./metadata";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Incygames Ltd",
    url: SITE_URL,
    logo: `${SITE_URL}/images/company/incygames-logo.png`,
    description:
      "Incygames develops simple, useful and fun software for real-world problems.",
    founder: {
      "@type": "Person",
      name: "Phil Martin",
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
