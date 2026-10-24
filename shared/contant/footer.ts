export type FooterLinkItem = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  items: FooterLinkItem[];
};

export const footerContact = {
  brand: "Pertikan Beekeeping",
  addressLines: ["Burgerstraße 36,", "A-7503 Grosspetersdorf,"],
  phones: ["+43 681 2051 5033", "+43 660 8280 418"],
  email: "pertikan@gmx.at",
  emailHref: "mailto:pertikan@gmx.at",
} as const;

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Explore",
    items: [
      { label: "The Collection", href: "#the-collection" },
      { label: "The Apiary", href: "#the-apiary" },
      { label: "Our Story", href: "#our-story" },
      { label: "The Cellar", href: "#the-cellar" },
    ],
  },
  {
    title: "Shop",
    items: [
      { label: "Wine Collection", href: "#wine-collection" },
      { label: "Honey", href: "#honey" },
      { label: "Propolis Tropfen", href: "#propolis-tropfen" },
      { label: "Beeswax Candles", href: "#beeswax-candles" },
    ],
  },
];

export const footerSocials: FooterLinkItem[] = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export const footerMeta = {
  copyright: "© 2026 Pertikan Beekeeping . All rights reserved.",
  credit: "By TabDeal",
} as const;
