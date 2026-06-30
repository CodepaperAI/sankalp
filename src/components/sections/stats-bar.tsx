"use client";

import { StatsCounter } from "@/components/animations";
import { soldResultStats } from "@/lib/sold-results";

const stats = [
  { target: soldResultStats.total, suffix: "", label: "Homes Sold" },
  { target: soldResultStats.cities, suffix: "", label: "Cities Served" },
  { target: soldResultStats.fastestSale, suffix: " Day", label: "Fastest Sale" },
  { target: 100, suffix: "%", label: "Sold Records" },
];

export function StatsBar() {
  return (
    <section className="relative border-y border-[var(--color-divider)] bg-[var(--color-bg)] px-6 py-10 lg:px-16 xl:px-24">
      <div className="grid grid-cols-2 border border-[var(--color-divider)] bg-[var(--color-surface-raised)] lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`relative border-[var(--color-divider)] px-4 py-7 sm:px-6 lg:px-8 ${
              i % 2 === 0 ? "border-r" : ""
            } ${i < 2 ? "border-b" : ""} ${
              i < stats.length - 1 ? "lg:border-r" : "lg:border-r-0"
            } lg:border-b-0`}
          >
            <StatsCounter
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              className="mb-3 font-[family-name:var(--font-display)] text-3xl font-light leading-none text-[var(--color-accent)] lg:text-5xl"
              labelClassName="text-[0.62rem] tracking-[0.14em] uppercase text-[var(--color-text-soft)] font-semibold"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
