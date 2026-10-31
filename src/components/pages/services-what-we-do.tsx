"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { colorClasses as c } from "@/lib/colors";
import { services } from "@/lib/site-content";

export function ServicesWhatWeDo() {
  return (
    <section className={`px-4 pb-20 sm:px-6 lg:px-10 ${c.bg.page}`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="What we" accent="do" />

        <div className={`mt-8 border-t sm:mt-10 ${c.border.default}`}>
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              as="article"
              variant="fadeUp"
              delay={Math.min(index * 0.04, 0.16)}
              className={`grid gap-8 border-b py-10 sm:py-12 lg:grid-cols-[0.85fr_1.25fr_0.95fr] lg:items-start lg:gap-10 lg:py-14 ${c.border.default}`}
            >
              <div>
                <p className={`text-xs tabular-nums ${c.text.muted}`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="group block"
                >
                  <h3
                    className={`mt-3 font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-brand-primary sm:text-[1.75rem] ${c.text.primary}`}
                  >
                    {service.title}
                  </h3>
                </Link>
              </div>

              <div>
                <Link
                  href={`/services/${service.id}`}
                  className="group block overflow-hidden rounded-[1.5rem] bg-[#141414] shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-[1.01] sm:rounded-[1.75rem]"
                >
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 92vw, 520px"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/10" />
                  </div>
                </Link>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-[#2b2b2b] px-4 py-2 text-xs font-medium text-white sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`flex flex-col justify-between gap-6 lg:border-t lg:pt-5 ${c.border.default}`}>
                <p className={`text-sm leading-relaxed sm:text-base ${c.text.secondary}`}>
                  {service.caption}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary transition-all hover:gap-3"
                >
                  <span>Explore Service</span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
