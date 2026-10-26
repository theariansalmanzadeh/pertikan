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
  /** When set, the photo replaces the 3D jar on the card. */
  imageSrc?: string;
  imageAlt?: string;
};

// Placeholder photo, used on the first card only until per-product images exist.
const HONEY_IMAGE = {
  src: "/images/honey-sortiment.webp",
  alt: "Pertikan Honig in Gläsern verschiedener Größen",
} as const;

export const HONEY_PRODUCTS: HoneyProduct[] = [
  {
    id: "creamed-honey",
    name: "Cremehonig",
    mobileName: "Cremehonig",
    subtitle: "Wiesenernte im Frühling & Frühsommer",
    aromaAndPalate:
      "Durch sanftes mechanisches Rühren fein aufgeschlagen für eine samtige, streichzarte Konsistenz. Zarte Süße von Obstbaumblüten, die mühelos auf der Zunge zergeht.",
    textureAndCrystallization:
      "Von Natur aus feine, stabile mikrokristalline Textur; tropft nie.",
    tableAndCulinaryRitual:
      "Warme Sauerteigkruste, Almbutter, weichreifer Käse und morgendliche Kräutertees.",
    honeyColor: "#b55e10",
    honeyDeepColor: "#7c3905",
    honeyHighlightColor: "#df8c2e",
    clarity: 0.35,
    ctaUrl: "#shop",
    imageSrc: HONEY_IMAGE.src,
    imageAlt: HONEY_IMAGE.alt,
  },
  {
    id: "robinia-honey",
    name: "Akazienhonig",
    mobileName: "Akazienhonig",
    subtitle: "Akazienblüte im Spätfrühling",
    aromaAndPalate:
      "Klare blumige Frische mit sanften Vanilletönen und einer langen, leuchtenden Süße aus den Robinienhainen rund um Grosspetersdorf.",
    textureAndCrystallization:
      "Kristallisiert langsam; bleibt elegant flüssig mit seidenfeinem Körper.",
    tableAndCulinaryRitual:
      "Frischer Ziegenkäse, Gebäck mit Zitronenabrieb und helle Kräutertees.",
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
    subtitle: "Lindenalleen im Hochsommer",
    aromaAndPalate:
      "Minzige Blüte und sanfte Mentholfrische, im Abgang warme Bernsteintiefe aus Lindenalleen in voller Blüte.",
    textureAndCrystallization:
      "Mittelfeine Kristalle, die zu einer weichen, löffelbaren Konsistenz ohne Körnigkeit festwerden.",
    tableAndCulinaryRitual:
      "Gereifter Almkäse, dunkles Roggenbrot und ein abendlicher Digestif.",
    honeyColor: "#ac560d",
    honeyDeepColor: "#733304",
    honeyHighlightColor: "#d68227",
    clarity: 0.6,
    ctaUrl: "#shop",
  },
  {
    id: "blossom-honey",
    name: "Blütenhonig",
    mobileName: "Blütenhonig",
    subtitle: "",
    aromaAndPalate: "",
    textureAndCrystallization: "",
    tableAndCulinaryRitual: "",
    honeyColor: "#b8650f",
    honeyDeepColor: "#7a3d06",
    honeyHighlightColor: "#dc8a2c",
    clarity: 0.5,
    ctaUrl: "#shop",
  },
];
