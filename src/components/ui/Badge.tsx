import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-zinc-300",
        className,
      )}
    >
      {children}
    </span>
  );
}

const statusStyles: Record<string, string> = {
  Live: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  "In Development": "border-amber-500/30 bg-amber-500/10 text-amber-300",
  Prototype: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  "Infrastructure Paused": "border-zinc-500/30 bg-zinc-500/10 text-zinc-300",
  Planned: "border-violet-500/30 bg-violet-500/10 text-violet-300",
  "Published / Available Now":
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Available: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  "Coming Soon": "border-amber-500/30 bg-amber-500/10 text-amber-300",
  "In Production": "border-blue-500/30 bg-blue-500/10 text-blue-300",
};

type StatusBadgeProps = {
  status: string;
  className?: string;
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        statusStyles[status] ?? "border-white/10 bg-white/5 text-zinc-300",
        className,
      )}
    >
      {status}
    </span>
  );
}

export function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm font-medium text-violet-200">
      {children}
    </span>
  );
}
