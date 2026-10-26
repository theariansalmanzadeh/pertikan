export function FindUsHeader() {
  return (
    <header className="flex flex-col gap-8 bg-white px-6 py-16 sm:flex-row sm:items-end sm:justify-between md:px-10 md:py-20 lg:px-14">
      <div className="flex flex-col gap-2">
        <p className="font-helvetica text-sm text-neutral-400">Wo Sie uns finden</p>
        <h1 className="font-belgan text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
          Verkaufsstellen &amp; Partner
        </h1>
      </div>

      <p className="max-w-md font-helvetica text-sm leading-relaxed text-neutral-400 md:text-[0.9375rem] md:leading-7">
        Entdecken Sie unsere Jahrgänge, Mete und saisonalen rohen Honig direkt
        aus der Imkerei oder über unsere sorgfältig ausgewählten regionalen
        Partner und Händler.
      </p>
    </header>
  );
}
