"use client";

import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { colorClasses as c } from "@/lib/colors";
import { brand } from "@/lib/site-content";

type LegalSection = {
  heading: string;
  body: string;
};

type LegalPageProps = {
  tag: string;
  title: string;
  updated: string;
  intro: string;
  sections: readonly LegalSection[];
};

export function LegalPage({ tag, title, updated, intro, sections }: LegalPageProps) {
  return (
    <PageShell>
      <PageHero tag={tag} title={title} description={intro} />

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-10">
        <Reveal variant="fadeUp">
          <p className={`mb-10 text-sm ${c.text.muted}`}>Last updated: {updated}</p>
        </Reveal>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <Reveal key={section.heading} as="article" variant="fadeUp" delay={Math.min(index * 0.05, 0.2)}>
              <h2 className={`font-display text-2xl font-bold tracking-tight ${c.text.primary}`}>
                {index + 1}. {section.heading}
              </h2>
              <p className={`mt-3 text-sm leading-relaxed sm:text-base ${c.text.secondary}`}>
                {section.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="scaleIn" delay={0.08} className={`mt-12 rounded-[1.5rem] border bg-white p-6 ${c.border.default}`}>
          <p className={`text-sm font-semibold ${c.text.primary}`}>Need help?</p>
          <p className={`mt-2 text-sm ${c.text.secondary}`}>
            Email{" "}
            <a href={brand.emailHref} className={`underline underline-offset-2 ${c.text.brand}`}>
              {brand.email}
            </a>{" "}
            or call{" "}
            <a href={brand.phoneHref} className={`underline underline-offset-2 ${c.text.brand}`}>
              {brand.phone}
            </a>
            .
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
