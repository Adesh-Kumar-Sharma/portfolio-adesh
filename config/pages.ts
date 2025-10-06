import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Adesh Kumar Sharma's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Adesh Kumar Sharma's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Adesh Kumar Sharma's projects in building web applications.",
    },
  },
  education: {
    title: "Education",
    description: "My educational background.",
    metadata: {
      title: "Education",
      description: "Adesh Kumar Sharma's educational background.",
    },
  },
  cv: {
    title: "CV/résumé",
    description: "Adesh Kumar Sharma's CV/résumé.",
    metadata: {
      title: "CV/résumé",
      description: "Adesh Kumar Sharma's CV/résumé.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Adesh Kumar Sharma's professional journey and experience timeline.",
    },
  },
};
