"use client";

import {
  motion,
  type HTMLMotionProps,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";
import type { ElementType, ReactNode } from "react";

export const revealEase = [0.22, 1, 0.36, 1] as const;

export const defaultViewport = { once: true, amount: 0.2, margin: "0px 0px -8% 0px" } as const;

type RevealVariant = "fadeUp" | "fade" | "fadeLeft" | "fadeRight" | "scaleIn";

const variantMap: Record<
  RevealVariant,
  { hidden: TargetAndTransition; visible: TargetAndTransition }
> = {
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  as?: keyof typeof motion;
  amount?: number | "some" | "all";
  once?: boolean;
  style?: HTMLMotionProps<"div">["style"];
};

export function Reveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.65,
  as = "div",
  amount = 0.2,
  once = true,
  style,
}: RevealProps) {
  const MotionTag = motion[as] as ElementType;
  const states = variantMap[variant];
  const transition: Transition = {
    duration,
    delay,
    ease: revealEase,
  };

  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: states.hidden,
        visible: { ...states.visible, transition },
      }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  as?: keyof typeof motion;
  amount?: number | "some" | "all";
  once?: boolean;
};

export function Stagger({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.05,
  as = "div",
  amount = 0.15,
  once = true,
}: StaggerProps) {
  const MotionTag = motion[as] as ElementType;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -6% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  as?: keyof typeof motion;
};

export function RevealItem({
  children,
  className,
  variant = "fadeUp",
  as = "div",
}: RevealItemProps) {
  const MotionTag = motion[as] as ElementType;
  const states = variantMap[variant];

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: states.hidden,
        visible: {
          ...states.visible,
          transition: { duration: 0.6, ease: revealEase },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
