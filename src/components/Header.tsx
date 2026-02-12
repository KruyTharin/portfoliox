import { Link } from "@tanstack/react-router";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const NAV_LINKS = [
  { label: "Overview", to: "/" },
  { label: "Studio", to: "/" },
  { label: "Benchmarks", to: "/" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <TopBanner />

      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="flex items-center gap-8 border border-border p-2 px-6 rounded-full bg-secondary/50 backdrop-blur-sm shadow-xs">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[
              { Icon: Github, label: "GitHub", href: "#" },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
              { Icon: Mail, label: "Email", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group relative p-2 text-foreground/40 hover:text-foreground transition-colors"
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="w-px h-4 bg-border"></div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function TopBanner() {
  return (
    <div className="bg-secondary border-b border-border py-1.5 px-4 text-center">
      <p className="text-[11px] font-medium text-foreground/60 tracking-wide uppercase">
        ✨ Currently{" "}
        <span className="text-foreground font-bold">
          open for new opportunities
        </span>{" "}
        — Let's build something amazing together!
      </p>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group relative">
      <span className="text-xl font-bold tracking-tight text-foreground uppercase italic leading-none">
        rin.dev
      </span>

      <span className="absolute -right-3 bottom-2.5 flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/50 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
      </span>
    </Link>
  );
}

function NavLink({ label, to }: { label: string; to: string }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors relative group py-1"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
    </Link>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (theme === "dark" || (!theme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = useCallback(
    (event: React.MouseEvent) => {
      const isAppearanceTransition =
        //@ts-ignore
        document.startViewTransition &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!isAppearanceTransition) {
        const nextDark = !isDark;
        setIsDark(nextDark);
        document.documentElement.classList.toggle("dark", nextDark);
        localStorage.setItem("theme", nextDark ? "dark" : "light");
        return;
      }

      const x = event.clientX;
      const y = event.clientY;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      //@ts-ignore
      const transition = document.startViewTransition(async () => {
        const nextDark = !isDark;
        setIsDark(nextDark);
        document.documentElement.classList.toggle("dark", nextDark);
        localStorage.setItem("theme", nextDark ? "dark" : "light");
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        document.documentElement.animate(
          {
            clipPath: isDark ? [...clipPath].reverse() : clipPath,
          },
          {
            duration: 500,
            easing: "ease-in-out",
            pseudoElement: isDark
              ? "::view-transition-old(root)"
              : "::view-transition-new(root)",
          },
        );
      });
    },
    [isDark],
  );

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 hover:bg-secondary rounded-xl transition-colors border border-transparent hover:border-border group"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="h-5 w-5 text-foreground/60 group-hover:text-foreground transition-colors" />
      ) : (
        <Sun className="h-5 w-5 text-foreground/60 group-hover:text-foreground transition-colors" />
      )}
    </button>
  );
}
