"use client";

import type { HoneyProduct } from "@/shared/contant/honey-products";
import type { ScrollSequenceState } from "@/shared/utils/scroll-math";
import { HoneyJar3D } from "@/shared/components/apiary-collection/honey-jar-3d";

type MobileHoneyShowcaseProps = {
  products: HoneyProduct[];
  activeHoney: HoneyProduct;
  seqState: ScrollSequenceState;
  viewportWidth: number;
  onSelectIndex: (index: number) => void;
  onBuyHoney: (product: HoneyProduct) => void;
};

export function MobileHoneyShowcase({
  products,
  activeHoney,
  seqState,
  viewportWidth,
  onSelectIndex,
  onBuyHoney,
}: MobileHoneyShowcaseProps) {
  return (
    <div className="flex flex-1 flex-col justify-between border-y border-neutral-200 px-6 py-7 md:hidden">
      <div className="flex flex-col items-center">
        <div className="mb-5 flex items-center gap-2">
          {products.map((honey, idx) => {
            const itemState = seqState.items[idx];
            return (
              <button
                key={honey.id}
                type="button"
                aria-label={`${honey.name} auswählen`}
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
          {products.map((honey, idx) => {
            const itemState = seqState.items[idx];
            return (
              <div
                key={honey.id}
                style={{
                  opacity: itemState.opacity,
                  transform: `translate3d(0, ${(itemState.translateY * 0.5).toFixed(1)}px, 0)`,
                  pointerEvents: itemState.isActive ? "auto" : "none",
                }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <h3 className="mb-1 font-belgan text-4xl leading-[1.08] text-neutral-900">
                  {honey.mobileName}
                </h3>
                <p className="font-helvetica text-xs text-neutral-400">
                  {honey.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative my-2 flex h-[300px] w-full items-center justify-center">
        <div className="h-full w-[260px]">
          {viewportWidth < 768 ? (
            <HoneyJar3D
              product={activeHoney}
              rotationY={seqState.rotationY}
              tiltZ={seqState.tiltZ}
            />
          ) : null}
        </div>
      </div>

      <div className="relative h-[155px] w-full">
        {products.map((honey, idx) => {
          const itemState = seqState.items[idx];
          return (
            <div
              key={honey.id}
              style={{
                opacity: itemState.opacity,
                transform: `translate3d(0, ${(itemState.translateY * 0.5).toFixed(1)}px, 0)`,
                pointerEvents: itemState.isActive ? "auto" : "none",
              }}
              className="absolute inset-0 flex flex-col justify-end text-left"
            >
              <p className="mb-1 font-helvetica text-xs text-neutral-400">
                Aroma &amp; Gaumen
              </p>
              <p className="mb-4 font-helvetica text-[12.5px] leading-[1.55] text-neutral-700">
                {honey.aromaAndPalate}
              </p>
              <button
                type="button"
                onClick={() => onBuyHoney(honey)}
                className="h-[46px] w-full cursor-pointer rounded-full bg-neutral-900 font-helvetica text-[13px] text-white transition-colors hover:bg-neutral-800"
              >
                Jetzt kaufen
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
