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
  { id: "all", label: "Alle" },
  { id: "wine", label: "Weinkollektion" },
  { id: "honey", label: "Honig" },
  { id: "propolis", label: "Propolis Tropfen" },
  { id: "candles", label: "Bienenwachskerzen" },
];

export const COLLECTION_PRODUCTS: CollectionProduct[] = [
  {
    id: "uhudler-reserve-mead",
    category: "wine",
    visual: "bottle",
    formatLabel: "Weinkollektion · 750 ml · 13,5% Vol.",
    releaseLabel: "Kellerabfüllung 2024 · Fass Nr. 04",
    name: "Uhudler Reserve Met — 18 Monate gereift",
    description:
      "18 Monate in neutralem österreichischem Eichenfass in unserem Keller in Grosspetersdorf gereift. Gemeinsam vergoren mit wilden Uhudler-Trauben von den Wiesen des Südburgenlands.",
    notes:
      "Wilde Walderdbeere, Tannin der Fragola-Traubenschale, warmes Bienenwachs, trocken-mineralischer Abgang",
    price: "€68.00",
    stockLabel: "28 Flaschen/Gläser im Keller",
  },
  {
    id: "cuvee-zagros-meadow",
    category: "wine",
    visual: "bottle",
    formatLabel: "Weinkollektion · 750 ml · 12,0% Vol.",
    releaseLabel: "18 Monate Hefelager",
    name: "Cuvée Zagros & Wiese – Trockener Hydromel",
    description:
      "Eine Hommage an die Imker-Wurzeln von Mohammad Akbari in der Morgendämmerung auf den hohen Bergweiden von Aligudarz, veredelt mit burgenländischem Wiesenhonigwein.",
    notes:
      "Weiße Blüten, zerriebener Thymian, knackige Streuobstbirne, nachklingende Salzigkeit",
    price: "€54.00",
    stockLabel: "42 Flaschen/Gläser im Keller",
  },
  {
    id: "meadow-honey",
    category: "honey",
    visual: "jar",
    formatLabel: "Honig · 500-g-Glas",
    releaseLabel: "Ernte Frühsommer 2026",
    name: "Roher südburgenländischer Wiesenhonig",
    description:
      "Ausschließlich in der Morgendämmerung geerntet, wenn die Feuchtigkeit im Bienenstock am niedrigsten ist. Kalt und schonend per Schwerkraft gewonnen und direkt in unserer Imkerei in Grosspetersdorf abgefüllt.",
    notes:
      "Lindenblüte, Wildklee, Edelkastanie, samtige Kristallisation",
    price: "€26.00",
    stockLabel: "64 Flaschen/Gläser im Keller",
  },
  {
    id: "propolis-tropfen",
    category: "propolis",
    visual: "dropper",
    formatLabel: "Propolis Tropfen · 30 ml",
    releaseLabel: "Imkerei-Extrakt 2026",
    name: "Propolis Tropfen — Waldharz-Extrakt",
    description:
      "Von Hand gesammeltes Waldpropolis, gelöst in reinem Alkohol – für ein konzentriertes tägliches Ritual aus unseren Bienenstöcken im Südburgenland.",
    notes: "Bitteres Harz, dunkler Honig, Kiefernrinde, warme Würze",
    price: "€32.00",
    stockLabel: "51 Flaschen/Gläser im Keller",
  },
  {
    id: "beeswax-candle",
    category: "candles",
    visual: "candle",
    formatLabel: "Bienenwachskerze · 180 g",
    releaseLabel: "Handgegossene Keller-Edition",
    name: "Handgegossene Kerze aus reinem Bienenwachs",
    description:
      "Gegossen aus gefiltertem Bienenwachs unserer eigenen Imkerei – ohne Duftstoffe, allein mit der natürlichen Wärme von Honigwabe und Wiesenwachs.",
    notes: "Warmes Bienenwachs, sanfter honigfarbener Schein, sauberer Abbrand",
    price: "€22.00",
    stockLabel: "37 Flaschen/Gläser im Keller",
  },
];
