import Link from "next/link";
import type { Book } from "@/data/books";
import { isAudiobookPurchasable } from "@/data/books";
import { MediaImage } from "@/components/shared/MediaImage";
import { StatusBadge } from "@/components/ui/Badge";
import { PurchaseButton } from "@/components/ui/PurchaseButton";

type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  const audiobookPurchasable = isAudiobookPurchasable(book);

  return (
    <article className="glass-card overflow-hidden rounded-xl">
      <div className="grid md:grid-cols-[200px_1fr]">
        <div className="relative aspect-[2/3] md:aspect-auto md:min-h-[280px]">
          <MediaImage
            src={book.coverImage}
            alt={`${book.title} cover`}
            label={book.title}
            fill
            sizes="200px"
          />
        </div>
        <div className="flex flex-col p-6">
          <StatusBadge status={book.status} />
          <h2 className="mt-3 font-display text-2xl font-bold text-zinc-100">
            {book.title}
          </h2>
          <p className="text-sm text-zinc-400">by {book.author}</p>
          <p className="mt-1 text-sm text-violet-400">{book.genre}</p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
            {book.shortDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PurchaseButton format={book.printBook} />
            <Link href={`/books/${book.slug}/`} className="btn-secondary text-sm">
              View Details
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
        </div>
      </div>
    </article>
  );
}
