import { siteConfig } from "./site";

export type PurchaseFormatStatus = "Available" | "Coming Soon" | "In Production";

export type BookPurchaseFormat = {
  purchaseUrl: string;
  label: string;
  provider?: string;
  status: PurchaseFormatStatus;
  format?: string;
  priceDisplay?: string;
  deliveryNote?: string;
};

export type Book = {
  title: string;
  slug: string;
  author: string;
  genre: string;
  status: string;
  shortDescription: string;
  fullDescription: string;
  heroCopy: string;
  aboutCopy: string;
  whyReadersLike: string[];
  authorNote: string;
  coverImage: string;
  heroImage: string;
  audiobookCoverImage: string;
  printBook: BookPurchaseFormat;
  ebook: BookPurchaseFormat;
  audiobook: BookPurchaseFormat & { sampleUrl?: string };
  featured: boolean;
};

const sb = siteConfig.silentBones;

export const books: Book[] = [
  {
    title: sb.title,
    slug: "silent-bones",
    author: sb.author,
    genre: "Dark Suspense / Thriller Fiction",
    status: "Published / Available Now",
    shortDescription:
      "A dark suspense story built around secrets, tension, and twist-driven storytelling.",
    fullDescription:
      "Silent Bones is a dark suspense novel by David Beck, built around secrets, tension, and the kind of twist-driven storytelling that keeps readers turning pages.",
    heroCopy:
      "Silent Bones is a dark suspense novel by David Beck, built around secrets, tension, and the kind of twist-driven storytelling that keeps readers turning pages.",
    aboutCopy:
      "Published through Beck-Publishing, Silent Bones represents the creative side of David Beck's work — combining storytelling, branding, digital publishing, and product marketing into one release.",
    whyReadersLike: [
      "Dark suspense with real tension — not cheap shocks",
      "Twist-driven plot that rewards careful reading",
      "Compact, focused storytelling without filler",
      "From an author who builds digital products, not just words on a page",
    ],
    authorNote:
      "Silent Bones is the creative publishing arm of Beck-Publishing — where writing, design, marketing, and digital product thinking come together. David Beck built the brand, the release strategy, and the online presence around this book the same way he builds software: practically, with intent, and with room to grow.",
    coverImage: "/media/books/silent-bones/silent_bones_cover.jpg",
    heroImage: "/media/books/silent-bones/silent_bones_cover.jpg",
    audiobookCoverImage: "/media/books/silent-bones/silent_bones_back_cover.jpg",
    printBook: { ...sb.printBook },
    ebook: { ...sb.ebook },
    audiobook: { ...sb.audiobook },
    featured: true,
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getFeaturedBooks(): Book[] {
  return books.filter((b) => b.featured);
}

export function isAudiobookPurchasable(book: Book): boolean {
  return (
    book.audiobook.status === "Available" &&
    book.audiobook.purchaseUrl.length > 0
  );
}

export function isFormatPurchasable(format: BookPurchaseFormat): boolean {
  return format.status === "Available" && format.purchaseUrl.length > 0;
}
