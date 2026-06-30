import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectGrid } from "@/components/projects/ProjectCard";
import { getAllProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software, SaaS, websites, apps, and digital products built by David Beck under Beck-Publishing and Built By Beck.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Projects & Products"
          subtitle="Major digital products, apps, content brands, and prototypes from Built By Beck."
        />
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
