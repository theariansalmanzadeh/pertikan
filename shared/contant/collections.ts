export type CollectionCategory =
  | "all"
  | "wine"
  | "honey"
  | "propolis"
  | "candles";

export type CollectionProduct = {
  id: string;
  category: Exclude<CollectionCategory, "all">;
  visual: "bottle" | "jar" | "dropper" | "candle";
  formatLabel: string;
  releaseLabel: string;
  name: string;
  description: string;
  notes: string;
  price: string;
  stockLabel: string;
};

export const collectionFilters: {
  id: CollectionCategory;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "wine", label: "Wine Collection" },
  { id: "honey", label: "Honey" },
  { id: "propolis", label: "Propolis Tropfen" },
  { id: "candles", label: "Beeswax Candles" },
];

export const COLLECTION_PRODUCTS: CollectionProduct[] = [
  {
    id: "uhudler-reserve-mead",
    category: "wine",
    visual: "bottle",
    formatLabel: "Wine Collection · 750 ml · 13.5% ABV",
    releaseLabel: "2024 Cellar Release · Barrel #04",
    name: "Uhudler Reserve Mead — 18 Months Aged",
    description:
      "Aged for 18 months in neutral Austrian oak inside our Grosspetersdorf cellar. Co-fermented with wild Uhudler grapes from Southern Burgenland meadows.",
    notes:
      "Wild woodland strawberry, Fragola grape skin tannin, warm beeswax, dry mineral finish",
    price: "€68.00",
    stockLabel: "28 bottles/jars in cellar",
  },
  {
    id: "cuvee-zagros-meadow",
    category: "wine",
    visual: "bottle",
    formatLabel: "Wine Collection · 750 ml · 12.0% ABV",
    releaseLabel: "18-Month Lees Aging",
    name: "Cuvée Zagros & Meadow Dry Hydromel",
    description:
      "A tribute to Mohammad Akbari's dawn beekeeping roots in the high mountain pastures of Aligudarz, finished with Burgenland meadow honey wine.",
    notes:
      "White blossom, crushed thyme, crisp orchard pear, lingering salinity",
    price: "€54.00",
    stockLabel: "42 bottles/jars in cellar",
  },
  {
    id: "meadow-honey",
    category: "honey",
    visual: "jar",
    formatLabel: "Honey · 500 g Glass Jar",
    releaseLabel: "Early Summer Harvest 2026",
    name: "Raw Southern Burgenland Meadow Honey",
    description:
      "Harvested exclusively at dawn when hive humidity is lowest. Cold-extracted by gravity and bottled directly from our Grosspetersdorf apiary.",
    notes:
      "Linden flower, wild clover, sweet chestnut, velvety crystallization",
    price: "€26.00",
    stockLabel: "64 bottles/jars in cellar",
  },
  {
    id: "propolis-tropfen",
    category: "propolis",
    visual: "dropper",
    formatLabel: "Propolis Tropfen · 30 ml",
    releaseLabel: "Apiary Extract 2026",
    name: "Propolis Tropfen — Forest Resin Extract",
    description:
      "Hand-gathered forest propolis dissolved in pure alcohol for a concentrated daily ritual drawn from our Southern Burgenland hives.",
    notes: "Bitter resin, dark honey, pine bark, warm spice",
    price: "€32.00",
    stockLabel: "51 bottles/jars in cellar",
  },
  {
    id: "beeswax-candle",
    category: "candles",
    visual: "candle",
    formatLabel: "Beeswax Candle · 180 g",
    releaseLabel: "Hand-Poured Cellar Edition",
    name: "Hand-Poured Pure Beeswax Candle",
    description:
      "Poured from filtered beeswax of our own apiary — unscented beyond the natural warmth of honeycomb and meadow wax.",
    notes: "Warm beeswax, soft honeyed glow, clean burn",
    price: "€22.00",
    stockLabel: "37 bottles/jars in cellar",
  },
];
