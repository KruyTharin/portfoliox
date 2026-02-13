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
    ],
  }),
  component: TechPage,
});

function TechPage() {
  return <TechStack />;
}
