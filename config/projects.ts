import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface MediaItem {
  type: string;
  src: string;
}

interface PagesInfoInterface {
  title: string;
  mediaArr: (string | MediaItem)[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "edredo",
    companyName: "Edredo (at OpenSense Labs Pvt Ltd)",
    type: "Professional",
    category: ["Web Dev", "Backend"],
    shortDescription:
      "Contributed as an Associate Software Developer (Backend) and optimized a high-performing website catering to over 100,000 users, emphasizing efficiency and maintainability.",
    websiteLink: "https://edredo.com",
    techStack: [
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
    startDate: new Date("2022-12-13"),
    endDate: new Date("2025-05-30"),
    companyLogoImg: "/projects/edredo/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "The landing page of Edredo.com, showcasing the platform's features and offerings",
        mediaArr: [
          {
            type: "image",
            src: "/projects/edredo/landing.png",
          },
        ],
      },
      {
        title: "Clients Dashboard",
        description:
          "The client dashboard where users can manage their organizations, classrooms, goals, see others' posts and profile overview",
        mediaArr: [
          {
            type: "image",
            src: "/projects/edredo/cli_dashboard.png",
          },
        ],
      },
      {
        title: "Profile Management",
        description:
          "The page to manage user profile details, change password and notification settings. Also, they can see their mentees, organizations and classrooms here (termed as 'My Impact' or 'Karma').",
        mediaArr: [
          {
            type: "image",
            src: "/projects/edredo/pro_mgmnt.png",
          },
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During my time at Edredo, I had the opportunity to work on a dynamic and user-focused product that involved designing and optimizing APIs catering to a user base of over 100,000 users. My role as an Associate Software Developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
        "I collaborated closely with the Frontend, QA and product teams to integrate cutting-edge features, employing technologies like Drupal 9 and RESTful APIs for optimal user experiences. Additionally, I contributed significantly to the backend by adding payment gateways and by designing payment APIs to ensure smooth payment and classroom enrollment functionality.",
        "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in back-end technologies like MySQL. The project's success in catering to a large user base and providing an optimal user payment flow has further motivated me to pursue excellence in intelligent systems and data-intensive applications.",
      ],
      bullets: [
        "Developed and optimized RESTful APIs for Edredo (LMS), improving content creation, assignments, and quiz performance (e.g., post creation time cut from 6.88s to <2s) for 100K+ users.",
        "Implemented Unicode (utf8mb4) support, SCORM integration, bulk quiz imports, and payment gateways (Razorpay, Stripe, CCAvenue, Plural).",
        "Led R&D for Drupal 7 to 9 migration: audited 82 custom modules, 148 views; refactored 700+ deprecated PHP calls; ensured OOP and Next.js compatibility.",
        "Collaborated with frontend and QA teams; added custom status codes for 2,400+ endpoints, fixed bugs, handled cron automations and hotfixed deployments.",
        "Built user analytics (karma and expertise), improved search performance, and added features like team assignment locking and enhanced notifications."
      ],
    },
  },
  {
    id: "etl",
    companyName: "E-Commerce ETL Data Analytics Pipeline",
    type: "Personal",
    category: ["Data Science", "ETL", "Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "E-commerce data engineering solution with ETL pipeline and interactive dashboard.",
    websiteLink: "https://ecom-etl-pipeline.streamlit.app/",
    githubLink: "https://github.com/Adesh-Kumar-Sharma/ecommerce-analytics-pipeline",
    techStack: [
      "Python",
      "PostgreSQL",
      "Streamlit",
      "MongoDB",
      "GraphQL",
      "Typescript",
    ],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-10-30"),
    companyLogoImg: "/projects/etl/logo.png",
    pagesInfoArr: [
      {
        title: "Walkthrough Video",
        description:
          "An end-to-end data engineering project that builds a complete ETL pipeline for e-commerce data, stores it in a PostgreSQL data warehouse, and presents real-time business intelligence through an interactive Streamlit dashboard.",
        mediaArr: [
          {
            type: "video",
            src: "https://www.youtube.com/embed/7NimOCNB0WQ",
          },
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The dashboard is organized into several pages for comprehensive analysis. The Overview pane shows High-level KPIs, daily revenue trends, and an orders vs. customers chart. The Customers pane shows Detailed analysis of customer segments and retention metrics. The Products pane shows Treemap of revenue by category and a list of the top-performing products. The Advanced Analytics pane shows Monthly performance, revenue growth rate, and forecasting.",
        "Deployment: The dashboard for this project is deployed on Streamlit Community Cloud. The app is linked to this GitHub repository. The DATABASE_URL is configured securely using Streamlit's secrets management. The app automatically redeploys upon any push to the main branch.",
      ],
      bullets: [
        "Automated ETL Pipeline: Extracts raw data, cleans and transforms it with business logic, and loads it into a structured data warehouse.",
        "Interactive Dashboard: A multi-page Streamlit application for real-time BI, featuring KPIs, trend analysis, and forecasting.",
        "Cloud-Native Database: Utilizes a serverless PostgreSQL database from Neon.tech for scalable and efficient data storage.",
        "Scheduled Updates: The pipeline is designed with scheduling in mind, simulating daily full-loads and hourly incremental updates.",
        "Business Intelligence: Generates key metrics like customer lifetime value, product performance, revenue trends, and retention rates.",
      ],
    },
  },
  {
    id: "mlcp",
    companyName: "ML customer churn prediction backend",
    type: "Personal",
    category: ["Machine Learning", "Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "A machine learning API built with FastAPI to predict customer churn.",
    websiteLink:
      "https://ml-churn-prediction.onrender.com/docs",
    githubLink: "https://github.com/Adesh-Kumar-Sharma/ml-churn-prediction",
    techStack: [
      "FastAPI",
      "Python",
      "Docker",
      "Pandas",
      "scikit-learn",
      "Uvicorn"
    ],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-10-30"),
    companyLogoImg: "/projects/mlcp/logo.png",
    pagesInfoArr: [
      {
        title: "Churn Prediction API Docs Part 1",
        description:
          "API documentation showcasing endpoints for predicting customer churn using FastAPI Part 1",
        mediaArr: [
          {
            type: "image",
            src: "/projects/mlcp/logo.png",
          },
        ],
      },
      {
        title: "Churn Prediction API Docs Part 2",
        description:
          "API documentation showcasing endpoints for predicting customer churn using FastAPI Part 2",
        mediaArr: [
          {
            type: "image",
            src: "/projects/mlcp/docs_2.png",
          },
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The ML Customer Churn Prediction API is a robust backend solution designed to predict customer churn using a machine learning model built with Scikit-learn. The API is developed using FastAPI, a modern web framework for building APIs with Python, and is containerized using Docker for easy deployment and scalability.",
      ],
      bullets: [
        "Prediction API: Exposes a Scikit-learn Random Forest model through a clean RESTful API.",
        "Docker Support: Comes with a Dockerfile for building and deploying as a portable container.",
        "Model Retraining: Includes an endpoint to trigger model retraining on new data.",
        "Health Checks: GET /health endpoint for monitoring and uptime checks.",
        "Interactive Docs: Automatic API documentation provided by FastAPI at the /docs endpoint.",
      ],
    },
  },
  {
    id: "mlcf",
    companyName: "ML customer churn prediction frontend",
    type: "Personal",
    category: ["Machine Learning", "Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Next.js frontend for ml-churn-prediction project with user-friendly interface.",
    websiteLink:"https://ml-churn-frontend.vercel.app/",
    githubLink: "https://github.com/Adesh-Kumar-Sharma/ml-churn-frontend",
    techStack: [
      "Javascript",
      "Node.js",
      "Next.js",
      "React",
      "Typescript"
    ],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-10-30"),
    companyLogoImg: "/projects/mlcf/logo.png",
    pagesInfoArr: [
      {
        title: "Churn Prediction Input Form",
        description: "User-friendly form to input customer data for churn prediction",
        mediaArr: [
          {
            type: "image",
            src: "/projects/mlcf/form.png",
          },
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The ML Customer Churn Prediction Frontend is a user-friendly web application built with Next.js and React. It serves as the frontend interface for the ML Customer Churn Prediction API, allowing users to easily input customer data and receive churn predictions in real-time.",
      ],
      bullets: [
        "Beautiful, user-friendly data input form for churn prediction.",
        "Sends sample data to FastAPI ML API and displays prediction (status & probability).",
        "SPA built with Next.js, React, and Tailwind CSS.",
        "No technical skills needed! No Postman or curl — just try, see results live.",
        "Deployable on Vercel (free) and easily connects to Docker or cloud FastAPI backend.",
      ],
    },
  },
  {
    id: "pf",
    companyName: "Portfolio Website (This website!)",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Portfolio website for Adesh Kumar Sharma built with Next.js and Tailwind CSS.",
    websiteLink: "https://portfolio-adesh-sharma.vercel.app/",
    githubLink: "https://github.com/Adesh-Kumar-Sharma/portfolio-adesh",
    techStack: [
      "Javascript",
      "Next.js",
      "React",
      "Node.js",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "Vercel Analytics",
      "shadcn/ui",
      "Lucide Icons",
    ],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-10-30"),
    companyLogoImg: "/projects/pf/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description: "The landing page of my portfolio website, showcasing my skills, projects, education and experience.",
        mediaArr: [
          {
            type: "image",
            src: "/projects/pf/landing.png",
          },
        ],
      },
      {
        title: "Skills Page",
        description: "The Skills page of my portfolio website, showcasing my key skills that define my professional identity.",
        mediaArr: [
          {
            type: "image",
            src: "/projects/pf/skills.png",
          },
        ],
      },
      {
        title: "Projects Page",
        description: "The Projects page of my portfolio website, showcasing my impactful projects and technical achievements.",
        mediaArr: [
          {
            type: "image",
            src: "/projects/pf/projects.png",
          },
        ],
      },
      {
        title: "Experience Page",
        description: "The Experience page of my portfolio website, showcasing my professional journey and career timeline.",
        mediaArr: [
          {
            type: "image",
            src: "/projects/pf/experience.png",
          },
        ],
      },
      {
        title: "Education Page",
        description: "The Education page of my portfolio website, showcasing my educational background in a timeline format.",
        mediaArr: [
          {
            type: "image",
            src: "/projects/pf/education.png",
          },
        ],
      },
      {
        title: "CV Page",
        description: "The CV/résumé page of my portfolio website, allowing users to view and download my CV.",
        mediaArr: [
          {
            type: "image",
            src: "/projects/pf/cv.png",
          },
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This portfolio website is a modern, responsive Next.js application that showcases my skills, projects, professional experience, and educational background. It is designed to provide a comprehensive overview of my capabilities as a developer and to serve as a platform for potential employers and collaborators to learn more about me.",
      ],
      bullets: [
        "Professional Experience Timeline: Showcases my career journey with a visually appealing timeline",
        "Project Showcase: Displays my technical projects with detailed information and live demos",
        "Educational Timeline: Displays my educational background in a clear timeline format",
        "Skills Showcase: Highlights my technical skills",
        "CV: Displays my CV/résumé with a download option",
        "Dark/Light Mode: Professional appearance with theme support",
        "Responsive Design: Optimized for all devices (mobile, tablet, desktop)",
        "Modern Tech Stack: Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui",
        "Easy Customization: Well-organized code structure for easy updates",
        "Animations: Subtle animations for engaging user experience",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
