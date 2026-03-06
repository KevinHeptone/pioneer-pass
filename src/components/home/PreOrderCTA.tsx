"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlowText } from "@/components/ui/GlowText";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { DASHCAM_PRICE_SOL, DASHCAM_PRICE_USD } from "@/lib/constants";
import Link from "next/link";

export function PreOrderCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <GlowOrb className="w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Ready to <GlowText>Mine the Road</GlowText>?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Join thousands of drivers already pre-ordering the TINA dashcam.
              Pay with SOL on Solana.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-4xl font-bold font-mono text-cyan-400">
                {DASHCAM_PRICE_SOL} SOL
              </div>
              <div className="text-text-secondary">
                ~${DASHCAM_PRICE_USD} USD
              </div>
            </div>

            <Link href="/order">
              <Button size="lg" className="text-base px-12">
                Pre-Order Now
              </Button>
            </Link>

            <p className="text-xs text-text-secondary mt-4">
              Estimated shipping Q3 2026. Full refund if delayed.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
