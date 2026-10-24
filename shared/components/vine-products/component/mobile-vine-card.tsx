"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";

import { Button } from "@/shared/components/ui/button";
import type { VineProduct } from "@/shared/contant/vine";

type MobileVineCardProps = {
  product: VineProduct;
};

export function MobileVineCard({ product }: MobileVineCardProps) {
  const [showSpecs, setShowSpecs] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <article className="flex flex-col items-center bg-white px-6 py-12 text-center">
      <h3 className="font-belgan text-3xl font-bold text-neutral-900">
        {product.title}
      </h3>
      <p className="mt-2 font-helvetica text-sm text-neutral-400">
        {product.subtitle}
      </p>

      <div className="relative mt-10 w-full">
        <button
          type="button"
          onClick={() => setShowSpecs((open) => !open)}
          className="relative aspect-[2/5] w-full max-w-[200px] overflow-hidden"
          aria-pressed={showSpecs}
          aria-label={
            showSpecs
              ? "Hide product specifications"
              : "Show product specifications"
          }
        >
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            className="object-contain"
            sizes="200px"
          />
        </button>
        {showSpecs ? (
          <div
            className="absolute inset-0 flex items-center justify-center bg-neutral-500/40 p-4"
            onClick={() => setShowSpecs((open) => !open)}
          >
            <dl className="flex w-full flex-col gap-4 text-left">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="font-helvetica text-xs tracking-wide text-[#fafafa]/90">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 font-helvetica text-sm leading-snug text-[#fafafa]">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}
      </div>

      <div ref={ref} className="mt-10 w-full max-w-sm">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 48 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-helvetica text-sm leading-relaxed text-neutral-500">
            {product.description}
          </p>

          <Button
            asChild
            className="group mt-10 h-11 w-full rounded-full bg-neutral-900 font-helvetica text-sm font-medium text-white hover:bg-neutral-800"
          >
            <Link href={product.href}>
              Buy Now
              <ArrowRight className="ml-0 size-4 max-w-0 -translate-x-1 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:ml-1.5 group-hover:max-w-4 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </article>
  );
}
