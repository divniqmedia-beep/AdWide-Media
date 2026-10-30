"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { Reveal, RevealItem, Stagger } from "@/components/motion/reveal";
import { brand, legalLinks, navLinks } from "@/lib/site-content";

const socialLinks = [
  { label: "WhatsApp", href: brand.whatsappHref, external: true, icon: "whatsapp" as const },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mihir_g/",
    external: true,
    icon: "instagram" as const,
  },
  { label: "Email", href: brand.emailHref, external: false, icon: "email" as const },
] as const;

type SocialIcon = (typeof socialLinks)[number]["icon"];

function SocialIconGlyph({ icon }: { icon: SocialIcon }) {
  if (icon === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.54 0 11.88-5.34 11.88-11.9 0-3.18-1.24-6.16-3.37-8.42ZM12.01 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.44 9.88-9.9 9.88Zm5.72-7.4c-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.75.24 1.44.2 1.98.12.6-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function IndiaClock() {
  const [time, setTime] = useState("—:—:—");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(() => setTime(format()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return <span className="tabular-nums">India → {time}</span>;
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/40">
        {title}
      </p>
      <ul className="space-y-3.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "group text-lg font-semibold text-white transition-colors hover:text-brand-primary sm:text-xl";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#050505]">
      {/* Ember glow — full width */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[75%] bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,_rgba(255,92,0,0.72)_0%,_rgba(255,50,0,0.28)_38%,_transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[-5%] size-[36rem] rounded-full bg-brand-primary/50 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 right-[-5%] size-[34rem] rounded-full bg-[#ff2d00]/40 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[70%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(255,140,60,0.35)_0%,_transparent_70%)] blur-2xl"
      />

      {/* Dot mesh over the glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.65) 0.75px, transparent 0.75px)",
          backgroundSize: "13px 13px",
          maskImage: "linear-gradient(to top, black 0%, transparent 68%)",
        }}
      />

      <div className="relative z-10 w-full px-6 pt-16 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24 xl:px-24">
        <Stagger className="grid gap-12 sm:grid-cols-3 sm:gap-10 lg:gap-16" stagger={0.12}>
          <RevealItem>
            <FooterColumn title="Navigation">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="#works">Works</FooterLink>
              </li>
            </FooterColumn>
          </RevealItem>

          <RevealItem>
            <FooterColumn title="Social">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} external={link.external}>
                    <span className="inline-flex items-center gap-3">
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition-colors group-hover:bg-brand-primary group-hover:text-white group-hover:ring-brand-primary">
                        <SocialIconGlyph icon={link.icon} />
                      </span>
                      <span>{link.label}</span>
                    </span>
                  </FooterLink>
                </li>
              ))}
            </FooterColumn>
          </RevealItem>

          <RevealItem>
            <FooterColumn title="Legals">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href={brand.phoneHref}>{brand.phone}</FooterLink>
              </li>
            </FooterColumn>
          </RevealItem>
        </Stagger>

        <Reveal
          variant="fadeUp"
          delay={0.1}
          className="mt-16 flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-white/45 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:text-[0.8rem]"
        >
          <p>© 2026 {brand.shortName}. All rights reserved.</p>
          <p className="sm:text-center">
            <IndiaClock />
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-fit font-medium text-brand-primary transition-opacity hover:opacity-80 sm:text-right"
          >
            Back to top
          </button>
        </Reveal>
      </div>

      <Reveal
        variant="fadeUp"
        className="relative z-10 -mb-[0.22em] select-none overflow-hidden pt-4"
      >
        <p
          aria-hidden
          className="w-full text-center font-display text-[clamp(6rem,24vw,18rem)] font-extrabold leading-none tracking-[-0.065em]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.22) 40%, rgba(255,255,255,0.03) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Adwide
        </p>
      </Reveal>
    </footer>
  );
}
