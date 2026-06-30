"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/animations";
import {
  featuredSoldResults,
  soldResultStats,
  type SoldResult,
} from "@/lib/sold-results";
import Image from "next/image";
import Link from "next/link";

const transactions = featuredSoldResults;
const AUTO_SCROLL_DELAY = 4500;

const summaryStats = [
  { value: soldResultStats.total, label: "Sold records" },
  { value: soldResultStats.cities, label: "Cities" },
  { value: soldResultStats.fastestSale, label: "Fastest DOM" },
];

export function Transactions() {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  const scrollToIndex = useCallback((idx: number, behavior: ScrollBehavior = "smooth") => {
    if (!railRef.current) return;
    const total = transactions.length;
    const wrapped = ((idx % total) + total) % total;
    const cards = railRef.current.querySelectorAll<HTMLElement>("[data-card]");
    const target = cards[wrapped];

    if (target) {
      target.scrollIntoView({ behavior, block: "nearest", inline: "start" });
      setActiveIndex(wrapped);
    }
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setShouldReduceMotion(query.matches);

    updateMotionPreference();
    query.addEventListener("change", updateMotionPreference);

    return () => query.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!railRef.current) return;
    const cards = railRef.current.querySelectorAll<HTMLElement>("[data-card]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const idx = Number(visible.target.getAttribute("data-card"));
          setActiveIndex(idx);
        }
      },
      { root: railRef.current, threshold: [0.55, 0.75, 1] }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      shouldReduceMotion ||
      isAutoPaused ||
      !isSectionVisible ||
      transactions.length < 2
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      if (document.hidden) return;
      scrollToIndex(activeIndexRef.current + 1);
    }, AUTO_SCROLL_DELAY);

    return () => window.clearInterval(interval);
  }, [isAutoPaused, isSectionVisible, scrollToIndex, shouldReduceMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-[var(--color-divider)] bg-[var(--color-bg)] py-14 lg:py-[4.5rem]"
      onMouseEnter={() => setIsAutoPaused(true)}
      onMouseLeave={() => setIsAutoPaused(false)}
      onFocusCapture={() => setIsAutoPaused(true)}
      onBlurCapture={(event) => {
        const nextTarget =
          event.relatedTarget instanceof Node ? event.relatedTarget : null;

        if (!event.currentTarget.contains(nextTarget)) {
          setIsAutoPaused(false);
        }
      }}
    >
      <div className="relative mb-8 grid grid-cols-1 items-end gap-8 px-6 lg:grid-cols-12 lg:px-16 xl:px-24">
        <ScrollReveal className="lg:col-span-7">
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Verified sold results
          </p>
          <h2 className="max-w-[640px] font-[family-name:var(--font-display)] text-3xl font-light leading-[1.08] text-[var(--color-text)] md:text-4xl lg:text-5xl">
            Recent sales, placed where buyers actually look.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="lg:col-span-5">
          <p className="max-w-[480px] text-[0.98rem] leading-[1.75] text-[var(--color-text-muted)]">
            Real address-level proof from condos, townhomes, detached homes, and
            commercial properties across the Greater Toronto Area.
          </p>
          <div className="mt-5 grid grid-cols-3 border border-[var(--color-divider)] bg-[var(--color-surface-raised)]">
            {summaryStats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-[var(--color-divider)] px-3 py-3 last:border-r-0"
              >
                <p className="font-[family-name:var(--font-display)] text-2xl font-light leading-none text-[var(--color-accent)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-soft)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="relative mb-5 flex items-center justify-between gap-5 px-6 lg:px-16 xl:px-24">
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-display)] text-[1rem] font-light italic text-[var(--color-accent)]">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
            of {String(transactions.length).padStart(2, "0")}
          </span>
          <div className="hidden items-center gap-1.5 sm:flex">
            {transactions.map((transaction, i) => (
              <button
                key={transaction.id}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to sold result ${i + 1}`}
                className="flex h-11 items-center px-1.5"
              >
                <span
                  className={`block h-1 transition-[width,background-color] duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-[var(--color-accent)]"
                      : "w-4 bg-[var(--color-border-strong)]"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <NavButton
            direction="prev"
            disabled={activeIndex === 0}
            onClick={() => scrollToIndex(activeIndex - 1)}
          />
          <NavButton
            direction="next"
            disabled={activeIndex === transactions.length - 1}
            onClick={() => scrollToIndex(activeIndex + 1)}
          />
          <Link
            href="/sold"
            className="ml-1 inline-flex min-h-11 items-center whitespace-nowrap border-b border-[var(--color-accent)]/30 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)] transition-colors duration-300 hover:border-[var(--color-accent)] lg:ml-3"
          >
            View all
          </Link>
        </div>
      </div>

      <div
        ref={railRef}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-4 [scrollbar-width:none] lg:px-16 xl:px-24 [&::-webkit-scrollbar]:hidden"
      >
        {transactions.map((transaction, i) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            index={i}
            isActive={i === activeIndex}
          />
        ))}
        <div className="w-1 flex-shrink-0 lg:w-12" aria-hidden />
      </div>
    </section>
  );
}

function NavButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous" : "Next"}
      className="flex h-11 w-11 items-center justify-center border border-[var(--color-border-strong)] text-[var(--color-text)] transition-[background-color,color,border-color,opacity] duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-inverse)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[var(--color-border-strong)] disabled:hover:bg-transparent disabled:hover:text-[var(--color-text)]"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {direction === "prev" ? (
          <path d="M13 8H3M7 4L3 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

function TransactionCard({
  transaction,
  index,
  isActive,
}: {
  transaction: SoldResult;
  index: number;
  isActive: boolean;
}) {
  const specs =
    transaction.category === "Residential"
      ? [transaction.beds && `${transaction.beds} bed`, transaction.baths && `${transaction.baths} bath`, transaction.sqft]
          .filter(Boolean)
          .join(" / ")
      : transaction.sqft;

  return (
    <article
      data-card={index}
      className={`group w-[82vw] flex-shrink-0 snap-start sm:w-[316px] lg:w-[340px] ${
        isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
      }`}
    >
      <div className="h-full overflow-hidden border border-[var(--color-divider)] bg-[var(--color-surface-raised)] shadow-[0_18px_50px_-42px_rgba(31,31,31,0.55)] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)]">
          <Image
            src={transaction.image}
            alt={`${transaction.address}, ${transaction.city}`}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            sizes="340px"
          />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="bg-[var(--color-accent)] px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-inverse)]">
              Sold
            </span>
            <span className="bg-[var(--color-bg)]/92 px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)] backdrop-blur">
              {transaction.daysOnMarket} DOM
            </span>
          </div>
        </div>

        <div className="flex min-h-[210px] flex-col p-5">
          <p className="mb-3 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
            MLS {transaction.mls}
          </p>
          <h3 className="font-[family-name:var(--font-display)] text-[1.35rem] font-normal leading-[1.18] text-[var(--color-text)]">
            {transaction.address}
          </h3>
          <p className="mt-2 text-[0.88rem] leading-[1.55] text-[var(--color-text-muted)]">
            {transaction.city} / {specs}
          </p>
          <p className="mt-4 line-clamp-2 text-[0.86rem] leading-[1.6] text-[var(--color-text-muted)]">
            {transaction.highlight}
          </p>
          <div className="mt-auto flex items-end justify-between gap-4 border-t border-[var(--color-divider)] pt-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              {transaction.niche}
            </p>
            <p className="max-w-[150px] text-right text-[0.72rem] leading-[1.35] text-[var(--color-text-soft)]">
              {transaction.propertyType}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
