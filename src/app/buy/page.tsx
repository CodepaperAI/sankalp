import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy a Home in the GTA",
  description:
    "Whether you're a first-time buyer, upgrading to luxury, or investing in pre-construction — Sankalp guides you through every step of buying in the Greater Toronto Area.",
  alternates: { canonical: "https://sankalprealestate.ca/buy" },
};

export default function BuyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          Buyers
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-light">
          Find Your Home
        </h1>
      </div>
    </div>
  );
}
