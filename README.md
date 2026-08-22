# अक्षर · Akshara

**The imperishable library.** The Hindu shelf of **Alexandria** — a library of the world's sacred texts, rebuilt.

*Akṣara* means two things at once in Sanskrit: **that which does not decay**, and **the syllable** — the written word. A library of texts that have outlived three thousand years of empires could not be called anything else.

---

## The editorial law — three lenses, never mixed

Every claim on this site is marked with the lens it is being read through.

| Lens | What it holds |
|---|---|
| **Scriptural / Mythological** | What the text actually says, on its own terms. |
| **Symbolic / Philosophical** | What the tradition understands it to *mean*. |
| **Historical / Scholarly** | What archaeology and textual criticism can establish. |

A story can be historically late, symbolically profound, and devotionally alive at once. Confusing the lenses produces fundamentalism (myth read as history) or cynicism (symbol read as falsehood). Separating them produces wisdom.

**Every course ends with a Scientific Coda** — a stage that sorts the tradition's claims into *corroborated*, *open*, and *contradicted*, naming real studies and real scholarly disagreements. Including the contradicted ones. That section is the reason to trust the rest.

---

## What's live

| Course | Stages | Words | Status |
|---|---|---|---|
| The Shiva Journey | 32 | ~51k | Live |
| The Gita, Chapter by Chapter | 23 | ~31k | Live |
| The Ramayana | — | — | In writing |

---

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- Zero UI dependencies — hand-written CSS with custom properties, light and dark themes
- Content is plain JSON in `content/courses/*.json`, rendered by a block engine
- Statically generated: every course page is prerendered HTML, so it is fast and indexable
- All visuals are inline SVG components — no images, no chart library

```
app/
  layout.tsx              root shell, fonts, theme boot script
  page.tsx                home
  globals.css             the whole design system
  courses/[slug]/page.tsx the reader (SSG per course)
components/
  TopBar.tsx              brand, nav, text-size + theme controls, scroll progress
  CourseNav.tsx           sticky contents, scrollspy, J/K keyboard nav
  Blocks.tsx              the block renderer
  Verse.tsx               Sanskrit verse card with copy-to-clipboard
  Visuals.tsx             inline SVG: mandala, three-lens prism, canon tree,
                          yuga wheel, Nataraja schematic
lib/content.ts            loading, typing, word counts, reading time
content/
  SCHEMA.md               the content contract — read this before writing a course
  courses/*.json          the courses
```

## Built to be read by everyone

- Text size control with four steps, up to 132% — persisted per reader
- Light and dark themes, both with checked contrast — persisted per reader
- Applied before first paint, so there is no flash
- Full keyboard navigation, skip link, semantic landmarks, `prefers-reduced-motion` respected
- Tables scroll horizontally on small screens rather than breaking the layout

## Adding a course

1. Read `content/SCHEMA.md`.
2. Drop `content/courses/<slug>.json` in place.
3. Add a blurb to `COURSE_META` in `lib/content.ts`.

That's it — routing, the contents sidebar, reading times, word counts and the home-page card all derive from the file.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy to Vercel

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js — no configuration, no environment variables. Or:

```bash
npx vercel        # preview
npx vercel --prod # production
```

---

## The standard

1. Every quotation is cited — text, chapter, verse. If we cannot cite it, we do not quote it.
2. Sanskrit gets three lines: Devanagari, IAST, translation.
3. Paradoxes stay unresolved when the tradition leaves them unresolved.
4. Where scholars disagree, you are told they disagree and who is on which side.
5. No false science. The Vedas do not contain quantum mechanics. The epics do not describe aircraft. We say so plainly — and we say just as plainly where measured effects are real.

*ॐ*
