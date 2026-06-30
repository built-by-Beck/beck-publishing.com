import { BookOpen, Headphones, Tablet } from "lucide-react";
import type { Book, BookPurchaseFormat } from "@/data/books";
import { isFormatPurchasable } from "@/data/books";
import { StatusBadge } from "@/components/ui/Badge";
import { PurchaseButton } from "@/components/ui/PurchaseButton";
import { cn } from "@/lib/utils";

type PurchaseOptionCardProps = {
  title: string;
  format: BookPurchaseFormat;
  icon?: "book" | "ebook" | "audiobook";
  comingSoonLabel?: string;
};

const icons = {
  book: BookOpen,
  ebook: Tablet,
  audiobook: Headphones,
};

export function PurchaseOptionCard({
  title,
  format,
  icon = "book",
  comingSoonLabel,
}: PurchaseOptionCardProps) {
  const Icon = icons[icon];
  const purchasable = isFormatPurchasable(format);

  return (
    <div className="glass-card flex flex-col rounded-xl p-6 transition hover:border-white/15">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
          <Icon className="h-5 w-5" />
        </div>
        <StatusBadge status={format.status} />
      </div>
      <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
      {format.provider && (
        <p className="mt-1 text-sm text-zinc-400">via {format.provider}</p>
      )}
      {format.format && (
        <p className="mt-1 text-sm text-zinc-400">Format: {format.format}</p>
      )}
      {format.priceDisplay && (
        <p className="mt-2 text-xl font-bold text-zinc-100">{format.priceDisplay}</p>
      )}
      {format.deliveryNote && (
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">{format.deliveryNote}</p>
      )}
      <div className="mt-auto pt-6">
        <PurchaseButton
          format={format}
          comingSoonLabel={comingSoonLabel ?? `${title} Coming Soon`}
          variant={purchasable ? "primary" : "disabled"}
          className="w-full"
        />
      </div>
    </div>
  );
}

type BookPurchaseSectionProps = {
  book: Book;
  className?: string;
  id?: string;
};

export function BookPurchaseSection({ book, className, id = "purchase" }: BookPurchaseSectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <div className="grid gap-6 md:grid-cols-3">
        <PurchaseOptionCard title="Paperback" format={book.printBook} icon="book" />
        <PurchaseOptionCard title="eBook" format={book.ebook} icon="ebook" />
        <PurchaseOptionCard
          title="Audiobook"
          format={book.audiobook}
          icon="audiobook"
          comingSoonLabel="Audiobook Coming Soon"
        />
      </div>
    </section>
  );
}
