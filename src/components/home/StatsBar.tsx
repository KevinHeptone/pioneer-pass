"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <section className="py-16 border-y border-border bg-surface/50">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.value < 1 ? 3 : stat.value < 10 ? 1 : 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
