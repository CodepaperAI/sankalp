"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
}

export function PageHero({ eyebrow, title, subtitle, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className="relative h-[64vh] min-h-[500px] max-h-[720px] flex items-end overflow-hidden bg-[#17231c]">
      {/* Full-bleed image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover scale-[1.02]"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(15,27,19,0.82) 0%, rgba(15,27,19,0.30) 48%, rgba(15,27,19,0.12) 78%, rgba(15,27,19,0.22) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 px-6 lg:px-16 xl:px-24 pb-12 lg:pb-16 w-full border-b border-white/15">
        <motion.p
          className="text-[0.68rem] tracking-[0.2em] uppercase text-white/75 font-semibold mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-3">
            <span className="w-10 h-px bg-white/45" />
            {eyebrow}
          </span>
        </motion.p>
        <motion.h1
          className="font-[family-name:var(--font-display)] text-[clamp(3rem,6vw,5.75rem)] font-light leading-[0.95] text-white max-w-[920px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="text-[0.98rem] lg:text-[1.08rem] leading-[1.65] text-white/75 mt-5 max-w-[620px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
