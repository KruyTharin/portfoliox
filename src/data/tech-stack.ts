export interface TechItem {
  name: string;
  slug?: string;
  customUrl?: string;
}

export const TECH_STACK: TechItem[] = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "NestJS", slug: "nestjs" },
  { name: "Vue.js", slug: "vuedotjs" },
  { name: "Nuxt.js", slug: "nuxt" },
  { name: "PostgreSQL", slug: "postgresql" },
  {
    name: "Qdrant",
    customUrl:
      "https://qdrant.tech/img/brand-resources-logos/qdrant-brandmark-red.svg",
  },
  { name: "Vault", slug: "vault" },
  {
    name: "Java",
    customUrl: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  },
  { name: "Strapi", slug: "strapi" },
  { name: "Docker", slug: "docker" },
  { name: "TailwindCSS", slug: "tailwindcss" },
  { name: "Figma", slug: "figma" },
];
