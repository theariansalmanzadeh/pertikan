import type { Metadata } from "next";

import { BranchInfoCard } from "@/app/find-us/branch-info-card";
import { FindUsHeader } from "@/app/find-us/header";
import { Cta } from "@/shared/components/Cta";
import {
  apiaryHarvestCards,
  branchInfoCards,
} from "@/shared/contant/find-us";

export const metadata: Metadata = {
  title: "Wo Sie uns finden",
  description:
    "Finden Sie Pertikan Met, Honigwein und rohen Honig in unseren Verkaufsstellen und bei regionalen Partnerhändlern.",
  keywords: [
    "Pertikan Wo Sie uns finden",
    "Pertikan Händler",
    "Pertikan kaufen Österreich",
    "Met Verkaufsstellen",
    "Honigwein Partner",
  ],
};

export default function FindUsPage() {
  return (
    <div className="bg-white">
      <FindUsHeader />

      <section className="px-6 pb-16 md:px-10 md:pb-24 lg:px-14">
        <h2 className="mb-10 font-belgan text-3xl font-bold text-neutral-900 md:mb-12 md:text-4xl">
          Met, Cuvée &amp; Prickelndes
        </h2>
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branchInfoCards.map((branch) => (
            <div
              key={branch.id}
              className="h-full min-h-[400px] sm:min-h-[440px]"
            >
              <BranchInfoCard branch={branch} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24 lg:px-14">
        <h2 className="mb-10 font-belgan text-3xl font-bold text-neutral-900 md:mb-12 md:text-4xl">
          Ernten der Imkerei
        </h2>
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apiaryHarvestCards.map((branch) => (
            <BranchInfoCard
              key={branch.id}
              branch={branch}
              showOpeningHours={false}
            />
          ))}
        </div>
      </section>

      <Cta
        eyebrow="Partner werden"
        title={() => <>Interesse, Pertikan anzubieten?</>}
        description="Wir arbeiten eng mit unabhängigen Sommeliers, Gourmetkellern und Boutique-Lieferanten an zugeteilten saisonalen Chargen zusammen."
        href="/contact-us"
        buttonLabel="Großhandel anfragen"
      />
    </div>
  );
}
