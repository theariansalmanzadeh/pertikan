import Image from "next/image";

import type { AboutChapter } from "@/shared/contant/about";

type AboutChapterImageProps = {
  image: AboutChapter["image"];
  className?: string;
};

export function AboutChapterImage({
  image,
  className = "",
}: AboutChapterImageProps) {
  return (
    <figure
      className={`relative aspect-[4/5] bg-neutral-100 md:sticky md:top-0 md:aspect-auto md:h-screen md:self-start ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        style={{ objectPosition: image.position }}
        className="object-cover"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-6 pt-20 pb-6 text-white sm:px-10 sm:pb-8 lg:px-12">
        <p className="font-belgan text-xl font-bold md:text-2xl">
          {image.caption.title}
        </p>
        <p className="mt-1 font-helvetica text-sm text-white/85">
          {image.caption.subtitle}
        </p>
        {image.caption.quote ? (
          <p className="mt-3 font-helvetica text-sm text-white/85 italic">
            {image.caption.quote}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
