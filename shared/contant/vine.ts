export type WineVariant = {
  /** Bottle size shown on the size chip, e.g. "0,75 L". */
  size: string;
  imageSrc: string;
  imageAlt: string;
  /** Shopify product page for exactly this size. */
  shopifyUrl: string;
};

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
  /** One entry per bottle size; the first one is selected by default. */
  variants: WineVariant[];
};

/** @deprecated Prefer VineProduct — kept as alias for wine collection naming */
export type WineProduct = VineProduct;

// TODO: replace with the real Shopify product URL of each size.
const SHOPIFY_PLACEHOLDER_URL = "#shop";

export const vineProducts: VineProduct[] = [
  {
    id: "mitra",
    name: "Mitra",
    subtitle: "Honigwein – Das Original",
    description:
      "Met (Honigwein) ist eines der ältesten alkoholischen Getränke (13% Vol.) der Menschheit. Unser Met wird nach alter Rezeptur aus edlem Honig und reinem Wasser gebraut.",
    tastingNotes:
      "In der Nase tiefer, warmer Blütenhonig, der sich zu strukturiertem Bienenwachs und getrockneten Wiesenkräutern entfaltet – gefolgt von einem langen, samtigen Bernsteinabgang durch geduldige Fassreife.",
    maturation: "Ca. 15 bis 18 Monate Reife im Fass",
    purityAndSulfites: "Keine chemischen Zusätze oder Sulfite",
    recommendedService:
      "Aperitif, Digestif oder Dessertwein · zu Käseplatten und würzigem Schinken",
    glassColor: "#1f260c",
    liquidColor: "#3d4612",
    liquidGlowColor: "#667022",
    capsuleColor: "#252523",
    labelTint: "#e3e0d6",
    isSparkling: false,
    variants: [
      {
        size: "0,75 L",
        imageSrc: "/images/wine-mitra-075l.jpg",
        imageAlt: "Flasche Mitra Honigwein – Das Original, 0,75 Liter",
        shopifyUrl: SHOPIFY_PLACEHOLDER_URL,
      },
      {
        size: "0,5 L",
        imageSrc: "/images/wine-mitra-05l.jpg",
        imageAlt: "Flasche Mitra Honigwein – Das Original, 0,5 Liter",
        shopifyUrl: SHOPIFY_PLACEHOLDER_URL,
      },
    ],
  },
  {
    id: "mitra-frizzante",
    name: "Mitra Frizzante",
    subtitle: "Prickelnder Honigwein",
    description:
      "Edler Honig, reines Wasser und 15 bis 18 Monate Fassreife – veredelt mit spritzig-feiner Kohlensäure. Unser mehrfach prämiertes Qualitätsprodukt präsentiert sich als erfrischender Frizzante mit 13% Vol.",
    tastingNotes:
      "Goldene Honigwärme trifft auf lebendiges Prickeln, mit zarter Süße und frischem, belebendem Abgang.",
    maturation: "15 bis 18 Monate Fassreife",
    purityAndSulfites: "100 % natürlich · Keine chemischen Zusätze oder Sulfite",
    recommendedService:
      "Gut gekühlt · prickelnder Aperitif oder zu Käseplatten und würzigem Schinken",
    glassColor: "#1d240b",
    liquidColor: "#444e15",
    liquidGlowColor: "#737e28",
    capsuleColor: "#232321",
    labelTint: "#e5e2d9",
    isSparkling: true,
    variants: [
      {
        size: "0,75 L",
        imageSrc: "/images/wine-mitra-frizzante.jpg",
        imageAlt: "Flasche Mitra Honigwein Frizzante, 0,75 Liter",
        shopifyUrl: SHOPIFY_PLACEHOLDER_URL,
      },
    ],
  },
  {
    id: "u-and-me",
    name: "U&Me",
    subtitle: "Uhudler & Met – Sweet & Wild",
    description:
      "Unser U&ME ist eine Kreation aus Uhudler und Met (Honigwein). Der Uhudler – eine wilde Rebsorte mit ihrem typischen Beerengeschmack – sowie unser traditionell hergestellter Met aus dem Honig der eigenen Imkerei stammen beide aus dem Südburgenland.",
    tastingNotes:
      "Wir vereinen mit diesem Produkt (13% Vol.) den wilden, fruchtigen Geschmack des Uhudlers mit dem lieblichen Geschmack unseres Mets.",
    maturation: "Met ca. 15 Monate gereift",
    purityAndSulfites: "Keine chemischen Zusätze · Sulfite nur im Uhudler",
    recommendedService:
      "10–12 °C · Universal-Burgunderglas oder Aromaglas",
    glassColor: "#1e230b",
    liquidColor: "#3b3c11",
    liquidGlowColor: "#635c1e",
    capsuleColor: "#252523",
    labelTint: "#e2dfd5",
    isSparkling: false,
    variants: [
      {
        size: "0,75 L",
        imageSrc: "/images/wine-u-and-me-075l.jpg",
        imageAlt: "Flasche U&Me Sweet & Wild, Uhudler & Met, 0,75 Liter",
        shopifyUrl: SHOPIFY_PLACEHOLDER_URL,
      },
      {
        size: "0,5 L",
        imageSrc: "/images/wine-u-and-me-05l.jpg",
        imageAlt: "Flasche U&Me Sweet & Wild, Uhudler & Met, 0,5 Liter",
        shopifyUrl: SHOPIFY_PLACEHOLDER_URL,
      },
    ],
  },
  {
    id: "u-and-me-frizzante",
    name: "U&Me Frizzante",
    subtitle: "Prickelnder Uhudler & Met",
    description:
      "U&ME Frizzante ist eine erfrischend prickelnde Kreation aus Südburgenländer Uhudler und feinem Met (Honigwein). Echter Uhudler mit intensivem Beerenaroma trifft auf Met aus der eigenen Imkerei.",
    tastingNotes:
      "In diesem Frizzante (13% Vol.) verschmelzen die wilde, fruchtige Säure des Uhudlers und die liebliche Süße des 15 Monate gereiften Mets zu einer harmonischen Einheit.",
    maturation: "Met 15 Monate gereift",
    purityAndSulfites: "Keine chemischen Zusätze · Sulfite nur im Uhudler",
    recommendedService:
      "6–8 °C · Schlanke Flöte oder Sekt-Tulpenglas",
    glassColor: "#1c220a",
    liquidColor: "#404213",
    liquidGlowColor: "#6b6522",
    capsuleColor: "#242422",
    labelTint: "#e4e1d7",
    isSparkling: true,
    variants: [
      {
        size: "0,75 L",
        imageSrc: "/images/wine-u-and-me-frizzante.jpg",
        imageAlt: "Flasche U&Me Frizzante, Uhudler & Met, 0,75 Liter",
        shopifyUrl: SHOPIFY_PLACEHOLDER_URL,
      },
    ],
  },
];

export const WINE_PRODUCTS = vineProducts;
