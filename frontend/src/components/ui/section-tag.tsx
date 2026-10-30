import type { ReactNode } from "react";
import { colorClasses as c } from "@/lib/colors";

type SectionTagProps = {
  children: ReactNode;
  className?: string;
};

export function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <p className={`text-sm ${c.text.muted} ${className}`}>{children}</p>
  );
}
