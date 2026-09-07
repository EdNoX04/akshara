"use client";

import Link from "next/link";
import { useT } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import Waitlist from "@/components/Waitlist";
import { Torana, Mandala, LotusRule, Corners } from "@/components/Ornaments";
import ScrollScene from "@/components/ScrollScene";
import { SITE } from "@/lib/site";

const DOORS = [
  {
    href: "/map",
    dv: "सनातन",
    title: "The Map",
    line: "Seven divisions, in the order the tradition itself puts them — Veda at the root, the schools still arguing at the edges.",
    cta: "Open the map",
  },
  {
    href: "/stories",
    dv: "कथा",
    title: "The Stories",
    line: "Every story you grew up with, traced to its actual source — including the famous ones that are not in the text at all.",
    cta: "Read the stories",
  },
  {
    href: "/courses",
    dv: "पाठ",
    title: "The Courses",
    line: "Long journeys through one deity, one text, one tradition — arranged the way a teacher would move.",
    cta: "See the courses",
  },
];

export default function LandingClient() {
  const t = useT();

  return (
    <main id="main">
      <Reveal />
      <ScrollScene />

      {/* ---------- TITLE PAGE ---------- */}
      <section className="hero title-page">
        <div className="hero-bg" aria-hidden>
          <div className="hero-glow" />
          <Mandala />
          <Torana />
        </div>
        <div className="frame-rule" aria-hidden><Corners /></div>

        <div className="hero-inner">
          <div className="om" lang="sa">ॐ</div>
          <p className="sutra-line" lang="sa">अथातो ब्रह्मजिज्ञासा</p>
          <p className="sutra-gloss">{t.hero.sutraGloss}</p>

          <div className="deva" lang="sa">अक्षर</div>
          <h1>AKSHARA</h1>
          <p className="tagline">{t.hero.tagline}</p>
          <LotusRule width={420} />

          <p className="hero-claim">
            Everyone quotes it.<br />
            <em>Almost no one</em> has read it.
          </p>

          <p className="plain">
            A complete guide to what Hinduism actually says — every claim cited,
            every disagreement named, and an honest ending on what the evidence
            supports.
          </p>

          <div className="release-badge">
            <span className="k">Opening</span>
            <span className="d">{SITE.launch}</span>
          </div>
        </div>
      </section>

      {/* ---------- THREE DOORS ---------- */}
      <section className="band" id="doors">
        <div className="container">
          <div className="band-head reveal">
            <LotusRule width={300} />
            <span className="eyebrow">Three ways in</span>
            <h2>Start wherever you already are</h2>
          </div>

          <div className="door-grid reveal">
            {DOORS.map((d) => (
              <Link className="door" key={d.href} href={d.href}>
                <div className="door-dv" lang="sa" aria-hidden>{d.dv}</div>
                <h3>{d.title}</h3>
                <p>{d.line}</p>
                <span className="door-cta">{d.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- THE THREE MOVEMENTS ---------- */}
      <section className="band" id="movements">
        <div className="container">
          <div className="band-head reveal">
            <LotusRule width={300} />
            <span className="eyebrow">त्रिमूर्ति · Trimūrti</span>
            <h2>Three movements, one motion</h2>
            <p>
              The tradition does not describe a world that was made once and left
              alone. It describes a motion in three beats, turning without end —
              and the library is arranged to be read the same way.
            </p>
          </div>

          <div className="movements reveal">
            <article className="movement">
              <div className="mv-dv" lang="sa">ब्रह्मा</div>
              <h3>Brahmā</h3>
              <div className="mv-act">सर्ग · Creation</div>
              <p>
                Seated on the lotus that opens from Viṣṇu&apos;s navel. He speaks the
                Vedas and the world begins — and then, almost uniquely among the
                great gods, he is barely worshipped.
              </p>
            </article>
            <article className="movement">
              <div className="mv-dv" lang="sa">विष्णु</div>
              <h3>Viṣṇu</h3>
              <div className="mv-act">स्थिति · Preservation</div>
              <p>
                The one who holds it together, and descends whenever it slips —
                the avataras. The Sudarshana chakra spins on his finger: order,
                turning, never still.
              </p>
            </article>
            <article className="movement">
              <div className="mv-dv" lang="sa">शिव</div>
              <h3>Śiva</h3>
              <div className="mv-act">संहार · Dissolution</div>
              <p>
                Not destruction for its own sake — the clearing that lets the next
                cycle begin. The triśūla, the ḍamaru that beats time, and Nandi
                waiting outside every one of his temples.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- WHY TRUST IT ---------- */}
      <section className="band" id="truth">
        <div className="container">
          <div className="band-head reveal">
            <LotusRule width={300} />
            <span className="eyebrow">Why trust it</span>
            <h2>{t.lenses.title}</h2>
            <p>{t.lenses.lead}</p>
          </div>

          <div className="lens-row reveal">
            <div className="lens-mini lm-s"><b>Scriptural</b><span>What the text says</span></div>
            <div className="lens-mini lm-y"><b>Symbolic</b><span>What the tradition takes it to mean</span></div>
            <div className="lens-mini lm-h"><b>Historical</b><span>What scholarship can establish</span></div>
          </div>
        </div>
      </section>

      {/* ---------- ŚRUTA TEASER ---------- */}
      <section className="band" id="sruta">
        <div className="container">
          <div className="band-head reveal">
            <LotusRule width={300} />
            <span className="eyebrow">{t.sruta.eyebrow}</span>
            <h2>{t.sruta.title}</h2>
          </div>
          <div className="sruta reveal">
            <div className="dv" lang="sa">श्रुत</div>
            <h3>ŚRUTA</h3>
            <p className="say">{t.sruta.say}</p>
            <Link className="btn" href="/sruta" style={{ marginTop: 8 }}>What Śruta will and will not do →</Link>
          </div>
        </div>
      </section>

      {/* ---------- WAITLIST ---------- */}
      <section className="band band-close" id="waitlist">
        <div className="container">
          <LotusRule width={300} />
          <Waitlist />
        </div>
      </section>
    </main>
  );
}
