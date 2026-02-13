import { createFileRoute } from "@tanstack/react-router";
import { WorkExperience } from "../components/WorkExperience";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work Experience | Tharin Kruy" },
      {
        name: "description",
        content:
          "Explore Tharin Kruy's professional journey at Wing Bank, Chip Mong Bank, and more.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return <WorkExperience />;
}
