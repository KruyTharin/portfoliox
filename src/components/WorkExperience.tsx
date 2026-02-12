import { EXPERIENCES, Experience } from "../data/experiences";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function WorkExperience() {
  return (
    <section id="experience" className="pt-12 pb-32">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work Experience
            </h2>
            <p className="text-foreground/60 text-lg">
              Professional journey and key contributions
            </p>
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceItem key={exp.company} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }: { exp: Experience; index: number }) {
  return (
    <div className="group border border-border p-8 hover:border-foreground/20 transition-all bg-background">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            {exp.website ? (
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold hover:text-foreground/70 transition-colors inline-flex items-center gap-2"
              >
                {exp.company}
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <h3 className="text-2xl font-bold">{exp.company}</h3>
            )}
          </div>
          <div className="text-foreground/60 mb-1">{exp.role}</div>
          <div className="text-sm text-foreground/40">{exp.period}</div>
        </div>
      </div>

      <p className="text-foreground/70 leading-relaxed mb-6">
        {exp.description}
      </p>

      {exp.achievements && exp.achievements.length > 0 && (
        <div className="mb-6">
          <div className="text-xs font-semibold text-foreground/40 mb-3 uppercase tracking-wider">
            Key Achievements
          </div>
          <ul className="space-y-2">
            {exp.achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-foreground/60 leading-relaxed"
              >
                <span className="text-foreground/30">→</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs bg-secondary border border-border rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
