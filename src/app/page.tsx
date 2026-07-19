import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhatWereTestingNow } from "@/components/home/WhatWereTestingNow";
import { FounderSection } from "@/components/home/FounderSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Newsletter } from "@/components/home/Newsletter";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhatWereTestingNow />
      <FounderSection />
      <HowItWorks />
      <Newsletter />
      <ClosingCta />
    </>
  );
}
