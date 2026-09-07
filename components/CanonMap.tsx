import { CANON, CANON_NOTE, type Node } from "@/content/canon";

function NodeRow({ node, depth = 0 }: { node: Node; depth?: number }) {
  const hasMore = Boolean(node.body || node.children?.length);

  const label = (
    <>
      {node.dv && <span className="n-dv" lang="sa">{node.dv}</span>}
      <span className="n-rm">{node.rm}</span>
      <span className="n-gloss">{node.gloss}</span>
    </>
  );

  if (!hasMore) {
    return <div className={`node leaf d${depth}`}>{label}</div>;
  }

  return (
    <details className={`node d${depth}`}>
      <summary>
        <span className="marker" aria-hidden />
        {label}
      </summary>
      <div className="node-body">
        {node.body && <p>{node.body}</p>}
        {node.children?.length ? (
          <div className="children">
            {node.children.map((c) => (
              <NodeRow key={c.rm} node={c} depth={depth + 1} />
            ))}
          </div>
        ) : null}
      </div>
    </details>
  );
}

export default function CanonMap({ note }: { note?: string }) {
  return (
    <div className="canon">
      <p className="canon-note">{note ?? CANON_NOTE}</p>

      {CANON.map((div) => (
        <section className="division" id={div.id} key={div.id}>
          <header className="div-head">
            <span className="numeral" aria-hidden>{div.numeral}</span>
            <div className="div-title">
              <h3>
                <span className="dv" lang="sa">{div.dv}</span>
                <span className="sep">·</span>
                {div.rm}
              </h3>
              <div className="count">{div.count}</div>
            </div>
          </header>
          <p className="div-lead">{div.lead}</p>
          <div className="nodes">
            {div.nodes.map((n) => (
              <NodeRow key={n.rm} node={n} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
