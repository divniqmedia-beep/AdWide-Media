"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { HeroBlurText } from "@/components/ui/hero-blur-text";
import { HeroInlineRise } from "@/components/ui/hero-inline-media";
import { colorClasses as c } from "@/lib/colors";
import { servicesHero } from "@/lib/site-content";
import { worksImages } from "@/lib/works-media";

const T = 180;

const titleClass =
  "font-display font-bold tracking-[-0.04em] text-[clamp(2.15rem,6.4vw,4.75rem)] leading-[1.08] sm:leading-[1.05]";

export function ServicesHero() {
  return (
    <section className={`relative overflow-hidden ${c.bg.page}`}>
      <div className="mx-auto max-w-[980px] px-4 pb-14 pt-10 text-center sm:px-6 sm:pb-16 sm:pt-14 lg:pt-16">
        <h1 className={titleClass}>
          <span className="flex flex-wrap items-center justify-center whitespace-normal">
            <HeroBlurText
              text={servicesHero.line1Lead}
              startDelay={T * 0}
              className={`justify-center ${c.text.primary}`}
            />
            <HeroInlineRise
              src={worksImages["Nova Retail"]}
              alt="Creative production preview"
              variant="pill"
              width={104}
              height={66}
              delay={(T * 2) / 1000}
            />
            <HeroBlurText
              text={servicesHero.line1Accent}
              startDelay={T * 3}
              className={`justify-center ${c.text.brand}`}
            />
          </span>
          <span className="flex flex-wrap items-center justify-center whitespace-normal">
            <HeroBlurText
              text={servicesHero.line2Muted}
              startDelay={T * 5}
              className={`justify-center ${c.text.muted}`}
            />
            <HeroInlineRise
              src={worksImages["Creator Hub"]}
              alt="Campaign delivery preview"
              variant="pill"
              width={104}
              height={66}
              delay={(T * 7) / 1000}
            />
            <HeroBlurText
              text={servicesHero.line2End}
              startDelay={T * 8}
              className={`justify-center ${c.text.primary}`}
            />
          </span>
        </h1>

        <HeroBlurText
          text={servicesHero.description}
          delay={90}
          stepDuration={0.3}
          blur={10}
          distance={24}
          startDelay={T * 9}
          as="p"
          className={`mx-auto mt-8 max-w-[36rem] justify-center text-center text-[0.9375rem] leading-[1.65] sm:mt-9 sm:text-base ${c.text.muted}`}
        />

        <Reveal variant="fadeUp" delay={0.45} className="mt-8 flex justify-center sm:mt-9">
          <Link
            href={servicesHero.cta.href}
            className="inline-flex h-[3.25rem] min-w-[10.75rem] items-center justify-center gap-2 rounded-full bg-header-cta px-8 text-[0.9375rem] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-200 hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)] active:scale-[0.98]"
          >
            {servicesHero.cta.label}
            <span aria-hidden className="text-[1.05rem] leading-none">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
