import Image from "next/image";

import type { WineProduct } from "@/shared/contant/vine";
import type { ScrollSequenceState } from "@/shared/utils/scroll-math";

type WineBottlePhotoProps = {
  products: WineProduct[];
  seqState: ScrollSequenceState;
  /** Selected size index per product id (defaults to the first size). */
  selectedSizes: Record<string, number>;
  sizes: string;
  className?: string;
};

/**
 * Stacks every product photo and cross-fades them with the scroll sequence;
 * within a product, the photo of the selected bottle size is shown.
 */
export function WineBottlePhoto({
  products,
  seqState,
  selectedSizes,
  sizes,
  className = "",
}: WineBottlePhotoProps) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {products.map((wine, idx) => {
        const itemState = seqState.items[idx];
        const selected = selectedSizes[wine.id] ?? 0;
        return wine.variants.map((variant, variantIdx) => (
          <Image
            key={`${wine.id}-${variant.size}`}
            src={variant.imageSrc}
            alt={variant.imageAlt}
            fill
            sizes={sizes}
            aria-hidden={!itemState.isActive || variantIdx !== selected}
            style={{
              opacity: variantIdx === selected ? itemState.opacity : 0,
              transform: `scale(${itemState.scale.toFixed(3)})`,
            }}
            className="object-cover transition-opacity duration-300 will-change-transform"
          />
        ));
      })}
    </div>
  );
}
