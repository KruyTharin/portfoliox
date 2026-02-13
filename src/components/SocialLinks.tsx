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
            "group relative transition-all duration-500 text-foreground/30 hover:text-foreground",
            showUnderline && "px-2 py-1",
          )}
        >
          <Icon className={cn("shrink-0", iconClassName)} />
          {showUnderline && (
            <span className="absolute bottom-0 left-2 w-0 h-[0.5px] bg-foreground transition-all duration-500 group-hover:w-[calc(100%-16px)]" />
          )}
        </a>
      ))}
    </div>
  );
}
