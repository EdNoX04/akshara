/* Traditional ornament, drawn rather than imported. All of it reads the theme
   through CSS custom properties, so it works on parchment and on ink. */

/** A torana — the cusped temple gateway. Sits behind the wordmark. */
export function Torana() {
  const cx = 300, cy = 250, R = 236, lobes = 11;
  const pt = (i: number) => {
    const a = Math.PI - (i / lobes) * Math.PI;
    return [cx + Math.cos(a) * R, cy - Math.sin(a) * R] as const;
  };
  const r = ((Math.PI * R) / lobes / 2) * 0.98;
  let cusp = `M ${pt(0)[0].toFixed(1)} ${pt(0)[1].toFixed(1)}`;
  for (let i = 1; i <= lobes; i++) {
    const [x, y] = pt(i);
    cusp += ` A ${r.toFixed(1)} ${r.toFixed(1)} 0 0 0 ${x.toFixed(1)} ${y.toFixed(1)}`;
  }

  return (
    <svg className="torana" viewBox="0 0 600 560" fill="none" aria-hidden focusable="false">
      {/* outer arch */}
      <path d={`M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy}`}
            stroke="var(--gold)" strokeWidth="1.6" opacity=".5" />
      {/* cusped inner arch */}
      <path d={cusp} stroke="var(--saffron)" strokeWidth="1.3" opacity=".38" />
      {/* pillars */}
      <g stroke="var(--gold)" strokeWidth="1.4" opacity=".42">
        <path d={`M ${cx - R} ${cy} V 520`} />
        <path d={`M ${cx + R} ${cy} V 520`} />
        <path d={`M ${cx - R - 20} ${cy} h 40`} />
        <path d={`M ${cx + R - 20} ${cy} h 40`} />
        <path d={`M ${cx - R - 26} 520 h 52`} />
        <path d={`M ${cx + R - 26} 520 h 52`} />
        <path d={`M ${cx - R - 16} ${cy + 34} h 32`} />
        <path d={`M ${cx + R - 16} ${cy + 34} h 32`} />
      </g>
      {/* kalasha finial */}
      <g opacity=".5">
        <path d={`M ${cx} ${cy - R - 4} v -22`} stroke="var(--gold)" strokeWidth="1.4" />
        <ellipse cx={cx} cy={cy - R - 34} rx="9" ry="11" stroke="var(--saffron)" strokeWidth="1.3" />
        <path d={`M ${cx - 13} ${cy - R - 45} h 26`} stroke="var(--gold)" strokeWidth="1.4" />
      </g>
    </svg>
  );
}

/** Slow-turning mandala, behind everything in the hero. */
export function Mandala() {
  const rings = [
    { r: 168, n: 24, len: 11, o: 0.42 },
    { r: 218, n: 36, len: 8, o: 0.28 },
    { r: 276, n: 48, len: 6, o: 0.18 },
  ];
  return (
    <svg className="mandala" viewBox="-330 -330 660 660" fill="none" aria-hidden focusable="false">
      <g className="mandala-spin">
        {rings.map((ring, ri) => (
          <g key={ri}>
            <circle r={ring.r} stroke="var(--gold)" strokeOpacity={ring.o * 0.45} strokeWidth="0.7" />
            {Array.from({ length: ring.n }).map((_, i) => {
              const a = (i / ring.n) * Math.PI * 2;
              return (
                <line key={i}
                  x1={Math.cos(a) * ring.r} y1={Math.sin(a) * ring.r}
                  x2={Math.cos(a) * (ring.r + ring.len)} y2={Math.sin(a) * (ring.r + ring.len)}
                  stroke="var(--saffron)" strokeOpacity={ring.o} strokeWidth="1" strokeLinecap="round" />
              );
            })}
          </g>
        ))}
      </g>
      <g className="mandala-spin-r">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} rx="38" ry="116" cy="-116" fill="none"
            stroke="var(--gold)" strokeOpacity=".2" strokeWidth="0.8"
            transform={`rotate(${i * 45})`} />
        ))}
      </g>
    </svg>
  );
}

/** The lotus-and-rule divider used between sections. */
export function LotusRule({ width = 470 }: { width?: number }) {
  return (
    <svg className="lotus-rule" width={width} height="34" viewBox="0 0 470 34" fill="none" aria-hidden>
      <g stroke="var(--gold)" strokeWidth="1.15">
        <path d="M6 17 H168" /><path d="M302 17 H464" />
        <path d="M168 17 c 14 0 20 -8 30 -8" />
        <path d="M302 17 c -14 0 -20 -8 -30 -8" />
      </g>
      <g fill="var(--gold)">
        <rect x="160" y="14" width="6" height="6" transform="rotate(45 163 17)" />
        <rect x="304" y="14" width="6" height="6" transform="rotate(45 307 17)" />
      </g>
      <g fill="var(--saffron)" opacity=".85">
        <ellipse cx="235" cy="17" rx="3.8" ry="11" transform="rotate(-52 235 17)" />
        <ellipse cx="235" cy="17" rx="3.8" ry="12.5" transform="rotate(-26 235 17)" />
        <ellipse cx="235" cy="17" rx="3.8" ry="13.5" />
        <ellipse cx="235" cy="17" rx="3.8" ry="12.5" transform="rotate(26 235 17)" />
        <ellipse cx="235" cy="17" rx="3.8" ry="11" transform="rotate(52 235 17)" />
      </g>
      <path d="M216 24 Q235 33 254 24" stroke="var(--gold)" strokeWidth="1.15" />
      <circle cx="235" cy="17" r="2.6" fill="var(--gold)" />
    </svg>
  );
}

/** Quarter-lotus corner, four of them make a frame. */
export function Corners() {
  const one = (
    <>
      <path d="M4 70 C4 34 34 4 70 4" stroke="var(--gold)" strokeWidth="1.1" />
      <path d="M4 52 C4 26 26 4 52 4" stroke="var(--gold)" strokeWidth="1.1" opacity=".62" />
      <path d="M4 40 C4 20 20 4 40 4" stroke="var(--saffron)" strokeWidth="1.1" opacity=".5" />
      <circle cx="8" cy="66" r="2.6" fill="var(--saffron)" opacity=".8" />
      <circle cx="19" cy="55" r="1.7" fill="var(--gold)" opacity=".75" />
      <circle cx="30" cy="44" r="1.2" fill="var(--gold)" opacity=".55" />
    </>
  );
  return (
    <>
      {(["tl", "tr", "bl", "br"] as const).map((c) => (
        <svg key={c} className={`corner-orn ${c}`} viewBox="0 0 74 74" fill="none" aria-hidden>
          {one}
        </svg>
      ))}
    </>
  );
}

/** Devanagari numeral inside a double ring. */
export function Medallion({ n }: { n: string }) {
  return (
    <span className="medallion" aria-hidden>
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20.5" stroke="var(--gold)" strokeWidth="1" opacity=".85" />
        <circle cx="22" cy="22" r="17" stroke="var(--gold)" strokeWidth="0.7" opacity=".45" />
      </svg>
      <i>{n}</i>
    </span>
  );
}
