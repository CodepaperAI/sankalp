"use client";

import { ScrollReveal, TextReveal } from "@/components/animations";
import Link from "next/link";

const niches = [
  { name: "First-Time Buyers", href: "/buy/first-time", tagline: "Your first home should feel like a milestone, not a maze.", number: "01" },
  { name: "Condos", href: "/buy/condos", tagline: "Urban living, curated.", number: "02" },
  { name: "Pre-Construction", href: "/buy/pre-construction", tagline: "Invest before the foundation is poured.", number: "03" },
  { name: "Investment Properties", href: "/buy/investment", tagline: "Build wealth through real estate.", number: "04" },
  { name: "Luxury Homes", href: "/buy/luxury", tagline: "Legacy properties deserve legacy service.", number: "05" },
  { name: "Relocation", href: "/buy/relocation", tagline: "New to the GTA? Let's find your community.", number: "06" },
  { name: "Downsizing", href: "/buy/downsizing", tagline: "The next chapter, not a compromise.", number: "07" },
];

export function BuyContent() {
  return (
    <div className="pt-32 pb-[var(--section-gap)]">
      <section className="px-6 lg:px-16 xl:px-24">
        <ScrollReveal>
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-6">
            Buyers
          </p>
        </ScrollReveal>
        <TextReveal
          text="Seven ways to find your home."
          as="h1"
          className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] mb-4"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-[var(--color-text-muted)] leading-[1.7] max-w-[560px] mb-16">
            No two buyers are the same. That&apos;s why we built seven focused
            practices — each with dedicated market knowledge, tailored
            strategies, and a proven track record. Find yours.
          </p>
        </ScrollReveal>

        {/* Niche list */}
        <div className="divide-y divide-[var(--color-divider)]">
          {niches.map((niche, i) => (
            <ScrollReveal key={niche.href} delay={i * 0.06}>
              <Link
                href={niche.href}
                className="flex items-center gap-6 lg:gap-10 py-8 lg:py-10 group"
              >
                <span className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-light text-[var(--color-accent-dim)] w-12 shrink-0">
                  {niche.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,2.5vw,2rem)] font-normal group-hover:text-[var(--color-accent-light)] transition-colors duration-300">
                    {niche.name}
                  </h2>
                  <p className="text-[0.9rem] text-[var(--color-text-muted)] mt-1 hidden sm:block">
                    {niche.tagline}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-[var(--color-accent)] shrink-0 transition-transform duration-300 group-hover:translate-x-2"
                  viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="mt-16 text-center">
          <p className="text-[var(--color-text-muted)] mb-6">
            Not sure which specialty fits you?
          </p>
          <Link
            href="/book"
            className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_24px_rgba(184,150,12,0.2)] hover:scale-[1.03] transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
