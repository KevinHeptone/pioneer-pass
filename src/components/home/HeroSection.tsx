"use client";

import { Button } from "@/components/ui/Button";
import { GlowText } from "@/components/ui/GlowText";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { ParticleField } from "@/components/effects/ParticleField";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />
      <GlowOrb className="w-[600px] h-[600px] top-1/4 left-1/2 -translate-x-1/2" color="cyan" />
      <GlowOrb className="w-[400px] h-[400px] bottom-1/4 right-1/4" color="teal" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-text-secondary">
              INAVI x Hepton Collaboration
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-6"
        >
          Drive. Map.{" "}
          <GlowText className="glow-text-cyan">Earn.</GlowText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          The TINA dashcam mines Solana tokens while you drive. Capture road
          data, contribute to decentralized mapping, and earn TINA rewards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/order">
            <Button size="lg">Pre-Order Now</Button>
          </Link>
          <a href="#how-it-works">
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
