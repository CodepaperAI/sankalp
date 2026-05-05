import type { Metadata } from "next";
import { NichePageTemplate } from "@/components/sections/niche-page-template";

export const metadata: Metadata = {
  title: "Relocating to the GTA",
  description:
    "Moving to the Greater Toronto Area? Sankalp helps newcomers and relocating families find their community — schools, cultural centres, transit, and the right neighbourhood.",
  alternates: { canonical: "https://sankalprealestate.ca/buy/relocation" },
};

export default function RelocationPage() {
  return (
    <NichePageTemplate
      eyebrow="Relocation"
      headline="New to the GTA?"
      headlineAccent="Let's find your community."
      description={[
        "Relocating is more than finding four walls. It's finding the neighbourhood where your kids thrive, your commute works, your community gathers, and your family feels home — all without the luxury of years of local knowledge.",
        "I've helped families relocate from across India, the Middle East, the US, and other parts of Canada. I understand the questions you haven't thought to ask yet — and the ones you're afraid to.",
      ]}
      features={[
        { title: "Virtual Tours & Previews", text: "Can't visit before your move? Detailed video walkthroughs, neighbourhood drives, and FaceTime showings before you fly in." },
        { title: "Community Matching", text: "Proximity to temples, gurdwaras, cultural centres, South Asian groceries, language schools — the things that make a new city feel like home." },
        { title: "School Research", text: "Fraser Institute rankings, French immersion availability, proximity to schools, and commute analysis for families with children." },
        { title: "Settlement Support", text: "Connected to mortgage brokers who work with newcomers, lawyers who handle immigration-adjacent property matters, and community groups." },
      ]}
      ctaText="Plan Your Move"
      ctaHref="/book"
      imagePlaceholder="GTA community streetscape — to be sourced"
    />
  );
}
