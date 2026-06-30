import { createFileRoute } from "@tanstack/react-router";

import { RestaurantPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/restaurant")({
  head: () => ({
    meta: [
      { title: "Restaurant — Moksha Cottages" },
      {
        name: "description",
        content:
          "Enjoy warm mountain dining at Moksha Cottages with scenic meals, café-style comfort food, and intimate luxury retreat ambience.",
      },
      { property: "og:title", content: "Restaurant — Moksha Cottages" },
      {
        property: "og:description",
        content:
          "Signature dining and cozy scenic meals at Moksha Cottages in the Himalayas.",
      },
    ],
  }),
  component: RestaurantPage,
});
