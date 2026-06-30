import { createFileRoute } from "@tanstack/react-router";

import { NearbyAttractionsPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/nearby-attractions")({
  head: () => ({
    meta: [
      { title: "Nearby Attractions — Moksha Cottages" },
      {
        name: "description",
        content:
          "See the nearby attractions around Moksha Cottages including Chalal Trek, Shani Mandir, Kasol Market, and the Parvati River.",
      },
      { property: "og:title", content: "Nearby Attractions — Moksha Cottages" },
      {
        property: "og:description",
        content:
          "Plan your stay around iconic attractions, scenic trails, and memorable experiences near Moksha Cottages.",
      },
    ],
  }),
  component: NearbyAttractionsPage,
});
