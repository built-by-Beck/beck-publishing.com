import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact David Beck for project inquiries, hiring, website work, book questions, and technical help.",
};

const inquiryCategories = [
  {
    title: "Project inquiries",
    description: "Websites, apps, automation, or freelance development work.",
    type: "Freelance Project",
  },
  {
    title: "Hiring / recruiter contact",
    description: "Full-time roles, contract positions, or technical interviews.",
    type: "Hiring / Recruiting",
  },
  {
    title: "Website / app work",
    description: "Custom builds, landing pages, SaaS, or WordPress migration.",
    type: "Website / App Work",
  },
  {
    title: "Book / audiobook questions",
    description: "Silent Bones, audiobook updates, or author inquiries.",
    type: "Book / Audiobook Question",
  },
  {
    title: "Technical help",
    description: "Computer troubleshooting, setup, repair guidance.",
    type: "Technical Help",
  },
];

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Contact"
          subtitle="Tell me what you need built, fixed, automated, cleaned up, published, or launched."
          align="center"
        />

        <p className="mb-8 text-sm text-zinc-400">
          Need help with an existing purchase?{" "}
          <Link href="/support/" className="font-medium text-violet-400 hover:text-violet-300">
            Visit Customer Support
          </Link>
          .
        </p>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {inquiryCategories.map((cat) => (
            <div key={cat.title} className="glass-card rounded-lg p-4">
              <h3 className="font-semibold text-zinc-200">{cat.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{cat.description}</p>
              <p className="mt-2 text-xs text-violet-400">Select: {cat.type}</p>
            </div>
          ))}
        </div>

        <div id="form" className="scroll-mt-24">
          <ContactForm />
          <p className="mt-4 text-xs text-zinc-500">
            Learn how your information is handled in our{" "}
            <Link href="/privacy/" className="text-violet-400 hover:text-violet-300">Privacy Policy</Link>
            .
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">Prefer email?</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="btn-secondary mt-3 inline-flex text-sm"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
