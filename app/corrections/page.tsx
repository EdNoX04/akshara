import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Report an error",
  description:
    "Akshara's correction policy: how to report a mistake, and what we do when you are right.",
};

export default function Corrections() {
  return (
    <>
      <main className="doc-page" id="main">
        <div className="container">
          <header className="page-head">
            <span className="eyebrow">The whole project depends on this</span>
            <h1>Report an error</h1>
            <p className="lead">
              A site that promises to tell the truth about these texts has to be
              easier to correct than it is to argue with. If something here is
              wrong, we want to hear it — especially if you are a specialist, and
              especially if it is embarrassing.
            </p>
          </header>

          <section className="prose">
            <h2>What counts as an error</h2>
            <ul>
              <li>A verse number, chapter or text attributed incorrectly.</li>
              <li>Sanskrit misquoted, mistransliterated or mistranslated.</li>
              <li>A scholarly position described unfairly, or attributed to the wrong scholar.</li>
              <li>A disagreement presented as settled when it is live.</li>
              <li>A regional or sectarian tradition flattened into a single version.</li>
              <li>Anything that reads as contempt for the tradition, or as apologetics for it.</li>
            </ul>

            <h2>What helps</h2>
            <p>
              The page and the sentence, what you think it should say, and where
              that comes from — an edition, a verse reference, a paper, a name.
              &ldquo;This is wrong&rdquo; is welcome too, but a source lets us fix
              it the same day instead of the same month.
            </p>

            <h2>What we do</h2>
            <ol>
              <li>Check it against the source.</li>
              <li>Fix the page if you are right.</li>
              <li>Record the change publicly, with the date and what it used to say.</li>
              <li>Credit you, unless you would rather we did not.</li>
            </ol>
            <p>
              Corrections are logged rather than quietly edited away. A record of
              what we got wrong is more persuasive than a claim that we never do.
            </p>

            <h2>Disagreement is not error</h2>
            <p>
              If you read a passage differently — a different school, a different
              commentator, a different tradition — that is not a mistake to be
              fixed, it is material to be added. Tell us anyway. Those messages
              usually improve a page more than the corrections do.
            </p>

            <h2>Write to us</h2>
            <p>
              <a className="inline" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
            </p>

            <div className="log-empty">
              <span className="k">Correction log</span>
              <p>
                Nothing logged yet — the library has not launched. Every
                correction made after launch will appear here.
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
