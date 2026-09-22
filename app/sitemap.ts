import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { courseSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/map", "/stories", "/courses", "/sruta", "/privacy", "/terms", "/corrections"];
  const pages = routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: now,
    priority: r === "" ? 1 : 0.7,
  }));
  const courses = courseSlugs().map((slug) => ({
    url: `${SITE_URL}/courses/${slug}`,
    lastModified: now,
    priority: 0.6,
  }));
  return [...pages, ...courses];
}
