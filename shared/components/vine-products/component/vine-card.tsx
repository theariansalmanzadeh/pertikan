"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";

import { Button } from "@/shared/components/ui/button";
import type { VineProduct } from "@/shared/contant/vine";

type VineCardProps = {
  product: VineProduct;
};

export function VineCard({ product }: VineCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div className="grid grid-cols-2 overflow-hidden border border-neutral-200 bg-white">
      <div className="relative flex min-h-[360px] items-center justify-center bg-white py-12 sm:min-h-[480px] sm:py-16">
        <div className="relative h-full min-h-[280px] w-full max-w-[200px] sm:max-w-[240px]">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 40vw, 240px"
          />
        </div>
      </div>

      <div
        ref={ref}
        className="flex flex-col justify-center border-l border-neutral-200 p-6 sm:p-12 lg:p-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="pb-6 font-belgan text-2xl font-bold text-neutral-900 md:text-4xl">
            {product.title}
          </h3>
          <p className="mt-2 font-helvetica text-sm text-neutral-400">
            {product.subtitle}
          </p>
          <div>
            <p className="mt-6 font-helvetica text-sm leading-relaxed text-neutral-600">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="font-helvetica text-sm text-neutral-400">
                {product.tastingNotes.label}
              </p>
              <p className="mt-2 font-helvetica text-sm leading-relaxed text-neutral-900">
                {product.tastingNotes.body}
              </p>
            </div>

            <div className="mt-8 border-t border-neutral-200">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex flex-col gap-1 border-b border-neutral-200 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                >
                  <span className="shrink-0 font-helvetica text-base text-neutral-400">
                    {spec.label}
                  </span>
                  <span className="font-helvetica text-base text-neutral-900 sm:text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Button
            asChild
            className="mt-8 h-11 w-full rounded-full bg-neutral-900 font-helvetica text-sm font-medium tracking-wide text-white uppercase hover:bg-neutral-800"
          >
            <Link href={product.href}>Buy Now</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
