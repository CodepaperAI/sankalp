"use client";

import { ScrollReveal, TextReveal, StatsCounter } from "@/components/animations";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Trust Over Transactions",
    description: "Every recommendation is rooted in what's right for the family, not what closes fastest.",
  },
  {
    title: "Community Knowledge",
    description: "Not just data — lived experience. The schools, the parks, the temples, the commute. The things that make a neighbourhood a home.",
  },
  {
    title: "Seven Specialties, One Standard",
    description: "Whether it's a $600K first home or a $5M estate, the rigour, attention, and care are identical.",
  },
  {
    title: "Transparent Process",
    description: "No surprises. Every step explained, every cost surfaced, every decision yours to make with full clarity.",
  },
];

const stats = [
  { target: 350, suffix: "+", label: "Families Served" },
  { target: 180, prefix: "$", suffix: "M+", label: "In Transactions" },
  { target: 12, suffix: "", label: "Years in GTA Real Estate" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
];

export function AboutContent() {
  return (
    <div>
      <PageHero eyebrow="About" title="Real estate is personal. It should feel that way." imageSrc={images.agent} imageAlt="Sankalp — GTA Real Estate Professional" />

      {/* Bio section — editorial split with eyebrow, pull quote, signature */}
      <section className="relative px-6 lg:px-16 xl:px-24 py-[var(--section-gap)] overflow-hidden">
        {/* Ambient blob */}
        <div
          aria-hidden
          className="absolute -top-32 -left-40 w-[520px] h-[520px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,90,61,1) 0%, transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-12 lg:gap-20 items-start">
          {/* Text */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-7">
                <span className="w-12 h-px bg-[var(--color-accent)]" />
                <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium">
                  In My Own Words
                </p>
              </div>
            </ScrollReveal>

            {/* Pull quote */}
            <ScrollReveal delay={0.15}>
              <p className="font-[family-name:var(--font-display)] italic text-[clamp(1.4rem,2.4vw,2rem)] font-light leading-[1.35] text-[var(--color-accent-light)] mb-12 lg:mb-16 max-w-[640px]">
                &ldquo;Home is never just a transaction. It&apos;s the place
                where the next chapter happens — and the right match isn&apos;t
                about square footage.&rdquo;
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-6 text-[var(--color-text-muted)] leading-[1.8] text-[1rem] max-w-[560px]">
                <p>
                  I grew up watching families in the GTA navigate one of the
                  biggest decisions of their lives — where to call home. Too
                  often, the process felt transactional. A listing. A showing.
                  A closing.
                </p>
                <p>
                  That&apos;s why I built my practice around seven distinct
                  specialties. A first-time buyer needs fundamentally different
                  guidance than someone downsizing after 40 years. An investor
                  cares about cap rates; a relocating family cares about school
                  catchments and proximity to community.
                </p>
                <p>
                  After serving over 350 families across the Greater Toronto
                  Area — from Oakville&apos;s lakeside estates to Brampton&apos;s
                  growing communities — I can tell you: the right match
                  isn&apos;t about square footage. It&apos;s about understanding
                  what home means to you.
                </p>
              </div>
            </ScrollReveal>

            {/* Signature block */}
            <ScrollReveal delay={0.4}>
              <div className="mt-12 pt-8 border-t border-[var(--color-divider)] max-w-[560px]">
                <p className="font-[family-name:var(--font-display)] italic text-[2rem] font-light text-[var(--color-accent)] leading-none mb-2">
                  Sankalp
                </p>
                <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-text-muted)]">
                  Founder &nbsp;·&nbsp; GTA Real Estate
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Portrait */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="lg:sticky lg:top-32">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={images.agent}
                  alt="Sankalp — GTA Real Estate Professional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
                {/* Editorial inset frame */}
                <div className="absolute inset-4 border border-white/15 pointer-events-none" />
                {/* Caption tab */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div className="text-white/95">
                    <p className="text-[0.55rem] tracking-[0.3em] uppercase opacity-80 mb-1">
                      Founder
                    </p>
                    <p className="font-[family-name:var(--font-display)] text-[1.25rem] font-light leading-tight">
                      Sankalp
                    </p>
                  </div>
                  <span className="font-[family-name:var(--font-display)] italic text-[0.85rem] text-white/85">
                    &mdash;&nbsp;01
                  </span>
                </div>
                {/* Soft bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              </div>
              {/* Credentials chip below portrait */}
              <div className="mt-4 px-4 py-3 bg-[var(--color-surface)] flex items-center justify-between gap-4">
                <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-semibold">
                  RECO Registered
                </span>
                <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-text-muted)]">
                  12 yrs · GTA
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[var(--color-divider)] bg-[var(--color-surface)]">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-12 lg:py-14 px-4 relative ${
              i < stats.length - 1
                ? "lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[10%] lg:after:bottom-[10%] lg:after:w-px lg:after:bg-[var(--color-divider)]"
                : ""
            }`}
          >
            <StatsCounter
              target={stat.target}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light text-[var(--color-accent-light)] leading-none mb-2"
              labelClassName="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
            />
          </div>
        ))}
      </section>

      {/* Values */}
      <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 relative overflow-hidden">
        {/* Ambient blob */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,90,61,1) 0%, transparent 70%)",
          }}
        />

        <div className="relative mb-14 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <ScrollReveal className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-[var(--color-accent)]" />
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium">
                Principles &nbsp;·&nbsp; 01 — 04
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
              How I{" "}
              <em className="italic text-[var(--color-accent-light)]">work.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="lg:col-span-5">
            <p className="text-[var(--color-text-muted)] leading-[1.75] text-[1rem]">
              Four convictions that shape every consultation, every showing,
              and every signature.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)]">
          {values.map((v, i) => (
            <ScrollReveal
              key={v.title}
              delay={i * 0.08}
              className="relative bg-[var(--color-bg)] p-8 lg:p-12 group hover:bg-[var(--color-surface)] transition-colors duration-500 overflow-hidden"
            >
              {/* Decorative outline numeral */}
              <span
                aria-hidden
                className="absolute -bottom-8 -right-2 font-[family-name:var(--font-display)] italic text-[10rem] leading-none font-light text-[var(--color-accent)]/[0.05] select-none pointer-events-none transition-all duration-700 group-hover:text-[var(--color-accent)]/[0.08] group-hover:-translate-y-2"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Number tag */}
              <div className="flex items-center gap-3 mb-6 relative">
                <span className="w-8 h-px bg-[var(--color-accent)] transition-all duration-500 group-hover:w-12" />
                <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[var(--color-accent)] font-semibold">
                  Principle 0{i + 1}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-[1.4rem] lg:text-[1.65rem] font-normal text-[var(--color-text)] leading-tight mb-4 relative">
                {v.title}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-[1.7] text-[0.95rem] max-w-[420px] relative">
                {v.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 border-t border-[var(--color-divider)] text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] mb-6">
            Let&apos;s find your{" "}
            <em className="italic text-[var(--color-accent-light)]">next chapter.</em>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-md mx-auto mb-8">
            Whether you&apos;re buying your first home or selling your legacy property,
            the conversation starts here.
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
