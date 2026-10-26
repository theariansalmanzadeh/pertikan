"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HoneyJar3D } from "@/shared/components/apiary-collection/honey-jar-3d";
import { Button } from "@/shared/components/ui/button";
import type { HoneyProduct } from "@/shared/contant/honey-products";

type MobileHoneyCardProps = {
  product: HoneyProduct;
  rotationY: number;
  tiltZ?: number;
};

export function MobileHoneyCard({
  product,
  rotationY,
  tiltZ = 0,
}: MobileHoneyCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const href = product.ctaUrl ?? "#shop";
  const details = [
    { label: "Aroma & Gaumen", body: product.aromaAndPalate },
    {
      label: "Textur & Kristallisation",
      body: product.textureAndCrystallization,
    },
    {
      label: "Tisch & kulinarisches Ritual",
      body: product.tableAndCulinaryRitual,
    },
  ].filter((detail) => detail.body);

  return (
    <article className="flex flex-col items-center bg-white px-6 py-12 text-center">
      <h3 className="font-belgan text-3xl font-bold text-neutral-900">
        {product.name}
      </h3>
      {product.subtitle ? (
        <p className="mt-2 font-helvetica text-sm text-neutral-400">
          {product.subtitle}
        </p>
      ) : null}

      <div className="relative mt-10 flex w-full justify-center">
        <button
          type="button"
          onClick={() => setShowDetails((open) => !open)}
          className={`relative w-full ${
            product.imageSrc
              ? "aspect-square max-w-sm overflow-hidden"
              : "h-[300px] max-w-[220px]"
          }`}
          aria-pressed={showDetails}
          aria-label={
            showDetails ? "Produktdetails ausblenden" : "Produktdetails anzeigen"
          }
        >
          {product.imageSrc ? (
            <Image
              src={product.imageSrc}
              alt={product.imageAlt ?? product.name}
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover"
            />
          ) : (
            <HoneyJar3D
              product={product}
              rotationY={rotationY}
              tiltZ={tiltZ}
            />
          )}
        </button>

        {showDetails && details.length > 0 ? (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/55 p-4"
            onClick={() => setShowDetails(false)}
          >
            <dl className="flex w-full max-w-sm flex-col gap-4 text-left">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="font-helvetica text-xs tracking-wide text-[#fafafa]/90">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 font-helvetica text-sm leading-snug text-[#fafafa]">
                    {detail.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}
      </div>

      {product.aromaAndPalate ? (
        <p className="mt-10 max-w-sm font-helvetica text-sm leading-relaxed text-neutral-500">
          {product.aromaAndPalate}
        </p>
      ) : null}

      <Button
        asChild
        className="group mt-10 h-11 w-full max-w-sm rounded-full bg-neutral-900 font-helvetica text-sm font-medium text-white hover:bg-neutral-800"
      >
        <Link href={href}>
          Jetzt kaufen
          <ArrowRight className="ml-0 size-4 max-w-0 -translate-x-1 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:ml-1.5 group-hover:max-w-4 group-hover:translate-x-0 group-hover:opacity-100" />
        </Link>
      </Button>
    </article>
  );
}
