/* Three objects built from flat SVG on real Z-planes — no WebGL.
   Each reads `--p` (0 → 1, its own scroll progress) from its stage. */

const S = "var(--saffron)";
const G = "var(--gold)";
const BG = "var(--bg)";

/* ── BRAHMĀ · the lotus ──────────────────────────────────────────
   Eight outer petals and eight inner, each on its own plane. At
   --p 0 the petals stand upright and the flower is a closed bud;
   as --p rises they fall outward until it is in full bloom. */
function Petal({ c, fo }: { c: string; fo: string }) {
  return (
    <svg viewBox="-56 -150 112 158" fill="none">
      <path
        d="M0 0 C -30 -34, -36 -86, -15 -120 C -9 -131, -4 -140, 0 -148
           C 4 -140, 9 -131, 15 -120 C 36 -86, 30 -34, 0 0 Z"
        fill={c}
        fillOpacity={fo}
        stroke={c}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M0 -14 C -4 -54, -3 -98, 0 -134" stroke={G} strokeWidth="1.4" strokeOpacity=".55" />
    </svg>
  );
}

export function Lotus3D() {
  return (
    <div className="obj obj-lotus" aria-hidden>
      <div className="lotus-spin">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            className="petal"
            key={`o${i}`}
            style={{ transform: `rotateZ(${i * 45}deg) rotateX(calc(-74deg + var(--p) * 66deg))` }}
          >
            <Petal c={S} fo=".17" />
          </div>
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            className="petal"
            key={`i${i}`}
            style={{
              transform: `rotateZ(${i * 45 + 22.5}deg) rotateX(calc(-84deg + var(--p) * 58deg)) translateZ(10px) scale(.66)`,
            }}
          >
            <Petal c={G} fo=".22" />
          </div>
        ))}
        <div className="lotus-core">
          <svg viewBox="-42 -42 84 84" fill="none">
            <circle r="26" fill={G} fillOpacity=".18" stroke={G} strokeWidth="1.8" />
            <circle r="17" stroke={S} strokeWidth="1.4" strokeOpacity=".8" />
            {Array.from({ length: 14 }).map((_, i) => {
              const a = (i / 14) * Math.PI * 2;
              return (
                <circle
                  key={i}
                  cx={+(Math.cos(a) * 10).toFixed(2)}
                  cy={+(Math.sin(a) * 10).toFixed(2)}
                  r="2.1"
                  fill={S}
                  fillOpacity=".75"
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── VIṢṆU · the Sudarshana chakra ───────────────────────────────
   Four discs at different depths give the wheel thickness; it spins
   on its own axis and tips toward the reader as --p rises. */
export function Chakra3D() {
  const ring = (op: number, sw: number) => (
    <svg viewBox="-160 -160 320 320" fill="none">
      <circle r="132" stroke={S} strokeWidth={sw} strokeOpacity={op} />
      <circle r="108" stroke={G} strokeWidth={sw * 0.7} strokeOpacity={op * 0.8} />
      <circle r="44" stroke={G} strokeWidth={sw * 0.7} strokeOpacity={op * 0.8} />
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        return (
          <path
            key={`t${i}`}
            d={`M ${Math.cos(a) * 132} ${Math.sin(a) * 132}
                L ${Math.cos(a + 0.06) * 156} ${Math.sin(a + 0.06) * 156}
                L ${Math.cos(a + 0.13) * 132} ${Math.sin(a + 0.13) * 132} Z`}
            stroke={S}
            strokeWidth={sw * 0.8}
            strokeOpacity={op}
            fill={S}
            fillOpacity={op * 0.12}
          />
        );
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return (
          <line
            key={`s${i}`}
            x1={Math.cos(a) * 44} y1={Math.sin(a) * 44}
            x2={Math.cos(a) * 108} y2={Math.sin(a) * 108}
            stroke={G} strokeWidth={sw * 0.75} strokeOpacity={op * 0.75}
          />
        );
      })}
    </svg>
  );
  return (
    <div className="obj obj-chakra" aria-hidden>
      <div className="chakra-spin">
        <div className="disc" style={{ transform: "translateZ(-9px)" }}>{ring(0.32, 1.4)}</div>
        <div className="disc" style={{ transform: "translateZ(-3px)" }}>{ring(0.55, 1.5)}</div>
        <div className="disc" style={{ transform: "translateZ(3px)" }}>{ring(0.8, 1.7)}</div>
        <div className="disc" style={{ transform: "translateZ(9px)" }}>{ring(1, 1.8)}</div>
      </div>
    </div>
  );
}

/* ── ŚIVA · triśūla and Nandi ────────────────────────────────────
   A forged trident — three leaf blades on a collared socket, the
   ḍamaru bound to the shaft — standing in front of Nandi, who is
   couched far behind it, so scrolling parallaxes them apart. */
export function Trishul3D() {
  return (
    <div className="obj obj-shiva" aria-hidden>
      <div className="shiva-turn">
        {/* The triśūla head: three bladed prongs on a collared socket.
            Cut as one solid form with the fullers and bands incised out. */}
        <div className="trishul">
          <svg viewBox="0 0 240 320" fill="none">
            <g fill={S} fillOpacity=".62">
              <path d="M 120 18 C 132 56, 140 98, 140 130 C 140 158, 133 180, 130 196 L 110 196 C 107 180, 100 158, 100 130 C 100 98, 108 56, 120 18 Z" />
              <path d="M 66 12 C 79 50, 85 78, 83 102 L 53 98 C 52 72, 57 46, 66 12 Z" />
              <path d="M 174 12 C 161 50, 155 78, 157 102 L 187 98 C 188 72, 183 46, 174 12 Z" />
              <path d="M 100 200 C 78 192, 57 172, 51 142 C 47 120, 49 100, 55 82 L 79 90 C 73 108, 72 128, 77 148 C 83 170, 95 186, 113 194 Z" />
              <path d="M 140 200 C 162 192, 183 172, 189 142 C 193 120, 191 100, 185 82 L 161 90 C 167 108, 168 128, 163 148 C 157 170, 145 186, 127 194 Z" />
              <path d="M 94 192 C 106 186, 134 186, 146 192 L 150 212 C 136 220, 104 220, 90 212 Z" />
              <path d="M 92 216 C 106 224, 134 224, 148 216 L 143 240 C 130 248, 110 248, 97 240 Z" />
              <path d="M 108 242 L 110 286 L 130 286 L 132 242 Z" />
              <path d="M 101 286 L 139 286 L 137 304 C 130 310, 110 310, 103 304 Z" />
            </g>
            {/* fullers, socket bands and the ferrule line, incised */}
            <g fill={BG} fillOpacity=".85">
              <path d="M 120 40 C 126 70, 130 100, 130 128 C 130 152, 126 172, 124 188 L 116 188 C 114 172, 110 152, 110 128 C 110 100, 114 70, 120 40 Z" />
              <path d="M 66 34 C 73 60, 77 82, 76 96 L 60 94 C 60 74, 62 54, 66 34 Z" />
              <path d="M 174 34 C 167 60, 163 82, 164 96 L 180 94 C 180 74, 178 54, 174 34 Z" />
              <path d="M 97 198 C 108 194, 132 194, 143 198 L 144 204 C 132 200, 108 200, 96 204 Z" />
              <path d="M 99 222 C 110 227, 130 227, 141 222 L 140 229 C 129 233, 111 233, 100 229 Z" />
              <path d="M 116 250 L 124 250 L 124 280 L 116 280 Z" />
              <path d="M 106 292 L 134 292 L 133 297 L 107 297 Z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
