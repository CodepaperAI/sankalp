"use client";

import { ScrollReveal, TextReveal } from "@/components/animations";
import { neighbourhoods } from "@/lib/neighbourhoods";
import { neighbourhoodImages } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

export function CommunitiesContent() {
  return (
    <div className="pt-32 pb-[var(--section-gap)]">
      <section className="relative px-6 lg:px-16 xl:px-24 overflow-hidden">
        {/* Ambient blob */}
        <div
          aria-hidden
          className="absolute -top-20 -right-40 w-[520px] h-[520px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,90,61,1) 0%, transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-[var(--color-accent)]" />
                <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium">
                  Communities
                </p>
              </div>
            </ScrollReveal>
            <TextReveal
              text="Know the neighbourhood before you buy."
              as="h1"
              className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05]"
            />
          </div>
          <ScrollReveal delay={0.2} className="lg:col-span-5">
            <p className="text-[var(--color-text-muted)] leading-[1.75] text-[1rem]">
              Every GTA neighbourhood has its own character, market dynamics,
              and lifestyle. These guides go beyond listings — schools, commute,
              amenities, and the things only a local would know.
            </p>
          </ScrollReveal>
        </div>

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
                <div className={`w-full relative overflow-hidden mb-6 ${i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                  <Image
                    src={neighbourhoodImages[n.slug] || "/images/hero/luxury-home.jpg"}
                    alt={`${n.name} neighbourhood`}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
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
