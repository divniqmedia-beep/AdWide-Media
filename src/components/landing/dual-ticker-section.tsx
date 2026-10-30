"use client";

import { Reveal } from "@/components/motion/reveal";
import { colorClasses as c } from "@/lib/colors";
import { credRibbonItems, serviceRibbonItems } from "@/lib/site-content";

function TickerSeparator() {
  return (
    <span className="mx-6 inline-flex shrink-0 sm:mx-10 md:mx-12" aria-hidden>
      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="opacity-95">
        <path
          d="M7 1.5 8.2 5.8 12.5 7 8.2 8.2 7 12.5 5.8 8.2 1.5 7 5.8 5.8 7 1.5Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

type RibbonProps = {
  items: readonly string[];
  className: string;
  trackClassName: string;
};

/** Repeat labels so each loop half is wider than any viewport; duplicate halves for -50% animation. */
function buildRibbonLabels(items: readonly string[], repeat: number) {
  return Array.from({ length: repeat }, () => items).flat();
}

function RibbonLabelGroup({ labels }: { labels: string[] }) {
  return (
    <>
      {labels.map((label, index) => (
        <span key={`${label}-${index}`} className="inline-flex items-center">
          <span className="text-base font-semibold tracking-[-0.01em] sm:text-lg md:text-xl">
            {label}
          </span>
          <TickerSeparator />
        </span>
      ))}
    </>
  );
}

function RibbonMarquee({ items, className, trackClassName }: RibbonProps) {
  const labels = buildRibbonLabels(items, 6);

  return (
    <div className={`overflow-hidden py-4 sm:py-5 md:py-6 ${className}`}>
      <div className={`flex w-max will-change-transform ${trackClassName}`}>
        <div className="flex shrink-0 items-center whitespace-nowrap">
          <RibbonLabelGroup labels={labels} />
        </div>
        <div className="flex shrink-0 items-center whitespace-nowrap" aria-hidden>
          <RibbonLabelGroup labels={labels} />
        </div>
      </div>
    </div>
  );
}

const STRIP_WIDTH = "min-w-[200vw] w-[200vw]";

export function DualTickerSection() {
  return (
    <section className={`relative overflow-hidden py-16 sm:py-20 ${c.bg.page}`}>
      <Reveal variant="scaleIn" className="relative mx-auto h-[9rem] max-w-[100vw] sm:h-[10rem] md:h-[11rem]">
        <div
          className={`pointer-events-none absolute left-1/2 top-[58%] z-10 ${STRIP_WIDTH} max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[5deg]`}
        >
          <RibbonMarquee
            items={credRibbonItems}
            className="bg-[#0a0a0a] text-white shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
            trackClassName="marquee-track-reverse-slow"
          />
        </div>

        <div
          className={`pointer-events-none absolute left-1/2 top-[42%] z-20 ${STRIP_WIDTH} max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-[5deg]`}
        >
          <RibbonMarquee
            items={serviceRibbonItems}
            className={`${c.bg.brand} ${c.text.onBrand} shadow-[0_12px_40px_rgba(255,92,0,0.28)]`}
            trackClassName="marquee-track-rtl-slow"
          />
        </div>
      </Reveal>
    </section>
  );
}
