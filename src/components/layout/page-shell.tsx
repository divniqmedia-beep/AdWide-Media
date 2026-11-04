import type { ReactNode } from "react";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import { colorClasses as c } from "@/lib/colors";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className={`flex min-h-full flex-1 flex-col ${c.bg.page} ${c.text.primary}`}>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <BackToTopButton />
    </div>
  );
}
