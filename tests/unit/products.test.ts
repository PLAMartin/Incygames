import { describe, expect, it } from "vitest";
import { z } from "zod";
import { productSchema } from "@/lib/validation";
import {
  getAllProducts,
  getFeaturedProducts,
  getExperimentProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";
import { PRODUCT_STAGE_LABELS } from "@/types";
import type { Product } from "@/types";

const VALID_PRODUCT: Product = {
  slug: "test",
  name: "Test",
  category: "Other",
  strapline: "Strap",
  summary: "Summary",
  audience: ["everyone"],
  stage: "prototype",
  stageLabel: "Prototype",
  stageDescription: "An early prototype.",
  externalUrl: "https://example.com",
  primaryCtaLabel: "Visit Test",
  imageAlt: "Test product preview",
  featured: false,
  problem: "A problem",
  solution: "A solution",
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

  it("rejects an invalid externalUrl", () => {
    const result = productSchema.safeParse({
      ...VALID_PRODUCT,
      externalUrl: "not-a-url",
    });
    expect(result.success).toBe(false);
  });

  it("allows optional image and content fields to be absent", () => {
    const result = productSchema.safeParse(VALID_PRODUCT);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.logoSrc).toBeUndefined();
      expect(result.data.imageSrc).toBeUndefined();
      expect(result.data.whatHasBeenBuilt).toBeUndefined();
      expect(result.data.currentTest).toBeUndefined();
      expect(result.data.nextStep).toBeUndefined();
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

  it("only returns products flagged featuredExperiment from getExperimentProducts, capped at 2", () => {
    const experiments = getExperimentProducts();
    expect(experiments.length).toBeLessThanOrEqual(2);
    expect(experiments.every((p) => p.featuredExperiment)).toBe(true);
    expect(experiments.map((p) => p.slug).sort()).toEqual(
      ["daily-view", "role-cv"].sort(),
    );
  });

  it("excludes the current product from its related products, capped at 2", () => {
    const related = getRelatedProducts("daily-view");
    expect(related.some((p) => p.slug === "daily-view")).toBe(false);
    expect(related.length).toBeLessThanOrEqual(2);
  });

  it("gives every product a valid, real external URL", () => {
    for (const product of getAllProducts()) {
      expect(product.externalUrl).toBeDefined();
      expect(() => new URL(product.externalUrl)).not.toThrow();
    }
  });

  it("never labels a product 'Available'", () => {
    for (const product of getAllProducts()) {
      expect(product.stageLabel).not.toBe("Available");
    }
  });
});

describe("stage labels", () => {
  it("has a human-readable label for every ProductStage value", () => {
    const stages = [
      "live-beta",
      "seeking-pilot-users",
      "prototype",
      "early-development",
      "in-development",
      "paused",
    ] as const;

    for (const stage of stages) {
      expect(PRODUCT_STAGE_LABELS[stage]).toBeTruthy();
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
