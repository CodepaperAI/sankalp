import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer a Friend",
  description:
    "Know someone buying or selling in the GTA? Refer them to Sankalp and receive a personal thank-you gift when the transaction closes.",
  alternates: { canonical: "https://sankalprealestate.ca/refer" },
};

export default function ReferPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          Referral
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-light">
          Refer a Friend
        </h1>
      </div>
    </div>
  );
}
