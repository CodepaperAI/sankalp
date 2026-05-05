import type { Metadata } from "next";
import { SoldContent } from "./sold-content";

export const metadata: Metadata = {
  title: "Recently Sold Properties",
  description:
    "Browse Sankalp's recent transactions across the Greater Toronto Area. Luxury homes, condos, investment properties, and more — results that speak.",
  alternates: { canonical: "https://sankalprealestate.ca/sold" },
};

export default function SoldPage() {
  return <SoldContent />;
}
