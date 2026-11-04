"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/** Incremental counter that animates from 0 when scrolled into view. */
export function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayNumber, setDisplayNumber] = useState(0);
  const hasAnimated = useRef(false);

  const match = useRef(value.match(/^([^0-9]*)(\d+)(.*)$/)).current;
  const prefix = match ? match[1] : "";
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (!isInView || hasAnimated.current || !match) return;
    hasAnimated.current = true;

    const controls = animate(0, target, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplayNumber(Math.round(latest));
      },
      onComplete() {
        setDisplayNumber(target);
      },
    });

    return () => controls.stop();
  }, [isInView, target, match]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {hasAnimated.current || isInView ? displayNumber : 0}
      {suffix}
    </span>
  );
}
