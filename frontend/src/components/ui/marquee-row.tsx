import { colorClasses as c } from "@/lib/colors";

type MarqueeRowProps = {
  items: readonly string[];
  reverse?: boolean;
  icon?: string;
};

export function MarqueeRow({ items, reverse = false, icon = "✦" }: MarqueeRowProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden border-y py-4 ${c.border.default} ${c.bg.page}`}>
      <div
        className={`flex w-max gap-10 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        {doubled.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={`flex shrink-0 items-center gap-3 text-sm font-medium ${c.text.secondary}`}
          >
            <span className={c.text.brand} aria-hidden>
              {icon}
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
