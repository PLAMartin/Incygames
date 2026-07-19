"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { trackEvent } from "@/lib/analytics";

export function FounderSection() {
  return (
    <Section tone="primary" ariaLabelledBy="founder-heading">
      <div className="grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-12">
        <div className="lg:col-span-2">
          <Image
            src="/images/phil-martin.png"
            alt="Phil Martin, founder of Incygames"
            width={360}
            height={360}
            style={{ objectPosition: "center top" }}
            className="aspect-square w-full max-w-[280px] rounded-2xl object-cover sm:max-w-[320px]"
          />
        </div>

        <div className="lg:col-span-3">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase">
            Founder-led in Bath
          </p>
          <h2
            id="founder-heading"
            className="text-text-primary mt-3 text-3xl font-bold sm:text-4xl"
          >
            Built from experience. Developed through experimentation.
          </h2>
          <p className="text-text-secondary mt-4 text-lg">
            After more than 30 years working across telecommunications,
            strategy, operations and commercial development, I founded Incygames
            to turn useful ideas into working products. I build small versions,
            share them early and use real feedback to decide what happens next.
          </p>
          <p className="text-text-secondary mt-4 text-base">
            Incygames is currently founder-led and works with specialist
            collaborators and technology partners where required.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <ExternalLink
              href="https://www.philmartin.net/"
              onClick={() =>
                trackEvent("founder_profile_click", {
                  link_destination: "https://www.philmartin.net/",
                  page_path: "/",
                })
              }
            >
              More about Phil
            </ExternalLink>
            <ExternalLink
              href="https://abitgamey.substack.com/"
              onClick={() =>
                trackEvent("founder_profile_click", {
                  link_destination: "https://abitgamey.substack.com/",
                  page_path: "/",
                })
              }
            >
              Read A Bit Gamey
            </ExternalLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
