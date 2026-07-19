import { ImageResponse } from "next/og";
import { getAllProducts, getProductBySlug } from "@/lib/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Kept in sync with the --product-accent-<slug> custom properties in
// globals.css — next/og's Satori renderer has no access to the site's
// stylesheet, so these values must be literal here.
const PRODUCT_ACCENTS: Record<string, string> = {
  "daily-view": "#0AA1B7",
  "role-cv": "#202E6B",
  "daily-product-idea": "#D96300",
  conxy: "#6B3FA0",
};

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const accent = PRODUCT_ACCENTS[slug] ?? "#078089";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${accent} 0%, #F4F6F7 100%)`,
      }}
    >
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: "#FFFFFF",
          textShadow: "0 2px 12px rgba(0,0,0,0.25)",
        }}
      >
        {product?.name ?? "Incygames"}
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 30,
          color: "#FFFFFF",
          opacity: 0.92,
        }}
      >
        {product?.strapline ?? "Incygames"}
      </div>
    </div>,
    { ...size },
  );
}
