"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { colorClasses as c } from "@/lib/colors";
import { works, worksIntro } from "@/lib/site-content";
import { worksImages } from "@/lib/works-media";

const WORK_COUNT = works.length;
/** Soft follow so card transforms ease instead of tracking raw scroll ticks. */
const cardSpring = { stiffness: 42, damping: 26, mass: 0.65, restDelta: 0.0005 };
/** Shared window: the slide in front recedes while the next one rises over it. */
const HANDOFF = 0.52;
/** One viewport per card-step plus smooth handoff. */
const SCROLL_VIEWPORTS = WORK_COUNT + 0.6;

function deckProgress(raw: number) {
  return raw * (WORK_COUNT - 0.4);
}

type CardMotion = {
  /** vh offset. The card box is anchored to the top of the stage. */
  y: number;
  x: number;
  scale: number;
  opacity: number;
  rotateY: number;
  rotateX: number;
  rotateZ: number;
  zIndex: number;
  dim: number;
  wash: number;
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function clamp01(t: number) {
  return Math.min(1, Math.max(0, t));
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

const HIDDEN: CardMotion = {
  y: 110,
  x: 0,
  scale: 1,
  opacity: 0,
  rotateY: 0,
  rotateX: 0,
  rotateZ: 0,
  zIndex: 0,
  dim: 0.16,
  wash: 0,
};

/** Full-viewport slide — content stays on screen. */
const FRONT: CardMotion = {
  y: 0,
  x: 0,
  scale: 1,
  opacity: 1,
  rotateY: 0,
  rotateX: 0,
  rotateZ: 0,
  zIndex: 0,
  dim: 0.16,
  wash: 0,
};

/**
 * Previous slide only: smaller, centered high, tilted back and slightly right.
 * Kept gentle so it stays behind the next card instead of cutting across it.
 */
const PARKED: CardMotion = {
  y: -6,
  x: 36,
  scale: 0.72,
  opacity: 1,
  rotateY: 10,
  rotateX: 14,
  rotateZ: 2,
  zIndex: 0,
  dim: 0.18,
  wash: 0.14,
};

function mixMotion(from: CardMotion, to: CardMotion, t: number, zIndex: number): CardMotion {
  return {
    y: lerp(from.y, to.y, t),
    x: lerp(from.x, to.x, t),
    scale: lerp(from.scale, to.scale, t),
    opacity: lerp(from.opacity, to.opacity, t),
    rotateY: lerp(from.rotateY, to.rotateY, t),
    rotateX: lerp(from.rotateX, to.rotateX, t),
    rotateZ: lerp(from.rotateZ, to.rotateZ, t),
    zIndex,
    dim: lerp(from.dim, to.dim, t),
    wash: lerp(from.wash, to.wash, t),
  };
}

function getCardMotion(raw: number, index: number): CardMotion {
  const t = deckProgress(raw) - index;
  const frontZ = 200 + index;
  const parkedZ = 20 + index;

  if (t <= -HANDOFF) {
    return { ...HIDDEN, zIndex: index };
  }

  if (t < 0) {
    const e = easeOutCubic(clamp01((t + HANDOFF) / HANDOFF));
    return { ...mixMotion(HIDDEN, FRONT, e, frontZ), opacity: 1 };
  }

  if (t < 1 - HANDOFF) {
    return { ...FRONT, zIndex: frontZ };
  }

  if (t < 1) {
    const u = clamp01((t - (1 - HANDOFF)) / HANDOFF);
    const move = easeOutCubic(u);
    const tilt = u * u;
    const posed = mixMotion(FRONT, PARKED, move, parkedZ);
    return {
      ...posed,
      rotateY: lerp(FRONT.rotateY, PARKED.rotateY, tilt),
      rotateX: lerp(FRONT.rotateX, PARKED.rotateX, tilt),
      rotateZ: lerp(FRONT.rotateZ, PARKED.rotateZ, tilt),
    };
  }

  if (t < 1 + HANDOFF) {
    return { ...PARKED, zIndex: parkedZ };
  }

  if (t < 1 + HANDOFF + 0.3) {
    const e = clamp01((t - (1 + HANDOFF)) / 0.3);
    return mixMotion(
      PARKED,
      { ...HIDDEN, y: PARKED.y - 8, scale: PARKED.scale * 0.9, wash: 0.4 },
      e,
      parkedZ,
    );
  }

  return { ...HIDDEN, y: PARKED.y - 8, zIndex: 0 };
}

function WorkStackCard({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const work = works[index];
  const imageSrc = worksImages[work.title as keyof typeof worksImages];

  const motionAt = (selector: (m: CardMotion) => number) =>
    useTransform(scrollYProgress, (p) => selector(getCardMotion(p, index)));

  const y = useTransform(motionAt((m) => m.y), (value) => `${value}vh`);
  const x = motionAt((m) => m.x);
  const scale = motionAt((m) => m.scale);
  const opacity = motionAt((m) => m.opacity);
  const rotateY = motionAt((m) => m.rotateY);
  const rotateX = motionAt((m) => m.rotateX);
  const rotateZ = motionAt((m) => m.rotateZ);
  const zIndex = motionAt((m) => m.zIndex);
  const dim = motionAt((m) => m.dim);
  const wash = motionAt((m) => m.wash);

  return (
    <motion.article
      style={{
        y,
        x,
        scale,
        opacity,
        rotateY,
        rotateX,
        rotateZ,
        zIndex,
        transformOrigin: "50% 50%",
      }}
      className="absolute inset-0 overflow-hidden shadow-[0_28px_70px_rgba(0,0,0,0.28)] ring-1 ring-black/10 will-change-transform rounded-[24px] sm:rounded-[2rem]"
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover object-center scale-110"
        sizes="100vw"
        aria-hidden
      />

      <motion.div style={{ opacity: dim }} className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 backdrop-blur-2xl" />
      <div className="absolute inset-0 bg-linear-to-br from-black/40 via-black/15 to-black/45" />
      <motion.div style={{ opacity: wash }} className="absolute inset-0 bg-white" />

      <div className="relative z-10 grid h-full gap-4 sm:gap-6 overflow-y-auto p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:overflow-hidden lg:p-12 xl:gap-14 xl:px-14 xl:py-12">
        {/* Left Column: Intro & Description */}
        <div className="flex flex-col justify-between gap-3 sm:gap-5 text-white lg:min-h-[min(48vh,380px)] lg:py-2">
          <div className="space-y-1.5 sm:space-y-2.5">
            <p className="text-xs sm:text-sm tabular-nums text-white/60">
              {String(index + 1).padStart(2, "0")} / {String(WORK_COUNT).padStart(2, "0")}
            </p>
            <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-white/70">
              {worksIntro}
            </p>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-white/92 md:text-base lg:text-lg">
            {work.description}
          </p>
        </div>

        {/* Center Column: Project Mockup Preview */}
        <div className="relative mx-auto flex h-full w-full max-w-[280px] sm:max-w-md items-center justify-center lg:max-w-none">
          <div className="relative aspect-[4/5] w-full max-h-[min(38vh,360px)] sm:max-h-[min(50vh,560px)] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/25 sm:aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src={imageSrc}
              alt={`${work.title} project preview`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 70vw, 560px"
            />
          </div>
        </div>

        {/* Right Column: Title, Year, Role, Services */}
        <div className="space-y-4 text-white sm:space-y-6 lg:space-y-8 lg:pl-2">
          <h3 className="font-display text-[clamp(1.75rem,4vw,3.75rem)] font-normal leading-none tracking-normal">
            {work.title}
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-col sm:gap-0 sm:space-y-5">
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/60">Year</p>
              <p className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-normal tabular-nums text-white">{work.year}</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/60">Role</p>
              <p className="mt-1 text-sm sm:text-base font-medium lg:text-lg">{work.role}</p>
            </div>
          </div>
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/60">Services</p>
            <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/90 sm:block sm:space-y-1.5 sm:text-sm lg:text-base">
              {work.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function WorksSection() {
  const scrollTrackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, cardSpring);

  const titleY = useTransform(smoothProgress, [0, 0.22], ["0vh", "-6vh"]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.08, 0.22], [1, 1, 0.2]);

  return (
    <section
      id="works"
      ref={scrollTrackRef}
      className={`relative ${c.bg.page}`}
      style={{ height: `${SCROLL_VIEWPORTS * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col justify-start overflow-hidden px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6">
        <div className="relative mx-auto w-full max-w-[80rem] flex flex-col h-full">
          {/* Giant watermark heading under the cards - matches StatsTestimonialsSection */}
          <motion.div
            style={{ y: titleY, opacity: titleOpacity }}
            className="pointer-events-none relative -mb-10 sm:-mb-20 lg:-mb-28 flex justify-center select-none z-0 shrink-0"
          >
            <span
              aria-hidden
              className="font-display text-[clamp(4.5rem,13vw,11.5rem)] font-normal leading-none tracking-normal text-transparent bg-clip-text select-none text-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.08) 58%, rgba(0, 0, 0, 0.01) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Recent Works
            </span>
          </motion.div>

          {/* Card Stage - sits on top of the watermark with z-10 */}
          <div
            className="relative isolate z-10 min-h-0 flex-1 pb-4 sm:pb-6"
            style={{ perspective: "2200px", perspectiveOrigin: "50% 46%" }}
          >
            {works.map((work, index) => (
              <WorkStackCard
                key={work.title}
                index={index}
                scrollYProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
