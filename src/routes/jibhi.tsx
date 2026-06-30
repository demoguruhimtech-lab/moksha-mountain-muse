import { createFileRoute } from "@tanstack/react-router";

import { JibhiPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/jibhi")({
  head: () => ({
    meta: [
      { title: "Jibhi Property — Moksha Cottages" },
      {
        name: "description",
        content:
          "Experience the Jibhi side of Moksha Cottages with riverside atmosphere, timber rooms, and immersive nature-led luxury.",
      },
      { property: "og:title", content: "Jibhi Property — Moksha Cottages" },
      {
        property: "og:description",
        content:
          "Luxury mountain stays in Jibhi-inspired natural surroundings with waterfalls, wood interiors, and scenic calm.",
      },
    ],
  }),
  component: JibhiPage,
});
