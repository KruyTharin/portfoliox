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
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container px-6 text-center">
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic leading-none">
              Tech Stack
            </h2>
            <p className="text-foreground/60 text-base leading-tight mx-auto max-w-2xl">
              I support every major serverful and serverless runtime.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {[
              { name: "React", slug: "react" },
              { name: "Next.js", slug: "nextdotjs" },
              { name: "TypeScript", slug: "typescript" },
              { name: "Node.js", slug: "nodedotjs" },
              { name: "TailwindCSS", slug: "tailwindcss" },
              { name: "PostgreSQL", slug: "postgresql" },
              { name: "Prisma", slug: "prisma" },
              { name: "Docker", slug: "docker" },
              { name: "Vercel", slug: "vercel" },
              { name: "Qdrant", slug: "qdrant" },
              { name: "Vault", slug: "vault" },
              { name: "Git", slug: "git" },
              { name: "Figma", slug: "figma" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-background border border-border hover:border-foreground/20 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                  <img
                    src={`https://cdn.simpleicons.org/${item.slug}`}
                    alt={item.name}
                    className="w-full h-full object-contain grayscale transition-all duration-300"
                  />
                </div>
                <span className="font-bold text-xs tracking-tight text-center">
                  {item.name}
                </span>
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
