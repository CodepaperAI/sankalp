import type { Metadata } from "next";
import { HomeValuationContent } from "./valuation-content";

export const metadata: Metadata = {
  title: "Free Home Valuation",
  description:
    "Get a complimentary, no-obligation market evaluation of your GTA property. Based on real comparables — not automated estimates. Response within 24 hours.",
  alternates: { canonical: "https://sankalprealestate.ca/home-valuation" },
};

export default function HomeValuationPage() {
  return <HomeValuationContent />;
}
