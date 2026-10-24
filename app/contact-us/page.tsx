import type { Metadata } from "next";

import { ContactUs } from "@/app/contact-us/contact-us";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pertikan Beekeeping in Grosspetersdorf — inquiries about our mead, honey, and craft.",
  keywords: [
    "contact Pertikan",
    "Pertikan Beekeeping",
    "Grosspetersdorf",
    "mead contact",
    "honey wine Austria",
  ],
};

export default function ContactUsPage() {
  return <ContactUs />;
}
