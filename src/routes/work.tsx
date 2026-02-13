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
      {
        property: "og:title",
        content: "Work Experience | Tharin Kruy",
      },
      {
        property: "og:description",
        content:
          "Detailed professional experience and career journey of Tharin Kruy.",
      },
      {
        property: "og:url",
        content: "https://www.rin-dev.com/work",
      },
      {
        property: "og:image",
        content: "https://www.rin-dev.com/profile.png",
      },
      {
        property: "og:image:width",
        content: "1024",
      },
      {
        property: "og:image:height",
        content: "1024",
      },
      {
        property: "og:image:alt",
        content: "Tharin Kruy - Work Experience",
      },
      {
        name: "twitter:title",
        content: "Work Experience | Tharin Kruy",
      },
      {
        name: "twitter:description",
        content: "Explore Tharin Kruy's professional career and achievements.",
      },
      {
        name: "twitter:image",
        content: "https://www.rin-dev.com/profile.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return <WorkExperience />;
}
