import Link from "next/link";
import { colorClasses as c } from "@/lib/colors";
import { navLinks } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className={`relative z-50 w-full ${c.bg.page}`}>
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

      <div className="relative mx-auto flex max-w-[88rem] items-center px-6 pb-8 pt-5 sm:px-10 lg:px-16 lg:pb-9 lg:pt-6">
        <Link
          href="/"
          className={`relative z-10 shrink-0 font-display text-[1.75rem] font-extrabold leading-none tracking-[-0.02em] sm:text-[1.9rem] ${c.text.brand}`}
        >
          Adwide.
        </Link>

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

        <div className="ml-auto flex items-center gap-3">
          <nav className="flex items-center gap-5 md:hidden" aria-label="Primary mobile">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-header-nav"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex h-[2.65rem] min-w-[6.75rem] items-center justify-center rounded-full bg-header-cta px-7 text-[0.9375rem] font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-[transform,box-shadow] duration-200 hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)] active:scale-[0.98]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
