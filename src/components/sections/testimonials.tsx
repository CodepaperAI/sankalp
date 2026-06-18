"use client";

import { ScrollReveal } from "@/components/animations";

const testimonials = [
  {
    quote:
      "We moved from Mumbai with two kids and no idea how Canadian real estate worked. Sankalp didn't just find us a home — he found us our neighbourhood. Our kids walk to school, we're five minutes from the temple, and our parents visit every winter.",
    author: "Priya & Rahul M.",
    detail: "Relocation · Brampton · 2024",
  },
  {
    quote:
      "Sankalp showed us the developer's track record, the neighbourhood growth data, and the real numbers. We invested with confidence.",
    author: "Amrit S.",
    detail: "Pre-Construction · Mississauga · 2023",
  },
  {
    quote:
      "He found us a place that felt like the next chapter, not a compromise.",
    author: "Dr. Kamla P.",
    detail: "Downsizing · Oakville · 2024",
  },
];

export function Testimonials() {
  const [featured, ...supporting] = testimonials;

  return (
    <section className="section-dark bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-4 px-6 lg:px-16 xl:px-24 py-16 lg:py-[var(--section-gap)] border-b lg:border-b-0 lg:border-r border-[var(--color-divider)]">
          <ScrollReveal>
            <p className="flex items-center gap-4 text-[0.68rem] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold mb-7">
              <span className="w-10 h-px bg-[var(--color-accent)]/60" />
              Client Stories
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,5vw,4.8rem)] font-light leading-[0.95] max-w-[520px]">
              The address is only{" "}
              <em className="italic text-[var(--color-accent-light)]">part of the story.</em>
            </h2>
            <p className="mt-8 text-[var(--color-text-muted)] leading-[1.75] max-w-[330px]">
              Thoughtful guidance is remembered long after the keys change hands.
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-8">
          <ScrollReveal className="h-full">
            <article className="min-h-[420px] lg:min-h-[500px] p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b border-[var(--color-divider)]">
              <span className="font-[family-name:var(--font-display)] text-[6rem] leading-none text-[var(--color-accent)]/25" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="mt-6">
                <p className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.5vw,3.25rem)] leading-[1.2] font-light text-[var(--color-text)] max-w-[980px]">
                  {featured.quote}
                </p>
                <footer className="mt-10 pt-6 border-t border-[var(--color-divider)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-[0.82rem] font-semibold text-[var(--color-accent-light)]">
                    {featured.author}
                  </p>
                  <p className="text-[0.68rem] tracking-[0.08em] uppercase text-[var(--color-text-muted)]">
                    {featured.detail}
                  </p>
                </footer>
              </blockquote>
            </article>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {supporting.map((testimonial, index) => (
              <ScrollReveal
                key={testimonial.author}
                delay={index * 0.1}
                className="border-b md:border-b-0 md:border-r last:border-r-0 border-[var(--color-divider)]"
              >
                <article className="p-8 lg:p-12 min-h-[280px] flex flex-col">
                  <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[var(--color-accent)] font-semibold">
                    0{index + 2}
                  </span>
                  <blockquote className="mt-8 flex-1 flex flex-col">
                    <p className="text-[1rem] lg:text-[1.08rem] leading-[1.75] text-[var(--color-text)]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer className="mt-auto pt-8">
                      <p className="text-[0.8rem] font-semibold text-[var(--color-accent-light)]">
                        {testimonial.author}
                      </p>
                      <p className="mt-1 text-[0.68rem] text-[var(--color-text-muted)]">
                        {testimonial.detail}
                      </p>
                    </footer>
                  </blockquote>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
