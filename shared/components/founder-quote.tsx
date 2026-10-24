import { aboutFounder } from "@/shared/contant/about";

export function FounderQuote() {
  return (
    <section className="relative grid grid-cols-1 border-b border-border">
      <div
        className="absolute inset-0 z-0 min-h-[480px] bg-neutral-100 md:min-h-[560px]"
        aria-label="Founder image placeholder"
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
          It&apos;s 5 a.m. in Aligudarz.
        </h2>

        <p className="mt-6 font-belgan text-lg font-bold leading-snug text-neutral-900 md:text-xl md:leading-relaxed">
          Before the sun clears the jagged limestone ridges of the Zagros
          Mountains, a young Mohammad Akbari stands beside his father in the
          cold morning stillness.
        </p>

        <div className="mt-8 space-y-5 font-helvetica text-sm leading-relaxed text-neutral-500 md:text-[0.9375rem] md:leading-7">
          <p>
            His father teaches him that beekeeping is stewardship, not
            ownership — a quiet responsibility summed up in the words he still
            carries:{" "}
            <em>
              &ldquo;Haiwanat be daste to negah mikonan&rdquo; — the animals look
              to your hand.
            </em>
          </p>
          <p>
            Decades later, in the rolling hills of Southern Burgenland,
            Austria, that same morning discipline became Pertikan Beekeeping —
            founded in Grosspetersdorf as a house of pure honey and unhurried
            mead.
          </p>
          <p>
            Today the craft is still measured by wooden hives, raw blossom
            honey, and mead rested for eighteen months until aroma and character
            are fully formed.
          </p>
        </div>
      </div>
    </section>
  );
}
