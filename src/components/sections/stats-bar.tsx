"use client";

import { StatsCounter } from "@/components/animations";

const stats = [
  { target: 350, suffix: "+", label: "Families Served" },
  { target: 180, prefix: "$", suffix: "M+", label: "In Transactions" },
  { target: 12, suffix: "", label: "GTA Neighbourhoods" },
  { target: 7, suffix: "", label: "Specialties" },
];

export function StatsBar() {
  return (
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
            className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-light text-[var(--color-accent-light)] leading-none mb-2"
            labelClassName="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
          />
        </div>
      ))}
    </section>
  );
}
