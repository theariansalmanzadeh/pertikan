import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/shared/components/ui/button";

type CtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export function Cta({ eyebrow, title, description, href }: CtaProps) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 py-4 sm:py-20 text-center md:px-10 lg:px-14">
      <p className="font-helvetica text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
        {eyebrow}
      </p>

      <h2 className="mt-6 font-belgan text-3xl leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 font-helvetica text-sm leading-relaxed text-neutral-400 md:text-[0.9375rem] md:leading-7">
        {description}
      </p>

      <Button
        asChild
        className="mt-10 h-11 rounded-full bg-neutral-900 px-7 font-helvetica text-sm font-medium text-white hover:bg-neutral-800"
      >
        <Link href={href}>
          Enter Shopify Storefront
          <ArrowRight className="size-4" data-icon="inline-end" />
        </Link>
      </Button>
    </section>
  );
}
