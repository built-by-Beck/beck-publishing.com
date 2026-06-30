"use client";

import { ExternalLink, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  defaultInquiryType?: string;
  compact?: boolean;
  className?: string;
};

function toGoogleEmbedUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return "";
  if (trimmed.includes("embedded=true")) return trimmed;
  const separator = trimmed.includes("?") ? "&" : "?";
  return `${trimmed}${separator}embedded=true`;
}

function getEmbedUrl(): { url: string; provider: "google" | "microsoft" } | null {
  const { provider, googleFormEmbedUrl, microsoftFormEmbedUrl } = siteConfig.contactForm;

  if (provider === "google" && googleFormEmbedUrl) {
    return { url: toGoogleEmbedUrl(googleFormEmbedUrl), provider: "google" };
  }
  if (provider === "microsoft" && microsoftFormEmbedUrl) {
    return { url: microsoftFormEmbedUrl.trim(), provider: "microsoft" };
  }
  return null;
}

function MailtoFallback({ className }: { className?: string }) {
  return (
    <div className={cn("glass-card rounded-xl p-6 md:p-8", className)}>
      <p className="text-zinc-300">
        Contact form is not linked yet. Email me directly, or add your free Google or
        Microsoft Form URL in{" "}
        <code className="text-violet-300">src/data/site.ts</code>.
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        className="btn-primary mt-4 inline-flex"
      >
        <Mail className="h-4 w-4" />
        {siteConfig.email}
      </a>
      <p className="mt-4 text-xs text-zinc-500">
        Setup guide: docs/CONTACT-FORM-SETUP.md
      </p>
    </div>
  );
}

export function ContactForm({ className }: ContactFormProps) {
  const embed = getEmbedUrl();

  if (!embed) {
    return <MailtoFallback className={className} />;
  }

  const providerLabel = embed.provider === "google" ? "Google Form" : "Microsoft Form";

  return (
    <div className={cn("glass-card overflow-hidden rounded-xl", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 px-4 py-3 md:px-6">
        <p className="text-sm text-zinc-400">
          Secure contact via {providerLabel} — free, responses go to your inbox or spreadsheet.
        </p>
        <a
          href={embed.url.replace("?embedded=true", "").replace("&embedded=true", "")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-violet-400 hover:text-violet-300"
        >
          Open in new tab
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
      <iframe
        src={embed.url}
        title={`Contact ${siteConfig.ownerName}`}
        className="h-[720px] w-full border-0 bg-white md:h-[820px]"
        loading="lazy"
      />
    </div>
  );
}
