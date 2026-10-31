import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { colorClasses as c } from "@/lib/colors";
import { brand } from "@/lib/site-content";
import {
  getAllServices,
  getAdjacentServices,
  getServiceBySlug,
} from "@/lib/services-detail-data";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: `Service Not Found | ${brand.name}`,
    };
  }

  return {
    title: `${service.title} | ${brand.name}`,
    description: service.overview,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const { prev, next } = getAdjacentServices(service.slug);

  return (
    <PageShell>
      <div className={`px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-12 lg:px-10 ${c.bg.page}`}>
        <div className="mx-auto max-w-5xl">
          {/* Back link */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted transition-colors hover:text-brand-primary"
            >
              <span aria-hidden>←</span> Back to Services
            </Link>
          </div>

          {/* Hero Header */}
          <div className="space-y-4">
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${c.text.brand}`}>
              (Service Detail)
            </p>
            <h1 className="font-display text-4xl font-normal leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="max-w-2xl text-lg font-medium leading-snug text-text-secondary sm:text-xl">
              {service.tagline}
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">
              {service.overview}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-[#242424] px-3.5 py-1.5 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Service Image Banner */}
          <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#141414] shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:mt-12">
            <div className="relative aspect-[16/9] w-full max-h-[480px]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10" />
            </div>
          </div>

          {/* Key Deliverables Grid */}
          <section className="mt-14 sm:mt-16">
            <div className="border-b border-border-default pb-4">
              <h2 className="font-display text-2xl font-normal tracking-tight text-text-primary sm:text-3xl">
                What’s Included
              </h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.deliverables.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border-default bg-white p-5 shadow-xs transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-semibold tabular-nums text-brand-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-text-primary sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3-Step Workflow */}
          <section className="mt-14 sm:mt-16">
            <div className="border-b border-border-default pb-4">
              <h2 className="font-display text-2xl font-normal tracking-tight text-text-primary sm:text-3xl">
                How It Works
              </h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {service.workflow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-border-default bg-white p-5 shadow-xs"
                >
                  <span className="inline-block rounded-full bg-brand-primary/10 px-2.5 py-1 text-xs font-semibold text-brand-primary">
                    Step {item.step}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcomes & Ideal Fit */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:mt-14">
            <div className="rounded-2xl border border-border-default bg-[#fafafa] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                Ideal For
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-primary sm:text-base font-medium">
                {service.idealFor}
              </p>
            </div>
            <div className="rounded-2xl border border-border-default bg-[#fafafa] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                Key Outcome
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-primary sm:text-base font-medium">
                {service.outcome}
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#141414] p-8 text-center text-white shadow-xl sm:p-12">
            <h3 className="font-display text-2xl font-normal tracking-tight sm:text-3xl">
              Ready to scale with {service.title}?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-xs text-white/70 sm:text-sm">
              Let’s build high-converting creative tailored to your brand’s growth goals.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-header-cta px-7 text-sm font-semibold text-white shadow-md transition-all hover:brightness-105 active:scale-95"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Adjacent Services Pagination */}
          <div className="mt-12 flex items-center justify-between border-t border-border-default pt-6">
            <Link
              href={`/services/${prev.slug}`}
              className="group flex flex-col text-left"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted group-hover:text-brand-primary">
                ← Previous Service
              </span>
              <span className="mt-0.5 text-sm font-medium text-text-primary group-hover:underline sm:text-base">
                {prev.title}
              </span>
            </Link>

            <Link
              href={`/services/${next.slug}`}
              className="group flex flex-col text-right"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted group-hover:text-brand-primary">
                Next Service →
              </span>
              <span className="mt-0.5 text-sm font-medium text-text-primary group-hover:underline sm:text-base">
                {next.title}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

