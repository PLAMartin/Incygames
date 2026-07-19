import Image from "next/image";
import type { Product } from "@/types";
import { ProductImagePlaceholder } from "@/components/products/ProductImagePlaceholder";

export function ProductHero({ product }: { product: Product }) {
  if (product.imageSrc) {
    return (
      <Image
        src={product.imageSrc}
        alt={product.imageAlt}
        width={1200}
        height={630}
        className="w-full rounded-2xl object-cover"
        style={
          product.imageFocalPoint
            ? { objectPosition: product.imageFocalPoint }
            : undefined
        }
        priority
      />
    );
  }

  return (
    <ProductImagePlaceholder
      product={product}
      className="aspect-[16/9] w-full"
    />
  );
}
