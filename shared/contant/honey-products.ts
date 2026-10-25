export type HoneyProduct = {
  id: string;
  name: string;
  mobileName: string;
  subtitle: string;
  aromaAndPalate: string;
  textureAndCrystallization: string;
  tableAndCulinaryRitual: string;
  honeyColor: string;
  honeyDeepColor: string;
  honeyHighlightColor: string;
  clarity: number;
  ctaUrl: string;
};

export const HONEY_PRODUCTS: HoneyProduct[] = [
  {
    id: "creamed-honey",
    name: "Creamed Honey",
    mobileName: "Creamed Honey",
    subtitle: "Spring & Early Summer Meadow Harvest",
    aromaAndPalate:
      "Finely whipped through gentle mechanical stirring for a velvety, spreadable consistency. Delicate orchard blossom sweetness that melts effortlessly on the tongue.",
    textureAndCrystallization:
      "Naturally fine, stable micro-crystalline texture; never drips.",
    tableAndCulinaryRitual:
      "Warm sourdough crust, alpine butter, soft ripened cheeses, and morning herbal infusions.",
    honeyColor: "#b55e10",
    honeyDeepColor: "#7c3905",
    honeyHighlightColor: "#df8c2e",
    clarity: 0.35,
    ctaUrl: "#shop",
  },
  {
    id: "robinia-honey",
    name: "Robinia Honey",
    mobileName: "Robinia Honey",
    subtitle: "Late Spring Acacia Blossom",
    aromaAndPalate:
      "Clear floral lift with soft vanilla tones and a long, luminous sweetness drawn from robinia groves around Grosspetersdorf.",
    textureAndCrystallization:
      "Slow to crystallize; remains elegantly fluid with a silk-fine body.",
    tableAndCulinaryRitual:
      "Fresh goat cheese, lemon zest pastry, and pale herbal teas.",
    honeyColor: "#c26a14",
    honeyDeepColor: "#863f06",
    honeyHighlightColor: "#eb9938",
    clarity: 0.9,
    ctaUrl: "#shop",
  },
  {
    id: "linden-honey",
    name: "Linden Honey",
    mobileName: "Linden Honey",
    subtitle: "Midsummer Linden Avenues",
    aromaAndPalate:
      "Minted blossom and gentle menthol freshness, finishing with warm amber depth from linden avenues at peak bloom.",
    textureAndCrystallization:
      "Medium-fine crystals that set into a soft, spoonable set without graininess.",
    tableAndCulinaryRitual:
      "Aged alpine cheese, dark rye, and evening digestif pairings.",
    honeyColor: "#ac560d",
    honeyDeepColor: "#733304",
    honeyHighlightColor: "#d68227",
    clarity: 0.6,
    ctaUrl: "#shop",
  },
];
