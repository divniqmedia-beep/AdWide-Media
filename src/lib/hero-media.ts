/**
 * Hero imagery — Unsplash-sourced assets (bundled under /public/hero for reliable loading).
 * Remote URLs are listed in comments for attribution swaps.
 */

export const heroFounderAvatars = [
  { src: "/hero/founder-1.jpg", alt: "Founder portrait" },
  { src: "/hero/founder-2.jpg", alt: "Founder portrait" },
  { src: "/hero/founder-3.jpg", alt: "Founder portrait" },
] as const;

export const heroInlineMedia = {
  phone: {
    src: "/hero/inline-phone.jpg",
    alt: "Mobile content preview",
  },
  workspace: {
    src: "/hero/inline-laptop.jpg",
    alt: "Creative team at work",
  },
  landmark: {
    src: "/hero/inline-landmark.png",
    alt: "London landmark",
  },
} as const;
