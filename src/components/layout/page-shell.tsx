import type { ReactNode } from "react";
import { colorClasses as c } from "@/lib/colors";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className={`flex min-h-full flex-1 flex-col ${c.bg.page} ${c.text.primary}`}>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
