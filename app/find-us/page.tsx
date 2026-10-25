import type { Metadata } from "next";

import { BranchInfoCard } from "@/app/find-us/branch-info-card";
import { FindUsHeader } from "@/app/find-us/header";
import { Cta } from "@/shared/components/Cta";
import {
  apiaryHarvestCards,
  branchInfoCards,
} from "@/shared/contant/find-us";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find Pertikan mead, honey wine, and raw honey at our sales outlets and regional partner merchants.",
  keywords: [
    "Pertikan find us",
    "Pertikan retailers",
    "buy Pertikan Austria",
    "mead sales outlets",
    "honey wine partners",
  ],
};

export default function FindUsPage() {
  return (
    <div className="bg-white">
      <FindUsHeader />

      <section className="px-6 pb-16 md:px-10 md:pb-24 lg:px-14">
        <h2 className="mb-10 font-belgan text-3xl font-bold text-neutral-900 md:mb-12 md:text-4xl">
          Mead, Cuvée &amp; Sparkling
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
          Apiary Harvests
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
        eyebrow="Partner with Us"
        title={() => <>Interested in Offering Pertikan?</>}
        description="We collaborate closely with independent sommeliers, fine dining cellars, and boutique purveyors on allocated seasonal batches."
        href="/contact-us"
        buttonLabel="Inquire for Wholesale"
      />
    </div>
  );
}
