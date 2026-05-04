import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sankalp",
  description:
    "Meet Sankalp — a trusted GTA real estate professional with deep expertise across seven specialties. Serving families in Toronto, Mississauga, Brampton, Oakville, and beyond.",
  alternates: { canonical: "https://sankalprealestate.ca/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          About
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-light">
          About Sankalp
        </h1>
      </div>
    </div>
  );
}
