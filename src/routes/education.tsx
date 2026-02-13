import { createFileRoute } from "@tanstack/react-router";
import { Education } from "../components/Education";

export const Route = createFileRoute("/education")({
  component: EducationPage,
});

function EducationPage() {
  return <Education />;
}
