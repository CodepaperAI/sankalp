"use client";

import { useMemo, useState } from "react";
import { ScrollReveal } from "@/components/animations";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import { soldResults, soldResultStats, type SoldResult } from "@/lib/sold-results";
import Image from "next/image";
import Link from "next/link";

const filters = ["All", "Residential", "Commercial", "Condos", "Townhomes", "Detached"] as const;
type ResultFilter = (typeof filters)[number];

export function SoldContent() {
  const [activeFilter, setActiveFilter] = useState<ResultFilter>("All");

  const visibleResults = useMemo(() => {
    if (activeFilter === "All") return soldResults;
    if (activeFilter === "Residential" || activeFilter === "Commercial") {
      return soldResults.filter((result) => result.category === activeFilter);
    }
    return soldResults.filter((result) => result.niche === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <PageHero
        eyebrow="Sold Results"
        title="Recent homes, sold."
        subtitle="A selection of real sales across the Greater Toronto Area and beyond."
        imageSrc={images.heroSold}
        imageAlt="Recently sold home in the Greater Toronto Area"
      />

      <section className="relative px-6 lg:px-16 xl:px-24 py-16 lg:py-24 overflow-hidden">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
          <ScrollReveal className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-[var(--color-accent)]" />
              <p className="text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-accent)] font-semibold">
                Verified Sales
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
              Sold across the GTA.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="lg:col-span-5">
            <p className="text-[var(--color-text-muted)] leading-[1.75] text-[1rem]">
              Filter by property type below. Every card reflects a real MLS listing &mdash; type, days on market, and tax detail.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-[var(--color-divider)] mb-10 lg:mb-12">
            <Stat value={soldResultStats.total} label="Sold Results" />
            <Stat value={soldResultStats.residential} label="Residential" />
            <Stat value={soldResultStats.commercial} label="Commercial" />
            <Stat value={soldResultStats.fastSales} label="Sold in 20 Days or Less" />
          </div>
        </ScrollReveal>

        <ScrollReveal className="mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`min-h-11 px-4 text-[0.68rem] tracking-[0.16em] uppercase font-semibold border transition-[background-color,color,border-color] duration-300 ${
                  activeFilter === filter
                    ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-text-inverse)]"
                    : "border-[var(--color-border-strong)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[var(--color-divider)]">
          {visibleResults.map((property, index) => (
            <SoldResultCard key={property.id} property={property} index={index} />
          ))}
        </div>

        <ScrollReveal className="mt-16 text-center">
          <p className="text-[var(--color-text-muted)] mb-6">
            Ready to plan your own result?
          </p>
          <Link
            href="/book"
            className="inline-flex min-h-12 items-center text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-8 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:bg-[var(--color-accent-light)] transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="px-5 py-7 lg:px-8 lg:py-9 border-r border-b lg:border-b-0 border-[var(--color-divider)] even:border-r-0 lg:even:border-r last:border-r-0">
      <p className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-light text-[var(--color-accent-light)] leading-none">
        {value}
      </p>
      <p className="mt-3 text-[0.68rem] tracking-[0.14em] uppercase text-[var(--color-text-muted)] font-semibold">
        {label}
      </p>
    </div>
  );
}

function SoldResultCard({ property, index }: { property: SoldResult; index: number }) {
  const specs = property.category === "Residential"
    ? `${property.beds} bed / ${property.baths} bath / ${property.rooms} rooms`
    : property.propertyType;

  return (
    <ScrollReveal delay={index * 0.035} className="bg-[var(--color-bg)]">
      <article className="group h-full p-5 lg:p-6 hover:bg-[var(--color-surface)] transition-colors duration-300">
        <div className="aspect-[3/2] relative overflow-hidden mb-6 bg-[var(--color-surface)]">
          <Image
            src={property.image}
            alt={`${property.address}, ${property.city}`}
            fill
            className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <span className="absolute top-3 left-3 z-10 text-[0.56rem] tracking-[0.22em] uppercase font-semibold px-3 py-1.5 bg-[var(--color-accent)] text-white">
            Sold
          </span>
          <span className="absolute top-3 right-3 z-10 text-[0.56rem] tracking-[0.18em] uppercase font-semibold px-3 py-1.5 bg-white/90 text-[var(--color-accent)]">
            {property.daysOnMarket} DOM
          </span>
        </div>

        <div className="flex items-start justify-between gap-5 mb-5">
          <div>
            <p className="font-[family-name:var(--font-display)] text-[1.35rem] leading-tight font-normal group-hover:text-[var(--color-accent-light)] transition-colors duration-300">
              {property.address}
            </p>
            <p className="mt-2 text-[0.82rem] text-[var(--color-text-muted)]">
              {property.city} / {specs}
            </p>
          </div>
          <p className="text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-accent)] font-semibold whitespace-nowrap">
            {property.niche}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 py-4 border-y border-[var(--color-divider)] text-[0.78rem]">
          <Detail label="Type" value={property.propertyType} />
          <Detail label="Size" value={property.sqft} />
          <Detail label="MLS" value={property.mls} />
          <Detail label="Taxes" value={`${property.taxes} (${property.taxYear})`} />
        </div>

        {property.features.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {property.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="text-[0.68rem] text-[var(--color-text-muted)] px-3 py-1.5 bg-[var(--color-surface)]"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </article>
    </ScrollReveal>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.58rem] tracking-[0.16em] uppercase text-[var(--color-text-soft)] font-semibold mb-1">
        {label}
      </p>
      <p className="text-[var(--color-text)] leading-snug">{value}</p>
    </div>
  );
}
