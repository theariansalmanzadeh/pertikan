import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Misty mountain landscape at dusk"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />
    </section>
  );
}
