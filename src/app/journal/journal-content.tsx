"use client";

import { ScrollReveal, TextReveal } from "@/components/animations";
import { articles } from "@/lib/journal";
import Link from "next/link";

export function JournalContent() {
  return (
    <div className="pt-32 pb-[var(--section-gap)]">
      <section className="px-6 lg:px-16 xl:px-24">
        <ScrollReveal>
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-6">
            Journal
          </p>
        </ScrollReveal>
        <TextReveal
          text="Insights from the market."
          as="h1"
          className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] mb-4"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-[var(--color-text-muted)] leading-[1.7] max-w-[520px] mb-16">
            Expert analysis, buying guides, and market updates for the Greater
            Toronto Area. No fluff — just the information you need to make
            informed decisions.
          </p>
        </ScrollReveal>

        {/* Article list */}
        <div className="space-y-0 divide-y divide-[var(--color-divider)]">
          {articles.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.08}>
              <Link
                href={`/journal/${article.slug}`}
                className="block py-8 lg:py-10 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[var(--color-accent)] font-medium">
                        {article.category}
                      </span>
                      <span className="text-[0.65rem] text-[var(--color-text-muted)]">
                        {new Date(article.publishedAt).toLocaleDateString("en-CA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,2vw,1.75rem)] font-normal mb-2 group-hover:text-[var(--color-accent-light)] transition-colors duration-300">
                      {article.title}
                    </h2>
                    <p className="text-[0.9rem] text-[var(--color-text-muted)] leading-[1.6] max-w-[640px]">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[0.7rem] tracking-[0.15em] uppercase text-[var(--color-accent)] font-medium group-hover:gap-4 transition-all duration-300 lg:mt-8">
                    Read
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
