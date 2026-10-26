"use client";

import type { HoneyProduct } from "@/shared/contant/honey-products";
import type { ScrollSequenceState } from "@/shared/utils/scroll-math";
import { HoneyJar3D } from "@/shared/components/apiary-collection/honey-jar-3d";

type DesktopHoneyTrackProps = {
  products: HoneyProduct[];
  seqState: ScrollSequenceState;
  reducedMotion: boolean;
  viewportWidth: number;
  desktopTranslateX: number;
  totalTrackWidth: number;
  onSelectIndex: (index: number) => void;
  onBuyHoney: (product: HoneyProduct) => void;
};

export function DesktopHoneyTrack({
  products,
  seqState,
  reducedMotion,
  viewportWidth,
  desktopTranslateX,
  totalTrackWidth,
  onSelectIndex,
  onBuyHoney,
}: DesktopHoneyTrackProps) {
  return (
    <div className="hidden w-full overflow-hidden border-y border-neutral-200 md:block">
      <div
        style={{
          width: `${totalTrackWidth}px`,
          transform: `translate3d(${desktopTranslateX.toFixed(1)}px, 0, 0)`,
        }}
        className="grid grid-cols-3 will-change-transform"
      >
        {products.map((honey, idx) => {
          const itemState = seqState.items[idx];
          const jarRotation = reducedMotion ? 0 : seqState.rotationY;
          const jarScaleOffset = reducedMotion
            ? 0
            : itemState.isActive
              ? 0.015
              : 0;

          return (
            <article
              key={honey.id}
              onClick={() => onSelectIndex(idx)}
              className="flex w-[600px] cursor-pointer flex-col border-r border-neutral-200 bg-white last:border-r-0"
            >
              <div className="flex h-[430px] items-center justify-center border-b border-neutral-200 p-8">
                <div className="h-[320px] w-[300px]">
                  {viewportWidth >= 768 ? (
                    <HoneyJar3D
                      product={honey}
                      rotationY={jarRotation}
                      tiltZ={itemState.isActive ? seqState.tiltZ * 0.6 : 0}
                      scaleOffset={jarScaleOffset}
                    />
                  ) : null}
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between px-16 pt-14 pb-14">
                <div>
                  <h3 className="mb-2 font-belgan text-4xl leading-[1.1] text-neutral-900">
                    {honey.name}
                  </h3>
                  <p className="mb-6 font-helvetica text-[13px] text-neutral-400">
                    {honey.subtitle}
                  </p>

                  <div className="mb-[22px]">
                    <p className="mb-1 font-helvetica text-[13px] text-neutral-400">
                      Aroma &amp; Gaumen
                    </p>
                    <p className="font-helvetica text-[13px] leading-[1.6] text-neutral-700">
                      {honey.aromaAndPalate}
                    </p>
                  </div>

                  <div className="mb-[22px]">
                    <p className="mb-1 font-helvetica text-[13px] text-neutral-400">
                      Textur &amp; Kristallisation
                    </p>
                    <p className="font-helvetica text-[13px] leading-[1.6] text-neutral-700">
                      {honey.textureAndCrystallization}
                    </p>
                  </div>

                  <div className="mb-9">
                    <p className="mb-1 font-helvetica text-[13px] text-neutral-400">
                      Tisch &amp; kulinarisches Ritual
                    </p>
                    <p className="font-helvetica text-[13px] leading-[1.6] text-neutral-700">
                      {honey.tableAndCulinaryRitual}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onBuyHoney(honey);
                  }}
                  className="h-[46px] w-full shrink-0 cursor-pointer rounded-full bg-neutral-900 font-helvetica text-xs text-white transition-colors hover:bg-neutral-800"
                >
                  Jetzt kaufen
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
