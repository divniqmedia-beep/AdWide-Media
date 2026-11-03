export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  category: "Viral Short-Form" | "UGC Strategy" | "Brand Strategy" | "Influencer Marketing" | "Performance Strategy" | "Social Media";
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featuredImage: string;
  featured?: boolean;
  tags: string[];
};

export const blogCategories = [
  "All",
  "Viral Short-Form",
  "UGC Strategy",
  "Brand Strategy",
  "Influencer Marketing",
  "Performance Strategy",
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "bridging-design-and-development",
    title: "Bridging Design & Development",
    subtitle: "Clean UI into seamless code",
    excerpt:
      "How aligning design systems and component architecture accelerates launch velocity, cuts technical debt, and turns creative mockups into lightning-fast interactive experiences.",
    content: [
      "The gap between design intent and frontend reality is where momentum dies. When designers build in isolated canvases without considering component contracts or responsive dynamics, engineers spend half their sprint interpreting ambiguity rather than shipping value.",
      "At Adwide, we treat design tokens as single sources of truth. Colors, typography scales, spacing grids, and animation curves are exported directly into code variables, ensuring that what was envisioned in Figma renders pixel-accurately in production.",
      "Clean UI must be paired with seamless code. Modern browsers demand fluid layouts, responsive typography clamps, and GPU-accelerated motion that feels as natural as moving physical paper.",
      "By closing the handoff loop, high-growth brands can ship new campaign landing pages and product funnels in hours instead of weeks.",
    ],
    keyTakeaways: [
      "Token-driven design systems bridge the gap between creative teams and engineering.",
      "Fluid clamp typography and CSS variables ensure consistent responsiveness on all screens.",
      "GPU-accelerated animations elevate perceived polish without sacrificing performance.",
    ],
    category: "Brand Strategy",
    readTime: "2 Min Read",
    publishedAt: "Oct 28, 2026",
    author: {
      name: "Mihir",
      role: "Creative Director",
      avatar: "/hero/founder-3.jpg",
    },
    featuredImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tags: ["Design System", "Development", "UI/UX", "Frontend"],
  },
  {
    id: "2",
    slug: "high-performance-website",
    title: "High-Performance Website",
    subtitle: "Principles dev should build with",
    excerpt:
      "Core engineering principles for building sub-second digital storefronts that eliminate bounce rates and maximize paid traffic conversions.",
    content: [
      "A slow website is a conversion killer. Studies consistently show that every 100ms of latency reduction directly improves customer checkout conversion by up to 1.5%.",
      "Building high-performance web experiences requires ruthless asset optimization, edge server rendering, smart prefetching, and progressive image decoding.",
      "In modern D2C performance marketing where thousands of ad dollars drive traffic to landing pages, every millisecond saved translates directly to increased ROAS.",
      "We design every landing page with performance budgets: minimal external scripts, native font loaders, and lightweight Framer motion transitions.",
    ],
    keyTakeaways: [
      "Sub-second page loads directly reduce ad bounce rates and lower customer acquisition cost.",
      "Implement edge caching and optimized image pipelines to guarantee instant mobile delivery.",
      "Enforce strict performance budgets before introducing third-party analytics tags.",
    ],
    category: "Performance Strategy",
    readTime: "3 Min Read",
    publishedAt: "Oct 24, 2026",
    author: {
      name: "Hardik",
      role: "Growth Strategist",
      avatar: "/hero/founder-1.jpg",
    },
    featuredImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Performance", "Core Web Vitals", "Speed", "CRO"],
  },
  {
    id: "3",
    slug: "design-that-converts",
    title: "Design That Converts",
    subtitle: "Strategic visuals drive results",
    excerpt:
      "Why pretty graphics aren't enough: how cognitive hierarchy, directional cues, and value-led contrast turn passive visitors into committed buyers.",
    content: [
      "Design is not merely aesthetic decoration; it is silent salesmanship. When design works strategically, it removes cognitive friction and guides customer attention directly to the primary value proposition.",
      "Strategic visuals leverage natural reading patterns, eye-tracking heatmaps, and high-contrast call-to-action anchors that create unambiguous buying confidence.",
      "When we overhaul visual identity for lifestyle and direct-to-consumer brands, we prioritize clarity over unnecessary complexity. Every typography weight, negative space margin, and product showcase image exists to answer the customer's unspoken question: 'Why should I trust this brand?'",
      "The result is higher on-page dwell time, increased average order value, and predictable scale across organic and paid channels.",
    ],
    keyTakeaways: [
      "Strategic design solves customer hesitation before they ever reach the checkout step.",
      "Use high visual contrast and negative space to direct attention toward conversion triggers.",
      "Cohesive brand aesthetics build the deep customer trust required for premium pricing.",
    ],
    category: "Brand Strategy",
    readTime: "2 Min Read",
    publishedAt: "Oct 20, 2026",
    author: {
      name: "Hardik & Mihir",
      role: "Co-Founders, Adwide Media",
      avatar: "/hero/founder-2.jpg",
    },
    featuredImage: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["CRO", "Branding", "Visual Hierarchy", "D2C"],
  },
  {
    id: "4",
    slug: "creator-seeding-playbook",
    title: "The Creator Seeding Playbook",
    subtitle: "Turning micro-influencers into scalable ROI",
    excerpt:
      "The vetting criteria, outreach templates, and contract terms needed to execute high-ROI creator partnerships without burning campaign budgets.",
    content: [
      "Influencer marketing has evolved beyond paying mega-celebrities for single static posts. The real performance leverage in 2026 lies in structured micro-influencer seeding with performance incentives.",
      "By partnering with creators in the 10k–100k follower range who boast high engagement rates, brands can achieve genuine community penetration and authentic word-of-mouth advocacy.",
      "We build custom PR seeding kits that create organic unboxing excitement. When creators are genuinely delighted by product presentation, their organic endorsement carries immense credibility.",
      "Pairing organic creator posts with Spark Ads or Meta partnership access transforms spontaneous viral moments into repeatable, scalable customer acquisition engines.",
    ],
    keyTakeaways: [
      "Micro-influencers deliver 3x to 5x higher engagement rates than macro-celebrities.",
      "Custom gifting and unboxing experiences organically lift spontaneous sharing by 65%.",
      "Always secure whitelisting permissions to boost top-performing creator posts directly.",
    ],
    category: "Influencer Marketing",
    readTime: "4 Min Read",
    publishedAt: "Oct 15, 2026",
    author: {
      name: "Hardik",
      role: "Growth Strategist",
      avatar: "/hero/founder-1.jpg",
    },
    featuredImage: "/works/creator-hub.jpg",
    featured: false,
    tags: ["Influencer Marketing", "Creator Seeding", "Whitelisting", "ROAS"],
  },
  {
    id: "5",
    slug: "creative-fatigue-and-ad-burnout",
    title: "Creative Fatigue & Ad Burnout",
    subtitle: "Systematically testing hooks at scale",
    excerpt:
      "Why creative is the new targeting in 2026, and how our weekly creative matrix keeps Meta and YouTube campaigns scaling profitably.",
    content: [
      "With automated targeting and AI bidding dominating modern ad networks, audience targeting is no longer your competitive moat. The creative is the targeting.",
      "Ad fatigue strikes faster than ever. A winning ad creative that delivers 4x ROAS in week one often drops below break-even by week four if not continually refreshed with new visual hooks.",
      "Our systematic testing matrix tests 5 new visual hooks against 3 body copy angles every single week. When an angle hits, we iterate on pacing, voiceovers, and thumbnail crops to extend profitable lifespan.",
      "By decoupling the hook from the body and offer, brands can produce 20+ ad permutations from a single production shoot, drastically reducing creative production costs.",
    ],
    keyTakeaways: [
      "Creative is the primary lever for audience segmentation and algorithmic efficiency.",
      "Implement a weekly hook matrix to combat creative fatigue before CPA spikes.",
      "Modular creative production allows 15–20 ad variants from one shoot.",
    ],
    category: "Performance Strategy",
    readTime: "3 Min Read",
    publishedAt: "Oct 10, 2026",
    author: {
      name: "Mihir",
      role: "Creative Director",
      avatar: "/hero/founder-2.jpg",
    },
    featuredImage: "/works/bloom-india.jpg",
    featured: false,
    tags: ["Performance Marketing", "Creative Testing", "Meta Ads", "ROAS"],
  },
  {
    id: "6",
    slug: "aesthetic-grid-planning",
    title: "Aesthetic Grid Planning",
    subtitle: "Designing feeds that convert cult followers",
    excerpt:
      "Treating your social profile as a digital flagship store through intentional cadence, visual contrast, and community rituals.",
    content: [
      "When someone discovers your brand through a viral Reel or an ad, where do they click next? Your profile. Your 9-grid feed is your digital showroom.",
      "A disorganized, chaotic feed creates buyer doubt. A polished, intentional grid communicates authority, quality, and community belonging.",
      "We plan feeds with deliberate visual cadence: alternating product close-ups with lifestyle ambiance, customer testimonials, and educational carousels.",
      "When your grid looks like an aspirational magazine, profile visit-to-follow conversion rates soar, creating a steady organic pipeline for your product drops.",
    ],
    keyTakeaways: [
      "Treat your Instagram profile as a digital flagship that validates brand quality.",
      "Alternate high-contrast product shots with lifestyle and educational assets.",
      "A cohesive visual feed increases profile visitor-to-follow conversion by up to 40%.",
    ],
    category: "Viral Short-Form",
    readTime: "2 Min Read",
    publishedAt: "Oct 05, 2026",
    author: {
      name: "Hardik & Mihir",
      role: "Founders, Adwide Media",
      avatar: "/hero/founder-3.jpg",
    },
    featuredImage: "/works/nova-retail.jpg",
    featured: false,
    tags: ["Social Media", "Feed Curation", "Community", "Instagram"],
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
