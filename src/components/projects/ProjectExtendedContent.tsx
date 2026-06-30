import type { ProjectDetailSection } from "@/data/project-details/types";
import { cn } from "@/lib/utils";

function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-zinc-400">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 48)} className="leading-relaxed text-zinc-400">
          {p}
        </p>
      ))}
    </div>
  );
}

function DetailSection({ section, isFinal }: { section: ProjectDetailSection; isFinal?: boolean }) {
  return (
    <article
      className={cn(
        "scroll-mt-24",
        !isFinal && "border-b border-white/5 pb-12",
      )}
      id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
    >
      <h2 className="font-display mb-6 text-2xl font-bold text-zinc-100 md:text-3xl">
        {section.title}
      </h2>

      {section.paragraphs && section.paragraphs.length > 0 && (
        <Paragraphs paragraphs={section.paragraphs} />
      )}

      {section.bullets && section.bullets.length > 0 && (
        <BulletList
          items={section.bullets}
          className={section.paragraphs?.length ? "mt-4" : undefined}
        />
      )}

      {section.paragraphsAfterBullets && section.paragraphsAfterBullets.length > 0 && (
        <div className="mt-4">
          <Paragraphs paragraphs={section.paragraphsAfterBullets} />
        </div>
      )}

      {section.subsections && section.subsections.length > 0 && (
        <div className="mt-8 space-y-8">
          {section.subsections.map((sub) => (
            <div key={sub.title} className="glass-card rounded-xl p-6">
              <h3 className="font-display mb-3 text-lg font-semibold text-violet-200">
                {sub.title}
              </h3>
              {sub.paragraphs && <Paragraphs paragraphs={sub.paragraphs} />}
              {sub.bullets && (
                <BulletList items={sub.bullets} className={sub.paragraphs ? "mt-4" : undefined} />
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

type ProjectExtendedContentProps = {
  sections: ProjectDetailSection[];
};

export function ProjectExtendedContent({ sections }: ProjectExtendedContentProps) {
  return (
    <div className="space-y-12">
      {sections.map((section, i) => (
        <DetailSection
          key={section.title}
          section={section}
          isFinal={i === sections.length - 1}
        />
      ))}
    </div>
  );
}
