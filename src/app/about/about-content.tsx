"use client";

import { ScrollReveal, TextReveal, StatsCounter } from "@/components/animations";
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
    <div className="pt-32">
      {/* Hero section — 70/30 split */}
      <section className="px-6 lg:px-16 xl:px-24 pb-[var(--section-gap)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-12 lg:gap-20 items-start">
          {/* Text */}
          <div>
            <ScrollReveal>
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-6">
                About
              </p>
            </ScrollReveal>
            <TextReveal
              text="Real estate is personal. It should feel that way."
              as="h1"
              className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] mb-8"
            />
            <ScrollReveal delay={0.3}>
              <div className="space-y-6 text-[var(--color-text-muted)] leading-[1.8] max-w-[560px]">
                <p>
                  I grew up watching families in the GTA navigate one of the biggest
                  decisions of their lives — where to call home. Too often, the process
                  felt transactional. A listing. A showing. A closing. But home is never
                  just a transaction.
                </p>
                <p>
                  That&apos;s why I built my practice around seven distinct specialties.
                  A first-time buyer needs fundamentally different guidance than someone
                  downsizing after 40 years. An investor cares about cap rates; a
                  relocating family cares about school catchments and proximity to
                  community.
                </p>
                <p>
                  After serving over 350 families across the Greater Toronto Area —
                  from Oakville&apos;s lakeside estates to Brampton&apos;s growing communities —
                  I can tell you: the right match isn&apos;t about square footage. It&apos;s
                  about understanding what home means to you.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Portrait */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="aspect-[3/4] relative overflow-hidden sticky top-32">
              <Image
                src={images.agent}
                alt="Sankalp — GTA Real Estate Professional"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
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
      <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24">
        <ScrollReveal className="mb-12">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
            Principles
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1]">
            How I work.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-divider)]">
          {values.map((v, i) => (
            <ScrollReveal
              key={v.title}
              delay={i * 0.1}
              className="p-8 lg:p-12 bg-[var(--color-bg)]"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl font-normal text-[var(--color-accent-light)] mb-3">
                {v.title}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-[1.7] text-[0.9rem]">
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
            className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_32px_rgba(184,150,12,0.2)] hover:scale-[1.03] transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
