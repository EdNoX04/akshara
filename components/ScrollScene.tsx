"use client";

import { useEffect, useRef, useState } from "react";
import { Lotus3D, Chakra3D, Trishul3D } from "@/components/Deities";

/**
 * A fixed 3D stage behind the page. One rAF-throttled scroll listener writes
 * CSS custom properties; everything else is pure CSS transform.
 *
 * The page is divided into three movements — Brahmā, Viṣṇu, Śiva — and each
 * object is live only inside its own band, cross-fading at the seams.
 */

const PHASES = [
  { key: "brahma", dv: "ब्रह्मा", name: "Brahmā", act: "सर्ग · Creation" },
  { key: "vishnu", dv: "विष्णु", name: "Viṣṇu", act: "स्थिति · Preservation" },
  { key: "shiva", dv: "शिव", name: "Śiva", act: "संहार · Dissolution" },
];

/** 0 outside [a,b], ramping 0→1→0 with soft shoulders inside it. */
function band(p: number, a: number, b: number, feather = 0.09) {
  if (p <= a - feather || p >= b + feather) return 0;
  if (p < a) return (p - (a - feather)) / feather;
  if (p > b) return ((b + feather) - p) / feather;
  return 1;
}
const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

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
    reduced.addEventListener("change", sync);
    small.addEventListener("change", sync);
    return () => {
      reduced.removeEventListener("change", sync);
      small.removeEventListener("change", sync);
    };
  }, []);

  /* only once the stage is actually in the DOM */
  useEffect(() => {
    if (!on) return;
    const el = stage.current;
    if (!el) return;

    let frame = 0;
    const read = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? clamp01(window.scrollY / max) : 0;

      // each deity owns a third of the page
      const b = band(p, 0.0, 0.3);
      const v = band(p, 0.34, 0.63);
      const s = band(p, 0.67, 1.0);

      el.style.setProperty("--brahma", b.toFixed(4));
      el.style.setProperty("--vishnu", v.toFixed(4));
      el.style.setProperty("--shiva", s.toFixed(4));

      // local 0→1 inside each band drives bloom, spin and tilt
      el.style.setProperty("--brahma-p", clamp01(p / 0.3).toFixed(4));
      el.style.setProperty("--vishnu-p", clamp01((p - 0.34) / 0.29).toFixed(4));
      el.style.setProperty("--shiva-p", clamp01((p - 0.67) / 0.33).toFixed(4));
      el.style.setProperty("--scroll", p.toFixed(4));

      const next = s > 0.3 ? 2 : v > 0.3 ? 1 : 0;
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
          <Trishul3D />
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
