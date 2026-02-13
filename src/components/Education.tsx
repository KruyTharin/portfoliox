import { SubpageHeader } from "./SubpageHeader";
import { Card } from "./Card";
import { Badge } from "./Badge";

export function Education() {
  const education = [
    {
      school: "Norton University",
      degree: "Bachelor of Software Engineering",
      period: "2021 - 2024",
      description:
        "Focused on Software Engineering, Data Structures, and Algorithms. Developed a strong foundation in modern software development methodologies, computer science principles, and system architecture.",
      highlights: [
        "Advanced Web Technologies",
        "Database Management Systems",
        "System Analysis and Design",
        "Object-Oriented Programming (Java/C#)",
      ],
    },
    // Add more if needed
  ];

  return (
    <section id="education" className="pt-12 pb-32">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <SubpageHeader
            title="Education"
            description="Academic background and continuous learning journey."
          />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <Card key={index}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{edu.school}</h3>
                    <div className="text-foreground/60 text-lg">
                      {edu.degree}
                    </div>
                  </div>
                  <Badge variant="outline">{edu.period}</Badge>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {edu.description}
                </p>
                {edu.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <Badge
                        key={highlight}
                        variant="default"
                        className="bg-foreground/5 text-foreground/60 border-none"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
