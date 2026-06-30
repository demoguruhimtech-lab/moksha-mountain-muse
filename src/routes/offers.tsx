import { createFileRoute } from "@tanstack/react-router";

import { OffersPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers — Moksha Cottages" },
      {
        name: "description",
        content:
          "View luxury offers and curated stay packages at Moksha Cottages for couples, long stays, and premium mountain getaways.",
      },
      { property: "og:title", content: "Offers — Moksha Cottages" },
      {
        property: "og:description",
        content:
          "Discover curated luxury offers and premium packages for your Moksha Cottages retreat.",
      },
    ],
  }),
  component: OffersPage,
});
