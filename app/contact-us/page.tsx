import type { Metadata } from "next";

import { ContactUs } from "@/app/contact-us/contact-us";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit Pertikan Beekeeping in Grosspetersdorf auf — Anfragen zu unserem Met, Honig und Handwerk.",
  keywords: [
    "Pertikan Kontakt",
    "Pertikan Beekeeping",
    "Grosspetersdorf",
    "Met Kontakt",
    "Honigwein Österreich",
  ],
};

export default function ContactUsPage() {
  return <ContactUs />;
}
