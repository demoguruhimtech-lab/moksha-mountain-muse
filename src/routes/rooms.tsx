import { createFileRoute } from "@tanstack/react-router";

import { RoomsPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms at Moksha Cottages — Premium Wooden Stays" },
      {
        name: "description",
        content:
          "Explore luxury rooms and wooden cottages at Moksha Cottages, from intimate standard rooms to spacious premium mountain stays.",
      },
      { property: "og:title", content: "Rooms at Moksha Cottages — Premium Wooden Stays" },
      {
        property: "og:description",
        content:
          "Browse premium room categories, amenities, and scenic cottage stays at Moksha Cottages.",
      },
    ],
  }),
  component: RoomsPage,
});
