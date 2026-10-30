"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { colorClasses as c } from "@/lib/colors";
import { services } from "@/lib/site-content";

type Service = (typeof services)[number];

function ServiceMarquee({ label }: { label: string }) {
  const loop = Array.from({ length: 8 }, () => label);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 overflow-hidden">
      <div className="marquee-fade-edges">
        <div className="marquee-track flex w-max items-center gap-6 whitespace-nowrap will-change-transform sm:gap-8">
          {loop.map((word, index) => (
            <span key={`${word}-${index}`} className="flex items-center gap-6 sm:gap-8">
              <span className="font-display text-[clamp(3.5rem,8vw,7rem)] font-bold leading-none tracking-[-0.04em] text-brand-primary/45">
                {word}
              </span>
              <span
                aria-hidden
                className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none text-brand-primary/40"
              >
                ×
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicePreviewCard({ service }: { service: Service }) {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -14, scale: 0.985 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      <div className="relative overflow-hidden rounded-[1.5rem] bg-[#141414] shadow-[0_36px_90px_rgba(0,0,0,0.22)] ring-1 ring-black/15 sm:rounded-[2rem]">
        <div className="relative aspect-[16/11] w-full lg:aspect-[16/12]">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 92vw, 720px"
            priority={service.id === "brand-identity"}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/10" />
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const [activeId, setActiveId] = useState<Service["id"]>(services[0].id);
  const active = services.find((service) => service.id === activeId) ?? services[0];

  return (
    <section
      id="services"
      className={`relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 ${c.bg.page}`}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="What we" accent="do" />

        <div className={`mt-10 border-t pt-10 sm:mt-12 sm:pt-12 ${c.border.default}`}>
          <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.9fr)_minmax(0,1.4fr)] lg:items-start lg:gap-14 xl:gap-20">
            <div
              role="tablist"
              aria-label="Services"
              aria-orientation="vertical"
            >
              <Stagger
                stagger={0.06}
                className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
              >
                {services.map((service) => {
                  const isActive = service.id === activeId;

                  return (
                    <RevealItem key={service.id}>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveId(service.id)}
                        className={`flex shrink-0 items-center gap-3 rounded-full px-4 py-3 text-left text-base font-medium transition-colors sm:text-lg lg:rounded-none lg:px-0 lg:py-3.5 lg:text-[1.35rem] ${
                          isActive
                            ? c.text.brand
                            : `${c.text.muted} hover:text-text-secondary`
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`size-2 shrink-0 rounded-full bg-brand-primary transition-opacity ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        {service.title}
                      </button>
                    </RevealItem>
                  );
                })}
              </Stagger>
            </div>

            <Reveal variant="fadeRight" className="relative min-h-[min(48vh,460px)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active.id}-marquee`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ServiceMarquee label={active.title} />
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  <ServicePreviewCard service={active} />
                </AnimatePresence>
              </div>

              <div className="relative z-10 mt-6 max-w-xl lg:mt-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28 }}
                    className={`text-sm leading-relaxed sm:text-base ${c.text.secondary}`}
                  >
                    {active.caption}
                  </motion.p>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
