import { createFileRoute } from "@tanstack/react-router";

import { TestimonialsPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Moksha Cottages" },
      {
        name: "description",
        content:
          "Read guest testimonials about the design, service, scenery, and premium atmosphere at Moksha Cottages.",
      },
      { property: "og:title", content: "Testimonials — Moksha Cottages" },
      {
        property: "og:description",
        content:
          "See what guests say about the cinematic luxury and mountain calm at Moksha Cottages.",
      },
    ],
  }),
  component: TestimonialsPage,
});
