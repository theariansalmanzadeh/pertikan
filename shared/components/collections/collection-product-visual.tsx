import type { CollectionProduct } from "@/shared/contant/collections";

type CollectionProductVisualProps = {
  visual: CollectionProduct["visual"];
  className?: string;
};

export function CollectionProductVisual({
  visual,
  className = "",
}: CollectionProductVisualProps) {
  if (visual === "jar") {
    return (
      <svg
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <rect x="34" y="18" width="52" height="14" rx="2" stroke="#C4C4C4" strokeWidth="1.4" />
        <path
          d="M40 32h40v10c0 2-1 4-3 4H43c-2 0-3-2-3-4V32Z"
          stroke="#C4C4C4"
          strokeWidth="1.4"
        />
        <path
          d="M30 46h60l-4 96H34L30 46Z"
          stroke="#C4C4C4"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <rect x="44" y="68" width="32" height="48" rx="1" stroke="#C4C4C4" strokeWidth="1.2" />
        <path d="M52 84h16M52 92h16M52 100h10" stroke="#D4D4D4" strokeWidth="1" />
      </svg>
    );
  }

  if (visual === "dropper") {
    return (
      <svg
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <path
          d="M52 18c0-4 4-8 8-8s8 4 8 8v18H52V18Z"
          stroke="#C4C4C4"
          strokeWidth="1.4"
        />
        <rect x="48" y="36" width="24" height="10" rx="1" stroke="#C4C4C4" strokeWidth="1.4" />
        <path
          d="M44 46h32v78c0 10-7 18-16 18s-16-8-16-18V46Z"
          stroke="#C4C4C4"
          strokeWidth="1.4"
        />
        <path d="M52 70h16M52 82h16" stroke="#D4D4D4" strokeWidth="1" />
      </svg>
    );
  }

  if (visual === "candle") {
    return (
      <svg
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <path
          d="M60 22c4 6 4 12 0 18-4-6-4-12 0-18Z"
          stroke="#C4C4C4"
          strokeWidth="1.4"
        />
        <path d="M60 40v10" stroke="#C4C4C4" strokeWidth="1.4" />
        <rect x="38" y="50" width="44" height="78" rx="2" stroke="#C4C4C4" strokeWidth="1.4" />
        <path d="M38 118h44" stroke="#D4D4D4" strokeWidth="1.2" />
        <ellipse cx="60" cy="128" rx="28" ry="6" stroke="#C4C4C4" strokeWidth="1.4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M52 16h16v28c6 10 16 22 16 42v48c0 8-6 14-16 14H52c-10 0-16-6-16-14V86c0-20 10-32 16-42V16Z"
        stroke="#C4C4C4"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M48 18h24" stroke="#C4C4C4" strokeWidth="1.4" />
      <rect x="42" y="92" width="36" height="34" rx="1" stroke="#C4C4C4" strokeWidth="1.2" />
      <path d="M48 104h24M48 112h18" stroke="#D4D4D4" strokeWidth="1" />
    </svg>
  );
}
