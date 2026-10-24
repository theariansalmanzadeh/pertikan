import type { Metadata } from "next";

import { Cta } from "@/shared/components/Cta";
import { Features } from "@/shared/components/features";
import { Footer } from "@/shared/components/footer";
import { FounderQuote } from "@/shared/components/founder-quote";
import { Hero } from "@/shared/components/hero";
import { HoneyProducts } from "@/shared/components/honey-products/honey-products";
import { VineProducts } from "@/shared/components/vine-products/vine-products";

export const metadata: Metadata = {
  title: {
    absolute: "Pertikan | Craft Mead & Wine Shop",
  },
  description:
    "Discover Pertikan's online wine shop — award-winning mead, barrel-aged honey wine, and pure honey crafted without chemical additives. Shop the collection.",
  keywords: [
    "Pertikan wine shop",
    "buy mead online",
    "honey wine for sale",
    "Mead of the Year",
    "barrel aged mead",
    "sulfite free wine",
    "Austrian craft wine",
    "wine ecommerce",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <Features />
      <Cta
        eyebrow="Serving Rituals & Gastronomy"
        title="Made for moments worth keeping."
        description="Whether poured chilled as a luminous aperitif, paired beside aged alpine cheeses and spicy cured Burgenland ham, or savored slowly as an evening digestif, honey wine rewards unhurried table craft."
        href="#shop"
      />
      <VineProducts />
      <HoneyProducts />
      <Cta
        eyebrow="Serving Rituals & Gastronomy"
        title="Made for moments worth keeping."
        description="Whether poured chilled as a luminous aperitif, paired beside aged alpine cheeses and spicy cured Burgenland ham, or savored slowly as an evening digestif, honey wine rewards unhurried table craft."
        href="#shop"
      />
      <FounderQuote />
      <Footer />
    </div>
  );
}
