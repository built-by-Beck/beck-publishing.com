import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import { getProjectExtendedDetails } from "@/data/project-details";
import { MediaImage } from "@/components/shared/MediaImage";
import { Badge, StatusBadge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectExtendedContent } from "@/components/projects/ProjectExtendedContent";
import { CTASection } from "@/components/ui/CTASection";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const extended = getProjectExtendedDetails(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: extended?.shortDescription ?? project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const extended = getProjectExtendedDetails(slug);
  const heroImage = project.image.hero || project.image.logo || "";
  const heroDescription = extended?.shortDescription ?? project.fullDescription;
  const projectType = extended?.projectTypeLabel ?? project.type;

  return (
    <>
      <section className="hero-glow section-padding">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {heroImage && (
            <div className="relative mb-10 aspect-video max-h-[420px] w-full overflow-hidden rounded-xl">
              <MediaImage
                src={heroImage}
                alt={project.name}
                label={project.name}
                fill
                priority
                sizes="900px"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <StatusBadge status={project.status} />
            <Badge>{projectType}</Badge>
          </div>

          <h1 className="mt-4 font-display text-4xl font-bold text-zinc-50 md:text-5xl">
            {project.name}
          </h1>

          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-violet-400">
            {project.category}
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300">{heroDescription}</p>

          {project.url && project.url.startsWith("http") && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex text-sm"
            >
              Visit site
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          <div className="mt-8 flex flex-wrap gap-2">
            {project.badges.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>
        </div>
      </section>

      {extended ? (
        <section className="section-padding border-t border-white/5">
          <div className="mx-auto max-w-3xl">
            <ProjectExtendedContent sections={extended.sections} />
          </div>
        </section>
      ) : (
        <section className="section-padding border-t border-white/5">
          <div className="mx-auto max-w-3xl space-y-10">
            <div>
              <SectionHeader title="Problem It Solves" />
              <p className="text-zinc-400">{project.problemSolved}</p>
            </div>
            <div>
              <SectionHeader title="What I Built or Planned" />
              <ul className="space-y-2">
                {project.whatBuilt.map((item) => (
                  <li key={item} className="flex gap-3 text-zinc-400">
                    <span className="text-violet-400">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader title="What This Project Proves" />
              <ul className="space-y-2">
                {project.whatItProves.map((item) => (
                  <li key={item} className="flex gap-3 text-zinc-400">
                    <span className="text-cyan-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {project.image.screenshots && project.image.screenshots.length > 0 && (
        <section className="section-padding border-t border-white/5">
          <div className="mx-auto max-w-6xl">
            <SectionHeader title="Gallery" />
            <div className="grid gap-4 sm:grid-cols-2">
              {project.image.screenshots.map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="relative aspect-video overflow-hidden rounded-lg"
                >
                  <MediaImage
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    label={`Screenshot ${i + 1}`}
                    fill
                    sizes="500px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4">
          <Link href="/projects/" className="btn-secondary text-sm">
            All Projects
          </Link>
          <Link href="/contact/" className="btn-primary text-sm">
            Contact
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
