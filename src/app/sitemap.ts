import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";
import { SITE_URL } from "@/lib/metadata";

const STATIC_ROUTES = [
  "",
  "/products",
  "/about",
  "/contact",
  "/privacy",
  "/cookies",
  "/terms",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const productEntries: MetadataRoute.Sitemap = getAllProducts().map(
    (product) => ({
      url: `${SITE_URL}/products/${product.slug}`,
      lastModified: product.lastReviewed,
    }),
  );

  return [...staticEntries, ...productEntries];
}
