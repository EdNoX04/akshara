import fs from "node:fs";
import path from "node:path";

export type Block =
  | { type: "p"; html: string; lead?: boolean }
  | { type: "h3" | "h4" | "note" | "divider"; html: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "verse"; tag: string; sk: string; tr: string; mn: string; src: string }
  | { type: "box"; variant: string; tag: string; blocks: Block[] }
  | { type: "lenses"; items: { kind: string; title: string; html: string }[] }
  | { type: "honesty"; items: { verdict: string; claim: string; html: string }[] }
  | { type: "timeline"; items: { when: string; what: string; html: string }[] }
  | { type: "viz"; name: string; caption?: string };

export type Section = {
  id: string;
  part: string | null;
  label: string;
  title: string;
  subtitle: string;
  blocks: Block[];
};

export type Course = {
  slug: string;
  title: string;
  devanagari: string;
  invocationMantra: string;
  subtitle: string;
  invocation: { devanagari: string; translation: string };
  sections: Section[];
};

const DIR = path.join(process.cwd(), "content", "courses");

export function courseSlugs(): string[] {
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""));
}

export function getCourse(slug: string): Course {
  return JSON.parse(fs.readFileSync(path.join(DIR, `${slug}.json`), "utf-8"));
}

/* ---- derived stats, used on cards and stage headers ---- */

function blockText(b: Block): string {
  switch (b.type) {
    case "p": case "h3": case "h4": case "note": case "divider": return b.html;
    case "list": return b.items.join(" ");
    case "table": return [...b.head, ...b.rows.flat()].join(" ");
    case "verse": return [b.tr, b.mn].join(" ");
    case "box": return b.blocks.map(blockText).join(" ");
    case "lenses": return b.items.map((i) => i.title + i.html).join(" ");
    case "honesty": return b.items.map((i) => i.claim + i.html).join(" ");
    case "timeline": return b.items.map((i) => i.what + i.html).join(" ");
    default: return "";
  }
}

export function words(blocks: Block[]): number {
  return blocks.map(blockText).join(" ").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(blocks: Block[]): number {
  return Math.max(1, Math.round(words(blocks) / 210));
}

export function courseStats(c: Course) {
  const w = c.sections.reduce((n, s) => n + words(s.blocks), 0);
  const verses = c.sections.reduce(
    (n, s) => n + s.blocks.filter((b) => b.type === "verse").length, 0);
  return { stages: c.sections.length, words: w, minutes: Math.round(w / 210), verses };
}

export const COURSE_META: Record<string, { blurb: string; order: number }> = {
  shiva: {
    order: 1,
    blurb:
      "Who Shiva is, what every symbol on his body means, the great legends, Kashmir Shaivism, mantra, the twelve Jyotirlingas — and an honest look at what the evidence supports.",
  },
  gita: {
    order: 2,
    blurb:
      "Eighteen chapters, verse by verse, on a battlefield where a man refuses to fight. Two thousand years of argument about what it means — Shankara to Gandhi — laid side by side.",
  },
};
