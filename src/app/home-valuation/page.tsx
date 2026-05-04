import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Home Valuation",
  description:
    "Get a complimentary, no-obligation market evaluation of your GTA property. Based on real comparables — not automated estimates. Response within 24 hours.",
  alternates: { canonical: "https://sankalprealestate.ca/home-valuation" },
};

export default function HomeValuationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          Sellers
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-light">
          What&apos;s Your Home Worth?
        </h1>
      </div>
    </div>
  );
}
