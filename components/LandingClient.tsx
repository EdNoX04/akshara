"use client";

import { CANON } from "@/content/canon";
import { useT } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import Waitlist from "@/components/Waitlist";
import { Torana, Mandala, LotusRule, Corners, Medallion } from "@/components/Ornaments";
import { SITE } from "@/lib/site";

const COURSES = [
  { dv: "शिव", title: "The Shiva Journey", brief: "Who Shiva is, what every symbol means, and an honest look at the evidence." },
  { dv: "वेद", title: "The Four Vedas", brief: "Fire, dawn, storm and doubt — and the recitation system that carried them." },
  { dv: "उपनिषद्", title: "The Upanishads", brief: "A boy bargains with Death. A father dissolves salt in water." },
  { dv: "रामायण", title: "The Ramayana", brief: "Seven books, one exile, and the questions the ending refuses to settle." },
  { dv: "गीता", title: "The Gita", brief: "Eighteen chapters on a battlefield where a man refuses to fight." },
  { dv: "भारत", title: "The Mahabharata", brief: "A family destroys itself, and the poem asks why." },
];

export default function LandingClient() {
  const t = useT();

  return (
    <main id="main">
      <Reveal />

      {/* ---------- HERO ---------- */}
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

      {/* ---------- WHAT IS INSIDE ---------- */}
      <section className="band" id="inside">
        <div className="container">
          <div className="band-head reveal">
            <LotusRule width={300} />
            <span className="eyebrow">What is inside</span>
            <h2>The whole architecture, in one place</h2>
            <p>
              Not a pile of loose pieces. The tradition has been organised the
              same way for a very long time, and the library follows that shape.
            </p>
          </div>

          <div className="topic-grid reveal">
            {CANON.map((d) => (
              <article className="topic" key={d.id}>
                <Medallion n={d.numeral} />
                <div className="t-dv" lang="sa">{d.dv}</div>
                <h3>{d.rm}</h3>
                <p className="t-count">{d.count}</p>
                <p className="t-brief">{d.brief}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- THREE LENSES ---------- */}
      <section className="band" id="truth">
        <div className="container">
          <div className="band-head reveal">
            <LotusRule width={300} />
            <span className="eyebrow">Why trust it</span>
            <h2>Three kinds of true, never mixed</h2>
            <p>
              Most writing about religion reads myth as literal history, or
              dismisses symbol as falsehood. Every claim here is marked with the
              lens it is being read through — and every course ends with what the
              evidence actually supports, including where it says we are wrong.
            </p>
          </div>

          <div className="lens-row reveal">
            <div className="lens-mini lm-s"><b>Scriptural</b><span>What the text says</span></div>
            <div className="lens-mini lm-y"><b>Symbolic</b><span>What the tradition takes it to mean</span></div>
            <div className="lens-mini lm-h"><b>Historical</b><span>What scholarship can establish</span></div>
          </div>
        </div>
      </section>

      {/* ---------- COURSES ---------- */}
      <section className="band" id="courses">
        <div className="container">
          <div className="band-head reveal">
            <LotusRule width={300} />
            <span className="eyebrow">Opening {SITE.launch}</span>
            <h2>The first courses</h2>
            <p>
              Long-form journeys through one deity, one text, one tradition —
              arranged the way a teacher would move.
            </p>
          </div>

          <div className="course-strip reveal">
            {COURSES.map((c) => (
              <article className="cstrip" key={c.title}>
                <div className="cs-dv" lang="sa">{c.dv}</div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.brief}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ŚRUTA ---------- */}
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
            <p className="say" style={{ marginBottom: 0 }}>{t.sruta.say2}</p>
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
