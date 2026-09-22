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
        {/* Nandi, set back */}
        <div className="nandi">
          <svg viewBox="0 0 540 340" fill="none">
            {/* far horn, on the skull */}
            <g fill={G} fillOpacity=".22" stroke={G} strokeWidth="2.3" strokeLinejoin="round">
              <path d="M410 114 C 396 106, 382 94, 374 78 C 391 80, 406 92, 416 106 C 421 113, 417 120, 411 120 Z" />
            </g>
            {/* the couched body: hump forward over the shoulders, rounded rump */}
            <path
              fill={G}
              fillOpacity=".13"
              stroke={G}
              strokeWidth="2.6"
              strokeLinejoin="round"
              d="M138 302 L 352 302
                 C 370 302, 377 293, 373 281
                 C 366 261, 372 238, 384 226
                 C 378 212, 383 200, 395 193
                 C 404 188, 414 189, 424 194
                 C 436 200, 452 206, 468 204
                 C 484 202, 495 194, 498 182
                 C 501 170, 498 158, 490 150
                 C 478 138, 462 130, 450 120
                 C 438 109, 421 97, 401 100
                 C 392 98, 383 99, 376 105
                 C 366 94, 346 72, 318 64
                 C 288 53, 262 66, 252 96
                 C 246 118, 236 146, 216 162
                 C 188 176, 154 160, 130 166
                 C 108 172, 94 194, 90 224
                 C 86 254, 94 282, 110 294
                 C 118 300, 126 302, 138 302 Z"
            />
            {/* near foreleg, knee forward and hoof tucked back */}
            <path
              fill={G} fillOpacity=".2" stroke={G} strokeWidth="2.4" strokeLinejoin="round"
              d="M372 232 C 384 252, 393 272, 391 288 C 376 297, 354 301, 336 301
                 C 340 295, 349 291, 359 290 C 371 289, 378 286, 381 281
                 C 379 266, 371 248, 361 234 Z"
            />
            {/* hind shank, folded forward */}
            <path
              fill={G} fillOpacity=".2" stroke={G} strokeWidth="2.4" strokeLinejoin="round"
              d="M118 258 C 134 276, 158 286, 186 291 C 204 294, 218 297, 226 302 L 206 302
                 C 192 298, 176 296, 158 293 C 136 289, 120 278, 110 262 Z"
            />
            {/* modelling: hump creases, shoulder, haunch */}
            <g stroke={G} strokeWidth="2" strokeOpacity=".5" fill="none" strokeLinecap="round">
              <path d="M262 118 C 272 92, 292 74, 314 78" />
              <path d="M276 138 C 286 112, 302 98, 320 100" strokeOpacity=".3" />
              <path d="M358 150 C 348 178, 346 210, 353 242" />
              <path d="M132 188 C 116 214, 114 252, 128 284" />
            </g>
            {/* near horn, sweeping up and forward */}
            <g fill={G} fillOpacity=".26" stroke={G} strokeWidth="2.4" strokeLinejoin="round">
              <path d="M436 116 C 452 94, 480 78, 508 80 C 496 95, 472 110, 458 132 C 451 142, 440 140, 435 129 Z" />
              <path d="M446 110 C 462 96, 480 88, 496 86" fill="none" strokeWidth="1.5" strokeOpacity=".4" />
            </g>
            {/* eye and muzzle */}
            <path fill="none" stroke={G} strokeWidth="2.2" d="M430 147 C 436 140, 449 140, 455 147 C 449 156, 436 156, 430 147 Z" />
            <circle cx="442" cy="148" r="2.9" fill={G} />
            <g stroke={G} strokeWidth="2" strokeOpacity=".7" fill="none" strokeLinecap="round">
              <path d="M496 190 C 486 197, 470 201, 454 199" />
              <path d="M484 170 c 7 0 9 7 4 11 c -5 3 -10 -2 -8 -7" />
            </g>
            {/* beaded collar and temple bell */}
            <g stroke={G} strokeWidth="2.2" strokeOpacity=".8" fill="none">
              <path d="M366 158 C 357 180, 352 203, 356 228" />
              <path d="M386 166 C 377 186, 372 206, 376 230" />
            </g>
            <g fill={G} fillOpacity=".55">
              <circle cx="363" cy="172" r="2.8" /><circle cx="359" cy="189" r="2.8" />
              <circle cx="356" cy="206" r="2.8" /><circle cx="356" cy="222" r="2.8" />
            </g>
            <path
              fill={G} fillOpacity=".24" stroke={G} strokeWidth="2.2" strokeLinejoin="round"
              d="M362 233 C 352 242, 347 255, 348 265 C 355 269, 377 269, 384 265 C 385 255, 380 242, 370 233 Z"
            />
            <circle cx="366" cy="272" r="3.4" fill={G} fillOpacity=".7" />
            {/* ear, drooping in front of the collar */}
            <path
              fill={G} fillOpacity=".24" stroke={G} strokeWidth="2.3" strokeLinejoin="round"
              d="M406 148 C 386 150, 366 163, 356 182 C 372 193, 398 187, 409 170 C 415 161, 413 150, 406 148 Z"
            />
            <path fill="none" stroke={G} strokeWidth="1.5" strokeOpacity=".4" d="M401 158 C 387 161, 373 169, 365 179" />
            {/* tail along the flank */}
            <g fill={G} fillOpacity=".22" stroke={G} strokeWidth="2.4" strokeLinejoin="round">
              <path d="M98 196 C 82 216, 76 246, 82 272 L 93 269 C 88 246, 92 220, 106 204 Z" />
              <path d="M82 270 C 75 282, 75 296, 83 305 C 92 296, 96 282, 93 268 Z" />
            </g>
          </svg>
        </div>

        {/* Triśūla, in front */}
        <div className="trishul">
          <svg viewBox="0 0 240 560" fill="none">
            {/* the two outer arms and the three blades */}
            <g fill={S} fillOpacity=".2" stroke={S} strokeWidth="2.4" strokeLinejoin="round">
              <path d="M102 206 C 80 198, 60 178, 54 148 C 50 126, 52 106, 58 88 L 78 94 C 72 112, 71 130, 76 150 C 82 172, 94 188, 112 196 Z" />
              <path d="M138 206 C 160 198, 180 178, 186 148 C 190 126, 188 106, 182 88 L 162 94 C 168 112, 169 130, 164 150 C 158 172, 146 188, 128 196 Z" />
              <path d="M120 22 C 130 58, 138 96, 138 128 C 138 156, 131 178, 128 194 L 112 194 C 109 178, 102 156, 102 128 C 102 96, 110 58, 120 22 Z" />
              <path d="M68 16 C 79 52, 84 78, 82 100 L 56 96 C 55 72, 59 48, 68 16 Z" />
              <path d="M172 16 C 161 52, 156 78, 158 100 L 184 96 C 185 72, 181 48, 172 16 Z" />
            </g>
            {/* blade ribs */}
            <g stroke={G} strokeWidth="1.6" strokeOpacity=".65" fill="none">
              <path d="M120 42 V 186" />
              <path d="M68 32 C 73 56, 75 80, 74 96" />
              <path d="M172 32 C 167 56, 165 80, 166 96" />
            </g>
            {/* socket, shaft and bindings */}
            <g fill={S} fillOpacity=".28" stroke={S} strokeWidth="2.4" strokeLinejoin="round">
              <path d="M96 196 C 106 190, 134 190, 144 196 L 148 212 C 136 219, 104 219, 92 212 Z" />
              <path d="M94 216 C 106 223, 134 223, 146 216 L 141 236 C 130 243, 110 243, 99 236 Z" />
              <path d="M110 238 L 112 340 L 128 340 L 130 238 Z" />
              <path d="M113 406 L 116 548 L 124 548 L 127 406 Z" />
              <path d="M105 252 L 135 252 L 134 269 L 106 269 Z" />
              <path d="M109 468 L 131 468 L 130 485 L 110 485 Z" />
            </g>
            {/* ḍamaru bound to the shaft */}
            <g fill={BG} stroke={G} strokeWidth="2.3" strokeLinejoin="round">
              <path d="M86 342 C 97 334, 143 334, 154 342 L 130 371 L 110 371 Z" />
              <path d="M86 404 C 97 412, 143 412, 154 404 L 130 375 L 110 375 Z" />
              <path d="M107 368 L 133 368 L 133 378 L 107 378 Z" />
            </g>
            <g stroke={G} strokeWidth="1.9" fill="none">
              <path d="M133 373 C 152 368, 164 376, 166 389" />
              <path d="M107 373 C 88 368, 76 376, 74 389" />
            </g>
            <g fill={G} fillOpacity=".85">
              <circle cx="167" cy="393" r="5" /><circle cx="73" cy="393" r="5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
