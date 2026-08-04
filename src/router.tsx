import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { AppErrorComponent } from "@/lib/error-component";

export function getRouter() {
  const router = createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultPreload: "intent",
    defaultPendingMs: 100,
  });
  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
