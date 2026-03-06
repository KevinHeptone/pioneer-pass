"use client";

import { Container } from "@/components/ui/Container";
import { GlowText } from "@/components/ui/GlowText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { TOKEN_ALLOCATIONS } from "@/lib/constants";

function DonutChart() {
  const total = TOKEN_ALLOCATIONS.reduce((sum, a) => sum + a.percentage, 0);
  let cumulative = 0;

  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {TOKEN_ALLOCATIONS.map((alloc) => {
          const start = (cumulative / total) * 100;
          cumulative += alloc.percentage;
          const dashArray = `${(alloc.percentage / total) * Math.PI * 35} ${Math.PI * 35}`;

          return (
            <circle
              key={alloc.label}
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke={alloc.color}
              strokeWidth="12"
              strokeDasharray={dashArray}
              strokeDashoffset={-(start / 100) * Math.PI * 35}
              className="transition-all duration-500"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-text-primary font-mono">TINA</div>
          <div className="text-xs text-text-secondary">Token</div>
        </div>
      </div>
    </div>
  );
}

export function TokenSection() {
  return (
    <section id="token" className="py-24 relative">
      <Container>
        <SectionHeading
          title={
            <>
              <GlowText>TINA</GlowText> Token Economics
            </>
          }
          subtitle="A utility token powering decentralized road mapping on Solana"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <DonutChart />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              {TOKEN_ALLOCATIONS.map((alloc) => (
                <div
                  key={alloc.label}
                  className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: alloc.color }}
                    />
                    <span className="text-text-primary text-sm">
                      {alloc.label}
                    </span>
                  </div>
                  <span className="font-mono text-cyan-400 text-sm">
                    {alloc.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
