export type HoneyProduct = {
  id: string;
  name: string;
  mobileName: string;
  subtitle: string;
  description: string;
  sizes: readonly string[];
  aromaAndPalate: string;
  textureAndCrystallization: string;
  tableAndCulinaryRitual: string;
  honeyColor: string;
  honeyDeepColor: string;
  honeyHighlightColor: string;
  clarity: number;
  ctaUrl: string;
  /** When set, the photo replaces the 3D jar on the card. */
  imageSrc?: string;
  imageAlt?: string;
};

const HONEY_SIZES = ["250 g", "500 g", "1 kg"] as const;

// Placeholder photo, used on the first card only until per-product images exist.
const HONEY_IMAGE = {
  src: "/images/honey-sortiment.webp",
  alt: "Pertikan Honig in Gläsern verschiedener Größen",
} as const;

export const HONEY_PRODUCTS: HoneyProduct[] = [
  {
    id: "rapeseed-honey",
    name: "Rapshonig",
    mobileName: "Rapshonig",
    subtitle: "Mild & cremigweiß",
    description:
      "Rapshonig ist cremigweiß und kristallisiert besonders rasch. Er ist reich an Vitamin B2 und B6 sowie Vitamin C. Sein Geschmack ist mild und er hat ein feines süßes Aroma. Deshalb ist Rapshonig sehr beliebt, auch bei Kindern – ein gesundes Frühstück für eine gute Leistung in der Schule.",
    sizes: HONEY_SIZES,
    aromaAndPalate:
      "Milder Geschmack mit einem feinen, süßen Aroma. Cremigweiß und besonders rasch kristallisierend.",
    textureAndCrystallization: "Cremige Textur; kristallisiert besonders rasch.",
    tableAndCulinaryRitual:
      "Beliebt auch bei Kindern und fein auf dem Frühstücksbrot.",
    honeyColor: "#e8dfb8",
    honeyDeepColor: "#a88b4a",
    honeyHighlightColor: "#faf1d2",
    clarity: 0.25,
    ctaUrl: "#shop",
    imageSrc: HONEY_IMAGE.src,
    imageAlt: HONEY_IMAGE.alt,
  },
  {
    id: "robinia-honey",
    name: "Akazienhonig",
    mobileName: "Akazienhonig",
    subtitle: "Hellgolden & lange flüssig",
    description:
      "Akazienhonig ist ein sehr wertvoller Honig. Er schmeckt mild und riecht sehr aromatisch. An seiner hellgoldenen Farbe ist er leicht zu erkennen. Er bleibt besonders lange flüssig und kristallisiert nicht. Dieser Honig kann den Cholesterinspiegel senken, hemmt Entzündungen, stärkt das Herz, kurbelt den Stoffwechsel an, wirkt appetithemmend und ist ein Anti-Aging für Haut und Gehirn.",
    sizes: HONEY_SIZES,
    aromaAndPalate:
      "Milder Geschmack und sehr aromatischer Duft.",
    textureAndCrystallization:
      "Bleibt besonders lange flüssig und kristallisiert nicht.",
    tableAndCulinaryRitual:
      "Ein wertvoller Honig mit vielseitigen Eigenschaften.",
    honeyColor: "#c26a14",
    honeyDeepColor: "#863f06",
    honeyHighlightColor: "#eb9938",
    clarity: 0.9,
    ctaUrl: "#shop",
  },
  {
    id: "linden-honey",
    name: "Lindenhonig",
    mobileName: "Lindenhonig",
    subtitle: "Würzig & blumig",
    description:
      "Lindenhonig schmeckt würzig und blumig. Sein Duft erinnert an Pfefferminze und Salbei. Er wirkt leicht antibakteriell sowie entzündungshemmend und wird gerne in Tee oder warmer Milch eingesetzt, um die Symptome von Erkältungen zu lindern und das Einschlafen zu erleichtern.",
    sizes: HONEY_SIZES,
    aromaAndPalate:
      "Würziger, blumiger Geschmack; der Duft erinnert an Pfefferminze und Salbei.",
    textureAndCrystallization: "",
    tableAndCulinaryRitual:
      "Beliebt in Tee oder warmer Milch, besonders bei Erkältungssymptomen und zum Einschlafen.",
    honeyColor: "#ac560d",
    honeyDeepColor: "#733304",
    honeyHighlightColor: "#d68227",
    clarity: 0.6,
    ctaUrl: "#shop",
  },
  {
    id: "buckwheat-honey",
    name: "Buchweizenhonig",
    mobileName: "Buchweizenhonig",
    subtitle: "Kräftig & würzig",
    description:
      "Buchweizenhonig ist eine Rarität. Er ist dunkelgelb, schmeckt kräftig aromatisch und würzig und nur leicht süßlich. Er ist voll mit Antioxidanzien und hat eine desinfizierende und antiseptische Wirkung. Eingerührt in einen lauwarmen Kräutertee, kann er Hustenreiz stillen und einen kratzigen Hals beruhigen. Er senkt den Cholesterinspiegel im Blut und den Blutdruck.",
    sizes: HONEY_SIZES,
    aromaAndPalate:
      "Kräftig aromatisch und würzig, nur leicht süßlich.",
    textureAndCrystallization: "",
    tableAndCulinaryRitual:
      "In lauwarmem Kräutertee kann er Hustenreiz stillen und einen kratzigen Hals beruhigen.",
    honeyColor: "#78501b",
    honeyDeepColor: "#422b11",
    honeyHighlightColor: "#af7c32",
    clarity: 0.25,
    ctaUrl: "#shop",
  },
];
