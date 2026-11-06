import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export type EventItem = {
  day: string;
  month: string;
  year: string;
  title: string;
  tag: string;
  location: string;
  address: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

type EventCardProps = {
  event: EventItem;
  /** Heading level for the title; use "h3" below a section heading. */
  titleAs?: "h2" | "h3";
};

export function EventCard({ event, titleAs: Title = "h2" }: EventCardProps) {
  return (
    <article className="flex flex-col items-stretch border border-neutral-200 bg-white transition-colors hover:bg-neutral-50 md:flex-row">
      {/* Date column */}
      <div className="flex w-full shrink-0 flex-row items-center justify-center gap-1 border-b border-neutral-200 px-3 py-4 text-center md:w-28 md:flex-col md:gap-0 md:border-b-0 md:border-r md:py-6">
        <span className="font-belgan text-base leading-none text-neutral-900 md:text-[2rem] md:leading-none lg:text-[2.5rem]">
          {event.day}
        </span>
        <span className="font-helvetica text-sm text-neutral-500 md:mt-1 md:text-[11px]">
          {event.month}
        </span>
        <span className="font-helvetica text-sm text-neutral-500 md:text-[11px]">
          {event.year}
        </span>
      </div>

      {event.imageSrc ? (
        <div className="relative aspect-[3/2] w-full shrink-0 md:aspect-auto md:w-48">
          <Image
            src={event.imageSrc}
            alt={event.imageAlt ?? event.title}
            fill
            sizes="(min-width: 768px) 192px, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      {/* Content column */}
      <div className="flex flex-1 flex-col justify-center gap-1.5 px-4 py-4 md:px-8 md:py-5 lg:px-10">
        {/* Title + tag */}
        <div className="flex flex-wrap items-center gap-3">
          <Title className="font-belgan text-lg leading-tight text-neutral-900 md:text-xl">
            {event.title}
          </Title>
          <span className="rounded-full bg-neutral-100 px-3 py-0.5 font-helvetica text-[11px] text-neutral-600">
            {event.tag}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 font-helvetica text-xs text-neutral-500">
          <MapPin className="size-3 shrink-0 text-neutral-400" />
          <span>{event.location}</span>
        </div>
        <p className="font-helvetica text-xs text-neutral-400">
          {event.address}
        </p>

        {/* Description */}
        <p className="mt-1 border-t border-neutral-200 pt-3 font-helvetica text-[0.8125rem] leading-relaxed text-neutral-500 md:border-0 md:pt-0">
          {event.description}
        </p>

        {event.href ? (
          <a
            href={event.href}
            className="mt-1 inline-flex items-center justify-center gap-2 font-helvetica text-xs text-neutral-700 md:hidden"
          >
            Details
            <ArrowRight aria-hidden="true" className="size-3" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
