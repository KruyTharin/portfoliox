import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

interface SubpageHeaderProps {
  title: string;
  description: string;
}

export function SubpageHeader({ title, description }: SubpageHeaderProps) {
  return (
    <div className="mb-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase">
          {title}
        </h2>
        <p className="text-foreground/60 text-lg md:text-xl max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
