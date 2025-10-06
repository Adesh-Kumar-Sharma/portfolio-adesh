export interface EducationInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  companyUrl?: string;
  logo?: string;
}

export const educations: EducationInterface[] = [
  {
    id: "jec",
    position: "B. Tech. (Electrical Engineering)",
    company: "Jabalpur Engineering College",
    location: "Jabalpur, India",
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
    companyUrl: "https://www.jecjabalpur.ac.in/index.aspx",
    logo: "/education/jec.png",
  },
  {
    id: "joseph",
    position: "Higher Secondary Certificate",
    company: "St. Joseph's Public School",
    location: "Ranpur, Kota, India",
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
    companyUrl: "https://edredo.com",
    logo: "/education/joseph.png",
  },
  {
    id: "gabriel",
    position: "Senior Secondary Certificate",
    company: "St. Gabriel's Senior Secondary School",
    location: "Jabalpur, India",
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
    companyUrl: "https://edredo.com",
    logo: "/education/gabriel.png",
  },
];
