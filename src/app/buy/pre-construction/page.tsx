import type { Metadata } from "next";
import { NichePageTemplate } from "@/components/sections/niche-page-template";

export const metadata: Metadata = {
  title: "Pre-Construction Homes & Condos in the GTA",
  description:
    "Invest before the foundation is poured. Developer track records, real numbers, and negotiated incentives for GTA pre-construction properties.",
  alternates: { canonical: "https://sankalprealestate.ca/buy/pre-construction" },
};

export default function PreConstructionPage() {
  return (
    <NichePageTemplate
      eyebrow="Pre-Construction"
      headline="Invest before the foundation"
      headlineAccent="is poured."
      description={[
        "Pre-construction can be the smartest investment in real estate — or the riskiest. The difference is due diligence. Developer track record, deposit structure, assignment clauses, and realistic completion timelines.",
        "I don't sell hype. I show you the developer's history, the neighbourhood growth data, comparable resale values, and the real numbers behind the glossy showroom.",
      ]}
      features={[
        { title: "Developer Vetting", text: "Track record analysis — past projects, completion timelines, quality reviews, and litigation history. Not all builders deserve your deposit." },
        { title: "Negotiated Incentives", text: "Platinum access, capped development charges, extended deposit structures, and upgrade packages others don't get." },
        { title: "Assignment Strategy", text: "If your plans change before closing, assignment clauses and timing strategy can protect — or multiply — your investment." },
        { title: "Growth Corridor Analysis", text: "Transit expansions, rezoning plans, and infrastructure investment that signal where value is heading over the next 3-5 years." },
      ]}
      ctaText="See Current Projects"
      ctaHref="/book"
      imagePlaceholder="Pre-construction showroom render — to be sourced"
    />
  );
}
