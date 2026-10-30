"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { colorClasses as c } from "@/lib/colors";
import { contactContent } from "@/lib/site-content";

export function PageCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-10">
      <Reveal variant="scaleIn" className="overflow-hidden rounded-[1.75rem] bg-[#121212] px-6 py-10 text-center text-white sm:rounded-[2rem] sm:px-10 sm:py-12">
        <SectionHeading
          title="Ready to Scale Your"
          accent="Brand?"
          description={contactContent.description}
          tone="dark"
          animate={false}
        />
        <Reveal variant="fadeUp" delay={0.12}>
          <Link
            href="/contact"
            className={`mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold transition-[transform,box-shadow] hover:shadow-[0_12px_28px_rgba(255,92,0,0.35)] active:scale-[0.98] ${c.bg.brand} ${c.text.onBrand}`}
          >
            {contactContent.buttonLabel}
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </Reveal>
    </section>
  );
}