import type { Metadata } from "next";
import { NichePageTemplate } from "@/components/sections/niche-page-template";

export const metadata: Metadata = {
  title: "Investment Properties in the GTA",
  description:
    "Build wealth through GTA real estate. Cash flow analysis, tenant-ready properties, and portfolio strategy for serious investors.",
  alternates: { canonical: "https://sankalprealestate.ca/buy/investment" },
};

export default function InvestmentPage() {
  return (
    <NichePageTemplate
      eyebrow="Investment Properties"
      headline="Build wealth through"
      headlineAccent="real estate."
      description={[
        "Whether you're acquiring your first rental or scaling a portfolio, investment real estate in the GTA demands rigour. Cap rates, cash-on-cash returns, vacancy rates, and tenant laws — the numbers must work before the emotions kick in.",
        "I work with investors at every stage — from a single condo rental to multi-unit buildings. Data-driven, strategy-first, and always with your long-term wealth picture in mind.",
      ]}
      features={[
        { title: "Cash Flow Modelling", text: "Projected income, expenses, mortgage costs, and realistic vacancy rates — before you make an offer, you'll see the five-year picture." },
        { title: "Tenant-Ready Properties", text: "Properties that attract quality tenants without extensive renovation. Turn-key options with proven rental history." },
        { title: "Portfolio Strategy", text: "Diversification across property types and GTA submarkets. Tax-efficient structuring with referrals to real estate accountants." },
        { title: "Landlord-Tenant Knowledge", text: "Ontario's rental regulations are complex. Every investment decision is informed by current legislation and practical enforcement realities." },
      ]}
      ctaText="Discuss Your Portfolio"
      ctaHref="/book"
      imagePlaceholder="Multi-unit investment property — to be sourced"
    />
  );
}
