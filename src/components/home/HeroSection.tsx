"use client";

import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { ParticleField } from "@/components/effects/ParticleField";
import { DASHCAM_PRICE_SOL } from "@/lib/constants";
import { motion } from "framer-motion";
import { Shield, Cpu, Wifi } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  { icon: Cpu, label: "Solana Mining" },
  { icon: Shield, label: "4K Recording" },
  { icon: Wifi, label: "Real-time Upload" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />
      <GlowOrb className="w-[600px] h-[600px] top-1/4 left-1/2 -translate-x-1/2" color="cyan" />
      <GlowOrb className="w-[400px] h-[400px] bottom-1/4 right-1/4" color="teal" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-6">
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6"
            >
              <span className="block">Drive the Road.</span>
              <span className="block mt-1">Map the World.</span>
              <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
                Earn TINA.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-text-secondary max-w-lg mb-8 leading-relaxed"
            >
              The first dashcam that mines Solana tokens while you drive.
              Capture road data, power decentralized mapping, and get
              rewarded for every kilometer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Link href="/order">
                <Button size="lg" className="w-full sm:w-auto">
                  Pre-Order for {DASHCAM_PRICE_SOL} SOL
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  How It Works
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-6"
            >
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-text-secondary">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full border border-teal-500/10" />

              {/* Center product */}
              <div className="absolute inset-8 rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden">
                <div className="relative flex flex-col items-center">
                  <Image
                    src="/tina-icon-256.png"
                    alt="TINA"
                    width={80}
                    height={80}
                    className="mb-3 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  />
                  <span className="text-lg font-bold text-text-primary tracking-wider">
                    TINA
                  </span>
                  <span className="text-[10px] text-text-secondary tracking-[0.3em] uppercase mt-0.5">
                    Pioneer Edition
                  </span>
                </div>
              </div>

              {/* Floating data badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 right-8 bg-surface/90 backdrop-blur border border-border rounded-xl px-3 py-2"
              >
                <div className="text-[10px] text-text-secondary">Mining Rate</div>
                <div className="text-sm font-mono text-cyan-400 font-bold">~12 TINA/day</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 -left-4 bg-surface/90 backdrop-blur border border-border rounded-xl px-3 py-2"
              >
                <div className="text-[10px] text-text-secondary">Resolution</div>
                <div className="text-sm font-mono text-teal-400 font-bold">4K UHD</div>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 -right-6 bg-surface/90 backdrop-blur border border-border rounded-xl px-3 py-2"
              >
                <div className="text-[10px] text-text-secondary">Network</div>
                <div className="text-sm font-mono text-cyan-400 font-bold">Solana</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
