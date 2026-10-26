"use client";

import {
  collectionFilters,
  type CollectionCategory,
} from "@/shared/contant/collections";
import { cn } from "@/lib/utils";

type CollectionsFilterProps = {
  activeCategory: CollectionCategory;
  query: string;
  onCategoryChange: (category: CollectionCategory) => void;
  onQueryChange: (query: string) => void;
};

export function CollectionsFilter({
  activeCategory,
  query,
  onCategoryChange,
  onQueryChange,
}: CollectionsFilterProps) {
  return (
    <div className="border-y border-neutral-200 bg-white px-6 py-5 md:px-10 md:py-6 lg:px-16">
      <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <div
          role="tablist"
          aria-label="Kollektionskategorien"
          className="flex flex-wrap items-center gap-2 md:flex-nowrap"
        >
          {collectionFilters.map((filter) => {
            const isActive = filter.id === activeCategory;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onCategoryChange(filter.id)}
                className={cn(
                  "h-9 shrink-0 cursor-pointer rounded-full px-4 font-helvetica text-sm whitespace-nowrap transition-colors",
                  isActive
                    ? "bg-neutral-900 text-white"
                    : "border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-900"
                )}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <label className="block w-full shrink-0 md:w-[300px]">
          <span className="sr-only">Nach Verkostungsnotiz oder Edition filtern</span>
        </label>
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Nach Verkostungsnotiz oder Edition filtern..."
          className="h-9 w-[60vw] md:w-full rounded-full border border-neutral-200 bg-white px-5 font-helvetica text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-400"
        />
      </div>
    </div>
  );
}
