export type ServiceDeliverable = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  image: string;
  imageAlt: string;
  tags: readonly string[];
  deliverables: readonly ServiceDeliverable[];
  workflow: readonly { step: string; title: string; description: string }[];
  idealFor: string;
  outcome: string;
};

export const serviceDetails: readonly ServiceDetail[] = [
  {
    id: "brand-identity",
    slug: "brand-identity",
    title: "Brand Identity",
    tagline: "Distinctive visual systems and brand guidelines built for modern consumer brands.",
    overview:
      "We design complete identity systems from scratch — logos, typography, color palettes, and voice guidelines that ensure your brand feels cohesive, premium, and unforgettable across every physical and digital touchpoint.",
    image: "/works/bloom-india.jpg",
    imageAlt: "Brand Identity visual system preview",
    tags: ["Visual Identity", "Brand Voice", "Design System", "Guidelines"],
    deliverables: [
      {
        title: "Logo Architecture",
        description: "Primary mark, secondary badge, and responsive sub-marks tailored for all screen sizes.",
      },
      {
        title: "Color & Typography",
        description: "Distinctive color palette and bespoke typography scale engineered for digital legibility.",
      },
      {
        title: "Visual Asset Library",
        description: "Custom patterns, iconography, and graphic accents to enrich marketing collateral.",
      },
      {
        title: "Brand Guidelines",
        description: "Comprehensive style manual ensuring absolute consistency for in-house teams and creator partners.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Discovery & Archetype",
        description: "We define your market positioning, competitor white space, and brand personality.",
      },
      {
        step: "02",
        title: "Concept Exploration",
        description: "We craft two to three distinct creative directions with real-world application mockups.",
      },
      {
        step: "03",
        title: "System Delivery",
        description: "We refine the chosen direction and deliver an organized vector library and style guide.",
      },
    ],
    idealFor: "New brand launches, seed-stage consumer startups, or established companies seeking a category refresh.",
    outcome: "A memorable, unified visual identity that builds customer trust and accelerates brand recall.",
  },
  {
    id: "content-production",
    slug: "content-production",
    title: "Content Production",
    tagline: "High-end studio and lifestyle production crafted to stop the scroll.",
    overview:
      "From high-concept brand films and editorial photography to lifestyle video shoots, we handle end-to-end creative direction, set design, talent casting, and post-production tuned specifically for digital and social distribution.",
    image: "/works/nova-retail.jpg",
    imageAlt: "Content Production campaign preview",
    tags: ["Photo & Video", "Brand Films", "Creative Direction", "Editorial"],
    deliverables: [
      {
        title: "Cinematic Brand Films",
        description: "Hero commercial videos created for YouTube, paid campaigns, and website hero banners.",
      },
      {
        title: "Editorial Product Shoots",
        description: "Crisp studio and on-location product captures optimized for e-commerce and social feeds.",
      },
      {
        title: "Creative Direction & Set Design",
        description: "Full mood-boarding, talent scouting, prop styling, and on-set supervision.",
      },
      {
        title: "Master Post-Production",
        description: "Professional color grading, sound design, sound FX, and multi-ratio exports (16:9, 9:16, 1:1).",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Moodboard & Script",
        description: "We outline shot lists, visual treatments, and voiceover scripts before touching the camera.",
      },
      {
        step: "02",
        title: "Shoot Execution",
        description: "Our production team films on dedicated cinema setups with professional lighting and direction.",
      },
      {
        step: "03",
        title: "Post & Color Grade",
        description: "Fast-turnaround editing, audio mixing, and color grading tuned for mobile screens.",
      },
    ],
    idealFor: "Seasonal campaign launches, hero product drops, and full catalog visual overhauls.",
    outcome: "Scroll-stopping commercial assets that elevate product perceived value and drive purchases.",
  },
  {
    id: "short-form",
    slug: "short-form",
    title: "Viral Short-Form",
    tagline: "Hook-driven Reels and Shorts engineered for algorithmic reach and engagement.",
    overview:
      "We script, record, and edit high-velocity short-form content designed around platform algorithms and cultural trends to turn passive viewers into active community followers and brand advocates.",
    image: "/works/creator-hub.jpg",
    imageAlt: "Viral Short-Form video preview",
    tags: ["Reels & Shorts", "Trend Architecture", "Motion Graphics", "Retention Hooks"],
    deliverables: [
      {
        title: "Retention Hook Frameworks",
        description: "Data-backed first 3-second visual and audio hooks that drop scroll-away rates.",
      },
      {
        title: "Batch Video Shoots",
        description: "Streamlined shoot days yielding 15 to 30 polished videos ready for sequential posting.",
      },
      {
        title: "Fast-Paced Motion Editing",
        description: "Dynamic captions, sound effects, beat transitions, and engaging zoom cuts.",
      },
      {
        title: "Trend Forecasting",
        description: "Weekly tracking of trending audio, memes, and industry formats before saturation.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Angle & Scripting",
        description: "We brainstorm high-retention concepts and write conversational 30-45s scripts.",
      },
      {
        step: "02",
        title: "High-Volume Capture",
        description: "We record in batches to maintain consistent visual quality and storytelling voice.",
      },
      {
        step: "03",
        title: "Platform Polish",
        description: "We edit with bold kinetic captions, SFX, and platform-native formats for instant traction.",
      },
    ],
    idealFor: "Brands seeking consistent organic growth on Instagram Reels, YouTube Shorts, and TikTok.",
    outcome: "Exponentially higher reach, increased profile visits, and lower customer acquisition costs.",
  },
  {
    id: "ugc",
    slug: "ugc",
    title: "UGC Ecosystems",
    tagline: "Authentic creator-led content systems that build trust and lift funnel conversions.",
    overview:
      "We source, brief, and coordinate authentic creators to produce user-generated content that looks native, builds instant social proof, and powers high-converting paid ad funnels.",
    image: "/works/bloom-india.jpg",
    imageAlt: "UGC Ecosystems creator preview",
    tags: ["Creator UGC", "Social Proof", "Direct Response", "Ad Creative"],
    deliverables: [
      {
        title: "Vetted Creator Roster",
        description: "Handpicked creators whose demographics and aesthetics align with your target audience.",
      },
      {
        title: "Direct-Response Briefs",
        description: "Structured script templates focusing on customer pain points, unboxings, and demonstrations.",
      },
      {
        title: "Ad Variation Formats",
        description: "Multiple hook, body, and CTA variants per creator for seamless A/B ad testing.",
      },
      {
        title: "Full Commercial Rights",
        description: "Perpetual licensing for paid media amplification across Meta, TikTok, and Google Ads.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Creator Matchmaking",
        description: "We select and seed products to vetted creators matching your target customer personas.",
      },
      {
        step: "02",
        title: "Guided Briefing",
        description: "Creators receive structured guidance on key talking points while maintaining natural authenticity.",
      },
      {
        step: "03",
        title: "Iterative Assembly",
        description: "We edit raw creator takes into multiple high-converting ad permutations.",
      },
    ],
    idealFor: "D2C brands running Meta and TikTok ads looking to combat ad fatigue with authentic creative.",
    outcome: "Higher click-through rates, lower cost per acquisition, and increased landing page conversions.",
  },
  {
    id: "influencer",
    slug: "influencer",
    title: "Influencer Marketing",
    tagline: "Strategic creator partnerships delivering measurable reach, credibility, and sales.",
    overview:
      "We build end-to-end influencer campaigns that bridge top-of-funnel brand excitement with bottom-of-funnel conversions. We handle everything from talent scouting to delivery verification and performance reporting.",
    image: "/works/nova-retail.jpg",
    imageAlt: "Influencer Marketing campaign preview",
    tags: ["Creator Seeding", "Campaign Management", "ROI Reporting", "Talent Vetting"],
    deliverables: [
      {
        title: "Data-Driven Creator Scouting",
        description: "Rigorous vetting of follower authenticity, audience demographics, and past campaign ROI.",
      },
      {
        title: "Contracts & Negotiations",
        description: "Full contract administration, deliverable scope enforcement, and usage right negotiations.",
      },
      {
        title: "Product Seeding Logistics",
        description: "Seamless coordination of physical product deliveries, customized PR kits, and tracking.",
      },
      {
        title: "Performance & ROAS Reporting",
        description: "Comprehensive attribution reports tracking views, engagement, clicks, and coupon redemptions.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Campaign Architecture",
        description: "We set target KPIs, core messaging angles, and creator tiers (nano, micro, macro).",
      },
      {
        step: "02",
        title: "Outreach & Onboarding",
        description: "We pitch, negotiate, and brief creators with clear deliverables and publishing schedules.",
      },
      {
        step: "03",
        title: "Go-Live & Tracking",
        description: "We monitor live posts in real-time, boosting top performers with whitelisted creator ads.",
      },
    ],
    idealFor: "Product launches, festive sales pushes, and brands seeking rapid category authority.",
    outcome: "High-trust recommendations from trusted voices that drive spikes in demand and organic search.",
  },
  {
    id: "social",
    slug: "social",
    title: "Social Media",
    tagline: "Curated aesthetic grids and strategic content planning that grow community and loyalty.",
    overview:
      "We transform your social profiles into modern digital flagships. Through intentional feed curation, weekly content calendars, and active community engagement, we build an audience that stays loyal to your brand.",
    image: "/works/creator-hub.jpg",
    imageAlt: "Social Media grid management preview",
    tags: ["Grid Curation", "Content Calendar", "Community Care", "Copywriting"],
    deliverables: [
      {
        title: "Aesthetic Grid Architecture",
        description: "Harmonious visual layouts combining product, lifestyle, quotes, and motion teasers.",
      },
      {
        title: "Monthly Content Calendar",
        description: "Predictable schedule covering product spotlights, behind-the-scenes, and cultural moments.",
      },
      {
        title: "Conversational Copywriting",
        description: "Engaging captions, conversation starters, and relevant hashtag strategies.",
      },
      {
        title: "Community Management",
        description: "Fast responses to comments and DMs to foster genuine consumer relationships.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Audit & Strategy",
        description: "We evaluate your current social channels and design a forward-looking visual identity.",
      },
      {
        step: "02",
        title: "Calendar Planning",
        description: "Monthly batches of creative and copy delivered for client sign-off in advance.",
      },
      {
        step: "03",
        title: "Publish & Engage",
        description: "Scheduled daily distribution and active community interaction during peak hours.",
      },
    ],
    idealFor: "Brands needing a consistent, premium online presence without hiring a full in-house team.",
    outcome: "A vibrant social community that reinforces brand credibility and generates repeat customers.",
  },
  {
    id: "performance-strategy",
    slug: "performance-strategy",
    title: "Performance Strategy",
    tagline: "Data-led creative planning that links your content directly to business revenue.",
    overview:
      "We bridge the gap between creative design and performance media buying. By analyzing conversion data and ad performance, we systematically test visual hooks, messaging angles, and ad formats to maximize your return on ad spend.",
    image: "/works/bloom-india.jpg",
    imageAlt: "Performance Strategy analytics preview",
    tags: ["Creative Testing", "Attribution", "Funnel Analytics", "ROAS Optimization"],
    deliverables: [
      {
        title: "Creative Audit & Diagnostics",
        description: "Granular breakdown of previous ad performance, fatigue trends, and drop-off points.",
      },
      {
        title: "Testing Framework Roadmap",
        description: "Scientific matrix testing variables like first 3s hooks, offers, and visual pacing.",
      },
      {
        title: "Creative Scaling Engine",
        description: "Iterating on winning formats with new twists to prolong campaign profitability.",
      },
      {
        title: "Full-Funnel Reporting",
        description: "Clear executive dashboard tracking spend, CPA, blended ROAS, and customer lifetime value.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Baseline Audit",
        description: "We inspect your ad accounts, pixel health, and historical top-performing creative assets.",
      },
      {
        step: "02",
        title: "Hypothesis Matrix",
        description: "We formulate high-impact creative hypotheses focused on reducing customer acquisition costs.",
      },
      {
        step: "03",
        title: "Scale & Optimize",
        description: "Winning creative concepts are expanded into full campaign funnels to drive revenue.",
      },
    ],
    idealFor: "Growth-stage brands spending on Meta/Google looking to unlock profitable creative scale.",
    outcome: "Consistent paid advertising returns with a sustainable engine for continuous creative testing.",
  },
] as const;

export function getAllServices(): readonly ServiceDetail[] {
  return serviceDetails;
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug || s.id === slug);
}

export function getAdjacentServices(currentSlug: string): {
  prev: ServiceDetail;
  next: ServiceDetail;
} {
  const index = serviceDetails.findIndex((s) => s.slug === currentSlug || s.id === currentSlug);
  const safeIndex = index === -1 ? 0 : index;
  const prevIndex = safeIndex === 0 ? serviceDetails.length - 1 : safeIndex - 1;
  const nextIndex = safeIndex === serviceDetails.length - 1 ? 0 : safeIndex + 1;

  return {
    prev: serviceDetails[prevIndex],
    next: serviceDetails[nextIndex],
  };
}
