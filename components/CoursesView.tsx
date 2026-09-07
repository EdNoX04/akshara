"use client";

import Link from "next/link";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { useT } from "@/components/LangProvider";

export type CourseCard = {
  slug: string;
  title: string;
  subtitle: string;
  devanagari: string;
  blurb: string;
  stages: number;
  verses: number;
  words: number;
  minutes: number;
};

const SOON = [
  { dv: "भारत", title: "The Mahabharata", sub: "A family destroys itself, and the poem asks why",
    blurb: "Eighteen parvas. Draupadi's question that the assembly never answers, and every decisive killing won by deception." },
  { dv: "पुराण", title: "The Eighteen Puranas", sub: "Where the gods got their families and their contradictions",
    blurb: "The yuga system, the cosmology, and honest arithmetic on what it does and does not match." },
];

export default function CoursesView({ courses }: { courses: CourseCard[] }) {
  const t = useT();
  const totalWords = courses.reduce((n, c) => n + c.words, 0);
  const totalStages = courses.reduce((n, c) => n + c.stages, 0);
  const totalVerses = courses.reduce((n, c) => n + c.verses, 0);

  return (
    <main id="main">
      <Reveal />
      <PageHead
        devanagari="पाठ"
        eyebrow={t.courses.eyebrow}
        title={t.courses.title}
        lead={t.courses.lead}
      />

      <section className="band band-first">
        <div className="container">
          <div className="shelf-stats reveal">
            <div><b>{courses.length}</b><span>courses</span></div>
            <div><b>{totalStages}</b><span>{t.courses.stages}</span></div>
            <div><b>{totalVerses}</b><span>{t.courses.verses}</span></div>
            <div><b>{Math.round(totalWords / 1000)}k</b><span>{t.courses.words}</span></div>
          </div>

          <div className="course-grid reveal" style={{ marginTop: 46 }}>
            {courses.map((c) => (
              <Link className="course-card" key={c.slug} href={`/courses/${c.slug}`}>
                <div className="cd" aria-hidden>{c.devanagari}</div>
                <h3>{c.title}</h3>
                <div className="sub">{c.subtitle}</div>
                <p style={{ color: "var(--ink-dim)", fontSize: ".92em", marginTop: "1em" }}>{c.blurb}</p>
                <div className="stats">
                  <span><b>{c.stages}</b> {t.courses.stages}</span>
                  <span><b>{c.verses}</b> {t.courses.verses}</span>
                  <span><b>{Math.round(c.words / 1000)}k</b> {t.courses.words}</span>
                  <span><b>{Math.round(c.minutes / 6) / 10}</b> hrs</span>
                </div>
              </Link>
            ))}

            {SOON.map((s) => (
              <div className="course-card soon" key={s.title}>
                <div className="cd" aria-hidden>{s.dv}</div>
                <h3>{s.title}</h3>
                <div className="sub">{s.sub}</div>
                <p style={{ color: "var(--ink-dim)", fontSize: ".92em", marginTop: "1em" }}>{s.blurb}</p>
                <div className="stats"><span>{t.courses.soon}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
