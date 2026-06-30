import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

const serviceNotes = [
  ["Area", "Greater Toronto"],
  ["Practice", "Buy / Sell"],
  ["Style", "Data-led"],
];

export function Hero() {
  return (
    <section className="relative flex h-[88svh] min-h-[650px] max-h-[860px] items-center overflow-hidden border-b border-[var(--color-divider)] bg-[var(--color-bg)]">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.heroLuxuryHome}
          alt="Luxury home in the Greater Toronto Area"
          fill
          className="object-cover object-[62%_center]"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(251,251,247,0.98) 0%, rgba(251,251,247,0.94) 36%, rgba(251,251,247,0.56) 63%, rgba(251,251,247,0.12) 100%)",
          }}
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(251,251,247,0.98) 0%, rgba(251,251,247,0.90) 42%, rgba(251,251,247,0.46) 70%, rgba(251,251,247,0.92) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 pb-32 pt-28 sm:pb-28 lg:px-16 xl:px-24">
        <div className="max-w-[780px]">
          <p className="mb-6 flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="h-px w-9 bg-[var(--color-accent)]/45" />
            Greater Toronto Area
          </p>

          <h1 className="mb-7 max-w-full font-[family-name:var(--font-display)] text-[3.45rem] font-light leading-[0.92] text-[var(--color-text)] sm:text-[5.5rem] sm:leading-[0.88] lg:text-[6.5rem] xl:text-[7.5rem]">
            <span className="block">Sankalp</span>
            <span className="block italic text-[var(--color-accent-light)]">
              Real Estate.
            </span>
          </h1>

          <p className="mb-8 w-full max-w-[330px] text-[1rem] leading-[1.75] text-[var(--color-text-muted)] sm:max-w-[520px] lg:text-[1.08rem]">
            Real estate at the pace of a relationship, not a transaction. From
            first homes in Brampton to estates on the Bridle Path, every search
            starts with where you&apos;re going next.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/home-valuation"
              className="inline-flex min-h-12 items-center whitespace-nowrap bg-[var(--color-accent)] px-6 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-inverse)] transition-colors duration-300 hover:bg-[var(--color-accent-light)]"
            >
              Home Valuation
            </Link>
            <Link
              href="/book"
              className="inline-flex min-h-12 items-center whitespace-nowrap border border-[var(--color-border-strong)] bg-[var(--color-bg)]/72 px-6 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-text)] transition-[background-color,color,border-color] duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-accent)]"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-3 border-t border-[var(--color-divider)] bg-[var(--color-bg)]/90">
        {serviceNotes.map(([label, value]) => (
          <div
            key={label}
            className="min-h-[72px] border-r border-[var(--color-divider)] px-3 py-4 last:border-r-0 sm:px-5 lg:px-8"
          >
            <span className="mb-1.5 block text-[0.55rem] uppercase tracking-[0.14em] text-[var(--color-text-soft)]">
              {label}
            </span>
            <span className="block text-[0.68rem] leading-snug text-[var(--color-text)] lg:text-[0.78rem]">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
