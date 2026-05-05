"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ScrollReveal } from "@/components/animations";
import Link from "next/link";

const transactions = [
  {
    address: "142 Lakeshore Road",
    area: "Oakville",
    specs: "4 Bed · 3 Bath · 3,200 sqft",
    price: "$2,450,000",
    status: "Sold",
    image: "Twilight exterior — Oakville",
  },
  {
    address: "1 Bloor Street E, PH4",
    area: "Yorkville",
    specs: "2 Bed · 2 Bath · 1,800 sqft",
    price: "$1,890,000",
    status: "Sold",
    image: "Penthouse interior — Yorkville",
  },
  {
    address: "78 Heritage Hills Drive",
    area: "Brampton",
    specs: "5 Bed · 4 Bath · 4,100 sqft",
    price: "$1,350,000",
    status: "Sold",
    image: "Family home — Brampton",
  },
  {
    address: "M City Tower 4, Unit 2812",
    area: "Mississauga",
    specs: "1+Den · 1 Bath · 650 sqft",
    price: "$625,000",
    status: "Pre-Construction",
    image: "Pre-construction render — Mississauga",
  },
  {
    address: "34 James Street N",
    area: "Hamilton",
    specs: "Duplex · 6 Bed · 3 Bath",
    price: "$890,000",
    status: "Sold",
    image: "Investment duplex — Hamilton",
  },
];

export function Transactions() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  return (
    <section className="py-[var(--section-gap)] bg-[var(--color-surface)] overflow-hidden">
      <div className="px-6 lg:px-16 xl:px-24 mb-10 flex justify-between items-end">
        <ScrollReveal>
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
            Recent Transactions
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1]">
            Results speak.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link
            href="/sold"
            className="inline-flex items-center gap-3 text-[0.75rem] tracking-[0.15em] uppercase text-[var(--color-accent)] font-medium group"
          >
            View All
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll band with parallax */}
      <div ref={scrollRef}>
        <motion.div
          className="flex gap-6 lg:gap-8 px-6 lg:px-16"
          style={{ x }}
        >
          {transactions.map((t, i) => (
            <motion.div
              key={t.address}
              className="flex-shrink-0 w-[320px] lg:w-[380px] cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[3/4] border border-[var(--color-border)] relative overflow-hidden flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-500" style={{ background: "linear-gradient(160deg, #1e1c18 0%, #2a2520 100%)" }}>
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.9)] via-transparent to-transparent z-10" />
                <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[var(--color-text-muted)] text-center opacity-30 px-4">
                  {t.image}
                </p>

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span
                    className={`inline-block text-[0.6rem] tracking-[0.2em] uppercase font-semibold px-3 py-1 mb-3 text-[var(--color-text)] ${
                      t.status === "Sold"
                        ? "bg-[var(--color-success)]"
                        : "bg-[var(--color-info)]"
                    }`}
                  >
                    {t.status}
                  </span>
                  <p className="font-[family-name:var(--font-display)] text-xl font-normal mb-1">
                    {t.address}
                  </p>
                  <p className="text-[0.75rem] text-[var(--color-text-muted)] mb-2">
                    {t.area} &middot; {t.specs}
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-accent-light)]">
                    {t.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
