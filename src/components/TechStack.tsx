import { TECH_STACK } from "../data/tech-stack";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function TechStack() {
  return (
    <section id="tech" className="pt-12 pb-32">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
            <p className="text-foreground/60 text-lg">
              Tools and technologies I work with regularly
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="group relative border border-border bg-background p-6 hover:border-foreground/20 transition-all"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  {tech.customUrl ? (
                    <img
                      src={tech.customUrl}
                      alt={tech.name}
                      className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <img
                      src={`https://cdn.simpleicons.org/${
                        tech.slug || tech.name.toLowerCase().replace(".", "dot")
                      }`}
                      alt={tech.name}
                      className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
