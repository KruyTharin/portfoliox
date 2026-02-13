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
        "px-3 py-1 w-fit text-xs rounded-full inline-flex items-center justify-center transition-colors",
        variant === "default" && "bg-secondary text-foreground/80",
        variant === "outline" &&
          "bg-transparent border border-border text-foreground/60",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
