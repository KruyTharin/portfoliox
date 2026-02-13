import { SOCIAL_LINKS } from "../data/socials";
import { cn } from "../lib/utils";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  showUnderline?: boolean;
}

export function SocialLinks({
  className,
  iconClassName = "w-5 h-5",
  showUnderline = false,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      {SOCIAL_LINKS.map(({ Icon, label, href, external }) => (
        <a
          key={label}
          href={href}
          target={external !== false ? "_blank" : undefined}
          rel={external !== false ? "noopener noreferrer" : undefined}
          aria-label={label}
          className={cn(
            "group relative transition-colors text-foreground/40 hover:text-foreground",
            showUnderline && "p-2",
          )}
        >
          <Icon className={cn("shrink-0", iconClassName)} />
          {showUnderline && (
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
          )}
        </a>
      ))}
    </div>
  );
}
