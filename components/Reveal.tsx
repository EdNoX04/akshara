"use client";

import { useEffect } from "react";

/** Adds `.in` to every `.reveal` as it enters the viewport. No-ops for reduced motion. */
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }

    const pending = new Set(els);
    const show = (el: Element) => {
      el.classList.add("in");
      obs.unobserve(el);
      pending.delete(el as HTMLElement);
      if (!pending.size) window.removeEventListener("scroll", onScroll);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting || e.boundingClientRect.bottom < 0) show(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    /**
     * Backstop for anything the observer cannot report a crossing for: a deep
     * link into a section, a restored scroll position, or a programmatic jump
     * that skips an element entirely. It detaches once nothing is left.
     */
    let frame = 0;
    const sweep = () => {
      frame = 0;
      pending.forEach((el) => {
        if (el.getBoundingClientRect().bottom < 0) show(el);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(sweep);
    };

    els.forEach((e) => obs.observe(e));
    sweep();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);
  return null;
}
