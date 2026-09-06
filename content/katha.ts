/**
 * The stories people actually grew up with — and where each one really comes from.
 * `status` is deliberately blunt: canonical, later, or contested.
 */

export type Story = {
  title: string;
  source: string;
  status: "canonical" | "later" | "contested";
  note: string;
};

export const STATUS_LABEL: Record<Story["status"], string> = {
  canonical: "In the text",
  later: "Later tradition",
  contested: "Several versions",
};

export const STORIES: Story[] = [
  {
    title: "Savitri follows Death to win back her husband",
    source: "Mahabharata, Vana Parva",
    status: "canonical",
    note:
      "Not a Purana, as almost everyone assumes — it is told inside the epic, to the exiled Pandavas, as consolation.",
  },
  {
    title: "Ekalavya gives up his thumb",
    source: "Mahabharata, Adi Parva",
    status: "canonical",
    note:
      "In the text, in full, including the part where Drona asks for it precisely so that Arjuna remains the finest archer alive.",
  },
  {
    title: "Prahlada and the pillar",
    source: "Bhagavata Purana, Canto 7",
    status: "canonical",
    note:
      "The Narasimha avatara. The Bhagavata's telling is the one that shaped the festival, the temple iconography and the retellings.",
  },
  {
    title: "The churning of the ocean",
    source: "Mahabharata, Adi Parva · and several Puranas",
    status: "contested",
    note:
      "Told many times over, with different gods, different objects and different orders of emergence. There is no single authoritative version, and the differences are interesting rather than embarrassing.",
  },
  {
    title: "How Ganesha got his elephant head",
    source: "Shiva Purana · Brahmavaivarta Purana · others",
    status: "contested",
    note:
      "The Puranas do not agree. In one, Shiva beheads him at the door. In another, Shani's glance does it. The version you were told is one of several, and knowing that is not a loss.",
  },
  {
    title: "The Lakshmana-rekha",
    source: "Not in Valmiki",
    status: "later",
    note:
      "The line drawn to protect Sita does not appear in the oldest Ramayana. It enters through later regional retellings and popular tradition — and it is now so familiar that the phrase is used in Indian courtrooms.",
  },
  {
    title: "The squirrel who helped build the bridge",
    source: "Not in Valmiki",
    status: "later",
    note:
      "A devotional addition of great charm and no antiquity. Its point — that the smallest service counts — is a later theological instinct, beautifully expressed.",
  },
  {
    title: "Shabari offers berries she has already tasted",
    source: "Not in Valmiki",
    status: "later",
    note:
      "Valmiki's Shabari offers fruit and is honoured for her devotion. The tasting — the detail that makes the story famous — belongs to later retellings.",
  },
];

export const KATHA_LEAD =
  "This is the part almost nobody gets straight. The stories reach us through grandmothers, serials, calendar art and forwarded messages, and by the time they arrive nobody can say where they came from — or whether they are in the text at all. Every story in Akshara carries its source. Where it is a later addition, that is said plainly, and the story is told anyway, because a beloved story does not stop being beautiful when it turns out to be young.";
