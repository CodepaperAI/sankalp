import type { Metadata } from "next";
import { NichePageTemplate } from "@/components/sections/niche-page-template";

export const metadata: Metadata = {
  title: "Luxury Homes in the GTA",
  description:
    "Estates, custom builds, and legacy properties across Oakville, King City, Forest Hill, and the Bridle Path. White-glove real estate service for discerning buyers.",
  alternates: { canonical: "https://sankalprealestate.ca/buy/luxury" },
};

export default function LuxuryPage() {
  return (
    <NichePageTemplate
      eyebrow="Luxury Homes"
      headline="Legacy properties deserve"
      headlineAccent="legacy service."
      description={[
        "At the luxury level, discretion matters as much as expertise. Off-market opportunities, private showings, and negotiations that respect both parties — this is a different standard of service.",
        "From Oakville's lakeside estates to the Bridle Path's gated properties, I know the inventory, the sellers, and the nuances that determine true value beyond the listing price.",
      ]}
      features={[
        { title: "Off-Market Access", text: "Relationships with luxury sellers and agents mean you see properties before they hit MLS — often the best ones never do." },
        { title: "Private Showings", text: "No open houses, no crowds. Scheduled viewings that respect your time and the property's exclusivity." },
        { title: "Valuation Expertise", text: "Custom builds, heritage homes, and unique properties require nuanced valuation beyond comparables. We understand what drives premium pricing." },
        { title: "Concierge Transition", text: "From interior designers to estate lawyers to moving logistics — a curated network for every aspect of your transition." },
      ]}
      ctaText="Explore Luxury Listings"
      ctaHref="/book"
      imagePlaceholder="Luxury estate twilight exterior — to be sourced"
    />
  );
}
