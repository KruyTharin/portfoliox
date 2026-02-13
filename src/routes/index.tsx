import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:url",
        content: "https://www.rin-dev.com",
      },
    ],
  }),
  component: App,
});

function App() {
  return <Hero />;
}
