import { createFileRoute } from "@tanstack/react-router";

import { HomePage, SeoJsonLd } from "@/components/site/moksha-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moksha Cottages — Luxury Mountain Retreat in Chalal" },
      {
        name: "description",
        content:
          "Discover Moksha Cottages, a luxury mountain retreat in Chalal with premium wooden cottages, cinematic views, fine dining, and immersive experiences.",
      },
      { property: "og:title", content: "Moksha Cottages — Luxury Mountain Retreat in Chalal" },
      {
        property: "og:description",
        content:
          "Luxury wooden cottages, cinematic mountain views, boutique dining, and elevated stays in the Parvati Valley.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SeoJsonLd />
      <HomePage />
    </>
  );
}
