"use client";

import { Container } from "@/components/ui/Container";
import { GlowText } from "@/components/ui/GlowText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { PRODUCT_SPECS } from "@/lib/constants";
import { Camera } from "lucide-react";

export function ProductSpecs() {
  return (
    <section id="specs" className="py-24">
      <Container>
        <SectionHeading
          title={
            <>
              Product <GlowText>Specifications</GlowText>
            </>
          }
          subtitle="Enterprise-grade dashcam meets Solana mining hardware"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative aspect-square rounded-3xl bg-surface border border-border flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial" />
              <div className="relative text-center">
                <Camera className="w-24 h-24 text-cyan-400/30 mx-auto mb-4" />
                <p className="text-text-secondary text-sm">
                  TINA Dashcam
                </p>
                <p className="text-xs text-text-secondary/60 mt-1">
                  Product image coming soon
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRODUCT_SPECS.map((spec) => (
                <div
                  key={spec.label}
                  className="p-4 rounded-xl bg-surface border border-border"
                >
                  <div className="text-xs text-text-secondary mb-1">
                    {spec.label}
                  </div>
                  <div className="text-sm font-medium text-text-primary">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
