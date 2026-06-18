"use client";

import { ScrollReveal, TextReveal } from "@/components/animations";
import { PageHero } from "@/components/sections/page-hero";
import { propertyImages, images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

const soldProperties = [
  { address: "142 Lakeshore Road", area: "Oakville", specs: "4 Bed · 3 Bath · 3,200 sqft", price: "$2,450,000", type: "Detached", niche: "Luxury" },
  { address: "1 Bloor Street E, PH4", area: "Yorkville", specs: "2 Bed · 2 Bath · 1,800 sqft", price: "$1,890,000", type: "Condo", niche: "Luxury" },
  { address: "78 Heritage Hills Drive", area: "Brampton", specs: "5 Bed · 4 Bath · 4,100 sqft", price: "$1,350,000", type: "Detached", niche: "Relocation" },
  { address: "M City Tower 4, Unit 2812", area: "Mississauga", specs: "1+Den · 1 Bath · 650 sqft", price: "$625,000", type: "Condo", niche: "Pre-Construction" },
  { address: "34 James Street N", area: "Hamilton", specs: "Duplex · 6 Bed · 3 Bath", price: "$890,000", type: "Duplex", niche: "Investment" },
  { address: "22 Pine Grove Avenue", area: "Oakville", specs: "3 Bed · 2 Bath · 2,400 sqft", price: "$1,680,000", type: "Detached", niche: "Downsizing" },
  { address: "550 Queens Quay W, #1204", area: "Toronto", specs: "2 Bed · 2 Bath · 950 sqft", price: "$820,000", type: "Condo", niche: "First-Time" },
  { address: "88 Scott Street, #3601", area: "Toronto", specs: "1 Bed · 1 Bath · 580 sqft", price: "$545,000", type: "Condo", niche: "Investment" },
  { address: "15 Ravine Drive", area: "King City", specs: "6 Bed · 5 Bath · 5,800 sqft", price: "$3,200,000", type: "Estate", niche: "Luxury" },
];

export function SoldContent() {
  return (
    <div>
      <PageHero eyebrow="Recent Transactions" title="Results that speak for themselves." imageSrc={images.heroSold} imageAlt="Sold luxury property" />
      <section className="relative px-6 lg:px-16 xl:px-24 py-16 lg:py-24 overflow-hidden">
        {/* Ambient blob */}
        <div
          aria-hidden
          className="absolute -top-20 -left-40 w-[520px] h-[520px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,90,61,1) 0%, transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-20">
          <ScrollReveal className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-[var(--color-accent)]" />
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium">
                Closed Deals &nbsp;·&nbsp; 2024 — 2025
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
              Each address is a family&apos;s{" "}
              <em className="italic text-[var(--color-accent-light)]">trust honoured.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="lg:col-span-5">
            <p className="text-[var(--color-text-muted)] leading-[1.75] text-[1rem]">
              A selection of recent transactions from across the GTA — every
              property type, every neighbourhood, every chapter different.
            </p>
          </ScrollReveal>
        </div>

        {/* Transactions grid — bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-divider)]">
          {soldProperties.map((property, i) => (
            <ScrollReveal
              key={property.address}
              delay={i * 0.05}
              className={`bg-[var(--color-bg)] p-6 lg:p-8 group hover:bg-[var(--color-surface)] transition-colors duration-300 ${
                i === 0 || i === 8 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Property image */}
              <div className="aspect-[16/10] relative overflow-hidden mb-5 group-hover:shadow-md transition-shadow duration-300">
                <Image
                  src={propertyImages[i % propertyImages.length]}
                  alt={`${property.address}, ${property.area}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 z-10 text-[0.55rem] tracking-[0.2em] uppercase font-semibold px-2 py-1 bg-[var(--color-success)] text-white">
                  Sold
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-lg font-normal mb-1 group-hover:text-[var(--color-accent-light)] transition-colors duration-300">
                    {property.address}
                  </p>
                  <p className="text-[0.75rem] text-[var(--color-text-muted)]">
                    {property.area} &middot; {property.specs}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-accent-light)]">
                    {property.price}
                  </p>
                  <p className="text-[0.65rem] tracking-[0.1em] text-[var(--color-text-muted)]">
                    {property.niche}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="mt-16 text-center">
          <p className="text-[var(--color-text-muted)] mb-6">
            Ready to add your success story?
          </p>
          <Link
            href="/book"
            className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_32px_rgba(45,90,61,0.15)] hover:scale-[1.03] transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
