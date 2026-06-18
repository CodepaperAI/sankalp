"use client";

import { motion } from "motion/react";
import { MagneticButton } from "@/components/animations";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

const serviceNotes = [
  ["Serving", "Greater Toronto Area"],
  ["Guidance", "Buy, sell, invest"],
  ["Approach", "Personal and informed"],
];

export function Hero() {
  return (
    <section className="relative h-[92svh] min-h-[620px] max-h-[900px] flex items-center overflow-hidden bg-[#17231c]">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.heroLuxuryHome}
          alt="Luxury home in the Greater Toronto Area"
          fill
          className="object-cover object-[62%_center] scale-[1.02]"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(18,31,23,0.96) 0%, rgba(18,31,23,0.82) 34%, rgba(18,31,23,0.28) 65%, rgba(18,31,23,0.08) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101b14]/75 via-transparent to-[#101b14]/25" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 pt-28 pb-32">
        <div className="max-w-[760px]">
          <motion.p
            className="flex items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-white/70 font-semibold mb-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-10 h-px bg-white/45" />
            Greater Toronto Area
          </motion.p>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(3.75rem,8.5vw,8.5rem)] font-light leading-[0.84] text-white mb-8">
            <span className="overflow-hidden block">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Sankalp
              </motion.span>
            </span>
            <span className="overflow-hidden block">
              <motion.span
                className="block italic text-[#b8d3c1]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Real Estate.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="text-white/78 max-w-[520px] leading-[1.7] text-[1rem] lg:text-[1.08rem] mb-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Real estate at the pace of a relationship, not a transaction. From
            first homes in Brampton to estates on the Bridle Path, every search
            starts with where you&apos;re going next.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton
              as="a"
              href="/home-valuation"
              className="inline-flex min-h-12 items-center text-[0.7rem] tracking-[0.16em] uppercase font-semibold px-6 bg-white text-[var(--color-accent)] hover:bg-[#e8efe9] transition-colors duration-300"
            >
              Get Your Home Valuation
            </MagneticButton>
            <Link
              href="/book"
              className="inline-flex min-h-12 items-center text-[0.7rem] tracking-[0.16em] uppercase font-semibold px-6 border border-white/45 text-white hover:bg-white hover:text-[var(--color-accent)] transition-[background-color,color] duration-300"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute z-10 bottom-0 inset-x-0 grid grid-cols-3 border-t border-white/20 bg-[#122017]/45 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        {serviceNotes.map(([label, value]) => (
          <div
            key={label}
            className="min-h-[76px] px-4 lg:px-8 py-4 border-r border-white/15 last:border-r-0"
          >
            <span className="block text-[0.57rem] tracking-[0.18em] uppercase text-white/45 mb-1.5">
              {label}
            </span>
            <span className="block text-[0.68rem] lg:text-[0.78rem] text-white/85">
              {value}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
