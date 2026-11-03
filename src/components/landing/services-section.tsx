"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { colorClasses as c } from "@/lib/colors";
import { services } from "@/lib/site-content";

function ServiceIcon({ id, className = "size-5" }: { id: string; className?: string }) {
  switch (id) {
    case "brand-identity":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
          <path d="M7 7h.01" />
        </svg>
      );
    case "content-production":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="m22 8-6 4 6 4V8Z" />
          <rect width="14" height="12" x="2" y="6" rx="2" />
        </svg>
      );
    case "short-form":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "ugc":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "influencer":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="m3 11 18-5v12L3 13v-2z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      );
    case "social":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "performance-strategy":
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <line x1="12" x2="12" y1="20" y2="10" />
          <line x1="18" x2="18" y1="20" y2="4" />
          <line x1="6" x2="6" y1="20" y2="14" />
        </svg>
      );
  }
}

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll-linked progress tracking for changing cards on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = services.length;
    const clamped = Math.max(0, Math.min(0.999, latest));
    const nextIndex = Math.min(total - 1, Math.floor(clamped * total));
    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  });

  const active = services[activeIndex] ?? services[0];

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + ((idx + 0.25) / services.length) * totalScroll;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section id="services" className={`relative ${c.bg.page}`}>
      {/* Scroll-driven height: 55vh per service allows a smooth, controlled scroll experience */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${Math.max(300, services.length * 60)}vh` }}
      >
        {/* Sticky viewport stage */}
        <div className="sticky top-0 flex min-h-screen w-full flex-col justify-center px-4 py-12 sm:px-6 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            {/* Header: What we do */}
            <div className="mb-10 sm:mb-14 text-center">
              <h2 className="font-display text-[clamp(2.5rem,5.5vw,72px)] font-normal leading-[1.1] tracking-normal text-[#111111]">
                What we <span className="text-brand-primary">do</span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-text-muted font-sans leading-relaxed">
                End-to-end brand and growth solutions that make your brand stand out.
              </p>
            </div>

            {/* Main Interactive Stage: Left Stepper Navigation + Right Showcase Card */}
            <div className="grid gap-8 lg:grid-cols-[minmax(280px,360px)_minmax(0,1fr)] lg:gap-14 xl:gap-20 items-center">
              {/* Left Column: Vertical Timeline Track & Nav Items */}
              <div className="relative">
                {/* Continuous Vertical Timeline Track */}
                <div
                  aria-hidden
                  className="absolute left-[7px] sm:left-[9px] top-6 bottom-6 w-[2px] bg-[#e6e6e6]"
                />

                <div className="flex flex-col space-y-2">
                  {services.map((service, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <div key={service.id} className="relative flex items-center pl-7 sm:pl-8">
                        {/* Timeline Dot */}
                        <div
                          aria-hidden
                          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
                        >
                          {isActive ? (
                            <motion.span
                              layoutId="activeDot"
                              className="size-3.5 sm:size-4 rounded-full bg-brand-primary ring-4 ring-brand-primary/20 shadow-sm"
                              transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            />
                          ) : (
                            <span className="size-2 sm:size-2.5 rounded-full bg-[#c8c8c8] border border-white" />
                          )}
                        </div>

                        {/* Service Item Button */}
                        <button
                          type="button"
                          onClick={() => handleSelect(index)}
                          className={`w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl transition-all duration-200 text-left cursor-pointer ${
                            isActive
                              ? "bg-[#FFF0E6] text-brand-primary shadow-xs font-semibold"
                              : "bg-transparent text-[#262626] hover:bg-black/[0.03] font-medium"
                          }`}
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <ServiceIcon
                              id={service.id}
                              className={`size-5 shrink-0 transition-colors ${
                                isActive ? "text-brand-primary" : "text-[#404040]"
                              }`}
                            />
                            <span className="truncate text-sm sm:text-base">
                              {service.title}
                            </span>
                          </div>

                          {isActive && (
                            <span
                              aria-hidden
                              className="text-brand-primary text-base leading-none font-bold ml-2 shrink-0"
                            >
                              →
                            </span>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Active Service Showcase Card */}
              <div className="w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col"
                  >
                    {/* Image Card */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#141414] shadow-[0_16px_44px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                      <Image
                        src={active.image}
                        alt={active.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 760px"
                        priority
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Description */}
                    <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#4a4a4a] leading-relaxed font-sans max-w-xl">
                      {active.caption}
                    </p>

                    {/* CTA Link to detail page */}
                    <div className="mt-4 sm:mt-5">
                      <Link
                        href={`/services/${active.id}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-brand-primary transition-all hover:gap-3"
                      >
                        <span>VIEW {active.title} DETAILS</span>
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
