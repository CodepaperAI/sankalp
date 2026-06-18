import Link from "next/link";
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

const socials = [
  { href: "#", label: "Instagram", short: "Instagram" },
  { href: "#", label: "LinkedIn", short: "LinkedIn" },
  { href: "#", label: "WhatsApp", short: "WhatsApp" },
  { href: "#", label: "YouTube", short: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-bg)] border-t border-[var(--color-divider)]">
      {/* Brand-led top strip — newsletter / talk to us */}
      <div className="relative overflow-hidden bg-[var(--color-accent)] text-[var(--color-text-inverse)]">
        {/* Decorative blob */}
        <div
          aria-hidden
          className="absolute -bottom-32 -left-20 w-[480px] h-[480px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)",
          }}
        />
        <div className="relative px-6 lg:px-12 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6 opacity-90">
              <span className="w-10 h-px bg-[var(--color-text-inverse)]/40" />
              <span className="text-[0.6rem] tracking-[0.3em] uppercase font-semibold">
                Stay in touch
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,3rem)] font-light leading-[1.1]">
              The market shifts.{" "}
              <em className="italic opacity-90">Stay ahead.</em>
            </h2>
            <p className="text-[0.95rem] leading-[1.7] opacity-85 mt-5 max-w-[520px]">
              Quarterly notes from the GTA — new listings, neighbourhood reports,
              and the occasional opinion on where the market is actually going.
              No spam. Unsubscribe with one click.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main footer body */}
      <div className="px-6 lg:px-12 pt-16 lg:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand block — 4 cols */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block font-[family-name:var(--font-display)] text-[1.65rem] text-[var(--color-accent-light)] tracking-[0.12em] uppercase mb-5 hover:text-[var(--color-accent)] transition-colors"
            >
              Sankalp
            </Link>
            <p className="text-[0.92rem] text-[var(--color-text-muted)] leading-[1.7] max-w-[320px] mb-8">
              Greater Toronto Area real estate, guided by the families who live
              here. Seven specialties — your home, your legacy.
            </p>

            {/* Contact line */}
            <div className="space-y-2 mb-8">
              <a
                href="tel:+14165550199"
                className="flex items-center gap-3 text-[0.88rem] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors group"
              >
                <span className="text-[var(--color-accent)] text-[0.7rem]">
                  &#9742;
                </span>
                (416) 555-0199
              </a>
              <a
                href="mailto:hello@sankalprealestate.ca"
                className="flex items-center gap-3 text-[0.88rem] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors group"
              >
                <span className="text-[var(--color-accent)] text-[0.7rem]">
                  &#9993;
                </span>
                hello@sankalprealestate.ca
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="px-3.5 py-2 border border-[var(--color-border)] text-[var(--color-text-muted)] text-[0.6rem] tracking-[0.2em] uppercase font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-[2px] transition-all duration-300"
                >
                  {social.short}
                </a>
              ))}
            </div>
          </div>

          {/* Buyers — 2.66 cols */}
          <FooterColumn label="Buyers" links={buyerLinks} />

          {/* Sellers — 2.66 cols */}
          <FooterColumn label="Sellers" links={sellerLinks} />

          {/* Connect — 2.66 cols */}
          <FooterColumn label="Connect" links={connectLinks} />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-divider)] mt-14 lg:mt-20 pt-7 flex flex-col lg:flex-row justify-between gap-4 text-[0.7rem] text-[var(--color-text-muted)] tracking-[0.05em]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              &copy; {new Date().getFullYear()} Sankalp Real Estate. All rights
              reserved.
            </span>
            <Link
              href="/privacy"
              className="hover:text-[var(--color-text)] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--color-text)] transition-colors"
            >
              Terms
            </Link>
          </div>
          <span className="text-[0.65rem] tracking-[0.15em] uppercase">
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
      <div className="text-[0.6rem] tracking-[0.3em] uppercase text-[var(--color-accent)] font-semibold mb-6 flex items-center gap-3">
        <span className="w-6 h-px bg-[var(--color-accent)]" />
        {label}
      </div>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-[0.92rem] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
            >
              {link.label}
              <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--color-accent)] text-[0.7rem]">
                &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
