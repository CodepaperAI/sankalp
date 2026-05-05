import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Sankalp",
  description:
    "Meet Sankalp — a trusted GTA real estate professional with deep expertise across seven specialties. Serving families in Toronto, Mississauga, Brampton, Oakville, and beyond.",
  alternates: { canonical: "https://sankalprealestate.ca/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
