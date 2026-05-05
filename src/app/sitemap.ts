import type { MetadataRoute } from "next";
import { neighbourhoods } from "@/lib/neighbourhoods";
import { articles } from "@/lib/journal";

const BASE_URL = "https://sankalprealestate.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes = [
    "",
    "/about",
    "/buy",
    "/sell",
    "/communities",
    "/contact",
    "/book",
    "/refer",
    "/home-valuation",
    "/sold",
    "/journal",
  ];

  const niches = [
    "/buy/first-time",
    "/buy/luxury",
    "/buy/condos",
    "/buy/pre-construction",
    "/buy/investment",
    "/buy/relocation",
    "/buy/downsizing",
  ];

  const communityRoutes = neighbourhoods.map((n) => `/communities/${n.slug}`);
  const articleRoutes = articles.map((a) => `/journal/${a.slug}`);

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })),
    ...niches.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...communityRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...articleRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
