import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recently Sold Properties",
  description:
    "Browse Sankalp's recent transactions across the Greater Toronto Area. Luxury homes, condos, investment properties, and more — results that speak.",
  alternates: { canonical: "https://sankalprealestate.ca/sold" },
};

export default function SoldPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          Transactions
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-light">
          Results Speak
        </h1>
      </div>
    </div>
  );
}
