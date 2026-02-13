import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { SocialLinks } from "./SocialLinks";

const HERO_LINKS = [
  { label: "View Work", to: "/work" },
  { label: "View Stack", to: "/tech" },
  { label: "View Education", to: "/education" },
] as const;

const HERO_INFO = [
  {
    label: "CURRENT ROLE",
    title: "Full-stack Engineer",
    subtitle: "Wing Bank",
  },
  {
    label: "LOCATION",
    title: "Phnom Penh, Cambodia",
    subtitle: "Open to remote work",
  },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-dvh flex items-center relative py-20 lg:py-0"
    >
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight md:leading-none">
              Tharin Kruy
            </h1>

            <p className="text-xl md:text-2xl text-foreground/60 mb-8 max-w-xl leading-relaxed">
              I build scalable web applications and backend systems.
            </p>

            <div className="flex flex-wrap gap-8 mb-12">
              {HERO_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group border-b border-foreground/20 hover:border-foreground pb-0.5"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
              <a
                href="mailto:kruytharin17@gmail.com"
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground pb-0.5"
              >
                Get in Touch
              </a>
            </div>

            <SocialLinks className="gap-6" />
          </div>

          {/* Right side - Info cards */}
          <div className="lg:col-span-5 space-y-4">
            {HERO_INFO.map((info) => (
              <Card key={info.label}>
                <div className="text-xs text-foreground/40 mb-2 font-medium tracking-wider">
                  {info.label}
                </div>
                <div className="font-semibold text-lg">{info.title}</div>
                <div className="text-foreground/60">{info.subtitle}</div>
              </Card>
            ))}

            <Card>
              <div className="text-xs text-foreground/40 mb-2 font-medium tracking-wider">
                FOCUS AREAS
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Web Development",
                  "Backend Systems",
                  "API Design",
                  "AI Integration",
                ].map((area) => (
                  <Badge key={area}>{area}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
