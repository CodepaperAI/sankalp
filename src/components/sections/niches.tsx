"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ScrollReveal } from "@/components/animations";
import Link from "next/link";

const niches = [
  {
    number: "01",
    name: "First-Time Buyers",
    description: "Navigating your first purchase with clarity. From pre-approval to possession day — every step demystified, every question welcomed.",
    href: "/buy/first-time",
    image: "First home photography — to be sourced",
  },
  {
    number: "02",
    name: "Condos",
    description: "Urban living, curated. From boutique low-rises to skyline penthouses — we know the buildings, the boards, and the hidden gems.",
    href: "/buy/condos",
    image: "Condo interior — to be sourced",
  },
  {
    number: "03",
    name: "Pre-Construction",
    description: "Invest before the foundation is poured. Developer track records, real numbers, and negotiated incentives others don't get.",
    href: "/buy/pre-construction",
    image: "Construction render — to be sourced",
  },
  {
    number: "04",
    name: "Investment Properties",
    description: "Build wealth through real estate. Cash flow analysis, tenant-ready properties, and portfolio strategy for serious investors.",
    href: "/buy/investment",
    image: "Investment property — to be sourced",
  },
  {
    number: "05",
    name: "Luxury Homes",
    description: "Estates, custom builds, and legacy properties across Oakville, King City, Forest Hill, and the Bridle Path. White-glove service.",
    href: "/buy/luxury",
    image: "Luxury property — to be sourced",
  },
  {
    number: "06",
    name: "Relocation",
    description: "Moving to the GTA? We help newcomers find their community — proximity to schools, cultural centres, transit, and family.",
    href: "/buy/relocation",
    image: "GTA community — to be sourced",
  },
  {
    number: "07",
    name: "Downsizing",
    description: "The next chapter, not a compromise. Right-sizing your space while preserving what matters — community, comfort, and connection.",
    href: "/buy/downsizing",
    image: "Comfortable home — to be sourced",
  },
];

export function Niches() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24">
      <ScrollReveal className="mb-16">
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          Specialties
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] mb-4">
          Every journey is different.{" "}
          <em className="italic text-[var(--color-accent-light)]">
            So is our expertise.
          </em>
        </h2>
        <p className="text-[var(--color-text-muted)] max-w-[520px] leading-[1.7] text-[0.95rem]">
          Seven focused practices — each with dedicated market knowledge,
          tailored strategies, and clients who&apos;ll tell you the difference it made.
        </p>
      </ScrollReveal>

      {/* Niche cards — staggered asymmetric layout */}
      <div ref={containerRef} className="space-y-24 lg:space-y-32">
        {niches.map((niche, i) => (
          <NicheItem key={niche.number} niche={niche} index={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

function NicheItem({
  niche,
  index,
}: {
  niche: (typeof niches)[0];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center ${
        isEven ? "" : "lg:grid-cols-[1fr_1.2fr] lg:[direction:rtl]"
      }`}
    >
      {/* Image area */}
      <motion.div
        className={`aspect-[4/3] border border-[var(--color-border)] relative overflow-hidden flex items-center justify-center ${
          !isEven ? "lg:[direction:ltr]" : ""
        }`}
        style={{
          background: "linear-gradient(135deg, #1a1815 0%, #2a2520 50%, #1a1610 100%)",
          y: imageY,
          opacity: imageOpacity,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(201,169,110,0.06)_0%,transparent_60%)]" />
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)] text-center opacity-50">
          {niche.image}
        </p>
      </motion.div>

      {/* Content */}
      <div className={`py-4 ${!isEven ? "lg:[direction:ltr]" : ""}`}>
        <ScrollReveal delay={0.1}>
          <span className="font-[family-name:var(--font-display)] text-[4rem] lg:text-[5rem] font-light leading-none text-[rgba(201,169,110,0.1)] block mb-3">
            {niche.number}
          </span>
          <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[var(--color-accent-light)] mb-4">
            {niche.name}
          </h3>
          <p className="text-[var(--color-text-muted)] leading-[1.8] max-w-[400px] mb-6">
            {niche.description}
          </p>
          <Link
            href={niche.href}
            className="inline-flex items-center gap-3 text-[0.75rem] tracking-[0.15em] uppercase text-[var(--color-accent)] font-medium group"
          >
            Explore {niche.name.split(" ")[0]}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
