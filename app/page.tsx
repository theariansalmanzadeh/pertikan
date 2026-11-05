import type { Metadata } from "next";

import { Features } from "@/shared/components/features";
import { HomeEventsSection } from "@/shared/components/events/home-events-section";
import { Hero } from "@/shared/components/hero";
import { HoneyProducts } from "@/shared/components/honey-products/honey-products";
import { VineProducts } from "@/shared/components/vine-products/vine-products";
import { Testimonial } from "@/shared/components/testimonial";
import { VideoIntro } from "@/shared/components/video-intro/video-intro";

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
      <VideoIntro
        src="/videos/bg-video-1.mp4"
        eyebrow="Genussrituale & Gastronomie"
        title="Gemacht für Momente, die bleiben."
        description="Ob gut gekühlt als leuchtender Aperitif, zu gereiftem Almkäse und würzigem burgenländischem Schinken oder langsam genossen als abendlicher Digestif — Honigwein belohnt eine Tischkultur ohne Eile."
        href="#shop"
      />
      <HoneyProducts />
      <VideoIntro
        src="/videos/bg-video-2.mp4"
        eyebrow="Genussrituale & Gastronomie"
        title={
          <>
            <span>Entdecken Sie Ihre </span>
            <span className="text-[#e7cda5]">
              <span className="font-light italic">neue</span> Tradition.
            </span>
          </>
        }
        description="Ob gut gekühlt als leuchtender Aperitif, zu gereiftem Almkäse und würzigem burgenländischem Schinken oder langsam genossen als abendlicher Digestif — Honigwein belohnt eine Tischkultur ohne Eile."
        href="#shop"
      />
      <Testimonial />
    </div>
  );
}
