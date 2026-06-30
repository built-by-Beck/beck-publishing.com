import type { ProjectExtendedDetails } from "./types";
import { extinguisherTrackerDetails } from "./extinguisher-tracker";

const detailsBySlug: Record<string, ProjectExtendedDetails> = {
  "extinguisher-tracker": extinguisherTrackerDetails,
};

export function getProjectExtendedDetails(
  slug: string,
): ProjectExtendedDetails | undefined {
  return detailsBySlug[slug];
}

export type { ProjectExtendedDetails, ProjectDetailSection } from "./types";
