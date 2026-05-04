import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sankalp",
  description:
    "Get in touch with Sankalp for a consultation, home valuation, or any real estate question. Serving the Greater Toronto Area with seven specialties.",
  alternates: { canonical: "https://sankalprealestate.ca/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          Contact
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-light">
          Let&apos;s Connect
        </h1>
      </div>
    </div>
  );
}
