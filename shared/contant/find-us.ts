export type BranchOpeningHour = {
  label: string;
  value: string;
};

export type BranchInfoCard = {
  id: string;
  name: string;
  street: string;
  city: string;
  phone: string;
  website: string;
  websiteHref: string;
  openingHours: BranchOpeningHour[];
};

const defaultOpeningHours: BranchOpeningHour[] = [
  { label: "Mo – Fr :", value: "8:00 – 17:00 Uhr" },
  { label: "7512 Kirchfidisch", value: "7512 Kirchfidisch" },
  { label: "7512 Kirchfidisch", value: "7512 Kirchfidisch" },
];

export const branchInfoCards: BranchInfoCard[] = [
  {
    id: "duernbeck-beverage-trade",
    name: "Dürnbeck Beverage Trade",
    street: "Greutgasse 2",
    city: "7512 Kirchfidisch",
    phone: "+43 664 4178970",
    website: "getraenke-duernbeck.at",
    websiteHref: "https://getraenke-duernbeck.at",
    openingHours: defaultOpeningHours,
  },
  {
    id: "conclusius",
    name: "CONCLUSIUS",
    street: "Clusiusweg 2/1",
    city: "7540 Güssing",
    phone: "+43 3322 20602",
    website: "conclusius.at",
    websiteHref: "https://conclusius.at",
    openingHours: defaultOpeningHours,
  },
  {
    id: "markus-friedl",
    name: "Wine & Beverage Retailer Markus Friedl",
    street: "Wiener Straße 17",
    city: "7350 Oberpullendorf",
    phone: "+43 676 4008013",
    website: "wine specialist retailer.at",
    websiteHref: "https://winespecialistretailer.at",
    openingHours: defaultOpeningHours,
  },
  {
    id: "weinwerk-burgenland",
    name: "Weinwerk Burgenland",
    street: "Greutgasse 2",
    city: "7100 Neusiedl am See",
    phone: "+43 2167 20705",
    website: "weinwerk-burgenland.at",
    websiteHref: "https://weinwerk-burgenland.at",
    openingHours: defaultOpeningHours,
  },
  {
    id: "world-honey-eu",
    name: "World Honey EU",
    street: "Greutgasse 2",
    city: "1030 Wien",
    phone: "+43 699 11581331",
    website: "welthonig.at",
    websiteHref: "https://welthonig.at",
    openingHours: defaultOpeningHours,
  },
];

export const apiaryHarvestCards: BranchInfoCard[] = [
  {
    id: "apiary-duernbeck",
    name: "Dürnbeck Beverage Trade",
    street: "Greutgasse 2",
    city: "7512 Kirchfidisch",
    phone: "+43 664 4178970",
    website: "getraenke-duernbeck.at",
    websiteHref: "https://getraenke-duernbeck.at",
    openingHours: defaultOpeningHours,
  },
  {
    id: "apiary-world-honey-eu",
    name: "World Honey EU",
    street: "Greutgasse 2",
    city: "1030 Wien",
    phone: "+43 699 11581331",
    website: "welthonig.at",
    websiteHref: "https://welthonig.at",
    openingHours: defaultOpeningHours,
  },
];

