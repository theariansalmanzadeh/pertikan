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
    title: "Entdecken",
    items: [
      { label: "Meine Geschichte", href: "/our-story" },
      { label: "Aus unserer Imkerei", href: "/#honig" },
      { label: "Blog", href: "/blogs" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Besuchen & Verbinden",
    items: [
      { label: "Wo Sie uns finden", href: "/find-us" },
      { label: "Kontakt", href: "/contact-us" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", href: "https://facebook.com" },
    ],
  },
  {
    title: "Shop",
    items: [
      { label: "Weinkollektion", href: "/#wine-collection" },
      { label: "Honig", href: "/#honig" },
      { label: "Propolis Tropfen", href: "/collections" },
      { label: "Bienenwachskerzen", href: "/collections" },
    ],
  },
];

export const footerSocials: FooterLinkItem[] = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export const footerMeta = {
  copyright: "© 2026 Pertikan Beekeeping . Alle Rechte vorbehalten.",
  credit: "Von TabDeal",
} as const;
