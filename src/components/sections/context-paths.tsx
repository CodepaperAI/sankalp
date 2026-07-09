import { ScrollReveal } from "@/components/animations";
import { siteContact, socialLinks } from "@/lib/contact";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

const paths = [
  {
    title: "Buyer path",
    label: "Buying in the GTA",
    description:
      "Compare neighbourhoods, understand offer pressure, and know what the monthly picture really looks like.",
    href: "/buy",
  },
  {
    title: "Seller path",
    label: "Preparing to sell",
    description:
      "Use recent sold records, pricing strategy, launch timing, and buyer behaviour before going live.",
    href: "/sell",
  },
  {
    title: "Valuation path",
    label: "What is my home worth?",
    description:
      "Get a calm, comparable-backed read instead of a generic automated estimate.",
    href: "/home-valuation",
  },
  {
    title: "Community path",
    label: "Where should I live?",
    description:
      "Read the places, commutes, schools, and lifestyle context that shape a good match.",
    href: "/communities",
  },
];

export function ContextPaths() {
  return (
    <section className="border-b border-[var(--color-divider)] bg-[var(--color-surface-raised)] px-6 py-14 lg:px-16 lg:py-16 xl:px-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
        <ScrollReveal className="lg:col-span-5">
          <div className="relative min-h-[420px] overflow-hidden bg-[var(--color-surface)]">
            <Image
              src={images.heroInterior}
              alt="Bright home interior prepared for a real estate consultation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/18 to-transparent p-5 text-white">
              <p className="mb-2 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                Context first
              </p>
              <p className="max-w-[330px] font-[family-name:var(--font-display)] text-[1.6rem] font-light leading-[1.12]">
                The right move starts with the reason behind it.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="lg:col-span-7">
          <ScrollReveal>
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Choose your context
            </p>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.45fr)] lg:items-end">
              <h2 className="max-w-[640px] font-[family-name:var(--font-display)] text-[2.1rem] font-light leading-[1.08] text-[var(--color-text)] md:text-[2.6rem]">
                Start from the situation you are in, not from a generic listing feed.
              </h2>
              <p className="text-[0.95rem] leading-[1.7] text-[var(--color-text-muted)]">
                This keeps the landing page simple: pick the reason you are here,
                see proof, then talk directly.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 gap-px bg-[var(--color-divider)] md:grid-cols-2">
            {paths.map((path) => (
              <ScrollReveal key={path.href} className="bg-[var(--color-bg)]">
                <Link
                  href={path.href}
                  className="group flex min-h-[196px] flex-col p-5 transition-colors duration-300 hover:bg-[var(--color-surface)] lg:p-6"
                >
                  <span className="mb-4 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    {path.title}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-[1.35rem] font-normal leading-tight text-[var(--color-text)]">
                    {path.label}
                  </span>
                  <span className="mt-3 text-[0.9rem] leading-[1.6] text-[var(--color-text-muted)]">
                    {path.description}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    Open path
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-6">
            <div className="flex flex-col gap-4 border border-[var(--color-divider)] bg-[var(--color-bg)] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                  Direct contact
                </p>
                <a
                  href={siteContact.phoneHref}
                  className="mt-1 block font-[family-name:var(--font-display)] text-[1.45rem] font-light text-[var(--color-accent)] transition-colors duration-300 hover:text-[var(--color-accent-light)]"
                >
                  {siteContact.phoneDisplay}
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center border border-[var(--color-border)] px-4 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)] transition-[background-color,color,border-color] duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-inverse)]"
                  >
                    {social.short}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
