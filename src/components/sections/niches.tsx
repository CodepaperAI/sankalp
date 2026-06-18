"use client";

import { ScrollReveal } from "@/components/animations";
import Image from "next/image";
import Link from "next/link";

type Niche = {
  number: string;
  name: string;
  tag: "FLAGSHIP" | "SPECIALTY";
  tagline: string;
  description?: string;
  href: string;
  image: string;
};

const flagship: Niche = {
  number: "05",
  name: "Luxury Homes",
  tag: "FLAGSHIP",
  tagline:
    "Estates and legacy properties across Oakville, King City, Forest Hill, and the Bridle Path.",
  description:
    "Estates, custom builds, and legacy holdings across the GTA's most discreet enclaves. Off-market access, NDA-bound showings, and the kind of patience these homes deserve — from heritage estates in Forest Hill to architect-led builds on the Bridle Path.",
  href: "/buy/luxury",
  image: "/images/niches/luxury.jpg",
};

const supporting: Niche[] = [
  {
    number: "01",
    name: "First-Time Buyers",
    tag: "SPECIALTY",
    tagline:
      "Your first home shouldn't be your hardest. Mortgages, rebates, and the questions you didn't know to ask.",
    href: "/buy/first-time",
    image: "/images/niches/first-time.jpg",
  },
  {
    number: "03",
    name: "Pre-Construction",
    tag: "SPECIALTY",
    tagline:
      "Buy before the foundation. Platinum access to the projects worth waiting for.",
    href: "/buy/pre-construction",
    image: "/images/niches/pre-construction.jpg",
  },
  {
    number: "02",
    name: "Condos",
    tag: "SPECIALTY",
    tagline:
      "We know the buildings, the boards, and which floors actually appreciate.",
    href: "/buy/condos",
    image: "/images/niches/condos.jpg",
  },
  {
    number: "04",
    name: "Investment Properties",
    tag: "SPECIALTY",
    tagline:
      "Real estate as wealth, not hobby. Cash-flow models, tenant-ready listings, the long game.",
    href: "/buy/investment",
    image: "/images/niches/investment.jpg",
  },
  {
    number: "06",
    name: "Relocation",
    tag: "SPECIALTY",
    tagline:
      "New to the GTA? We'll help you find more than a house — we'll find your neighbourhood.",
    href: "/buy/relocation",
    image: "/images/niches/relocation.jpg",
  },
  {
    number: "07",
    name: "Downsizing",
    tag: "SPECIALTY",
    tagline:
      "A thoughtful next chapter, planned around the life you want to keep.",
    href: "/buy/downsizing",
    image: "/images/niches/downsizing.jpg",
  },
];

export function Niches() {
  return (
    <section className="relative py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 overflow-hidden">
      {/* Header */}
      <div className="relative mb-14 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <ScrollReveal className="lg:col-span-7">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-[var(--color-accent)]" />
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium">
              Ways We Can Help
            </p>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05]">
            A practice tailored{" "}
            <em className="italic text-[var(--color-accent-light)]">
              to every move.
            </em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="lg:col-span-5">
          <p className="text-[var(--color-text-muted)] leading-[1.75] text-[1rem]">
            Seven practices, each a discipline of its own — with the depth, contacts,
            and patience the work actually requires.
          </p>
        </ScrollReveal>
      </div>

      {/* Asymmetric editorial grid */}
      <div className="relative grid grid-cols-12 gap-3 lg:gap-4 lg:auto-rows-[152px]">
        {/* FLAGSHIP — Luxury Homes (col 1-8, row 1-4) */}
        <NicheCard
          niche={flagship}
          isFlagship
          layout="col-span-12 lg:col-span-8 lg:row-span-4 aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto"
        />

        {/* TALL NARROW STACK — First-Time + Pre-Construction (col 9-12) */}
        <NicheCard
          niche={supporting[0]}
          layout="col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-2 aspect-[4/5] md:aspect-[3/4] lg:aspect-auto"
        />
        <NicheCard
          niche={supporting[1]}
          layout="col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-2 aspect-[4/5] md:aspect-[3/4] lg:aspect-auto"
        />

        {/* BOTTOM ROW — Condos, Investment, Relocation */}
        <NicheCard
          niche={supporting[2]}
          layout="col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-2 aspect-[4/5] md:aspect-[3/4] lg:aspect-auto"
        />
        <NicheCard
          niche={supporting[3]}
          layout="col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-2 aspect-[4/5] md:aspect-[3/4] lg:aspect-auto"
        />
        <NicheCard
          niche={supporting[4]}
          layout="col-span-12 lg:col-span-4 lg:row-span-2 aspect-[4/5] md:aspect-[16/9] lg:aspect-auto"
        />
        <NicheCard
          niche={supporting[5]}
          layout="col-span-12 lg:col-span-12 lg:row-span-2 aspect-[16/10] md:aspect-[16/7] lg:aspect-auto"
        />

        {/* CTA RIBBON — full width, row 7 */}
        <CTARibbon />
      </div>
    </section>
  );
}

function NicheCard({
  niche,
  isFlagship,
  layout,
}: {
  niche: Niche;
  isFlagship?: boolean;
  layout: string;
}) {
  return (
    <Link
      href={niche.href}
      aria-label={`Explore ${niche.name}`}
      className={`group relative block overflow-hidden bg-[var(--color-surface)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] ${layout}`}
    >
      {/* Background image */}
      <Image
        src={niche.image}
        alt={niche.name}
        fill
        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        sizes={
          isFlagship
            ? "(max-width: 1024px) 100vw, 66vw"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        }
      />

      {/* Dark gradient veil — 10% top → 85% bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.70) 75%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Top-left: italic serif numeral */}
      <span
        className={`absolute top-5 left-5 lg:top-7 lg:left-7 font-[family-name:var(--font-display)] italic font-light text-white/85 ${
          isFlagship ? "text-[1.05rem] lg:text-[1.2rem]" : "text-[0.95rem]"
        }`}
      >
        &mdash;&nbsp;{niche.number}
      </span>

      {/* Top-right: uppercase letterspaced tag */}
      <span
        className={`absolute top-5 right-5 lg:top-7 lg:right-7 text-[0.65rem] tracking-[0.22em] uppercase font-semibold ${
          isFlagship ? "text-white/95" : "text-white/75"
        }`}
      >
        {niche.tag}
      </span>

      {/* Bottom content */}
      <div
        className={`absolute inset-x-0 bottom-0 text-white ${
          isFlagship ? "p-7 lg:p-10" : "p-5 lg:p-6"
        }`}
      >
        <h3
          className={`font-[family-name:var(--font-display)] font-light leading-[1.1] mb-3 ${
            isFlagship
              ? "text-[clamp(1.85rem,3.2vw,2.4rem)]"
              : "text-[clamp(1.25rem,1.8vw,1.5rem)]"
          }`}
        >
          {niche.name}
        </h3>
        <p
          className={`leading-[1.55] text-white/85 ${
            isFlagship
              ? "text-[0.95rem] lg:text-[1rem] max-w-[480px]"
              : "text-[0.82rem] lg:text-[0.85rem] line-clamp-3"
          }`}
        >
          {isFlagship ? niche.description : niche.tagline}
        </p>

        {/* VIEW SPECIALTY arrow — fades up on hover */}
        <div
          className={`flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-white opacity-100 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-[opacity,transform] duration-300 ${
            isFlagship ? "mt-6" : "mt-4"
          }`}
        >
          View {isFlagship ? "Flagship" : "Specialty"}
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function CTARibbon() {
  return (
    <div className="col-span-12 bg-[var(--color-accent)] text-[var(--color-text-inverse)] px-7 lg:px-12 py-7 lg:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-8 mt-1">
      {/* Decorative micro-mark on the left */}
      <div className="flex items-center gap-5">
        <span className="hidden sm:block w-10 h-px bg-[var(--color-text-inverse)]/40" />
        <p className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,2.2vw,1.75rem)] font-light leading-tight">
          Not sure where you fit?{" "}
          <em className="italic opacity-90">Let&apos;s talk.</em>
        </p>
      </div>

      <Link
        href="/book"
        className="group inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase font-semibold px-6 py-3.5 bg-[var(--color-bg)] text-[var(--color-accent)] hover:bg-white transition-colors duration-300 flex-shrink-0"
      >
        Book Consultation
        <svg
          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </Link>
    </div>
  );
}
