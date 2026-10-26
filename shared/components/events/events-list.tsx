import { EventCard, type EventItem } from "./event-card";

const events: EventItem[] = [
  {
    day: "07",
    month: "October",
    year: "2026",
    title: "Autumn Genussmarkt",
    tag: "Tasting",
    location: "Gussing",
    address: "7512 Kirchfidisch",
    description:
      "Regional producers and handcrafted specialties in the historic castle grounds",
    href: "#",
  },
  {
    day: "18",
    month: "October",
    year: "2026",
    title: "Harvest Wine Evening",
    tag: "Gathering",
    location: "Grosspetersdorf",
    address: "7503 Grosspetersdorf, Burgenland",
    description:
      "An intimate evening of honey wine pairings celebrating the autumn harvest with local gastronomy",
    href: "#",
  },
  {
    day: "02",
    month: "November",
    year: "2026",
    title: "Mead & Cheese Pairing",
    tag: "Tasting",
    location: "Pertikan Cellar",
    address: "7503 Grosspetersdorf",
    description:
      "Guided tasting of Mitra and barrel-aged meads alongside curated Austrian alpine cheeses",
    href: "#",
  },
  {
    day: "14",
    month: "November",
    year: "2026",
    title: "Winter Lantern Market",
    tag: "Seasonal",
    location: "Stadtplatz Oberwart",
    address: "7400 Oberwart, Burgenland",
    description:
      "A festive seasonal market featuring Pertikan honey gifts, mead tasting, and beeswax candles",
    href: "#",
  },
  {
    day: "06",
    month: "December",
    year: "2026",
    title: "St. Nicholas Cellar Evening",
    tag: "Celebration",
    location: "Pertikan Cellar",
    address: "7503 Grosspetersdorf",
    description:
      "A warm seasonal celebration with mulled honey wine, artisan nibbles, and seasonal storytelling",
    href: "#",
  },
];

export function EventsList() {
  return (
    <section aria-label="Upcoming events list">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </section>
  );
}
