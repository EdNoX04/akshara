/* Inline SVG visuals. Theme-aware (they read CSS custom properties),
   responsive (viewBox + width:100%), and quiet under prefers-reduced-motion. */

export function Mandala({ className }: { className?: string }) {
  const rings = [
    { r: 150, n: 24, len: 10, o: 0.5 },
    { r: 196, n: 36, len: 7, o: 0.32 },
    { r: 250, n: 48, len: 5, o: 0.2 },
  ];
  return (
    <svg className={className} viewBox="-320 -320 640 640" aria-hidden focusable="false"
         style={{ width: "min(88vw, 720px)", opacity: 0.5 }}>
      <defs>
        <radialGradient id="mg" cx="50%" cy="50%">
          <stop offset="0%" stopColor="var(--saffron)" stopOpacity="0.5" />
          <stop offset="70%" stopColor="var(--saffron)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="var(--saffron)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle r="300" fill="url(#mg)" />
      <g style={{ animation: "spin 260s linear infinite", transformOrigin: "center" }}>
        {rings.map((ring, ri) => (
          <g key={ri}>
            <circle r={ring.r} fill="none" stroke="var(--gold)" strokeOpacity={ring.o * 0.5} strokeWidth="0.6" />
            {Array.from({ length: ring.n }).map((_, i) => {
              const a = (i / ring.n) * Math.PI * 2;
              const x1 = Math.cos(a) * ring.r, y1 = Math.sin(a) * ring.r;
              const x2 = Math.cos(a) * (ring.r + ring.len), y2 = Math.sin(a) * (ring.r + ring.len);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="var(--saffron)" strokeOpacity={ring.o} strokeWidth="1.1" strokeLinecap="round" />;
            })}
          </g>
        ))}
      </g>
      {/* eight-petal lotus */}
      <g style={{ animation: "spin-r 400s linear infinite", transformOrigin: "center" }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} rx="34" ry="104" cy="-104" fill="none"
            stroke="var(--gold)" strokeOpacity="0.22" strokeWidth="0.9"
            transform={`rotate(${i * 45})`} />
        ))}
      </g>
      <style>{`
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes spin-r{to{transform:rotate(-360deg)}}
      `}</style>
    </svg>
  );
}

/* Three overlapping lenses — the editorial law, drawn. */
export function ThreeLensPrism() {
  const c = [
    { cx: 150, cy: 118, fill: "var(--gold)", label: "Scriptural" },
    { cx: 250, cy: 118, fill: "var(--blue)", label: "Symbolic" },
    { cx: 200, cy: 202, fill: "var(--ash)", label: "Historical" },
  ];
  return (
    <svg viewBox="0 0 400 330" style={{ width: "100%", maxWidth: 460 }} role="img"
         aria-label="Three overlapping circles labelled Scriptural, Symbolic and Historical. They overlap but are never merged.">
      {c.map((k, i) => (
        <circle key={i} cx={k.cx} cy={k.cy} r="78" fill={k.fill} fillOpacity="0.14"
                stroke={k.fill} strokeOpacity="0.7" strokeWidth="1.4" />
      ))}
      <text x="112" y="26" fill="var(--gold)" fontSize="11.5" letterSpacing="2.2"
            textAnchor="middle" fontFamily="var(--sans)">SCRIPTURAL</text>
      <text x="290" y="26" fill="var(--blue)" fontSize="11.5" letterSpacing="2.2"
            textAnchor="middle" fontFamily="var(--sans)">SYMBOLIC</text>
      <text x="200" y="318" fill="var(--ash)" fontSize="11.5" letterSpacing="2.2"
            textAnchor="middle" fontFamily="var(--sans)">HISTORICAL</text>
      <line x1="112" y1="34" x2="126" y2="62" stroke="var(--gold)" strokeOpacity=".45" />
      <line x1="290" y1="34" x2="276" y2="62" stroke="var(--blue)" strokeOpacity=".45" />
      <line x1="200" y1="308" x2="200" y2="282" stroke="var(--ash)" strokeOpacity=".45" />
      <text x="200" y="142" fill="var(--ink)" fontSize="13.5" textAnchor="middle"
            fontFamily="var(--serif)" fontStyle="italic">one story</text>
      <text x="200" y="160" fill="var(--ink-faint)" fontSize="10" textAnchor="middle"
            fontFamily="var(--sans)" letterSpacing="1.3">THREE KINDS OF TRUE</text>
    </svg>
  );
}

/* The corpus, as a branching shelf. */
export function CanonTree() {
  const left = [
    ["Rigveda", "c. 1500–1200 BCE"],
    ["Samaveda", "melody"],
    ["Yajurveda", "ritual formula"],
    ["Atharvaveda", "the everyday"],
    ["Upanishads", "108, 13 principal"],
  ];
  const right = [
    ["Bhagavad Gita", "700 verses"],
    ["Ramayana", "7 kandas"],
    ["Mahabharata", "18 parvas"],
    ["18 Maha Puranas", "+18 Upa"],
    ["Agamas & Tantras", "Shaiva · Shakta · Vaishnava"],
  ];
  const row = (t: string, s: string, y: number, x: number, anchor: "start" | "end", col: string) => (
    <g key={t + y}>
      <text x={x} y={y} fill="var(--ink)" fontSize="13" textAnchor={anchor} fontFamily="var(--serif)" fontWeight="600">{t}</text>
      <text x={x} y={y + 15} fill="var(--ink-faint)" fontSize="10" textAnchor={anchor} fontFamily="var(--sans)" letterSpacing="0.8">{s}</text>
      <circle cx={anchor === "end" ? x + 16 : x - 16} cy={y - 4} r="3" fill={col} />
    </g>
  );
  return (
    <svg viewBox="0 0 700 400" style={{ width: "100%" }} role="img"
         aria-label="A diagram of the Hindu canon splitting into Shruti — that which was heard — and Smriti — that which was remembered.">
      <line x1="350" y1="52" x2="350" y2="356" stroke="var(--border)" strokeWidth="1.5" />
      <text x="350" y="26" fill="var(--saffron)" fontSize="15" textAnchor="middle"
            fontFamily="var(--dev)">सनातन</text>
      <text x="350" y="44" fill="var(--ink-faint)" fontSize="9.5" textAnchor="middle"
            letterSpacing="2.4" fontFamily="var(--sans)">THE CANON</text>

      <text x="255" y="76" fill="var(--gold)" fontSize="11" textAnchor="end" letterSpacing="2.2"
            fontFamily="var(--sans)">SHRUTI · HEARD</text>
      <text x="445" y="76" fill="var(--blue)" fontSize="11" textAnchor="start" letterSpacing="2.2"
            fontFamily="var(--sans)">SMRITI · REMEMBERED</text>

      {left.map((r, i) => {
        const y = 122 + i * 48;
        return (
          <g key={r[0]}>
            <path d={`M350 ${y - 4} C 320 ${y - 4}, 300 ${y - 4}, 271 ${y - 4}`}
                  stroke="var(--gold)" strokeOpacity="0.4" fill="none" strokeWidth="1" />
            {row(r[0], r[1], y, 255, "end", "var(--gold)")}
          </g>
        );
      })}
      {right.map((r, i) => {
        const y = 122 + i * 48;
        return (
          <g key={r[0]}>
            <path d={`M350 ${y - 4} C 380 ${y - 4}, 400 ${y - 4}, 429 ${y - 4}`}
                  stroke="var(--blue)" strokeOpacity="0.4" fill="none" strokeWidth="1" />
            {row(r[0], r[1], y, 445, "start", "var(--blue)")}
          </g>
        );
      })}
      <circle cx="350" cy="52" r="5" fill="var(--saffron)" />
      <circle cx="350" cy="356" r="3.5" fill="var(--border)" />
    </svg>
  );
}

/* The yuga cycle — used in the Scientific Coda, where its literal
   chronology is checked against the evidence. */
export function YugaWheel() {
  const seg = [
    { name: "Satya", years: "1,728,000", frac: 0.4, col: "var(--gold)" },
    { name: "Treta", years: "1,296,000", frac: 0.3, col: "var(--saffron)" },
    { name: "Dvapara", years: "864,000", frac: 0.2, col: "var(--rudra)" },
    { name: "Kali", years: "432,000", frac: 0.1, col: "var(--ash)" },
  ];
  const R = 108, r = 66;
  let acc = -Math.PI / 2;
  const arcs = seg.map((s) => {
    const a0 = acc, a1 = acc + s.frac * Math.PI * 2;
    acc = a1;
    const large = s.frac > 0.5 ? 1 : 0;
    const p = (rad: number, a: number) => `${(Math.cos(a) * rad).toFixed(2)} ${(Math.sin(a) * rad).toFixed(2)}`;
    const d = `M ${p(R, a0)} A ${R} ${R} 0 ${large} 1 ${p(R, a1)} L ${p(r, a1)} A ${r} ${r} 0 ${large} 0 ${p(r, a0)} Z`;
    const mid = (a0 + a1) / 2;
    return { ...s, d, lx: Math.cos(mid) * (R + 34), ly: Math.sin(mid) * (R + 34) };
  });
  return (
    <svg viewBox="-190 -160 380 320" style={{ width: "100%", maxWidth: 460 }} role="img"
         aria-label="The four yugas as a wheel: Satya, Treta, Dvapara and Kali, in a 4:3:2:1 ratio totalling 4.32 million years.">
      {arcs.map((a) => (
        <g key={a.name}>
          <path d={a.d} fill={a.col} fillOpacity="0.2" stroke={a.col} strokeOpacity="0.75" strokeWidth="1.2" />
          <text x={a.lx} y={a.ly} fill={a.col} fontSize="12" textAnchor="middle" fontFamily="var(--serif)" fontWeight="600">{a.name}</text>
          <text x={a.lx} y={a.ly + 13} fill="var(--ink-faint)" fontSize="9.5" textAnchor="middle" fontFamily="var(--sans)">{a.years} yr</text>
        </g>
      ))}
      <text y="-4" fill="var(--ink)" fontSize="12.5" textAnchor="middle" fontFamily="var(--serif)">Mahayuga</text>
      <text y="13" fill="var(--saffron)" fontSize="11" textAnchor="middle" fontFamily="var(--sans)" letterSpacing="1">4,320,000</text>
      <text y="140" fill="var(--ink-faint)" fontSize="10" textAnchor="middle" fontFamily="var(--sans)" letterSpacing="1.6">
        RATIO 4 : 3 : 2 : 1
      </text>
    </svg>
  );
}

/* Nataraja, read as a schematic. Deliberately a diagram, not a drawing —
   the point is the labels, and a bad figure drawing would lie about the bronze. */
export function NatarajaSchematic() {
  const notes: [number, number, string, string, "start" | "end"][] = [
    [88, 66, "damaru", "the drum — sound, the first act", "end"],
    [312, 66, "agni", "fire — dissolution", "start"],
    [88, 138, "abhaya", "“do not fear”", "end"],
    [312, 138, "gaja-hasta", "points to the raised foot", "start"],
    [312, 218, "raised foot", "refuge, release", "start"],
    [88, 252, "apasmara", "the dwarf: forgetting", "end"],
    [200, 22, "ring of fire", "prabhamandala — the cosmos", "start"],
  ];
  return (
    <svg viewBox="-92 0 584 300" style={{ width: "100%" }} role="img"
         aria-label="A schematic of the Nataraja bronze with its elements labelled: the damaru drum, fire, the abhaya gesture, the gaja-hasta arm, the raised foot, and Apasmara underfoot inside a ring of fire.">
      <circle cx="200" cy="152" r="96" fill="none" stroke="var(--saffron)" strokeOpacity="0.5" strokeWidth="1.4" />
      {Array.from({ length: 34 }).map((_, i) => {
        const a = (i / 34) * Math.PI * 2;
        return <line key={i} x1={200 + Math.cos(a) * 96} y1={152 + Math.sin(a) * 96}
          x2={200 + Math.cos(a) * 106} y2={152 + Math.sin(a) * 106}
          stroke="var(--saffron)" strokeOpacity="0.42" strokeWidth="1.6" strokeLinecap="round" />;
      })}
      {/* figure, reduced to gesture lines */}
      <g stroke="var(--gold)" strokeWidth="2" fill="none" strokeLinecap="round">
        <circle cx="200" cy="106" r="12" />
        <line x1="200" y1="118" x2="200" y2="176" />
        <path d="M200 132 L160 118 M160 118 L146 104" />       {/* upper left arm → damaru */}
        <path d="M200 132 L240 118 M240 118 L254 104" />       {/* upper right arm → fire */}
        <path d="M200 146 L164 156" />                          {/* abhaya */}
        <path d="M200 146 L238 158 L252 172" />                 {/* gaja-hasta */}
        <path d="M200 176 L176 208 L154 216" />                 {/* planted leg */}
        <path d="M200 176 L232 194 L256 186" />                 {/* raised leg */}
      </g>
      <circle cx="146" cy="104" r="5" fill="var(--gold)" />
      <path d="M254 104 l-5 -12 l5 4 l5 -10 l3 12 z" fill="var(--saffron)" />
      <ellipse cx="170" cy="222" rx="20" ry="7" fill="var(--ash)" fillOpacity="0.35"
               stroke="var(--ash)" strokeOpacity="0.6" />
      {notes.map(([x, y, t, s, anchor]) => (
        <g key={t}>
          <text x={x} y={y} fill="var(--saffron-soft)" fontSize="11.5" textAnchor={anchor} fontFamily="var(--serif)" fontWeight="600">{t}</text>
          <text x={x} y={y + 13} fill="var(--ink-faint)" fontSize="9.5" textAnchor={anchor} fontFamily="var(--sans)">{s}</text>
        </g>
      ))}
    </svg>
  );
}

export const VISUALS: Record<string, () => React.JSX.Element> = {
  lenses: ThreeLensPrism,
  canon: CanonTree,
  yuga: YugaWheel,
  nataraja: NatarajaSchematic,
};
