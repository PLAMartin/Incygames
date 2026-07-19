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

// Branded fallback for the product card/hero media area, used whenever a
// product has no real screenshot yet (true for all four products today).
// Deliberately named and isolated so it's a one-line swap for a real
// screenshot later: just set `imageSrc` on the product and this component
// stops being rendered. See tech spec section 7.2.
export function ProductImagePlaceholder({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const accentVar = `var(--product-accent-${product.slug}, var(--color-accent-soft))`;

  return (
    <div
      role="img"
      aria-label={product.imageAlt}
      className={`relative flex items-center justify-center overflow-hidden rounded-xl ${className}`}
      style={{
        background: `linear-gradient(135deg, ${accentVar} 0%, var(--color-background-secondary) 100%)`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
          color: accentVar,
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        {product.logoSrc ? (
          <Image
            src={product.logoSrc}
            alt=""
            aria-hidden="true"
            width={48}
            height={48}
            className="rounded-lg"
          />
        ) : (
          <span
            aria-hidden="true"
            style={{ color: accentVar }}
            className="bg-surface/80 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-semibold"
          >
            {initials(product.name)}
          </span>
        )}
        <span
          aria-hidden="true"
          className="text-text-primary text-sm font-semibold"
        >
          {product.name}
        </span>
      </div>
    </div>
  );
}
