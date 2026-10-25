import type { Metadata } from "next";

import { CollectionsSection } from "@/shared/components/collections/collections-section";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Shop Pertikan Cellar & Apiary Editions — aged mead, raw blossom honey, propolis tropfen, and hand-poured beeswax candles from Southern Burgenland.",
  keywords: [
    "Pertikan collections",
    "mead shop",
    "Uhudler mead",
    "raw honey",
    "propolis tropfen",
    "beeswax candles",
    "Burgenland wine",
  ],
};

export default function CollectionsPage() {
  return <CollectionsSection />;
}
