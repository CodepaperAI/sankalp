"use client";

import { ScrollReveal, TextReveal, MagneticButton } from "@/components/animations";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Complimentary Market Evaluation",
    description: "We start with a detailed comparative market analysis — not an automated estimate. You'll know exactly what your home is worth based on recent neighbourhood sales, current inventory, and buyer demand.",
  },
  {
    number: "02",
    title: "Strategic Pricing",
    description: "Price too high and you sit. Price too low and you leave money on the table. We use data, market timing, and competitive positioning to find the number that attracts the right buyers and maximizes your return.",
  },
  {
    number: "03",
    title: "Preparation & Staging",
    description: "First impressions drive offers. We coordinate decluttering, repairs, professional staging, and photography to present your home at its absolute best. Every dollar spent on preparation returns multiples at the negotiating table.",
  },
  {
    number: "04",
    title: "Marketing & Exposure",
    description: "Professional photography, video tours, targeted digital advertising, MLS optimization, and our network of qualified buyers. Your listing gets maximum exposure to the right audience — not just volume, but quality.",
  },
  {
    number: "05",
    title: "Showings & Open Houses",
    description: "We manage every showing, collect feedback, and adjust strategy in real time. You'll receive updates after every visit — what buyers liked, what gave them pause, and what it means for your pricing position.",
  },
  {
    number: "06",
    title: "Negotiation & Closing",
    description: "When offers come in, you'll have a clear picture of each one — not just price, but conditions, financing strength, and closing timeline. We negotiate on your behalf with the goal of maximizing value while minimizing risk.",
  },
];

const reasons = [
  { title: "350+ Families Served", text: "A track record built on trust, not transactions." },
  { title: "7 Specialty Practices", text: "We understand who your buyer is — because we serve them too." },
  { title: "$180M+ in Sales", text: "Results across every property type and GTA neighbourhood." },
  { title: "24-Hour Response", text: "Your questions answered within a day. Always." },
];

export function SellContent() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-6 lg:px-16 xl:px-24 pb-[var(--section-gap)]">
        <ScrollReveal>
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-6">
            Sellers
          </p>
        </ScrollReveal>
        <TextReveal
          text="Your home deserves the right exit."
          as="h1"
          className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] mb-4"
        />
        <ScrollReveal delay={0.2}>
          <p className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,2vw,1.75rem)] font-light italic text-[var(--color-accent-light)] mb-8">
            Maximum value. Minimum stress. Complete transparency.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="text-[var(--color-text-muted)] leading-[1.7] max-w-[560px] mb-10">
            Selling a home in the GTA is a high-stakes decision — and the
            difference between a good result and a great one often comes down to
            strategy, preparation, and negotiation. Here&apos;s how we approach
            every listing.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap gap-4">
            <MagneticButton
              as="a"
              href="/home-valuation"
              className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_24px_rgba(184,150,12,0.2)] transition-shadow duration-300"
            >
              Get Your Home Valuation
            </MagneticButton>
            <Link
              href="/book"
              className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 border border-[var(--color-border-strong)] text-[var(--color-accent-light)] hover:bg-[rgba(184,150,12,0.05)] hover:border-[var(--color-accent)] transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Process steps */}
      <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 bg-[var(--color-surface)] border-t border-[var(--color-divider)]">
        <ScrollReveal className="mb-12">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
            The Process
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1]">
            Six steps to a successful sale.
          </h2>
        </ScrollReveal>

        <div className="space-y-0 divide-y divide-[var(--color-divider)]">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.06} className="py-8 lg:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-4 lg:gap-8">
                <span className="font-[family-name:var(--font-display)] text-3xl font-light text-[var(--color-accent-dim)]">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-normal text-[var(--color-text)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] leading-[1.7] max-w-[560px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why Sankalp */}
      <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24">
        <ScrollReveal className="mb-12">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
            Why Sankalp
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1]">
            The difference is in the details.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-divider)]">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1} className="p-8 lg:p-10 bg-[var(--color-bg)]">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-normal text-[var(--color-accent-light)] mb-2">
                {r.title}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-[1.7] text-[0.9rem]">
                {r.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
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
            className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_24px_rgba(184,150,12,0.2)] hover:scale-[1.03] transition-all duration-300"
          >
            Get Your Home Valuation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
