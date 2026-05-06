import type { Metadata } from "next";
import { NichePageTemplate } from "@/components/sections/niche-page-template";

export const metadata: Metadata = {
  title: "Condos for Sale in the GTA",
  description:
    "From boutique low-rises to skyline penthouses — Sankalp knows the buildings, the boards, and the hidden gems of GTA condo living.",
  alternates: { canonical: "https://sankalprealestate.ca/buy/condos" },
};

export default function CondosPage() {
  return (
    <NichePageTemplate
      eyebrow="Condos"
      headline="Urban living,"
      headlineAccent="curated."
      description={[
        "Not all condos are created equal. Building reputation, reserve fund health, upcoming special assessments, rental restrictions — the details behind the listing matter more than the listing itself.",
        "I know which buildings to recommend and which to avoid. Which floors get traffic noise. Which management companies actually maintain their properties. The things MLS doesn't tell you.",
      ]}
      features={[
        { title: "Building Intelligence", text: "Status certificates reviewed line by line. Reserve fund analysis. Upcoming assessments flagged before you commit." },
        { title: "Lifestyle Matching", text: "Transit proximity, walkability, amenity packages, noise levels — matched to how you actually live, not just your budget." },
        { title: "Investment Potential", text: "Rental yield analysis, appreciation trends by building, and tenant demand data for condos that double as investments." },
        { title: "Board & Management Review", text: "Some buildings are beautifully managed. Others are ticking time bombs. We know the difference before you're locked in." },
      ]}
      ctaText="Find Your Condo"
      ctaHref="/book"
      imagePlaceholder="Modern condo interior"
      imageSrc="/images/niches/condos.jpg"
    />
  );
}
