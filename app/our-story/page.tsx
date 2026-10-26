import type { Metadata } from "next";

import { AboutImageText } from "@/shared/components/about-image-text";
import { AboutStory } from "@/shared/components/about-story";
import { AboutTextFounder } from "@/shared/components/about-text-founder";
import { aboutChapters, aboutIntro } from "@/shared/contant/about";

export const metadata: Metadata = {
  title: "Meine Geschichte",
  description: aboutIntro.subtitle,
  keywords: [
    "Pertikan Geschichte",
    "Mohammad Akbari",
    "Pertikan Beekeeping",
    "Metmacher Österreich",
    "Grosspetersdorf Wein",
    "Aligudarz Imkerei",
    "Craft-Met Gründer",
    "Über Pertikan Wein",
  ],
};

export default function AboutUsPage() {
  const [roots, beekeeping, homeland] = aboutChapters;

  return (
    <>
      <header className="bg-white px-6 pt-16 pb-4 md:px-10 md:pt-20 lg:px-14">
        <h1 className="font-belgan text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
          {aboutIntro.title}
        </h1>
        <p className="mt-4 max-w-2xl font-helvetica text-sm leading-relaxed text-neutral-400 md:text-[0.9375rem] md:leading-7">
          {aboutIntro.subtitle}
        </p>
      </header>

      <AboutStory chapter={roots} />
      <AboutImageText chapter={beekeeping} />
      <AboutTextFounder chapter={homeland} />
    </>
  );
}
