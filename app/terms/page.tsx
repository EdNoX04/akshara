import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms & sources",
  description:
    "How Akshara may be used, who owns what, and where the source texts come from.",
};

export default function Terms() {
  return (
    <>
      <main className="doc-page" id="main">
        <div className="container">
          <header className="page-head">
            <span className="eyebrow">Plain language</span>
            <h1>Terms &amp; sources</h1>
            <p className="lead">
              Read anything here. Quote it with attribution. Tell us when we are
              wrong. That is most of it — the rest is below.
            </p>
          </header>

          <section className="prose">
            <h2>Who owns what</h2>
            <p>
              The source texts — the Vedas, the Upanishads, the epics, the Puranas
              and the rest — are ancient and belong to everyone. Nobody can own
              them and we do not claim to.
            </p>
            <p>
              What is ours is the work built on top: the explanatory writing, the
              arrangement, the translations we have made ourselves, the design and
              the code. That material is &copy; {new Date().getFullYear()}{" "}
              {SITE.name}. You may quote it freely for study, teaching, review or
              discussion with attribution and a link. You may not republish it
              wholesale or use it to train a commercial model without asking.
            </p>

            <h2>What this site is not</h2>
            <p>
              It is not a religious authority and it does not speak for any
              tradition, sampradaya, lineage or institution. It is not a
              substitute for a teacher. Nothing here is legal, medical or
              financial advice — including the material on Ayurveda and
              Arthashastra, which is described as historical scholarship, not as
              guidance to act on.
            </p>

            <h2>Accuracy, and what happens when we are wrong</h2>
            <p>
              Every claim is cited so that you can check it. We will get things
              wrong anyway. When that happens and it is shown to us, we correct
              the page and say what changed — corrections are logged publicly
              rather than quietly edited away. See{" "}
              <a className="inline" href="/corrections">Report an error</a>.
            </p>
            <p>
              Where scholars genuinely disagree, we say so and name the positions
              rather than pick a winner. Where a claim is popular but false, we
              say that plainly. Neither of those is an attack on anyone&apos;s faith.
            </p>

            <h2>Quotation of sources</h2>
            <p>
              Sanskrit passages are quoted with text, chapter and verse. Where we
              use an existing published translation rather than our own, it is
              attributed at the point of use. If you believe something here
              infringes a right you hold, write to us and we will act quickly.
            </p>

            <h2>No warranty</h2>
            <p>
              The site is provided as it is. We do our best, and we do not
              guarantee that it will be free of errors or always available.
            </p>

            <h2>Contact</h2>
            <p>
              <a className="inline" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
            </p>

            <p className="updated">Last updated {new Date().getFullYear()}.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
