"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

type HeroInlineRiseProps = {
  src: string;
  alt: string;
  delay?: number;
  variant?: "circle" | "pill" | "phone";
  className?: string;
  imageClassName?: string;
  width: number;
  height: number;
  sizes?: string;
  framed?: boolean;
};

/** Inline hero media that rises from below into place. */
export function HeroInlineRise({
  src,
  alt,
  delay = 0,
  variant = "circle",
  className = "",
  imageClassName = "",
  width,
  height,
  framed = false,
}: HeroInlineRiseProps) {
  const shell =
    variant === "phone"
      ? "relative mx-1.5 sm:mx-2 inline-block h-10 w-14 sm:h-14 sm:w-20 lg:h-16 lg:w-[5.0625rem] align-[-0.22em]"
      : variant === "pill"
        ? "relative mx-1.5 sm:mx-2.5 inline-block h-10 w-14 sm:h-14 sm:w-20 lg:h-[4.15rem] lg:w-[6.5rem] align-[-0.2em]"
        : "relative mx-1.5 sm:mx-2.5 inline-block h-10 w-10 sm:h-14 sm:w-14 lg:h-[4.25rem] lg:w-[4.25rem] align-[-0.18em]";

  const image =
    variant === "phone"
      ? "h-full w-full rounded-[999px] object-cover shadow-[0_3px_12px_rgba(0,0,0,0.14)] ring-1 ring-black/8"
      : variant === "pill"
        ? framed
          ? "relative h-full w-full rounded-[999px] object-cover p-[3px]"
          : "h-full w-full rounded-[999px] object-cover shadow-[0_3px_12px_rgba(0,0,0,0.14)] ring-1 ring-black/8"
        : "h-full w-full rounded-full object-cover shadow-[0_3px_12px_rgba(0,0,0,0.14)] ring-1 ring-black/8";

  return (
    <motion.span
      className={`${shell} ${className}`}
      initial={{ opacity: 0, y: 36, scale: 0.92, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.65, delay, ease: easeOut }}
    >
      {framed ? (
        <span className="absolute inset-0 rounded-[999px] bg-brand-primary shadow-[0_3px_12px_rgba(255,92,0,0.35)]" />
      ) : null}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${image} ${imageClassName}`}
        sizes="(max-width: 640px) 56px, (max-width: 1024px) 80px, 104px"
      />
    </motion.span>
  );
}
