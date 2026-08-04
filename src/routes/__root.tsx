import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import appCss from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Annuity Factory Masterclass — Generational Wealth Sales",
      },
      {
        name: "description",
        content:
          "Three-chapter classroom masterclass: $79K demographic reality, FIA zero-floor mechanics, and ethical Vulnerability Gap sales for middle America.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
  errorComponent: AppErrorComponent,
});

function RootComponent() {
  return (
    <html lang="en" className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
