import { Link } from "@tanstack/react-router";
import { Sun, Moon, Github, Mail, Linkedin } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@base-ui-components/react/button";

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
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[
              {
                Icon: Github,
                label: "GitHub",
                href: "https://github.com/KruyTharin",
                external: true,
              },
              {
                Icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/tharin-kruy-26469b261/",
                external: true,
              },
              {
                Icon: Mail,
                label: "Email",
                href: "mailto:kruytharin17@gmail.com",
                external: false,
              },
            ].map(({ Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="group relative p-2 text-foreground/40 hover:text-foreground transition-colors outline-hidden"
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

function Logo() {
  return (
    <Link to="/" className="flex items-center group">
      <span className="text-xl font-black tracking-tighter text-foreground uppercase leading-none hover:text-foreground/60 transition-colors">
        Tharin.
      </span>
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
            clipPath: clipPath,
          },
          {
            duration: 400,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
    },
    [isDark],
  );

  return (
    <Button
      onClick={toggleTheme}
      className="p-2.5 hover:bg-secondary rounded-xl transition-colors border border-transparent hover:border-border group outline-hidden"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="h-5 w-5 text-foreground/60 group-hover:text-foreground transition-colors" />
      ) : (
        <Sun className="h-5 w-5 text-foreground/60 group-hover:text-foreground transition-colors" />
      )}
    </Button>
  );
}
