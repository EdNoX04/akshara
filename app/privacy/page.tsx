import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What Akshara collects, what it does not, and the two things stored in your browser.",
};

export default function Privacy() {
  return (
    <>
      <main className="doc-page" id="main">
        <div className="container">
          <header className="page-head">
            <span className="eyebrow">The short version</span>
            <h1>Privacy</h1>
            <p className="lead">
              We do not want your data. There are no accounts, no sign-in, no
              tracking pixels and no advertising on this site. Two small
              preferences are stored in your own browser and never leave your
              device.
            </p>
          </header>

          <section className="prose">
            <h2>What stays on your device</h2>
            <p>
              When you change the text size or switch between the light and dark
              theme, that choice is saved in your browser&apos;s local storage
              under <code>ak-theme</code> and <code>ak-step</code>. It is not a
              cookie, it is never transmitted to us, and clearing your browser
              data removes it. That is the entire list.
            </p>

            <h2>What we do not do</h2>
            <ul>
              <li>No accounts, logins or profiles.</li>
              <li>No analytics or behavioural tracking of any kind.</li>
              <li>No advertising, and no advertising networks.</li>
              <li>No selling, renting or sharing of personal information — there is none to sell.</li>
              <li>No newsletters unless you one day choose to ask for one.</li>
            </ul>

            <h2>What other companies see</h2>
            <p>
              Being honest here matters more than looking clean, so: two third
              parties do receive something when you load a page.
            </p>
            <ul>
              <li>
                <strong>Our host.</strong> This site is served by Vercel, which
                keeps ordinary server logs — IP address, page requested, time,
                browser type — for operational and security purposes. We do not
                query these logs to build any picture of you.
              </li>
              <li>
                <strong>Google Fonts.</strong> The typefaces are loaded from
                Google&apos;s font servers, which means Google receives your IP
                address and browser details when a page loads. We would prefer it
                otherwise and intend to self-host the fonts; until we do, this
                notice is the accurate description.
              </li>
            </ul>

            <h2>Children</h2>
            <p>
              This site is suitable for readers of any age and collects nothing
              from anyone, including children.
            </p>

            <h2>Changes</h2>
            <p>
              If this policy changes, the change will be described here in plain
              language rather than quietly rewritten. If we ever add anything that
              collects data — a newsletter, a saved reading position, a comment —
              it will be opt-in and it will be named here first.
            </p>

            <h2>Questions</h2>
            <p>
              Write to <a className="inline" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
            </p>

            <p className="updated">Last updated {new Date().getFullYear()}.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
