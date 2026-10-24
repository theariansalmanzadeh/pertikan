import Image from "next/image";
import Link from "next/link";

import { Button } from "@/shared/components/ui/button";

export type ProductDetail = {
  label: string;
  body: string;
};

export type ProductCardProps = {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
  details: readonly ProductDetail[];
  href?: string;
};

export function ProductCard({
  title,
  subtitle,
  image,
  details,
  href = "#shop",
}: ProductCardProps) {
  return (
    <div className="flex flex-col overflow-hidden sm:w-[600px] border border-neutral-200 bg-white">
      <div className="py-8 sm:py-16">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px] bg-neutral-50 sm:max-w-[260px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="260px"
          />
        </div>
      </div>

      <div className="flex flex-col gap-14 border-t border-neutral-200 p-6 sm:gap-6 sm:p-16">
        <div>
          <h3 className="font-belgan text-2xl font-bold text-neutral-900 md:text-3xl">
            {title}
          </h3>
          <p className="mt-2 font-helvetica text-sm text-neutral-400">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-14 sm:gap-6">
          {details.map((detail) => (
            <div key={detail.label}>
              <p className="font-helvetica text-sm text-neutral-400">
                {detail.label}
              </p>
              <p className="mt-2 font-helvetica text-sm leading-relaxed text-neutral-900">
                {detail.body}
              </p>
            </div>
          ))}
        </div>

        <Button
          asChild
          className="h-11 w-full rounded-full bg-neutral-900 font-helvetica text-sm font-medium text-white hover:bg-neutral-800"
        >
          <Link href={href}>Buy Now</Link>
        </Button>
      </div>
    </div>
  );
}
