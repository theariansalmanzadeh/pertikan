"use client";

import { useEffect, useRef, useState } from "react";

import { MobileWineShowcase } from "@/shared/components/vine-products/mobile-wine-showcase";
import { WineBottlePhoto } from "@/shared/components/vine-products/wine-bottle-photo";
import { WineSizeChips } from "@/shared/components/vine-products/wine-size-chips";
import { WINE_PRODUCTS } from "@/shared/contant/vine";
import {
  calculateStickyProgress,
  calculateTargetScrollYForIndex,
  computeScrollSequenceState,
} from "@/shared/utils/scroll-math";

export function WineCollectionSection() {
  const stickyTrackRef = useRef<HTMLDivElement | null>(null);
  const [rawProgress, setRawProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  // Selected bottle size (index into wine.variants) per product id.
  const [selectedSizes, setSelectedSizes] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    const rafId = requestAnimationFrame(() => {
      setReducedMotion(mq.matches);
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

  const handleSelectSize = (productId: string, sizeIndex: number) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: sizeIndex }));
  };

  return (
    <section
      id="wine-collection"
      aria-label="Die Weinkollektion"
      className="w-full bg-white"
    >
      <div className="px-6 pt-14 pb-9 md:px-16 md:pt-16 md:pb-7">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-left">
            <p className="mb-3 font-helvetica text-[11px] tracking-[0.04em] text-neutral-400 uppercase">
              Die Weinkollektion
            </p>
            <h2 className="font-belgan text-4xl leading-[1.08] text-neutral-900 md:text-[44px]">
              Drei Ausdrucksformen. <br /> Eine Philosophie.
            </h2>
          </div>

          <p className="mx-auto max-w-[340px] text-center font-helvetica text-[13px] leading-[1.6] text-neutral-500 md:mx-0 md:max-w-[540px] md:pb-1 md:text-left">
            Jede Flasche beginnt in unserer Imkerei im Südburgenland. Geduldig 15 bis 18 Monate ohne chemische Zusätze gereift, ehren unsere drei alkoholischen Honigweine sowohl die uralte Gärung als auch den ungezähmten Charakter der regionalen Uhudler-Trauben.
          </p>
        </div>
      </div>

      <div
        ref={stickyTrackRef}
        data-testid="wine-sticky-track"
        data-active-wine={activeProduct.id}
        data-active-index={seqState.activeIndex}
        style={{ height: `${WINE_PRODUCTS.length * 85}vh` }}
        className="relative w-full"
      >
        <div className="sticky top-0 flex min-h-screen w-full flex-col justify-between overflow-hidden bg-white md:h-screen">
          <div className="hidden shrink-0 items-center justify-center border-b border-neutral-200 pt-4 pb-5 md:flex">
            <div
              role="tablist"
              aria-label="Weinkollektion"
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
                    aria-label={`${wine.name} anzeigen`}
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
            <div className="relative h-full border-r border-neutral-200">
              <WineBottlePhoto
                products={WINE_PRODUCTS}
                seqState={seqState}
                selectedSizes={selectedSizes}
                sizes="50vw"
              />
            </div>

            <div className="relative flex h-full items-center p-6 sm:p-12 lg:p-16">
              <div className="relative h-full min-h-[500px] w-full max-w-[490px]">
                {WINE_PRODUCTS.map((wine, idx) => {
                  const itemState = seqState.items[idx];
                  const visible = itemState.opacity > 0.01;
                  const selected = selectedSizes[wine.id] ?? 0;
                  const variant = wine.variants[selected] ?? wine.variants[0];
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
                          Verkostungsnotizen
                        </p>
                        <p className="mt-2 font-helvetica text-sm leading-relaxed text-neutral-900">
                          {wine.tastingNotes}
                        </p>
                      </div>

                      <div className="mt-8 border-t border-neutral-200">
                        <div className="flex flex-col gap-1 border-b border-neutral-200 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <span className="shrink-0 font-helvetica text-base text-neutral-400">
                            Reifung
                          </span>
                          <span className="font-helvetica text-base text-neutral-900 sm:text-right">
                            {wine.maturation}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-neutral-200 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <span className="shrink-0 font-helvetica text-base text-neutral-400">
                            Reinheit &amp; Sulfite
                          </span>
                          <span className="font-helvetica text-base text-neutral-900 sm:text-right">
                            {wine.purityAndSulfites}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-neutral-200 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <span className="shrink-0 font-helvetica text-base text-neutral-400">
                            Serviervorschlag
                          </span>
                          <span className="font-helvetica text-base text-neutral-900 sm:text-right">
                            {wine.recommendedService}
                          </span>
                        </div>
                      </div>

                      <WineSizeChips
                        wine={wine}
                        selected={selected}
                        onSelect={(sizeIndex) =>
                          handleSelectSize(wine.id, sizeIndex)
                        }
                        className="mt-6"
                      />

                      <a
                        href={variant.shopifyUrl}
                        tabIndex={itemState.isActive ? 0 : -1}
                        className="mt-4 flex h-11 w-full shrink-0 items-center justify-center rounded-full bg-neutral-900 font-helvetica text-sm font-medium tracking-wide text-white uppercase transition-colors hover:bg-neutral-800"
                      >
                        Jetzt kaufen
                      </a>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <MobileWineShowcase
            products={WINE_PRODUCTS}
            seqState={seqState}
            selectedSizes={selectedSizes}
            onSelectIndex={handleSelectIndex}
            onSelectSize={handleSelectSize}
          />
        </div>
      </div>
    </section>
  );
}
