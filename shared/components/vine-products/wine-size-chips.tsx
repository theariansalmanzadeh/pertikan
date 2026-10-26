import type { WineProduct } from "@/shared/contant/vine";

type WineSizeChipsProps = {
  wine: WineProduct;
  selected: number;
  onSelect: (index: number) => void;
  className?: string;
};

export function WineSizeChips({
  wine,
  selected,
  onSelect,
  className = "",
}: WineSizeChipsProps) {
  return (
    <div
      role="radiogroup"
      aria-label={`Flaschengröße ${wine.name}`}
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {wine.variants.map((variant, index) => {
        const active = index === selected;
        return (
          <button
            key={variant.size}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onSelect(index)}
            className={`h-11 cursor-pointer rounded-full border px-5 font-helvetica text-sm transition-colors ${
              active
                ? "border-neutral-900 text-neutral-900"
                : "border-neutral-200 text-neutral-400 hover:border-neutral-400 hover:text-neutral-600"
            }`}
          >
            {variant.size}
          </button>
        );
      })}
    </div>
  );
}
