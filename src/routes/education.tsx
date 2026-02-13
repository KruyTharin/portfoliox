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
      {
        property: "og:title",
        content: "Education | Tharin Kruy",
      },
      {
        property: "og:description",
        content: "Academic qualifications and certifications of Tharin Kruy.",
      },
      {
        property: "og:url",
        content: "https://www.rin-dev.com/education",
      },
      {
        property: "og:image",
        content: "https://www.rin-dev.com/profile.png",
      },
      {
        name: "twitter:title",
        content: "Education | Tharin Kruy",
      },
      {
        name: "twitter:description",
        content:
          "Tharin Kruy's educational background and software engineering degree.",
      },
      {
        name: "twitter:image",
        content: "https://www.rin-dev.com/profile.png",
      },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return <Education />;
}
