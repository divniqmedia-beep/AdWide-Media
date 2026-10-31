"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { colorClasses as c } from "@/lib/colors";

/** Shared section title style — centered, display font, dual-tone black + orange. */
export const sectionHeadingClassName =
  "text-center font-display text-[clamp(2.5rem,5.5vw,72px)] lg:text-[72px] lg:leading-[80px] font-normal leading-[1.11] tracking-normal [word-spacing:0.12em]";

type SectionHeadingProps = {
  /** Black (or white on dark) portion of the heading. */
  title: string;
  /** Orange accent portion. Defaults to the last word of `title` when omitted. */
  accent?: string;
  description?: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  /** Use on dark surfaces — lead text becomes white. */
  tone?: "light" | "dark";
  /** Skip scroll reveal when the parent already animates this block. */
  animate?: boolean;
};

function DualToneTitle({
  title,
  accent,
  tone = "light",
}: {
  title: string;
  accent?: string;
  tone?: "light" | "dark";
}) {
  const leadClass = tone === "dark" ? "text-white" : c.text.primary;

  if (accent) {
    return (
      <>
        {title ? <span className={leadClass}>{title}</span> : null}
        {title ? " " : null}
        <span className={c.text.brand}>{accent}</span>
      </>
    );
  }

  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length <= 1) {
    return <span className={c.text.brand}>{title}</span>;
  }

  const lead = words.slice(0, -1).join(" ");
  const end = words[words.length - 1];

  return (
    <>
      <span className={leadClass}>{lead}</span>{" "}
      <span className={c.text.brand}>{end}</span>
    </>
  );
}

export function SectionHeading({
  title,
  accent,
  description,
  className = "",
  as: Tag = "h2",
  tone = "light",
  animate = true,
}: SectionHeadingProps) {
  const content = (
    <>
      <Tag className={sectionHeadingClassName}>
        <DualToneTitle title={title} accent={accent} tone={tone} />
      </Tag>
      {description ? (
        <p
          className={`mx-auto mt-4 max-w-xl text-sm leading-relaxed sm:text-base ${
            tone === "dark" ? "text-white/65" : c.text.secondary
          }`}
        >
          {description}
        </p>
      ) : null}
    </>
  );

  if (!animate) {
    return <div className={`mx-auto max-w-3xl text-center ${className}`}>{content}</div>;
  }

  return (
    <Reveal className={`mx-auto max-w-3xl text-center ${className}`} variant="fadeUp" duration={0.7}>
      {content}
    </Reveal>
  );
}
