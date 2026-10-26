export function ApiaryCollectionHeader() {
  return (
    <div className="px-6 pb-10 pt-14 md:px-16 md:pb-14 md:pt-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="text-center md:text-left">
          <p className="mb-3 font-helvetica text-[11px] tracking-[0.04em] text-neutral-400 uppercase">
            Die Imkerei-Kollektion
          </p>
          <h2 className="font-belgan text-4xl leading-[1.08] text-neutral-900 md:text-[44px]">
            <span className="md:hidden">
              Honig <br /> Gold der Natur.
            </span>
            <span className="hidden md:inline">Honig — Gold der Natur.</span>
          </h2>
        </div>

        <p className="mx-auto max-w-[340px] text-center font-helvetica text-[13px] leading-[1.6] text-neutral-500 md:mx-0 md:max-w-[540px] md:text-left">
          100 % unverfälschte Imkerkunst direkt aus dem Südburgenland. Noch bevor ein einziger Tropfen Met vergoren wird, sammeln unsere Bienen den Saisonnektar der Wiesen, Robinienhaine und Lindenalleen rund um Grosspetersdorf.
        </p>
      </div>
    </div>
  );
}
