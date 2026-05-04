import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Home",
  description:
    "Maximize your home's value with Sankalp's proven selling strategy. Complimentary market evaluations, staging guidance, and negotiation expertise across the GTA.",
  alternates: { canonical: "https://sankalprealestate.ca/sell" },
};

export default function SellPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          Sellers
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-light">
          Sell With Confidence
        </h1>
      </div>
    </div>
  );
}
