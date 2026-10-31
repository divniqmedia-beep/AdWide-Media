"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { colorClasses as c } from "@/lib/colors";
import { works } from "@/lib/site-content";
import { worksImages } from "@/lib/works-media";

export function WorkGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-10">
      <div className="space-y-8">
        {works.map((work, index) => {
          const imageSrc = worksImages[work.title as keyof typeof worksImages];

          return (
            <Reveal
              key={work.title}
              as="article"
              variant="fadeUp"
              delay={Math.min(index * 0.04, 0.12)}
              className={`overflow-hidden rounded-[1.75rem] border bg-white ${c.border.default} lg:grid lg:grid-cols-[1.1fr_0.9fr]`}
            >
              <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={imageSrc}
                  alt={`${work.title} project preview`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={index === 0}
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className={`text-sm tabular-nums ${c.text.muted}`}>
                  {String(index + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
                </p>
                <h2 className={`mt-3 font-display text-3xl font-normal tracking-normal [word-spacing:0.12em] sm:text-4xl ${c.text.primary}`}>
                  {work.title}
                </h2>
                <p className={`mt-4 text-sm leading-relaxed sm:text-base ${c.text.secondary}`}>
                  {work.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <p className={`text-xs uppercase tracking-[0.16em] ${c.text.muted}`}>Year</p>
                    <p className={`mt-1.5 text-xl font-semibold tabular-nums ${c.text.primary}`}>
                      {work.year}
                    </p>
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-[0.16em] ${c.text.muted}`}>Role</p>
                    <p className={`mt-1.5 text-base font-medium ${c.text.primary}`}>{work.role}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className={`text-xs uppercase tracking-[0.16em] ${c.text.muted}`}>Services</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {work.services.map((service) => (
                      <li
                        key={service}
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${c.border.default} ${c.text.secondary}`}
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
