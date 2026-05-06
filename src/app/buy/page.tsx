import type { Metadata } from "next";
import { BuyContent } from "./buy-content";

export const metadata: Metadata = {
  title: "Buy a Home in the GTA",
  description:
    "Whether you're a first-time buyer, upgrading to luxury, or investing in pre-construction — Sankalp guides you through every step of buying in the Greater Toronto Area.",
  alternates: { canonical: "https://sankalprealestate.ca/buy" },
};

export default function BuyPage() {
  return <BuyContent />;
}
