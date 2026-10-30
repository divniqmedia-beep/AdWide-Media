import { colorClasses as c } from "@/lib/colors";

type PartnerLogoProps = {
  variant: 1 | 2 | 3 | 4 | 5 | 6;
};

function PartnerLogo({ variant }: PartnerLogoProps) {
  const fill = "currentColor";

  if (variant === 1) {
    return (
      <svg width="128" height="28" viewBox="0 0 128 28" aria-hidden className="h-7 w-auto">
        <circle cx="14" cy="14" r="10" fill={fill} />
        <text x="32" y="19" fill={fill} fontSize="14" fontWeight="600" fontFamily="system-ui">
          Logoipsum
        </text>
      </svg>
    );
  }

  if (variant === 2) {
    return (
      <svg width="128" height="28" viewBox="0 0 128 28" aria-hidden className="h-7 w-auto">
        <path d="M6 22V6h8l6 10 6-10h8v16h-6V14l-6 10-6-10v8H6z" fill={fill} />
        <text x="52" y="19" fill={fill} fontSize="14" fontWeight="600" fontFamily="system-ui">
          Logoipsum
        </text>
      </svg>
    );
  }

  if (variant === 3) {
    return (
      <svg width="128" height="28" viewBox="0 0 128 28" aria-hidden className="h-7 w-auto">
        <rect x="4" y="6" width="16" height="16" rx="4" fill={fill} />
        <text x="28" y="19" fill={fill} fontSize="14" fontWeight="600" fontFamily="system-ui">
          Logoipsum
        </text>
      </svg>
    );
  }

  if (variant === 4) {
    return (
      <svg width="128" height="28" viewBox="0 0 128 28" aria-hidden className="h-7 w-auto">
        <path d="M14 4l10 20H4L14 4zm0 6.5L9.5 20h9L14 10.5z" fill={fill} />
        <text x="32" y="19" fill={fill} fontSize="14" fontWeight="600" fontFamily="system-ui">
          Logoipsum
        </text>
      </svg>
    );
  }

  if (variant === 5) {
    return (
      <svg width="128" height="28" viewBox="0 0 128 28" aria-hidden className="h-7 w-auto">
        <path
          d="M4 14c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10S4 19.5 4 14zm10-6a6 6 0 100 12 6 6 0 000-12z"
          fill={fill}
        />
        <text x="32" y="19" fill={fill} fontSize="14" fontWeight="600" fontFamily="system-ui">
          Logoipsum
        </text>
      </svg>
    );
  }

  return (
    <svg width="128" height="28" viewBox="0 0 128 28" aria-hidden className="h-7 w-auto">
      <path d="M8 8h4v4H8V8zm8 0h4v4h-4V8zm-8 8h4v4H8v-4zm8 0h4v4h-4v-4z" fill={fill} />
      <text x="32" y="19" fill={fill} fontSize="14" fontWeight="600" fontFamily="system-ui">
        Logoipsum
      </text>
    </svg>
  );
}

const LOGO_VARIANTS = [1, 2, 3, 4, 5, 6] as const;

/** Two identical sequences for seamless -50% loop (scrolls right → left). */
const marqueeLogos = [...LOGO_VARIANTS, ...LOGO_VARIANTS];

export function PartnerLogoStrip() {
  return (
    <div
      className={`relative w-full overflow-hidden py-11 sm:py-14 ${c.bg.page} ${c.text.secondary}`}
      aria-label="Partner brands"
    >
      <div className="marquee-fade-edges overflow-hidden">
        <div className="marquee-track-rtl flex w-max items-center gap-16 will-change-transform sm:gap-24 md:gap-28">
          {marqueeLogos.map((variant, index) => (
            <div
              key={`logo-${variant}-${index}`}
              className="flex shrink-0 items-center opacity-[0.72]"
            >
              <PartnerLogo variant={variant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
