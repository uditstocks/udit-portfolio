import type { MetadataRoute } from "next";
import { personal } from "@/lib/data";

// Bump this when the site content meaningfully changes (stable <lastmod>).
const LAST_CONTENT_UPDATE = "2026-09-26";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: personal.siteUrl,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
