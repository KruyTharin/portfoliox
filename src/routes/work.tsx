import { createFileRoute } from "@tanstack/react-router";
import { WorkExperience } from "../components/WorkExperience";

export const Route = createFileRoute("/work")({ component: WorkPage });

function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <WorkExperience />
    </div>
  );
}
