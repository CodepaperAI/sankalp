"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxImage({
  children,
  className = "",
  speed = 0.3,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-[120%] w-full">
        {children}
      </motion.div>
    </div>
  );
}
