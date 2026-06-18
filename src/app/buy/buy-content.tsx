"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "@/components/animations";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

type Niche = {
  name: string;
  href: string;
  tagline: string;
  number: string;
  meta: string;
  image: string;
};

const niches: Niche[] = [
  {
    name: "First-Time Buyers",
    href: "/buy/first-time",
    tagline: "Your first home should feel like a milestone, not a maze.",
    number: "01",
    meta: "Pre-approval · Tax rebates · FHSA",
    image: "/images/niches/first-time.jpg",
  },
  {
    name: "Condos",
    href: "/buy/condos",
    tagline: "Urban living, curated.",
    number: "02",
    meta: "Status certs · Reserve audits · Boards",
    image: "/images/niches/condos.jpg",
  },
  {
    name: "Pre-Construction",
    href: "/buy/pre-construction",
    tagline: "Invest before the foundation is poured.",
    number: "03",
    meta: "Platinum access · Assignments · Occupancy",
    image: "/images/niches/pre-construction.jpg",
  },
  {
    name: "Investment Properties",
    href: "/buy/investment",
    tagline: "Build wealth through real estate.",
    number: "04",
    meta: "Cap rate · Tenant-ready · Tax strategy",
    image: "/images/niches/investment.jpg",
  },
  {
    name: "Luxury Homes",
    href: "/buy/luxury",
    tagline: "Legacy properties deserve legacy service.",
    number: "05",
    meta: "Off-market · Discreet showings · Concierge",
    image: "/images/niches/luxury.jpg",
  },
  {
    name: "Relocation",
    href: "/buy/relocation",
    tagline: "New to the GTA? Let's find your community.",
    number: "06",
    meta: "School zones · Commute · Cultural fit",
    image: "/images/niches/relocation.jpg",
  },
  {
    name: "Downsizing",
    href: "/buy/downsizing",
    tagline: "The next chapter, not a compromise.",
    number: "07",
    meta: "Sell-then-buy · Estate · Senior concierge",
    image: "/images/niches/downsizing.jpg",
  },
];

export function BuyContent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <PageHero
        eyebrow="Buyers"
        title="Seven ways to find your home."
        imageSrc={images.heroBuying}
        imageAlt="GTA luxury home"
      />

      <section className="px-6 lg:px-16 xl:px-24 py-16 lg:py-24">
        {/* Intro split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-20">
          <ScrollReveal className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-[var(--color-accent)]" />
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium">
                Specialties &nbsp;·&nbsp; 01 — 07
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-[1.1]">
              No two buyers are the same.{" "}
              <em className="italic text-[var(--color-accent-light)]">
                Find your practice.
              </em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="lg:col-span-5">
            <p className="text-[var(--color-text-muted)] leading-[1.75] text-[1rem]">
              Seven focused practices — each with dedicated market knowledge,
              tailored strategies, and a track record we&apos;d put our name on.
            </p>
          </ScrollReveal>
        </div>

        {/* Niche list with floating preview */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* List — 7 cols */}
          <div className="lg:col-span-7 border-t border-[var(--color-border)]">
            {niches.map((niche, i) => (
              <ScrollReveal key={niche.href} delay={i * 0.04}>
                <Link
                  href={niche.href}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(i)}
                  onBlur={() => setHoveredIndex(null)}
                  className={`group relative grid grid-cols-[auto_1fr_auto] gap-5 lg:gap-8 items-center py-7 lg:py-9 border-b border-[var(--color-border)] transition-colors duration-500 ${
                    hoveredIndex === i ? "lg:bg-[var(--color-bg)]" : ""
                  }`}
                >
                  {/* Numeral */}
                  <span
                    className={`font-[family-name:var(--font-display)] italic text-[2rem] lg:text-[2.75rem] leading-none font-light tabular-nums tracking-tight transition-colors duration-500 ${
                      hoveredIndex === i
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-border-strong)]"
                    }`}
                  >
                    &mdash;&nbsp;{niche.number}
                  </span>

                  {/* Body */}
                  <div className="min-w-0">
                    <h3
                      className={`font-[family-name:var(--font-display)] text-[1.5rem] lg:text-[2rem] font-normal leading-tight transition-colors duration-300 mb-2 ${
                        hoveredIndex === i
                          ? "text-[var(--color-accent-light)]"
                          : "text-[var(--color-text)]"
                      }`}
                    >
                      {niche.name}
                    </h3>
                    <p className="text-[0.92rem] text-[var(--color-text-muted)] leading-[1.55] mb-2 max-w-[480px]">
                      {niche.tagline}
                    </p>
                    <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[var(--color-accent)]/65 font-medium">
                      {niche.meta}
                    </p>
                  </div>

                  {/* Mobile thumb + Arrow */}
                  <div className="flex items-center gap-3 lg:gap-5">
                    {/* Mobile thumb */}
                    <div className="lg:hidden relative w-16 h-20 sm:w-24 sm:h-28 overflow-hidden bg-[var(--color-surface)] flex-shrink-0">
                      <Image
                        src={niche.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 64px, 96px"
                      />
                    </div>
                    {/* Arrow */}
                    <svg
                      className={`w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 transition-all duration-400 ${
                        hoveredIndex === i
                          ? "text-[var(--color-accent)] translate-x-1"
                          : "text-[var(--color-border-strong)] group-hover:text-[var(--color-accent)]"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Floating preview — 5 cols, sticky */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={
                      hoveredIndex !== null ? niches[hoveredIndex].number : "idle"
                    }
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={
                        hoveredIndex !== null
                          ? niches[hoveredIndex].image
                          : niches[0].image
                      }
                      alt=""
                      fill
                      className="object-cover"
                      sizes="40vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Editorial frame */}
                <div className="absolute inset-4 border border-white/15 pointer-events-none" />

                {/* Bottom gradient + caption */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white/95 pointer-events-none">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`cap-${hoveredIndex ?? "idle"}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-[0.55rem] tracking-[0.3em] uppercase opacity-75 mb-2">
                        {hoveredIndex !== null ? "Specialty" : "Hover to preview"}
                      </p>
                      <p className="font-[family-name:var(--font-display)] text-[1.4rem] font-light leading-tight">
                        {hoveredIndex !== null
                          ? niches[hoveredIndex].name
                          : "Seven specialties"}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  <span className="font-[family-name:var(--font-display)] italic text-[3rem] leading-none font-light">
                    {hoveredIndex !== null ? niches[hoveredIndex].number : "07"}
                  </span>
                </div>
              </div>

              {/* CTA below preview */}
              <Link
                href="/book"
                className="group mt-4 flex items-center justify-between gap-4 px-6 py-5 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:bg-[var(--color-accent-light)] transition-colors duration-400"
              >
                <span className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold">
                  Not sure which fits? Let&apos;s talk.
                </span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile-only CTA */}
        <ScrollReveal className="lg:hidden mt-14 text-center">
          <p className="text-[var(--color-text-muted)] mb-6 text-[0.95rem]">
            Not sure which specialty fits you?
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
