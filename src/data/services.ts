export type Service = {
  name: string;
  slug: string;
  shortDescription: string;
  audience: string;
  whyItMatters: string;
  ctaLabel: string;
};

export const services: Service[] = [
  {
    name: "Custom Website Development",
    slug: "custom-websites",
    shortDescription:
      "Modern, fast websites for small businesses, personal brands, authors, and side hustles.",
    audience:
      "Small businesses, personal brands, authors, and side hustles that need a better online presence.",
    whyItMatters:
      "A slow or outdated site costs you trust before anyone reads a word. I build clean, mobile-first sites that load fast and look professional.",
    ctaLabel: "Discuss a website",
  },
  {
    name: "SaaS / Web App Development",
    slug: "saas-web-apps",
    shortDescription:
      "Dashboards, portals, tools, forms, databases, subscriptions, and user-facing apps.",
    audience:
      "People who need dashboards, portals, tools, forms, databases, subscriptions, and user-facing apps.",
    whyItMatters:
      "Off-the-shelf software rarely fits niche workflows. I build focused tools that match how you actually work.",
    ctaLabel: "Talk about your app",
  },
  {
    name: "AI Automation & Workflow Tools",
    slug: "ai-automation",
    shortDescription:
      "Save time with AI, scripts, automations, and smarter business processes.",
    audience:
      "Businesses that want to save time using AI, scripts, automations, and smarter processes.",
    whyItMatters:
      "Repetitive work adds up. Practical automation frees you to focus on what actually moves the needle.",
    ctaLabel: "Explore automation",
  },
  {
    name: "Business Landing Pages",
    slug: "landing-pages",
    shortDescription:
      "High-converting pages for products, books, ads, affiliate offers, and lead capture.",
    audience:
      "Products, books, ads, affiliate offers, lead capture, and service pages.",
    whyItMatters:
      "Traffic without a focused landing page is wasted traffic. I build pages with clear CTAs and fast load times.",
    ctaLabel: "Plan a landing page",
  },
  {
    name: "WordPress Cleanup / Migration",
    slug: "wordpress-migration",
    shortDescription:
      "Clean up, modernize, or rebuild slow WordPress sites into faster custom websites.",
    audience:
      "Existing WordPress sites that need to be cleaned up, modernized, or rebuilt.",
    whyItMatters:
      "Bloated plugins and outdated themes slow everything down. Migration to a modern stack improves speed, security, and maintainability.",
    ctaLabel: "Review my WordPress site",
  },
  {
    name: "Computer & Electronics Troubleshooting",
    slug: "tech-troubleshooting",
    shortDescription:
      "Hands-on tech help — device setup, repair guidance, and practical problem solving.",
    audience:
      "Anyone who needs practical hands-on tech help, device setup, repair guidance, and problem solving.",
    whyItMatters:
      "Tech problems are frustrating when nobody explains them clearly. I troubleshoot systematically and communicate in plain language.",
    ctaLabel: "Get tech help",
  },
  {
    name: "Author / Book Websites",
    slug: "author-websites",
    shortDescription:
      "Home bases for books, audiobook releases, email lists, and sales links.",
    audience:
      "Writers who need a home base for their books, audiobook releases, email lists, and sales links.",
    whyItMatters:
      "Authors need more than an Amazon link. A dedicated site builds your brand and gives readers a place to find everything.",
    ctaLabel: "Build my author site",
  },
  {
    name: "SEO Content Strategy",
    slug: "seo-content",
    shortDescription:
      "Niche websites, affiliate content, coin sites, product pages, and search-focused publishing.",
    audience:
      "Niche websites, affiliate content, coin sites, product pages, and search-focused publishing.",
    whyItMatters:
      "Content without strategy is noise. Research-backed SEO planning helps the right people find your pages.",
    ctaLabel: "Plan content strategy",
  },
];

export function getServicePreview(limit = 3): Service[] {
  return services.slice(0, limit);
}
