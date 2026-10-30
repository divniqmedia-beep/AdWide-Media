import type { Metadata } from "next";
import { PageCta } from "@/components/layout/page-cta";
import { PageShell } from "@/components/layout/page-shell";
import { WorkGrid } from "@/components/pages/work-grid";
import { WorkHero } from "@/components/pages/work-hero";
import { brand, worksIntro } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `Our Work | ${brand.name}`,
  description: worksIntro,
};

export default function WorkPage() {
  return (
    <PageShell>
      <WorkHero />
      <WorkGrid />
      <PageCta />
    </PageShell>
  );
}
