import { Github, Linkedin, Mail } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    Icon: Github,
    label: "GitHub",
    href: "https://github.com/KruyTharin",
    external: true,
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tharin-kruy-26469b261/",
    external: true,
  },
  {
    Icon: Mail,
    label: "Email",
    href: "mailto:kruytharin17@gmail.com",
    external: false,
  },
] as const;
