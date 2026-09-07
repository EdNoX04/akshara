"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { LangSwitch, useT } from "./LangProvider";

const STEPS = [
  { v: "0.92", label: "A", title: "Smaller text" },
  { v: "1",    label: "A", title: "Normal text" },
  { v: "1.15", label: "A", title: "Larger text" },
  { v: "1.32", label: "A", title: "Largest text" },
];

export default function TopBar() {
  const t = useT();
  const [theme, setTheme] = useState("light");
  const [step, setStep] = useState("1");
  const [pct, setPct] = useState(0);

  useEffect(() => {
    try {
      setTheme(localStorage.getItem("ak-theme") || "light");
      setStep(localStorage.getItem("ak-step") || "1");
    } catch {}
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const applyTheme = useCallback((t: string) => {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("ak-theme", t); } catch {}
  }, []);

  const applyStep = useCallback((s: string) => {
    setStep(s);
    document.documentElement.style.setProperty("--step", s);
    try { localStorage.setItem("ak-step", s); } catch {}
  }, []);

  return (
    <>
      <div className="progress" style={{ width: `${pct}%` }} aria-hidden />
      <header className="topbar">
        <div className="container topbar-in">
          <Link href="/" className="brand">
            <span className="om" aria-hidden>अ</span>
            <span>AKSHARA</span>
            <small>Imperishable Library</small>
          </Link>

          <nav className="topnav" aria-label="Main">
            <Link href="/#inside">Inside</Link>
            <Link href="/#courses">{t.nav.courses}</Link>
            <Link href="/#sruta">{t.nav.sruta}</Link>
            <Link className="nav-cta" href="/#waitlist">Waitlist</Link>

            <LangSwitch />

            <div className="ctrl" role="group" aria-label="Text size">
              <span className="lbl" aria-hidden>{t.ctrl.size}</span>
              {STEPS.map((s, i) => (
                <button
                  key={s.v}
                  title={s.title}
                  aria-label={s.title}
                  aria-pressed={step === s.v}
                  onClick={() => applyStep(s.v)}
                  style={{ fontSize: 9 + i * 2.5 }}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="ctrl" role="group" aria-label="Colour theme">
              <button
                aria-pressed={theme === "dark"}
                onClick={() => applyTheme("dark")}
                title="Dark — easier at night"
              >
                {t.ctrl.dark}
              </button>
              <button
                aria-pressed={theme === "light"}
                onClick={() => applyTheme("light")}
                title="Light — easier in daylight and for tired eyes"
              >
                {t.ctrl.light}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
