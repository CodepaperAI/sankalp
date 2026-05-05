import type { Metadata } from "next";
import { NichePageTemplate } from "@/components/sections/niche-page-template";

export const metadata: Metadata = {
  title: "Downsizing in the GTA",
  description:
    "The next chapter, not a compromise. Right-sizing your space while preserving what matters — community, comfort, and connection to family.",
  alternates: { canonical: "https://sankalprealestate.ca/buy/downsizing" },
};

export default function DownsizingPage() {
  return (
    <NichePageTemplate
      eyebrow="Downsizing"
      headline="The next chapter,"
      headlineAccent="not a compromise."
      description={[
        "After decades in a family home, the thought of leaving can feel like losing a piece of yourself. The memories, the neighbourhood, the garden you built over 30 years. I understand that weight.",
        "Downsizing isn't about less — it's about right. The right size for this stage. The right proximity to family. The right community that still feels like home. Let's find that together.",
      ]}
      features={[
        { title: "Sensitive Transition", text: "No pressure, no rush. We work on your timeline — whether that's 3 months or 18 months. This decision deserves space." },
        { title: "Equity Maximization", text: "Your family home likely holds significant equity. Strategic staging, pricing, and timing to extract maximum value from years of investment." },
        { title: "Right-Size Matching", text: "Bungalows, adult lifestyle communities, accessible condos, or properties near grandchildren — matched to your priorities, not just floor plans." },
        { title: "Declutter & Move Support", text: "Connected to estate organizers, senior move managers, and services that make the physical transition as smooth as the emotional one." },
      ]}
      ctaText="Start the Conversation"
      ctaHref="/book"
      imagePlaceholder="Comfortable downsized home interior — to be sourced"
    />
  );
}
