"use client";

import BlurText, { type BlurTextProps } from "@/components/ui/blur-text";

/** Shared BlurText presets for hero headlines / supporting copy — words rise one-by-one. */
export function HeroBlurText({
  text,
  className = "",
  delay = 160,
  stepDuration = 0.38,
  blur = 14,
  distance = 40,
  effect = "blur",
  animateBy = "words",
  direction = "bottom",
  staggerFrom = "start",
  trigger = "load",
  as = "span",
  startDelay = 0,
  color,
  ...rest
}: BlurTextProps) {
  return (
    <BlurText
      text={text}
      className={className}
      delay={delay}
      stepDuration={stepDuration}
      blur={blur}
      distance={distance}
      effect={effect}
      animateBy={animateBy}
      direction={direction}
      staggerFrom={staggerFrom}
      trigger={trigger}
      as={as}
      startDelay={startDelay}
      color={color}
      {...rest}
    />
  );
}
