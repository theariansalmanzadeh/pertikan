"use client";

import { useEffect, useRef, useState } from "react";

import { MobileWineShowcase } from "@/shared/components/vine-products/mobile-wine-showcase";
import { WineBottle3D } from "@/shared/components/vine-products/wine-bottle-3d";
import { WINE_PRODUCTS, type WineProduct } from "@/shared/contant/vine";
import {
  calculateStickyProgress,
  calculateTargetScrollYForIndex,
  computeScrollSequenceState,
} from "@/shared/utils/scroll-math";

type WineCollectionSectionProps = {
  onBuyProduct?: (product: WineProduct) => void;
};

export function WineCollectionSection({
  onBuyProduct,
}: WineCollectionSectionProps) {
  const stickyTrackRef = useRef<HTMLDivElement | null>(null);
  const [rawProgress, setRawProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    const rafId = requestAnimationFrame(() => {
      setReducedMotion(mq.matches);
      setIsDesktop(window.innerWidth >= 768);
    });
    return () => {
      cancelAnimationFrame(rafId);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    let rafId = 0;
    const updateScroll = () => {
      const track = stickyTrackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      setIsDesktop((window.innerWidth || 1440) >= 768);
      const nextProgress = calculateStickyProgress(rect.top, rect.height, vh);
      setRawProgress((prev) =>
        Math.abs(prev - nextProgress) > 0.0005 ? nextProgress : prev
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const seqState = computeScrollSequenceState(
    rawProgress,
    WINE_PRODUCTS.length,
    reducedMotion
  );
  const activeProduct = WINE_PRODUCTS[seqState.activeIndex] || WINE_PRODUCTS[0];

  const handleSelectIndex = (targetIdx: number) => {
    const track = stickyTrackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pageTop = window.scrollY + rect.top;
    const targetY = calculateTargetScrollYForIndex(
      pageTop,
      rect.height,
      window.innerHeight || 900,
      targetIdx,
      WINE_PRODUCTS.length
    );
    window.scrollTo({
      top: targetY,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const handleBuyProduct = (product: WineProduct) => {
    if (onBuyProduct) {
      onBuyProduct(product);
      return;
    }
    window.open(product.ctaUrl || "#shop", "_self");
  };

  return (
    <section
      id="wine-collection"
      aria-label="The Wine Collection"
      className="w-full bg-white"
    >
      <div className="px-6 pt-14 pb-9 md:px-16 md:pt-16 md:pb-7">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-left">
            <p className="mb-3 font-helvetica text-[11px] tracking-[0.04em] text-neutral-400 uppercase">
              The Wine Collection
            </p>
            <h2 className="font-belgan text-4xl leading-[1.08] text-neutral-900 md:text-[44px]">
              Three expressions.
              <br />
              One philosophy.
            </h2>
          </div>

          <p className="mx-auto max-w-[340px] text-center font-helvetica text-[13px] leading-[1.6] text-neutral-500 md:mx-0 md:max-w-[540px] md:pb-1 md:text-left">
            Every bottle begins in our Southern Burgenland apiary. Matured
            patiently for 15 to 18 months without chemical additives, our three
            alcoholic honey wines honor both ancient fermentation and the
            untamed character of regional Uhudler grapes.
          </p>
        </div>
      </div>

      <div
        ref={stickyTrackRef}
        data-testid="wine-sticky-track"
        data-active-wine={activeProduct.id}
        data-active-index={seqState.activeIndex}
        className="relative h-[340vh] w-full"
      >
        <div className="sticky top-0 flex min-h-screen w-full flex-col justify-between overflow-hidden bg-white md:h-screen">
          <div className="hidden shrink-0 items-center justify-center border-b border-neutral-200 pt-4 pb-5 md:flex">
            <div
              role="tablist"
              aria-label="Wine Collection Expressions"
              className="flex items-center gap-2"
            >
              {WINE_PRODUCTS.map((wine, idx) => {
                const itemState = seqState.items[idx];
                return (
                  <button
                    key={wine.id}
                    type="button"
                    role="tab"
                    aria-selected={itemState.isActive}
                    aria-label={`Show ${wine.name}`}
                    onClick={() => handleSelectIndex(idx)}
                    style={{ width: `${Math.round(itemState.indicatorWidth)}px` }}
                    className={`h-1 cursor-pointer rounded-full transition-colors duration-150 ${
                      itemState.isActive
                        ? "bg-neutral-900"
                        : "bg-neutral-300 hover:bg-neutral-400"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          <div className="hidden min-h-0 flex-1 border-b border-neutral-200 md:grid md:grid-cols-2">
            <div className="relative flex h-full items-center justify-center border-r border-neutral-200 px-12 py-8">
              <div className="h-full max-h-[560px] w-full max-w-[380px]">
                {isDesktop ? (
                  <WineBottle3D
                    product={activeProduct}
                    rotationY={seqState.rotationY}
                    tiltZ={seqState.tiltZ}
                    depthOffset={seqState.depthOffset}
                  />
                ) : null}
              </div>
            </div>

            <div className="relative flex h-full items-center p-6 sm:p-12 lg:p-16">
              <div className="relative h-full min-h-[500px] w-full max-w-[490px]">
                {WINE_PRODUCTS.map((wine, idx) => {
                  const itemState = seqState.items[idx];
                  const visible = itemState.opacity > 0.01;
                  return (
                    <article
                      key={wine.id}
                      aria-hidden={!itemState.isActive}
                      style={{
                        opacity: itemState.opacity,
                        transform: `translate3d(0, ${itemState.translateY.toFixed(1)}px, 0) scale(${itemState.scale.toFixed(3)})`,
                        pointerEvents: itemState.isActive ? "auto" : "none",
                        visibility: visible ? "visible" : "hidden",
                      }}
                      className="absolute inset-0 flex flex-col justify-center will-change-transform"
                    >
                      <h3 className="pb-6 font-belgan text-2xl font-bold text-neutral-900 md:text-4xl">
                        {wine.name}
                      </h3>
                      <p className="mt-2 font-helvetica text-sm text-neutral-400">
                        {wine.subtitle}
                      </p>

                      <p className="mt-6 font-helvetica text-sm leading-relaxed text-neutral-600">
                        {wine.description}
                      </p>

                      <div className="mt-8">
                        <p className="font-helvetica text-sm text-neutral-400">
                          Tasting Notes
                        </p>
                        <p className="mt-2 font-helvetica text-sm leading-relaxed text-neutral-900">
                          {wine.tastingNotes}
                        </p>
                      </div>

                      <div className="mt-8 border-t border-neutral-200">
                        <div className="flex flex-col gap-1 border-b border-neutral-200 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <span className="shrink-0 font-helvetica text-base text-neutral-400">
                            Maturation
                          </span>
                          <span className="font-helvetica text-base text-neutral-900 sm:text-right">
                            {wine.maturation}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-neutral-200 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <span className="shrink-0 font-helvetica text-base text-neutral-400">
                            Purity &amp; Sulfites
                          </span>
                          <span className="font-helvetica text-base text-neutral-900 sm:text-right">
                            {wine.purityAndSulfites}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-neutral-200 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <span className="shrink-0 font-helvetica text-base text-neutral-400">
                            Recommended Service
                          </span>
                          <span className="font-helvetica text-base text-neutral-900 sm:text-right">
                            {wine.recommendedService}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleBuyProduct(wine)}
                        className="mt-8 h-11 w-full shrink-0 cursor-pointer rounded-full bg-neutral-900 font-helvetica text-sm font-medium tracking-wide text-white uppercase transition-colors hover:bg-neutral-800"
                      >
                        Buy Now
                      </button>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <MobileWineShowcase
            products={WINE_PRODUCTS}
            activeProduct={activeProduct}
            seqState={seqState}
            isDesktop={isDesktop}
            onSelectIndex={handleSelectIndex}
            onBuyProduct={handleBuyProduct}
          />
        </div>
      </div>
    </section>
  );
}
