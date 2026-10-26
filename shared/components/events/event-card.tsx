import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export type EventItem = {
  day: string;
  month: string;
  year: string;
  title: string;
  tag: string;
  location: string;
  address: string;
  description: string;
  href?: string;
};

type EventCardProps = {
  event: EventItem;
  /** Heading level for the title; use "h3" below a section heading. */
  titleAs?: "h2" | "h3";
};

export function EventCard({ event, titleAs: Title = "h2" }: EventCardProps) {
  return (
    <article className="flex items-stretch border border-neutral-200 bg-white transition-colors hover:bg-neutral-50">
      {/* Date column */}
      <div className="flex w-20 shrink-0 flex-col items-center justify-center border-r border-neutral-200 px-3 py-6 text-center sm:w-24 md:w-28">
        <span className="font-belgan text-[2rem] leading-none text-neutral-900 md:text-[2.5rem]">
          {event.day}
        </span>
        <span className="mt-1 font-helvetica text-[11px] text-neutral-500">
          {event.month}
        </span>
        <span className="font-helvetica text-[11px] text-neutral-500">
          {event.year}
        </span>
      </div>

      {/* Content column */}
      <div className="flex flex-1 flex-col justify-center gap-1.5 px-5 py-5 sm:px-8 md:px-10">
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
        <p className="font-helvetica text-xs text-neutral-400">{event.address}</p>

        {/* Description */}
        <p className="mt-1 font-helvetica text-[0.8125rem] leading-relaxed text-neutral-500">
          {event.description}
        </p>
      </div>

      {/* Details link */}
      <div className="flex shrink-0 items-center px-5 sm:px-8 md:px-10">
        {event.href ? (
          <Link
            href={event.href}
            className="group flex items-center gap-1.5 font-helvetica text-xs text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Details
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <span className="flex items-center gap-1.5 font-helvetica text-xs text-neutral-400">
            Details
            <ArrowRight className="size-3.5" />
          </span>
        )}
      </div>
    </article>
  );
}
