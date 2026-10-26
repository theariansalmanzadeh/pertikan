import { Clock, Globe, MapPin, Phone } from "lucide-react";

import type { BranchInfoCard as BranchInfoCardData } from "@/shared/contant/find-us";
import { cn } from "@/lib/utils";

type BranchInfoCardProps = {
  branch: BranchInfoCardData;
  showOpeningHours?: boolean;
};

export function BranchInfoCard({
  branch,
  showOpeningHours = true,
}: BranchInfoCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-fit flex-col border border-neutral-200 bg-white p-6 sm:p-8",
        showOpeningHours ? "pb-15 sm:pb-15" : "pb-6 sm:pb-8"
      )}
    >
      <div className="flex flex-1 flex-col gap-6">
        <div className="grid grid-cols-1 gap-4">
          <h2 className="font-belgan text-2xl font-bold text-neutral-900 md:text-[1.65rem]">
            {branch.name}
          </h2>

          <div className="flex gap-2">
            <MapPin
              className="mt-0.5 size-5 shrink-0 text-neutral-800"
              strokeWidth={1.5}
              aria-hidden
            />
            <div className="font-helvetica text-sm leading-relaxed">
              <p className="text-neutral-800">{branch.street}</p>
              <p className="text-neutral-400">{branch.city}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200" />

        <div className="grid grid-cols-1 gap-2 font-helvetica text-sm text-neutral-700">
          <a
            href={`tel:${branch.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <Phone
              className="size-5 shrink-0 text-neutral-800"
              strokeWidth={1.5}
              aria-hidden
            />
            {branch.phone}
          </a>

          <a
            href={branch.websiteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 underline underline-offset-2 transition-opacity hover:opacity-70"
          >
            <Globe
              className="size-5 shrink-0 text-neutral-800"
              strokeWidth={1.5}
              aria-hidden
            />
            {branch.website}
          </a>
        </div>
      </div>

      {showOpeningHours ? (
        <div className="absolute -bottom-6 left-1/2 w-[90%] -translate-x-1/2 translate-y-1/2 rounded-sm bg-neutral-100 px-5 py-4">
          <div className="mb-3 flex items-center gap-2">
            <Clock
              className="size-4 text-neutral-700"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="font-helvetica text-sm font-medium text-neutral-900">
              Öffnungszeiten
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-2">
            {branch.openingHours.map((row, index) => (
              <div
                key={`${row.label}-${row.value}-${index}`}
                className="flex items-start justify-between gap-4 font-helvetica text-sm text-neutral-500"
              >
                <dt>{row.label}</dt>
                <dd className="text-right">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
    </article>
  );
}
