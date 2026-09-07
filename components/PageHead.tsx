"use client";

import { LotusRule } from "@/components/Ornaments";

/** The opening of every interior page — one shape, so they feel like one site. */
export default function PageHead({
  eyebrow,
  title,
  lead,
  devanagari,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  devanagari?: string;
}) {
  return (
    <header className="page-hero">
      <div className="page-hero-bg" aria-hidden>
        <div className="page-hero-glow" />
      </div>
      <div className="container page-hero-in">
        {devanagari && (
          <div className="ph-dv" lang="sa" aria-hidden>
            {devanagari}
          </div>
        )}
        <LotusRule width={300} />
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lead && <p className="ph-lead">{lead}</p>}
      </div>
    </header>
  );
}
