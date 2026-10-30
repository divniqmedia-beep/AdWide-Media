import type { Metadata } from "next";
import { PageCta } from "@/components/layout/page-cta";
import { PageShell } from "@/components/layout/page-shell";
import { ServicesHero } from "@/components/pages/services-hero";
import { ServicesWhatWeDo } from "@/components/pages/services-what-we-do";
import { SectionHeading } from "@/components/ui/section-heading";
import { colorClasses as c } from "@/lib/colors";
import { brand, processSteps, usp } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `Services | ${brand.name}`,
  description: usp,
};

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesHero />
      <ServicesWhatWeDo />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-10">
        <SectionHeading
          title="How we"
          accent="work"
          description="A clear process from discovery to optimization, built to keep creative quality and business results aligned."
          className="mb-10"
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className={`rounded-[1.25rem] border bg-white p-5 ${c.border.default}`}
            >
              <p className={`text-xs font-semibold tabular-nums ${c.text.brand}`}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className={`mt-3 text-lg font-semibold ${c.text.primary}`}>{step.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${c.text.secondary}`}>
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <PageCta />
    </PageShell>
  );
}
