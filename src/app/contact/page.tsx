import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Sankalp",
  description:
    "Get in touch with Sankalp for a consultation, home valuation, or any real estate question. Serving the Greater Toronto Area with seven specialties.",
  alternates: { canonical: "https://sankalprealestate.ca/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
