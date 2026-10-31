import { colorClasses as c } from "@/lib/colors";
import { DualTickerSection } from "./dual-ticker-section";
import { ShowcaseSection } from "./showcase-section";
import { ContactSection } from "./contact-section";
import { FaqSection } from "./faq-section";
import { FoundersSection } from "./founders-section";
import { HeroSection } from "./hero-section";
import { ServicesSection } from "./services-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { StatementSection } from "./statement-section";
import { StatsTestimonialsSection } from "./stats-testimonials-section";
import { WorksSection } from "./works-section";

export function LandingShell() {
  return (
    <div id="top" className={`flex min-h-full flex-1 flex-col ${c.bg.page} ${c.text.primary}`}>
      <SiteHeader />
      <main>
        <HeroSection />
        <ShowcaseSection />
        <DualTickerSection />
        <StatementSection />
        <StatsTestimonialsSection />
        <WorksSection />
        <ServicesSection />
        {/* <FoundersSection />  */}
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
