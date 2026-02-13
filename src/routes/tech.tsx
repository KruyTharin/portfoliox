import { createFileRoute } from "@tanstack/react-router";
import { TechStack } from "../components/TechStack";

export const Route = createFileRoute("/tech")({
  head: () => ({
    meta: [
      { title: "Tech Stack | Tharin Kruy" },
      {
        name: "description",
        content:
          "Discover the tools and technologies Tharin Kruy uses, from NestJS and React to AI and Vector Databases.",
      },
      {
        property: "og:title",
        content: "Tech Stack | Tharin Kruy",
      },
      {
        property: "og:description",
        content:
          "Core technologies and specialized tools in Tharin Kruy's development stack.",
      },
      {
        property: "og:url",
        content: "https://www.rin-dev.com/tech",
      },
      {
        property: "og:image",
        content: "https://www.rin-dev.com/profile.png",
      },
      {
        name: "twitter:title",
        content: "Tech Stack | Tharin Kruy",
      },
      {
        name: "twitter:description",
        content:
          "Check out the technologies Tharin Kruy uses to build modern apps.",
      },
      {
        name: "twitter:image",
        content: "https://www.rin-dev.com/profile.png",
      },
    ],
  }),
  component: TechPage,
});

function TechPage() {
  return <TechStack />;
}
