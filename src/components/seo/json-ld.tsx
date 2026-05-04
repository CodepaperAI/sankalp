export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Sankalp Real Estate",
    description:
      "Trusted by families across the Greater Toronto Area. Seven specialties — first-time buyers, luxury homes, condos, pre-construction, investment, relocation, and downsizing.",
    url: "https://sankalprealestate.ca",
    telephone: "+14165550199",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "City", name: "Toronto" },
      { "@type": "City", name: "Mississauga" },
      { "@type": "City", name: "Brampton" },
      { "@type": "City", name: "Oakville" },
      { "@type": "City", name: "Hamilton" },
      { "@type": "City", name: "Vaughan" },
    ],
    priceRange: "$$-$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
