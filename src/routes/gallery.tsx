import { createFileRoute } from "@tanstack/react-router";

import { GalleryPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Moksha Cottages" },
      {
        name: "description",
        content:
          "Browse the gallery of Moksha Cottages featuring wooden rooms, mountain landscapes, food, bonfire nights, and luxury stay moments.",
      },
      { property: "og:title", content: "Gallery — Moksha Cottages" },
      {
        property: "og:description",
        content:
          "Explore the visual story of Moksha Cottages through premium rooms, scenic views, and Himalayan atmosphere.",
      },
    ],
  }),
  component: GalleryPage,
});
