import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-10 right-10 z-50 p-2 group outline-hidden",
        className,
      )}
      aria-label="Toggle theme"
    >
      <div className="relative flex items-center gap-4">
        <div className="flex flex-col text-right">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-30 group-hover:opacity-100 transition-opacity duration-500">
            {isDark ? "Night" : "Day"}
          </span>
          <span className="text-[8px] font-mono tracking-[0.2em] uppercase opacity-20">
            Mode
          </span>
        </div>

        <div className="w-px h-8 bg-border group-hover:scale-y-125 transition-transform duration-500 origin-center" />

        <div className="relative w-10 h-10 flex items-center justify-center border border-border group-hover:border-foreground/20 group-hover:rotate-90 transition-all duration-700">
          <div className="relative w-4 h-4">
            <Sun
              className={cn(
                "h-full w-full absolute transition-all duration-500",
                isDark
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-40 rotate-0 scale-100",
              )}
            />
            <Moon
              className={cn(
                "h-full w-full absolute transition-all duration-500",
                isDark
                  ? "opacity-40 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-0",
              )}
            />
          </div>
        </div>
      </div>
    </button>
  );
}
