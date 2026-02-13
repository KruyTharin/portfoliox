import { createFileRoute } from "@tanstack/react-router";
import { WorkExperience } from "../components/WorkExperience";

export const Route = createFileRoute("/work")({ component: WorkPage });

function WorkPage() {
  return <WorkExperience />;
}
