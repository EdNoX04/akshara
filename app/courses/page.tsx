import type { Metadata } from "next";
import { courseSlugs, getCourse, courseStats, COURSE_META } from "@/lib/content";
import CoursesView, { type CourseCard } from "@/components/CoursesView";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Long-form guided journeys through the Hindu canon — Shiva, the Vedas, the Upanishads, the Ramayana and the Gita. Every claim cited, every course ending with the evidence.",
};

export default function CoursesPage() {
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
        minutes: st.minutes,
      };
    })
    .sort((a, b) => (COURSE_META[a.slug]?.order ?? 99) - (COURSE_META[b.slug]?.order ?? 99));

  return (
    <>
      <CoursesView courses={courses} />
      <SiteFooter />
    </>
  );
}
