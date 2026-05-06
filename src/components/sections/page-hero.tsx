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
    <section className="relative h-[50vh] min-h-[400px] max-h-[600px] flex items-end overflow-hidden">
      {/* Full-bleed image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2] via-[#faf7f2]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-16 xl:px-24 pb-12 w-full">
        <motion.p
          className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="font-[family-name:var(--font-display)] text-[clamp(1.1rem,2vw,1.5rem)] font-light italic text-[var(--color-accent)] mt-2"
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
