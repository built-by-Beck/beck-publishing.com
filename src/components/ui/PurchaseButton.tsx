import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BookPurchaseFormat } from "@/data/books";
import { isFormatPurchasable } from "@/data/books";

type PurchaseButtonProps = {
  format: BookPurchaseFormat;
  comingSoonLabel?: string;
  className?: string;
  variant?: "primary" | "secondary" | "disabled";
  href?: string;
};

export function PurchaseButton({
  format,
  comingSoonLabel = "Audiobook Coming Soon",
  className,
  variant,
  href,
}: PurchaseButtonProps) {
  const purchasable = isFormatPurchasable(format);
  const url = href || format.purchaseUrl;

  if (purchasable && url) {
    const isExternal = url.startsWith("http");
    const btnClass = cn(
      variant === "secondary" ? "btn-secondary" : "btn-primary",
      "text-sm",
      className,
    );

    if (isExternal) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
        >
          {format.label}
        </a>
      );
    }

    return (
      <Link href={url} className={btnClass}>
        {format.label}
      </Link>
    );
  }

  if (format.status === "Coming Soon" || !format.purchaseUrl) {
    return (
      <span className={cn("btn-disabled text-sm", className)} aria-disabled="true">
        {comingSoonLabel}
      </span>
    );
  }

  return (
    <span className={cn("btn-disabled text-sm", className)} aria-disabled="true">
      {format.status}
    </span>
  );
}
