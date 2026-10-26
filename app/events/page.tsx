import type { Metadata } from "next";

import { EventsHeader } from "@/shared/components/events/events-header";
import { EventsList } from "@/shared/components/events/events-list";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming tastings, seasonal gatherings, and celebrations from Pertikan Beekeeping in Southern Burgenland, Austria.",
  keywords: [
    "Pertikan events",
    "mead tasting",
    "wine tasting Burgenland",
    "honey wine events",
    "Genussmarkt",
    "seasonal celebrations Austria",
  ],
};

export default function EventsPage() {
  return (
    <div className="flex flex-1 flex-col px-6 sm:px-10 md:px-14 lg:px-16">
      <EventsHeader />
      <EventsList />
    </div>
  );
}
