export type VineSpec = {
  label: string;
  value: string;
};

export type VineProduct = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tastingNotes: {
    label: string;
    body: string;
  };
  specs: VineSpec[];
  image: {
    src: string;
    alt: string;
  };
  href: string;
};

export const vineProducts: VineProduct[] = [
  {
    id: "mitra",
    title: "Mitra",
    subtitle: "Honey Wine — The Original",
    description:
      "One of humanity's oldest alcoholic beverages, brewed according to an old recipe using fine honey from Pertikan's own apiary and pure water.",
    tastingNotes: {
      label: "Tasting Notes",
      body: "Deep warm blossom honey on the nose, evolving into structured beeswax, dried meadow herbs, and a long, velvety amber finish developed through patient barrel rest.",
    },
    specs: [
      {
        label: "Maturation",
        value: "15–18 Months Barrel Aged",
      },
      {
        label: "Purity & Sulfites",
        value: "Zero Chemical Additives · No Sulfites",
      },
      {
        label: "Recommended Service",
        value: "10–14 °C · Tulip White Wine or Digestif Stem",
      },
    ],
    image: {
      src: "/images/vine.png",
      alt: "Mitra honey wine bottle",
    },
    href: "#shop",
  },
  {
    id: "mitra-frizzante",
    title: "Mitra Frizzante",
    subtitle: "Sparkling Honey Wine",
    description:
      "A refreshing, sparkling interpretation of traditional mead, crafted from fine honey and pure water, then refined with delicate carbonation.",
    tastingNotes: {
      label: "Tasting Notes",
      body: "Golden honey warmth meets lively effervescence, with a delicate sweetness and a bright, refreshing finish.",
    },
    specs: [
      {
        label: "Maturation",
        value: "15–18 Months Barrel Aged",
      },
      {
        label: "Purity & Sulfites",
        value: "Zero Chemical Additives · No Sulfites",
      },
      {
        label: "Recommended Service",
        value: "Well Chilled · Sparkling Wine Glass",
      },
    ],
    image: {
      src: "/images/vine.png",
      alt: "Mitra Frizzante sparkling honey wine bottle",
    },
    href: "#shop",
  },
  {
    id: "u-and-me",
    title: "U&Me",
    subtitle: "Uhudler & Met — Sweet & Wild",
    description:
      "A meeting of wild Southern Burgenland Uhudler grapes and matured mead from Pertikan's apiary — sweet, aromatic, and distinctly of this land.",
    tastingNotes: {
      label: "Tasting Notes",
      body: "Woodland strawberry and blackcurrant lift into matured honey wine, with a soft, lingering sweetness and a wild berry finish.",
    },
    specs: [
      {
        label: "Maturation",
        value: "15 Months Matured Mead Base",
      },
      {
        label: "Purity & Sulfites",
        value: "Zero Chemical Additives · Natural Sulfites (Uhudler Only)",
      },
      {
        label: "Recommended Service",
        value: "10–12 °C · Universal Burgundy or Aromatic Wine Glass",
      },
    ],
    image: {
      src: "/images/vine.png",
      alt: "U&Me Uhudler and Met bottle",
    },
    href: "#shop",
  },
];
