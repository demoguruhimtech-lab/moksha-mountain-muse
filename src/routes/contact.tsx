import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/site/moksha-site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Moksha Cottages — Call, WhatsApp & Map" },
      {
        name: "description",
        content:
          "Contact Moksha Cottages for reservations, directions, WhatsApp booking, and mountain retreat enquiries in Chalal, Himachal Pradesh.",
      },
      { property: "og:title", content: "Contact Moksha Cottages — Call, WhatsApp & Map" },
      {
        property: "og:description",
        content:
          "Get in touch with Moksha Cottages via phone, WhatsApp, map, or enquiry form.",
      },
    ],
  }),
  component: ContactPage,
});
