"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const features = [
  {
    label: "Awarded Excellence",
    title: "Mead of the Year 2026",
    description: "Mitra — Austria's Best Mead",
  },
  {
    label: "Barrel Maturation",
    title: "15 to 18 Months",
    description: "Patient oak rest until full aroma",
  },
  {
    label: "Purity Standard",
    title: "0% Chemical Additives",
    description: "Zero sulfites in pure honey wine",
  },
] as const;

export function Features() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });

  return (
    <section
      ref={ref}
      className="bg-white px-6 py-5 sm:py-20 md:px-10 md:py-28 lg:px-14"
    >
      <motion.div
        className="mx-auto grid grid-cols-1 gap-10 sm:grid-cols-3"
        initial={{ opacity: 0, y: 48 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.label}
            className="text-center sm:w-100"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.65,
              delay: isInView ? index * 0.12 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="font-helvetica text-[11px] font-medium tracking-[0.18em] text-neutral-800 uppercase">
              {feature.label}
            </p>
            <h2 className="mt-3 font-belgan text-3xl leading-tight text-black md:text-[2rem] lg:text-[2.15rem]">
              {feature.title}
            </h2>
            <p className="mt-3 font-helvetica text-sm text-neutral-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
