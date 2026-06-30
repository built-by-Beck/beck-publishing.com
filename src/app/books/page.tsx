import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookCard } from "@/components/books/BookCard";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books by David Beck",
  description:
    "Dark suspense, twist-driven fiction, and future releases from Beck-Publishing.",
};

export default function BooksPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Books by David Beck"
          subtitle="Dark suspense, twist-driven fiction, and future releases from Beck-Publishing."
        />
        <div className="space-y-8">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
