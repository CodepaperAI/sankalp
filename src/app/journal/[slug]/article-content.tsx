"use client";

import { ScrollReveal } from "@/components/animations";
import type { JournalArticle } from "@/lib/journal";
import Link from "next/link";

export function ArticleContent({ article }: { article: JournalArticle }) {
  return (
    <div className="pt-32 pb-[var(--section-gap)]">
      <article className="px-6 lg:px-16 xl:px-24">
        <div className="max-w-[720px] mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
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
              <span className="text-[0.65rem] text-[var(--color-text-muted)]">
                {article.readTime}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] mb-6">
              {article.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[var(--color-text-muted)] leading-[1.7] mb-12 italic">
              {article.excerpt}
            </p>
          </ScrollReveal>

          {/* Body */}
          <div className="space-y-6">
            {article.content.map((paragraph, i) => (
              <ScrollReveal key={i} delay={0.05 * Math.min(i, 4)}>
                {paragraph.startsWith("**") ? (
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-xl font-normal text-[var(--color-text)] mb-3 mt-8">
                      {paragraph.replace(/\*\*/g, "").split("\n")[0]}
                    </h2>
                    {paragraph.split("\n").slice(1).map((line, j) => (
                      <p
                        key={j}
                        className="text-[var(--color-text-muted)] leading-[1.8] mb-4"
                      >
                        {line.replace(/\*\*/g, "")}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-[var(--color-text-muted)] leading-[1.8]">
                    {paragraph}
                  </p>
                )}
              </ScrollReveal>
            ))}
          </div>

          {/* Author + CTA */}
          <ScrollReveal className="mt-16 pt-8 border-t border-[var(--color-divider)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-1">
                  Written by
                </p>
                <p className="font-[family-name:var(--font-display)] text-lg">
                  Sankalp
                </p>
              </div>
              <Link
                href="/book"
                className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_24px_rgba(45,90,61,0.15)] hover:scale-[1.03] transition-all duration-300"
              >
                Book a Consultation
              </Link>
            </div>
          </ScrollReveal>

          {/* Back link */}
          <ScrollReveal className="mt-8">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-[0.75rem] tracking-[0.15em] uppercase text-[var(--color-accent)] font-medium hover:gap-4 transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5 rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
              All Articles
            </Link>
          </ScrollReveal>
        </div>
      </article>

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.seoDescription,
            datePublished: article.publishedAt,
            author: {
              "@type": "Person",
              name: "Sankalp",
            },
            publisher: {
              "@type": "RealEstateAgent",
              name: "Sankalp Real Estate",
              url: "https://sankalprealestate.ca",
            },
            mainEntityOfPage: `https://sankalprealestate.ca/journal/${article.slug}`,
          }),
        }}
      />
    </div>
  );
}
