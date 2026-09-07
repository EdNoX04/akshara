"use client";

import Link from "next/link";
import StorySources from "@/components/StorySources";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { useT } from "@/components/LangProvider";
import { KATHA_LEAD } from "@/content/katha";

export default function StoriesView() {
  const t = useT();
  return (
    <main id="main">
      <Reveal />
      <PageHead
        devanagari="कथा"
        eyebrow={t.stories.eyebrow}
        title={t.stories.title}
        lead={KATHA_LEAD}
      />
      <section className="band band-first">
        <div className="container">
          <div className="reveal"><StorySources /></div>
          <p className="katha-foot reveal">{t.stories.foot}</p>
        </div>
      </section>
      <section className="band band-close">
        <div className="container next-up">
          <span className="nu-k">Next</span>
          <h2>The courses</h2>
          <p>
            Each story sits inside a longer journey — the text it comes from,
            read carefully from the beginning.
          </p>
          <Link className="btn btn-primary" href="/courses">See the courses →</Link>
        </div>
      </section>
    </main>
  );
}
