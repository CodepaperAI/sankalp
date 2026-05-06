"use client";

import { ScrollReveal, TextReveal, MagneticButton } from "@/components/animations";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";

export function HomeValuationContent() {
  return (
    <div>
      <PageHero eyebrow="Home Valuation" title="Know what your home is really worth." imageSrc={images.heroValuation} imageAlt="Beautiful home exterior" />
      <section className="px-6 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Value prop */}
          <div>
            <ScrollReveal delay={0.3}>
              <div className="space-y-4 text-[var(--color-text-muted)] leading-[1.8] max-w-[480px] mb-10">
                <p>
                  Online estimators use algorithms. I use actual market
                  knowledge — recent sales in your neighbourhood, current
                  inventory, buyer demand, and the specific features that make
                  your property unique.
                </p>
                <p>
                  This is a complimentary service with no strings attached.
                  Whether you&apos;re selling next month or just curious about your
                  equity position — the information is yours to keep.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="space-y-4">
                <h3 className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium">
                  What You&apos;ll Receive
                </h3>
                {[
                  "Comparative market analysis of 5-10 recent sales near you",
                  "Current active inventory that competes with your home",
                  "Price range recommendation based on condition and features",
                  "Market timing insights — is now the right time to list?",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[var(--color-accent-dim)] flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M13 4L6 11l-3-3" />
                    </svg>
                    <p className="text-[0.85rem] text-[var(--color-text-muted)]">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <ScrollReveal delay={0.2} className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8 lg:p-12 sticky top-32">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-light mb-2">
              Request Your Valuation
            </h2>
            <p className="text-[0.8rem] text-[var(--color-text-muted)] mb-8">
              Response within 24 hours. No obligation.
            </p>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <FormField label="Full Name" type="text" id="val-name" />
              <FormField label="Email Address" type="email" id="val-email" />
              <FormField label="Phone Number" type="tel" id="val-phone" />
              <FormField label="Property Address" type="text" id="val-address" />

              <div>
                <p className="text-[0.7rem] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">
                  Timeline
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Selling soon", "6-12 months", "Just curious"].map((option) => (
                    <label
                      key={option}
                      className="cursor-pointer text-[0.75rem] tracking-[0.1em] px-4 py-2 border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-all duration-300 has-[:checked]:bg-[var(--color-accent)] has-[:checked]:text-[var(--color-text-inverse)] has-[:checked]:border-[var(--color-accent)]"
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={option.toLowerCase()}
                        className="sr-only"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <MagneticButton className="mt-2 self-start text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_32px_rgba(45,90,61,0.15)] transition-shadow duration-300 border-none cursor-pointer">
                Get My Home Valuation
              </MagneticButton>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, type, id }: { label: string; type: string; id: string }) {
  return (
    <div className="relative group">
      <input
        type={type}
        id={id}
        name={id}
        placeholder=" "
        className="peer w-full pt-5 pb-2 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text)] text-[0.9rem] outline-none focus:border-[var(--color-accent)] transition-colors duration-300"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-5 text-[0.8rem] text-[var(--color-text-muted)] tracking-[0.05em] pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:tracking-[0.15em] peer-focus:uppercase peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:tracking-[0.15em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[var(--color-accent)]"
      >
        {label}
      </label>
    </div>
  );
}
