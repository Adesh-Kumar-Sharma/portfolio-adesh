import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "osl",
    position: "Software Development Trainee",
    company: "OpenSense Labs",
    location: "Bhopal, India",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-03-01"),
    description: [
      "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2).",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations.",
      "Deployed ML models on AWS SageMaker instead of Replicate.",
    ],
    achievements: [
      "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2), improving function call accuracy by 40%.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      "Deployed ML models on AWS SageMaker instead of Replicate, cutting load times by 30%.",
      "Created a Next.js dashboard for user analytics.",
    ],
    skills: ["Next.js", "React", "Node.js", "AWS", "MongoDB", "Typescript"],
    companyUrl: "https://opensenselabs.com",
    logo: "/experience/osl-logo.png",
  },
  {
    id: "osl",
    position: "Associate Software Developer",
    company: "OpenSense Labs",
    location: "Bhopal, India",
    startDate: new Date("2022-12-13"),
    endDate: new Date("2025-03-31"),
    description: [
      "Developed websites using React, Angular, and GraphQL.",
      "Set up AWS servers and CI/CD pipelines.",
      "Built a multi-page PDF reader for large files (>300MB).",
    ],
    achievements: [
      "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
      "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
      "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
    ],
    skills: [
      "React",
      "GraphQL",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://edredo.com",
    logo: "/experience/edredo-logo.png",
  },
];
