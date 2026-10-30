import type { Metadata } from "next";
import { FoundersSection } from "@/components/landing/founders-section";
import { PageCta } from "@/components/layout/page-cta";
import { PageShell } from "@/components/layout/page-shell";
import { AboutHero } from "@/components/pages/about-hero";
import { AboutMissionVisionSection } from "@/components/pages/about-mission-vision-section";
import { AboutStorySection } from "@/components/pages/about-story-section";
import { colorClasses as c } from "@/lib/colors";
import { aboutSection, brand, stats } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `About Us | ${brand.name}`,
  description: aboutSection,
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero />
      <AboutStorySection />
      <AboutMissionVisionSection />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-[1.5rem] border bg-white px-6 py-8 text-center ${c.border.default}`}
            >
              <p className={`font-display text-4xl font-bold ${c.text.brand}`}>{stat.value}</p>
              <p className={`mt-2 text-sm ${c.text.secondary}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <FoundersSection showIntro={false} sectionId="founders" />

      <PageCta />
    </PageShell>
  );
}
