"use client";

import Image from "next/image";
import Link from "next/link";

import { HoneyJar3D } from "@/shared/components/apiary-collection/honey-jar-3d";
import { Button } from "@/shared/components/ui/button";
import type { HoneyProduct } from "@/shared/contant/honey-products";

export type ProductCardProps = {
  product: HoneyProduct;
  rotationY: number;
  tiltZ?: number;
  href?: string;
};

export function ProductCard({
  product,
  rotationY,
  tiltZ = 0,
  href,
}: ProductCardProps) {
  const buyHref = href ?? product.ctaUrl ?? "#shop";

  return (
    <div className="flex h-full flex-col overflow-hidden border border-neutral-200 bg-white sm:w-[600px]">
      {product.imageSrc ? (
        <div className="relative aspect-square shrink-0 border-b border-neutral-200 sm:aspect-auto sm:h-[clamp(180px,26vh,300px)]">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt ?? product.name}
            fill
            sizes="(min-width: 640px) 600px, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex shrink-0 items-center justify-center border-b border-neutral-200 py-8 sm:h-[clamp(180px,26vh,300px)] sm:py-0">
          <div className="h-[300px] w-[260px] sm:h-[88%] sm:w-[260px]">
            <HoneyJar3D
              product={product}
              rotationY={rotationY}
              tiltZ={tiltZ}
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-14 p-6 sm:gap-4 sm:p-10">
        <div>
          <h3 className="font-belgan text-2xl font-bold text-neutral-900 md:text-3xl">
            {product.name}
          </h3>
          {product.subtitle ? (
            <p className="mt-2 font-helvetica text-sm text-neutral-400">
              {product.subtitle}
            </p>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col">
          <p className="font-helvetica text-sm leading-relaxed text-neutral-900">
            {product.description}
          </p>

          <ul className="mt-6 grid grid-cols-3 gap-3">
            {product.sizes.map((size) => (
              <li
                key={size}
                className="border-t border-neutral-200 pt-3 font-helvetica text-xs text-neutral-400"
              >
                {size}
              </li>
            ))}
          </ul>
        </div>

        <Button
          asChild
          className="mt-auto h-11 w-full rounded-full bg-neutral-900 font-helvetica text-sm font-medium text-white hover:bg-neutral-800"
        >
          <Link href={buyHref}>Jetzt kaufen</Link>
        </Button>
      </div>
    </div>
  );
}
