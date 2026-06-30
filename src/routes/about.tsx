import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Moksha Cottages — Luxury Mountain Story" },
      {
        name: "description",
        content:
          "Learn the story behind Moksha Cottages, a boutique mountain retreat shaped by warm design, immersive nature, and premium hospitality.",
      },
      { property: "og:title", content: "About Moksha Cottages — Luxury Mountain Story" },
      {
        property: "og:description",
        content:
          "Discover the philosophy, atmosphere, and design behind Moksha Cottages in Himachal Pradesh.",
      },
    ],
  }),
  component: AboutPage,
});
