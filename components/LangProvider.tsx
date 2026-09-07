"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { DICT, LOCALES, LOCALE_LABEL, LOCALE_SHORT, type Locale } from "@/lib/i18n";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void };
const LangCtx = createContext<Ctx>({ locale: "en", setLocale: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ak-lang") as Locale | null;
      if (saved && LOCALES.includes(saved)) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {}
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
    try { localStorage.setItem("ak-lang", l); } catch {}
  }, []);

  return <LangCtx.Provider value={{ locale, setLocale }}>{children}</LangCtx.Provider>;
}

export function useLocale() {
  return useContext(LangCtx);
}

/** Translated strings for the current locale. */
export function useT() {
  return DICT[useContext(LangCtx).locale];
}

export function LangSwitch() {
  const { locale, setLocale } = useLocale();
  const t = useT();
  return (
    <div className="ctrl lang" role="group" aria-label={t.ctrl.lang}>
      <span className="lbl" aria-hidden>{t.ctrl.lang}</span>
      {LOCALES.map((l) => (
        <button
          key={l}
          lang={l}
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          title={LOCALE_LABEL[l]}
          aria-label={LOCALE_LABEL[l]}
        >
          {LOCALE_SHORT[l]}
        </button>
      ))}
    </div>
  );
}

/** Shown where long-form content has not been translated yet. */
export function PartialNotice() {
  const { locale } = useLocale();
  const t = useT();
  if (locale === "en" || !t.partial) return null;
  return (
    <p className="partial-notice" lang={locale}>
      <span aria-hidden>◆</span> {t.partial}
    </p>
  );
}
