"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBlurText } from "@/components/ui/hero-blur-text";
import { HeroInlineRise } from "@/components/ui/hero-inline-media";
import { colorClasses as c } from "@/lib/colors";
import { heroFounderAvatars, heroInlineMedia } from "@/lib/hero-media";
import { heroContent } from "@/lib/site-content";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

/** Stagger clock (ms) — word → image → word across the headline. */
const T = 180;

const titleClass =
  "font-display font-bold tracking-[-0.035em] text-[clamp(2.125rem,5.4vw,4.5rem)] leading-[1.1] sm:leading-[1.08]";

export function HeroSection() {
  return (
    <section className="px-4 pb-[4.5rem] pt-2 sm:px-6 sm:pb-24 lg:px-10">
      <div className="mx-auto max-w-[920px]">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-[3.25rem] flex items-center justify-center gap-3 sm:mb-14"
        >
          <div className="flex -space-x-2.5">
            {heroFounderAvatars.map((founder, index) => (
              <Image
                key={founder.src}
                src={founder.src}
                alt={founder.alt}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm"
                priority={index === 0}
              />
            ))}
          </div>
          <HeroBlurText
            text={heroContent.eyebrow}
            delay={120}
            blur={8}
            distance={18}
            startDelay={0}
            className={`justify-center text-center text-[0.9375rem] font-medium leading-none ${c.text.muted}`}
            as="p"
          />
        </motion.div>

        <div className="text-center">
          <h1 className={titleClass}>
            <span className={`flex flex-wrap items-center justify-center whitespace-normal ${c.text.primary}`}>
              <HeroBlurText text="Marketing" startDelay={T * 0} className="justify-center" />
              <HeroInlineRise
                src={heroInlineMedia.phone.src}
                alt={heroInlineMedia.phone.alt}
                variant="phone"
                width={81}
                height={64}
                delay={(T * 1) / 1000}
              />
              <HeroBlurText
                text="that"
                startDelay={T * 2}
                className={`justify-center ${c.text.brand}`}
              />
            </span>
            <span className="flex flex-wrap items-center justify-center whitespace-normal">
              <HeroBlurText
                text="moves"
                startDelay={T * 3}
                className={`justify-center font-normal ${c.text.muted}`}
              />
              <HeroInlineRise
                src={heroInlineMedia.workspace.src}
                alt={heroInlineMedia.workspace.alt}
                variant="circle"
                width={64}
                height={64}
                delay={(T * 4) / 1000}
              />
              <HeroBlurText
                text="you"
                startDelay={T * 5}
                className={`justify-center ${c.text.primary}`}
              />
            </span>
            <span className={`flex flex-wrap items-center justify-center whitespace-normal ${c.text.primary}`}>
              <HeroBlurText text="forward" startDelay={T * 6} className="justify-center" />
              <HeroInlineRise
                src={heroInlineMedia.landmark.src}
                alt={heroInlineMedia.landmark.alt}
                variant="circle"
                width={64}
                height={64}
                delay={(T * 7) / 1000}
              />
            </span>
          </h1>

          <HeroBlurText
            text={heroContent.description}
            delay={90}
            stepDuration={0.3}
            blur={10}
            distance={24}
            startDelay={T * 8}
            as="p"
            className={`mx-auto mt-9 max-w-[38rem] justify-center text-center text-[0.9375rem] leading-[1.65] sm:text-base ${c.text.muted}`}
          />

          <motion.div
            custom={(T * 10) / 1000}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              href={heroContent.primaryCta.href}
              className="inline-flex h-[3.25rem] min-w-[10.75rem] items-center justify-center gap-2 rounded-full bg-header-cta px-8 text-[0.9375rem] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-200 hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)] active:scale-[0.98]"
            >
              {heroContent.primaryCta.label}
              <span aria-hidden className="text-[1.05rem] leading-none">
                →
              </span>
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className={`inline-flex h-[3.25rem] min-w-[10.75rem] items-center justify-center rounded-full border px-8 text-[0.9375rem] font-semibold transition-colors hover:bg-white/60 ${c.border.strong} ${c.text.primary}`}
            >
              {heroContent.secondaryCta.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
