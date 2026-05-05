"use client";

import { ScrollReveal } from "@/components/animations";

const testimonials = [
  {
    quote:
      "We moved from Mumbai with two kids and no idea how Canadian real estate worked. Sankalp didn't just find us a home — he found us our neighbourhood. Our kids walk to school, we're five minutes from the temple, and our parents visit every winter.",
    author: "Priya & Rahul M.",
    detail: "Relocation · Brampton · 2024",
    featured: true,
  },
  {
    quote:
      "Every pre-construction pitch we'd seen felt like a gamble. Sankalp showed us the developer's track record, the neighbourhood growth data, and the real numbers. We invested with confidence.",
    author: "Amrit S.",
    detail: "Pre-Construction Investment · Mississauga · 2023",
    featured: false,
  },
  {
    quote:
      "After forty years in our family home, downsizing felt like losing a piece of ourselves. Sankalp understood. He found us a place that felt like the next chapter, not a compromise.",
    author: "Dr. Kamla P.",
    detail: "Downsizing · Oakville · 2024",
    featured: false,
  },
];

export function Testimonials() {
  return (
    <section className="py-[var(--section-gap)] px-6 lg:px-16 xl:px-24 relative">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,150,12,0.03)_0%,transparent_70%)] blur-[80px] pointer-events-none" />

      <ScrollReveal>
        <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-4">
          Client Stories
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1]">
          Words from the families<br className="hidden sm:block" /> we&apos;ve served.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12 lg:mt-16">
        {testimonials.map((t, i) => (
          <ScrollReveal
            key={t.author}
            delay={i * 0.15}
            className={`p-8 lg:p-10 border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-strong)] hover:-translate-y-0.5 transition-all duration-400 ${
              t.featured ? "lg:row-span-2 flex flex-col justify-center" : ""
            }`}
          >
            <blockquote>
              <span className="font-[family-name:var(--font-display)] text-[2.5rem] leading-none text-[var(--color-accent-dim)] block mb-4">
                &ldquo;
              </span>
              <p
                className={`font-[family-name:var(--font-display)] font-light italic leading-[1.6] text-[var(--color-text)] mb-6 ${
                  t.featured ? "text-[1.5rem] lg:text-[1.75rem]" : "text-[1.2rem] lg:text-[1.35rem]"
                }`}
              >
                {t.quote}
              </p>
              <footer>
                <p className="text-[0.8rem] font-semibold text-[var(--color-accent-light)]">
                  {t.author}
                </p>
                <p className="text-[0.7rem] text-[var(--color-text-muted)] tracking-[0.05em]">
                  {t.detail}
                </p>
              </footer>
            </blockquote>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
