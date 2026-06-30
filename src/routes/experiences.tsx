import { createFileRoute } from "@tanstack/react-router";

import { ExperiencesPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Moksha Cottages" },
      {
        name: "description",
        content:
          "Explore signature experiences at Moksha Cottages including bonfires, nature walks, trekking, photography, riverside moments, and mountain dining.",
      },
      { property: "og:title", content: "Experiences — Moksha Cottages" },
      {
        property: "og:description",
        content:
          "From bonfire nights to scenic treks, discover immersive mountain experiences at Moksha Cottages.",
      },
    ],
  }),
  component: ExperiencesPage,
});
