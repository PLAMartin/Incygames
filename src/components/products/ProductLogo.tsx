import Image from "next/image";
import type { Product } from "@/types";

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

export function ProductLogo({
  product,
  size = 56,
}: {
  product: Product;
  size?: number;
}) {
  if (product.logoPath) {
    return (
      <Image
        src={product.logoPath}
        alt={product.altText}
        width={size}
        height={size}
        className="rounded-xl"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={product.altText}
      style={{
        width: size,
        height: size,
        backgroundColor: `var(--product-accent-${product.themeKey ?? "default"}, var(--color-accent-soft))`,
      }}
      className="flex items-center justify-center rounded-xl text-lg font-semibold text-white"
    >
      {initials(product.name)}
    </div>
  );
}
