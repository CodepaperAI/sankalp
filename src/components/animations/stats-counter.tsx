"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";

interface StatsCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  labelClassName?: string;
  label: string;
}

export function StatsCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
  className = "",
  labelClassName = "",
  label,
}: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-center relative">
      <div className={className}>
        {prefix}
        {count}
        {suffix}
      </div>
      <div className={labelClassName}>{label}</div>
    </div>
  );
}
