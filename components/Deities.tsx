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
        {/* Nandi, set back — cut as one seal, with the detail incised out of it */}
        <div className="nandi">
          <svg viewBox="0 0 540 340" fill="none">
            <g fill={G} fillOpacity=".62">
              <path d="M 352 302 C 370 302, 377 293, 373 281 C 368 258, 378 236, 393 225 C 393 211, 397 200, 406 195 C 414 191, 422 193, 430 197 C 442 203, 456 208, 470 206 C 485 204, 496 195, 499 183 C 502 170, 499 158, 491 150 C 479 138, 463 130, 451 120 C 439 109, 422 97, 402 100 C 393 98, 384 99, 377 105 C 367 94, 347 72, 319 64 C 289 53, 263 66, 253 96 C 247 118, 237 146, 217 162 C 189 176, 155 160, 131 166 C 109 172, 95 194, 91 224 C 87 254, 95 282, 111 294 C 119 300, 127 302, 139 302 Z" />
              <path d="M 411 115 C 397 107, 383 95, 375 79 C 392 81, 407 93, 417 107 C 422 114, 418 121, 412 121 Z" />
              <path d="M 437 117 C 453 95, 481 79, 509 81 C 497 96, 473 111, 459 133 C 452 143, 441 141, 436 130 Z" />
              <path d="M 99 195 C 83 215, 77 245, 85 269 L 94 266 C 88 244, 93 217, 107 200 Z" />
              <path d="M 85 267 C 77 279, 76 294, 84 304 C 93 295, 97 281, 94 265 Z" />
            </g>
            {/* incised: ear, eye, the two hump creases, foreleg and hind shank */}
            <g fill={BG} fillOpacity=".85">
              <path d="M 400 152 C 389 157, 379 167, 374 178 C 383 183, 396 178, 402 168 C 405 162, 404 154, 400 152 Z" />
              <path d="M 433 143 C 439 137, 450 137, 456 144 C 450 152, 438 152, 433 143 Z" />
              <path d="M 262 165 C 273 138, 292 120, 314 118 L 315 126 C 296 129, 280 145, 270 168 Z" />
              <path d="M 281 178 C 290 156, 305 142, 322 140 L 323 147 C 308 150, 296 162, 288 181 Z" />
              <path d="M 368 244 C 380 262, 388 278, 388 292 L 379 293 C 379 279, 372 263, 360 246 Z" />
              <path d="M 124 260 C 140 278, 162 288, 189 293 L 188 300 C 158 295, 134 284, 116 265 Z" />
            </g>
          </svg>
        </div>

        {/* Triśūla, in front — three blades on a collared socket, ḍamaru bound to the shaft */}
        <div className="trishul">
          <svg viewBox="0 0 240 570" fill="none">
            <g fill={S} fillOpacity=".62">
              <path d="M 120 18 C 132 56, 140 98, 140 130 C 140 158, 133 180, 130 196 L 110 196 C 107 180, 100 158, 100 130 C 100 98, 108 56, 120 18 Z" />
              <path d="M 66 12 C 79 50, 85 78, 83 102 L 53 98 C 52 72, 57 46, 66 12 Z" />
              <path d="M 174 12 C 161 50, 155 78, 157 102 L 187 98 C 188 72, 183 46, 174 12 Z" />
              <path d="M 100 200 C 78 192, 57 172, 51 142 C 47 120, 49 100, 55 82 L 79 90 C 73 108, 72 128, 77 148 C 83 170, 95 186, 113 194 Z" />
              <path d="M 140 200 C 162 192, 183 172, 189 142 C 193 120, 191 100, 185 82 L 161 90 C 167 108, 168 128, 163 148 C 157 170, 145 186, 127 194 Z" />
              <path d="M 94 192 C 106 186, 134 186, 146 192 L 150 212 C 136 220, 104 220, 90 212 Z" />
              <path d="M 92 216 C 106 224, 134 224, 148 216 L 143 240 C 130 248, 110 248, 97 240 Z" />
              <path d="M 108 242 L 110 344 L 130 344 L 132 242 Z" />
              <path d="M 111 404 L 114 552 L 126 552 L 129 404 Z" />
              <path d="M 103 252 L 137 252 L 136 272 L 104 272 Z" />
              <path d="M 107 466 L 133 466 L 132 486 L 108 486 Z" />
              <path d="M 84 340 C 96 331, 144 331, 156 340 L 131 370 L 109 370 Z" />
              <path d="M 84 406 C 96 415, 144 415, 156 406 L 131 376 L 109 376 Z" />
              <path d="M 105 366 L 135 366 L 135 380 L 105 380 Z" />
              <path d="M 135 373 C 154 368, 167 377, 169 391 L 162 393 C 160 382, 150 376, 135 379 Z" />
              <path d="M 105 373 C 86 368, 73 377, 71 391 L 78 393 C 80 382, 90 376, 105 379 Z" />
            </g>
            {/* blade fullers */}
            <g fill={BG} fillOpacity=".85">
              <path d="M 120 40 C 126 70, 130 100, 130 128 C 130 152, 126 172, 124 188 L 116 188 C 114 172, 110 152, 110 128 C 110 100, 114 70, 120 40 Z" />
              <path d="M 66 34 C 73 60, 77 82, 76 96 L 60 94 C 60 74, 62 54, 66 34 Z" />
              <path d="M 174 34 C 167 60, 163 82, 164 96 L 180 94 C 180 74, 178 54, 174 34 Z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
