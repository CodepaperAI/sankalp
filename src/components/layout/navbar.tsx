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
  const solid = scrolled || mobileOpen;

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
        solid
          ? "bg-[var(--color-bg)]/95 backdrop-blur-xl border-[var(--color-divider)] shadow-[0_8px_32px_-28px_rgba(0,0,0,0.45)]"
          : "bg-[#17231c]/45 backdrop-blur-sm border-white/15"
      }`}
    >
      <Link
        href="/"
        aria-label="Sankalp Real Estate home"
        className={`flex min-h-11 flex-col justify-center transition-colors duration-300 ${
          solid ? "text-[var(--color-accent)]" : "text-white"
        }`}
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
              className={`relative inline-flex min-h-11 items-center px-4 text-[0.72rem] tracking-[0.14em] uppercase font-semibold transition-colors duration-300 after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:origin-left after:transition-transform after:duration-300 ${
                solid
                  ? "text-[var(--color-text-muted)] hover:text-[var(--color-accent)] after:bg-[var(--color-accent)]"
                  : "text-white/75 hover:text-white after:bg-white"
              } ${isActive(link.href) ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex items-center gap-2">
        <Link
          href="/contact"
          className={`inline-flex min-h-11 items-center px-4 text-[0.72rem] tracking-[0.14em] uppercase font-semibold transition-colors duration-300 ${
            solid
              ? "text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
              : "text-white/75 hover:text-white"
          }`}
        >
          Contact
        </Link>
        <Link
          href="/book"
          className={`inline-flex min-h-11 items-center px-5 text-[0.68rem] tracking-[0.16em] uppercase font-semibold border transition-[background-color,color,border-color] duration-300 ${
            solid
              ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-text-inverse)] hover:bg-[var(--color-accent-light)]"
              : "bg-white text-[var(--color-accent)] border-white hover:bg-transparent hover:text-white"
          }`}
        >
          Book a Call
        </Link>
      </div>

      <button
        className="lg:hidden flex min-w-11 min-h-11 flex-col items-center justify-center gap-1.5"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        {[0, 1, 2].map((line) => (
          <span
            key={line}
            className={`block w-6 h-px transition-[transform,opacity,background-color] duration-300 ${
              solid ? "bg-[var(--color-text)]" : "bg-white"
            } ${
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
