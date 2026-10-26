import { EventCard, type EventItem } from "./event-card";

const events: EventItem[] = [
  {
    day: "07",
    month: "Oktober",
    year: "2026",
    title: "Herbst-Genussmarkt",
    tag: "Verkostung",
    location: "Güssing",
    address: "7512 Kirchfidisch",
    description:
      "Regionale Produzenten und handgemachte Spezialitäten auf dem historischen Burggelände",
    href: "#",
  },
  {
    day: "18",
    month: "Oktober",
    year: "2026",
    title: "Weinabend zur Ernte",
    tag: "Zusammenkunft",
    location: "Grosspetersdorf",
    address: "7503 Grosspetersdorf, Burgenland",
    description:
      "Ein intimer Abend mit Honigwein-Pairings zur Feier der Herbsternte, begleitet von regionaler Gastronomie",
    href: "#",
  },
  {
    day: "02",
    month: "November",
    year: "2026",
    title: "Met-und-Käse-Pairing",
    tag: "Verkostung",
    location: "Pertikan Keller",
    address: "7503 Grosspetersdorf",
    description:
      "Geführte Verkostung von Mitra und fassgereiften Metsorten mit ausgewählten österreichischen Almkäsen",
    href: "#",
  },
  {
    day: "14",
    month: "November",
    year: "2026",
    title: "Winter-Laternenmarkt",
    tag: "Saisonal",
    location: "Stadtplatz Oberwart",
    address: "7400 Oberwart, Burgenland",
    description:
      "Ein festlicher Saisonmarkt mit Pertikan-Honiggeschenken, Met-Verkostung und Bienenwachskerzen",
    href: "#",
  },
  {
    day: "06",
    month: "Dezember",
    year: "2026",
    title: "Nikolaus-Kellerabend",
    tag: "Feier",
    location: "Pertikan Keller",
    address: "7503 Grosspetersdorf",
    description:
      "Eine herzliche Winterfeier mit gewürztem Honigwein, handwerklichen Häppchen und saisonalen Geschichten",
    href: "#",
  },
];

type EventsListProps = {
  /** Show only the first N events (e.g. on the homepage). */
  limit?: number;
  titleAs?: "h2" | "h3";
};

export function EventsList({ limit, titleAs }: EventsListProps) {
  const visibleEvents = limit ? events.slice(0, limit) : events;

  return (
    <section aria-label="Liste kommender Veranstaltungen">
      {visibleEvents.map((event, index) => (
        <EventCard key={index} event={event} titleAs={titleAs} />
      ))}
    </section>
  );
}
