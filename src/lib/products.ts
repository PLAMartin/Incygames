import { productSchema } from "./validation";
import type { Product } from "../types";
import { dailyView } from "../content/products/daily-view";
import { roleCv } from "../content/products/role-cv";
import { dailyProductIdea } from "../content/products/daily-product-idea";
import { conxy } from "../content/products/conxy";

// Array order is display order — the single source of truth for homepage,
// /products and footer ordering (spec section 6: order controlled by data).
const RAW_PRODUCTS: Product[] = [dailyView, roleCv, dailyProductIdea, conxy];

function validateProducts(products: Product[]): Product[] {
  const slugs = new Set<string>();

  for (const product of products) {
    const result = productSchema.safeParse(product);
    if (!result.success) {
      throw new Error(
        `Invalid product content for "${product.slug}": ${result.error.message}`,
      );
    }
    if (slugs.has(product.slug)) {
      throw new Error(`Duplicate product slug detected: "${product.slug}"`);
    }
    slugs.add(product.slug);
  }

  return products;
}

const VALIDATED_PRODUCTS = validateProducts(RAW_PRODUCTS);

export function getAllProducts(): Product[] {
  return [...VALIDATED_PRODUCTS];
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter((product) => product.featured);
}

export function getExperimentProducts(limit = 2): Product[] {
  return getAllProducts()
    .filter((product) => product.featuredExperiment)
    .slice(0, limit);
}

export function getProductBySlug(slug: string): Product | undefined {
  return VALIDATED_PRODUCTS.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 2): Product[] {
  return getAllProducts()
    .filter((product) => product.slug !== slug)
    .slice(0, limit);
}
