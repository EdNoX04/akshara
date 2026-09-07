"use client";

import Link from "next/link";
import { ThreeLensPrism } from "@/components/Visuals";
import CanonMap from "@/components/CanonMap";
import StorySources from "@/components/StorySources";
import Reveal from "@/components/Reveal";
import { useT, PartialNotice } from "@/components/LangProvider";
import { KATHA_LEAD } from "@/content/katha";

export type CourseCard = {
  slug: string;
  title: string;
  subtitle: string;
  devanagari: string;
  blurb: string;
  stages: number;
  verses: number;
  words: number;
};

export default function HomeClient({ courses }: { courses: CourseCard[] }) {
  const t = useT();

  return (
    <main id="main">
      <Reveal />

      <section className="hero">
        <div className="hero-bg" aria-hidden><div className="hero-glow" /></div>
        <div className="hero-inner">
          <div className="om" lang="sa">ॐ</div>
          <p className="sutra-line" lang="sa">अथातो ब्रह्मजिज्ञासा</p>
          <p className="sutra-gloss">{t.hero.sutraGloss}</p>

          <div className="deva" lang="sa">अक्षर</div>
          <h1>AKSHARA</h1>
          <p className="tagline">{t.hero.tagline}</p>
          <p className="plain">{t.hero.plain}</p>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="#map">{t.hero.ctaMap}</Link>
            <Link className="btn" href="#sruta">{t.hero.ctaSruta}</Link>
          </div>
        </div>
      </section>

      <section className="band" id="map">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">{t.map.eyebrow}</span>
            <h2>{t.map.title}</h2>
            <p>{t.map.lead}</p>
          </div>
          <PartialNotice />
          <CanonMap note={t.map.note} />
        </div>
      </section>

      <section className="band" id="stories">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">{t.stories.eyebrow}</span>
            <h2>{t.stories.title}</h2>
            <p>{KATHA_LEAD}</p>
          </div>
          <div className="reveal"><StorySources /></div>
          <p className="katha-foot reveal">{t.stories.foot}</p>
        </div>
      </section>

      <section className="band" id="sruta">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">{t.sruta.eyebrow}</span>
            <h2>{t.sruta.title}</h2>
          </div>

          <div className="sruta reveal">
            <div className="dv" lang="sa">श्रुत</div>
            <h3>ŚRUTA</h3>
            <p className="say">{t.sruta.say}</p>
            <div className="q">
              <span>What does the Nasadiya Sukta actually say about creation?</span>
              <span>Where do Shankara and Ramanuja disagree on tat tvam asi?</span>
              <span>Is the Uttara Kanda a later addition, and how do we know?</span>
            </div>
            <p className="say" style={{ marginBottom: "1.6em" }}>{t.sruta.say2}</p>
            <div className="soon">
              <div className="k">{t.sruta.coming}</div>
              <div className="d">2027</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band" id="truth">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">{t.lenses.eyebrow}</span>
            <h2>{t.lenses.title}</h2>
            <p>{t.lenses.lead}</p>
          </div>

          <figure className="viz reveal" style={{ maxWidth: 520, margin: "0 auto 46px" }}>
            <ThreeLensPrism />
            <figcaption>
              The lenses overlap. They are never merged. A story can be
              historically late, symbolically profound, and devotionally alive at once.
            </figcaption>
          </figure>

          <div className="lens-grid reveal">
            <div className="lens-card lc-s">
              <span className="k">Lens One</span>
              <h3>Scriptural</h3>
              <p>What the text actually says, on its own terms — quoted and cited, not paraphrased into mush.</p>
              <div className="ex">“Shiva drank the halahala poison and his throat turned blue.”</div>
            </div>
            <div className="lens-card lc-y">
              <span className="k">Lens Two</span>
              <h3>Symbolic</h3>
              <p>What the tradition understands the story to <em>mean</em>. This is interpretation, and it is labelled as interpretation.</p>
              <div className="ex">“To hold poison in the throat: to absorb harm without passing it on.”</div>
            </div>
            <div className="lens-card lc-h">
              <span className="k">Lens Three</span>
              <h3>Historical</h3>
              <p>What scholarship can reasonably establish. Including when scholars disagree — especially then.</p>
              <div className="ex">“The Samudra Manthana is a Puranic-era elaboration of a Vedic seed.”</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band" id="courses">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">{t.courses.eyebrow}</span>
            <h2>{t.courses.title}</h2>
            <p>{t.courses.lead}</p>
          </div>

          <div className="course-grid reveal">
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
                </div>
              </Link>
            ))}

            <div className="course-card soon">
              <div className="cd" aria-hidden>भारत</div>
              <h3>The Mahabharata</h3>
              <div className="sub">A family destroys itself, and the poem asks why</div>
              <p style={{ color: "var(--ink-dim)", fontSize: ".92em", marginTop: "1em" }}>
                Eighteen parvas. Draupadi&apos;s question that the assembly never answers,
                and every decisive killing won by deception.
              </p>
              <div className="stats"><span>{t.courses.soon}</span></div>
            </div>

            <div className="course-card soon">
              <div className="cd" aria-hidden>पुराण</div>
              <h3>The Eighteen Puranas</h3>
              <div className="sub">Where the gods got their families and their contradictions</div>
              <p style={{ color: "var(--ink-dim)", fontSize: ".92em", marginTop: "1em" }}>
                The yuga system, the cosmology, and honest arithmetic on what it does
                and does not match.
              </p>
              <div className="stats"><span>{t.courses.soon}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">{t.pledge.eyebrow}</span>
            <h2>{t.pledge.title}</h2>
          </div>
          <div className="pledge reveal">
            <ol>
              <li><b>Every quotation is cited</b> — text, chapter, verse. If we cannot cite it, we do not quote it.</li>
              <li><b>Sanskrit gets three lines</b> — Devanagari, transliteration, translation.</li>
              <li><b>Paradoxes stay unresolved</b> when the tradition leaves them unresolved.</li>
              <li><b>Disagreement is named.</b> Where scholars are split, you are told they are split.</li>
              <li><b>No false science.</b> The Vedas do not contain quantum mechanics. We say so plainly — and just as plainly where measured effects are real.</li>
              <li><b>Every course ends with the evidence</b> — corroborated, open, and contradicted.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
