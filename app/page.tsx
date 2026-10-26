import type { Metadata } from "next";

import { Cta } from "@/shared/components/Cta";
import { Features } from "@/shared/components/features";
import { HomeEventsSection } from "@/shared/components/events/home-events-section";
import { Hero } from "@/shared/components/hero";
import { HoneyProducts } from "@/shared/components/honey-products/honey-products";
import { VineProducts } from "@/shared/components/vine-products/vine-products";
import { Testimonial } from "@/shared/components/testimonial";

export const metadata: Metadata = {
  title: {
    absolute: "Pertikan | Handwerklicher Met & Wein Shop",
  },
  description:
    "Entdecken Sie den Online-Weinshop von Pertikan — preisgekrönter Met, im Fass gereifter Honigwein und reiner Honig ohne chemische Zusätze. Jetzt die Kollektion entdecken.",
  keywords: [
    "Pertikan Weinshop",
    "Met online kaufen",
    "Honigwein kaufen",
    "Met des Jahres",
    "Fassgereifter Met",
    "Sulfitfreier Wein",
    "Österreichischer Craft-Wein",
    "Wein Onlineshop",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <Features />
      <HomeEventsSection />
      <VineProducts />
      <Cta
        eyebrow="Genussrituale & Gastronomie"
        title={() => (
          <>
            <span className="text-neutral-900">Gemacht für Momente, die bleiben.</span>
          </>
        )}
        description="Ob gut gekühlt als leuchtender Aperitif, zu gereiftem Almkäse und würzigem burgenländischem Schinken oder langsam genossen als abendlicher Digestif — Honigwein belohnt eine Tischkultur ohne Eile."
        href="#shop"
      />
      <HoneyProducts />
      <Cta
        eyebrow="Genussrituale & Gastronomie"
        title={() => (
          <>
            <span className="text-neutral-900">Entdecken Sie Ihre </span>
            <span className="text-[#c5b395]">
              <span className="font-light italic">neue</span> Tradition.
            </span>
          </>
        )}
        description="Ob gut gekühlt als leuchtender Aperitif, zu gereiftem Almkäse und würzigem burgenländischem Schinken oder langsam genossen als abendlicher Digestif — Honigwein belohnt eine Tischkultur ohne Eile."
        href="#shop"
      />
      <Testimonial />
    </div>
  );
}
