import type { Metadata } from "next";
import { FoundersSection } from "@/components/landing/founders-section";
import { PageCta } from "@/components/layout/page-cta";
import { PageShell } from "@/components/layout/page-shell";
import { AboutHero } from "@/components/pages/about-hero";
import { AboutMissionVisionSection } from "@/components/pages/about-mission-vision-section";
import { AboutStatsSection } from "@/components/pages/about-stats-section";
import { AboutStorySection } from "@/components/pages/about-story-section";
import { aboutSection, brand } from "@/lib/site-content";

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
      <AboutStatsSection />
      <FoundersSection showIntro={false} sectionId="founders" />
      <PageCta />
    </PageShell>
  );
}
