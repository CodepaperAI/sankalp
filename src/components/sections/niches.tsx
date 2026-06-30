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
    "Estate and legacy property guidance across the GTA's most discreet enclaves, with off-market access and measured counsel.",
  href: "/buy/luxury",
  image: "/images/niches/luxury.jpg",
};

const supporting: Niche[] = [
  {
    number: "01",
    name: "First-Time Buyers",
    tag: "SPECIALTY",
    tagline:
      "Mortgages, rebates, offer strategy, and the questions you did not know to ask yet.",
    href: "/buy/first-time",
    image: "/images/niches/first-time.jpg",
  },
  {
    number: "02",
    name: "Condos",
    tag: "SPECIALTY",
    tagline:
      "Buildings, boards, maintenance fees, and which units have room to appreciate.",
    href: "/buy/condos",
    image: "/images/niches/condos.jpg",
  },
  {
    number: "03",
    name: "Pre-Construction",
    tag: "SPECIALTY",
    tagline:
      "Platinum project access, assignment strategy, deposits, and realistic timelines.",
    href: "/buy/pre-construction",
    image: "/images/niches/pre-construction.jpg",
  },
  {
    number: "04",
    name: "Investment Properties",
    tag: "SPECIALTY",
    tagline:
      "Cash-flow checks, tenant-ready listings, financing context, and the long game.",
    href: "/buy/investment",
    image: "/images/niches/investment.jpg",
  },
  {
    number: "06",
    name: "Relocation",
    tag: "SPECIALTY",
    tagline:
      "Neighbourhood guidance for families and professionals moving into the GTA.",
    href: "/buy/relocation",
    image: "/images/niches/relocation.jpg",
  },
  {
    number: "07",
    name: "Downsizing",
    tag: "SPECIALTY",
    tagline:
      "A thoughtful next chapter, planned around comfort, timing, and continuity.",
    href: "/buy/downsizing",
    image: "/images/niches/downsizing.jpg",
  },
];

const niches = [flagship, ...supporting];

export function Niches() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] px-6 py-16 lg:px-16 lg:py-20 xl:px-24">
      <div className="relative mb-10 grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
        <ScrollReveal className="lg:col-span-6">
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Ways we can help
          </p>
          <h2 className="max-w-[620px] font-[family-name:var(--font-display)] text-3xl font-light leading-[1.08] text-[var(--color-text)] md:text-4xl lg:text-5xl">
            Specific guidance for the move you are actually making.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
          <p className="max-w-[520px] text-[0.98rem] leading-[1.75] text-[var(--color-text-muted)]">
            The services are still broad enough to cover the whole journey, but
            the layout is calmer: scan the fit, open the path, keep moving.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {niches.map((niche) => (
          <NicheCard
            key={niche.name}
            niche={niche}
            isFlagship={niche.tag === "FLAGSHIP"}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-5 border border-[var(--color-divider)] bg-[var(--color-surface-raised)] px-5 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-7">
        <p className="font-[family-name:var(--font-display)] text-[1.25rem] font-light leading-tight text-[var(--color-text)] lg:text-[1.45rem]">
          Not sure where you fit?{" "}
          <span className="italic text-[var(--color-accent)]">Start with a conversation.</span>
        </p>
        <Link
          href="/book"
          className="inline-flex min-h-11 items-center justify-center whitespace-nowrap bg-[var(--color-accent)] px-5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-inverse)] transition-colors duration-300 hover:bg-[var(--color-accent-light)]"
        >
          Book a Call
        </Link>
      </div>
    </section>
  );
}

function NicheCard({
  niche,
  isFlagship,
}: {
  niche: Niche;
  isFlagship: boolean;
}) {
  return (
    <Link
      href={niche.href}
      aria-label={`Explore ${niche.name}`}
      className={`group flex h-full min-h-[344px] flex-col overflow-hidden border border-[var(--color-divider)] bg-[var(--color-surface-raised)] shadow-[0_18px_50px_-44px_rgba(31,31,31,0.45)] transition-transform duration-300 hover:-translate-y-1 ${
        isFlagship ? "xl:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${isFlagship ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
        <Image
          src={niche.image}
          alt={niche.name}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          sizes={
            isFlagship
              ? "(max-width: 1280px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          }
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="bg-[var(--color-bg)]/92 px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)] backdrop-blur">
            {niche.number}
          </span>
          {isFlagship && (
            <span className="bg-[var(--color-accent)] px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-inverse)]">
              Flagship
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <p className="mb-3 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-soft)]">
          {isFlagship ? "Flagship practice" : "Specialty practice"}
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-[1.35rem] font-normal leading-[1.14] text-[var(--color-text)] lg:text-[1.55rem]">
          {niche.name}
        </h3>
        <p className="mt-3 text-[0.9rem] leading-[1.65] text-[var(--color-text-muted)]">
          {isFlagship ? niche.description : niche.tagline}
        </p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          Explore
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
