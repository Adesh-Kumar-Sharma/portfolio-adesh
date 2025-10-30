import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "PHP",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 5,
    icon: Icons.php,
  },
  {
    name: "MySQL",
    description:
      "Technology to manage and organize relational databases efficiently for data-driven applications.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "PHPmyadmin",
    description:
      "A GUI to Manage and organize MySQL databases.",
    rating: 5,
    icon: Icons.phpmyadmin,
  },
  {
    name: "Drupal",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.drupal,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "GraphQL",
    description:
      "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 3,
    icon: Icons.socketio,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Azure",
    description:
      "Utilize Microsoft Azure to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.azure,
  },
  {
    name: "Stripe",
    description:
      "Integrate Stripe to handle online payments securely and efficiently.",
    rating: 5,
    icon: Icons.stripe,
  },
  {
    name: "Razorpay",
    description:
      "Integrate Razorpay to facilitate seamless online payment processing.",
    rating: 5,
    icon: Icons.razorpay,
  },
  {
    name: "JIRA",
    description:
      "Streamline project management and issue tracking with JIRA's robust tools.",
    rating: 5,
    icon: Icons.jira,
  },
  {
    name: "Linux",
    description:
      "Leverage the power of Linux for stable, secure, and efficient server environments.",
    rating: 5,
    icon: Icons.linux,
  },
  {
    name: "Apache",
    description:
      "Deploy and manage web servers effectively using the Apache HTTP Server.",
    rating: 4,
    icon: Icons.apache,
  },
  {
    name: "Python",
    description:
      "Utilize Python for versatile programming, from web development to data analysis.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "PostgreSQL",
    description:
      "A powerful, open-source relational database system for robust data management.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "Streamlit",
    description:
      "Build and deploy interactive web applications for data science and machine learning projects with ease.",
    rating: 4,
    icon: Icons.streamlit,
  },
  {
    name: "FastAPI",
    description:
      "Create high-performance APIs quickly with Python's modern web framework.",
    rating: 4,
    icon: Icons.fastapi,
  },
  {
    name: "Docker",
    description:
      "Containerize applications for consistent environments across development and production.",
    rating: 4,
    icon: Icons.docker,
  },
  {
    name: "Pandas",
    description:
      "Powerful data manipulation and analysis library for Python.",
    rating: 4,
    icon: Icons.pandas,
  },
  {
    name: "Scikit-learn",
    description:
      "A robust machine learning library for Python, offering simple and efficient tools for data mining and analysis.",
    rating: 4,
    icon: Icons.scikitlearn,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 5,
    icon: Icons.bootstrap,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
