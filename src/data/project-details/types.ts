export type ProjectDetailSubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProjectDetailSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  paragraphsAfterBullets?: string[];
  subsections?: ProjectDetailSubsection[];
};

export type ProjectExtendedDetails = {
  projectTypeLabel: string;
  shortDescription: string;
  sections: ProjectDetailSection[];
};
