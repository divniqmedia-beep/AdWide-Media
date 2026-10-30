export const brand = {
  name: "Adwide Media",
  shortName: "Adwide",
  tagline: "Marketing that moves you forward",
  phone: "+91 98106 38601",
  phoneHref: "tel:+919810638601",
  whatsappHref: "https://wa.me/919810638601",
  email: "businessadwide@gmail.com",
  emailHref: "mailto:businessadwide@gmail.com",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;

export const heroContent = {
  eyebrow: "Trusted by founders.",
  headline: "Marketing that moves you forward",
  description:
    "Adwide Media helps India's D2C and lifestyle brands grow with premium production, viral short-form content, UGC, and influencer campaigns, all backed by performance-driven strategy.",
  primaryCta: { label: "Get Started", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/work" },
} as const;

export const aboutHero = {
  line1Lead: "Meet Adwide",
  line1Accent: "Bold Ideas",
  line2Muted: "Real Impact",
  line2End: "Driven",
  description:
    "Shaping modern Indian brands through creative storytelling, production, and performance. At Adwide, growth isn't just a buzzword — it's our foundation.",
  cta: { label: "View Projects", href: "/work" },
} as const;

export const aboutShort =
  "Adwide Media is a digital growth agency helping modern Indian brands scale across social channels. Founded by growth strategists Hardik and Mihir, we combine creative storytelling with performance-backed strategy to turn attention into measurable business results. From brand identity and viral short-form content to UGC ecosystems and full-scale influencer marketing, we deliver end-to-end growth solutions for consumer, lifestyle, and D2C brands. Our focus is simple: build brands that look great and convert.";

export const aboutLong =
  "Adwide Media was founded by digital growth strategists Hardik and Mihir to redefine how modern brands scale across social channels. After launching and executing high-impact campaigns across consumer, lifestyle, and D2C categories, we expanded into end-to-end growth solutions: brand identity development, viral short-form content, and full-scale influencer marketing. We combine creative storytelling with performance-backed content strategies, bridging the gap between aesthetic branding and measurable business ROI. We specialize in high-converting visual grids, UGC ecosystems, and strategic creator partnerships that position brands for long-term category leadership in India's evolving digital landscape.";

export const aboutSection =
  "Adwide Media was founded by digital growth strategists Hardik and Mihir to redefine how modern brands scale across social channels. We combine creative storytelling with performance-backed strategy, and we're proud to be the best in production. From brand identity and viral short-form content to UGC ecosystems and influencer campaigns, we help India's D2C and lifestyle brands look premium, convert better, and lead their categories.";

export const mission =
  "To help Indian brands grow faster and smarter by turning creative content and creator partnerships into measurable business results.";

export const vision =
  "To become India's most trusted digital growth partner, known for building brands that lead their categories both online and in culture.";

export const usp =
  "We blend creative storytelling with performance data, so every piece of content looks great and drives results. As a one-stop partner, we handle everything from brand identity and short-form content to UGC and influencer campaigns, all built specifically for the Indian D2C and lifestyle market.";

export const clientLogos = [
  "D2C Collective",
  "Bloom India",
  "Nova Retail",
  "Lifestyle Co.",
  "Scale Studio",
  "Creator Hub",
] as const;

export const serviceTicker = [
  "Brand Identity",
  "Content Production",
  "Short-Form Content",
  "UGC Ecosystems",
  "Influencer Marketing",
  "Social Media",
  "Performance Strategy",
] as const;

/** Orange diagonal ribbon */
export const serviceRibbonItems = [
  "Brand Identity",
  "Content Production",
  "Influencer Marketing",
] as const;

/** Black diagonal ribbon */
export const credRibbonItems = [
  "Digital Growth Agency",
  "Premium Production",
  "Performance-Backed Strategy",
] as const;

export const capabilityTags = [
  "Branding",
  "Content",
  "UGC",
  "Influencers",
  "Social",
  "Strategy",
] as const;

export const statementEyebrow = "(Growth)";

export const statementHeadline = usp;

export const statementCapabilityPills = [
  { label: "Branding", icon: "star" as const },
  { label: "Content", icon: "globe" as const },
  { label: "UGC", icon: "users" as const },
  { label: "Influencers", icon: "spark" as const },
  { label: "Social", icon: "grid" as const },
  { label: "Strategy", icon: "compass" as const },
] as const;

export const testimonialsSectionTag = "(Why clients choose Adwide)";

export const stats = [
  { value: "120+", label: "Campaigns delivered" },
  { value: "94%", label: "Client satisfaction rate" },
  { value: "50M+", label: "Views generated" },
] as const;

export const testimonials = [
  {
    quote:
      "Adwide turned our brand story into scroll-stopping content. Creative quality and performance both improved within weeks.",
    name: "Priya Sharma",
    role: "Founder, Bloom India",
    imageAlt: "Team collaborating in a modern office",
  },
  {
    quote:
      "Clear, thoughtful, and fast — the team made our launch campaign feel effortless from brief to go-live.",
    name: "Olivia Tran",
    role: "Creative Director, Bloom Agency",
    imageAlt: "Premium product packaging and brand materials",
  },
  {
    quote:
      "Premium production with data-backed optimization — our conversions finally matched the look and feel of our brand.",
    name: "Sneha Kapoor",
    role: "Marketing Lead, Lifestyle Co.",
    imageAlt: "Creative workspace with campaign planning",
  },
] as const;

export const worksSectionTag = "(Selected work)";

export const worksIntro =
  "We've helped businesses across industries achieve their goals. Here are some of our selected works.";

export const workHero = {
  line1Lead: "Our Work",
  line1Accent: "In Motion",
  line2Muted: "Selected",
  line2End: "Campaigns",
  description:
    "From brand films and viral short-form to UGC and influencer campaigns — here's how Adwide helps Indian D2C and lifestyle brands grow.",
  cta: { label: "Get Started", href: "/contact" },
} as const;

export const works = [
  {
    title: "Bloom India",
    year: "2025",
    role: "Growth Partner",
    services: ["Brand Film", "UGC", "Meta Ads", "Social"],
    description:
      "We helped a D2C skincare brand scale with premium video, creator-led content, and performance campaigns.",
  },
  {
    title: "Nova Retail",
    year: "2024",
    role: "Creative Lead",
    services: ["Identity", "Short-form", "Influencers", "Strategy"],
    description:
      "We've partnered with businesses across various industries to help them achieve their goals.",
  },
  {
    title: "Creator Hub",
    year: "2024",
    role: "Content Studio",
    services: ["Production", "Editing", "Paid Social", "Reporting"],
    description:
      "We collaborated with teams from diverse sectors to turn vision into high-performing creative at scale.",
  },
] as const;

export const servicesSectionTag = "(Services)";

export const servicesHero = {
  line1Lead: "Our Creative",
  line1Accent: "Services",
  line2Muted: "Excellence",
  line2End: "Delivered",
  description:
    "Brand identity, premium production, viral short-form, UGC, and influencer campaigns — end-to-end growth services built for Indian D2C and lifestyle brands.",
  cta: { label: "Get Started", href: "/contact" },
} as const;

export const services = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    caption:
      "Logos, visual language, and brand voice that make your brand stand out and stay memorable across every touchpoint.",
    image: "/works/bloom-india.jpg",
    imageAlt: "Brand identity project preview",
    tags: ["Visual Identity", "Brand Voice", "Guidelines"],
  },
  {
    id: "content-production",
    title: "Content Production",
    caption:
      "Premium, high-quality photo and video production built to stop the scroll and drive action for campaigns and always-on content.",
    image: "/works/nova-retail.jpg",
    imageAlt: "Content production project preview",
    tags: ["Photo", "Video", "Creative Direction"],
  },
  {
    id: "short-form",
    title: "Viral Short-Form",
    caption:
      "Reels and shorts designed around trends and storytelling to maximize reach, engagement, and shareability.",
    image: "/works/creator-hub.jpg",
    imageAlt: "Short-form content project preview",
    tags: ["Reels", "Trends", "Storytelling"],
  },
  {
    id: "ugc",
    title: "UGC Ecosystems",
    caption:
      "Authentic user-generated content systems that build trust, social proof, and lift conversions across funnels.",
    image: "/works/bloom-india.jpg",
    imageAlt: "UGC content project preview",
    tags: ["Creator UGC", "Social Proof", "Conversion"],
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    caption:
      "End-to-end creator campaigns, from selecting the right creators to managing delivery and measuring results.",
    image: "/works/nova-retail.jpg",
    imageAlt: "Influencer marketing project preview",
    tags: ["Creator Seeding", "Campaign Ops", "Reporting"],
  },
  {
    id: "social",
    title: "Social Media",
    caption:
      "High-converting visual grids and consistent content planning that grow your community and brand presence.",
    image: "/works/creator-hub.jpg",
    imageAlt: "Social media management preview",
    tags: ["Content Grid", "Planning", "Community"],
  },
  {
    id: "performance-strategy",
    title: "Performance Strategy",
    caption:
      "Data-led creative planning that links your content to measurable business ROI and category growth.",
    image: "/works/bloom-india.jpg",
    imageAlt: "Performance strategy project preview",
    tags: ["Analytics", "Creative Testing", "ROI"],
  },
] as const;

export const processSteps = [
  {
    title: "Discovery",
    description: "We learn your brand, audience, and goals.",
  },
  {
    title: "Strategy",
    description: "We build a content and growth plan tied to measurable results.",
  },
  {
    title: "Production",
    description: "Our team creates premium content, from shoots to edits.",
  },
  {
    title: "Distribution",
    description: "We launch across social channels and creator partnerships.",
  },
  {
    title: "Optimization",
    description: "We track performance and refine to maximize ROI.",
  },
] as const;

export const founders = [
  {
    name: "Hardik Gupta",
    firstName: "Hardik",
    heading: "The Founder",
    bio: "Hardik is a digital growth strategist and co-founder of Adwide Media. He focuses on creative storytelling, brand identity, and premium production that helps Indian D2C and lifestyle brands look great and convert.",
    image: "/team/1.jpg",
    imageAlt: "Hardik Gupta, co-founder of Adwide Media",
    seal: "Award Winning Designer · Award Winning Designer · ",
    socials: [
      { label: "X", href: "#", icon: "x" as const },
      { label: "Website", href: "/", icon: "globe" as const },
      { label: "Instagram", href: "#", icon: "instagram" as const },
    ],
    experience: [
      { role: "Co-founder at Adwide Media", period: "2024–Now" },
      { role: "Creative Director", period: "2022–2024" },
      { role: "Brand Designer", period: "2019–2022" },
      { role: "Junior Designer", period: "2016–2019" },
    ],
  },
  {
    name: "Mihir",
    firstName: "Mihir",
    heading: "The Founder",
    bio: "Mihir is a digital growth strategist and co-founder of Adwide Media. He leads performance-backed content strategy, UGC ecosystems, and influencer campaigns that turn attention into measurable business results.",
    image: "/team/2.jpg",
    imageAlt: "Mihir, co-founder of Adwide Media",
    seal: "Growth Marketing Lead · Growth Marketing Lead · ",
    socials: [
      { label: "X", href: "#", icon: "x" as const },
      { label: "Website", href: "/", icon: "globe" as const },
      {
        label: "Instagram",
        href: "https://www.instagram.com/mihir_g/",
        icon: "instagram" as const,
      },
    ],
    experience: [
      { role: "Co-founder at Adwide Media", period: "2024–Now" },
      { role: "Performance Marketing Lead", period: "2021–2024" },
      { role: "Growth Strategist", period: "2018–2021" },
      { role: "Digital Marketer", period: "2015–2018" },
    ],
  },
] as const;

export const faqs = [
  {
    question: "What does Adwide Media do?",
    answer:
      "We are a digital growth agency offering brand identity, premium content production, viral short-form content, UGC, and influencer marketing for D2C and lifestyle brands.",
  },
  {
    question: "Which types of brands do you work with?",
    answer:
      "We work with consumer, lifestyle, and D2C brands looking to scale across social channels.",
  },
  {
    question: "Do you handle content production in-house?",
    answer:
      "Yes, production is our biggest strength. We handle shoots, edits, and creative direction to deliver premium, scroll-stopping content.",
  },
  {
    question: "How do you measure results?",
    answer:
      "We track performance metrics such as reach, engagement, and conversions, and tie them back to your business goals.",
  },
  {
    question: "Can you manage influencer campaigns end to end?",
    answer:
      "Yes. We handle creator selection, outreach, content delivery, and performance reporting.",
  },
  {
    question: "How do we get started?",
    answer:
      'Click "Get Started" or contact us, and our team will schedule a discovery call to understand your brand and goals.',
  },
] as const;

export const contactContent = {
  sectionTag: "(Contact)",
  heading: "Ready to Scale Your Brand?",
  description:
    "Let's create premium content and creator campaigns that look great and drive real results.",
  buttonLabel: "Book a Free Call",
  formNameLabel: "Your name",
  formEmailLabel: "Your email",
  formMessageLabel: "Project description",
  formMessagePlaceholder: "Tell us about your brand and goals...",
} as const;

export const footerContent = {
  blurb:
    "India's trusted digital growth partner for D2C and lifestyle brands — creative storytelling with performance at the core.",
} as const;

export const privacyPolicy = {
  title: "Privacy Policy",
  updated: "October 29, 2026",
  intro:
    "This Privacy Policy explains how Adwide Media collects, uses, and protects information when you visit our website or work with us. By using our site or services, you agree to the practices described here.",
  sections: [
    {
      heading: "Information we collect",
      body: "We may collect personal details you share through forms or direct contact, including your name, email address, phone number, brand name, and project notes. We also collect basic technical data such as browser type, device information, and pages visited to improve site performance.",
    },
    {
      heading: "How we use your information",
      body: "We use your information to respond to enquiries, schedule discovery calls, deliver services, send project updates, and improve our website and marketing. We do not sell your personal information to third parties.",
    },
    {
      heading: "Cookies and analytics",
      body: "Our website may use cookies or similar technologies to understand traffic patterns and improve user experience. You can control cookies through your browser settings. Disabling cookies may affect some site features.",
    },
    {
      heading: "Data sharing",
      body: "We may share information with trusted vendors who help us operate our business, such as hosting, email, or analytics providers. These partners are expected to protect your data and use it only for the services they provide to us.",
    },
    {
      heading: "Data retention and security",
      body: "We retain information only as long as needed for business, legal, or communication purposes. We take reasonable technical and organisational measures to protect your data, though no method of transmission over the internet is fully secure.",
    },
    {
      heading: "Your choices",
      body: "You may request access, correction, or deletion of your personal information by emailing us. If you subscribed to updates, you can opt out at any time using the contact details below.",
    },
    {
      heading: "Contact",
      body: "For privacy questions, contact Adwide Media at businessadwide@gmail.com or +91 98106 38601.",
    },
  ],
} as const;

export const termsAndConditions = {
  title: "Terms & Conditions",
  updated: "October 29, 2026",
  intro:
    "These Terms & Conditions govern your use of the Adwide Media website and our services. By accessing our site or engaging us for work, you agree to these terms.",
  sections: [
    {
      heading: "Services",
      body: "Adwide Media provides brand identity, content production, short-form content, UGC, influencer marketing, social media management, and performance-backed strategy for D2C, consumer, and lifestyle brands. Project scope, timelines, and fees are confirmed in a written proposal or agreement before work begins.",
    },
    {
      heading: "Client responsibilities",
      body: "Clients agree to provide timely feedback, brand assets, product access, and approvals needed to deliver the work. Delays in client input may affect timelines and delivery dates.",
    },
    {
      heading: "Intellectual property",
      body: "Unless otherwise agreed in writing, final deliverables created for a client and paid in full become the client's property. Adwide Media retains the right to showcase completed work in portfolios, case studies, and marketing materials unless a confidentiality agreement says otherwise.",
    },
    {
      heading: "Payments",
      body: "Payment schedules are outlined in each proposal. Invoices are due as stated. Late payments may pause ongoing work. Fees already paid for completed phases are generally non-refundable.",
    },
    {
      heading: "Revisions and approvals",
      body: "Each project includes the revision rounds defined in the proposal. Additional revisions or out-of-scope requests may be billed separately. Client approval of drafts, edits, or published assets confirms acceptance of that stage.",
    },
    {
      heading: "Limitation of liability",
      body: "Adwide Media works in good faith to deliver high-quality creative and growth services. We are not liable for indirect, incidental, or consequential damages arising from use of our website or services. Our total liability for any engagement is limited to the fees paid for that engagement.",
    },
    {
      heading: "Website use",
      body: "You may not misuse this website, attempt unauthorised access, or copy site content for commercial use without permission. All trademarks, logos, and site materials remain the property of Adwide Media or their respective owners.",
    },
    {
      heading: "Changes and contact",
      body: "We may update these terms from time to time. Continued use of the site after changes means you accept the revised terms. For questions, contact businessadwide@gmail.com or +91 98106 38601.",
    },
  ],
} as const;
