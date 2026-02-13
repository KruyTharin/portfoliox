import { cn } from "../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  padding?: string;
}

export function Card({
  children,
  className,
  hover = true,
  padding = "p-8",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "border border-border bg-background transition-all duration-700",
        padding,
        hover &&
          "group hover:border-foreground/20 hover:shadow-lg hover:shadow-black/2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
