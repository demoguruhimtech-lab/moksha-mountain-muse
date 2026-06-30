import { createFileRoute } from "@tanstack/react-router";

import { KasolPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/kasol")({
  head: () => ({
    meta: [
      { title: "Kasol Property — Moksha Cottages" },
      {
        name: "description",
        content:
          "Stay near Kasol and Chalal at Moksha Cottages with access to mountain views, Parvati Valley experiences, and premium comfort.",
      },
      { property: "og:title", content: "Kasol Property — Moksha Cottages" },
      {
        property: "og:description",
        content:
          "Discover Moksha Cottages' Kasol-side mountain retreat near Chalal Trek, local cafés, and the Parvati River.",
      },
    ],
  }),
  component: KasolPage,
});
