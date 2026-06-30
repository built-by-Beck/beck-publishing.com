import Link from "next/link";
import { cn } from "@/lib/utils";

type HeroButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

type HeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  buttons: HeroButton[];
  className?: string;
};

export function Hero({ eyebrow, title, subtitle, buttons, className }: HeroProps) {
  return (
    <section className={cn("hero-glow relative overflow-hidden section-padding", className)}>
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-20 h-px w-32 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="absolute right-1/4 top-40 h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        <div className="absolute bottom-32 left-1/3 font-mono text-xs text-zinc-700">
          {"{ build: 'beck' }"}
        </div>
      </div>
      <div className="relative mx-auto max-w-5xl">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display max-w-4xl text-4xl font-bold leading-tight tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          {buttons.map((btn) => {
            const className =
              btn.variant === "secondary"
                ? "btn-secondary"
                : btn.variant === "ghost"
                  ? "btn-ghost"
                  : "btn-primary";

            if (btn.external) {
              return (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {btn.label}
                </a>
              );
            }

            return (
              <Link key={btn.label} href={btn.href} className={className}>
                {btn.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
