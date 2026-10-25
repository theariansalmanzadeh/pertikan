"use client";

import { WineBottle3D } from "@/shared/components/vine-products/wine-bottle-3d";
import type { WineProduct } from "@/shared/contant/vine";
import type { ScrollSequenceState } from "@/shared/utils/scroll-math";

type MobileWineShowcaseProps = {
  products: WineProduct[];
  activeProduct: WineProduct;
  seqState: ScrollSequenceState;
  isDesktop: boolean;
  onSelectIndex: (index: number) => void;
  onBuyProduct: (product: WineProduct) => void;
};

export function MobileWineShowcase({
  products,
  activeProduct,
  seqState,
  isDesktop,
  onSelectIndex,
  onBuyProduct,
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
                aria-label={`Select ${wine.name}`}
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
        <div className="h-full w-[240px]">
          {!isDesktop ? (
            <WineBottle3D
              product={activeProduct}
              rotationY={seqState.rotationY}
              tiltZ={seqState.tiltZ}
              depthOffset={seqState.depthOffset}
            />
          ) : null}
        </div>
      </div>

      <div className="relative h-[132px] w-full">
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
              className="absolute inset-0 flex flex-col justify-end text-center"
            >
              <p className="mb-4 px-2 font-helvetica text-sm leading-relaxed text-neutral-600">
                {wine.description}
              </p>
              <button
                type="button"
                onClick={() => onBuyProduct(wine)}
                className="h-11 w-full cursor-pointer rounded-full bg-neutral-900 font-helvetica text-sm font-medium tracking-wide text-white uppercase transition-colors hover:bg-neutral-800"
              >
                Buy Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
