/**
 * The map. Six divisions, each holding the branches that grow from it.
 * `dv` = Devanagari, `rm` = roman, `gloss` = the one line that shows collapsed,
 * `body` = what opens underneath, `children` = the branches below that.
 */

export type Node = {
  dv?: string;
  rm: string;
  gloss: string;
  body?: string;
  children?: Node[];
};

export type Division = {
  id: string;
  numeral: string;
  dv: string;
  rm: string;
  count: string;
  lead: string;
  nodes: Node[];
};

export const CANON: Division[] = [
  {
    id: "veda",
    numeral: "१",
    dv: "वेद",
    rm: "The Four Vedas",
    count: "Shruti · that which was heard",
    lead:
      "The revealed core. Not composed, the tradition holds, but heard by the rishis and transmitted without alteration. Each Veda carries an Upaveda — an applied science grown from its root.",
    nodes: [
      {
        dv: "ऋग्वेद",
        rm: "Rigveda",
        gloss: "1,028 hymns. The oldest surviving text in any Indo-European language.",
        body:
          "Ten mandalas of invocation to Agni, Indra, Ushas, Varuna and the rest. It contains the Purusha Sukta, the Gayatri, and the Nasadiya Sukta — a creation hymn that ends by admitting it does not know.",
        children: [
          {
            dv: "धनुर्वेद",
            rm: "Dhanurveda",
            gloss: "Upaveda · the science of the bow",
            body:
              "Warfare, archery, weaponry and the discipline of the warrior — the martial arts as a formal field of study, not merely a craft.",
          },
        ],
      },
      {
        dv: "यजुर्वेद",
        rm: "Yajurveda",
        gloss: "The formulas the priest speaks while the rite is performed.",
        body:
          "Prose mantras for the act of sacrifice itself. Survives in two recensions — Shukla (white) and Krishna (black) — which differ in how commentary is interwoven with the mantras.",
        children: [
          {
            dv: "आयुर्वेद",
            rm: "Ayurveda",
            gloss: "Upaveda · the science of life",
            body:
              "Body, humour, diet, surgery and longevity. The Charaka and Sushruta Samhitas remain its foundational texts; Sushruta describes surgical procedure in detail.",
          },
        ],
      },
      {
        dv: "सामवेद",
        rm: "Samaveda",
        gloss: "The Rigveda set to melody. The root of Indian music.",
        body:
          "Almost entirely drawn from the Rigveda, but arranged for singing. Its notation of pitch is the oldest surviving evidence of a musical system anywhere.",
        children: [
          {
            dv: "गान्धर्ववेद",
            rm: "Gandharvaveda",
            gloss: "Upaveda · music, dance and drama",
            body:
              "The performing arts. Bharata's Natya Shastra — theatre, gesture, and the theory of rasa — belongs to this stream.",
          },
        ],
      },
      {
        dv: "अथर्ववेद",
        rm: "Atharvaveda",
        gloss: "Charms, healing, and the texture of ordinary life.",
        body:
          "The least priestly of the four: spells for fever and snakebite, blessings for a house, curses, love charms, and speculative hymns of real philosophical weight. It was admitted to the canon later than the other three.",
        children: [
          {
            dv: "अर्थशास्त्र",
            rm: "Arthashastra",
            gloss: "Upaveda · statecraft and economy",
            body:
              "Governance, law, taxation, diplomacy and espionage. Kautilya's treatise is unsentimental about power in a way that startles most first readers.",
          },
        ],
      },
    ],
  },

  {
    id: "vedanga",
    numeral: "२",
    dv: "वेदाङ्ग",
    rm: "The Six Vedangas",
    count: "The limbs of the Veda",
    lead:
      "Six disciplines built for one purpose: to carry the text across three thousand years without letting a single syllable drift. This is the most successful preservation engineering in human history.",
    nodes: [
      {
        dv: "शिक्षा",
        rm: "Shiksha",
        gloss: "Phonetics — the exact articulation of every sound.",
        body:
          "Place of articulation, pitch, duration, effort. Vedic recitation preserves an accent system that died out of spoken Sanskrit millennia ago, because Shiksha refused to let it go.",
      },
      {
        dv: "व्याकरण",
        rm: "Vyakarana",
        gloss: "Grammar — Panini's Ashtadhyayi, in roughly 4,000 rules.",
        body:
          "A complete generative description of Sanskrit, composed around the 5th–4th century BCE. It anticipates formal-language techniques that Western linguistics reached only in the twentieth century.",
      },
      {
        dv: "छन्दस्",
        rm: "Chandas",
        gloss: "Metre — the syllabic architecture of the verse.",
        body:
          "Gayatri, Anushtubh, Trishtubh, Jagati and the rest. Metre is not decoration here: a line with the wrong syllable count is audibly wrong, which makes the metre itself an error-detector.",
      },
      {
        dv: "निरुक्त",
        rm: "Nirukta",
        gloss: "Etymology — recovering the sense of words already obsolete.",
        body:
          "Yaska's Nirukta is the oldest surviving work of its kind anywhere. By his time, words in the Rigveda had already become obscure, and he built a method for interpreting them.",
      },
      {
        dv: "ज्योतिष",
        rm: "Jyotisha",
        gloss: "Astronomy and the calendar — when the rite must be performed.",
        body:
          "Born of a ritual necessity: the sacrifice has to happen at the right moment. Timekeeping, lunar mansions, solstices and intercalation follow from that requirement.",
      },
      {
        dv: "कल्प",
        rm: "Kalpa",
        gloss: "Procedure — the sutras that govern the rite itself.",
        body:
          "Shrauta (public sacrifice), Grihya (domestic rite), Dharma (conduct) and Shulba (altar geometry) sutras. The Shulbasutras state geometric relations, including the right-triangle rule, centuries before Euclid.",
      },
    ],
  },

  {
    id: "upanga",
    numeral: "३",
    dv: "उपाङ्ग",
    rm: "The Four Upangas",
    count: "The limbs that grew outward",
    lead:
      "Where the Vedangas look inward to protect the text, the Upangas look outward: law, story, interpretation and logic. This is where the tradition meets ordinary life and argues with itself.",
    nodes: [
      {
        dv: "धर्मशास्त्र",
        rm: "Dharma Shastra",
        gloss: "Law and duty — the Smritis.",
        body:
          "Manu, Yajnavalkya, Parashara, Narada and others. Composed by named human authors, openly revised across centuries, and in genuine disagreement with one another — which is why the tradition ranks Smriti below Shruti.",
        children: [
          { rm: "Manusmriti", gloss: "The most cited and most contested." },
          { rm: "Yajnavalkya Smriti", gloss: "Tighter, more systematic; the base of later legal commentary." },
          { rm: "Parashara Smriti", gloss: "Held by the tradition to be the code appropriate to the Kali Yuga." },
        ],
      },
      {
        dv: "पुराण",
        rm: "Purana",
        gloss: "The stories — and the Hinduism most Hindus actually practise.",
        body:
          "Cosmology, genealogy, pilgrimage and myth. Almost every deity, festival and temple legend a living Hindu knows comes from here rather than from the Vedas.",
        children: [
          { rm: "18 Mahapuranas", gloss: "The great Puranas — Bhagavata, Vishnu, Shiva, Markandeya and the rest." },
          { rm: "18 Upapuranas", gloss: "The secondary collection, no less rich for the label." },
          {
            dv: "इतिहास",
            rm: "Itihasa · “thus it happened”",
            gloss: "The two epics.",
            body:
              "Srimad Ramayana — seven kandas, one exile, and an ending that has troubled readers for two millennia. Mahabharata — one hundred thousand verses on a family destroying itself, and asking why.",
          },
        ],
      },
      {
        dv: "मीमांसा",
        rm: "Mimamsa",
        gloss: "Interpretation — how a sentence of scripture is to be read.",
        body:
          "A rigorous hermeneutics: what makes an injunction binding, how apparent contradictions resolve, when a passage is literal and when it is not. Indian legal reasoning still runs on its machinery.",
      },
      {
        dv: "न्याय",
        rm: "Nyaya",
        gloss: "Logic — what counts as valid knowledge.",
        body:
          "The theory of pramāṇa: perception, inference, comparison and testimony. It supplies the rules of debate that every other school, including its opponents, was obliged to argue within.",
      },
    ],
  },

  {
    id: "darshana",
    numeral: "४",
    dv: "षड्दर्शन",
    rm: "The Six Astika Darshanas",
    count: "Six orthodox schools",
    lead:
      "Six ways of seeing. They share one commitment — the authority of the Veda — and disagree about almost everything else: whether God exists, whether matter is real, how many things there fundamentally are.",
    nodes: [
      {
        dv: "न्याय",
        rm: "Nyaya",
        gloss: "Logic, inference, and the means of valid knowledge.",
        body: "Gautama's Nyaya Sutra. Realist, analytic, and relentless about the structure of a valid argument.",
      },
      {
        dv: "वैशेषिक",
        rm: "Vaisheshika",
        gloss: "Atomism — the categories of what exists.",
        body:
          "Kanada's system: reality reduced to substance, quality, action, universal, particular and inherence, with matter composed of indivisible atoms. Paired with Nyaya for most of its history.",
      },
      {
        dv: "सांख्य",
        rm: "Sankhya",
        gloss: "The enumeration — consciousness and matter, held apart.",
        body:
          "Twenty-five tattvas. Purusha (pure witnessing consciousness) and Prakriti (unconscious nature) are utterly distinct, and liberation is the recognition that they were never mixed. Non-theistic in its classical form.",
      },
      {
        dv: "योग",
        rm: "Yoga",
        gloss: "The method — the stilling of the modifications of the mind.",
        body:
          "Patanjali's Yoga Sutra takes Sankhya's metaphysics and supplies a practice: eight limbs, from ethical restraint to absorption. What the modern world calls yoga is one of those eight.",
      },
      {
        dv: "पूर्वमीमांसा",
        rm: "Purva-Mimamsa",
        gloss: "The earlier inquiry — action, ritual, and duty.",
        body:
          "Jaimini's school. The Veda's purpose is to enjoin action; its authority is intrinsic and requires no author, human or divine.",
      },
      {
        dv: "उत्तरमीमांसा",
        rm: "Uttara-Mimamsa · Vedanta",
        gloss: "The later inquiry — the nature of Brahman.",
        body:
          "The stream that became dominant. Every Vedantin who wishes to be taken seriously must comment on the same three foundations.",
        children: [
          {
            dv: "प्रस्थानत्रयी",
            rm: "Prasthana-trayi · the three foundations",
            gloss: "Upanishads · Brahma Sutra · Bhagavad Gita",
            body:
              "The Upanishads are the śruti-prasthāna, the revealed starting point. The Brahma Sutra is the nyāya-prasthāna, the reasoned one. The Gita is the smṛti-prasthāna, the remembered one. Shankara, Ramanuja and Madhva each commented on all three — and reached three incompatible conclusions from the same sentences.",
          },
        ],
      },
    ],
  },

  {
    id: "nastika",
    numeral: "५",
    dv: "नास्तिक दर्शन",
    rm: "The Three Non-Vedic Darshanas",
    count: "Outside the Veda, inside the conversation",
    lead:
      "Three schools that reject the Veda's authority. They are part of this map because Indian philosophy is a two-thousand-year argument, and you cannot follow the argument with one side removed.",
    nodes: [
      {
        dv: "बौद्ध",
        rm: "Bauddha",
        gloss: "Impermanence, no-self, and the end of suffering.",
        body:
          "The Buddha's analysis, and the schools that grew from it — Theravada, Madhyamaka, Yogachara. Nagarjuna's dialectic forced every Hindu school to sharpen its account of what a self is.",
      },
      {
        dv: "जैन",
        rm: "Jaina",
        gloss: "Anekantavada — reality is many-sided.",
        body:
          "No single standpoint captures the whole truth; every assertion is true only from a perspective. Combined with radical ahimsa, this produced one of the most epistemically humble systems ever built.",
      },
      {
        dv: "चार्वाक",
        rm: "Charvaka · Lokayata",
        gloss: "Materialism. Only what is perceived is real.",
        body:
          "No soul, no afterlife, no scriptural authority. Almost none of its own literature survives — we know it mostly through the arguments its opponents wrote down in order to refute it, which is itself worth sitting with.",
      },
    ],
  },

  {
    id: "katha",
    numeral: "७",
    dv: "कथा",
    rm: "Katha · The Stories",
    count: "How the tradition actually reaches you",
    lead:
      "Not a formal division of the corpus — but it is how almost everyone meets it. The stories arrive through grandmothers, television serials, calendar art and forwarded messages, and by the time they reach you nobody can say where they came from. In Akshara every story carries its source.",
    nodes: [
      {
        dv: "इतिहास",
        rm: "Itihasa",
        gloss: "The two epics — the stories most often retold and most often altered.",
        body:
          "Srimad Ramayana and Mahabharata. Both have hundreds of regional retellings that disagree with the Sanskrit originals, and the disagreements are frequently the most interesting part.",
      },
      {
        dv: "पुराणकथा",
        rm: "Puranic tales",
        gloss: "Where nearly every deity you know got a childhood, a family and a temper.",
        body:
          "The Puranas often tell the same story more than once, differently. We show you which telling you inherited, and which others exist alongside it.",
      },
      {
        dv: "स्थलपुराण",
        rm: "Sthala Purana",
        gloss: "Temple legends — why this god, at this rock, in this town.",
        body:
          "Local, fiercely specific, and rarely written down in Sanskrit. The most endangered layer of the whole tradition.",
      },
      {
        dv: "लोककथा",
        rm: "Loka-katha · folk tellings",
        gloss: "Women's songs, village performance, and the versions the manuscripts never carried.",
        body:
          "Chandrabati's Bengali Ramayana, Telugu and Maithili song traditions, and the countless tellings that centre the characters the Sanskrit texts leave at the edge.",
      },
    ],
  },

  {
    id: "agama",
    numeral: "६",
    dv: "आगम",
    rm: "The Six Agamas",
    count: "Temple, mantra and image",
    lead:
      "How worship is actually done. Where the Vedas govern the fire altar, the Agamas govern the temple: how it is built, how the image is consecrated, how a mantra is transmitted, what the body does. Six streams, by the deity at the centre.",
    nodes: [
      { dv: "शाक्त", rm: "Shakta", gloss: "The Goddess as ultimate reality — Devi, Shakti, the power that is not secondary to anyone." },
      { dv: "शैव", rm: "Shaiva", gloss: "Shiva — from Kashmir's non-dual recognition to the Shaiva Siddhanta of the Tamil south." },
      { dv: "वैष्णव", rm: "Vaishnava", gloss: "Vishnu and his avatars — Pancharatra and Vaikhanasa temple practice." },
      { dv: "गाणपत्य", rm: "Ganapatya", gloss: "Ganesha as the supreme, not merely as the remover of obstacles at the threshold." },
      { dv: "कौमार", rm: "Kaumara", gloss: "Kartikeya, Skanda, Murugan — vast in Tamil Nadu, quieter elsewhere." },
      { dv: "सौर", rm: "Saura", gloss: "Surya, the sun — once major, now the most diminished of the six." },
    ],
  },
];

export const CANON_NOTE =
  "These six divisions are the traditional shape of the corpus, not an invention of ours. The arrangement below follows how the tradition organises itself — Veda at the root, the Vedangas guarding it, the Upangas growing outward, and the darshanas arguing over what all of it means.";
