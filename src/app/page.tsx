import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PrinciplesSection } from "@/components/home/PrinciplesSection";
import { FounderSection } from "@/components/home/FounderSection";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <HowItWorks />
      <PrinciplesSection />
      <FounderSection />
      <ClosingCta />
    </>
  );
}
