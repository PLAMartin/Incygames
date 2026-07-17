import { describe, expect, it } from "vitest";
import { buildMetadata, pageTitle, SITE_URL } from "@/lib/metadata";

describe("buildMetadata", () => {
  it("builds a canonical URL from the given path", () => {
    const metadata = buildMetadata({
      title: "Test",
      description: "Test description",
      path: "/products",
    });
    expect(metadata.alternates?.canonical).toBe(`${SITE_URL}/products`);
  });

  it("mirrors title and description into Open Graph and Twitter metadata", () => {
    const metadata = buildMetadata({
      title: "Test title",
      description: "Test description",
      path: "/about",
    });

    expect(metadata.openGraph?.title).toBe("Test title");
    expect(metadata.openGraph?.description).toBe("Test description");
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      title: "Test title",
      description: "Test description",
    });
  });
});

describe("pageTitle", () => {
  it("appends the site name", () => {
    expect(pageTitle("Products")).toBe("Products | Incygames");
  });
});
