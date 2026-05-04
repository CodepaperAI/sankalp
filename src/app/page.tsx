import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sankalp Real Estate | Luxury GTA Homes & Expert Guidance",
  description:
    "Trusted by families across the Greater Toronto Area. Seven specialties — first-time buyers, luxury homes, condos, pre-construction, investment, relocation, and downsizing. Your home, your legacy.",
  alternates: { canonical: "https://sankalprealestate.ca" },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-6">
          Phase 2 — Coming Soon
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] mb-6">
          Your Home.{" "}
          <em className="italic text-[var(--color-accent-light)]">
            Your Legacy.
          </em>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-md mx-auto leading-relaxed">
          The Sankalp Real Estate website is being crafted. Full marketing site
          launching soon with all seven specialty portals.
        </p>
      </div>
    </div>
  );
}
