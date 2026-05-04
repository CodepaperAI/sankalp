"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/communities", label: "Communities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/85 backdrop-blur-xl border-b border-[var(--color-divider)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-[family-name:var(--font-display)] text-2xl font-normal tracking-[0.15em] uppercase text-[var(--color-accent-light)]"
      >
        Sankalp
      </Link>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="relative text-[0.8rem] tracking-[0.12em] uppercase font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-[var(--color-accent)] after:transition-[width] after:duration-400 hover:after:w-full"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Phone + CTA */}
      <div className="hidden lg:flex items-center gap-6">
        <a
          href="tel:+14165550199"
          className="text-[0.8rem] tracking-[0.05em] text-[var(--color-text-muted)]"
        >
          <span className="text-[var(--color-accent)] mr-2">&#9742;</span>
          (416) 555-0199
        </a>
        <Link
          href="/book"
          className="text-[0.7rem] tracking-[0.15em] uppercase font-semibold px-5 py-3 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(201,169,110,0.35)] transition-all duration-300"
        >
          Book Consultation
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        <span
          className={`block w-6 h-px bg-[var(--color-text)] transition-transform duration-300 ${
            mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-px bg-[var(--color-text)] transition-opacity duration-300 ${
            mobileOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-px bg-[var(--color-text)] transition-transform duration-300 ${
            mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] bg-[var(--color-bg)]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 lg:hidden">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-[family-name:var(--font-display)] text-3xl font-light text-[var(--color-text)] opacity-0 animate-[fadeInUp_0.4s_ease_forwards]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+14165550199"
            className="mt-4 text-sm text-[var(--color-accent)]"
          >
            (416) 555-0199
          </a>
          <Link
            href="/book"
            onClick={() => setMobileOpen(false)}
            className="text-[0.7rem] tracking-[0.15em] uppercase font-semibold px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)]"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
