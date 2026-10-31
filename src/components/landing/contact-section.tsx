"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { colorClasses as c } from "@/lib/colors";
import { brand, contactContent } from "@/lib/site-content";

function ContactChannel({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-baseline justify-between gap-6 border-b border-white/15 py-4 transition-colors hover:border-brand-primary"
    >
      <span className="text-xs uppercase tracking-[0.2em] text-white/45">{label}</span>
      <span className="text-right text-sm font-medium text-white transition-colors group-hover:text-brand-primary sm:text-base">
        {value}
        <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </a>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className={`relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 ${c.bg.page}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal
          variant="scaleIn"
          className="relative overflow-hidden rounded-[2rem] bg-[#121212] px-6 py-10 text-white shadow-[0_40px_100px_rgba(0,0,0,0.28)] sm:rounded-[2.5rem] sm:px-10 sm:py-14 lg:px-14 lg:py-16"
        >
          {/* Atmosphere */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 size-[28rem] rounded-full bg-brand-primary/35 blur-[110px]"
            animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 right-0 size-[22rem] rounded-full bg-[#ff8a3d]/20 blur-[100px]"
            animate={{ opacity: [0.2, 0.4, 0.2], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
            }}
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20">
            <div>
              <Reveal variant="fadeUp">
                <div className="mb-8 flex items-center gap-3">
                  <span className="relative flex size-2.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#22c55e] opacity-60" />
                    <span className="relative size-2.5 rounded-full bg-[#22c55e]" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                    {contactContent.sectionTag.replace(/[()]/g, "")} · open for new projects
                  </p>
                </div>
              </Reveal>

              <Reveal as="h2" variant="fadeUp" delay={0.08} className="font-display text-[clamp(2.5rem,5.5vw,72px)] lg:text-[72px] lg:leading-[80px] font-normal leading-[1.11] tracking-normal [word-spacing:0.12em]">
                Ready to
                <br />
                Scale Your
                <br />
                <span className="text-brand-primary">Brand?</span>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.14}>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
                  {contactContent.description}
                </p>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.18}>
                <a
                  href={brand.phoneHref}
                  className="mt-10 block font-display text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold leading-none tracking-[-0.03em] text-white transition-colors hover:text-brand-primary"
                >
                  {brand.phone}
                </a>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.22} className="mt-8 max-w-md">
                <ContactChannel label="Email" value={brand.email} href={brand.emailHref} />
                <ContactChannel label="WhatsApp" value="Chat with us" href={brand.whatsappHref} external />
                <ContactChannel label="Call" value="Click to call" href={brand.phoneHref} />
              </Reveal>
            </div>

            <Reveal variant="fadeUp" delay={0.1}>
              <form
                className="relative flex flex-col justify-between rounded-[1.5rem] bg-white p-6 text-[#111] shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[1.75rem] sm:p-8 lg:min-h-[540px]"
                onSubmit={(event) => event.preventDefault()}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7a7a7a]">Project brief</p>
                  <p className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    Tell us what you&apos;re building
                  </p>

                  <div className="mt-8 space-y-6">
                    <label className="block">
                      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-[#7a7a7a]">
                        {contactContent.formNameLabel}
                      </span>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full border-b border-[#dddddd] bg-transparent py-3 text-base outline-none transition-[border-color] placeholder:text-[#b0b0b0] focus:border-brand-primary"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-[#7a7a7a]">
                        {contactContent.formEmailLabel}
                      </span>
                      <input
                        type="email"
                        placeholder="you@brand.com"
                        className="w-full border-b border-[#dddddd] bg-transparent py-3 text-base outline-none transition-[border-color] placeholder:text-[#b0b0b0] focus:border-brand-primary"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-[#7a7a7a]">
                        {contactContent.formMessageLabel}
                      </span>
                      <textarea
                        rows={4}
                        placeholder={contactContent.formMessagePlaceholder}
                        className="w-full resize-none border-b border-[#dddddd] bg-transparent py-3 text-base outline-none transition-[border-color] placeholder:text-[#b0b0b0] focus:border-brand-primary"
                      />
                    </label>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-[#7a7a7a]">
                    We usually reply within one business day.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-primary px-7 text-sm font-semibold text-white transition-[transform,box-shadow] hover:shadow-[0_12px_28px_rgba(255,92,0,0.35)] active:scale-[0.98]"
                  >
                    {contactContent.buttonLabel}
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </Reveal>

        <Reveal
          variant="fadeUp"
          delay={0.05}
          className="mt-5 overflow-hidden rounded-full bg-brand-primary py-3.5 text-white sm:mt-6 sm:py-4"
        >
          <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap will-change-transform px-4 text-sm font-semibold tracking-wide sm:gap-14 sm:text-base">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="inline-flex items-center gap-10 sm:gap-14">
                <span>{brand.email}</span>
                <span aria-hidden className="opacity-70">
                  ✦
                </span>
                <span>{brand.phone}</span>
                <span aria-hidden className="opacity-70">
                  ✦
                </span>
                <Link href={brand.whatsappHref} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                  WhatsApp
                </Link>
                <span aria-hidden className="opacity-70">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
