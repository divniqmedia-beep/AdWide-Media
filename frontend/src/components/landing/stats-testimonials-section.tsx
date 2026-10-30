"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { colorClasses as c } from "@/lib/colors";
import { stats, testimonials } from "@/lib/site-content";
import { testimonialsMedia } from "@/lib/testimonials-media";

export function StatsTestimonialsSection() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];
  const activeImage = testimonialsMedia.slides[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section
      className={`relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${c.bg.page}`}
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="Our"
          accent="Testimonials"
          className="mb-10 sm:mb-12"
        />

        <div className="relative isolate z-10 grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.55fr)] lg:gap-6">
          <Reveal
            as="article"
            variant="fadeLeft"
            className="relative min-h-[400px] overflow-hidden rounded-[1.75rem] sm:min-h-[460px] lg:min-h-[520px]"
          >
            <Image
              src={testimonialsMedia.statsBackground}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 380px"
            />
            <div className="absolute inset-0 z-[1] bg-black/50" />
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 sm:p-9 lg:p-10">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} variant="fadeUp" delay={0.08 + i * 0.08}>
                  <p className="font-display text-[clamp(2.25rem,5vw,3.25rem)] font-bold leading-none tracking-tight text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 max-w-[12rem] text-sm leading-snug text-white/72">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal
            as="article"
            variant="fadeRight"
            delay={0.08}
            className="relative min-h-[400px] overflow-hidden rounded-[1.75rem] sm:min-h-[460px] lg:min-h-[520px] lg:z-20"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-0"
              >
                <Image
                  src={activeImage}
                  alt={active.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 820px"
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-t from-black/80 via-black/35 to-black/15" />

            <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 sm:p-9 lg:p-10">
              <p className="relative z-10 text-sm font-medium tabular-nums text-white/88">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </p>

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 max-w-xl"
                  >
                    <p className="text-[clamp(1.25rem,2.5vw,1.65rem)] font-semibold leading-snug text-white">
                      &ldquo;{active.quote}&rdquo;
                    </p>
                    <div className="mt-6">
                      <p className="text-base font-semibold text-white">{active.name}</p>
                      <p className="mt-0.5 text-sm text-white/72">{active.role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex shrink-0 gap-3 self-end lg:self-auto">
                  <button
                    type="button"
                    onClick={prev}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white backdrop-blur-md transition-opacity hover:opacity-90"
                    aria-label="Previous testimonial"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white backdrop-blur-md transition-opacity hover:opacity-90"
                    aria-label="Next testimonial"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
