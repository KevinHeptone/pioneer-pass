import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { TokenSection } from "@/components/home/TokenSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ProductSpecs } from "@/components/home/ProductSpecs";
import { PreOrderCTA } from "@/components/home/PreOrderCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <TokenSection />
      <HowItWorks />
      <ProductSpecs />
      <PreOrderCTA />
    </>
  );
}
