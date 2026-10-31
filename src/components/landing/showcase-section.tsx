"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { showcaseCollageImage } from "@/lib/showcase-media";
import { PartnerLogoStrip } from "./partner-logo-strip";

export function ShowcaseSection() {
  return (
    <section>
      <Reveal
        variant="fadeUp"
        className="showcase-banner relative h-[55vh] min-h-[360px] sm:h-[75vh] sm:min-h-[500px] lg:h-screen lg:min-h-[640px] w-full overflow-hidden bg-[#080808]"
      >
        <Image
          src={showcaseCollageImage.src}
          alt={showcaseCollageImage.alt}
          width={showcaseCollageImage.width}
          height={showcaseCollageImage.height}
          className="h-full w-full object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04),rgba(0,0,0,0.2))]" />
      </Reveal>

      <Reveal variant="fade" className="overflow-hidden rounded-b-[1.75rem] sm:rounded-b-[1.875rem]">
        <PartnerLogoStrip />
      </Reveal>
    </section>
  );
}
