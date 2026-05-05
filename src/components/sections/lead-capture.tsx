"use client";

import { ScrollReveal, MagneticButton } from "@/components/animations";

export function LeadCapture() {
  return (
    <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24" style={{ background: "linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%)" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Copy side */}
        <ScrollReveal>
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
            Thinking of Selling?
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] mb-4">
            Know what your home is{" "}
            <em className="italic text-[var(--color-accent-light)]">really worth.</em>
          </h2>
          <p className="text-[var(--color-text-muted)] leading-[1.7] text-[0.95rem] mb-8 max-w-[480px]">
            Get a complimentary, no-obligation market evaluation of your
            property. Based on real GTA comparables — not automated estimates.
          </p>
          <div className="space-y-3">
            {[
              "Response within 24 hours",
              "Based on recent neighbourhood sales",
              "No automated estimates — real analysis",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-[var(--color-accent-dim)] flex-shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M13 4L6 11l-3-3" />
                </svg>
                <span className="text-[0.8rem] text-[var(--color-text-muted)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Form side */}
        <ScrollReveal delay={0.2}>
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <FormField label="Full Name" type="text" id="lead-name" />
            <FormField label="Email Address" type="email" id="lead-email" />
            <FormField label="Phone Number" type="tel" id="lead-phone" />
            <FormField label="Property Address" type="text" id="lead-address" />

            <MagneticButton
              className="mt-2 self-start text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_32px_rgba(201,169,110,0.35)] transition-shadow duration-300 border-none cursor-pointer"
            >
              Get Your Home Valuation
            </MagneticButton>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FormField({
  label,
  type,
  id,
}: {
  label: string;
  type: string;
  id: string;
}) {
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
