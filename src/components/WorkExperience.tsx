import { EXPERIENCES, Experience } from "../data/experiences";
import { ExternalLink } from "lucide-react";
import { SubpageHeader } from "./SubpageHeader";
import { Card } from "./Card";
import { Badge } from "./Badge";

export function WorkExperience() {
  return (
    <section id="experience" className="pt-12 pb-32">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <SubpageHeader
            title="Work Experience"
            description="My professional journey, key roles, and major contributions in the software industry."
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp) => (
              <ExperienceItem key={exp.company} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp }: { exp: Experience }) {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
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
          <div className="text-foreground/60 text-lg mb-1">{exp.role}</div>
          <div className="text-sm text-foreground/40 font-medium">
            {exp.period}
          </div>
        </div>
      </div>

      <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
        {exp.description}
      </p>

      {exp.achievements && exp.achievements.length > 0 && (
        <div className="mb-8">
          <div className="text-xs font-semibold text-foreground/40 mb-4 uppercase tracking-widest">
            Key Achievements
          </div>
          <ul className="space-y-3">
            {exp.achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex gap-3 text-foreground/60 leading-relaxed"
              >
                <span className="text-foreground/30 mt-1">→</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
