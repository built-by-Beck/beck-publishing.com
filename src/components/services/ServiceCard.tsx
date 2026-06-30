import Link from "next/link";
import type { Service } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="glass-card flex flex-col rounded-xl p-6 transition hover:border-white/15">
      <h3 className="font-display text-lg font-semibold text-zinc-100">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
        {service.shortDescription}
      </p>
      <p className="mt-3 text-xs text-zinc-500">
        <span className="font-medium text-zinc-400">For:</span> {service.audience}
      </p>
      <Link
        href="/contact/"
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-violet-400 hover:text-violet-300"
      >
        {service.ctaLabel}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="glass-card rounded-xl p-6">
      <h3 className="font-display text-lg font-semibold text-zinc-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}
