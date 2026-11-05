"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Reveal, RevealItem, Stagger, revealEase } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { colorClasses as c } from "@/lib/colors";
import { mission, vision } from "@/lib/site-content";

type Statement = {
  index: string;
  label: string;
  body: string;
  accent: boolean;
};

const statements: Statement[] = [
  {
    index: "01",
    label: "Mission",
    body: mission,
    accent: false,
  },
  {
    index: "02",
    label: "Vision",
    body: vision,
    accent: true,
  },
];

function AmbientGlow({ progress }: { progress: MotionValue<number> }) {
  const x = useTransform(progress, [0, 1], ["18%", "72%"]);
  const opacity = useTransform(progress, [0, 0.35, 0.7, 1], [0.35, 0.55, 0.45, 0.3]);

  return (
    <motion.div
      aria-hidden
      style={{ left: x, opacity }}
      className="pointer-events-none absolute top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,92,0,0.28)_0%,rgba(255,92,0,0.08)_42%,transparent_70%)] blur-2xl"
    />
  );
}

function StatementColumn({
  statement,
  index,
}: {
  statement: Statement;
  index: number;
}) {
  return (
    <RevealItem
      variant="fadeUp"
      className={`relative flex flex-col ${
        index === 0 ? "lg:pr-10 xl:pr-14" : "lg:pl-10 xl:pl-14"
      }`}
    >
      <div className="mb-6 flex items-baseline gap-4 sm:mb-8">
        <span
          className={`text-sm font-medium uppercase tracking-[0.22em] ${
            statement.accent ? c.text.brand : "text-white/55"
          }`}
        >
          {statement.label}
        </span>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.75, delay: 0.15 + index * 0.12, ease: revealEase }}
        style={{ originX: 0 }}
        className={`mb-7 h-px w-16 sm:mb-8 ${
          statement.accent ? "bg-brand-primary" : "bg-white/30"
        }`}
      />

      <p className="max-w-md text-[1.05rem] leading-[1.7] text-white/78 sm:text-lg sm:leading-[1.75]">
        {statement.body}
      </p>
    </RevealItem>
  );
}

export function AboutMissionVisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${c.bg.inverse} ${c.text.inverse}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_-10%,rgba(255,92,0,0.16),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_28%,transparent_72%,rgba(0,0,0,0.35)_100%)]"
      />
      <AmbientGlow progress={scrollYProgress} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        <Reveal variant="fadeUp" className="mb-14 sm:mb-16 lg:mb-20">
          <SectionHeading
            title="Purpose that"
            accent="scales"
            tone="dark"
            animate={false}
            // description="Creative that looks premium. Strategy that moves the numbers. One north star for every brand we build."
            className="max-w-3xl"
          />
        </Reveal>

        <motion.div style={{ y: gridY }} className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-2 left-1/2 hidden w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/20 to-transparent lg:block"
          />

          <Stagger
            className="grid gap-14 sm:gap-16 lg:grid-cols-2 lg:gap-0"
            stagger={0.16}
            delayChildren={0.08}
          >
            {statements.map((statement, index) => (
              <StatementColumn
                key={statement.label}
                statement={statement}
                index={index}
              />
            ))}
          </Stagger>
        </motion.div>
      </div>
    </section>
  );
}
