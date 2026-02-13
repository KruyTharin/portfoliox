export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements?: string[];
  tags: string[];
  website?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Wing Bank",
    role: "Full Stack Engineer",
    period: "Aug 2025 — Present",
    website: "https://www.wingbank.com.kh/en",
    description:
      "Researching and deploying AI-driven systems and facial recognition services in production.",
    achievements: [
      "Engineered a core service provider for facial verification and recognition using high-dimensional vector embeddings.",
      "Architected and deployed production-ready identity verification solutions powered by AI.",
    ],
    tags: ["Nest.js", "Vault", "Qdrant", "PostgreSQL"],
  },
  {
    company: "Chip Mong Bank",
    role: "Web Developer",
    period: "Aug 2024 — Aug 2025",
    website: "https://www.chipmongbank.com/en",
    description:
      "Developed banking mini-apps and internal management portals that integrate with core banking and loan systems.",
    achievements: [
      "Built a CRM mini-app for loans that supports full eKYC and works offline on multiple devices.",
      "Developed a portal to manage settings for mobile banking and internet banking platforms.",
      "Created several mini-apps to expand digital services within the bank's ecosystem.",
    ],
    tags: ["Nest.Js", "Vue.js", "Java Spring", "Tailwind CSS"],
  },
  {
    company: "Mantisy",
    role: "Web Developer",
    period: "Jul 2023 — Aug 2024",
    description:
      "Focused on building back-office management tools and mobile mini-apps for parking systems and booking apps.",
    achievements: [
      "Built a mini-app for booking places that includes payment integration with local ABA Bank.",
      "Developed back-office applications to manage data for parking and booking services.",
      "Created and maintained websites for organizations and several government projects.",
    ],
    tags: ["Nest.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
  },
  {
    company: "OneWorld Technology",
    role: "Web Developer",
    period: "Nov 2022 — Jun 2023",
    website: "https://www.oneworldsoftware.com/home",
    description:
      "Started by building various website designs and implementing content management systems for web projects.",
    achievements: [
      "Designed and developed multiple responsive websites with a focus on clean user interfaces.",
      "Implemented Strapi CMS to allow clients to easily manage and update their website content.",
    ],
    tags: ["Next.js", "Strapi", "Tailwind CSS"],
  },
];
