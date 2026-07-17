import { describe, expect, it } from "vitest";
import { z } from "zod";
import { productSchema } from "@/lib/validation";
import {
  getAllProducts,
  getFeaturedProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";
import { PRODUCT_STATUS_LABELS } from "@/types";
import type { Product } from "@/types";

const VALID_PRODUCT: Product = {
  id: "test",
  slug: "test",
  name: "Test",
  strapline: "Strap",
  summary: "Summary",
  category: "other",
  status: "available",
  featured: false,
  displayOrder: 1,
  altText: "Test logo",
  problem: "A problem",
  solution: "A solution",
  audience: ["Everyone"],
  currentStage: "Available",
  lastReviewed: "2026-07-17",
};

describe("productSchema", () => {
  it("accepts a fully valid product", () => {
    expect(productSchema.safeParse(VALID_PRODUCT).success).toBe(true);
  });

  it("rejects a product missing a required field", () => {
    const withoutProblem: Partial<Product> = { ...VALID_PRODUCT };
    delete withoutProblem.problem;
    expect(productSchema.safeParse(withoutProblem).success).toBe(false);
  });

  it("rejects a non-kebab-case slug", () => {
    const result = productSchema.safeParse({
      ...VALID_PRODUCT,
      slug: "Not Kebab",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid websiteUrl", () => {
    const result = productSchema.safeParse({
      ...VALID_PRODUCT,
      websiteUrl: "not-a-url",
    });
    expect(result.success).toBe(false);
  });

  it("allows optional image fields to be absent", () => {
    const result = productSchema.safeParse(VALID_PRODUCT);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.logoPath).toBeUndefined();
      expect(result.data.heroImagePath).toBeUndefined();
      expect(result.data.cardImagePath).toBeUndefined();
    }
  });
});

describe("real product content", () => {
  it("loads exactly the four expected products", () => {
    const products = getAllProducts();
    expect(products.map((p) => p.slug).sort()).toEqual(
      ["conxy", "daily-product-idea", "daily-view", "role-cv"].sort(),
    );
  });

  it("is sorted by displayOrder", () => {
    const products = getAllProducts();
    const orders = products.map((p) => p.displayOrder);
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
  });

  it("returns Daily View first, per the spec's recommended order", () => {
    expect(getAllProducts()[0]?.slug).toBe("daily-view");
  });

  it("finds a product by slug", () => {
    expect(getProductBySlug("conxy")?.name).toBe("Conxy");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProductBySlug("does-not-exist")).toBeUndefined();
  });

  it("only returns featured products from getFeaturedProducts", () => {
    expect(getFeaturedProducts().every((p) => p.featured)).toBe(true);
  });

  it("excludes the current product from its related products", () => {
    const related = getRelatedProducts("daily-view");
    expect(related.some((p) => p.slug === "daily-view")).toBe(false);
  });

  it("gives every product a valid, real website URL", () => {
    for (const product of getAllProducts()) {
      expect(product.websiteUrl).toBeDefined();
      expect(() => new URL(product.websiteUrl as string)).not.toThrow();
    }
  });
});

describe("status labels", () => {
  it("has a human-readable label for every ProductStatus value", () => {
    const statuses = [
      "available",
      "beta",
      "waitlist",
      "prototype",
      "in-development",
      "experiment",
      "paused",
      "retired",
    ] as const;

    for (const status of statuses) {
      expect(PRODUCT_STATUS_LABELS[status]).toBeTruthy();
    }
  });
});

describe("contact form schema", () => {
  it("requires the privacy acknowledgement to be exactly true", async () => {
    const { contactFormSchema } = await import("@/lib/validation");
    const result = contactFormSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      enquiryType: "General enquiry",
      message:
        "A message that is definitely long enough to pass validation checks.",
      privacyAcknowledged: false,
    });
    expect(result.success).toBe(false);
  });

  it("rejects a filled honeypot field", async () => {
    const { contactFormSchema } = await import("@/lib/validation");
    const result = contactFormSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      enquiryType: "General enquiry",
      message:
        "A message that is definitely long enough to pass validation checks.",
      privacyAcknowledged: true,
      website: "http://spam.example",
    });
    expect(result.success).toBe(false);
  });
});

describe("zod version sanity", () => {
  it("exposes the top-level z.email/z.url/z.iso.date helpers used across this project", () => {
    expect(z.email().safeParse("a@b.com").success).toBe(true);
    expect(z.url().safeParse("https://example.com").success).toBe(true);
    expect(z.iso.date().safeParse("2026-07-17").success).toBe(true);
  });
});
