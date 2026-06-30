import { siteConfig } from "./site";

export type ProjectStatus =
  | "Live"
  | "In Development"
  | "Prototype"
  | "Infrastructure Paused"
  | "Planned"
  | "Published / Available Now";

export type Project = {
  name: string;
  slug: string;
  type: string;
  status: ProjectStatus;
  category: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  whatBuilt: string[];
  whatItProves: string[];
  url?: string;
  purchaseUrl?: string;
  image: {
    logo?: string;
    hero?: string;
    screenshots?: string[];
  };
  badges: string[];
  featured: boolean;
  homepagePriority: number;
  isBook?: boolean;
  isAvailableForPurchase?: boolean;
};

export const projects: Project[] = [
  {
    name: "ExtinguisherTracker.com",
    slug: "extinguisher-tracker",
    type: "Life Safety SaaS / Fire Extinguisher Inspection Platform",
    status: "In Development",
    category: "Life Safety SaaS",
    shortDescription:
      "Fire extinguisher inspection and asset tracking — searchable records, pass/fail status, location organization, and cleaner monthly documentation.",
    fullDescription:
      "ExtinguisherTracker is a fire extinguisher inspection and asset tracking platform built to help facilities manage monthly inspections, search extinguisher records faster, track pass/fail status, organize locations, and generate cleaner inspection documentation.",
    problemSolved:
      "Facilities struggle to track fire extinguisher locations, inspection dates, pass/fail status, and compliance records across buildings and floors.",
    whatBuilt: [
      "React + TypeScript web app with mobile-friendly inspection workflows",
      "Firebase/Firestore data model for assets, locations, and inspection history",
      "Search and filter across extinguisher records",
      "Pass/fail tracking with inspection timestamps",
      "SaaS subscription planning with Stripe integration path",
    ],
    whatItProves: [
      "Real-world problem solving",
      "SaaS product thinking",
      "Firebase data modeling",
      "Search and inspection workflows",
      "Life safety domain knowledge",
      "Subscription product planning",
    ],
    url: "https://extinguishertracker.com",
    image: {
      logo: "/media/projects/extinguisher-tracker/extrack.png",
      hero: "/media/projects/extinguisher-tracker/extrker.png",
      screenshots: [
        "/media/projects/extinguisher-tracker/extrack.png",
        "/media/projects/extinguisher-tracker/extrker.png",
      ],
    },
    badges: [
      "React",
      "TypeScript",
      "Firebase",
      "Firestore",
      "SaaS",
      "Stripe",
      "Tailwind",
      "PWA",
      "Life Safety",
    ],
    featured: true,
    homepagePriority: 1,
  },
  {
    name: "DieCastList.com",
    slug: "die-cast-list",
    type: "Collector Inventory App",
    status: "In Development",
    category: "Collector SaaS / Inventory App",
    shortDescription:
      "Inventory platform for die-cast car collectors.",
    fullDescription:
      "A collector-focused inventory platform for die-cast cars that helps users track what they own, what they need, duplicates, photos, lists, and collection progress.",
    problemSolved:
      "Collectors need a simple way to track owned items, wish lists, duplicates, and collection progress without spreadsheets or generic inventory tools.",
    whatBuilt: [
      "Collection inventory with photos and custom lists",
      "Duplicate and need/want tracking workflows",
      "Search, filter, and sort across a growing collection",
      "Firebase-backed user data with SaaS planning",
    ],
    whatItProves: [
      "Inventory app design",
      "User-focused collection workflows",
      "SaaS planning",
      "Search/filter/list features",
      "Niche product thinking",
    ],
    url: "https://diecastlist.com",
    image: {
      logo: "/media/projects/die-cast-list/diecastlist.png",
      hero: "/media/projects/die-cast-list/diecastlist.png",
      screenshots: ["/media/projects/die-cast-list/diecastlist.png"],
    },
    badges: [
      "React",
      "TypeScript",
      "Firebase",
      "Inventory",
      "SaaS",
      "Collectibles",
      "Stripe",
    ],
    featured: true,
    homepagePriority: 2,
  },
  {
    name: "RichOffErrorCoins.com",
    slug: "rich-off-error-coins",
    type: "Content Brand / Coin Collecting Website",
    status: "Live",
    category: "Coin Collecting / SEO Website",
    shortDescription:
      "Coin collecting education focused on error coins and valuable varieties.",
    fullDescription:
      "A coin collecting education website focused on error coins, valuable varieties, beginner guides, SEO-driven collecting content, and affiliate-style monetization opportunities.",
    problemSolved:
      "Collectors searching for error coin information need clear, research-backed guides instead of scattered forum posts and outdated references.",
    whatBuilt: [
      "WordPress publishing site with SEO-focused content structure",
      "Beginner guides and error coin education pages",
      "Affiliate and monetization planning integrated into content strategy",
      "Niche research workflow for coin varieties and values",
    ],
    whatItProves: [
      "SEO strategy",
      "Niche content creation",
      "WordPress publishing",
      "Affiliate marketing planning",
      "Coin research and education",
    ],
    url: "https://richofferrorcoins.com",
    image: {
      logo: "/media/projects/rich-off-error-coins/richofferrorcoins_logo_croped.webp",
      hero: "/media/projects/rich-off-error-coins/richofferrorcoins-1-768x419.webp",
      screenshots: [
        "/media/projects/rich-off-error-coins/richofferrorcoins_logo_croped.webp",
        "/media/projects/rich-off-error-coins/richofferrorcoins-1-768x419.webp",
      ],
    },
    badges: [
      "WordPress",
      "SEO",
      "Content Strategy",
      "Affiliate Marketing",
      "Coin Research",
      "Publishing",
    ],
    featured: true,
    homepagePriority: 3,
  },
  {
    name: "ValuableCoinList.com",
    slug: "valuable-coin-list",
    type: "Coin Research / Content Website",
    status: "Planned",
    category: "Coin Research Website",
    shortDescription:
      "Coin value and research site planned as part of the Beck-Publishing coin network.",
    fullDescription:
      "A coin value and research website planned as part of the Beck-Publishing coin content network. The goal is to create helpful pages around valuable coins, collectible varieties, beginner-friendly coin lists, and research tools.",
    problemSolved:
      "Collectors need a structured, searchable reference for valuable coins and varieties — planned as part of a broader content network.",
    whatBuilt: [
      "Content network architecture and page planning",
      "SEO keyword and topic research for coin value queries",
      "Monetizable page templates for lists and research tools",
    ],
    whatItProves: [
      "Content network planning",
      "Niche SEO strategy",
      "Research-based publishing",
      "Monetizable website planning",
    ],
    url: "https://valuablecoinlist.com",
    image: {
      logo: "/media/projects/valuable-coin-list/valuablecoinlist.png?v=2",
      hero: "/media/projects/valuable-coin-list/valuablecoinlist.png?v=2",
      screenshots: ["/media/projects/valuable-coin-list/valuablecoinlist.png?v=2"],
    },
    badges: [
      "SEO",
      "Coin Research",
      "Content Strategy",
      "Web Publishing",
      "Affiliate Marketing",
    ],
    featured: false,
    homepagePriority: 6,
  },
  {
    name: "YouCantSeeMeVPN.com",
    slug: "youcantseemevpn",
    type: "Privacy / VPN SaaS Concept",
    status: "Infrastructure Paused",
    category: "Privacy / VPN SaaS",
    shortDescription:
      "Privacy-focused VPN platform concept built around WireGuard and subscription access.",
    fullDescription:
      "A privacy-focused VPN platform concept built around WireGuard, Linux servers, subscription access, customer onboarding, and simple secure internet access for everyday users. The live infrastructure is currently paused while server costs are being evaluated, but the project demonstrates VPN architecture, SaaS planning, DNS setup, server deployment, and security-focused product design.",
    problemSolved:
      "Everyday users need straightforward, privacy-focused internet access without enterprise VPN complexity.",
    whatBuilt: [
      "WireGuard VPN server deployment on Linux",
      "DNS and domain configuration for client onboarding",
      "Subscription access model with Stripe integration planning",
      "React/TypeScript customer-facing portal concept",
    ],
    whatItProves: [
      "Server infrastructure understanding",
      "VPN architecture basics",
      "Linux deployment planning",
      "Subscription product thinking",
      "DNS and domain setup",
      "Security-focused branding",
    ],
    url: "https://youcantseemevpn.com",
    image: {
      logo: "/media/projects/youcantseemevpn/logo_final_optimized.jpg",
      hero: "/media/projects/youcantseemevpn/logo-hero.jpg",
      screenshots: [
        "/media/projects/youcantseemevpn/logo_final_optimized.jpg",
        "/media/projects/youcantseemevpn/logo-hero.jpg",
      ],
    },
    badges: [
      "WireGuard",
      "Linux",
      "VPN",
      "SaaS",
      "Stripe",
      "DNS",
      "React",
      "TypeScript",
      "Security",
    ],
    featured: false,
    homepagePriority: 5,
  },
  {
    name: "Silent Bones",
    slug: "silent-bones",
    type: "Book / Published Product",
    status: "Published / Available Now",
    category: "Fiction / Publishing",
    shortDescription:
      "A dark suspense novel by David Beck, published through Beck-Publishing.",
    fullDescription:
      "A dark suspense novel by David Beck, published through Beck-Publishing. This project represents the creative publishing side of the brand and gives visitors a real product they can purchase.",
    problemSolved:
      "Readers looking for twist-driven dark suspense from an independent author with a direct purchase path.",
    whatBuilt: [
      "Full novel manuscript and KDP publishing release",
      "Beck-Publishing brand and book marketing presence",
      "Audiobook edition in preparation",
      "Dedicated sales page with multi-format purchase options",
    ],
    whatItProves: [
      "Published author experience",
      "Product launch thinking",
      "Writing and storytelling",
      "Branding and marketing",
      "Digital publishing",
    ],
    url: "/books/silent-bones/",
    purchaseUrl: siteConfig.silentBones.printBook.purchaseUrl,
    image: {
      logo: "/media/books/silent-bones/silent_bones_cover.jpg",
      hero: "/media/books/silent-bones/silent_bones_cover.jpg",
      screenshots: [
        "/media/books/silent-bones/silent_bones_cover.jpg",
        "/media/books/silent-bones/silent_bones_back_cover.jpg",
      ],
    },
    badges: [
      "Publishing",
      "Fiction",
      "Amazon KDP",
      "Audiobook",
      "Book Marketing",
      "Branding",
      "Storytelling",
    ],
    featured: true,
    homepagePriority: 4,
    isBook: true,
    isAvailableForPurchase: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.homepagePriority - b.homepagePriority);
}

export function getFeaturedProjects(limit?: number): Project[] {
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => a.homepagePriority - b.homepagePriority);
  return limit ? featured.slice(0, limit) : featured;
}

export function getProjectSlugs(): string[] {
  return projects.filter((p) => p.slug !== "silent-bones").map((p) => p.slug);
}
