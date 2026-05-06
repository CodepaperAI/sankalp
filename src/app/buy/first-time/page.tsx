import type { Metadata } from "next";
import { NichePageTemplate } from "@/components/sections/niche-page-template";

export const metadata: Metadata = {
  title: "First-Time Home Buyers in the GTA",
  description:
    "Buying your first home in the Greater Toronto Area? Sankalp guides first-time buyers through pre-approval, search, negotiation, and closing with clarity and confidence.",
  alternates: { canonical: "https://sankalprealestate.ca/buy/first-time" },
};

export default function FirstTimeBuyersPage() {
  return (
    <NichePageTemplate
      eyebrow="First-Time Buyers"
      headline="Your first home should feel like a milestone,"
      headlineAccent="not a maze."
      description={[
        "The GTA market moves fast, and first-time buyers face unique challenges — bidding wars, pre-approval confusion, closing costs nobody explained. It doesn't have to feel overwhelming.",
        "I've guided hundreds of first-time buyers from 'I think I'm ready' to possession day. Every step explained. Every question welcomed. Every decision made with full clarity.",
      ]}
      features={[
        { title: "Pre-Approval Guidance", text: "Connected to mortgage specialists who understand first-time buyer programs, FHSA, and land transfer tax rebates." },
        { title: "Neighbourhood Matching", text: "Not just listings — we match your lifestyle, commute, and budget to the right community for your stage of life." },
        { title: "Offer Strategy", text: "In multiple-offer situations, you'll know exactly what you're signing, what you're risking, and what walk-away looks like." },
        { title: "Closing Day Prep", text: "From lawyer selection to utility transfers to final walkthrough — a complete checklist so nothing surprises you." },
      ]}
      ctaText="Start Your Search"
      ctaHref="/book"
      imagePlaceholder="First home celebration photography"
      imageSrc="/images/niches/first-time.jpg"
    />
  );
}
