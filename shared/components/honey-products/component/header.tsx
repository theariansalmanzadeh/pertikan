"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function Header() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <motion.header
      ref={ref}
      className="grid grid-cols-1 gap-6 bg-white px-6 py-16 sm:grid-cols-4 md:gap-10 md:px-10 md:py-20 lg:px-14"
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="col-span-1">
        <p className="font-helvetica text-[11px] font-medium tracking-[0.18em] text-neutral-400 uppercase">
          100% Südburgenland • Echte Imkerkunst
        </p>
        <h2 className="mt-3 font-belgan text-3xl font-bold leading-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]">
          Honig –{" "}
          <br className="hidden sm:block" /> Das Gold der Natur
        </h2>
      </div>

      <div className="flex items-end sm:col-span-2 sm:col-start-3">
        <div className="max-w-xl space-y-4 font-helvetica text-sm leading-relaxed text-neutral-400 md:text-[0.9375rem] md:leading-7">
          <p>
            Entdecken Sie die Vielfalt echter Imkerkunst. Ob samtmilder Genuss am Morgenbrot, flüssiges Gold im Tee oder schlichtweg pur mit aromatisch-frischen Noten – unser Honig steht für 100 % unverfälschte Qualität direkt aus dem Südburgenland.
          </p>
          <p>
            Unsere Honigsorten Cremehonig, Akazienhonig, Lindenhonig und Blütenhonig sind je nach Bedarf im klassischen Glas mit 250 g, 500 g, 900 g oder 1 kg sowie für Großverbraucher im praktischen Hobbock mit 10 kg oder 40 kg erhältlich.
          </p>
        </div>
      </div>
    </motion.header>
  );
}
