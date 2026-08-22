"use client";

import { useEffect, useState } from "react";

type Item = { id: string; part: string | null; title: string; n: string };

export default function CourseNav({
  items, devanagari, title,
}: { items: Item[]; devanagari: string; title: string }) {
  const [active, setActive] = useState(items[0]?.id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-70px 0px -68% 0px", threshold: 0 }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  // j / k step through stages — small thing, but power readers love it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      if (e.key !== "j" && e.key !== "k") return;
      const idx = items.findIndex((i) => i.id === active);
      const next = items[e.key === "j" ? idx + 1 : idx - 1];
      if (next) document.getElementById(next.id)?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items]);

  let lastPart: string | null | undefined;

  return (
    <>
      <button
        className="btn toc-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          position: "fixed", bottom: 22, left: 18, zIndex: 58,
          background: "var(--panel)", padding: "11px 18px", fontSize: 13,
        }}
      >
        {open ? "✕ Close" : "☰ Stages"}
      </button>

      <nav className="toc" data-open={open} aria-label="Course contents">
        <div className="toc-head">
          <div className="cd" aria-hidden>{devanagari}</div>
          <h2>{title}</h2>
          <p>{items.length} stages</p>
        </div>
        {items.map((i) => {
          const showPart = i.part && i.part !== lastPart;
          lastPart = i.part;
          return (
            <div key={i.id}>
              {showPart && <div className="grp">{i.part}</div>}
              <a
                href={`#${i.id}`}
                className={active === i.id ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="n">{i.n}</span>
                <span>{i.title}</span>
              </a>
            </div>
          );
        })}
      </nav>
    </>
  );
}
