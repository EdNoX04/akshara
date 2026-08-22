"use client";

import { useState } from "react";

export default function Verse({
  tag, sk, tr, mn, src,
}: { tag: string; sk: string; tr: string; mn: string; src: string }) {
  const [copied, setCopied] = useState(false);

  const strip = (s: string) => s.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "");

  const copy = async () => {
    const text = [strip(sk), strip(tr), strip(mn), strip(src)].filter(Boolean).join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <figure className="verse">
      <button className="copy" onClick={copy} aria-label="Copy this verse">
        {copied ? "Copied" : "Copy"}
      </button>
      {tag && <span className="tag">{tag}</span>}
      {sk && <div className="sk" lang="sa" dangerouslySetInnerHTML={{ __html: sk }} />}
      {tr && <div className="tr" dangerouslySetInnerHTML={{ __html: tr }} />}
      {mn && <div className="mn" dangerouslySetInnerHTML={{ __html: mn }} />}
      {src && <figcaption className="src" dangerouslySetInnerHTML={{ __html: src }} />}
    </figure>
  );
}
