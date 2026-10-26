"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/shared/components/ui/carousel";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarInitials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "\"What's a Persian doing in Grosspetersdorf, in southern Burgenland? Making honey wine, of course - or in short: mead! Mead is one of the oldest alcoholic beverages known to humankind. In Grosspetersdorf, this classic gets a very special twist: Southern Burgenland honey forms the basis for a drink that develops its own unique character after 15 months of maturation. Completely free of sulfur or other additives, the mead is allowed to show what it's made of. On the nose and palate, we encounter a pleasant honey note that, thankfully, doesn't tip over into heavy or overly sweet flavors. This is complemented by exciting aromas of licorice, thyme, orange zest, and gingerbread. This makes it not only an interesting drink on its own, but also a surprising accompaniment to red smear cheese and a variety of desserts. A drink that sparks curiosity, invites experimentation, and brings a whole lot of fun to the glass. Anyone who hasn't tasted mead in ages should definitely remedy that. Perhaps this encounter with this ancient beverage will spark a whole new love affair!\"",
    name: "Rene Kollegger",
    role: "Gault & Millau . Sommelier of the Year 2026",
    avatarInitials: "RK",
  },
  {
    quote:
      "\"Pertikan's mead is unlike anything I've tasted in my 20 years of wine judging. The balance between floral honey and the subtle complexity of its long maturation is extraordinary. A truly artisanal product that stands apart from anything produced industrially.\"",
    name: "Maria Schreiber",
    role: "Falstaff . Wine Editor",
    avatarInitials: "MS",
  },
  {
    quote:
      "\"A revelation in a glass. The honey wine from Pertikan carries the soul of Southern Burgenland in every sip - wildflower meadows, limestone hills, and the patience of a true craftsman. We awarded it our Gold Medal without a moment's hesitation.\"",
    name: "Thomas Huber",
    role: "Austrian Wine Challenge . Head Judge",
    avatarInitials: "TH",
  },
];

export function Testimonial() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      aria-label="Expert Testimonials"
      className="border-b border-neutral-200 bg-white px-6 py-16 sm:px-10 lg:px-16"
    >
      <>
        {/* Heading — use consistent arbitrary values; mixing named scale (text-2xl)
            with arbitrary (text-[1.75rem]) can cause CSS source-order conflicts in
            Tailwind v4 where both utilities have equal specificity */}
        <h2 className="mx-auto mb-12 max-w-3xl text-center font-belgan text-[1.75rem] font-normal text-neutral-900 md:mb-16 md:text-[2.5rem]">
          As Tasted by Experts
        </h2>

        {/* Carousel — wrap in a padded div so the absolute prev/next buttons
            have room to render outside the content without getting clipped.
            px-10 sm:px-12 gives ~40-48px on each side; the default button
            offset is -left-12 / -right-12 (3rem = 48px), so they land just
            inside the wrapper on sm+ and slightly beyond on mobile (still
            within the section's own padding). */}
        {/* <div className="relative mx-auto max-w-[800px] px-10 sm:px-12"> */}
        <Carousel
          setApi={setApi}
          opts={{ loop: false }}
          className="max-w-[1000px] mx-auto"
        >
          <CarouselContent className="w-full" >
            {testimonials.map((t, index) => (
              <CarouselItem key={index} >
                <div className="px-2">
                  {/* Quote */}
                  <blockquote className="font-helvetica text-sm leading-relaxed text-neutral-700 md:text-[0.9375rem] md:leading-7">
                    {t.quote}
                  </blockquote>

                  {/* Reviewer */}
                  <div className="mt-8 flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      aria-hidden="true"
                      className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-200 font-belgan text-sm font-bold text-neutral-600"
                    >
                      {t.avatarInitials}
                    </div>
                    <div>
                      <p className="font-belgan text-lg font-bold text-neutral-900">
                        {t.name}
                      </p>
                      <p className="mt-0.5 font-helvetica text-xs tracking-wide text-neutral-400">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* No className override — let the component use its default
                -left-12 / -right-12 which aligns with the wrapper padding */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* </div> */}

        {/* Dot indicators */}
        <div
          className="mt-8 flex items-center justify-center gap-2"
          aria-label="Slide indicators"
        >
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current
                ? "w-6 bg-neutral-900"
                : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
            />
          ))}
        </div>
      </>
    </section>
  );
}
