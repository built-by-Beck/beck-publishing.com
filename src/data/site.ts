export const siteConfig = {
  siteName: "Beck-Publishing",
  builderBrand: "Built By Beck",
  ownerName: "David Beck",
  email: "davidbeck@beck-publishing.com",
  siteUrl: "https://beck-publishing.com",
  primaryGoal: "Open to full-time roles and independent project work.",
  footerTagline: "Books • Websites • Apps • Automation • Digital Products",
  authorPhoto: "/media/davidbeck.jpg",
  logos: {
    beckPublishing: "/media/brand/beck-pub-logo-round.png",
    builtByBeck: "/media/brand/beck-pub-keyboard-logo-hero.png",
  },
  defaultOgImage: "/media/brand/beck-pub-keyboard-logo-hero.png",
  silentBones: {
    title: "Silent Bones",
    author: "David Beck",
    printBook: {
      purchaseUrl: "https://amzn.to/4eGGd3Q",
      label: "Buy Paperback",
      provider: "Amazon",
      status: "Available" as const,
      priceDisplay: "",
    },
    ebook: {
      purchaseUrl: "https://amzn.to/4eGGd3Q",
      label: "Buy eBook",
      provider: "Amazon Kindle",
      status: "Available" as const,
      priceDisplay: "",
    },
    audiobook: {
      purchaseUrl: "",
      label: "Buy Audiobook",
      provider: "",
      status: "Coming Soon" as const,
      format: "",
      priceDisplay: "",
      sampleUrl: "/media/books/silent-bones/audiobook-sample.mp3",
      deliveryNote:
        "Full audiobook delivered through secure checkout — not hosted on this site.",
    },
  },
  contactForm: {
    enabled: true,
    /** "google" | "microsoft" | "mailto" — Google & Microsoft Forms are free */
    provider: "google" as "google" | "microsoft" | "mailto",
    /** Paste embed URL from Google Forms → Send → <> Embed HTML (the src= URL) */
    googleFormEmbedUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSczVmDBXgziV2iKk4RWFmnreqOBLjiomLCW1Bu8qT1kuzMhPw/viewform",
    /** Paste embed URL from Microsoft Forms → Collect responses → Embed */
    microsoftFormEmbedUrl: "",
    inquiryTypes: [
      "Hiring / Recruiting",
      "Freelance Project",
      "Website / App Work",
      "Book / Audiobook Question",
      "Technical Help",
      "Other",
    ],
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books/", label: "Books" },
  { href: "/projects/", label: "Projects" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/hire-me/", label: "Hire Me" },
  { href: "/contact/", label: "Contact" },
] as const;
