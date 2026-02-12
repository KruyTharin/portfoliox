import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="lg:col-span-7">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none">
              Tharin Kruy
            </h1>

            <p className="text-xl md:text-2xl text-foreground/60 mb-8 max-w-xl leading-relaxed">
              I build scalable web applications and backend systems.
            </p>

            <div className="flex flex-wrap gap-8 mb-12">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group border-b border-foreground/20 hover:border-foreground pb-0.5"
              >
                View Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/tech"
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group border-b border-foreground/20 hover:border-foreground pb-0.5"
              >
                View Stack
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/education"
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group border-b border-foreground/20 hover:border-foreground pb-0.5"
              >
                View Education
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:kruytharin17@gmail.com"
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground pb-0.5"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-6">
              {[
                {
                  Icon: Github,
                  href: "https://github.com/KruyTharin",
                  label: "GitHub",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/tharin-kruy-26469b261/",
                  label: "LinkedIn",
                },
                {
                  Icon: Mail,
                  href: "mailto:kruytharin17@gmail.com",
                  label: "Email",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/40 hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Info cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-border p-6 bg-background/50 backdrop-blur">
              <div className="text-xs text-foreground/40 mb-2">
                CURRENT ROLE
              </div>
              <div className="font-semibold">Full-stack Engineer</div>
              <div className="text-foreground/60">Wing Bank</div>
            </div>

            <div className="border border-border p-6 bg-background/50 backdrop-blur">
              <div className="text-xs text-foreground/40 mb-2">LOCATION</div>
              <div className="font-semibold">Phnom Penh, Cambodia</div>
              <div className="text-foreground/60">Open to remote work</div>
            </div>

            <div className="border border-border p-6 bg-background/50 backdrop-blur">
              <div className="text-xs text-foreground/40 mb-2">FOCUS AREAS</div>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Web Development", "Backend Systems", "API Design"].map(
                  (area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-secondary text-sm rounded-full"
                    >
                      {area}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
