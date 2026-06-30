import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { MokshaLayout } from "@/components/site/moksha-site";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="glass-card max-w-xl rounded-[2rem] p-10 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-heading text-6xl text-foreground">Path not found</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The page you’re looking for has drifted beyond the valley map.
        </p>
        <div className="mt-8">
          <Link to="/" className="inline-flex rounded-full border border-border bg-primary px-6 py-3 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="glass-card max-w-xl rounded-[2rem] p-10 text-center">
        <p className="eyebrow">Unexpected interruption</p>
        <h1 className="mt-4 font-heading text-5xl text-foreground">This page didn’t load</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Something went wrong while rendering the experience. Please try again or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex rounded-full border border-primary/40 bg-primary px-6 py-3 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex rounded-full border border-border bg-card px-6 py-3 text-sm uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-0.5"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Moksha Cottages — Luxury Mountain Retreat in Himachal" },
      {
        name: "description",
        content:
          "A premium mountain retreat in Chalal with luxury cottages, cinematic valley views, boutique dining, and immersive stays.",
      },
      { name: "author", content: "Lovable" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "canonical", href: "/" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <MokshaLayout>
        <Outlet />
      </MokshaLayout>
    </QueryClientProvider>
  );
}
