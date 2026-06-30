import { createFileRoute } from "@tanstack/react-router";

import { BookNowPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/book-now")({
  head: () => ({
    meta: [
      { title: "Book Now — Moksha Cottages" },
      {
        name: "description",
        content:
          "Reserve your luxury mountain stay at Moksha Cottages with a premium booking experience, direct WhatsApp support, and flexible stay requests.",
      },
      { property: "og:title", content: "Book Now — Moksha Cottages" },
      {
        property: "og:description",
        content:
          "Book your Moksha Cottages stay and plan a premium mountain escape in Chalal.",
      },
    ],
  }),
  component: BookNowPage,
});
