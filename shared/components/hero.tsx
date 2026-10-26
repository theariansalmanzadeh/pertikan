import Image from "next/image";
import Link from "next/link";

import { Button } from "@/shared/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Neblige Berglandschaft in der Dämmerung"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />
      {/*
        The tagline is baked into hero.png (1440x1024, bottom edge at ~59% of
        the image height). object-cover scales the image to max(100vh, 71.11vw)
        tall, so anchor the buttons to the image's tagline, not to the viewport.
      */}
      <div
        className="absolute inset-x-0 flex flex-wrap items-center justify-center gap-3 px-6"
        style={{ top: "calc(50% + 0.0898 * max(100vh, 71.11vw) + 40px)" }}
      >
        <Button
          asChild
          className="h-12 rounded-full bg-white px-6 font-helvetica text-sm font-normal text-neutral-900 hover:bg-white/90"
        >
          <Link href="/collections">Kollektionen ansehen</Link>
        </Button>
        <Button
          asChild
          className="h-12 rounded-full border border-white/40 bg-white/10 px-6 font-helvetica text-sm font-normal text-white backdrop-blur-sm hover:bg-white/20"
        >
          <Link href="/find-us">Wo Sie uns finden</Link>
        </Button>
      </div>
    </section>
  );
}
