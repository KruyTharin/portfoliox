import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function Education() {
  const education = [
    {
      school: "Norton University of Phnom Penh",
      degree: "Bachelor of Software Engineering",
      period: "2021 - 2024",
      description:
        "Focused on Software Engineering, Data Structures, and Algorithms.",
    },
    // Add more if needed
  ];

  return (
    <section id="education" className="pt-12 pb-32">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-foreground/60 text-lg">Academic background</p>
          </div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group border border-border p-8 hover:border-foreground/20 transition-all bg-background"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{edu.school}</h3>
                    <div className="text-foreground/60 text-lg">
                      {edu.degree}
                    </div>
                  </div>
                  <div className="text-sm text-foreground/40 font-medium whitespace-nowrap bg-secondary px-3 py-1 rounded-full w-fit">
                    {edu.period}
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
