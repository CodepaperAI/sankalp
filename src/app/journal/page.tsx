import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — Real Estate Insights",
  description:
    "Expert insights on the GTA real estate market. Buying guides, selling tips, neighbourhood spotlights, and investment strategies from Sankalp.",
  alternates: { canonical: "https://sankalprealestate.ca/journal" },
};

export default function JournalPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          Journal
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-light">
          Real Estate Insights
        </h1>
      </div>
    </div>
  );
}
