"use client";

import { ScrollReveal, MagneticButton } from "@/components/animations";

export function Referral() {
  return (
    <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 border-t border-[var(--color-divider)]">
      <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1fr] gap-12 lg:gap-24 items-center">
        {/* Visual */}
        <ScrollReveal direction="left">
          <div
            className="aspect-[3/4] border border-[var(--color-border)] flex items-center justify-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, rgba(184,150,12,0.05) 0%, var(--color-surface) 100%)",
            }}
          >
            <div className="absolute w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(184,150,12,0.05)_0%,transparent_70%)] blur-[40px]" />
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)] text-center opacity-50 px-4">
              Community event photography<br />— to be sourced
            </p>
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={0.15}>
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
            Refer a Friend
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] mb-4">
            Great homes deserve<br />great neighbours.
          </h2>
          <p className="text-[var(--color-text-muted)] leading-[1.7] text-[0.95rem] mb-8 max-w-[480px]">
            Know someone buying or selling in the GTA? Refer them to Sankalp and
            receive a personal thank-you gift when the transaction closes. No
            strings — just gratitude for your trust.
          </p>
          <MagneticButton
            as="a"
            href="/refer"
            className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_32px_rgba(184,150,12,0.2)] transition-shadow duration-300"
          >
            Make a Referral
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
