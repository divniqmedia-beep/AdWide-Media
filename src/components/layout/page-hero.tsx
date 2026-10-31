"use client";

import { HeroBlurText } from "@/components/ui/hero-blur-text";
import { colorClasses as c } from "@/lib/colors";

type PageHeroProps = {
  tag: string;
  title: string;
  description?: string;
};

export function PageHero({ tag, title, description }: PageHeroProps) {
  return (
    <header className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-8 lg:px-10">
      <HeroBlurText
        text={tag}
        delay={140}
        blur={8}
        distance={20}
        startDelay={0}
        as="p"
        className={`mb-3 justify-start text-sm ${c.text.muted}`}
      />
      <HeroBlurText
        text={title}
        delay={160}
        stepDuration={0.36}
        blur={14}
        distance={40}
        startDelay={200}
        as="h1"
        className={`max-w-4xl justify-start font-display text-[clamp(2.5rem,5.5vw,72px)] lg:text-[72px] lg:leading-[80px] font-normal leading-[1.11] tracking-normal [word-spacing:0.12em] ${c.text.primary}`}
      />
      {description ? (
        <HeroBlurText
          text={description}
          delay={90}
          stepDuration={0.3}
          blur={10}
          distance={24}
          startDelay={520}
          as="p"
          className={`mt-5 max-w-2xl justify-start text-base leading-relaxed sm:text-lg ${c.text.secondary}`}
        />
      ) : null}
    </header>
  );
}
