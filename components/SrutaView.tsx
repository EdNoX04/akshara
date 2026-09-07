"use client";

import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { useT } from "@/components/LangProvider";
import { SITE } from "@/lib/site";

const ASKS = [
  { q: "What does the Nasadiya Sukta actually say about creation?",
    a: "Quotes Rigveda 10.129 in Devanagari and translation, and shows that the hymn ends in doubt.",
    k: "Textual" },
  { q: "Where do Shankara and Ramanuja disagree on tat tvam asi?",
    a: "Sets the two readings side by side, names what each is committed to, and declines to pick a winner.",
    k: "Philosophical" },
  { q: "Is the Uttara Kanda a later addition?",
    a: "Gives the scholarly position, the evidence for it, and who dissents — not a verdict dressed as fact.",
    k: "Historical" },
];

export default function SrutaView() {
  const t = useT();
  return (
    <main id="main">
      <Reveal />
      <PageHead
        devanagari="श्रुत"
        eyebrow={t.sruta.eyebrow}
        title={t.sruta.title}
        lead={t.sruta.say}
      />

      <section className="band band-first">
        <div className="container">
          <div className="ask-list reveal">
            {ASKS.map((a) => (
              <article className="ask" key={a.q}>
                <div className="ask-q">{a.q}</div>
                <div className="ask-a">
                  <span className={`ask-k k-${a.k.toLowerCase()}`}>{a.k}</span>
                  <p>{a.a}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="sruta-rules reveal">
            <div className="sr-col">
              <span className="k">What it will do</span>
              <ul>
                <li>Answer only from the texts in this library, and say which one</li>
                <li>Give the verse reference so you can check it yourself</li>
                <li>Keep what the text says separate from what the philosophy built on it</li>
                <li>Name the disagreement when there is one</li>
              </ul>
            </div>
            <div className="sr-col">
              <span className="k">What it will not do</span>
              <ul>
                <li>Guess where the sources are silent</li>
                <li>Rule on what you personally should believe or practise</li>
                <li>Speak for any sampradaya, lineage or institution</li>
                <li>Present a later addition as though it were original</li>
              </ul>
            </div>
          </div>

          <div className="soon-badge reveal">
            <span className="k">{t.sruta.coming}</span>
            <span className="d">{SITE.launch}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
