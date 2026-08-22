import Link from "next/link";
import { courseSlugs, getCourse, courseStats, COURSE_META } from "@/lib/content";
import { Mandala, ThreeLensPrism, CanonTree } from "@/components/Visuals";
import Reveal from "@/components/Reveal";

const SHELF = [
  { d: "ऋक्", t: "The Four Vedas", m: "Shruti · heard", c: "c. 1500–900 BCE",
    p: "Rig, Sama, Yajur, Atharva. The oldest continuously recited texts on earth." },
  { d: "उप", t: "The Upanishads", m: "Shruti · heard", c: "108",
    p: "Where ritual turns inward and the question becomes: what is the self?" },
  { d: "गी", t: "Bhagavad Gita", m: "Smriti · remembered", c: "700 verses",
    p: "A conversation between a soldier who will not fight and his charioteer." },
  { d: "रा", t: "Ramayana", m: "Itihasa · epic", c: "7 kandas",
    p: "Exile, abduction, war, return — and an ending that has troubled readers for centuries." },
  { d: "भा", t: "Mahabharata", m: "Itihasa · epic", c: "18 parvas",
    p: "The longest poem ever composed. A family destroys itself and asks why." },
  { d: "पु", t: "The Puranas", m: "Smriti · remembered", c: "18 + 18",
    p: "Where the gods get their stories, their families, and their contradictions." },
  { d: "आ", t: "Agamas & Tantras", m: "Ritual & practice", c: "Shaiva · Shakta · Vaishnava",
    p: "The manuals: how a temple is built, how a body is used, how a mantra works." },
  { d: "क", t: "Katha", m: "The tales", c: "Countless",
    p: "The stories your grandmother told you, told back to you with their sources." },
];

const GENERATIONS = [
  { b: "If you're 16", p: "Start anywhere. Every stage is a scroll, every verse is copyable, and nothing assumes you already know a word of Sanskrit." },
  { b: "If you're 45", p: "Set the text larger, switch to the light theme, and read it like a book. The sidebar remembers where you are." },
  { b: "If you're 75", p: "The largest text size is genuinely large, the contrast is checked, and there is nothing that moves unless you ask it to." },
  { b: "If you're a sceptic", p: "Go straight to the last stage of any course. That's where we put what the evidence says — including where it says we're wrong." },
];

export default function Home() {
  const courses = courseSlugs()
    .map((s) => ({ course: getCourse(s), stats: courseStats(getCourse(s)) }))
    .sort((a, b) => (COURSE_META[a.course.slug]?.order ?? 99) - (COURSE_META[b.course.slug]?.order ?? 99));

  const totalWords = courses.reduce((n, c) => n + c.stats.words, 0);

  return (
    <main id="main">
      <Reveal />

      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-bg" aria-hidden>
          <div className="hero-glow" />
          <Mandala />
        </div>
        <div className="hero-inner">
          <div className="om">ॐ</div>
          <div className="deva" lang="sa">अक्षर</div>
          <h1>AKSHARA</h1>
          <p className="tagline">The imperishable library</p>
          <p className="plain">
            Every Hindu text — the Vedas, the Upanishads, the Puranas, the epics, the Gita —
            in one place, told truthfully. Nothing dressed up. Nothing dumbed down.
            Every course ends with what the evidence actually says.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href={`/courses/${courses[0]?.course.slug ?? "shiva"}`}>
              Begin with Shiva →
            </Link>
            <Link className="btn" href="#truth">How we handle the truth</Link>
          </div>
          <div className="scrollcue"><i /><span>Scroll</span></div>
        </div>
      </section>

      {/* ---------- THE THREE LENSES ---------- */}
      <section className="band" id="truth">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">The editorial law</span>
            <h2>Three kinds of true, never mixed</h2>
            <p>
              Most writing about religion falls into one of two traps: it reads myth as literal history,
              or it dismisses symbol as falsehood. Both are lazy. Every claim on this site is marked
              with the lens it is being read through — so you always know what kind of statement
              you are looking at.
            </p>
          </div>

          <figure className="viz reveal" style={{ maxWidth: 520, margin: "0 auto 46px" }}>
            <ThreeLensPrism />
            <figcaption>
              The lenses overlap. They are never merged. A story can be historically late,
              symbolically profound, and devotionally alive at once.
            </figcaption>
          </figure>

          <div className="lens-grid reveal">
            <div className="lens-card lc-s">
              <span className="k">Lens One</span>
              <h3>Scriptural</h3>
              <p>What the text actually says, on its own terms — the Vedas, the Puranas, the Agamas, the epics. Sacred narrative, quoted and cited, not paraphrased into mush.</p>
              <div className="ex">“Shiva drank the halahala poison and his throat turned blue.”</div>
            </div>
            <div className="lens-card lc-y">
              <span className="k">Lens Two</span>
              <h3>Symbolic</h3>
              <p>What the tradition understands the story to <em>mean</em> — the psychology, the metaphysics, the inner journey. This is interpretation, and it is labelled as interpretation.</p>
              <div className="ex">“To hold poison in the throat: to absorb harm without passing it on.”</div>
            </div>
            <div className="lens-card lc-h">
              <span className="k">Lens Three</span>
              <h3>Historical</h3>
              <p>What archaeology, textual criticism and scholarship can reasonably establish about how a tradition developed. Including when scholars disagree — especially then.</p>
              <div className="ex">“The Samudra Manthana is a Puranic-era elaboration of a Vedic seed.”</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- THE CANON ---------- */}
      <section className="band" id="canon">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">The shelf</span>
            <h2>What goes in here</h2>
            <p>
              The whole corpus, eventually. Shruti — “that which was heard”. Smriti — “that which
              was remembered”. Everything below is being written; the courses that are live are
              marked as live, and nothing is claimed that isn&apos;t.
            </p>
          </div>

          <figure className="viz reveal" style={{ maxWidth: 760, margin: "0 auto 46px" }}>
            <CanonTree />
            <figcaption>The canon divides at the root: revealed, and remembered.</figcaption>
          </figure>

          <div className="shelf reveal">
            {SHELF.map((s) => (
              <article className="shelf-item" key={s.t}>
                <span className="count">{s.c}</span>
                <div className="sd" aria-hidden>{s.d}</div>
                <h3>{s.t}</h3>
                <div className="meta">{s.m}</div>
                <p>{s.p}</p>
              </article>
            ))}
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
              Long-form journeys through one deity, one text, one tradition — arranged the way a
              teacher would move: the person, the image, the stories, the philosophy, the living
              tradition, the inner path, and then the evidence.
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
                  <span><b>{Math.round(stats.minutes / 6) / 10}</b> hrs</span>
                </div>
              </Link>
            ))}

            <div className="course-card soon">
              <div className="cd" aria-hidden>रा</div>
              <h3>The Ramayana</h3>
              <div className="sub">Seven kandas, and the questions the ending leaves open</div>
              <p style={{ color: "var(--ink-dim)", fontSize: ".92em", marginTop: "1em" }}>
                Valmiki alongside Kamban, Tulsidas and the regional retellings that disagree with him.
              </p>
              <div className="stats"><span>In writing</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOR EVERYONE ---------- */}
      <section className="band">
        <div className="container">
          <div className="band-head reveal">
            <span className="eyebrow">Built to be read</span>
            <h2>Made for everybody who reads it</h2>
            <p>
              Text size and theme controls sit in the header on every page and remember your choice.
              Nothing here requires prior knowledge, and nothing here talks down to you.
            </p>
          </div>
          <div className="gen-grid reveal">
            {GENERATIONS.map((g) => (
              <div className="gen" key={g.b}>
                <b>{g.b}</b>
                <p>{g.p}</p>
              </div>
            ))}
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
              <li><b>Disagreement is named</b>. Where scholars are split, you are told they are split and who is on which side.</li>
              <li><b>No false science.</b> The Vedas do not contain quantum mechanics. The epics do not describe aircraft. We say so plainly, and we also say plainly where measured effects are real.</li>
              <li><b>Every course ends with the evidence</b> — a stage that sorts the tradition&apos;s claims into corroborated, open, and contradicted. Including the contradicted ones.</li>
            </ol>
          </div>
        </div>
      </section>

      <footer className="site">
        <div className="container">
          <div className="om" aria-hidden>ॐ</div>
          <p style={{ maxWidth: "58ch", margin: "0 auto 1.2em" }}>
            <strong>Akshara</strong> — अक्षर, “the imperishable”, and also “the syllable”.
            That which does not decay, and the written word. {courses.length} courses,{" "}
            {Math.round(totalWords / 1000)}k words, and counting.
          </p>
          <p style={{ color: "var(--ink-faint)", fontSize: ".92em" }}>
            The Hindu shelf of <strong style={{ color: "var(--ink-dim)" }}>Alexandria</strong> —
            a library of the world&apos;s sacred texts, rebuilt. Christian, Islamic, Buddhist,
            Jain and Sikh shelves to follow.
          </p>
        </div>
      </footer>
    </main>
  );
}
