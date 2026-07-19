import { describe, expect, it } from "vitest";
import {
  buildOrganizationJsonLd,
  buildPersonJsonLd,
  buildProductJsonLd,
} from "@/lib/structured-data";
import { getProductBySlug } from "@/lib/products";

describe("structured data", () => {
  it("builds a Person record for the founder with a real, supplied URL", () => {
    const person = buildPersonJsonLd();
    expect(person["@type"]).toBe("Person");
    expect(person.name).toBe("Phil Martin");
    expect(person.url).toBe("https://www.philmartin.net/");
    expect(person.jobTitle).toBe("Founder");
  });

  it("builds a SoftwareApplication record for a product with no pricing or ratings", () => {
    const product = getProductBySlug("daily-view");
    if (!product) throw new Error("expected daily-view product to exist");

    const jsonLd = buildProductJsonLd(product);
    expect(jsonLd["@type"]).toBe("SoftwareApplication");
    expect(jsonLd.name).toBe("Daily View");
    expect(jsonLd.operatingSystem).toBe("Web");
    expect(jsonLd).not.toHaveProperty("offers");
    expect(jsonLd).not.toHaveProperty("aggregateRating");
  });

  it("Organization record uses only a locality-level address, not a full registered address", () => {
    const org = buildOrganizationJsonLd();
    expect(org.address).toMatchObject({
      addressLocality: "Bath",
      addressCountry: "GB",
    });
  });
});
