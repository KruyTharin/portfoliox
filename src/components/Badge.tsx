import { cn } from "../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "outline";
}

export function Badge({
  children,
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "px-4 py-1.5 w-fit text-xs font-mono uppercase tracking-widest transition-all",
        variant === "default" &&
          "bg-secondary text-foreground/70 hover:text-foreground",
        variant === "outline" &&
          "bg-transparent border border-border text-foreground/60 hover:border-foreground/40 hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
