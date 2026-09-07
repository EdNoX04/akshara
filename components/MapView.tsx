"use client";

import Link from "next/link";
import CanonMap from "@/components/CanonMap";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { useT, PartialNotice } from "@/components/LangProvider";

export default function MapView() {
  const t = useT();
  return (
    <main id="main">
      <Reveal />
      <PageHead
        devanagari="सनातन"
        eyebrow={t.map.eyebrow}
        title={t.map.title}
        lead={t.map.lead}
      />
      <section className="band band-first">
        <div className="container">
          <PartialNotice />
          <CanonMap note={t.map.note} />
        </div>
      </section>
      <section className="band band-close">
        <div className="container next-up">
          <span className="nu-k">Next</span>
          <h2>The stories, traced to their sources</h2>
          <p>
            The map is the architecture. The stories are how almost everyone
            actually meets it — and where the most gets lost in transmission.
          </p>
          <Link className="btn btn-primary" href="/stories">Read the stories →</Link>
        </div>
      </section>
    </main>
  );
}
