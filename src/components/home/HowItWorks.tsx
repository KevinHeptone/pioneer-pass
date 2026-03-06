"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { GlowText } from "@/components/ui/GlowText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { Car, Map, Coins } from "lucide-react";

const iconMap = {
  Car,
  Map,
  Coins,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-surface/30">
      <Container>
        <SectionHeading
          title={
            <>
              How It <GlowText>Works</GlowText>
            </>
          }
          subtitle="Three simple steps to start earning TINA tokens"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <ScrollReveal key={step.step} delay={i * 0.15}>
                <Card className="text-center h-full hover:border-cyan-500/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="text-xs font-mono text-cyan-400 mb-2">
                    STEP {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
