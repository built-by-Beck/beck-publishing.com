"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type MediaImageProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

export function MediaImage({
  src,
  alt,
  label,
  className,
  fill,
  width = 800,
  height = 600,
  priority,
  sizes,
}: MediaImageProps) {
  const [error, setError] = useState(false);
  const placeholderLabel = label || alt;

  if (error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-violet-950/40 text-center p-6",
          fill ? "absolute inset-0" : "aspect-[4/3] w-full",
          className,
        )}
        aria-label={`${placeholderLabel} — image placeholder`}
      >
        <span className="text-sm font-medium text-zinc-400">{placeholderLabel}</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        onError={() => setError(true)}
        priority={priority}
        sizes={sizes || "100vw"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover", className)}
      onError={() => setError(true)}
      priority={priority}
      sizes={sizes}
    />
  );
}
