import Link from "next/link";
import { siteContact, socialLinks } from "@/lib/contact";
import { NewsletterForm } from "./newsletter-form";

const buyerLinks = [
  { href: "/buy/first-time", label: "First-Time Buyers" },
  { href: "/buy/luxury", label: "Luxury Homes" },
  { href: "/buy/condos", label: "Condos" },
  { href: "/buy/pre-construction", label: "Pre-Construction" },
  { href: "/buy/investment", label: "Investment" },
];

const sellerLinks = [
  { href: "/home-valuation", label: "Home Valuation" },
  { href: "/sell", label: "Selling Process" },
  { href: "/communities", label: "Market Reports" },
  { href: "/sold", label: "Recent Sales" },
];

const connectLinks = [
  { href: "/about", label: "About Sankalp" },
  { href: "/communities", label: "Communities" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
  { href: "/refer", label: "Refer a Friend" },
];

const footerSocials = [
  ...socialLinks,
  {
    href: siteContact.whatsappHref,
    label: "WhatsApp",
    short: "WhatsApp",
    detail: siteContact.phoneDisplay,
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-divider)] bg-[var(--color-bg)]">
      <div className="relative overflow-hidden border-b border-[var(--color-divider)] bg-[var(--color-surface)] text-[var(--color-text)]">
        <div className="relative grid grid-cols-1 items-center gap-8 px-6 py-14 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-20">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-accent)]/45" />
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Stay in touch
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,3rem)] font-light leading-[1.1]">
              The market shifts.{" "}
              <em className="italic text-[var(--color-accent-light)]">
                Stay ahead.
              </em>
            </h2>
            <p className="mt-5 max-w-[520px] text-[0.95rem] leading-[1.7] text-[var(--color-text-muted)]">
              Quarterly notes from the GTA - new listings, neighbourhood
              reports, and the occasional opinion on where the market is
              actually going. No spam. Unsubscribe with one click.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="px-6 pb-8 pt-16 lg:px-12 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="mb-5 inline-block font-[family-name:var(--font-display)] text-[1.65rem] uppercase tracking-[0.12em] text-[var(--color-accent-light)] transition-colors hover:text-[var(--color-accent)]"
            >
              Sankalp
            </Link>
            <p className="mb-8 max-w-[320px] text-[0.92rem] leading-[1.7] text-[var(--color-text-muted)]">
              Greater Toronto Area real estate, guided by the families who live
              here. Seven specialties - your home, your legacy.
            </p>

            <div className="mb-8 space-y-2">
              <a
                href={siteContact.phoneHref}
                className="group flex items-center gap-3 text-[0.88rem] text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
              >
                <span className="text-[0.7rem] text-[var(--color-accent)]">
                  &#9742;
                </span>
                {siteContact.phoneDisplay}
              </a>
              <a
                href={siteContact.emailHref}
                className="group flex items-center gap-3 text-[0.88rem] text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
              >
                <span className="text-[0.7rem] text-[var(--color-accent)]">
                  &#9993;
                </span>
                {siteContact.email}
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {footerSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="border border-[var(--color-border)] px-3.5 py-2 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)] transition-[border-color,color,transform] duration-300 hover:-translate-y-[2px] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {social.short}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn label="Buyers" links={buyerLinks} />
          <FooterColumn label="Sellers" links={sellerLinks} />
          <FooterColumn label="Connect" links={connectLinks} />
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-[var(--color-divider)] pt-7 text-[0.7rem] tracking-[0.05em] text-[var(--color-text-muted)] lg:mt-20 lg:flex-row">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              &copy; {new Date().getFullYear()} Sankalp Real Estate. All rights
              reserved.
            </span>
            <Link
              href="/privacy"
              className="transition-colors hover:text-[var(--color-text)]"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-[var(--color-text)]"
            >
              Terms
            </Link>
          </div>
          <span className="text-[0.65rem] uppercase tracking-[0.15em]">
            Brokerage: [Brokerage Name] &middot; RECO Registered
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="lg:col-span-2 lg:col-start-auto xl:col-span-2">
      <div className="mb-6 flex items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
        <span className="h-px w-6 bg-[var(--color-accent)]" />
        {label}
      </div>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-[0.92rem] text-[var(--color-text-muted)] transition-colors duration-300 hover:text-[var(--color-text)]"
            >
              {link.label}
              <span className="-translate-x-1 text-[0.7rem] text-[var(--color-accent)] opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
