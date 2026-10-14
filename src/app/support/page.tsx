import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Receipt, Download, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Customer Support",
  description:
    "Contact Beck-Publishing for help with Silent Bones purchases, audiobook downloads, ebook orders, and billing questions.",
  alternates: { canonical: "/support/" },
};

const supportTopics = [
  {
    title: "Download or playback help",
    icon: Download,
    description:
      "If a purchased audiobook download is missing or a file will not play, email us with your order details and the device or app you are using.",
  },
  {
    title: "Billing and order questions",
    icon: Receipt,
    description:
      "For questions about a direct Beck-Publishing purchase, a duplicate charge, or a refund request, contact us so we can review your order.",
  },
  {
    title: "Amazon paperback and ebook orders",
    icon: BookOpen,
    description:
      "For delivery, Kindle access, billing, or returns on an Amazon purchase, use the order-help options in your Amazon account. For questions about the book itself, email us.",
  },
];

export default function SupportPage() {
  const emailUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Beck-Publishing Customer Support")}`;

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          as="h1"
          title="Customer Support"
          subtitle="Need help with a book purchase, audiobook download, or billing question? Contact Beck-Publishing directly."
        />

        <section aria-labelledby="support-contact" className="glass-card rounded-xl p-6 md:p-8">
          <h2 id="support-contact" className="text-xl font-semibold text-zinc-100">
            Contact Beck-Publishing
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-400">
            Customer support is handled by {siteConfig.ownerName}. Email your
            question and we will follow up at the address you use to contact us.
          </p>
          <a href={emailUrl} className="btn-primary mt-6 inline-flex max-w-full break-all text-sm">
            <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
            {siteConfig.email}
          </a>
          <div className="mt-6 border-t border-white/5 pt-6">
            <h3 className="font-semibold text-zinc-200">Include these details</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-400">
              <li>The product and where you purchased it.</li>
              <li>The email used at checkout and your order or receipt number, if available.</li>
              <li>A description of the issue, including any error message.</li>
            </ul>
            <p className="mt-4 text-sm text-zinc-400">
              Please do not send card numbers, security codes, or passwords.
            </p>
          </div>
          <p className="mt-5 text-xs text-zinc-500">
            Read our{" "}
            <Link href="/privacy/" className="text-violet-400 hover:text-violet-300">Privacy Policy</Link>
            {" "}for details about information shared with support.
          </p>
        </section>

        <section aria-labelledby="purchase-help" className="mt-10">
          <h2 id="purchase-help" className="font-display text-2xl font-bold text-zinc-100">
            Help with your purchase
          </h2>
          <div className="mt-6 space-y-4">
            {supportTopics.map(({ title, icon: Icon, description }) => (
              <div key={title} className="glass-card rounded-xl p-6">
                <h3 className="flex items-center gap-3 font-semibold text-zinc-200">
                  <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-violet-400" />
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 rounded-xl border border-white/10 p-6">
          <h2 className="font-semibold text-zinc-200">Silent Bones audio preview</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            The short Chapter 1 preview is free to listen to and download. The
            full audiobook and ebook require purchase. Audiobook purchase
            availability is shown on the book page.
          </p>
          <Link href="/books/silent-bones/" className="btn-secondary mt-4 inline-flex text-sm">
            View Silent Bones
          </Link>
        </div>
      </div>
    </div>
  );
}
