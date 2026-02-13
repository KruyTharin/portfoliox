import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={
        className ||
        "fixed top-6 right-6 z-50 p-3 border border-border bg-background/80 backdrop-blur-sm hover:bg-secondary transition-colors rounded-lg outline-none"
      }
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="h-5 w-5 text-foreground/60 transition-colors" />
      ) : (
        <Sun className="h-5 w-5 text-foreground/60 transition-colors" />
      )}
    </button>
  );
}
