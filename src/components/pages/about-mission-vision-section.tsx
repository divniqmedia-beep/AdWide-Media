"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { colorClasses as c } from "@/lib/colors";
import { mission, vision } from "@/lib/site-content";

const MUTED_RGB = [184, 184, 184] as const;
const ACTIVE_RGB = [17, 17, 17] as const;
const BRAND_RGB = [255, 92, 0] as const;

function lerpChannel(from: number, to: number, t: number) {
  return Math.round(from + (to - from) * t);
}

function lerpRgb(
  from: readonly [number, number, number],
  to: readonly [number, number, number],
  t: number,
) {
  const clamped = Math.min(Math.max(t, 0), 1);
  return `rgb(${lerpChannel(from[0], to[0], clamped)}, ${lerpChannel(from[1], to[1], clamped)}, ${lerpChannel(from[2], to[2], clamped)})`;
}

function ScrollWord({
  word,
  index,
  total,
  progress,
  range,
  accent,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  range: [number, number];
  accent?: boolean;
}) {
  const span = range[1] - range[0];
  const start = range[0] + (index / total) * span * 0.85;
  const end = Math.min(range[0] + ((index + 1) / total) * span * 0.85 + span * 0.12, range[1]);
  const active = accent ? BRAND_RGB : ACTIVE_RGB;

  const color = useTransform(progress, (value) => {
    const t = (value - start) / (end - start);
    return lerpRgb(MUTED_RGB, active, t);
  });

  return (
    <motion.span style={{ color }} className="inline">
      {word}{" "}
    </motion.span>
  );
}

function StatementBlock({
  eyebrow,
  text,
  progress,
  range,
  accentEyebrow,
}: {
  eyebrow: string;
  text: string;
  progress: MotionValue<number>;
  range: [number, number];
  accentEyebrow?: boolean;
}) {
  const words = text.split(/\s+/);

  return (
    <div className="mx-auto max-w-4xl text-center">
      <p
        className={`mb-8 font-serif text-lg italic sm:mb-10 sm:text-xl ${
          accentEyebrow ? c.text.brand : c.text.muted
        }`}
      >
        {eyebrow}
      </p>
      <p className="text-[clamp(1.65rem,4vw,2.75rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
        {words.map((word, index) => (
          <ScrollWord
            key={`${eyebrow}-${word}-${index}`}
            word={word}
            index={index}
            total={words.length}
            progress={progress}
            range={range}
            accent={accentEyebrow}
          />
        ))}
      </p>
    </div>
  );
}

export function AboutMissionVisionSection() {
  const scrollTrackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end end"],
  });

  const missionOpacity = useTransform(scrollYProgress, [0, 0.12, 0.42, 0.52], [1, 1, 1, 0]);
  const missionY = useTransform(scrollYProgress, [0.4, 0.55], [0, -36]);
  const visionOpacity = useTransform(scrollYProgress, [0.45, 0.55, 1], [0, 1, 1]);
  const visionY = useTransform(scrollYProgress, [0.45, 0.58], [40, 0]);

  return (
    <section ref={scrollTrackRef} className={`relative min-h-[220vh] ${c.bg.page}`}>
      <div className="sticky top-0 flex min-h-[100vh] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-10">
        <motion.div style={{ opacity: missionOpacity, y: missionY }} className="absolute inset-x-0 flex justify-center px-4">
          <StatementBlock
            eyebrow="(Mission)"
            text={mission}
            progress={scrollYProgress}
            range={[0, 0.48]}
          />
        </motion.div>

        <motion.div style={{ opacity: visionOpacity, y: visionY }} className="absolute inset-x-0 flex justify-center px-4">
          <StatementBlock
            eyebrow="(Vision)"
            text={vision}
            progress={scrollYProgress}
            range={[0.5, 1]}
            accentEyebrow
          />
        </motion.div>
      </div>
    </section>
  );
}
