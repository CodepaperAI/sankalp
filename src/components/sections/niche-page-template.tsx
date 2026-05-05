"use client";

import { ScrollReveal, TextReveal, MagneticButton } from "@/components/animations";
import Link from "next/link";

interface NichePageProps {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  description: string[];
  features: { title: string; text: string }[];
  ctaText: string;
  ctaHref: string;
  imagePlaceholder: string;
}

export function NichePageTemplate({
  eyebrow,
  headline,
  headlineAccent,
  description,
  features,
  ctaText,
  ctaHref,
  imagePlaceholder,
}: NichePageProps) {
  return (
    <div className="pt-32">
      {/* Hero — asymmetric split */}
      <section className="px-6 lg:px-16 xl:px-24 pb-[var(--section-gap)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <ScrollReveal>
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-6">
                {eyebrow}
              </p>
            </ScrollReveal>
            <TextReveal
              text={headline}
              as="h1"
              className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] mb-3"
            />
            <ScrollReveal delay={0.2}>
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.5rem)] font-light italic text-[var(--color-accent-light)] mb-8">
                {headlineAccent}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="space-y-4 text-[var(--color-text-muted)] leading-[1.8] max-w-[520px] mb-8">
                {description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <MagneticButton
                as="a"
                href={ctaHref}
                className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_32px_rgba(184,150,12,0.2)] transition-shadow duration-300"
              >
                {ctaText}
              </MagneticButton>
            </ScrollReveal>
          </div>

          {/* Image placeholder */}
          <ScrollReveal delay={0.2} direction="right">
            <div
              className="aspect-[4/5] border border-[var(--color-border)] flex items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface) 50%, var(--color-bg) 100%)" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(184,150,12,0.04)_0%,transparent_60%)]" />
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)] text-center opacity-50 px-4">
                {imagePlaceholder}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 bg-[var(--color-surface)] border-t border-[var(--color-divider)]">
        <ScrollReveal className="mb-12">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
            What Sets Us Apart
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.1]">
            The Sankalp difference.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-divider)]">
          {features.map((f, i) => (
            <ScrollReveal
              key={f.title}
              delay={i * 0.1}
              className="p-8 lg:p-10 bg-[var(--color-bg)]"
            >
              <h3 className="font-[family-name:var(--font-display)] text-lg font-normal text-[var(--color-accent-light)] mb-3">
                {f.title}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-[1.7] text-[0.9rem]">
                {f.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] mb-6">
            Ready to start?
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-md mx-auto mb-8">
            Book a free consultation and let&apos;s talk about your goals.
          </p>
          <Link
            href="/book"
            className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_32px_rgba(184,150,12,0.2)] hover:scale-[1.03] transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
