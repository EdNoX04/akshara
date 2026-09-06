import Link from "next/link";
import { courseSlugs, getCourse, courseStats, COURSE_META } from "@/lib/content";
import { ThreeLensPrism } from "@/components/Visuals";
import CanonMap from "@/components/CanonMap";
import StorySources from "@/components/StorySources";
import Reveal from "@/components/Reveal";
import { KATHA_LEAD } from "@/content/katha";

export default function Home() {
  const courses = courseSlugs()
    .map((s) => ({ course: getCourse(s), stats: courseStats(getCourse(s)) }))
    .sort(
      (a, b) =>
        (COURSE_META[a.course.slug]?.order ?? 99) -
        (COURSE_META[b.course.slug]?.order ?? 99)
    );

  return (
    <main id="main">
      <Reveal />

      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-bg" aria-hidden>
          <div className="hero-glow" />
        </div>
        <div className="hero-inner">
          <div className="om" lang="sa">ॐ</div>
          <p className="sutra-line" lang="sa">अथातो ब्रह्मजिज्ञासा</p>
          <p className="sutra-gloss">“Now, therefore, the inquiry begins.”</p>

          <div className="deva" lang="sa">अक्षर</div>
          <h1>AKSHARA</h1>
          <p className="tagline">The imperishable library</p>

          <p className="plain">
            A complete map of the Hindu tradition — the whole architecture, from
            the four Vedas at the root to the schools still arguing at the edges.
            Every claim cited. Nothing dressed up, nothing dumbed down.
          </p>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="#map">Open the map ↓</Link>
            <Link className="btn" href="#sruta">Meet Śruta</Link>
          </div>
        </div>
      </section>

      {/* ---------- THE MAP ---------- */}
      <section className="band" id="map">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">The architecture</span>
            <h2>A complete map of human consciousness</h2>
            <p>
              Most people meet this tradition as a pile of loose pieces — a verse
              here, a festival there, a story someone half-remembered. It is not a
              pile. It is a structure, and it has been organised the same way for
              a very long time. Here it is whole.
            </p>
          </div>
          <CanonMap />
        </div>
      </section>

      {/* ---------- THE STORIES ---------- */}
      <section className="band" id="stories">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">कथा · Katha</span>
            <h2>The right story, from the right source</h2>
            <p>{KATHA_LEAD}</p>
          </div>
          <div className="reveal">
            <StorySources />
          </div>
          <p className="katha-foot reveal">
            A beloved story does not stop being beautiful when it turns out to be
            young. It only stops being evidence.
          </p>
        </div>
      </section>

      {/* ---------- ŚRUTA ---------- */}
      <section className="band" id="sruta">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">Coming 2027</span>
            <h2>Ask the library itself</h2>
          </div>

          <div className="sruta reveal">
            <div className="dv" lang="sa">श्रुत</div>
            <h3>ŚRUTA</h3>
            <p className="say">
              Named for <em>that which has been heard</em> — the same root as
              Śruti, the revealed canon. An intelligence trained on this entire
              library, which answers only from it, and tells you where each answer
              came from.
            </p>
            <div className="q">
              <span>What does the Nasadiya Sukta actually say about creation?</span>
              <span>Where do Shankara and Ramanuja disagree on tat tvam asi?</span>
              <span>Is the Uttara Kanda a later addition, and how do we know?</span>
            </div>
            <p className="say" style={{ marginBottom: "1.6em" }}>
              Two kinds of answer, kept separate: what the text says, and what the
              philosophy built on it. Never a confident guess where the sources are
              silent.
            </p>
            <div className="soon">
              <div className="k">Coming</div>
              <div className="d">2027</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- THE THREE LENSES ---------- */}
      <section className="band" id="truth">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">The editorial law</span>
            <h2>Three kinds of true, never mixed</h2>
            <p>
              Most writing about religion falls into one of two traps: it reads
              myth as literal history, or it dismisses symbol as falsehood. Both
              are lazy. Every claim here is marked with the lens it is being read
              through.
            </p>
          </div>

          <figure className="viz reveal" style={{ maxWidth: 520, margin: "0 auto 46px" }}>
            <ThreeLensPrism />
            <figcaption>
              The lenses overlap. They are never merged. A story can be
              historically late, symbolically profound, and devotionally alive at
              once.
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

      {/* ---------- COURSES ---------- */}
      <section className="band" id="courses">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">Live now</span>
            <h2>The courses</h2>
            <p>
              Long-form journeys through one deity, one text, one tradition —
              arranged the way a teacher would move: the person, the image, the
              stories, the philosophy, the living tradition, and then the evidence.
            </p>
          </div>

          <div className="course-grid reveal">
            {courses.map(({ course, stats }) => (
              <Link className="course-card" key={course.slug} href={`/courses/${course.slug}`}>
                <div className="cd" aria-hidden>{course.devanagari}</div>
                <h3>{course.title}</h3>
                <div className="sub">{course.subtitle}</div>
                <p style={{ color: "var(--ink-dim)", fontSize: ".92em", marginTop: "1em" }}>
                  {COURSE_META[course.slug]?.blurb}
                </p>
                <div className="stats">
                  <span><b>{stats.stages}</b> stages</span>
                  <span><b>{stats.verses}</b> verses</span>
                  <span><b>{Math.round(stats.words / 1000)}k</b> words</span>
                </div>
              </Link>
            ))}

            <div className="course-card soon">
              <div className="cd" aria-hidden>भारत</div>
              <h3>The Mahabharata</h3>
              <div className="sub">A family destroys itself, and the poem asks why</div>
              <p style={{ color: "var(--ink-dim)", fontSize: ".92em", marginTop: "1em" }}>
                Eighteen parvas. Draupadi&apos;s question that the assembly never
                answers, and every decisive killing won by deception.
              </p>
              <div className="stats"><span>In writing</span></div>
            </div>

            <div className="course-card soon">
              <div className="cd" aria-hidden>पुराण</div>
              <h3>The Eighteen Puranas</h3>
              <div className="sub">Where the gods got their families and their contradictions</div>
              <p style={{ color: "var(--ink-dim)", fontSize: ".92em", marginTop: "1em" }}>
                The yuga system, the cosmology, and honest arithmetic on what it
                does and does not match.
              </p>
              <div className="stats"><span>In writing</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PLEDGE ---------- */}
      <section className="band">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">The standard</span>
            <h2>What we promise</h2>
          </div>
          <div className="pledge reveal">
            <ol>
              <li><b>Every quotation is cited</b> — text, chapter, verse. If we cannot cite it, we do not quote it.</li>
              <li><b>Sanskrit gets three lines</b> — Devanagari, transliteration, translation. The sound carries meaning the translation cannot.</li>
              <li><b>Paradoxes stay unresolved</b> when the tradition leaves them unresolved. We do not tidy up scripture.</li>
              <li><b>Disagreement is named.</b> Where scholars are split, you are told they are split and who is on which side.</li>
              <li><b>No false science.</b> The Vedas do not contain quantum mechanics. The epics do not describe aircraft. We say so plainly — and just as plainly where measured effects are real.</li>
              <li><b>Every course ends with the evidence</b> — corroborated, open, and contradicted. Including the contradicted ones.</li>
            </ol>
          </div>
        </div>
      </section>

      <footer className="site">
        <div className="container">
          <div className="om" aria-hidden>ॐ</div>
          <p style={{ maxWidth: "58ch", margin: "0 auto 1.2em" }}>
            <strong>Akshara</strong> — अक्षर, “the imperishable”, and also “the
            syllable”. That which does not decay, and the written word.
          </p>
          <p style={{ color: "var(--ink-faint)", fontSize: ".92em" }}>
            The Hindu shelf of{" "}
            <strong style={{ color: "var(--ink-dim)" }}>Alexandria</strong> — a
            library of the world&apos;s sacred texts, rebuilt.
          </p>
        </div>
      </footer>
    </main>
  );
}
