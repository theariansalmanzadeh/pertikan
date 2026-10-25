export type VineProduct = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tastingNotes: string;
  maturation: string;
  purityAndSulfites: string;
  recommendedService: string;
  glassColor: string;
  liquidColor: string;
  liquidGlowColor: string;
  capsuleColor: string;
  labelTint: string;
  isSparkling: boolean;
  ctaUrl: string;
};

/** @deprecated Prefer VineProduct — kept as alias for wine collection naming */
export type WineProduct = VineProduct;

export const vineProducts: VineProduct[] = [
  {
    id: "mitra",
    name: "Mitra",
    subtitle: "Honey Wine — The Original",
    description:
      "One of humanity's oldest alcoholic beverages, brewed according to an old recipe using fine honey from Pertikan's own apiary and pure water.",
    tastingNotes:
      "Deep warm blossom honey on the nose, evolving into structured beeswax, dried meadow herbs, and a long, velvety amber finish developed through patient barrel rest.",
    maturation: "15–18 Months Barrel Aged",
    purityAndSulfites: "Zero Chemical Additives · No Sulfites",
    recommendedService: "10–14 °C · Tulip White Wine or Digestif Stem",
    glassColor: "#1f260c",
    liquidColor: "#3d4612",
    liquidGlowColor: "#667022",
    capsuleColor: "#252523",
    labelTint: "#e3e0d6",
    isSparkling: false,
    ctaUrl: "#shop",
  },
  {
    id: "mitra-frizzante",
    name: "Mitra Frizzante",
    subtitle: "Sparkling Honey Wine",
    description:
      "A refreshing, sparkling interpretation of traditional mead, crafted from fine honey and pure water, then refined with delicate carbonation.",
    tastingNotes:
      "Golden honey warmth meets lively effervescence, with a delicate sweetness and a bright, refreshing finish.",
    maturation: "15–18 Months Barrel Aged",
    purityAndSulfites: "Zero Chemical Additives · No Sulfites",
    recommendedService: "Well Chilled · Sparkling Wine Glass",
    glassColor: "#1d240b",
    liquidColor: "#444e15",
    liquidGlowColor: "#737e28",
    capsuleColor: "#232321",
    labelTint: "#e5e2d9",
    isSparkling: true,
    ctaUrl: "#shop",
  },
  {
    id: "u-and-me",
    name: "U&Me",
    subtitle: "Uhudler & Met — Sweet & Wild",
    description:
      "A distinctive blend of wild Uhudler grapes and traditional mead from Pertikan's own apiary, both originating in the meadows and vineyards of Southern Burgenland.",
    tastingNotes:
      "Combines the wild, unmistakable woodland strawberry and blackcurrant berry-forward flavor of the authentic Uhudler grape with the gentle, rounded sweetness of 15-month matured honey wine.",
    maturation: "15 Months Matured Mead Base",
    purityAndSulfites: "Zero Chemical Additives · Natural Sulfites (Uhudler Only)",
    recommendedService: "10–12 °C · Universal Burgundy or Aromatic Wine Glass",
    glassColor: "#1e230b",
    liquidColor: "#3b3c11",
    liquidGlowColor: "#635c1e",
    capsuleColor: "#252523",
    labelTint: "#e2dfd5",
    isSparkling: false,
    ctaUrl: "#shop",
  },
  {
    id: "u-and-me-frizzante",
    name: "U&Me Frizzante",
    subtitle: "Sparkling Uhudler & Met",
    description:
      "A refreshingly sparkling interpretation uniting the Southern Burgenland Uhudler grape and 15-month aged apiary mead.",
    tastingNotes:
      "Vibrant, fruity acidity meets delicate honey sweetness, lifted by fine, persistent perlage for a lively lightness on the palate.",
    maturation: "15 Months Aged Apiary Mead",
    purityAndSulfites: "Without Chemical Additives · Sulfites (Uhudler Component Only)",
    recommendedService: "6–8 °C · Slender Flute or Sparkling Tulip Glass",
    glassColor: "#1c220a",
    liquidColor: "#404213",
    liquidGlowColor: "#6b6522",
    capsuleColor: "#242422",
    labelTint: "#e4e1d7",
    isSparkling: true,
    ctaUrl: "#shop",
  },
];

export const WINE_PRODUCTS = vineProducts;
