import { createFileRoute } from "@tanstack/react-router";
import { Education } from "../components/Education";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education | Tharin Kruy" },
      {
        name: "description",
        content:
          "Academic background of Tharin Kruy, including a Bachelor of Software Engineering from Norton University.",
      },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return <Education />;
}
