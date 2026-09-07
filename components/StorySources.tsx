"use client";

import { STORIES } from "@/content/katha";
import { useT } from "./LangProvider";

export default function StorySources() {
  const t = useT();
  return (
    <div className="katha">
      <div className="katha-head">
        <span className="dot" aria-hidden />
        {t.stories.head}
      </div>
      {STORIES.map((s) => (
        <div className={`krow ks-${s.status}`} key={s.title}>
          <div className="kt">
            <div className="kt-title">{s.title}</div>
            <div className="kt-src">{s.source}</div>
          </div>
          <div className="kb">
            <span className="kstatus">{t.status[s.status]}</span>
            <p>{s.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
