import type { Metadata } from "next";
import { JournalContent } from "./journal-content";

export const metadata: Metadata = {
  title: "Journal — Real Estate Insights",
  description:
    "Expert insights on the GTA real estate market. Buying guides, selling tips, neighbourhood spotlights, and investment strategies from Sankalp.",
  alternates: { canonical: "https://sankalprealestate.ca/journal" },
};

export default function JournalPage() {
  return <JournalContent />;
}
