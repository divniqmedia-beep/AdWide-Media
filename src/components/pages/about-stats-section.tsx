"use client";

import { Reveal } from "@/components/motion/reveal";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { colorClasses as c } from "@/lib/colors";
import { stats } from "@/lib/site-content";

export function AboutStatsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            variant="fadeUp"
            delay={index * 0.08}
            className={`rounded-[1.5rem] border bg-white px-6 py-8 text-center ${c.border.default}`}
          >
            <p className={`font-display text-4xl font-bold ${c.text.brand}`}>
              <AnimatedStat value={stat.value} />
            </p>
            <p className={`mt-2 text-sm ${c.text.secondary}`}>{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
