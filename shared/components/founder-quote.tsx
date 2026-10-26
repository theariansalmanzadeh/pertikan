import { aboutFounder } from "@/shared/contant/about";

export function FounderQuote() {
  return (
    <section className="relative grid grid-cols-1 border-b border-border">
      <div
        className="absolute inset-0 z-0 min-h-[480px] bg-neutral-100 md:min-h-[560px]"
        aria-label="Platzhalter für Gründerbild"
      >
        {/* Image goes here */}
      </div>

      <div className="relative z-10 flex flex-col justify-center bg-white px-6 pt-28 pb-12 sm:px-10 sm:pt-32 sm:pb-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="absolute top-0 left-0 border-b border-border px-6 py-6 sm:px-10 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <div
              className="size-12 shrink-0 rounded-full bg-neutral-200"
              aria-hidden
            />
            <div>
              <p className="font-belgan text-lg font-bold text-neutral-900 md:text-xl">
                {aboutFounder.name}
              </p>
              <p className="mt-0.5 font-helvetica text-xs tracking-wide text-neutral-400 md:text-sm">
                {aboutFounder.title}
              </p>
            </div>
          </div>
        </div>

        <h2 className="font-belgan text-3xl font-bold leading-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]">
          Es ist 5 Uhr morgens in Aligudarz.
        </h2>

        <p className="mt-6 font-belgan text-lg font-bold leading-snug text-neutral-900 md:text-xl md:leading-relaxed">
          Noch bevor die Sonne über die zerklüfteten Kalksteinkämme des Zagros-Gebirges steigt, steht der junge Mohammad Akbari an der Seite seines Vaters in der kalten Morgenstille.
        </p>

        <div className="mt-8 space-y-5 font-helvetica text-sm leading-relaxed text-neutral-500 md:text-[0.9375rem] md:leading-7">
          <p>
            Sein Vater lehrt ihn, dass Imkerei Fürsorge bedeutet, nicht Besitz – eine stille Verantwortung, zusammengefasst in den Worten, die er bis heute in sich trägt:{" "}
            <em>
              &bdquo;Haiwanat be daste to negah mikonan&ldquo; – die Tiere schauen auf deine Hand.
            </em>
          </p>
          <p>
            Jahrzehnte später, in den sanften Hügeln des Südburgenlands in Österreich, wurde aus derselben morgendlichen Disziplin Pertikan Beekeeping – gegründet in Grosspetersdorf als Haus für reinen Honig und unhastigen Met.
          </p>
          <p>
            Noch heute misst sich das Handwerk an hölzernen Bienenstöcken, rohem Blütenhonig und Met, der achtzehn Monate ruht, bis Aroma und Charakter voll ausgebildet sind.
          </p>
        </div>
      </div>
    </section>
  );
}
