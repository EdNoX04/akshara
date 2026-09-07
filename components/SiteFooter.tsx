import { courseSlugs, getCourse, COURSE_META } from "@/lib/content";
import FooterView from "./FooterView";

export default function SiteFooter() {
  const courses = courseSlugs()
    .map((s) => {
      const c = getCourse(s);
      return { slug: c.slug, title: c.title };
    })
    .sort((a, b) => (COURSE_META[a.slug]?.order ?? 99) - (COURSE_META[b.slug]?.order ?? 99));
  return <FooterView courses={courses} />;
}
