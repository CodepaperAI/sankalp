"use client";

import { motion } from "motion/react";
import { MagneticButton } from "@/components/animations";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] relative overflow-hidden">
      {/* Content Side */}
      <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-32 pb-16 lg:pt-0 lg:pb-0 relative z-10">
        <motion.p
          className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Greater Toronto Area&nbsp;&middot;&nbsp;Luxury Real Estate
        </motion.p>

        <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,6vw,6rem)] font-light leading-[1.05] mb-6">
          <span className="overflow-hidden block">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Your Home.
            </motion.span>
          </span>
          <span className="overflow-hidden block">
            <motion.span
              className="block italic text-[var(--color-accent-light)]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Your Legacy.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="text-[var(--color-text-muted)] max-w-[440px] leading-[1.7] text-[1.05rem] mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Trusted by families across the GTA to find not just a property — but
          the place where their story continues. Seven specialties. One
          commitment.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton as="a" href="/home-valuation" className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:shadow-[0_8px_24px_rgba(184,150,12,0.2)] transition-shadow duration-300">
            Get Your Home Valuation
          </MagneticButton>
          <Link
            href="/book"
            className="inline-block text-[0.75rem] tracking-[0.15em] uppercase font-semibold px-7 py-4 border border-[var(--color-border-strong)] text-[var(--color-accent-light)] hover:bg-[rgba(184,150,12,0.05)] hover:border-[var(--color-accent)] transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>

      {/* Image Side */}
      <motion.div
        className="hidden lg:block relative overflow-hidden"
        initial={{ clipPath: "inset(0 0 0 100%)" }}
        animate={{ clipPath: "inset(0 0 0 0%)" }}
        transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={images.heroLuxuryHome}
          alt="Luxury home in the Greater Toronto Area"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 0vw, 42vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--color-bg)] opacity-15" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">Scroll</span>
        <motion.div
          className="w-px h-8 bg-[var(--color-accent-dim)]"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
