import Image from "next/image";
import Link from "next/link";

import { Button } from "@/shared/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Neblige Berglandschaft in der Dämmerung"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      <div
        className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-center px-6 text-center text-white"
      >
        <div>
          <h1 className="font-belgan text-6xl leading-none sm:text-8xl md:text-9xl">
            Pertikan
          </h1>
          <p className="mt-4 font-helvetica text-lg font-medium tracking-[0.12em] uppercase sm:text-2xl md:text-3xl">
            A heritage that travels.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
      </div>
    </section>
  );
}
