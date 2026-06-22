"use client";

import { StatsCounter } from "@/components/animations";
import { soldResultStats } from "@/lib/sold-results";

const stats = [
  { target: soldResultStats.total, suffix: "", label: "Homes Sold" },
  { target: soldResultStats.cities, suffix: "", label: "Cities Served" },
  { target: soldResultStats.fastestSale, suffix: " Day", label: "Fastest Sale" },
  { target: 100, suffix: "%", label: "Sold" },
];

export function StatsBar() {
  return (
    <section className="section-dark relative grid grid-cols-2 lg:grid-cols-4 border-b border-[var(--color-divider)] bg-[var(--color-bg)] overflow-hidden">
      {/* Ambient blob — subtle warmth */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 50%, rgba(45,90,61,1) 0%, transparent 70%)",
        }}
      />

      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`group relative py-10 lg:py-12 px-6 overflow-hidden ${
            i < stats.length - 1
              ? "lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[15%] lg:after:bottom-[15%] lg:after:w-px lg:after:bg-[var(--color-divider)]"
              : ""
          }`}
        >
          {/* Decorative outline numeral — sits behind the counter */}
          <span
            aria-hidden
            className="absolute -top-2 -left-2 lg:-left-3 font-[family-name:var(--font-display)] italic text-[5rem] lg:text-[6.5rem] leading-none font-light text-[var(--color-accent)]/[0.06] select-none pointer-events-none transition-all duration-700 group-hover:text-[var(--color-accent)]/[0.10] group-hover:-translate-y-1"
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          <div className="relative">
            <StatsCounter
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4.5vw,3.5rem)] font-light text-[var(--color-accent-light)] leading-none mb-3"
              labelClassName="text-[0.68rem] tracking-[0.14em] uppercase text-[var(--color-text-muted)] font-semibold"
            />
            {/* Hairline accent — grows on hover */}
            <span
              aria-hidden
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-px bg-[var(--color-accent)] opacity-30 transition-all duration-500 group-hover:w-12 group-hover:opacity-100"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
