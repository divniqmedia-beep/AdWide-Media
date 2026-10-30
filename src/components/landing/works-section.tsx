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
import { SectionHeading } from "@/components/ui/section-heading";
import { colorClasses as c } from "@/lib/colors";
import { works } from "@/lib/site-content";
import { worksImages } from "@/lib/works-media";

const WORK_COUNT = works.length;
/** Soft follow so card transforms ease instead of tracking raw scroll ticks. */
const cardSpring = { stiffness: 42, damping: 26, mass: 0.65, restDelta: 0.0005 };
/** Shared window: the slide in front recedes while the next one rises over it. */
const HANDOFF = 0.52;
/** Last slide settles in front and does not recede. */
const V_END = WORK_COUNT - HANDOFF;
/** One viewport per card-step, including the opening rise and the final hold. */
const SCROLL_VIEWPORTS = V_END + 1;

function deckProgress(raw: number) {
  return raw * SCROLL_VIEWPORTS - 1;
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
      className="absolute inset-0 overflow-hidden shadow-[0_28px_70px_rgba(0,0,0,0.28)] ring-1 ring-black/10 will-change-transform sm:rounded-[2rem]"
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

      <div className="relative z-10 grid h-full gap-6 overflow-y-auto p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:overflow-hidden lg:p-12 xl:gap-16 xl:px-16 xl:py-14">
        <div className="flex flex-col justify-between gap-8 text-white lg:min-h-[min(52vh,420px)] lg:py-2">
          <p className="text-sm tabular-nums text-white/80">
            {String(index + 1).padStart(2, "0")} / {String(WORK_COUNT).padStart(2, "0")}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-white/92 sm:text-base lg:text-lg">
            {work.description}
          </p>
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-xl items-center justify-center lg:max-w-none">
          <div className="relative aspect-[4/5] w-full max-h-[min(58vh,680px)] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/30 sm:aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src={imageSrc}
              alt={`${work.title} project preview`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 560px"
            />
          </div>
        </div>

        <div className="space-y-6 text-white lg:space-y-8 lg:pl-2">
          <h3 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-none tracking-tight">
            {work.title}
          </h3>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/60">Year</p>
            <p className="mt-1.5 text-3xl font-semibold tabular-nums sm:text-4xl">{work.year}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/60">Role</p>
            <p className="mt-1.5 text-base font-medium sm:text-lg">{work.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/60">Services</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/90 sm:text-base">
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

  const titleY = useTransform(smoothProgress, [0, 0.22], ["0vh", "-12vh"]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.08, 0.2], [1, 1, 0]);
  const titleScale = useTransform(smoothProgress, [0, 0.22], [1, 0.94]);

  return (
    <section
      id="works"
      ref={scrollTrackRef}
      className={`relative ${c.bg.page}`}
      style={{ height: `${SCROLL_VIEWPORTS * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="pointer-events-none z-[400] flex shrink-0 flex-col items-center px-4 pb-1 pt-2 sm:pb-1.5 sm:pt-3"
        >
          <SectionHeading title="Recent" accent="Works" animate={false} />
        </motion.div>

        <div
          className="relative min-h-0 flex-1 px-0 sm:px-3 sm:pb-3"
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
    </section>
  );
}
