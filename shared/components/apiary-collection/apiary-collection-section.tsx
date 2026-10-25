"use client";

import { useEffect, useRef, useState } from "react";

import { ApiaryCollectionHeader } from "@/shared/components/apiary-collection/apiary-collection-header";
import { DesktopHoneyTrack } from "@/shared/components/apiary-collection/desktop-honey-track";
import { MobileHoneyShowcase } from "@/shared/components/apiary-collection/mobile-honey-showcase";
import {
  HONEY_PRODUCTS,
  type HoneyProduct,
} from "@/shared/contant/honey-products";
import {
  calculateStickyProgress,
  calculateTargetScrollYForIndex,
  computeScrollSequenceState,
} from "@/shared/utils/scroll-math";

type ApiaryCollectionSectionProps = {
  onBuyHoney?: (product: HoneyProduct) => void;
};

export function ApiaryCollectionSection({
  onBuyHoney,
}: ApiaryCollectionSectionProps) {
  const stickyTrackRef = useRef<HTMLDivElement | null>(null);
  const [rawProgress, setRawProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1440);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    let rafId = 0;
    const updateScroll = () => {
      const track = stickyTrackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      const vw = window.innerWidth || 1440;
      setViewportWidth(vw);
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
    HONEY_PRODUCTS.length,
    reducedMotion
  );
  const activeHoney = HONEY_PRODUCTS[seqState.activeIndex] || HONEY_PRODUCTS[0];

  const totalTrackWidth = 1800;
  const maxHorizontalShift = Math.max(0, totalTrackWidth - viewportWidth);
  const desktopTranslateX = reducedMotion
    ? 0
    : -seqState.progress * maxHorizontalShift;

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
      HONEY_PRODUCTS.length
    );
    window.scrollTo({
      top: targetY,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const handleBuyHoney = (product: HoneyProduct) => {
    if (onBuyHoney) {
      onBuyHoney(product);
      return;
    }
    window.location.href = product.ctaUrl || "#shop";
  };

  return (
    <section
      id="apiary-collection"
      aria-label="The Apiary Collection"
      className="w-full border-t border-neutral-200 bg-white"
    >
      <ApiaryCollectionHeader />

      <div
        ref={stickyTrackRef}
        data-testid="honey-sticky-track"
        data-active-honey={activeHoney.id}
        data-active-index={seqState.activeIndex}
        className="relative h-[270vh] w-full"
      >
        <div className="sticky top-0 flex min-h-screen w-full flex-col justify-center overflow-hidden bg-white">
          <DesktopHoneyTrack
            products={HONEY_PRODUCTS}
            seqState={seqState}
            reducedMotion={reducedMotion}
            viewportWidth={viewportWidth}
            desktopTranslateX={desktopTranslateX}
            totalTrackWidth={totalTrackWidth}
            onSelectIndex={handleSelectIndex}
            onBuyHoney={handleBuyHoney}
          />

          <MobileHoneyShowcase
            products={HONEY_PRODUCTS}
            activeHoney={activeHoney}
            seqState={seqState}
            viewportWidth={viewportWidth}
            onSelectIndex={handleSelectIndex}
            onBuyHoney={handleBuyHoney}
          />
        </div>
      </div>
    </section>
  );
}
