import { createFileRoute } from "@tanstack/react-router";

import { FaqPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Moksha Cottages" },
      {
        name: "description",
        content:
          "Find answers about booking, parking, family stays, and visiting Moksha Cottages in Himachal Pradesh.",
      },
      { property: "og:title", content: "FAQ — Moksha Cottages" },
      {
        property: "og:description",
        content:
          "Everything you need to know before booking your stay at Moksha Cottages.",
      },
    ],
  }),
  component: FaqPage,
});
