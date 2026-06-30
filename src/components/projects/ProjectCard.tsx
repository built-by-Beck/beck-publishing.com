import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { MediaImage } from "@/components/shared/MediaImage";
import { Badge, StatusBadge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const href = project.isBook ? "/books/silent-bones/" : `/projects/${project.slug}/`;
  const imageSrc = project.image.hero || project.image.logo || "";

  return (
    <Link
      href={href}
      className={cn(
        "group glass-card flex flex-col overflow-hidden rounded-xl transition hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {imageSrc ? (
          <MediaImage
            src={imageSrc}
            alt={project.name}
            label={project.name}
            fill
            className="transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-900 to-violet-950/30">
            <span className="text-sm text-zinc-500">{project.name}</span>
          </div>
        )}
        <div className="absolute right-3 top-3">
          <StatusBadge status={project.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-violet-400">
          {project.category}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-zinc-100 group-hover:text-white">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.badges.slice(0, 4).map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-400 group-hover:text-violet-300">
          View project
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

type ProjectGridProps = {
  projects: Project[];
  className?: string;
};

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
