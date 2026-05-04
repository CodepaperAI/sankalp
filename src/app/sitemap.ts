import type { MetadataRoute } from "next";

// TODO: Phase 3 — pull dynamic routes from Sanity CMS
// (neighbourhood slugs, journal posts, property pages)

const BASE_URL = "https://sankalprealestate.ca";

export default function sitemap(): MetadataRoute.Sitemap {
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

  const now = new Date().toISOString();

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
  ];
}
