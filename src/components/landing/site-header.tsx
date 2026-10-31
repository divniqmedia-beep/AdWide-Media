"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { colorClasses as c } from "@/lib/colors";
import { navLinks } from "@/lib/site-content";

const mobileLinks = [
  { label: "Works", href: "/#works" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/about" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`relative z-50 w-full ${c.bg.page}`}>
      {/* Top Availability Tab */}
      <div className={`flex w-full justify-center ${c.bg.page}`}>
        <div className="header-availability-tab">
          <span
            className="header-availability-ear header-availability-ear-left"
            aria-hidden
          />
          <span
            className="header-availability-ear header-availability-ear-right"
            aria-hidden
          />
          <span className="header-availability-dot" aria-hidden />
          Available for New Projects
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="relative mx-auto flex max-w-[88rem] items-center justify-between px-5 pb-6 pt-4 sm:px-10 sm:pb-8 sm:pt-5 lg:px-16 lg:pb-9 lg:pt-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className={`relative z-10 shrink-0 font-display text-[1.75rem] font-bold leading-none tracking-[-0.02em] sm:text-[1.9rem] ${c.text.brand}`}
        >
          Adwide.
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex lg:gap-12"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9375rem] font-medium text-header-nav transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA / Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop 'Get Started' Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex h-[2.65rem] min-w-[6.75rem] items-center justify-center rounded-full bg-header-cta px-7 text-[0.9375rem] font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-[transform,box-shadow] duration-200 hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)] active:scale-[0.98]"
          >
            Get Started
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="flex size-10 items-center justify-center rounded-full text-text-primary hover:bg-black/5 active:scale-95 transition-all md:hidden"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Dimmed Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
              aria-hidden
            />

            {/* Menu Card Content (Matches screenshot) */}
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full overflow-hidden rounded-b-[2rem] bg-white shadow-[0_24px_60px_-15px_rgba(0,0,0,0.25)]"
            >
              {/* Notched Availability Tab at top of card */}
              <div className="flex w-full justify-center bg-white pt-0">
                <div className="header-availability-tab">
                  <span
                    className="header-availability-ear header-availability-ear-left !bg-white"
                    aria-hidden
                  />
                  <span
                    className="header-availability-ear header-availability-ear-right !bg-white"
                    aria-hidden
                  />
                  <span className="header-availability-dot" aria-hidden />
                  Available for New Projects
                </div>
              </div>

              {/* Card Inner Content */}
              <div className="px-6 pb-8 pt-4 sm:px-8 sm:pb-9">
                {/* Top Row: Brand Logo + Close '✕' Button */}
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-[1.75rem] font-bold leading-none tracking-[-0.02em] ${c.text.brand}`}
                  >
                    Adwide.
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close navigation menu"
                    className="flex size-10 items-center justify-center rounded-full text-[#333333] hover:bg-black/5 active:scale-95 transition-colors"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* Vertical Links List: Works, Services, About, Blog */}
                <nav
                  className="mt-8 flex flex-col space-y-6"
                  aria-label="Mobile Navigation"
                >
                  {mobileLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[1.125rem] font-normal text-[#5c5c5c] transition-colors hover:text-[#111111]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Bottom Full-width Dark Contact Pill Button */}
                <div className="mt-8 pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex h-[3.25rem] w-full items-center justify-center rounded-full bg-[#3f3f3f] text-[0.9375rem] font-semibold text-white shadow-sm transition-colors hover:bg-[#282828] active:scale-[0.99]"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
