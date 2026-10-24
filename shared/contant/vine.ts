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
    id: "u-and-me-frizzante",
    title: "U&Me Frizzante",
    subtitle: "Sparkling Uhudler & Met",
    description:
      "A refreshingly sparkling interpretation uniting the Southern Burgenland Uhudler grape and 15-month aged apiary mead.",
    tastingNotes: {
      label: "Tasting Notes",
      body: "Vibrant, fruity acidity meets delicate honey sweetness, lifted by fine, persistent perlage for a lively lightness on the palate.",
    },
    specs: [
      {
        label: "Maturation",
        value: "15 Months Aged Apiary Mead",
      },
      {
        label: "Purity & Sulfites",
        value: "Without Chemical Additives - Sulfites (Uhudler Component Only)",
      },
      {
        label: "Recommended Service",
        value: "6–8 °C · Slender Flute or Sparkling Tulip Glass",
      },
    ],
    image: {
      src: "/images/vine.png",
      alt: "U&Me Frizzante bottle",
    },
    href: "#shop",
  },
];
