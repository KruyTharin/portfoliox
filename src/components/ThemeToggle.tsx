import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function ThemeToggle() {
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
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 border border-border bg-background/80 backdrop-blur-sm hover:bg-secondary transition-colors rounded-lg"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="h-5 w-5 text-foreground/60" />
      ) : (
        <Sun className="h-5 w-5 text-foreground/60" />
      )}
    </button>
  );
}
