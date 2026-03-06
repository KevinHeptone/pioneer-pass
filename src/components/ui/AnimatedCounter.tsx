"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  const { ref, inView } = useInView(0.3);
  const count = useCountUp(value, 2000, inView);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold font-mono text-cyan-400">
        {prefix}
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
        {suffix}
      </div>
      <div className="text-text-secondary text-sm mt-1">{label}</div>
    </div>
  );
}
