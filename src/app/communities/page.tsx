import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTA Communities & Neighbourhood Guides",
  description:
    "Explore Greater Toronto Area neighbourhoods with expert guides. Schools, amenities, market data, and lifestyle insights for Oakville, Brampton, Mississauga, Toronto, and more.",
  alternates: { canonical: "https://sankalprealestate.ca/communities" },
};

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          Communities
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-light">
          Neighbourhood Guides
        </h1>
      </div>
    </div>
  );
}
