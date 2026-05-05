"use client";

import { ScrollReveal, TextReveal } from "@/components/animations";
import { neighbourhoods } from "@/lib/neighbourhoods";
import Link from "next/link";

export function CommunitiesContent() {
  return (
    <div className="pt-32 pb-[var(--section-gap)]">
      <section className="px-6 lg:px-16 xl:px-24">
        <ScrollReveal>
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-6">
            Communities
          </p>
        </ScrollReveal>
        <TextReveal
          text="Know the neighbourhood before you buy."
          as="h1"
          className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] mb-4"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-[var(--color-text-muted)] leading-[1.7] max-w-[560px] mb-16">
            Every GTA neighbourhood has its own character, market dynamics, and
            lifestyle. These guides go beyond listings — schools, commute,
            amenities, and the things only a local would know.
          </p>
        </ScrollReveal>

        {/* Community grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-divider)]">
          {neighbourhoods.map((n, i) => (
            <ScrollReveal
              key={n.slug}
              delay={i * 0.08}
              className={`bg-[var(--color-bg)] group ${
                i === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <Link href={`/communities/${n.slug}`} className="block p-8 lg:p-10 h-full">
                {/* Image placeholder */}
                <div
                  className={`w-full border border-[var(--color-border)] flex items-center justify-center bg-[var(--color-surface)] mb-6 group-hover:border-[var(--color-border-strong)] transition-colors duration-300 ${
                    i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"
                  }`}
                >
                  <p className="text-[0.55rem] tracking-[0.15em] uppercase text-[var(--color-text-muted)] opacity-40">
                    {n.name} photography
                  </p>
                </div>

                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2">
                  {n.city}
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-normal mb-2 group-hover:text-[var(--color-accent-light)] transition-colors duration-300">
                  {n.name}
                </h2>
                <p className="text-[0.85rem] text-[var(--color-text-muted)] mb-4 italic">
                  {n.tagline}
                </p>
                <div className="flex items-center gap-4 text-[0.75rem] text-[var(--color-text-muted)]">
                  <span>Avg. {n.stats.avgPrice}</span>
                  <span className="text-[var(--color-divider)]">|</span>
                  <span>{n.stats.priceChangeYoY} YoY</span>
                </div>
                <p className="mt-4 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.15em] uppercase text-[var(--color-accent)] font-medium group-hover:gap-4 transition-all duration-300">
                  Read Guide
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
