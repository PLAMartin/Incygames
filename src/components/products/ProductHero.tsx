import Image from "next/image";
import type { Product } from "@/types";
import { ProductLogo } from "@/components/products/ProductLogo";

export function ProductHero({ product }: { product: Product }) {
  if (product.heroImagePath) {
    return (
      <Image
        src={product.heroImagePath}
        alt={product.altText}
        width={1200}
        height={630}
        className="w-full rounded-2xl object-cover"
        priority
      />
    );
  }

  const accentVar = `var(--product-accent-${product.themeKey ?? "default"}, var(--color-accent-soft))`;

  return (
    <div
      aria-hidden="true"
      className="flex aspect-[16/9] w-full items-center justify-center rounded-2xl"
      style={{
        background: `linear-gradient(135deg, ${accentVar} 0%, var(--color-background-secondary) 100%)`,
      }}
    >
      <ProductLogo product={product} size={96} />
    </div>
  );
}
