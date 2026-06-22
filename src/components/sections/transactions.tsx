"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/animations";
import { featuredSoldResults, type SoldResult } from "@/lib/sold-results";
import Image from "next/image";
import Link from "next/link";

const transactions = featuredSoldResults;

export function Transactions() {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
      { root: railRef.current, threshold: [0.5, 0.75, 1] }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[var(--section-gap)] bg-[var(--color-surface)] overflow-hidden border-t border-[var(--color-divider)] relative">
      <div className="relative px-6 lg:px-16 xl:px-24 mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <ScrollReveal className="lg:col-span-7">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-[var(--color-accent)]" />
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-accent)] font-semibold">
              Verified Sold Results
            </p>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05]">
            Real deals, <em className="italic text-[var(--color-accent-light)]">real addresses.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="lg:col-span-5">
          <p className="text-[var(--color-text-muted)] leading-[1.75] text-[0.98rem] max-w-[460px] mb-6 lg:mb-0">
            A selection of recent sales from across the Greater Toronto Area &mdash; condos, townhomes, and detached homes.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative px-6 lg:px-16 xl:px-24 mb-6 flex items-center justify-between gap-6">
        <div className="flex items-baseline gap-3">
          <span className="font-[family-name:var(--font-display)] italic text-[1.15rem] text-[var(--color-accent)]">
            - {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-text-muted)]">
            of {String(transactions.length).padStart(2, "0")}
          </span>
          <div className="hidden sm:flex items-center gap-1.5 ml-4">
            {transactions.map((transaction, i) => (
              <button
                key={transaction.id}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to sold result ${i + 1}`}
                className="h-11 px-1.5 flex items-center"
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
            className="ml-2 lg:ml-4 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold border-b border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] pb-1.5 transition-colors group"
          >
            View All
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
      </div>

      <div
        ref={railRef}
        className="relative flex gap-4 lg:gap-5 px-6 lg:px-16 xl:px-24 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {transactions.map((transaction, i) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            index={i}
            featured={i === 0}
            isActive={i === activeIndex}
          />
        ))}
        <div className="flex-shrink-0 w-1 lg:w-12" aria-hidden />
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
      className="w-10 h-10 lg:w-11 lg:h-11 border border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-inverse)] hover:border-[var(--color-accent)] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--color-text)] disabled:hover:border-[var(--color-border-strong)] disabled:cursor-not-allowed transition-all duration-300"
    >
      <svg
        className="w-4 h-4"
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
  featured,
  isActive,
}: {
  transaction: SoldResult;
  index: number;
  featured?: boolean;
  isActive: boolean;
}) {
  const specs = transaction.category === "Residential"
    ? `${transaction.beds} bed / ${transaction.baths} bath / ${transaction.rooms} rooms`
    : transaction.propertyType;

  return (
    <motion.article
      data-card={index}
      className={`group relative flex-shrink-0 snap-start transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        featured
          ? "w-[88vw] sm:w-[480px] lg:w-[560px]"
          : "w-[78vw] sm:w-[340px] lg:w-[380px]"
      } ${isActive ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="relative overflow-hidden bg-[var(--color-bg)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[3px] h-[440px] sm:h-[480px] lg:h-[520px]"
      >
        <Image
          src={transaction.image}
          alt={`${transaction.address}, ${transaction.city}`}
          fill
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          sizes={featured ? "560px" : "380px"}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.52) 32%, rgba(0,0,0,0.12) 60%, rgba(0,0,0,0.02) 82%, rgba(0,0,0,0.18) 100%)",
          }}
        />
        <div className="absolute inset-3 lg:inset-4 border border-white/15 pointer-events-none z-10" />

        <div className="absolute top-5 left-5 lg:top-6 lg:left-6 z-20 flex items-center gap-2">
          <span className="text-[0.55rem] tracking-[0.3em] uppercase font-semibold px-3 py-1.5 bg-[var(--color-accent)] text-[var(--color-text-inverse)]">
            Sold
          </span>
          {featured && (
            <span className="text-[0.55rem] tracking-[0.3em] uppercase font-semibold px-3 py-1.5 bg-[var(--color-bg)]/90 backdrop-blur-md text-[var(--color-accent)]">
              MLS Data
            </span>
          )}
        </div>

        <div
          className="absolute top-5 right-5 lg:top-6 lg:right-6 z-20 text-right"
          style={{ textShadow: "0 1px 14px rgba(0,0,0,0.5)" }}
        >
          <p className="text-[0.55rem] tracking-[0.3em] uppercase text-white/70 mb-1">
            DOM
          </p>
          <p className="font-[family-name:var(--font-display)] italic text-[1.3rem] lg:text-[1.5rem] leading-none font-light text-white">
            {transaction.daysOnMarket}
          </p>
        </div>

        <div
          className={`absolute inset-x-0 bottom-0 z-20 text-white ${featured ? "p-7 lg:p-10" : "p-5 lg:p-6"}`}
          style={{ textShadow: "0 1px 16px rgba(0,0,0,0.45)" }}
        >
          <p className="text-[0.55rem] tracking-[0.32em] uppercase text-white/60 font-medium mb-3">
            <span className="font-[family-name:var(--font-display)] italic text-[0.75rem] tracking-normal text-white/85 mr-2">
              {String(index + 1).padStart(2, "0")}
            </span>
            of {String(transactions.length).padStart(2, "0")}
          </p>

          <p className={`font-[family-name:var(--font-display)] font-normal leading-[1.15] mb-1.5 ${featured ? "text-[1.5rem] lg:text-[1.95rem]" : "text-[1.1rem] lg:text-[1.25rem]"}`}>
            {transaction.address}
          </p>
          <p className="text-[0.78rem] text-white/75 mb-4 tracking-[0.02em]">
            {transaction.city} / {specs}
          </p>
          {featured && (
            <p className="text-[0.88rem] text-white/85 leading-[1.6] mb-5 max-w-[420px]">
              {transaction.highlight}
            </p>
          )}
          <div className="flex items-end justify-between gap-4 pt-3 border-t border-white/15">
            <p className={`font-[family-name:var(--font-display)] font-light leading-none mt-2 ${featured ? "text-[1.35rem] lg:text-[1.75rem]" : "text-[1.05rem] lg:text-[1.2rem]"}`}>
              {transaction.propertyType}
            </p>
            <p className="text-[0.6rem] tracking-[0.18em] uppercase text-white/65 pb-1">
              MLS {transaction.mls}
            </p>
          </div>
        </div>

        {isActive && (
          <span className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--color-accent)] z-30" />
        )}
      </div>
    </motion.article>
  );
}
