import { createFileRoute } from "@tanstack/react-router";
import { TechStack } from "../components/TechStack";

export const Route = createFileRoute("/tech")({
  component: TechPage,
});

function TechPage() {
  return <TechStack />;
}
