import { CollectionProductVisual } from "@/shared/components/collections/collection-product-visual";
import type { CollectionProduct } from "@/shared/contant/collections";

type CollectionProductCardProps = {
  product: CollectionProduct;
  onAddToBag?: (product: CollectionProduct) => void;
};

export function CollectionProductCard({
  product,
  onAddToBag,
}: CollectionProductCardProps) {
  return (
    <article className="flex h-full flex-col border border-neutral-200 bg-white">
      <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 border-b border-neutral-200 bg-neutral-50/40 px-6 py-10">
        <CollectionProductVisual
          visual={product.visual}
          className="h-[140px] w-auto"
        />
        <p className="text-center font-helvetica text-xs text-neutral-400 md:text-[13px]">
          {product.formatLabel}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="mb-4 flex items-start justify-between gap-4">
          <p className="font-helvetica text-xs leading-snug text-neutral-400 md:text-[13px]">
            {product.releaseLabel}
          </p>
          <p className="shrink-0 font-helvetica text-sm font-medium text-neutral-900">
            {product.price}
          </p>
        </div>

        <h2 className="mb-3 font-belgan text-[22px] leading-[1.2] text-neutral-900 md:text-[24px]">
          {product.name}
        </h2>

        <p className="mb-4 font-helvetica text-[13px] leading-[1.65] text-neutral-500">
          {product.description}
        </p>

        <p className="mb-8 font-helvetica text-[13px] leading-[1.6] text-neutral-600">
          <span className="font-medium text-neutral-900">Notes:</span>{" "}
          {product.notes}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4">
          <p className="font-helvetica text-xs text-neutral-400">
            {product.stockLabel}
          </p>
          <button
            type="button"
            onClick={() => onAddToBag?.(product)}
            className="inline-flex h-10 shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-neutral-900 px-4 font-helvetica text-sm text-white transition-colors hover:bg-neutral-800 py-3"
          >
            Add to Bag
            <span aria-hidden>+</span>
          </button>
        </div>
      </div>
    </article>
  );
}
