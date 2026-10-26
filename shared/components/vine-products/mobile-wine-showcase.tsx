"use client";

import { WineBottlePhoto } from "@/shared/components/vine-products/wine-bottle-photo";
import { WineSizeChips } from "@/shared/components/vine-products/wine-size-chips";
import type { WineProduct } from "@/shared/contant/vine";
import type { ScrollSequenceState } from "@/shared/utils/scroll-math";

type MobileWineShowcaseProps = {
  products: WineProduct[];
  seqState: ScrollSequenceState;
  selectedSizes: Record<string, number>;
  onSelectIndex: (index: number) => void;
  onSelectSize: (productId: string, sizeIndex: number) => void;
};

export function MobileWineShowcase({
  products,
  seqState,
  selectedSizes,
  onSelectIndex,
  onSelectSize,
}: MobileWineShowcaseProps) {
  return (
    <div className="flex flex-1 flex-col justify-between border-y border-neutral-200 px-6 py-7 md:hidden">
      <div className="flex flex-col items-center">
        <div className="mb-5 flex items-center gap-2">
          {products.map((wine, idx) => {
            const itemState = seqState.items[idx];
            return (
              <button
                key={wine.id}
                type="button"
                aria-label={`${wine.name} auswählen`}
                onClick={() => onSelectIndex(idx)}
                style={{ width: `${Math.round(itemState.indicatorWidth)}px` }}
                className={`h-1 rounded-full transition-colors ${
                  itemState.isActive ? "bg-neutral-900" : "bg-neutral-300"
                }`}
              />
            );
          })}
        </div>

        <div className="relative h-[68px] w-full text-center">
          {products.map((wine, idx) => {
            const itemState = seqState.items[idx];
            return (
              <div
                key={wine.id}
                style={{
                  opacity: itemState.opacity,
                  transform: `translate3d(0, ${(itemState.translateY * 0.5).toFixed(1)}px, 0)`,
                  pointerEvents: itemState.isActive ? "auto" : "none",
                }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <h3 className="font-belgan text-3xl font-bold text-neutral-900">
                  {wine.name}
                </h3>
                <p className="mt-2 font-helvetica text-sm text-neutral-400">
                  {wine.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative my-2 flex h-[350px] w-full items-center justify-center">
        <WineBottlePhoto
          products={products}
          seqState={seqState}
          selectedSizes={selectedSizes}
          sizes="260px"
          className="w-[260px] rounded-lg"
        />
      </div>

      <div className="relative h-[200px] w-full">
        {products.map((wine, idx) => {
          const itemState = seqState.items[idx];
          const selected = selectedSizes[wine.id] ?? 0;
          const variant = wine.variants[selected] ?? wine.variants[0];
          return (
            <div
              key={wine.id}
              style={{
                opacity: itemState.opacity,
                transform: `translate3d(0, ${(itemState.translateY * 0.5).toFixed(1)}px, 0)`,
                pointerEvents: itemState.isActive ? "auto" : "none",
              }}
              className="absolute inset-0 flex flex-col justify-end text-center"
            >
              <p className="mb-4 px-2 font-helvetica text-sm leading-relaxed text-neutral-600">
                {wine.description}
              </p>
              <WineSizeChips
                wine={wine}
                selected={selected}
                onSelect={(sizeIndex) => onSelectSize(wine.id, sizeIndex)}
                className="mb-3 justify-center"
              />
              <a
                href={variant.shopifyUrl}
                className="flex h-11 w-full items-center justify-center rounded-full bg-neutral-900 font-helvetica text-sm font-medium tracking-wide text-white uppercase transition-colors hover:bg-neutral-800"
              >
                Jetzt kaufen
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
