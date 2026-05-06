import type { Metadata } from "next";
import { SellContent } from "./sell-content";

export const metadata: Metadata = {
  title: "Sell Your Home in the GTA",
  description:
    "Maximize your home's value with Sankalp's proven selling strategy. Complimentary market evaluations, staging guidance, and expert negotiation across the Greater Toronto Area.",
  alternates: { canonical: "https://sankalprealestate.ca/sell" },
};

export default function SellPage() {
  return <SellContent />;
}
