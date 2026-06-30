import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBookBySlug, isAudiobookPurchasable } from "@/data/books";
import { getFeaturedProjects } from "@/data/projects";
import { MediaImage } from "@/components/shared/MediaImage";
import { AudioSamplePlayer } from "@/components/books/AudioSamplePlayer";
import { BookPurchaseSection } from "@/components/books/BookPurchaseSection";
import { AuthorPhoto } from "@/components/shared/AuthorPhoto";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/Badge";
import { PurchaseButton } from "@/components/ui/PurchaseButton";
import { CTASection } from "@/components/ui/CTASection";
import { ProjectGrid } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Silent Bones by David Beck",
  description:
    "Silent Bones is a dark suspense novel by David Beck, published through Beck-Publishing. Buy the book and follow the upcoming audiobook release.",
  openGraph: {
    title: "Silent Bones by David Beck",
    description:
      "A dark suspense novel — available as a book, with an audiobook edition in preparation.",
    images: [{ url: "/media/books/silent-bones/silent_bones_cover.jpg" }],
  },
};

export default function SilentBonesPage() {
  const book = getBookBySlug("silent-bones");
  if (!book) notFound();

  const audiobookReady = isAudiobookPurchasable(book);
  const relatedProjects = getFeaturedProjects(3).filter((p) => p.slug !== "silent-bones");

  return (
    <>
      <section className="hero-glow section-padding">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-xl shadow-2xl shadow-violet-500/10">
            <MediaImage
              src={book.coverImage}
              alt={`${book.title} cover`}
              label={book.title}
              fill
              priority
              sizes="400px"
            />
          </div>
          <div>
            <StatusBadge status={book.status} />
            <h1 className="mt-4 font-display text-4xl font-bold text-zinc-50 md:text-5xl">
              {book.title}
            </h1>
            <p className="mt-2 text-lg text-zinc-400">by {book.author}</p>
            <p className="mt-1 text-violet-400">{book.genre}</p>
            <p className="mt-6 leading-relaxed text-zinc-400">{book.heroCopy}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PurchaseButton format={book.printBook} />
              {book.audiobook.sampleUrl && (
                <a href="#audiobook" className="btn-secondary text-sm">
                  Listen to Audiobook Sample
                </a>
              )}
              <PurchaseButton
                format={book.audiobook}
                comingSoonLabel="Audiobook Coming Soon"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="mx-auto max-w-3xl">
          <SectionHeader title="About the Book" />
          <p className="leading-relaxed text-zinc-400">{book.aboutCopy}</p>
        </div>
      </section>

      <section id="audiobook" className="section-padding scroll-mt-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Silent Bones Audiobook"
            subtitle={
              audiobookReady
                ? "Listen to a sample, then purchase the full audiobook."
                : "The audiobook version is being prepared for release. Check back soon for purchase options."
            }
          />
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-xl">
              <MediaImage
                src={book.audiobookCoverImage}
                alt={`${book.title} audiobook cover`}
                label="Audiobook"
                fill
                sizes="320px"
              />
            </div>
            <div className="space-y-6">
              <StatusBadge status={book.audiobook.status} />
              {book.audiobook.format && (
                <p className="text-sm text-zinc-400">
                  <span className="font-medium text-zinc-300">Format:</span>{" "}
                  {book.audiobook.format}
                </p>
              )}
              {book.audiobook.provider && (
                <p className="text-sm text-zinc-400">
                  <span className="font-medium text-zinc-300">Purchase via:</span>{" "}
                  {book.audiobook.provider}
                </p>
              )}
              <p className="text-sm leading-relaxed text-zinc-400">
                The audiobook edition of Silent Bones is being prepared as a separate
                digital release for readers who want to experience the story in audio form.
              </p>
              {book.audiobook.sampleUrl && (
                <AudioSamplePlayer sampleUrl={book.audiobook.sampleUrl} />
              )}
              <PurchaseButton
                format={book.audiobook}
                comingSoonLabel="Audiobook Coming Soon"
              />
              {book.audiobook.deliveryNote && (
                <p className="text-xs text-zinc-500">{book.audiobook.deliveryNote}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="mx-auto max-w-3xl">
          <SectionHeader title="Why Readers May Like It" />
          <ul className="space-y-3">
            {book.whyReadersLike.map((item) => (
              <li key={item} className="flex gap-3 text-zinc-400">
                <span className="text-violet-400">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="mx-auto max-w-3xl">
          <SectionHeader title="Author & Publishing Note" />
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <AuthorPhoto size="md" />
            <p className="leading-relaxed text-zinc-400">{book.authorNote}</p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Purchase Options"
            subtitle="Choose your format — paperback, eBook, or audiobook."
          />
          <BookPurchaseSection book={book} />
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="Related Projects & Products" />
          <ProjectGrid projects={relatedProjects} />
        </div>
      </section>

      <CTASection
        title="Questions about Silent Bones?"
        subtitle="Book, audiobook, or publishing inquiries — get in touch."
        defaultInquiryType="Book / Audiobook Question"
      />
    </>
  );
}
