export function CollectionsHeader() {
  return (
    <header className="grid grid-cols-1 items-end gap-8 bg-white px-6 pt-14 pb-12 md:grid-cols-8 md:gap-6 md:px-10 md:pt-16 md:pb-14 lg:px-16">
      <div className="flex flex-col gap-8 md:col-span-5 md:gap-10">
        <p className="font-belgan text-[11px] tracking-[0.14em] text-neutral-400 uppercase md:text-xs">
          Pertikan Cellar &amp; Apiary Editions
        </p>
        <h1 className="font-belgan text-[36px] leading-[1.12] text-neutral-900 md:text-[48px] lg:text-[56px]">
          Crafted by the hive, rested in Southern
          <br />
          Burgenland.
        </h1>
      </div>

      <p className="font-helvetica text-[13.5px] leading-[1.65] text-neutral-500 md:col-span-2 md:col-start-7 md:text-sm">
        Small-batch 18-month aged mead co-fermented with wild Burgenland
        Uhudler grapes, raw dawn-harvested blossom honey, Propolis Tropfen, and
        hand-poured beeswax candles.
      </p>
    </header>
  );
}
