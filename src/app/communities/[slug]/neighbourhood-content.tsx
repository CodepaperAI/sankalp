"use client";

import { ScrollReveal, TextReveal, StatsCounter } from "@/components/animations";
import { neighbourhoodImages } from "@/lib/images";
import type { Neighbourhood } from "@/lib/neighbourhoods";
import Image from "next/image";
import Link from "next/link";

export function NeighbourhoodContent({
  neighbourhood: n,
}: {
  neighbourhood: Neighbourhood;
}) {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-6 lg:px-16 xl:px-24 pb-16">
        <ScrollReveal>
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-2">
            Community Guide
          </p>
          <p className="text-[0.7rem] tracking-[0.15em] text-[var(--color-text-muted)] mb-6">
            {n.city}
          </p>
        </ScrollReveal>
        <TextReveal
          text={n.name}
          as="h1"
          className="font-[family-name:var(--font-display)] text-[clamp(3rem,6vw,5rem)] font-light leading-[1.05] mb-4"
        />
        <ScrollReveal delay={0.2}>
          <p className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,2vw,1.75rem)] font-light italic text-[var(--color-accent-light)] mb-8">
            {n.tagline}
          </p>
        </ScrollReveal>

        {/* Hero image */}
        <ScrollReveal delay={0.3}>
          <div className="w-full aspect-[21/9] relative overflow-hidden">
            <Image
              src={neighbourhoodImages[n.slug] || "/images/hero/luxury-home.jpg"}
              alt={`${n.name} neighbourhood`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Stats bar */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[var(--color-divider)] bg-[var(--color-surface)]">
        <StatBlock label="Avg. Home Price" value={n.stats.avgPrice} />
        <StatBlock label="Avg. Days on Market" value={`${n.stats.avgDaysOnMarket}`} />
        <StatBlock label="YoY Price Change" value={n.stats.priceChangeYoY} />
        <StatBlock label="Active Listings" value={`${n.stats.activeListings}`} />
      </section>

      {/* Description */}
      <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
          <div>
            <ScrollReveal>
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
                About {n.name}
              </p>
            </ScrollReveal>
            <div className="space-y-5">
              {n.description.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <p className="text-[var(--color-text-muted)] leading-[1.8]">{p}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Sidebar — highlights & ideal for */}
          <div className="space-y-10">
            <ScrollReveal delay={0.2}>
              <h3 className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-4">
                Highlights
              </h3>
              <ul className="space-y-3">
                {n.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M13 4L6 11l-3-3" />
                    </svg>
                    <span className="text-[0.9rem] text-[var(--color-text-muted)]">{h}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h3 className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-4">
                Ideal For
              </h3>
              <div className="flex flex-wrap gap-2">
                {n.idealFor.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.75rem] tracking-[0.05em] px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Schools, Amenities, Transit — three columns */}
      <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 bg-[var(--color-surface)] border-t border-[var(--color-divider)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ScrollReveal>
            <h3 className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-5">
              Notable Schools
            </h3>
            <ul className="space-y-2.5">
              {n.schools.map((s) => (
                <li key={s} className="text-[0.85rem] text-[var(--color-text-muted)]">{s}</li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-5">
              Key Amenities
            </h3>
            <ul className="space-y-2.5">
              {n.amenities.map((a) => (
                <li key={a} className="text-[0.85rem] text-[var(--color-text-muted)]">{a}</li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h3 className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-5">
              Transit & Commute
            </h3>
            <p className="text-[0.85rem] text-[var(--color-text-muted)] leading-[1.7]">
              {n.transitNotes}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] mb-4">
            Interested in {n.name}?
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-md mx-auto mb-8">
            Get a personalized tour and market report for {n.name}. No obligation.
          </p>
          <Link
            href="/book"
            className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_24px_rgba(45,90,61,0.15)] hover:scale-[1.03] transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-10 px-6 text-center relative after:content-[''] after:absolute after:right-0 after:top-[15%] after:bottom-[15%] after:w-px after:bg-[var(--color-divider)] last:after:hidden">
      <p className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.25rem)] font-light text-[var(--color-accent-light)] leading-none mb-2">
        {value}
      </p>
      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
        {label}
      </p>
    </div>
  );
}
