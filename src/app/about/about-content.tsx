import { ScrollReveal, StatsCounter } from "@/components/animations";
import { PageHero } from "@/components/sections/page-hero";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Trust Over Transactions",
    description:
      "Every recommendation is rooted in what's right for the family, not what closes fastest.",
  },
  {
    title: "Community Knowledge",
    description:
      "Not just data - lived experience. The schools, the parks, the temples, the commute. The things that make a neighbourhood a home.",
  },
  {
    title: "Seven Specialties, One Standard",
    description:
      "Whether it's a $600K first home or a $5M estate, the rigour, attention, and care are identical.",
  },
  {
    title: "Transparent Process",
    description:
      "No surprises. Every step explained, every cost surfaced, every decision yours to make with full clarity.",
  },
];

const stats = [
  { target: 350, suffix: "+", label: "Families Served" },
  { target: 180, prefix: "$", suffix: "M+", label: "In Transactions" },
  { target: 12, suffix: "", label: "Years in GTA Real Estate" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
];

export function AboutContent() {
  return (
    <div>
      <PageHero
        compact
        eyebrow="About"
        title="Real estate is personal. It should feel that way."
        imageSrc={images.agent}
        imageAlt="Sankalp - GTA Real Estate Professional"
        imagePosition="center 20%"
      />

      <section className="relative overflow-hidden px-6 py-14 lg:px-16 lg:py-20 xl:px-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-32 h-[420px] w-[420px] rounded-full opacity-[0.035] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(45,90,61,1) 0%, transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.58fr)] lg:gap-14">
          <div className="min-w-0">
            <ScrollReveal>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-[var(--color-accent)]" />
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  In My Own Words
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mb-8 max-w-[640px] break-words font-[family-name:var(--font-display)] text-[1.4rem] font-light italic leading-[1.35] text-[var(--color-accent-light)] lg:mb-10 lg:text-[1.9rem]">
                &ldquo;Home is never just a transaction. It&apos;s the place
                where the next chapter happens - and the right match isn&apos;t
                about square footage.&rdquo;
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="max-w-[560px] min-w-0 space-y-5 break-words text-[1rem] leading-[1.75] text-[var(--color-text-muted)]">
                <p>
                  I grew up watching families in the GTA navigate one of the
                  biggest decisions of their lives - where to call home. Too
                  often, the process felt transactional. A listing. A showing.
                  A closing.
                </p>
                <p>
                  That&apos;s why I built my practice around seven distinct
                  specialties. A first-time buyer needs fundamentally different
                  guidance than someone downsizing after 40 years. An investor
                  cares about cap rates; a relocating family cares about school
                  catchments and proximity to community.
                </p>
                <p>
                  After serving over 350 families across the Greater Toronto
                  Area - from Oakville&apos;s lakeside estates to Brampton&apos;s
                  growing communities - I can tell you: the right match
                  isn&apos;t about square footage. It&apos;s about understanding
                  what home means to you.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-9 max-w-[560px] border-t border-[var(--color-divider)] pt-6">
                <p className="mb-2 font-[family-name:var(--font-display)] text-[2rem] font-light italic leading-none text-[var(--color-accent)]">
                  Sankalp
                </p>
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  Founder / GTA Real Estate
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="right">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={images.agent}
                  alt="Sankalp - GTA Real Estate Professional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
                <div className="pointer-events-none absolute inset-4 border border-white/15" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div className="text-white/95">
                    <p className="mb-1 text-[0.55rem] uppercase tracking-[0.24em] opacity-80">
                      Founder
                    </p>
                    <p className="font-[family-name:var(--font-display)] text-[1.25rem] font-light leading-tight">
                      Sankalp
                    </p>
                  </div>
                  <span className="font-[family-name:var(--font-display)] text-[0.85rem] italic text-white/85">
                    - 01
                  </span>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 bg-[var(--color-surface)] px-4 py-3">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  RECO Registered
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  12 yrs / GTA
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="grid grid-cols-2 border-y border-[var(--color-divider)] bg-[var(--color-surface)] lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`relative px-4 py-8 lg:py-10 ${
              i < stats.length - 1
                ? "lg:after:absolute lg:after:right-0 lg:after:top-[18%] lg:after:bottom-[18%] lg:after:w-px lg:after:bg-[var(--color-divider)] lg:after:content-['']"
                : ""
            }`}
          >
            <StatsCounter
              target={stat.target}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              className="mb-2 font-[family-name:var(--font-display)] text-[2rem] font-light leading-none text-[var(--color-accent-light)] lg:text-[2.75rem]"
              labelClassName="text-[0.62rem] tracking-[0.16em] uppercase text-[var(--color-text-muted)]"
            />
          </div>
        ))}
      </section>

      <section className="relative overflow-hidden px-6 py-14 lg:px-16 lg:py-20 xl:px-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[440px] w-[440px] rounded-full opacity-[0.035] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(45,90,61,1) 0%, transparent 70%)",
          }}
        />

        <div className="relative mb-10 grid grid-cols-1 items-end gap-6 lg:mb-12 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--color-accent)]" />
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Principles / 01 - 04
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[2rem] font-light leading-[1.08] md:text-[3rem]">
              How I{" "}
              <em className="italic text-[var(--color-accent-light)]">work.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="lg:col-span-5">
            <p className="text-[1rem] leading-[1.7] text-[var(--color-text-muted)]">
              Four convictions that shape every consultation, every showing,
              and every signature.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative grid grid-cols-1 gap-px bg-[var(--color-border)] md:grid-cols-2">
          {values.map((v, i) => (
            <ScrollReveal
              key={v.title}
              delay={i * 0.08}
              className="group relative overflow-hidden bg-[var(--color-bg)] p-6 transition-colors duration-300 hover:bg-[var(--color-surface)] lg:p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-6 -right-2 select-none font-[family-name:var(--font-display)] text-[7rem] font-light italic leading-none text-[var(--color-accent)]/[0.05] transition-colors duration-300 group-hover:text-[var(--color-accent)]/[0.08]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-accent)]" />
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Principle 0{i + 1}
                </span>
              </div>

              <h3 className="relative mb-4 font-[family-name:var(--font-display)] text-[1.35rem] font-normal leading-tight text-[var(--color-text)] lg:text-[1.55rem]">
                {v.title}
              </h3>
              <p className="relative max-w-[420px] text-[0.95rem] leading-[1.65] text-[var(--color-text-muted)]">
                {v.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--color-divider)] px-6 py-14 text-center lg:px-16 lg:py-[4.5rem] xl:px-24">
        <ScrollReveal>
          <h2 className="mb-5 font-[family-name:var(--font-display)] text-[2rem] font-light leading-[1.1] md:text-[3rem]">
            Let&apos;s find your{" "}
            <em className="italic text-[var(--color-accent-light)]">
              next chapter.
            </em>
          </h2>
          <p className="mx-auto mb-7 max-w-md text-[var(--color-text-muted)]">
            Whether you&apos;re buying your first home or selling your legacy property,
            the conversation starts here.
          </p>
          <Link
            href="/book"
            className="inline-flex min-h-12 items-center bg-[var(--color-accent)] px-8 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-inverse)] transition-colors duration-300 hover:bg-[var(--color-accent-light)]"
          >
            Book a Consultation
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
