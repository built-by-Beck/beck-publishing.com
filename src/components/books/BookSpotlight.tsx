import Link from "next/link";
import type { Book } from "@/data/books";
import { isAudiobookPurchasable } from "@/data/books";
import { MediaImage } from "@/components/shared/MediaImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PurchaseButton } from "@/components/ui/PurchaseButton";

type BookSpotlightProps = {
  book: Book;
};

export function BookSpotlight({ book }: BookSpotlightProps) {
  const audiobookPurchasable = isAudiobookPurchasable(book);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Featured Release"
          title={`Featured Release: ${book.title}`}
          subtitle="A dark suspense novel by David Beck — available as a book, with an audiobook edition being prepared for release."
        />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex justify-center gap-6">
            <div className="relative aspect-[2/3] w-40 overflow-hidden rounded-lg shadow-2xl shadow-violet-500/10 sm:w-48">
              <MediaImage
                src={book.coverImage}
                alt={`${book.title} book cover`}
                label={book.title}
                fill
                sizes="192px"
              />
            </div>
            <div className="relative aspect-[2/3] w-40 overflow-hidden rounded-lg shadow-2xl shadow-cyan-500/10 sm:w-48">
              <MediaImage
                src={book.audiobookCoverImage}
                alt={`${book.title} audiobook cover`}
                label="Audiobook"
                fill
                sizes="192px"
              />
            </div>
          </div>
          <div>
            <p className="leading-relaxed text-zinc-400">
              Silent Bones is a dark suspense story built around secrets, tension, and
              twist-driven storytelling. Published through Beck-Publishing, it represents
              the creative side of the brand — where writing, design, publishing, marketing,
              and digital product strategy come together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PurchaseButton format={book.printBook} />
              <Link href={`/books/${book.slug}/`} className="btn-secondary text-sm">
                View Book Details
              </Link>
              {audiobookPurchasable ? (
                <PurchaseButton format={book.audiobook} />
              ) : (
                <PurchaseButton
                  format={book.audiobook}
                  comingSoonLabel="Audiobook Coming Soon"
                />
              )}
            </div>
            <Link
              href={`/books/${book.slug}/#purchase`}
              className="mt-4 inline-block text-sm text-violet-400 hover:text-violet-300"
            >
              See all purchase options →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
