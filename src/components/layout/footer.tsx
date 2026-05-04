import Link from "next/link";

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
  { href: "/sell/staging", label: "Staging Guide" },
];

const connectLinks = [
  { href: "/about", label: "About Sankalp" },
  { href: "/communities", label: "Communities" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
  { href: "/refer", label: "Refer a Friend" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-divider)] px-6 lg:px-12 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div>
          <div className="font-[family-name:var(--font-display)] text-xl text-[var(--color-accent-light)] tracking-[0.1em] uppercase mb-4">
            Sankalp
          </div>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-[280px] mb-6">
            Luxury real estate across the Greater Toronto Area. Seven
            specialties, one commitment — your home, your legacy.
          </p>
          <div className="flex gap-3">
            {["IG", "LI", "WA", "YT"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-9 h-9 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] text-[0.65rem] font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
                aria-label={platform}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Buyers */}
        <div>
          <div className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-semibold mb-5">
            Buyers
          </div>
          {buyerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-[var(--color-text-muted)] mb-3 hover:text-[var(--color-text)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Sellers */}
        <div>
          <div className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-semibold mb-5">
            Sellers
          </div>
          {sellerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-[var(--color-text-muted)] mb-3 hover:text-[var(--color-text)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Connect */}
        <div>
          <div className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-semibold mb-5">
            Connect
          </div>
          {connectLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-[var(--color-text-muted)] mb-3 hover:text-[var(--color-text)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-divider)] mt-12 pt-6 flex flex-col sm:flex-row justify-between text-[0.7rem] text-[var(--color-text-muted)] tracking-[0.05em]">
        <span>&copy; {new Date().getFullYear()} Sankalp Real Estate. All rights reserved.</span>
        <span className="mt-2 sm:mt-0">
          Brokerage: [Brokerage Name] &middot; RECO Registered
        </span>
      </div>
    </footer>
  );
}
