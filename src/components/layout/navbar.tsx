"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/sold", label: "Sold" },
  { href: "/communities", label: "Communities" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
    <nav
      aria-label="Primary navigation"
      className={`fixed inset-x-0 top-0 z-50 h-[76px] px-6 lg:px-12 flex items-center justify-between border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || mobileOpen
          ? "bg-[var(--color-bg)]/95 backdrop-blur-xl border-[var(--color-divider)] shadow-[0_8px_32px_-28px_rgba(0,0,0,0.28)]"
          : "bg-[var(--color-bg)]/78 backdrop-blur-xl border-[var(--color-divider)]"
      }`}
    >
      <Link
        href="/"
        aria-label="Sankalp Real Estate home"
        className="flex min-h-11 flex-col justify-center text-[var(--color-accent)] transition-colors duration-300"
      >
        <span className="font-[family-name:var(--font-display)] text-[1.65rem] leading-none font-medium">
          Sankalp
        </span>
        <span className="mt-1 text-[0.57rem] leading-none tracking-[0.22em] uppercase opacity-75">
          Real Estate
        </span>
      </Link>

      <ul className="hidden lg:flex items-center gap-2 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative inline-flex min-h-11 items-center px-4 text-[0.72rem] tracking-[0.14em] uppercase font-semibold text-[var(--color-text-muted)] transition-colors duration-300 after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:origin-left after:bg-[var(--color-accent)] after:transition-transform after:duration-300 hover:text-[var(--color-accent)] ${
                isActive(link.href) ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex items-center gap-2">
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center px-4 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)] transition-colors duration-300 hover:text-[var(--color-accent)]"
        >
          Contact
        </Link>
        <Link
          href="/book"
          className="inline-flex min-h-11 items-center border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-inverse)] transition-[background-color,color,border-color] duration-300 hover:bg-[var(--color-accent-light)]"
        >
          Book a Call
        </Link>
      </div>

      <button
        className="mobile-menu-button fixed right-6 top-4 z-[60] min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 border border-[var(--color-accent)] bg-[var(--color-surface-raised)] shadow-[0_10px_28px_-22px_rgba(31,31,31,0.7)]"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        {[0, 1, 2].map((line) => (
          <span
            key={line}
            className={`block h-[1.5px] w-6 bg-[var(--color-accent)] transition-[transform,opacity,background-color] duration-300 ${
              mobileOpen && line === 0
                ? "rotate-45 translate-y-[3.5px]"
                : mobileOpen && line === 1
                  ? "opacity-0"
                  : mobileOpen && line === 2
                    ? "-rotate-45 -translate-y-[3.5px]"
                    : ""
            }`}
          />
        ))}
      </button>
    </nav>

      {mobileOpen && (
        <div className="fixed inset-0 top-[76px] z-40 flex flex-col bg-[var(--color-bg)] px-6 py-10 lg:hidden">
          <p className="text-[0.68rem] tracking-[0.18em] uppercase text-[var(--color-text-soft)] mb-8">
            Explore
          </p>
          {[...navLinks, { href: "/contact", label: "Contact" }].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`flex min-h-16 items-center justify-between border-t border-[var(--color-divider)] font-[family-name:var(--font-display)] text-[2rem] font-light opacity-0 animate-[fadeInUp_0.4s_ease_forwards] last:border-b ${
                isActive(link.href) ? "text-[var(--color-accent)]" : "text-[var(--color-text)]"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {link.label}
              <span className="font-[family-name:var(--font-body)] text-sm opacity-40">
                0{i + 1}
              </span>
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setMobileOpen(false)}
            className="mt-auto inline-flex min-h-12 items-center justify-center text-[0.7rem] tracking-[0.16em] uppercase font-semibold px-8 bg-[var(--color-accent)] text-[var(--color-text-inverse)]"
          >
            Book a Call
          </Link>
        </div>
      )}
    </>
  );
}
