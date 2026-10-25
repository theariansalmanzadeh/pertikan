export function ApiaryCollectionHeader() {
  return (
    <div className="px-6 pb-10 pt-14 md:px-16 md:pb-14 md:pt-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="text-center md:text-left">
          <p className="mb-3 font-helvetica text-[11px] tracking-[0.04em] text-neutral-400 uppercase">
            The Apiary Collection
          </p>
          <h2 className="font-belgan text-4xl leading-[1.08] text-neutral-900 md:text-[44px]">
            <span className="md:hidden">
              Honey
              <br />
              Nature&apos;s Gold.
            </span>
            <span className="hidden md:inline">Honey — Nature&apos;s Gold.</span>
          </h2>
        </div>

        <p className="mx-auto max-w-[340px] text-center font-helvetica text-[13px] leading-[1.6] text-neutral-500 md:mx-0 md:max-w-[540px] md:text-left">
          100% unadulterated beekeeping artistry directly from Southern
          Burgenland. Before a single drop of mead is fermented, our bees gather
          the seasonal nectar of meadows, robinia groves, and linden avenues
          around Grosspetersdorf.
        </p>
      </div>
    </div>
  );
}
