"use client";

import { useState } from "react";
import Image from "next/image";

import type { WineProduct } from "@/shared/contant/vine";

type WineRowProps = {
  wine: WineProduct;
};

const detailRows = [
  { label: "Reifung", key: "maturation" },
  { label: "Reinheit & Sulfite", key: "purityAndSulfites" },
  { label: "Serviervorschlag", key: "recommendedService" },
] as const;

export function WineRow({ wine }: WineRowProps) {
  const [selected, setSelected] = useState(0);
  const variant = wine.variants[selected] ?? wine.variants[0];

  return (
    <article className="grid grid-cols-1 border-b border-neutral-200 md:min-h-[765px] md:grid-cols-2">
      <div className="relative aspect-[4/5] bg-neutral-100 md:aspect-auto md:border-r md:border-neutral-200">
        {wine.variants.map((item, index) => (
          <Image
            key={item.size}
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            aria-hidden={index !== selected}
            className={`object-cover transition-opacity duration-300 ${
              index === selected ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center px-6 py-12 md:px-16 md:py-16">
        <div className="w-full max-w-[592px]">
          <h3 className="font-belgan text-5xl leading-none text-neutral-900 md:text-[64px]">
            {wine.name}
          </h3>
          <p className="mt-6 font-helvetica text-sm text-neutral-400">
            {wine.subtitle}
          </p>

          <p className="mt-8 font-helvetica text-sm leading-relaxed text-neutral-900">
            {wine.description}
          </p>

          <div className="mt-8">
            <p className="font-helvetica text-sm text-neutral-400">
              Verkostungsnotizen
            </p>
            <p className="mt-1 font-helvetica text-sm leading-relaxed text-neutral-900">
              {wine.tastingNotes}
            </p>
          </div>

          <dl className="mt-8 border-t border-neutral-200">
            {detailRows.map((row) => (
              <div
                key={row.key}
                className="flex flex-col gap-1 border-b border-neutral-200 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              >
                <dt className="shrink-0 font-helvetica text-sm text-neutral-400">
                  {row.label}
                </dt>
                <dd className="font-helvetica text-sm text-neutral-900 sm:text-right">
                  {wine[row.key]}
                </dd>
              </div>
            ))}
          </dl>

          <div
            role="radiogroup"
            aria-label={`Flaschengröße ${wine.name}`}
            className="mt-8 flex flex-wrap gap-2"
          >
            {wine.variants.map((item, index) => {
              const active = index === selected;
              return (
                <button
                  key={item.size}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSelected(index)}
                  className={`h-12 cursor-pointer rounded-full border px-5 font-helvetica text-sm transition-colors ${
                    active
                      ? "border-neutral-900 text-neutral-900"
                      : "border-neutral-200 text-neutral-400 hover:border-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  {item.size}
                </button>
              );
            })}
          </div>

          <a
            href={variant.shopifyUrl}
            className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-neutral-900 font-helvetica text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Jetzt kaufen
          </a>
        </div>
      </div>
    </article>
  );
}
