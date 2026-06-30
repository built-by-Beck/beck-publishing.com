import type { Metadata } from "next";
import { Suspense } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectGrid } from "@/components/projects/ProjectCard";
import { SkillBadge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { FeatureCard } from "@/components/services/ServiceCard";
import { AuthorPhoto } from "@/components/shared/AuthorPhoto";
import { getFeaturedProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { HireMeForm } from "./HireMeForm";

export const metadata: Metadata = {
  title: "Hire David Beck",
  description:
    "Web developer, frontend developer, SaaS builder, and technical problem solver — open to full-time roles and contract work.",
};

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Firebase",
  "Firestore",
  "Tailwind CSS",
  "WordPress",
  "Python",
  "Linux",
  "DNS",
  "Stripe",
  "Git/GitHub",
  "Troubleshooting",
  "Computer repair",
  "Web hosting",
  "SEO content",
  "AI workflow tools",
];

const roles = [
  "Web Developer",
  "Frontend Developer",
  "IT Support / Field Technician",
  "Technical Support Specialist",
  "SaaS Product Builder",
  "AI Training / Evaluation Work",
  "Junior Software Developer",
  "Technical Content / Product Support",
];

export default function HireMePage() {
  const projects = getFeaturedProjects(4);

  return (
    <>
      <div className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Open to opportunities"
            title="Hire David Beck"
            subtitle="Web developer and technical problem solver who builds useful tools, learns fast, and communicates clearly."
          />

          <div className="glass-card mb-12 flex flex-col items-center gap-6 rounded-xl p-6 md:flex-row md:p-8">
            <AuthorPhoto size="md" priority />
            <p className="text-lg leading-relaxed text-zinc-300">
              I&apos;m a self-taught developer with real-world troubleshooting experience in
              life safety, hospital systems, electronics, and computer repair. I build React and
              TypeScript web apps, Firebase-backed SaaS prototypes, and content sites — and I
              ship a published novel through my own publishing brand. I&apos;m looking for a role
              where practical problem-solving matters as much as clean code.
            </p>
          </div>

          <SectionHeader title="Technical Skills" />
          <div className="mb-12 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill}>{skill}</SkillBadge>
            ))}
          </div>

          <SectionHeader title="Featured Projects" />
          <ProjectGrid projects={projects} className="mb-12" />

          <SectionHeader title="What Makes David Different" />
          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            <FeatureCard
              title="Messy Real-World Problems"
              description="I've fixed hospital equipment, fire safety systems, and home networks. I don't panic when things don't match the documentation."
            />
            <FeatureCard
              title="Self-Taught and Shipping"
              description="No bootcamp certificate — just years of building, breaking, and fixing. ExtinguisherTracker, DieCastList, and Silent Bones are proof."
            />
            <FeatureCard
              title="Business-Minded Builder"
              description="I think about SaaS subscriptions, SEO, affiliate content, and product launches — not just code in isolation."
            />
            <FeatureCard
              title="Clear With Non-Technical People"
              description="I can explain DNS, Firebase, or a VPN setup without making anyone feel stupid. That matters in support and client work."
            />
          </div>

          <SectionHeader title="Roles I'm Interested In" />
          <ul className="mb-12 grid gap-2 sm:grid-cols-2">
            {roles.map((role) => (
              <li
                key={role}
                className="flex items-center gap-2 text-zinc-400 before:text-violet-400 before:content-['→']"
              >
                {role}
              </li>
            ))}
          </ul>

          <SectionHeader
            title="Get in Touch"
            subtitle={`Recruiters and hiring managers — reach out at ${siteConfig.email} or use the form below.`}
          />
          <Suspense fallback={<ContactForm defaultInquiryType="Hiring / Recruiting" />}>
            <HireMeForm />
          </Suspense>
        </div>
      </div>
    </>
  );
}
