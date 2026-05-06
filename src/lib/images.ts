/**
 * Local stock images (downloaded from Unsplash).
 * Replace with professional photography when available.
 */

export const images = {
  // Hero
  heroLuxuryHome: "/images/hero/luxury-home.jpg",
  heroInterior: "/images/hero/interior.jpg",

  // Niche images
  firstTimeBuyers: "/images/niches/first-time.jpg",
  condos: "/images/niches/condos.jpg",
  preConstruction: "/images/niches/pre-construction.jpg",
  investment: "/images/niches/investment.jpg",
  luxury: "/images/niches/luxury.jpg",
  relocation: "/images/niches/relocation.jpg",
  downsizing: "/images/niches/downsizing.jpg",

  // Transaction properties
  property1: "/images/properties/property-1.jpg",
  property2: "/images/properties/property-2.jpg",
  property3: "/images/properties/property-3.jpg",
  property4: "/images/properties/property-4.jpg",
  property5: "/images/properties/property-5.jpg",

  // Neighbourhoods
  oakville: "/images/neighbourhoods/oakville.jpg",
  brampton: "/images/neighbourhoods/brampton.jpg",
  mississauga: "/images/neighbourhoods/mississauga.jpg",
  yorkville: "/images/neighbourhoods/yorkville.jpg",
  kingCity: "/images/neighbourhoods/king-city.jpg",

  // About / referral
  community: "/images/about/community.jpg",
  agent: "/images/about/agent.jpg",
} as const;

export const nicheImages: Record<string, string> = {
  "first-time": images.firstTimeBuyers,
  condos: images.condos,
  "pre-construction": images.preConstruction,
  investment: images.investment,
  luxury: images.luxury,
  relocation: images.relocation,
  downsizing: images.downsizing,
};

export const neighbourhoodImages: Record<string, string> = {
  oakville: images.oakville,
  brampton: images.brampton,
  mississauga: images.mississauga,
  yorkville: images.yorkville,
  "king-city": images.kingCity,
};

export const propertyImages = [
  images.property1,
  images.property2,
  images.property3,
  images.property4,
  images.property5,
];
