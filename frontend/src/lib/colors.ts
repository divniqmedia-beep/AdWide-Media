/**
 * Centralized semantic color classes — import these instead of ad-hoc Tailwind colors.
 */

export const colorClasses = {
  bg: {
    page: "bg-surface-page",
    elevated: "bg-surface-elevated",
    muted: "bg-surface-muted",
    card: "bg-surface-card",
    inverse: "bg-surface-inverse",
    brand: "bg-brand-primary",
    accent: "bg-brand-accent",
  },
  text: {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    muted: "text-text-muted",
    inverse: "text-text-inverse",
    onBrand: "text-brand-primary-foreground",
    onAccent: "text-brand-accent-foreground",
    brand: "text-brand-primary",
  },
  border: {
    default: "border-border-default",
    strong: "border-border-strong",
  },
  ring: {
    focus: "ring-ring-focus",
  },
} as const;

export type ColorClasses = typeof colorClasses;
