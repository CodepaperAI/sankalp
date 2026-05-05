import type { Metadata } from "next";
import { CommunitiesContent } from "./communities-content";

export const metadata: Metadata = {
  title: "GTA Communities & Neighbourhood Guides",
  description:
    "Explore Greater Toronto Area neighbourhoods with expert guides. Schools, amenities, market data, and lifestyle insights for Oakville, Brampton, Mississauga, Toronto, and more.",
  alternates: { canonical: "https://sankalprealestate.ca/communities" },
};

export default function CommunitiesPage() {
  return <CommunitiesContent />;
}
