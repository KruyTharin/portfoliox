import { createFileRoute } from "@tanstack/react-router";
import { TechStack } from "../components/TechStack";

export const Route = createFileRoute("/tech")({
  component: TechPage,
});

function TechPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <TechStack />
    </div>
  );
}
