import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Adesh-Kumar-Sharma",
    icon: Icons.gitHub,
    link: "https://github.com/Adesh-Kumar-Sharma",
  },
  {
    name: "LinkedIn",
    username: "adesh-kumar-sharma-jbp",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/adesh-kumar-sharma-jbp/",
  },
  {
    name: "Gmail",
    username: "adeshsharma582",
    icon: Icons.gmail,
    link: "mailto:adeshsharma582@gmail.com",
  },
];
