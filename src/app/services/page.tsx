import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, SaaS development, AI automation, landing pages, WordPress migration, and technical services by David Beck.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Services"
            subtitle="Websites, apps, automation, and technical work — built for businesses, authors, and side hustles."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.slug} className="glass-card rounded-xl p-6">
                <h3 className="font-display text-lg font-semibold text-zinc-100">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {service.shortDescription}
                </p>
                <p className="mt-3 text-xs text-zinc-500">
                  <span className="font-medium text-zinc-400">For:</span> {service.audience}
                </p>
                <p className="mt-4 border-t border-white/5 pt-4 text-sm text-zinc-500">
                  {service.whyItMatters}
                </p>
                <Link
                  href="/contact/"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-violet-400 hover:text-violet-300"
                >
                  {service.ctaLabel} →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact/?type=freelance" className="btn-primary">
              Start a project
            </Link>
          </div>
        </div>
      </div>
      <CTASection defaultInquiryType="Freelance Project" />
    </>
  );
}
