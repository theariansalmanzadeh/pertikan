import { EventsList } from "@/shared/components/events/events-list";

export function HomeEventsSection() {
  return (
    <section
      aria-labelledby="home-events-heading"
      className="border-t border-neutral-200 bg-white px-6 py-16 sm:px-10 md:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-[1312px]">
        <header className="text-center">
          <p className="font-helvetica text-[11px] font-medium tracking-[0.18em] text-neutral-400 uppercase">
            Events
          </p>
          <h2
            id="home-events-heading"
            className="mx-auto mt-3 max-w-4xl font-belgan text-3xl leading-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]"
          >
            Kommende Verkostungen, Zusammenkünfte &amp; saisonale Feste
          </h2>
        </header>

        <div className="mt-10 md:mt-14 [&>section>article+article]:mt-5">
          <EventsList limit={2} titleAs="h3" />
        </div>
      </div>
    </section>
  );
}
