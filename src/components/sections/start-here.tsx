import { siteContact } from "@/lib/contact";
import Link from "next/link";

const intentRoutes = [
  {
    label: "I am buying",
    detail: "Shortlist homes, neighbourhoods, and offer strategy.",
    href: "/buy",
  },
  {
    label: "I am selling",
    detail: "Price, prepare, launch, and negotiate with sold proof.",
    href: "/sell",
  },
  {
    label: "I need a valuation",
    detail: "A human-read estimate built from recent GTA comparables.",
    href: "/home-valuation",
  },
  {
    label: "I want recent results",
    detail: "See address-level sold records across the GTA.",
    href: "/sold",
  },
];

export function StartHere() {
  return (
    <section className="relative border-b border-[var(--color-divider)] bg-[var(--color-bg)] px-6 py-7 lg:px-16 lg:py-8 xl:px-24">
      <div className="mx-auto max-w-[1240px] border border-[var(--color-divider)] bg-[var(--color-surface-raised)] shadow-[0_22px_70px_-58px_rgba(31,31,31,0.55)]">
        <div className="flex flex-col gap-3 border-b border-[var(--color-divider)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Start here
          </p>
          <a
            href={siteContact.instagramHref}
            target="_blank"
            rel="noreferrer"
            className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-soft)] transition-colors duration-300 hover:text-[var(--color-accent)]"
          >
            {siteContact.instagramLabel}
          </a>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--color-divider)] lg:grid-cols-4">
          {intentRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group grid min-h-[126px] grid-cols-[1fr_auto] items-center gap-4 bg-[var(--color-surface-raised)] px-5 py-5 transition-[background-color,color] duration-300 hover:bg-[var(--color-bg)]"
            >
              <span>
                <span className="block text-[1rem] font-semibold leading-tight text-[var(--color-text)]">
                  {route.label}
                </span>
                <span className="mt-2 block text-[0.82rem] leading-[1.55] text-[var(--color-text-muted)]">
                  {route.detail}
                </span>
              </span>
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center border border-[var(--color-border)] text-[var(--color-accent)] transition-[background-color,border-color,color,transform] duration-300 group-hover:translate-x-0.5 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-inverse)]"
              >
                &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 px-4 py-4 text-[0.84rem] text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <span>Prefer direct guidance?</span>
          <a
            href={siteContact.phoneHref}
            className="font-semibold text-[var(--color-accent)] transition-colors duration-300 hover:text-[var(--color-accent-light)]"
          >
            {siteContact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
