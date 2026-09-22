import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/map", "/stories", "/courses", "/sruta", "/privacy", "/terms", "/corrections"];
  const pages = routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: now,
    priority: r === "" ? 1 : 0.7,
  }));
  return pages;
}
