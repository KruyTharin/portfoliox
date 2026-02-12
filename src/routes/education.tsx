import { createFileRoute } from "@tanstack/react-router";
import { Education } from "../components/Education";

export const Route = createFileRoute("/education")({
  component: EducationPage,
});

function EducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Education />
    </div>
  );
}
