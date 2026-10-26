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
      "\"Was macht ein Perser im südburgenländischen Grosspetersdorf? Natürlich Honigwein – oder kurz gesagt: Met! Met zählt zu den ältesten alkoholischen Getränken der Menschheit. In Grosspetersdorf bekommt dieser Klassiker eine ganz besondere Note: Südburgenländischer Honig bildet die Grundlage für ein Getränk, das nach 15 Monaten Reife seinen ganz eigenen Charakter entfaltet. Ganz ohne Schwefel oder andere Zusätze darf der Met zeigen, was in ihm steckt. In der Nase und am Gaumen begegnet uns eine angenehme Honignote, die erfreulicherweise nicht ins Schwere oder Süßliche kippt. Dazu gesellen sich spannende Aromen von Lakritze, Thymian, Orangenzeste und Lebkuchen. Das macht ihn nicht nur solo zu einem interessanten Trinkvergnügen, sondern auch zu einem überraschenden Begleiter für Rotschmierkäse und verschiedenste Desserts. Ein Getränk, das neugierig macht, zum Experimentieren einlädt und ordentlich Spaß ins Glas bringt. Wer schon seit Ewigkeiten keinen Met mehr verkostet hat, sollte das unbedingt nachholen. Vielleicht wird aus der Begegnung mit diesem uralten Getränk ja eine ganz neue Liebesgeschichte!\"",
    name: "Rene Kollegger",
    role: "Gault & Millau . Sommelier des Jahres 2026",
    avatarInitials: "RK",
  },
  {
    quote:
      "\"Der Met von Pertikan ist mit nichts zu vergleichen, was ich in 20 Jahren Weinbewertung verkostet habe. Die Balance zwischen blumigem Honig und der feinen Komplexität seiner langen Reifung ist außergewöhnlich. Ein wahrhaft handwerkliches Produkt, das sich von allem Industriellen abhebt.\"",
    name: "Maria Schreiber",
    role: "Falstaff . Weinredaktion",
    avatarInitials: "MS",
  },
  {
    quote:
      "\"Eine Offenbarung im Glas. Der Honigwein von Pertikan trägt in jedem Schluck die Seele des Südburgenlands in sich – Wildblumenwiesen, Kalksteinhügel und die Geduld echten Handwerks. Wir haben ihm ohne einen Moment des Zögerns unsere Goldmedaille verliehen.\"",
    name: "Thomas Huber",
    role: "Austrian Wine Challenge . Leitung der Jury",
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
      aria-label="Expertenstimmen"
      className="border-b border-neutral-200 bg-white px-6 py-16 sm:px-10 lg:px-16"
    >
      <>
        {/* Heading — use consistent arbitrary values; mixing named scale (text-2xl)
            with arbitrary (text-[1.75rem]) can cause CSS source-order conflicts in
            Tailwind v4 where both utilities have equal specificity */}
        <h2 className="mx-auto mb-12 max-w-3xl text-center font-belgan text-[1.75rem] font-normal text-neutral-900 md:mb-16 md:text-[2.5rem]">
          Von Experten verkostet
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
          aria-label="Positionsanzeige"
        >
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              aria-label={`Zu Folie ${i + 1} wechseln`}
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
