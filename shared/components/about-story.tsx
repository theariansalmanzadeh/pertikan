export function AboutStory() {
  return (
    <section className="grid grid-cols-2">
      <div className="flex flex-col justify-center bg-white px-6 py-12 sm:px-10 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <h1 className="font-belgan text-3xl font-bold leading-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]">
          It&apos;s 5 a.m. in Aligudarz.
        </h1>

        <h2 className="mt-6 font-belgan text-lg font-bold leading-snug text-neutral-900 md:text-xl md:leading-relaxed">
          Before the sun clears the jagged limestone ridges of the Zagros
          Mountains, a young Mohammad Akbari stands beside his father in the
          cold morning stillness.
        </h2>

        <div className="mt-8 space-y-5 font-helvetica text-sm leading-relaxed text-neutral-500 md:text-[0.9375rem] md:leading-7">
          <p>
            For generations, the Akbari family had kept bees in the wildflower
            meadows of western Iran — not as a business, but as a quiet pact
            with the land. Mohammad learned early that honey is not extracted;
            it is earned, patiently, season by season.
          </p>
          <p>
            In those mountains he learned stewardship of animals and respect for
            what the hive gives freely. That education shaped everything that
            followed — from the first frames he built with his father to the
            barrels that rest in Austria today.
          </p>
          <p>
            In 2018, Mohammad moved to Southern Burgenland. He carried with him
            a single wooden hive frame and a lifetime of mountain knowledge.
            What began as a homesick ritual grew into Pertikan Beekeeping: a
            house dedicated to pure, unhurried mead and honey.
          </p>
          <p>
            From the highlands of Aligudarz to the meadows of Austria, the craft
            remains the same. Wake early. Listen to the bees. Let time do the
            rest.
          </p>
        </div>
      </div>

      <div
        className="relative min-h-full bg-neutral-100"
        aria-label="About image placeholder"
      >
        {/* Image goes here */}
      </div>
    </section>
  );
}
