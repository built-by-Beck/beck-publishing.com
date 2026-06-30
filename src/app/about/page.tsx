import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AuthorPhoto } from "@/components/shared/AuthorPhoto";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About David Beck",
  description:
    "David Beck — self-taught builder, published author, and technical problem solver based in Alabama.",
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <AuthorPhoto size="lg" priority />
          <div className="text-center sm:text-left">
            <SectionHeader
              title={`About ${siteConfig.ownerName}`}
              subtitle="Hands-on technical problem solver, builder, and published author."
              className="mb-0"
            />
          </div>
        </div>
        <div className="space-y-6 leading-relaxed text-zinc-400">
          <p>
            I&apos;m David Beck — based in Alabama, working in life safety by day and building
            software, websites, SaaS products, books, and digital brands in every spare hour I
            can find. I didn&apos;t come up through a traditional CS program. I learned by fixing
            things that were broken, reading documentation until it made sense, and shipping
            projects until they worked.
          </p>
          <p>
            My background is practical: maintenance work, electronics troubleshooting, computer
            repair, hospital systems, and field-level problem solving. That shapes how I build
            software — I care about whether something actually works for real people, not
            whether it looks impressive in a screenshot.
          </p>
          <p>
            Beck-Publishing is the umbrella for everything I create.{" "}
            <strong className="text-zinc-200">Built By Beck</strong> is the builder side —
            React apps, Firebase backends, Next.js sites, SaaS prototypes, coin content networks,
            and automation tools. The publishing side includes{" "}
            <Link href="/books/silent-bones/" className="text-violet-400 hover:text-violet-300">
              Silent Bones
            </Link>
            , a dark suspense novel that&apos;s a real product, not a portfolio placeholder.
          </p>
          <p>
            I&apos;m interested in web apps, automation, AI tools, SaaS products, infrastructure,
            publishing, and creative technology. I build practical tools — inspection trackers,
            inventory apps, content sites, VPN concepts, author platforms — because I like
            solving problems that matter to someone.
          </p>
          <p className="border-t border-white/5 pt-6 text-zinc-300">
            {siteConfig.primaryGoal}{" "}
            <Link href="/hire-me/" className="text-violet-400 hover:text-violet-300">
              See the Hire Me page →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
