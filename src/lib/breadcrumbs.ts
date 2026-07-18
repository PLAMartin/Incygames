import { getAllProducts } from "./products";
import type { BreadcrumbItem } from "./structured-data";

const HOME: BreadcrumbItem = { name: "Home", path: "/" };
const PRODUCTS: BreadcrumbItem = { name: "Products", path: "/products" };

export const breadcrumbTrails = {
  products: [HOME, PRODUCTS],
  about: [HOME, { name: "About", path: "/about" }],
  contact: [HOME, { name: "Contact", path: "/contact" }],
  press: [HOME, { name: "Press", path: "/press" }],
  privacy: [HOME, { name: "Privacy", path: "/privacy" }],
  cookies: [HOME, { name: "Cookies", path: "/cookies" }],
  terms: [HOME, { name: "Terms", path: "/terms" }],
  accessibility: [HOME, { name: "Accessibility", path: "/accessibility" }],
} satisfies Record<string, BreadcrumbItem[]>;

export function productBreadcrumbTrail(product: {
  name: string;
  slug: string;
}): BreadcrumbItem[] {
  return [
    HOME,
    PRODUCTS,
    { name: product.name, path: `/products/${product.slug}` },
  ];
}

export function getAllBreadcrumbTrails(): BreadcrumbItem[][] {
  return [
    ...Object.values(breadcrumbTrails),
    ...getAllProducts().map(productBreadcrumbTrail),
  ];
}
