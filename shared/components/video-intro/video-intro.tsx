"use client";

import { motion, useInView, type Variants } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";

import { Button } from "@/shared/components/ui/button";
import { VideoIntroSource } from "@/shared/components/video-intro/video-intro-source";

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

type VideoIntroProps = {
  src: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  href: string;
  buttonLabel?: string;
};

export function VideoIntro({
  src,
  eyebrow,
  title,
  description,
  href,
  buttonLabel = "Zum Shop",
}: VideoIntroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.6 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isInView) {
      video.pause();
      return;
    }

    video.play().catch((error: unknown) => {
      if (error instanceof DOMException && error.name === "AbortError") return;
      console.error("Could not play video intro", error);
    });
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      aria-label={eyebrow}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-900 px-6 py-20 text-center md:px-10 lg:px-14"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        muted
        playsInline
        loop
        preload="metadata"
        aria-hidden="true"
      >
        <VideoIntroSource src={src} />
      </video>
      <div className="absolute inset-0 bg-black/45" />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-white"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.6, once: true }}
      >
        <p className="font-helvetica text-[11px] font-medium tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-belgan text-3xl leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-helvetica text-sm leading-relaxed text-white/85 md:text-[0.9375rem] md:leading-7">
          {description}
        </p>

        <Button
          asChild
          className="mt-10 h-11 rounded-full bg-white px-7 font-helvetica text-sm font-medium text-neutral-900 hover:bg-neutral-100"
        >
          <Link href={href}>{buttonLabel}</Link>
        </Button>
      </motion.div>
    </section>
  );
}
