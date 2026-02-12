import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-purple-500/30">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-foreground/5 dark:bg-foreground/5 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-foreground/5 dark:bg-foreground/5 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 uppercase italic">
            Designing digital <br />
            <span className="text-foreground">experiences.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-foreground/60 mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            I'm Tharin, a full-stack developer focused on building
            high-performance web applications with beautiful, intuitive user
            interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <button className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-foreground/5">
              Work with me
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-secondary/30 border-y border-border overflow-hidden">
        <div className="container px-6 text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic leading-none">
            Tech Stack
          </h2>
          <p className="text-foreground/60 text-base leading-tight mx-auto max-w-2xl">
            I support every major serverful and serverless runtime.
          </p>
        </div>

        {/* Infinite Scrolling Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-secondary/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-secondary/30 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="flex gap-6 animate-scroll hover:pause-animation">
            {/* First set of items */}
            {[
              { name: "React", slug: "react" },
              { name: "Next.js", slug: "nextdotjs" },
              { name: "TypeScript", slug: "typescript" },
              { name: "Node.js", slug: "nodedotjs" },
              { name: "TailwindCSS", slug: "tailwindcss" },
              { name: "PostgreSQL", slug: "postgresql" },
              { name: "Prisma", slug: "prisma" },
              { name: "Docker", slug: "docker" },
              {
                name: "Qdrant",
                customUrl:
                  "https://qdrant.tech/img/brand-resources-logos/qdrant-brandmark-red.svg",
              },
              { name: "Vault", slug: "vault" },
              { name: "Git", slug: "git" },
              { name: "Figma", slug: "figma" },
            ].map((item, i) => (
              <div
                key={`first-${i}`}
                className="group relative flex items-center justify-center w-32 h-32 shrink-0 rounded-3xl bg-linear-to-br from-background to-secondary/50 border border-border hover:border-foreground/30 hover:shadow-2xl hover:shadow-foreground/5 hover:scale-110 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-foreground/0 to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Tooltip */}
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-foreground text-background text-sm font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none shadow-2xl z-10">
                  {item.name}
                  {/* Arrow */}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-foreground"></span>
                </span>

                {/* Icon */}
                <div
                  className={`relative w-12 h-12 flex items-center justify-center z-1 ${
                    item.name === "Next.js"
                      ? "dark:bg-white dark:rounded-full dark:p-1"
                      : ""
                  }`}
                >
                  <img
                    src={
                      (item as any).customUrl ||
                      `https://cdn.simpleicons.org/${(item as any).slug}`
                    }
                    alt={item.name}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate set for infinite loop */}
            {[
              { name: "React", slug: "react" },
              { name: "Next.js", slug: "nextdotjs" },
              { name: "TypeScript", slug: "typescript" },
              { name: "Node.js", slug: "nodedotjs" },
              { name: "TailwindCSS", slug: "tailwindcss" },
              { name: "PostgreSQL", slug: "postgresql" },
              { name: "Prisma", slug: "prisma" },
              { name: "Docker", slug: "docker" },
              {
                name: "Qdrant",
                customUrl:
                  "https://qdrant.tech/img/brand-resources-logos/qdrant-brandmark-red.svg",
              },
              { name: "Vault", slug: "vault" },
              { name: "Git", slug: "git" },
              { name: "Figma", slug: "figma" },
            ].map((item, i) => (
              <div
                key={`second-${i}`}
                className="group relative flex items-center justify-center w-32 h-32 shrink-0 rounded-3xl bg-linear-to-br from-background to-secondary/50 border border-border hover:border-foreground/30 hover:shadow-2xl hover:shadow-foreground/5 hover:scale-110 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-foreground/0 to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Tooltip */}
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-foreground text-background text-sm font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none shadow-2xl z-10">
                  {item.name}
                  {/* Arrow */}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-foreground"></span>
                </span>

                {/* Icon */}
                <div
                  className={`relative w-12 h-12 flex items-center justify-center z-1 ${
                    item.name === "Next.js"
                      ? "dark:bg-white dark:rounded-full dark:p-1"
                      : ""
                  }`}
                >
                  <img
                    src={
                      (item as any).customUrl ||
                      `https://cdn.simpleicons.org/${(item as any).slug}`
                    }
                    alt={item.name}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="px-4 py-12 text-center text-foreground/40 text-sm border-t border-border">
        <p>&copy; {new Date().getFullYear()} rin.dev. Designed with pride.</p>
      </footer>
    </div>
  );
}
