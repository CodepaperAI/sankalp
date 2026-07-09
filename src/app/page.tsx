import type { Metadata } from "next";
import {
  Hero,
  StartHere,
  ContextPaths,
  StatsBar,
  Niches,
  Transactions,
  Testimonials,
  LeadCapture,
  Referral,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Sankalp Real Estate | Luxury GTA Homes & Expert Guidance",
  description:
    "Trusted by families across the Greater Toronto Area. Seven specialties - first-time buyers, luxury homes, condos, pre-construction, investment, relocation, and downsizing. Your home, your legacy.",
  alternates: { canonical: "https://sankalprealestate.ca" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StartHere />
      <Transactions />
      <ContextPaths />
      <Niches />
      <StatsBar />
      <Testimonials />
      <LeadCapture />
      <Referral />
    </>
  );
}
