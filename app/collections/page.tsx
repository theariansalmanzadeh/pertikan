import type { Metadata } from "next";

import { CollectionsSection } from "@/shared/components/collections/collections-section";

export const metadata: Metadata = {
  title: "Kollektionen",
  description:
    "Entdecken Sie die Keller- & Imkerei-Editionen von Pertikan — gereifter Met, roher Blütenhonig, Propolis Tropfen und handgegossene Bienenwachskerzen aus dem Südburgenland.",
  keywords: [
    "Pertikan Kollektionen",
    "Met Shop",
    "Uhudler Met",
    "Roher Honig",
    "Propolis Tropfen",
    "Bienenwachskerzen",
    "Burgenländer Wein",
  ],
};

export default function CollectionsPage() {
  return <CollectionsSection />;
}
