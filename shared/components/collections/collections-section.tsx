"use client";

import { useMemo, useState } from "react";

import { CollectionProductCard } from "@/shared/components/collections/collection-product-card";
import { CollectionsFilter } from "@/shared/components/collections/collections-filter";
import { CollectionsHeader } from "@/shared/components/collections/collections-header";
import {
  COLLECTION_PRODUCTS,
  type CollectionCategory,
  type CollectionProduct,
} from "@/shared/contant/collections";

function matchesQuery(product: CollectionProduct, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return [
    product.name,
    product.description,
    product.notes,
    product.releaseLabel,
    product.formatLabel,
  ]
    .join(" ")
    .toLowerCase()
    .includes(q);
}

export function CollectionsSection() {
  const [activeCategory, setActiveCategory] =
    useState<CollectionCategory>("all");
  const [query, setQuery] = useState("");

  const products = useMemo(() => {
    return COLLECTION_PRODUCTS.filter((product) => {
      const categoryMatch =
        activeCategory === "all" || product.category === activeCategory;
      return categoryMatch && matchesQuery(product, query);
    });
  }, [activeCategory, query]);

  const handleAddToBag = (product: CollectionProduct) => {
    window.open(product.id ? `#shop-${product.id}` : "#shop", "_self");
  };

  return (
    <section
      id="collections"
      aria-label="Pertikan Cellar and Apiary Editions"
      className="bg-white"
    >
      <CollectionsHeader />
      <CollectionsFilter
        activeCategory={activeCategory}
        query={query}
        onCategoryChange={setActiveCategory}
        onQueryChange={setQuery}
      />

      <div className="px-6 md:px-16">
        {products.length === 0 ? (
          <p className="py-16 text-center font-helvetica text-sm text-neutral-400">
            No editions match this filter.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 py-10">
            {products.map((product) => (
              <CollectionProductCard
                key={product.id}
                product={product}
                onAddToBag={handleAddToBag}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
