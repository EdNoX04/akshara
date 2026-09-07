/* Three objects built from flat SVG on real Z-planes — no WebGL.
   Each reads `--p` (0 → 1, its own scroll progress) from its stage. */

const S = "var(--saffron)";
const G = "var(--gold)";

/* ── BRAHMĀ · the lotus ──────────────────────────────────────────
   Eight outer petals and eight inner, each on its own rotated plane.
   The bloom opens as --p rises: petals tilt from nearly closed to flat. */
export function Lotus3D() {
  const petal = (
    <path d="M0 0 C -26 -46, -20 -104, 0 -132 C 20 -104, 26 -46, 0 0 Z" />
  );
  return (
    <div className="obj obj-lotus" aria-hidden>
      <div className="lotus-spin">
        {/* outer ring */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            className="petal petal-out"
            key={`o${i}`}
            style={{ transform: `rotateZ(${i * 45}deg) rotateX(calc(-18deg - var(--p) * 56deg)) translateZ(0)` }}
          >
            <svg viewBox="-60 -140 120 150" fill="none">
              <g stroke={S} strokeWidth="1.6" strokeOpacity=".8" fill={S} fillOpacity=".07">{petal}</g>
              <path d="M0 -6 V -122" stroke={G} strokeWidth="1" strokeOpacity=".5" />
            </svg>
          </div>
        ))}
        {/* inner ring, offset and shallower */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            className="petal petal-in"
            key={`i${i}`}
            style={{ transform: `rotateZ(${i * 45 + 22.5}deg) rotateX(calc(-6deg - var(--p) * 34deg)) translateZ(14px) scale(.62)` }}
          >
            <svg viewBox="-60 -140 120 150" fill="none">
              <g stroke={G} strokeWidth="1.8" strokeOpacity=".85" fill={G} fillOpacity=".08">{petal}</g>
            </svg>
          </div>
        ))}
        {/* pericarp */}
        <div className="lotus-core">
          <svg viewBox="-40 -40 80 80" fill="none">
            <circle r="21" stroke={G} strokeWidth="1.4" strokeOpacity=".9" fill={G} fillOpacity=".1" />
            <circle r="13" stroke={S} strokeWidth="1.2" strokeOpacity=".8" />
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              return <circle key={i} cx={Math.cos(a) * 8} cy={Math.sin(a) * 8} r="1.7" fill={S} fillOpacity=".7" />;
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
      {/* serrated rim */}
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
      {/* spokes */}
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
   The trident stands on a plane in front; Nandi lies behind it and
   further back, so scrolling parallaxes them apart. */
export function Trishul3D() {
  return (
    <div className="obj obj-shiva" aria-hidden>
      <div className="shiva-turn">
        {/* Nandi, set back — seated, facing the shrine */}
        <div className="nandi">
          <svg viewBox="0 0 360 230" fill="none">
            <g stroke={G} strokeWidth="2.4" strokeOpacity=".75" strokeLinecap="round" strokeLinejoin="round">
              {/* rump, back, the great hump, withers */}
              <path d="M50 176 C 38 150, 46 120, 84 110 C 94 72, 128 48, 162 54 C 190 60, 202 84, 206 106" />
              {/* the couched body along the ground */}
              <path d="M50 176 C 104 192, 190 190, 226 176" />
              {/* neck crest, withers to poll */}
              <path d="M206 106 C 210 92, 222 82, 238 78" />
              {/* throat and dewlap, cheek to chest */}
              <path d="M249 134 C 240 146, 229 152, 224 162 C 221 168, 223 172, 226 176" />
              {/* the head */}
              <path d="M238 78 C 254 74, 268 80, 278 92
                       C 288 104, 298 116, 304 126
                       C 309 134, 306 143, 298 145
                       C 291 147, 283 143, 278 136
                       C 270 143, 256 142, 249 134
                       C 243 128, 240 118, 239 106
                       C 238 96, 236 86, 238 78 Z" />
              {/* ear */}
              <path d="M240 97 C 230 90, 219 92, 213 101 C 221 107, 233 107, 240 102" />
              {/* horns */}
              <path d="M243 79 C 236 59, 243 45, 256 41" />
              <path d="M273 88 C 284 68, 300 60, 313 65" />
              {/* nostril */}
              <path d="M292 130 c 4 1 6 4 5 7" strokeOpacity=".55" />
              {/* forelegs tucked under */}
              <path d="M196 178 C 198 158, 214 150, 226 157" />
              <path d="M226 157 c 9 5 11 13 4 18" />
              {/* hind leg */}
              <path d="M104 184 C 104 162, 119 153, 132 160" />
              {/* hump crease */}
              <path d="M110 94 C 126 68, 146 60, 160 68" strokeOpacity=".4" />
              {/* tail */}
              <path d="M50 152 C 28 150, 22 168, 32 186" />
              <circle cx="264" cy="104" r="2.8" fill={G} fillOpacity=".8" stroke="none" />
            </g>
          </svg>
        </div>

        {/* Triśūla, in front */}
        <div className="trishul">
          <svg viewBox="0 0 200 470" fill="none">
            <g stroke={S} strokeWidth="3.4" strokeOpacity=".95" strokeLinecap="round" strokeLinejoin="round">
              {/* shaft */}
              <path d="M100 210 V 456" />
              {/* collar */}
              <path d="M70 198 H 130" />
              <path d="M78 212 H 122" />
              {/* centre prong */}
              <path d="M100 198 V 66" />
              {/* outer prongs, bowing out then closing in */}
              <path d="M84 196 C 72 172, 54 160, 48 130 C 44 110, 46 84, 53 62" />
              <path d="M116 196 C 128 172, 146 160, 152 130 C 156 110, 154 84, 147 62" />
            </g>
            {/* three points */}
            <g stroke={S} strokeWidth="2" strokeOpacity=".95" fill={S} fillOpacity=".22" strokeLinejoin="round">
              <path d="M100 12 C 90 40, 90 52, 94 68 L 106 68 C 110 52, 110 40, 100 12 Z" />
              <path d="M53 8 C 43 36, 43 48, 47 64 L 59 64 C 63 48, 63 36, 53 8 Z" />
              <path d="M147 8 C 137 36, 137 48, 141 64 L 153 64 C 157 48, 157 36, 147 8 Z" />
            </g>
            {/* ḍamaru bound to the shaft */}
            <g stroke={G} strokeWidth="2.4" strokeOpacity=".9" fill="none" strokeLinejoin="round">
              <path d="M74 276 C 87 271, 113 271, 126 276 L 105 302 L 105 308 L 126 334 C 113 339, 87 339, 74 334 L 95 308 L 95 302 Z" />
              <path d="M105 305 h 26" strokeOpacity=".55" />
              <circle cx="136" cy="305" r="4" fill={G} fillOpacity=".7" stroke="none" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
