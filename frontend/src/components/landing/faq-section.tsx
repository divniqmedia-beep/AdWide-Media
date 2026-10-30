"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { colorClasses as c } from "@/lib/colors";
import { faqs } from "@/lib/site-content";

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full ${c.bg.inverse} ${c.text.inverse}`}
    >
      <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2">
        {!open && <path d="M8 3.5v9" strokeLinecap="round" />}
        <path d="M3.5 8h9" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => new Set([0, 1]));

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const leftFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightFaqs = faqs.filter((_, index) => index % 2 === 1);

  const renderCard = (faq: (typeof faqs)[number], index: number) => {
    const isOpen = openIndexes.has(index);

    return (
      <Reveal
        key={faq.question}
        variant="fadeUp"
        delay={(index % 4) * 0.05}
        className={`mb-4 break-inside-avoid overflow-hidden rounded-[1.5rem] border bg-white transition-[box-shadow,border-color] duration-200 last:mb-0 hover:border-text-primary sm:mb-5 sm:rounded-[1.75rem] ${c.border.default}`}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => toggle(index)}
          className={`flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6 ${c.text.primary}`}
        >
          <span className="pt-0.5 text-base font-semibold leading-snug sm:text-[1.05rem]">
            {faq.question}
          </span>
          <ToggleIcon open={isOpen} />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className={`px-5 pb-5 text-sm leading-relaxed sm:px-6 sm:pb-6 sm:text-[0.95rem] ${c.text.secondary}`}
              >
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    );
  };

  return (
    <section id="faq" className={`px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 ${c.bg.page}`}>
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Your questions,"
          accent="answered"
          description="Helping you understand our process and offerings at Adwide Media."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-2 lg:items-start">
          <div>
            {leftFaqs.map((faq) => {
              const index = faqs.findIndex((item) => item.question === faq.question);
              return renderCard(faq, index);
            })}
          </div>
          <div>
            {rightFaqs.map((faq) => {
              const index = faqs.findIndex((item) => item.question === faq.question);
              return renderCard(faq, index);
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
