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
    position: "Associate Software Developer",
    company: "OpenSense Labs",
    location: "Bhopal, India",
    startDate: new Date("2023-01-28"),
    endDate: new Date("2025-03-31"),
    description: [
      "Worked as an Associate Software Developer (Back-end developer), on Edredo.com, at OpenSense Labs.",
    ],
    achievements: [
      "Developed and optimized RESTful APIs for Edredo (LMS), improving content creation, assignments, and quiz performance (e.g., post creation time cut from 6.88s to <2s) for 100K+ users.",
      "Implemented Unicode (utf8mb4) support, SCORM integration, bulk quiz imports, and payment gateways (Razorpay, Stripe, CCAvenue, Plural).",
      "Led R&D for Drupal 7 to 9 migration: audited 82 custom modules, 148 views; refactored 700+ deprecated PHP calls; ensured OOP and Next.js compatibility.",
      "Collaborated with frontend and QA teams; added custom status codes for 2,400+ endpoints, fixed bugs, handled cron automations and hotfixed deployments.",
      "Built user analytics (karma and expertise), improved search performance, and added features like team assignment locking and enhanced notifications."
    ],
    skills: [
      "LAMP Stack",
      "Drupal",
      "PHP",
      "MySQL",
      "Git",
      "GitHub",
      "GitLab",
      "BitBucket",
      "Postman",
      "REST APIs",
      "SCORM",
      "Stripe",
      "Razorpay",
      "CCAvenue",
      "Plural",
      "JIRA",
      "Linux",
      "Apache",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://opensenselabs.com",
    logo: "/experience/osl-logo.png",
  },
  {
    id: "oslt",
    position: "Software Development Trainee",
    company: "OpenSense Labs",
    location: "Bhopal, India",
    startDate: new Date("2022-07-22"),
    endDate: new Date("2023-01-27"),
    description: [
      "Learned and worked upon projects on: LAMP Stack, MERN Stack, Drupal, Version control, Remote repositories, Web development",
    ],
    achievements: [
      "Submitted assignments on Web Development and Drupal 9.",
      "Got knowledge on Git and GitHub.",
      "Used Storybook to develop modern websites.",
      "Learned Linux Environment, Servers and Apache.",
    ],
    skills: [
      "LAMP Stack",
      "MERN Stack",
      "Drupal",
      "Git",
      "GitHub",
      "Storybook",
      "Linux",
      "Apache"
    ],
    companyUrl: "https://opensenselabs.com",
    logo: "/experience/osl-logo.png",
  },
];
