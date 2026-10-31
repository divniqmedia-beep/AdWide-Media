"use client";

import Link from "next/link";
import { PartnerLogoStrip } from "@/components/landing/partner-logo-strip";
import { Reveal } from "@/components/motion/reveal";
import { HeroBlurText } from "@/components/ui/hero-blur-text";
import { HeroInlineRise } from "@/components/ui/hero-inline-media";
import { colorClasses as c } from "@/lib/colors";
import { heroInlineMedia } from "@/lib/hero-media";
import { aboutHero } from "@/lib/site-content";

const T = 180;

const titleClass =
  "font-display font-normal tracking-normal [word-spacing:0.12em] text-[clamp(2.5rem,5.5vw,72px)] lg:text-[72px] lg:leading-[80px] leading-[1.11]";

export function AboutHero() {
  return (
    <section className={`relative overflow-hidden ${c.bg.page}`}>
      <div className="mx-auto max-w-[980px] px-4 pb-6 pt-10 text-center sm:px-6 sm:pt-14 lg:pt-16">
        <h1 className={`${titleClass} flex flex-col items-center gap-1 sm:gap-1.5 lg:gap-2`}>
          <span className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 lg:gap-[18px] whitespace-normal">
            <HeroBlurText
              text={aboutHero.line1Lead}
              startDelay={T * 0}
              className={`justify-center ${c.text.primary}`}
            />
            <HeroInlineRise
              src={heroInlineMedia.landmark.src}
              alt={heroInlineMedia.landmark.alt}
              variant="circle"
              width={68}
              height={68}
              delay={(T * 2) / 1000}
              className="mx-0"
            />
            <HeroBlurText
              text={aboutHero.line1Accent}
              startDelay={T * 3}
              className={`justify-center ${c.text.brand}`}
            />
          </span>
          <span className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 lg:gap-[18px] whitespace-normal">
            <HeroBlurText
              text={aboutHero.line2Muted}
              startDelay={T * 5}
              className={`justify-center ${c.text.muted}`}
            />
            <HeroInlineRise
              src={heroInlineMedia.workspace.src}
              alt={heroInlineMedia.workspace.alt}
              variant="circle"
              width={68}
              height={68}
              delay={(T * 7) / 1000}
              className="mx-0"
            />
            <HeroBlurText
              text={aboutHero.line2End}
              startDelay={T * 8}
              className={`justify-center ${c.text.primary}`}
            />
          </span>
        </h1>

        <HeroBlurText
          text={aboutHero.description}
          delay={90}
          stepDuration={0.3}
          blur={10}
          distance={24}
          startDelay={T * 9}
          as="p"
          className={`mx-auto mt-8 max-w-[34rem] justify-center text-center text-[0.9375rem] leading-[1.65] sm:mt-9 sm:text-base ${c.text.muted}`}
        />

        <Reveal variant="fadeUp" delay={0.45} className="mt-8 flex justify-center sm:mt-9">
          <Link
            href={aboutHero.cta.href}
            className="inline-flex h-[3.25rem] min-w-[10.75rem] items-center justify-center gap-2 rounded-full bg-header-cta px-8 text-[0.9375rem] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-200 hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)] active:scale-[0.98]"
          >
            {aboutHero.cta.label}
            <span aria-hidden className="text-[1.05rem] leading-none">
              →
            </span>
          </Link>
        </Reveal>
      </div>

      <Reveal variant="fade">
        <PartnerLogoStrip />
      </Reveal>
    </section>
  );
}
