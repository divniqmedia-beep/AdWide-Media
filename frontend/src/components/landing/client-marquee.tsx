import { MarqueeRow } from "@/components/ui/marquee-row";
import { clientLogos, serviceTicker } from "@/lib/site-content";

export function ClientMarquee() {
  return (
    <div className="space-y-0">
      <MarqueeRow items={clientLogos} icon="◆" />
      <MarqueeRow items={serviceTicker} reverse icon="✦" />
    </div>
  );
}
