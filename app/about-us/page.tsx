import type { Metadata } from "next";

import { AboutImageText } from "@/shared/components/about-image-text";
import { AboutStory } from "@/shared/components/about-story";
import { AboutTextFounder } from "@/shared/components/about-text-founder";
import { HoneyProducts } from "@/shared/components/honey-products/honey-products";
import { VineProducts } from "@/shared/components/vine-products/vine-products";
import { ContactUs } from "@/shared/components/contact-us";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Meet Mohammad Akbari and the story of Pertikan Beekeeping — from Aligudarz to Southern Burgenland, crafting pure mead and honey wine with patience and care.",
  keywords: [
    "Pertikan story",
    "Mohammad Akbari",
    "Pertikan Beekeeping",
    "mead maker Austria",
    "Grosspetersdorf wine",
    "Aligudarz beekeeping",
    "craft mead founder",
    "about Pertikan wine",
  ],
};

export default function AboutUsPage() {
  return (
    <>
      <AboutStory />
      <AboutImageText />
      <AboutTextFounder />
      <ContactUs />
    </>
  );
}
