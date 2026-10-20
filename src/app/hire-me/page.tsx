import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectGrid } from "@/components/projects/ProjectCard";
import { SkillBadge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { FeatureCard } from "@/components/services/ServiceCard";
import { AuthorPhoto } from "@/components/shared/AuthorPhoto";
import { getFeaturedProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Hire David Beck",
  description:
    "Web developer, frontend developer, and IT / technical support professional — open to full-time roles and available now for freelance and contract work.",
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
  "Stripe",
  "Git/GitHub",
  "Web hosting",
  "SEO content",
  "AI workflow tools",
  "Linux",
  "DNS",
  "Networking",
  "Troubleshooting",
  "Hardware troubleshooting & repair",
];

const certifications = [
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/8c8021fec50d",
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/8871ca2b2d8f",
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/f3d3c13764f2",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/14114432601b",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/cbfe22819d5c",
  },
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/34RD8KQJIYLT",
  },
];

const roleGroups = [
  {
    title: "Development",
    roles: [
      "Web Developer",
      "Frontend Developer",
      "Junior Software Developer",
      "SaaS / Full-Stack Builder",
    ],
  },
  {
    title: "IT / Technical Support",
    roles: [
      "IT Support Specialist",
      "Technical Support Specialist",
      "Field Technician",
    ],
  },
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
              published a novel through my own publishing brand. I&apos;m looking for a role
              where practical problem-solving matters as much as clean code.
            </p>
          </div>

          <section id="certifications" aria-label="Certifications" className="mb-12 scroll-mt-24">
            <SectionHeader
              title="Certifications"
              subtitle="Credentials in frontend development, programming, problem solving, and IT support. Follow each link to review the certificate on its issuing platform."
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {certifications.map((certification) => (
                <li key={certification.url} className="glass-card rounded-xl p-6">
                  <p className="mb-2 text-sm font-medium text-violet-400">
                    {certification.issuer}
                  </p>
                  <h3 className="mb-4 text-lg font-semibold text-zinc-100">
                    {certification.title}
                  </h3>
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${certification.title} on ${certification.issuer} (opens in a new tab)`}
                    className="inline-flex rounded text-sm font-medium text-violet-400 underline decoration-violet-400/40 underline-offset-4 transition-colors hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
                  >
                    Verify certificate <span aria-hidden="true" className="ml-1">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

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
              description="Years of building, breaking, and fixing real projects. ExtinguisherTracker, DieCastList, and Silent Bones are the proof."
            />
            <FeatureCard
              title="Business-Minded Builder"
              description="I think about SaaS subscriptions, SEO, affiliate content, and product launches — not just code in isolation."
            />
            <FeatureCard
              title="Clear With Non-Technical People"
              description="I explain DNS, Firebase, or a VPN setup clearly and patiently. That matters in support and client work."
            />
          </div>

          <SectionHeader title="Roles I'm Interested In" />
          <div className="mb-12 grid gap-8 sm:grid-cols-2">
            {roleGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 font-semibold text-zinc-200">{group.title}</h3>
                <ul className="space-y-2">
                  {group.roles.map((role) => (
                    <li
                      key={role}
                      className="flex items-center gap-2 text-zinc-400 before:text-violet-400 before:content-['→']"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <SectionHeader
            title="Get in Touch"
            subtitle={`Recruiters and hiring managers — reach out at ${siteConfig.email} or use the form below.`}
          />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
