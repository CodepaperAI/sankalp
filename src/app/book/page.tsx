import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a one-on-one consultation with Sankalp. Whether buying, selling, or investing in the GTA — let's start with a conversation.",
  alternates: { canonical: "https://sankalprealestate.ca/book" },
};

export default function BookPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          Book
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-light">
          Book a Consultation
        </h1>
      </div>
    </div>
  );
}
