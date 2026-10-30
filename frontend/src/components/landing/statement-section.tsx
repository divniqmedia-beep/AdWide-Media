"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { colorClasses as c } from "@/lib/colors";
import {
  statementCapabilityPills,
  statementEyebrow,
  statementHeadline,
} from "@/lib/site-content";

const MUTED_RGB = [184, 184, 184] as const;
const ACTIVE_RGB = [17, 17, 17] as const;

function lerpColor(t: number) {
  const clamped = Math.min(Math.max(t, 0), 1);
  const r = Math.round(MUTED_RGB[0] + (ACTIVE_RGB[0] - MUTED_RGB[0]) * clamped);
  const g = Math.round(MUTED_RGB[1] + (ACTIVE_RGB[1] - MUTED_RGB[1]) * clamped);
  const b = Math.round(MUTED_RGB[2] + (ACTIVE_RGB[2] - MUTED_RGB[2]) * clamped);
  return `rgb(${r}, ${g}, ${b})`;
}

function PillIcon({ type }: { type: (typeof statementCapabilityPills)[number]["icon"] }) {
  const stroke = "currentColor";
  const common = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none" as const };

  switch (type) {
    case "star":
      return (
        <svg {...common} aria-hidden>
          <path
            d="M12 3.5 14.6 9l6 .5-4.5 3.8 1.4 5.9L12 16.8 6.5 19.2 7.9 13.3 3.4 9.5l6-.5L12 3.5Z"
            stroke={stroke}
            strokeWidth="1.6"
          />
        </svg>
      );
    case "globe":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="8.5" stroke={stroke} strokeWidth="1.6" />
          <path d="M3.5 12h17M12 3.5c2.5 2.8 2.5 14.2 0 17M12 3.5c-2.5 2.8-2.5 14.2 0 17" stroke={stroke} strokeWidth="1.6" />
        </svg>
      );
    case "users":
      return (
        <svg {...common} aria-hidden>
          <circle cx="9" cy="9" r="3.2" stroke={stroke} strokeWidth="1.6" />
          <circle cx="16.5" cy="10" r="2.6" stroke={stroke} strokeWidth="1.6" />
          <path d="M4 18.5c.8-2.8 3-4.5 5-4.5s4.2 1.7 5 4.5M13.5 18.5c.5-2 2-3.2 3.5-3.2" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common} aria-hidden>
          <rect x="4" y="4" width="7" height="7" rx="1.5" stroke={stroke} strokeWidth="1.6" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" stroke={stroke} strokeWidth="1.6" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" stroke={stroke} strokeWidth="1.6" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" stroke={stroke} strokeWidth="1.6" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="8.5" stroke={stroke} strokeWidth="1.6" />
          <path d="M14.8 9.2 13 13l-3.8 1.8 1.8-3.8 3.8-1.8Z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
  }
}

function ScrollWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = (index / total) * 0.82;
  const end = Math.min(((index + 1) / total) * 0.82 + 0.12, 1);

  const color = useTransform(progress, (value) => {
    const t = (value - start) / (end - start);
    return lerpColor(t);
  });

  return (
    <motion.span style={{ color }} className="inline">
      {word}{" "}
    </motion.span>
  );
}

export function StatementSection() {
  const scrollTrackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end end"],
  });

  const words = statementHeadline.split(/\s+/);
  const pillRows = [
    statementCapabilityPills.slice(0, 3),
    statementCapabilityPills.slice(3, 6),
  ];

  return (
    <section
      ref={scrollTrackRef}
      className={`relative min-h-[175vh] ${c.bg.page}`}
    >
      <div className="sticky top-0 flex min-h-[100vh] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-[clamp(1.65rem,4vw,2.75rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
            {words.map((word, index) => (
              <ScrollWord
                key={`${word}-${index}`}
                word={word}
                index={index}
                total={words.length}
                progress={scrollYProgress}
              />
            ))}
          </p>

          <div className="mt-14 flex w-full flex-col items-center gap-3 sm:mt-16">
            {pillRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {row.map((pill) => (
                  <span
                    key={pill.label}
                    className="inline-flex items-center gap-2 rounded-full bg-[#2b2b2b] px-5 py-2.5 text-sm font-medium text-white"
                  >
                    <PillIcon type={pill.icon} />
                    {pill.label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
