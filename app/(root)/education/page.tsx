import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/education/timeline";
import { educations } from "@/config/education";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.education.metadata.title} | Professional Education Timeline`,
  description: `${pagesConfig.education.metadata.description} Explore my professional journey and career milestones in software development.`,
  keywords: [
    "education timeline",
    "professional education",
    "engineering education",
    "developer portfolio",
    "work education",
  ],
  alternates: {
    canonical: `${siteConfig.url}/education`,
  },
};

export default function EducationPage() {
  return (
    <PageContainer
      title={pagesConfig.education.title}
      description={pagesConfig.education.description}
    >
      <Timeline educations={educations} />
    </PageContainer>
  );
}
