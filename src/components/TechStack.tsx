import { TECH_STACK } from "../data/tech-stack";
import { SubpageHeader } from "./SubpageHeader";
import { Card } from "./Card";

export function TechStack() {
  return (
    <section id="tech" className="pt-12 pb-32">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <SubpageHeader
            title="Tech Stack"
            description="Tools and technologies I work with regularly to build modern web applications."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {TECH_STACK.map((tech) => (
              <Card key={tech.name} padding="p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  {tech.customUrl ? (
                    <img
                      src={tech.customUrl}
                      alt={tech.name}
                      className="w-10 h-10 opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <img
                      src={`https://cdn.simpleicons.org/${
                        tech.slug || tech.name.toLowerCase().replace(".", "dot")
                      }`}
                      alt={tech.name}
                      className="w-10 h-10 opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  <span className="text-sm font-semibold tracking-wide uppercase text-foreground/70 group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
