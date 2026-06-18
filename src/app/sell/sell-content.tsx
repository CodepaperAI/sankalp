"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { ScrollReveal, MagneticButton } from "@/components/animations";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import Link from "next/link";

/* Left-aligned counter — renders an inline span so tiles can choose alignment */
function CountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 1800,
  className = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number;
    let frame: number;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const steps = [
  {
    number: "01",
    title: "Complimentary Market Evaluation",
    description:
      "We start with a detailed comparative market analysis — not an automated estimate. You'll know exactly what your home is worth based on recent neighbourhood sales, current inventory, and buyer demand.",
    deliverables: ["CMA report", "Neighbourhood comparables", "Buyer demand brief"],
  },
  {
    number: "02",
    title: "Strategic Pricing",
    description:
      "Price too high and you sit. Price too low and you leave money on the table. We use data, market timing, and competitive positioning to find the number that attracts the right buyers and maximizes your return.",
    deliverables: ["Pricing strategy memo", "Competitive positioning", "Negotiation floor"],
  },
  {
    number: "03",
    title: "Preparation & Staging",
    description:
      "First impressions drive offers. We coordinate decluttering, repairs, professional staging, and photography to present your home at its absolute best. Every dollar spent on preparation returns multiples at the negotiating table.",
    deliverables: ["Staging consult", "Repair triage", "Photography & video"],
  },
  {
    number: "04",
    title: "Marketing & Exposure",
    description:
      "Professional photography, video tours, targeted digital advertising, MLS optimization, and our network of qualified buyers. Your listing gets maximum exposure to the right audience — not just volume, but quality.",
    deliverables: ["MLS launch", "Targeted digital ads", "Buyer-network outreach"],
  },
  {
    number: "05",
    title: "Showings & Open Houses",
    description:
      "We manage every showing, collect feedback, and adjust strategy in real time. You'll receive updates after every visit — what buyers liked, what gave them pause, and what it means for your pricing position.",
    deliverables: ["Hosted showings", "Feedback debriefs", "Live strategy adjustments"],
  },
  {
    number: "06",
    title: "Negotiation & Closing",
    description:
      "When offers come in, you'll have a clear picture of each one — not just price, but conditions, financing strength, and closing timeline. We negotiate on your behalf with the goal of maximizing value while minimizing risk.",
    deliverables: ["Offer analysis", "Counter strategy", "Closing coordination"],
  },
];

const stats = [
  {
    target: 350,
    suffix: "+",
    label: "Families Served",
    description:
      "A track record built on trust, not transactions. Two decades of GTA homeowners who came back, referred friends, and kept us in their family.",
    featured: true,
  },
  {
    target: 180,
    prefix: "$",
    suffix: "M+",
    label: "In Sales Volume",
    description: "Across every property type and GTA neighbourhood we serve.",
    green: true,
  },
  {
    target: 7,
    suffix: "",
    label: "Specialty Practices",
    description: "We know your buyer because we serve them too.",
  },
  {
    target: 24,
    suffix: "hr",
    label: "Response Promise",
    description: "Your questions answered within a business day. Every time.",
  },
];

export function SellContent() {
  return (
    <div>
      <PageHero
        eyebrow="Sellers"
        title="Your home deserves the right exit."
        subtitle="Maximum value. Minimum stress. Complete transparency."
        imageSrc={images.heroSelling}
        imageAlt="Beautiful home interior ready for sale"
      />

      {/* Intro + CTAs */}
      <section className="px-6 lg:px-16 xl:px-24 py-16">
        <ScrollReveal>
          <p className="text-[var(--color-text-muted)] leading-[1.7] max-w-[560px] mb-10">
            Selling a home in the GTA is a high-stakes decision — and the
            difference between a good result and a great one often comes down to
            strategy, preparation, and negotiation. Here&apos;s how we approach
            every listing.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-4">
            <MagneticButton
              as="a"
              href="/home-valuation"
              className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_24px_rgba(45,90,61,0.15)] transition-shadow duration-300"
            >
              Get Your Home Valuation
            </MagneticButton>
            <Link
              href="/book"
              className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-inverse)] transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <ProcessSection />
      <WhyBento />

      {/* Final CTA */}
      <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 border-t border-[var(--color-divider)] text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] mb-4">
            Ready to list?
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-md mx-auto mb-8">
            Start with a complimentary market evaluation — no obligation, no pressure.
          </p>
          <Link
            href="/home-valuation"
            className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_24px_rgba(45,90,61,0.15)] hover:scale-[1.03] transition-all duration-300"
          >
            Get Your Home Valuation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}

/* =========================================================================
 * PROCESS — pinned scroll-jacked walkthrough
 *   The section is tall (~480vh). Inside, content sticks to the viewport
 *   while the user scrolls through. scrollYProgress drives which of the 6
 *   steps is active, with a crossfade between them.
 * ========================================================================= */
function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Map 0..1 progress to 0..(steps.length-1) discrete index.
    // Nudge by 0.5/N so the transition lands at each step's midpoint.
    const idx = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(v * steps.length))
    );
    if (idx !== activeStep) setActiveStep(idx);
  });

  // Smooth progress bar fill (scrubbed, not stepped)
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Vertical spine fill — drives the scroll-rail line
  const spineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--color-surface)] border-t border-[var(--color-divider)]"
      style={{ height: `${steps.length * 80}vh` }}
    >
      {/* Pinned viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-6 lg:px-16 xl:px-24">
        {/* Ambient blob */}
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,90,61,1) 0%, transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full max-w-[1400px] mx-auto">
          {/* LEFT — header + numeral (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-[var(--color-accent)]" />
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium">
                The Process
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.2vw,2.85rem)] font-light leading-[1.05] mb-8 lg:mb-12">
              From listing to{" "}
              <em className="italic text-[var(--color-accent-light)]">
                closing.
              </em>
            </h2>

            {/* Active numeral — crossfades on step change */}
            <div className="hidden lg:block">
              <div className="flex items-baseline gap-4 mb-1 h-[7.5rem] xl:h-[9rem]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={steps[activeStep].number}
                    className="font-[family-name:var(--font-display)] italic text-[6rem] xl:text-[7.5rem] leading-[0.85] font-light text-[var(--color-accent)]"
                    initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -28, filter: "blur(8px)" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    &mdash;&nbsp;{steps[activeStep].number}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-text-muted)] pb-3">
                  / 06
                </span>
              </div>

              {/* Continuous progress bar (scrubbed) */}
              <div className="relative h-px bg-[var(--color-divider)] mt-4">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[var(--color-accent)]"
                  style={{ width: fillWidth }}
                />
              </div>
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[var(--color-text-muted)] mt-3">
                Scroll to advance
              </p>
            </div>

            {/* Mobile compact tracker */}
            <div className="lg:hidden flex items-center gap-3 mb-6">
              <span className="font-[family-name:var(--font-display)] italic text-[3rem] leading-none font-light text-[var(--color-accent)]">
                &mdash;&nbsp;{steps[activeStep].number}
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
                / 06
              </span>
            </div>
          </div>

          {/* CENTER — vertical step rail (3 cols) — the "you are here" indicator */}
          <div className="hidden lg:block lg:col-span-3 relative">
            {/* Vertical spine line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]" />
            {/* Filled portion of spine */}
            <motion.div
              className="absolute left-[7px] top-2 w-px bg-[var(--color-accent)] origin-top"
              style={{
                scaleY: spineScaleY,
                height: "calc(100% - 16px)",
              }}
            />

            <ul className="space-y-5 relative">
              {steps.map((s, i) => {
                const isActive = i === activeStep;
                const isPast = i < activeStep;
                return (
                  <li
                    key={s.number}
                    className="relative pl-7 cursor-default"
                  >
                    {/* Dot */}
                    <span
                      className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? "bg-[var(--color-accent)] border-[var(--color-accent)] scale-110 shadow-[0_0_0_4px_rgba(45,90,61,0.12)]"
                          : isPast
                          ? "bg-[var(--color-accent)] border-[var(--color-accent)]"
                          : "bg-[var(--color-bg)] border-[var(--color-border-strong)]"
                      }`}
                    />
                    {/* Past = checkmark */}
                    {isPast && (
                      <svg
                        className="absolute left-[3px] top-[8.5px] w-2.5 h-2.5 text-[var(--color-text-inverse)] pointer-events-none"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M2.5 6L5 8.5L9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-[family-name:var(--font-display)] italic text-[0.85rem] transition-colors duration-500 ${
                          isActive
                            ? "text-[var(--color-accent)]"
                            : isPast
                            ? "text-[var(--color-accent-light)]"
                            : "text-[var(--color-text-muted)]"
                        }`}
                      >
                        {s.number}
                      </span>
                    </div>
                    <p
                      className={`font-[family-name:var(--font-display)] leading-[1.2] transition-all duration-500 ${
                        isActive
                          ? "text-[1.1rem] xl:text-[1.2rem] font-normal text-[var(--color-text)]"
                          : isPast
                          ? "text-[0.95rem] font-light text-[var(--color-text)]/65"
                          : "text-[0.95rem] font-light text-[var(--color-text-muted)]/70"
                      }`}
                    >
                      {s.title}
                    </p>
                    {/* Active indicator line */}
                    {isActive && (
                      <motion.span
                        layoutId="active-step-line"
                        className="absolute -left-1 top-0 bottom-0 w-[3px] bg-[var(--color-accent)]"
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT — active step content (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={steps[activeStep].number}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <div className="border-l-2 border-[var(--color-accent)] pl-7 lg:pl-9 max-w-[560px]">
                  <p className="text-[0.6rem] tracking-[0.32em] uppercase text-[var(--color-accent)] font-semibold mb-4">
                    Step {activeStep + 1} of {steps.length}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.4vw,2.1rem)] font-normal text-[var(--color-text)] leading-[1.15] mb-5">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] leading-[1.75] text-[0.98rem] mb-7">
                    {steps[activeStep].description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {steps[activeStep].deliverables.map((d) => (
                      <li
                        key={d}
                        className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-bg)] px-3 py-1.5"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
 * WHY BENTO — asymmetric stat tiles with animated counters
 * ========================================================================= */
function WhyBento() {
  return (
    <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(45,90,61,1) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="relative mb-14 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <ScrollReveal className="lg:col-span-7">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-[var(--color-accent)]" />
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium">
              Why Sankalp
            </p>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
            The difference is{" "}
            <em className="italic text-[var(--color-accent-light)]">
              in the details.
            </em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="lg:col-span-5">
          <p className="text-[var(--color-text-muted)] leading-[1.75] text-[1rem]">
            Two decades of GTA real estate, distilled into the four numbers
            that matter most when you&apos;re choosing who to trust.
          </p>
        </ScrollReveal>
      </div>

      {/* Bento — 12 col grid */}
      <div className="relative grid grid-cols-12 gap-3 lg:gap-4">
        {/* Featured — 350+ Families Served */}
        <FeaturedTile
          target={stats[0].target}
          suffix={stats[0].suffix}
          label={stats[0].label}
          description={stats[0].description}
        />

        {/* $180M+ — green tile */}
        <GreenTile
          target={stats[1].target}
          prefix={stats[1].prefix}
          suffix={stats[1].suffix}
          label={stats[1].label}
          description={stats[1].description}
        />

        {/* 7 Specialty Practices */}
        <SmallTile
          target={stats[2].target}
          suffix={stats[2].suffix}
          label={stats[2].label}
          description={stats[2].description}
        />

        {/* 24-Hour Response */}
        <SmallTile
          target={stats[3].target}
          suffix={stats[3].suffix}
          label={stats[3].label}
          description={stats[3].description}
        />
      </div>
    </section>
  );
}

function FeaturedTile({
  target,
  suffix,
  label,
  description,
}: {
  target: number;
  suffix?: string;
  label: string;
  description: string;
}) {
  return (
    <ScrollReveal className="col-span-12 lg:col-span-6 lg:row-span-2 relative bg-[var(--color-surface)] p-8 lg:p-12 overflow-hidden group hover:-translate-y-[2px] transition-transform duration-500">
      {/* Decorative number outline */}
      <div
        aria-hidden
        className="absolute -bottom-16 -right-8 font-[family-name:var(--font-display)] italic text-[18rem] leading-none font-light text-[var(--color-accent)]/[0.04] select-none pointer-events-none"
      >
        {target}
      </div>

      <div className="flex items-center gap-4 mb-12 relative">
        <span className="w-8 h-px bg-[var(--color-accent)]" />
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[var(--color-accent)] font-semibold">
          Featured
        </span>
      </div>

      <CountUp
        target={target}
        suffix={suffix}
        className="font-[family-name:var(--font-display)] text-[clamp(4rem,8vw,7rem)] font-light text-[var(--color-accent)] leading-none mb-6 block"
      />
      <h3 className="font-[family-name:var(--font-display)] text-[1.75rem] lg:text-[2rem] font-light text-[var(--color-text)] mb-4">
        {label}
      </h3>
      <p className="text-[var(--color-text-muted)] leading-[1.7] text-[0.95rem] max-w-[420px]">
        {description}
      </p>
    </ScrollReveal>
  );
}

function GreenTile({
  target,
  prefix,
  suffix,
  label,
  description,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}) {
  return (
    <ScrollReveal
      delay={0.1}
      className="col-span-12 md:col-span-6 lg:col-span-6 relative bg-[var(--color-accent)] text-[var(--color-text-inverse)] p-8 lg:p-10 overflow-hidden group hover:-translate-y-[2px] transition-transform duration-500"
    >
      <div
        aria-hidden
        className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)",
        }}
      />
      <p className="text-[0.6rem] tracking-[0.3em] uppercase font-semibold opacity-70 mb-6">
        Sales Volume
      </p>
      <CountUp
        target={target}
        prefix={prefix}
        suffix={suffix}
        className="font-[family-name:var(--font-display)] text-[clamp(3rem,5vw,4.5rem)] font-light leading-none mb-3 block"
      />
      <h3 className="font-[family-name:var(--font-display)] text-[1.25rem] font-light mb-3">
        {label}
      </h3>
      <p className="leading-[1.65] text-[0.88rem] opacity-85 max-w-[320px]">
        {description}
      </p>
    </ScrollReveal>
  );
}

function SmallTile({
  target,
  prefix,
  suffix,
  label,
  description,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}) {
  return (
    <ScrollReveal
      delay={0.2}
      className="col-span-12 md:col-span-6 lg:col-span-3 relative bg-[var(--color-surface)] p-7 lg:p-8 group hover:-translate-y-[2px] hover:bg-[var(--color-bg)] transition-all duration-500"
    >
      <span className="block w-6 h-px bg-[var(--color-accent)] mb-6" />
      <CountUp
        target={target}
        prefix={prefix}
        suffix={suffix}
        className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,3.5vw,3rem)] font-light text-[var(--color-accent-light)] leading-none mb-3 block"
      />
      <h3 className="font-[family-name:var(--font-display)] text-[1rem] font-normal text-[var(--color-text)] mb-2">
        {label}
      </h3>
      <p className="text-[var(--color-text-muted)] leading-[1.6] text-[0.8rem]">
        {description}
      </p>
    </ScrollReveal>
  );
}
