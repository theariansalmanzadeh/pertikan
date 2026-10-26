"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

import { MobileHoneyCard } from "@/shared/components/honey-products/component/mobile-honey-card";
import { ProductCard } from "@/shared/components/honey-products/component/product-card";
import { HONEY_PRODUCTS } from "@/shared/contant/honey-products";
import { computeScrollSequenceState } from "@/shared/utils/scroll-math";

function DesktopScrollCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [stickyHeight, setStickyHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setScrollProgress(value);
  });

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const overflow = track.scrollWidth - window.innerWidth;
      setMaxTranslate(Math.max(0, overflow));
      setStickyHeight(Math.max(track.scrollHeight + 96, window.innerHeight));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const seqState = computeScrollSequenceState(
    scrollProgress,
    HONEY_PRODUCTS.length,
    false
  );

  return (
    <div
      ref={sectionRef}
      className="relative hidden sm:block"
      style={{
        height: stickyHeight
          ? `calc(${stickyHeight}px + ${maxTranslate}px)`
          : "200vh",
      }}
    >
      <div
        className="sticky top-0 flex items-center overflow-x-clip py-8"
        style={{ minHeight: stickyHeight ? `${stickyHeight}px` : "100vh" }}
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-stretch gap-6 px-6 md:px-10 lg:px-14"
        >
          {HONEY_PRODUCTS.map((product) => (
            <div key={product.id} className="flex shrink-0">
              <ProductCard
                product={product}
                rotationY={seqState.rotationY}
                tiltZ={seqState.tiltZ}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function MobileScrollCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setScrollProgress(value);
  });

  const seqState = computeScrollSequenceState(
    scrollProgress,
    HONEY_PRODUCTS.length,
    false
  );

  return (
    <div ref={sectionRef} className="flex flex-col gap-10 sm:hidden">
      {HONEY_PRODUCTS.map((product) => (
        <MobileHoneyCard
          key={product.id}
          product={product}
          rotationY={seqState.rotationY}
          tiltZ={seqState.tiltZ}
        />
      ))}
    </div>
  );
}

export function ProductCards() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 640);
    const rafId = requestAnimationFrame(update);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", update);
    };
  }, []);

  return isDesktop ? <DesktopScrollCards /> : <MobileScrollCards />;
}
