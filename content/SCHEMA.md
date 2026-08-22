# Akshara content schema

A course is one JSON file: `content/courses/<slug>.json`.

```jsonc
{
  "slug": "shiva",
  "title": "The Shiva Journey",
  "devanagari": "शिव",
  "invocationMantra": "ॐ नमः शिवाय",
  "subtitle": "A complete course in devotion, philosophy, mythology, history & practice",
  "invocation": { "devanagari": "...<br>...", "translation": "\"...\"" },
  "sections": [ Section, ... ]
}
```

### Section
```jsonc
{
  "id": "s1",                          // unique, url anchor
  "part": "Part One · Foundations",    // nav grouping; null for the orientation section
  "label": "Stage 01 · Foundations",   // small caps eyebrow
  "title": "Who Is Shiva?",
  "subtitle": "italic one-line description",
  "blocks": [ Block, ... ]
}
```

### Blocks
Every `html` field is **inline HTML** — `<em>`, `<strong>`, `<i>`, `<br>`, `<a class="inline" href>` only. No block tags.

```jsonc
{"type":"p","html":"..."}                          // paragraph
{"type":"p","lead":true,"html":"..."}              // opening paragraph, larger serif
{"type":"h3","html":"..."}                         // section heading
{"type":"h4","html":"..."}                         // sub-heading
{"type":"note","html":"..."}                       // small italic aside
{"type":"divider","html":"॥ ॐ ॥"}
{"type":"list","ordered":false,"items":["html", ...]}
{"type":"table","head":["Col A","Col B"],"rows":[["html","html"], ...]}

{"type":"verse","tag":"Sanskrit · What this is",
 "sk":"देवनागरी line<br>second line",              // Devanagari
 "tr":"IAST transliteration",
 "mn":"Plain-English translation in quotes",
 "src":"— Text name, chapter.verse"}

{"type":"box","variant":"scripture|symbolic|historical|practice|reflect|story",
 "tag":"Label · Subtitle","blocks":[ Block, ... ]}

{"type":"lenses","items":[
  {"kind":"s","title":"Scriptural","html":"..."},   // s = scriptural/gold
  {"kind":"y","title":"Symbolic","html":"..."},     // y = symbolic/blue
  {"kind":"h","title":"Historical","html":"..."}    // h = historical/ash
]}

// The honesty grid — used in the Scientific Coda of every course.
{"type":"honesty","items":[
  {"verdict":"corroborated","claim":"Short claim being tested",
   "html":"What the evidence actually shows, with the specific study/finding named."},
  {"verdict":"open","claim":"...","html":"..."},        // unfalsifiable or genuinely unresolved
  {"verdict":"contradicted","claim":"...","html":"..."} // the evidence goes the other way
]}

{"type":"timeline","items":[
  {"when":"c. 1500 BCE","what":"...","html":"..."}
]}
```

## The Three Lenses — the editorial law

Every claim must be attributable to exactly one of:

1. **Scriptural / Mythological** — what the text says, on its own terms.
2. **Symbolic / Philosophical** — what the tradition understands it to mean.
3. **Historical / Scholarly** — what evidence can establish.

Never let one wear another's clothes. Do not write "the Vedas contain quantum physics." Do not write "this is just a myth." Where scholars genuinely disagree, say so and name the disagreement.

## Voice

Second person, warm, a teacher who respects the reader's intelligence. Concrete over abstract. Never breathless, never debunking. Sanskrit always gets Devanagari + IAST + translation. Paradoxes stay unresolved when the tradition leaves them unresolved.
