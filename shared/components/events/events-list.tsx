import { EventCard, type EventItem } from "./event-card";

const events: EventItem[] = [
  {
    day: "6-8",
    month: "November",
    year: "2026",
    title: "Genussmesse Oberwart",
    tag: "Messe",
    location: "Oberwart",
    address: "7400 Oberwart",
    description: "Pertikan auf der Genussmesse Oberwart.",
    imageSrc: "/images/events/event-1.jpg",
    imageAlt: "Logo der Genussmesse Oberwart",
    href: "#",
  },
];

type EventsListProps = {
  /** Show only the first N events (e.g. on the homepage). */
  limit?: number;
  titleAs?: "h2" | "h3";
};

export function EventsList({ limit, titleAs }: EventsListProps) {
  // const visibleEvents = limit ? events.slice(0, limit) : events;

  return (
    <section aria-label="Liste kommender Veranstaltungen">
      {events.map((event, index) => (
        <EventCard key={index} event={event} titleAs={titleAs} />
      ))}
    </section>
  );
}
