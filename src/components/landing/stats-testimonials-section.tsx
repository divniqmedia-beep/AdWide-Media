"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
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
      className={`relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-10 lg:pb-24 lg:pt-16 ${c.bg.page}`}
    >
      <div className="relative mx-auto max-w-[80rem]">
        {/* Giant watermark title overlapping the cards */}
        <div className="relative -mb-10 sm:-mb-24 lg:-mb-13 flex justify-center select-none pointer-events-none">
          <span
            aria-hidden
            className="font-display text-[clamp(4.5rem,13vw,11.5rem)] font-normal leading-none tracking-normal text-transparent bg-clip-text select-none"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.08) 58%, rgba(0, 0, 0, 0.01) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Testimonials
          </span>
        </div>

        <div className="relative isolate z-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.15fr)] lg:gap-6">
          {/* Stats Card */}
          <Reveal
            as="article"
            variant="fadeLeft"
            className="relative min-h-[440px] overflow-hidden rounded-[24px] sm:min-h-[480px] lg:min-h-[520px] bg-[#0c0c0c]"
          >
            <video
              src={testimonialsMedia.statsVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 z-[1] bg-black/40" />

            <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-9 lg:p-10">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} variant="fadeUp" delay={0.08 + i * 0.08}>
                  <p className="font-display text-[clamp(2.75rem,5.5vw,4.25rem)] font-normal leading-none tracking-normal text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs sm:text-[0.8125rem] font-medium text-white/70 leading-snug">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Testimonial Card */}
          <Reveal
            as="article"
            variant="fadeRight"
            delay={0.08}
            className="relative min-h-[440px] overflow-hidden rounded-[24px] sm:min-h-[480px] lg:min-h-[520px] lg:z-20"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-0"
              >
                <Image
                  src={activeImage}
                  alt={active.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 860px"
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 z-[1] bg-black/40 backdrop-blur-[1px]" />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-transparent to-black/25" />

            <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-9 lg:p-10 text-white">
              {/* Counter */}
              <div className="flex items-center text-sm font-medium tabular-nums">
                <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-white/60"> / {String(testimonials.length).padStart(2, "0")}</span>
              </div>

              {/* Bottom Quote + Author + Navigation */}
              <div className="space-y-6 sm:space-y-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-2xl"
                  >
                    <p className="font-display text-xl sm:text-2xl lg:text-[28px] lg:leading-[36px] font-normal leading-snug tracking-normal text-white">
                      &ldquo;{active.quote.replace(/^["“”]|["“”]$/g, "")}&rdquo;
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-sans text-sm sm:text-base font-semibold text-white">
                      {active.name}
                    </p>
                    <p className="font-sans mt-0.5 text-xs sm:text-sm text-white/65">
                      {active.role}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2.5">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md transition-all active:scale-95"
                    >
                      <svg
                        className="size-4.5 sm:size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next testimonial"
                      className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md transition-all active:scale-95"
                    >
                      <svg
                        className="size-4.5 sm:size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
