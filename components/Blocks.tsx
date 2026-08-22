import type { Block } from "@/lib/content";
import Verse from "./Verse";
import { VISUALS } from "./Visuals";

const VERDICT_LABEL: Record<string, string> = {
  corroborated: "Corroborated",
  open: "Open question",
  contradicted: "Contradicted",
};

const VERDICT_MARK: Record<string, string> = {
  corroborated: "✓",
  open: "?",
  contradicted: "✕",
};

function H({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return <p key={i} className={b.lead ? "lead" : undefined}
                      dangerouslySetInnerHTML={{ __html: b.html }} />;
          case "h3":
            return <h3 key={i} dangerouslySetInnerHTML={{ __html: b.html }} />;
          case "h4":
            return <h4 key={i} dangerouslySetInnerHTML={{ __html: b.html }} />;
          case "note":
            return <p key={i} className="note" dangerouslySetInnerHTML={{ __html: b.html }} />;
          case "divider":
            return <div key={i} className="divider" dangerouslySetInnerHTML={{ __html: b.html || "॥ ॐ ॥" }} />;

          case "list":
            return b.ordered ? (
              <ol key={i}>{b.items.map((it, j) => <li key={j}><H html={it} /></li>)}</ol>
            ) : (
              <ul key={i}>{b.items.map((it, j) => <li key={j}><H html={it} /></li>)}</ul>
            );

          case "table":
            return (
              <div key={i} style={{ overflowX: "auto", maxWidth: "var(--measure)" }}>
                <table>
                  {b.head?.length ? (
                    <thead><tr>{b.head.map((h, j) => <th key={j}><H html={h} /></th>)}</tr></thead>
                  ) : null}
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>{r.map((c, k) => <td key={k}><H html={c} /></td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "verse":
            return <Verse key={i} {...b} />;

          case "box":
            return (
              <aside key={i} className={`box ${b.variant}`}>
                {b.tag && <span className="tag">{b.tag}</span>}
                <Blocks blocks={b.blocks} />
              </aside>
            );

          case "lenses":
            return (
              <div key={i} className="three-lens">
                {b.items.map((l, j) => (
                  <div key={j} className={`lens l-${l.kind}`}>
                    <b>{l.title}</b>
                    <H html={l.html} />
                  </div>
                ))}
              </div>
            );

          case "honesty":
            return (
              <div key={i} className="honesty">
                <div className="honesty-head">
                  <span className="dot" aria-hidden />
                  Tested against the evidence
                </div>
                {b.items.map((it, j) => (
                  <div key={j} className={`hrow hv-${it.verdict}`}>
                    <div className="v">
                      <span aria-hidden>{VERDICT_MARK[it.verdict] ?? "·"}</span>
                      {VERDICT_LABEL[it.verdict] ?? it.verdict}
                    </div>
                    <div className="b">
                      <div className="claim"><H html={it.claim} /></div>
                      <p><H html={it.html} /></p>
                    </div>
                  </div>
                ))}
              </div>
            );

          case "timeline":
            return (
              <div key={i} className="timeline">
                {b.items.map((t, j) => (
                  <div key={j} className="ti">
                    <div className="when">{t.when}</div>
                    <div className="what"><H html={t.what} /></div>
                    <p><H html={t.html} /></p>
                  </div>
                ))}
              </div>
            );

          case "viz": {
            const V = VISUALS[b.name];
            if (!V) return null;
            return (
              <figure key={i} className="viz">
                <V />
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </figure>
            );
          }

          default:
            return null;
        }
      })}
    </>
  );
}

export default Blocks;
