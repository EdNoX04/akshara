import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courseSlugs, getCourse, courseStats, readingMinutes } from "@/lib/content";
import Blocks from "@/components/Blocks";
import CourseNav from "@/components/CourseNav";
import SiteFooter from "@/components/SiteFooter";

export function generateStaticParams() {
  return courseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!courseSlugs().includes(slug)) return {};
  const c = getCourse(slug);
  return { title: c.title, description: c.subtitle };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!courseSlugs().includes(slug)) notFound();

  const course = getCourse(slug);
  const stats = courseStats(course);

  const navItems = course.sections.map((s, i) => ({
    id: s.id,
    part: s.part,
    title: s.title,
    n: i === 0 && !s.part ? "—" : String(i).padStart(2, "0"),
  }));

  return (
    <>
    <div className="reader">
      <CourseNav items={navItems} devanagari={course.devanagari} title={course.title} />

      <main className="doc" id="main">
        <header className="chero">
          <div className="om" lang="sa">{course.invocationMantra}</div>
          <h1>{course.title}</h1>
          <p className="sub">{course.subtitle}</p>
          {course.invocation?.devanagari && (
            <div className="inv">
              <div className="d" lang="sa"
                   dangerouslySetInnerHTML={{ __html: course.invocation.devanagari }} />
              <div className="t"
                   dangerouslySetInnerHTML={{ __html: course.invocation.translation }} />
            </div>
          )}
          <div className="facts">
            <span><b>{stats.stages}</b> stages</span>
            <span><b>{stats.verses}</b> verses in Sanskrit</span>
            <span><b>{Math.round(stats.words / 1000)}k</b> words</span>
            <span><b>{Math.round(stats.minutes / 6) / 10}</b> hours of reading</span>
          </div>
          <p className="note" style={{ marginTop: 22 }}>
            Press <kbd>J</kbd> and <kbd>K</kbd> to move between stages. Text size and theme are in the header.
          </p>
        </header>

        {course.sections.map((s, i) => {
          const prev = course.sections[i - 1];
          const next = course.sections[i + 1];
          return (
            <section className="stage" id={s.id} key={s.id}>
              <div className="stage-label">
                <span>{s.label}</span>
                <span className="read">{readingMinutes(s.blocks)} min read</span>
              </div>
              <h2>{s.title}</h2>
              {s.subtitle && <p className="subtitle">{s.subtitle}</p>}
              <Blocks blocks={s.blocks} />
              <nav className="stage-nav" aria-label="Stage navigation">
                {prev ? (
                  <a href={`#${prev.id}`}><small>← Previous</small>{prev.title}</a>
                ) : <span />}
                {next ? (
                  <a href={`#${next.id}`} style={{ textAlign: "right", marginLeft: "auto" }}>
                    <small>Next →</small>{next.title}
                  </a>
                ) : null}
              </nav>
            </section>
          );
        })}

        <footer style={{ padding: "60px 0 20px", textAlign: "center", color: "var(--ink-faint)" }}>
          <div className="dev" style={{ fontSize: "1.6em", color: "var(--saffron)", opacity: 0.75 }} aria-hidden>ॐ</div>
          <p style={{ margin: "12px auto 20px", maxWidth: "52ch" }}>
            You have reached the end of {course.title}. Nothing here is the last word —
            corrections and better sources are how a library gets built.
          </p>
          <Link className="btn" href="/">← All courses</Link>
        </footer>
      </main>
    </div>
    <SiteFooter />
    </>
  );
}
