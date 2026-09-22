"use client";

import { useEffect, useRef, useState } from "react";
import { Lotus3D, Chakra3D } from "@/components/Deities";

/**
 * A fixed 3D stage behind the page. One rAF-throttled scroll listener writes
 * CSS custom properties; everything else is pure CSS transform.
 *
 * Each object is anchored to the section it belongs to rather than to a fixed
 * fraction of the page, so adding or removing content can never leave a deity
 * floating over the wrong band. Śiva has no object here — the Śiva section
 * carries the triśūla itself, at full size.
 */

const PHASES = [
  { key: "brahma", dv: "ब्रह्मा", name: "Brahmā", act: "सर्ग · Creation", anchor: "#doors" },
  { key: "vishnu", dv: "विष्णु", name: "Viṣṇu", act: "स्थिति · Preservation", anchor: "#movements" },
  { key: "shiva", dv: "शिव", name: "Śiva", act: "संहार · Dissolution", anchor: "#shiva" },
];

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

/**
 * How far the viewport has travelled through an element, 0 just before it
 * enters to 1 once it has left, plus a visibility that fades at both edges.
 */
function track(el: Element | null, vh: number) {
  if (!el) return { p: 0, vis: 0 };
  const r = el.getBoundingClientRect();
  const p = clamp01((vh - r.top) / (r.height + vh || 1));
  /* Live in proportion to how much of the screen the section actually fills,
     so an object never appears merely because its section has peeked in. */
  const overlap = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
  return { p, vis: clamp01(overlap / (vh * 0.55)) };
}

export default function ScrollScene() {
  const stage = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const [on, setOn] = useState(false);

  /* decide whether the scene runs at all */
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const small = window.matchMedia("(max-width: 820px)");
    const sync = () => setOn(!reduced.matches && !small.matches);
    sync();
    const on = (m: MediaQueryList) =>
      m.addEventListener ? m.addEventListener("change", sync) : (m as MediaQueryList).addListener?.(sync);
    const off = (m: MediaQueryList) =>
      m.removeEventListener ? m.removeEventListener("change", sync) : (m as MediaQueryList).removeListener?.(sync);
    on(reduced); on(small);
    return () => { off(reduced); off(small); };
  }, []);

  /* only once the stage is actually in the DOM */
  useEffect(() => {
    if (!on) return;
    const el = stage.current;
    if (!el) return;

    let frame = 0;
    const read = () => {
      frame = 0;
      const vh = window.innerHeight;

      const hero = track(document.querySelector("#hero"), vh);
      const brahma = track(document.querySelector("#doors"), vh);
      const vishnu = track(document.querySelector("#movements"), vh);
      const shiva = track(document.querySelector("#shiva"), vh);

      /* Each movement yields to the next, so only one object is ever at full.
         Brahmā also covers the title page, where the lotus sits closed. */
      const vVis = vishnu.vis * (1 - clamp01(shiva.vis * 1.4));
      const bVis = Math.max(hero.vis, brahma.vis) * (1 - clamp01(vVis * 1.4));

      el.style.setProperty("--brahma", bVis.toFixed(4));
      el.style.setProperty("--brahma-p", brahma.p.toFixed(4));
      el.style.setProperty("--vishnu", vVis.toFixed(4));
      el.style.setProperty("--vishnu-p", vishnu.p.toFixed(4));
      el.style.setProperty("--shiva", "0");
      el.style.setProperty("--shiva-p", shiva.p.toFixed(4));

      const next = shiva.vis > 0.4 ? 2 : vVis > 0.4 ? 1 : 0;
      setPhase((cur) => (cur === next ? cur : next));
    };

    const onScroll = () => { if (!frame) frame = requestAnimationFrame(read); };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [on]);

  if (!on) return null;

  return (
    <>
      <div className="scene" ref={stage} aria-hidden>
        <div className="scene-inner">
          <Lotus3D />
          <Chakra3D />
        </div>
      </div>

      {/* which movement you are in */}
      <div className="trimurti-rail" aria-hidden>
        {PHASES.map((f, i) => (
          <div className={`tm ${i === phase ? "is-on" : ""}`} key={f.key}>
            <span className="tm-dv" lang="sa">{f.dv}</span>
            <span className="tm-name">{f.name}</span>
            <span className="tm-act">{f.act}</span>
          </div>
        ))}
      </div>
    </>
  );
}
