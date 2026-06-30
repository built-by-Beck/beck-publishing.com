import { MediaImage } from "@/components/shared/MediaImage";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type AuthorPhotoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizeClasses = {
  sm: "h-24 w-24",
  md: "h-36 w-36",
  lg: "h-48 w-48 md:h-56 md:w-56",
};

export function AuthorPhoto({ className, size = "md", priority }: AuthorPhotoProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-violet-500/10",
        sizeClasses[size],
        className,
      )}
    >
      <MediaImage
        src={siteConfig.authorPhoto}
        alt={`${siteConfig.ownerName}, author and developer`}
        label={siteConfig.ownerName}
        fill
        priority={priority}
        sizes="(max-width: 768px) 144px, 224px"
        className="object-cover object-top"
      />
    </div>
  );
}
