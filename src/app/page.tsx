import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectGrid } from "@/components/projects/ProjectCard";
import { BookSpotlight } from "@/components/books/BookSpotlight";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FeatureCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { getFeaturedBooks } from "@/data/books";
import { getFeaturedProjects } from "@/data/projects";
import { getServicePreview } from "@/data/services";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects(4);
  const featuredBook = getFeaturedBooks()[0];
  const services = getServicePreview(3);

  return (
    <>
      <Hero
        eyebrow={undefined}
        title={
          <>
            Books, Websites, Apps, and Digital Products —{" "}
            <span className="gradient-text">Built By Beck.</span>
          </>
        }
        subtitle="Beck-Publishing is the home base for David Beck's books, software projects, SaaS ideas, AI tools, websites, and technical problem-solving."
        buttons={[
          { label: "See My Work", href: "/projects/", variant: "primary" },
          { label: "More from Built By Beck", href: "/projects/", variant: "secondary" },
          { label: "Buy Silent Bones", href: "/books/silent-bones/", variant: "ghost" },
        ]}
      />

      <section className="section-padding border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Built By Beck"
            title="Projects & Products"
            subtitle="Software, SaaS, websites, and digital products — built to solve real problems."
          />
          <ProjectGrid projects={featuredProjects} />
          <div className="mt-8 text-center">
            <Link href="/projects/" className="btn-secondary text-sm">
              View all projects
            </Link>
          </div>
        </div>
      </section>

      {featuredBook && <BookSpotlight book={featuredBook} />}

      <section className="section-padding border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Services"
            title="What I Build for Clients"
            subtitle="Websites, apps, automation, and technical problem-solving."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services/" className="btn-secondary text-sm">
              All services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Why David"
            title="Why Work With David"
            subtitle="Self-taught builder with real-world troubleshooting experience — not just portfolio demos."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Real-World Problem Solver"
              description="Life safety, hospital systems, electronics, and maintenance background — I fix things that actually break."
            />
            <FeatureCard
              title="Fast Learner, Practical Builder"
              description="Self-taught in React, TypeScript, Firebase, and Next.js. I ship useful tools, not just tutorials."
            />
            <FeatureCard
              title="Published Author & Product Creator"
              description="Silent Bones is a real product. I understand branding, publishing, and getting things in front of people."
            />
            <FeatureCard
              title="Clear Communicator"
              description="I explain technical work in plain language — for hiring managers, clients, and non-technical stakeholders."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-violet-500/5 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-zinc-300">
            Open to full-time roles and freelance projects.{" "}
            <Link href="/hire-me/" className="font-semibold text-violet-400 hover:text-violet-300">
              View Hire Me →
            </Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
