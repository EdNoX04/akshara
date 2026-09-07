import { courseSlugs, getCourse, courseStats, COURSE_META } from "@/lib/content";
import HomeClient, { type CourseCard } from "@/components/HomeClient";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  const courses: CourseCard[] = courseSlugs()
    .map((s) => {
      const c = getCourse(s);
      const st = courseStats(c);
      return {
        slug: c.slug,
        title: c.title,
        subtitle: c.subtitle,
        devanagari: c.devanagari,
        blurb: COURSE_META[c.slug]?.blurb ?? "",
        stages: st.stages,
        verses: st.verses,
        words: st.words,
      };
    })
    .sort((a, b) => (COURSE_META[a.slug]?.order ?? 99) - (COURSE_META[b.slug]?.order ?? 99));

  return (
    <>
      <HomeClient courses={courses} />
      <SiteFooter />
    </>
  );
}
