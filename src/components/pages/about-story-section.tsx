"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { colorClasses as c } from "@/lib/colors";
import { aboutLong, usp } from "@/lib/site-content";

export function AboutStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);
  const floatY = useTransform(scrollYProgress, [0, 1], [24, -36]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 6]);

  return (
    <section
      ref={sectionRef}
      className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-10 ${c.bg.page}`}
    >
      <SectionHeading
        title="Creative storytelling with performance at the"
        accent="core"
        className="mb-12 sm:mb-14"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="fadeLeft">
          <p className={`text-base leading-relaxed ${c.text.secondary}`}>{aboutLong}</p>
          <p className={`mt-5 text-base leading-relaxed ${c.text.secondary}`}>{usp}</p>
        </Reveal>

        <Reveal variant="fadeRight" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_28px_70px_rgba(0,0,0,0.18)] sm:rounded-[2rem]"
          >
            <motion.div style={{ scale: imageScale }} className="absolute inset-0">
              <Image
                src="/works/nova-retail.jpg"
                alt="Adwide creative production in progress"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/10" />
          </motion.div>

          <motion.div
            style={{ y: floatY, rotate }}
            className="absolute -bottom-6 -left-4 rounded-[1.25rem] bg-white px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.14)] ring-1 ring-black/5 sm:-left-8 sm:px-6 sm:py-5"
          >
            <p className={`text-xs uppercase tracking-[0.18em] ${c.text.muted}`}>Since</p>
            <p className={`mt-1 font-display text-3xl font-bold ${c.text.brand}`}>2024</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 top-10 rounded-full bg-[#121212] px-4 py-2 text-xs font-semibold text-white shadow-lg sm:-right-5 sm:top-14 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Premium production
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
