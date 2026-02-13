import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { ThemeToggle } from "../components/ThemeToggle";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title:
          "Tharin Kruy | Full-stack Engineer & Digital Experience Designer",
      },
      {
        name: "description",
        content:
          "Tharin Kruy is a Full-stack Engineer based in Phnom Penh, specializing in scalable web applications, AI integration, and high-performance backend systems.",
      },
      {
        name: "keywords",
        content:
          "Tharin Kruy, Full-stack Engineer, Web Development, NestJS, React, AI Integration, Software Engineer Cambodia",
      },
      {
        property: "og:title",
        content: "Tharin Kruy | Full-stack Engineer",
      },
      {
        property: "og:description",
        content:
          "Digital Experience Designer and Full-stack Engineer building the future of web applications.",
      },
      {
        property: "og:image",
        content: "/profile.png",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/profile.png",
      },
      {
        rel: "shortcut icon",
        type: "image/png",
        href: "/profile.png",
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeToggle />
        <main>{children}</main>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
