"use client";

import Link from "next/link";
import { useT } from "./LangProvider";

type C = { slug: string; title: string };

export default function FooterView({ courses }: { courses: C[] }) {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="site">
      {/* lotus-and-rule divider, the same ornament the poster uses */}
      <svg className="foot-orn" width="420" height="30" viewBox="0 0 470 34" fill="none" aria-hidden>
        <g stroke="var(--gold)" strokeWidth="1.15">
          <path d="M6 17 H168" /><path d="M302 17 H464" />
          <path d="M168 17 c 14 0 20 -8 30 -8" />
          <path d="M302 17 c -14 0 -20 -8 -30 -8" />
        </g>
        <g fill="var(--gold)">
          <rect x="160" y="14" width="6" height="6" transform="rotate(45 163 17)" />
          <rect x="304" y="14" width="6" height="6" transform="rotate(45 307 17)" />
        </g>
        <g fill="var(--saffron)" opacity=".85">
          <ellipse cx="235" cy="17" rx="3.8" ry="11" transform="rotate(-52 235 17)" />
          <ellipse cx="235" cy="17" rx="3.8" ry="12.5" transform="rotate(-26 235 17)" />
          <ellipse cx="235" cy="17" rx="3.8" ry="13.5" />
          <ellipse cx="235" cy="17" rx="3.8" ry="12.5" transform="rotate(26 235 17)" />
          <ellipse cx="235" cy="17" rx="3.8" ry="11" transform="rotate(52 235 17)" />
        </g>
        <path d="M216 24 Q235 33 254 24" stroke="var(--gold)" strokeWidth="1.15" />
        <circle cx="235" cy="17" r="2.6" fill="var(--gold)" />
      </svg>

      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="fb-mark" lang="sa" aria-hidden>अक्षर</div>
            <div className="fb-name">AKSHARA</div>
            <p className="fb-say">
              <em>Akṣara</em> — “the imperishable”, and also “the syllable”. That
              which does not decay, and the written word.
            </p>
            <p className="fb-parent">
              The Hindu shelf of <strong>Alexandria</strong> — a library of the
              world&apos;s sacred texts, rebuilt. Christian, Islamic, Buddhist,
              Jain and Sikh shelves to follow.
            </p>
          </div>

          <nav className="foot-col" aria-labelledby="f-lib">
            <h2 id="f-lib">{t.footer.library}</h2>
            <ul>
              <li><Link href="/#map">{t.footer.mapL}</Link></li>
              <li><Link href="/#stories">{t.footer.storiesL}</Link></li>
              <li><Link href="/#truth">{t.footer.lensesL}</Link></li>
              <li><Link href="/#sruta">{t.footer.srutaL}</Link></li>
            </ul>
          </nav>

          <nav className="foot-col" aria-labelledby="f-courses">
            <h2 id="f-courses">{t.footer.courses}</h2>
            <ul>
              {courses.map((c) => (
                <li key={c.slug}>
                  <Link href={`/courses/${c.slug}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="foot-col" aria-labelledby="f-about">
            <h2 id="f-about">{t.footer.project}</h2>
            <ul>
              <li><Link href="/corrections">{t.footer.report}</Link></li>
              <li><Link href="/privacy">{t.footer.privacy}</Link></li>
              <li><Link href="/terms">{t.footer.terms}</Link></li>
              <li><a href="mailto:hello@akshara.study">{t.footer.contact}</a></li>
            </ul>
          </nav>
        </div>

        <div className="foot-help">
          <span className="fh-k">{t.footer.comfort}</span>
          <p>{t.footer.comfortBody}</p>
        </div>

        <div className="foot-bar">
          <div className="fbar-left">
            <span>&copy; {year} Akshara. {t.footer.rights}</span>
            <span className="fbar-note">
{t.footer.note}
            </span>
          </div>
          <div className="fbar-right">
            <Link href="/privacy">Privacy</Link>
            <span aria-hidden>·</span>
            <Link href="/terms">{t.footer.terms}</Link>
            <span aria-hidden>·</span>
            <Link href="/corrections">{t.footer.report}</Link>
            <span aria-hidden>·</span>
            <a href="#main">{t.footer.top}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
