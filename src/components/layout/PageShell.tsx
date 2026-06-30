import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
};

export function PageShell({ children, className, narrow }: PageShellProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6",
        narrow ? "max-w-3xl" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
