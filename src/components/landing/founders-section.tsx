"use client";

import Image from "next/image";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { colorClasses as c } from "@/lib/colors";
import { aboutSection, founders } from "@/lib/site-content";

type Founder = (typeof founders)[number];
type SocialIcon = Founder["socials"][number]["icon"];

function SocialGlyph({ icon }: { icon: SocialIcon }) {
  if (icon === "x") {
    return (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    );
  }

  if (icon === "globe") {
    return (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.8 3 4.2 6 4.2 9s-1.4 6-4.2 9c-2.8-3-4.2-6-4.2-9s1.4-6 4.2-9z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AwardSeal({ text, sealId }: { text: string; sealId: string }) {
  const pathId = `${sealId}-path`;

  return (
    <div className="relative size-[88px] sm:size-[104px]" aria-hidden>
      <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full bg-[#5c5c5c]/92 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/10">
        <svg viewBox="0 0 100 100" className="size-full overflow-visible">
          <defs>
            <path
              id={pathId}
              d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"
            />
          </defs>
          <text className="fill-white text-[9.2px] font-medium uppercase tracking-[0.18em]">
            <textPath href={`#${pathId}`} startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-9 items-center justify-center rounded-full bg-[#5c5c5c] sm:size-10">
          <svg viewBox="0 0 24 24" className="size-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 18V6l8 6 8-6v12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FounderBlock({ founder, index }: { founder: Founder; index: number }) {
  const imageFromLeft = index % 2 === 0;

  return (
    <div className={`relative ${index > 0 ? "mt-24 sm:mt-32" : ""}`}>
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <Reveal
          variant={imageFromLeft ? "fadeLeft" : "fadeRight"}
          className={`relative mx-auto w-full max-w-[460px] lg:mx-0 lg:max-w-none ${
            index % 2 === 1 ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-[#1a1a1a] shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:rounded-[2rem]">
            <Image
              src={founder.image}
              alt={founder.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 460px"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-linear-to-tr from-black/25 via-transparent to-[color-mix(in_srgb,var(--brand-primary)_35%,transparent)]" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
              <div className="flex items-center gap-2.5">
                {founder.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex size-10 items-center justify-center rounded-full bg-[#3a3a3a]/88 text-white backdrop-blur-sm transition hover:bg-[#2a2a2a] sm:size-11"
                  >
                    <SocialGlyph icon={social.icon} />
                  </a>
                ))}
              </div>
              <AwardSeal text={founder.seal} sealId={`seal-${founder.firstName.toLowerCase()}`} />
            </div>
          </div>
        </Reveal>

        <Stagger
          className={`lg:pt-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
          stagger={0.08}
        >
          <RevealItem>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm ${c.text.brand}`}
            >
              {founder.heading}
            </p>
          </RevealItem>
          <RevealItem>
            <h2
              className={`mt-3 font-display text-[clamp(2.5rem,5.5vw,72px)] lg:text-[72px] lg:leading-[80px] font-normal leading-[1.11] tracking-normal [word-spacing:0.12em] ${c.text.primary}`}
            >
              {founder.name.split(" ").length > 1 ? (
                <>
                  <span>{founder.name.split(" ").slice(0, -1).join(" ")}</span>{" "}
                  <span className={c.text.brand}>{founder.name.split(" ").at(-1)}</span>
                </>
              ) : (
                <span className={c.text.brand}>{founder.name}</span>
              )}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className={`mt-6 max-w-xl text-[0.95rem] leading-relaxed sm:mt-7 sm:text-base ${c.text.secondary}`}>
              {founder.bio}
            </p>
          </RevealItem>
          <RevealItem>
            <div className={`mt-8 border-t sm:mt-10 ${c.border.default}`}>
              <ul>
                {founder.experience.map((item) => (
                  <li
                    key={`${item.role}-${item.period}`}
                    className={`flex items-baseline justify-between gap-6 border-b py-4 text-sm sm:py-5 sm:text-[0.95rem] ${c.border.default}`}
                  >
                    <span className={`font-medium ${c.text.primary}`}>{item.role}</span>
                    <span className={`shrink-0 tabular-nums ${c.text.muted}`}>{item.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        </Stagger>
      </div>
    </div>
  );
}

type FoundersSectionProps = {
  showIntro?: boolean;
  sectionId?: string;
};

export function FoundersSection({
  showIntro = true,
  sectionId = "about",
}: FoundersSectionProps) {
  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 ${c.bg.page}`}
    >
      {showIntro ? (
        <SectionHeading
          title="Built for Indian brand"
          accent="growth"
          description={aboutSection}
          className="relative z-10 mb-16 sm:mb-20"
        />
      ) : (
        <SectionHeading
          title="Meet the"
          accent="founders"
          className="relative z-10 mb-16 sm:mb-20"
        />
      )}

      {founders.map((founder, index) => (
        <FounderBlock key={founder.name} founder={founder} index={index} />
      ))}
    </section>
  );
}
