export const LOCALES = ["en", "hi", "ta"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  hi: "हिंदी",
  ta: "தமிழ்",
};

/** Short code shown in the header switcher. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  hi: "हि",
  ta: "த",
};

type Dict = {
  nav: { courses: string; map: string; stories: string; sruta: string };
  ctrl: { size: string; theme: string; dark: string; light: string; lang: string };
  hero: {
    sutraGloss: string;
    tagline: string;
    plain: string;
    ctaMap: string;
    ctaSruta: string;
  };
  map: { eyebrow: string; title: string; lead: string; note: string };
  stories: { eyebrow: string; title: string; foot: string; head: string };
  status: { canonical: string; later: string; contested: string };
  sruta: {
    eyebrow: string;
    title: string;
    say: string;
    say2: string;
    coming: string;
  };
  lenses: { eyebrow: string; title: string; lead: string };
  courses: { eyebrow: string; title: string; lead: string; soon: string; stages: string; verses: string; words: string };
  pledge: { eyebrow: string; title: string };
  footer: {
    library: string; courses: string; project: string;
    mapL: string; storiesL: string; lensesL: string; srutaL: string;
    report: string; privacy: string; terms: string; contact: string;
    comfort: string; comfortBody: string;
    rights: string; note: string; top: string;
  };
  partial: string;
};

const en: Dict = {
  nav: { courses: "Courses", map: "The Map", stories: "Stories", sruta: "Śruta" },
  ctrl: { size: "Size", theme: "Theme", dark: "Dark", light: "Light", lang: "Language" },
  hero: {
    sutraGloss: "“Now, therefore, the inquiry begins.”",
    tagline: "The imperishable library",
    plain:
      "A complete map of the Hindu tradition — the whole architecture, from the four Vedas at the root to the schools still arguing at the edges. Every claim cited. Nothing dressed up, nothing dumbed down.",
    ctaMap: "Open the map ↓",
    ctaSruta: "Meet Śruta",
  },
  map: {
    eyebrow: "The architecture",
    title: "A complete map of human consciousness",
    lead:
      "Most people meet this tradition as a pile of loose pieces — a verse here, a festival there, a story someone half-remembered. It is not a pile. It is a structure, and it has been organised the same way for a very long time. Here it is whole.",
    note:
      "These divisions are the traditional shape of the corpus, not an invention of ours: Veda at the root, the Vedangas guarding it, the Upangas growing outward, and the darshanas arguing over what all of it means.",
  },
  stories: {
    eyebrow: "कथा · Katha",
    title: "The right story, from the right source",
    head: "The story · where it actually comes from",
    foot:
      "A beloved story does not stop being beautiful when it turns out to be young. It only stops being evidence.",
  },
  status: { canonical: "In the text", later: "Later tradition", contested: "Several versions" },
  sruta: {
    eyebrow: "Coming 2027",
    title: "Ask the library itself",
    say:
      "Named for that which has been heard — the same root as Śruti, the revealed canon. An intelligence trained on this entire library, which answers only from it, and tells you where each answer came from.",
    say2:
      "Two kinds of answer, kept separate: what the text says, and what the philosophy built on it. Never a confident guess where the sources are silent.",
    coming: "Coming",
  },
  lenses: {
    eyebrow: "The editorial law",
    title: "Three kinds of true, never mixed",
    lead:
      "Most writing about religion falls into one of two traps: it reads myth as literal history, or it dismisses symbol as falsehood. Both are lazy. Every claim here is marked with the lens it is being read through.",
  },
  courses: {
    eyebrow: "Live now",
    title: "The courses",
    lead:
      "Long-form journeys through one deity, one text, one tradition — arranged the way a teacher would move: the person, the image, the stories, the philosophy, the living tradition, and then the evidence.",
    soon: "In writing",
    stages: "stages", verses: "verses", words: "words",
  },
  pledge: { eyebrow: "The standard", title: "What we promise" },
  footer: {
    library: "The Library", courses: "Courses", project: "This Project",
    mapL: "The Map", storiesL: "The Stories", lensesL: "The Three Lenses",
    srutaL: "Śruta · coming 2027",
    report: "Report an error", privacy: "Privacy", terms: "Terms & sources", contact: "Contact",
    comfort: "Reading comfort",
    comfortBody:
      "Text size, language, and light or dark theme are in the header on every page, and your choice is remembered. Four sizes, up to 132%.",
    rights: "All rights reserved.",
    note:
      "The source texts are ancient and belong to everyone. The writing, translations and design here are ours.",
    top: "Back to top ↑",
  },
  partial: "",
};

const hi: Dict = {
  nav: { courses: "पाठ्यक्रम", map: "मानचित्र", stories: "कथाएँ", sruta: "श्रुत" },
  ctrl: { size: "आकार", theme: "रंग", dark: "गहरा", light: "हल्का", lang: "भाषा" },
  hero: {
    sutraGloss: "“अब, इसलिए, जिज्ञासा आरम्भ होती है।”",
    tagline: "अक्षय पुस्तकालय",
    plain:
      "हिन्दू परम्परा का सम्पूर्ण मानचित्र — मूल में चार वेद, और सीमाओं पर आज भी वाद-विवाद करते दर्शन। हर कथन का सन्दर्भ दिया गया है। न कुछ बढ़ा-चढ़ाकर, न कुछ घटाकर।",
    ctaMap: "मानचित्र खोलें ↓",
    ctaSruta: "श्रुत से मिलिए",
  },
  map: {
    eyebrow: "संरचना",
    title: "मानव चेतना का सम्पूर्ण मानचित्र",
    lead:
      "अधिकांश लोग इस परम्परा से बिखरे टुकड़ों के रूप में मिलते हैं — कहीं एक श्लोक, कहीं एक पर्व, कहीं आधी-याद कोई कथा। यह ढेर नहीं है। यह एक संरचना है, और सहस्रों वर्षों से इसी क्रम में व्यवस्थित है। यहाँ वह पूर्ण रूप में है।",
    note:
      "ये विभाग परम्परा का अपना स्वरूप हैं, हमारी कल्पना नहीं: मूल में वेद, उनकी रक्षा करते वेदांग, बाहर की ओर बढ़ते उपांग, और इन सबका अर्थ खोजते दर्शन।",
  },
  stories: {
    eyebrow: "कथा",
    title: "सही कथा, सही स्रोत से",
    head: "कथा · वह वास्तव में कहाँ से आती है",
    foot:
      "कोई प्रिय कथा तब सुन्दर होना बन्द नहीं करती जब पता चले कि वह नई है। वह केवल प्रमाण होना बन्द करती है।",
  },
  status: { canonical: "मूल पाठ में", later: "परवर्ती परम्परा", contested: "अनेक रूप" },
  sruta: {
    eyebrow: "२०२७ में",
    title: "पुस्तकालय से ही पूछिए",
    say:
      "नाम पड़ा है श्रुत से — “जो सुना गया”, वही मूल जिससे श्रुति बनी। इस सम्पूर्ण पुस्तकालय पर प्रशिक्षित एक बुद्धि, जो उत्तर केवल इसी से देती है, और बताती है कि प्रत्येक उत्तर कहाँ से आया।",
    say2:
      "दो प्रकार के उत्तर, सदा पृथक् रखे हुए: पाठ क्या कहता है, और उस पर खड़ा दर्शन क्या कहता है। जहाँ स्रोत मौन हैं, वहाँ कभी आत्मविश्वासी अनुमान नहीं।",
    coming: "आ रहा है",
  },
  lenses: {
    eyebrow: "सम्पादकीय नियम",
    title: "सत्य के तीन प्रकार, कभी मिश्रित नहीं",
    lead:
      "धर्म पर लिखा अधिकांश लेखन दो में से एक भूल करता है: या तो मिथक को अक्षरशः इतिहास मान लेता है, या प्रतीक को असत्य कहकर त्याग देता है। दोनों आलस्य हैं। यहाँ प्रत्येक कथन पर अंकित है कि वह किस दृष्टि से पढ़ा जा रहा है।",
  },
  courses: {
    eyebrow: "अभी उपलब्ध",
    title: "पाठ्यक्रम",
    lead:
      "एक देवता, एक ग्रन्थ, एक परम्परा — उसी क्रम में जिस क्रम में गुरु चलते: पहले व्यक्ति, फिर प्रतिमा, फिर कथाएँ, फिर दर्शन, फिर जीवित परम्परा, और अन्त में प्रमाण।",
    soon: "लेखन जारी",
    stages: "चरण", verses: "श्लोक", words: "शब्द",
  },
  pledge: { eyebrow: "मानक", title: "हमारा वचन" },
  footer: {
    library: "पुस्तकालय", courses: "पाठ्यक्रम", project: "यह परियोजना",
    mapL: "मानचित्र", storiesL: "कथाएँ", lensesL: "तीन दृष्टियाँ",
    srutaL: "श्रुत · २०२७ में",
    report: "त्रुटि बताइए", privacy: "गोपनीयता", terms: "शर्तें एवं स्रोत", contact: "सम्पर्क",
    comfort: "पठन सुविधा",
    comfortBody:
      "अक्षर का आकार, भाषा, और हल्का या गहरा रंग — सब हर पृष्ठ के शीर्ष पर हैं, और आपकी पसन्द याद रखी जाती है। चार आकार, १३२% तक।",
    rights: "सर्वाधिकार सुरक्षित।",
    note:
      "मूल ग्रन्थ प्राचीन हैं और सबके हैं। यहाँ का लेखन, अनुवाद और रचना हमारी है।",
    top: "ऊपर जाएँ ↑",
  },
  partial:
    "विस्तृत टिप्पणियाँ अभी अंग्रेज़ी में हैं। हिन्दी अनुवाद पर कार्य चल रहा है — और अनुवाद तभी प्रकाशित होगा जब वह सही होगा।",
};

const ta: Dict = {
  nav: { courses: "பாடங்கள்", map: "வரைபடம்", stories: "கதைகள்", sruta: "ஶ்ருத" },
  ctrl: { size: "அளவு", theme: "நிறம்", dark: "இருள்", light: "ஒளி", lang: "மொழி" },
  hero: {
    sutraGloss: "“இப்போது, எனவே, விசாரணை தொடங்குகிறது.”",
    tagline: "அழியாத நூலகம்",
    plain:
      "இந்து மரபின் முழுமையான வரைபடம் — வேரில் நான்கு வேதங்கள் முதல், விளிம்பில் இன்னும் விவாதிக்கும் தரிசனங்கள் வரை. ஒவ்வொரு கூற்றுக்கும் மூலம் குறிக்கப்பட்டுள்ளது. மிகைப்படுத்தலும் இல்லை, எளிமைப்படுத்தலும் இல்லை.",
    ctaMap: "வரைபடத்தைத் திறக்க ↓",
    ctaSruta: "ஶ்ருதவைச் சந்திக்க",
  },
  map: {
    eyebrow: "கட்டமைப்பு",
    title: "மனித உணர்வின் முழு வரைபடம்",
    lead:
      "பெரும்பாலானோர் இந்த மரபை சிதறிய துண்டுகளாகவே சந்திக்கிறார்கள் — ஓரிடத்தில் ஒரு சுலோகம், ஓரிடத்தில் ஒரு விழா, பாதி நினைவில் ஒரு கதை. இது குவியல் அல்ல. இது ஒரு கட்டமைப்பு, நெடுங்காலமாக இதே முறையில் ஒழுங்குபடுத்தப்பட்டது. இங்கே அது முழுமையாக உள்ளது.",
    note:
      "இந்தப் பிரிவுகள் மரபின் சொந்த வடிவம், நாம் உருவாக்கியவை அல்ல: வேரில் வேதம், அதைக் காக்கும் வேதாங்கங்கள், வெளிநோக்கி வளரும் உபாங்கங்கள், இவை அனைத்தின் பொருள் குறித்து விவாதிக்கும் தரிசனங்கள்.",
  },
  stories: {
    eyebrow: "கதா",
    title: "சரியான கதை, சரியான மூலத்திலிருந்து",
    head: "கதை · அது உண்மையில் எங்கிருந்து வருகிறது",
    foot:
      "நேசிக்கப்படும் ஒரு கதை, அது புதியது என்று தெரிந்தவுடன் அழகை இழப்பதில்லை. அது சான்றாக இருப்பதை மட்டுமே நிறுத்துகிறது.",
  },
  status: { canonical: "மூலத்தில் உள்ளது", later: "பிற்கால மரபு", contested: "பல வடிவங்கள்" },
  sruta: {
    eyebrow: "2027-இல்",
    title: "நூலகத்திடமே கேளுங்கள்",
    say:
      "“கேட்கப்பட்டது” என்பதிலிருந்து பெயர் — ஶ்ருதி என்ற அதே வேர். இந்த முழு நூலகத்தில் பயிற்றுவிக்கப்பட்ட ஓர் அறிவு; அதிலிருந்து மட்டுமே பதிலளிக்கிறது, ஒவ்வொரு பதிலும் எங்கிருந்து வந்தது என்பதையும் சொல்கிறது.",
    say2:
      "இரு வகைப் பதில்கள், எப்போதும் தனித்தனியாக: நூல் என்ன சொல்கிறது, அதன் மீது கட்டப்பட்ட தத்துவம் என்ன சொல்கிறது. மூலங்கள் மௌனமாக இருக்கும் இடத்தில் ஒருபோதும் உறுதியான ஊகம் இல்லை.",
    coming: "வரவிருக்கிறது",
  },
  lenses: {
    eyebrow: "பதிப்பு விதி",
    title: "மூன்று வகை உண்மை, ஒருபோதும் கலக்கப்படாதவை",
    lead:
      "மதம் குறித்த பெரும்பாலான எழுத்து இரண்டில் ஒரு பொறியில் விழுகிறது: புராணத்தை நேரடி வரலாறாகப் படிக்கிறது, அல்லது குறியீட்டைப் பொய் என ஒதுக்குகிறது. இரண்டும் சோம்பல். இங்கே ஒவ்வொரு கூற்றும் எந்தப் பார்வையில் படிக்கப்படுகிறது என்பது குறிக்கப்பட்டுள்ளது.",
  },
  courses: {
    eyebrow: "இப்போது கிடைக்கிறது",
    title: "பாடங்கள்",
    lead:
      "ஒரு தெய்வம், ஒரு நூல், ஒரு மரபு — ஆசிரியர் நகரும் அதே வரிசையில்: முதலில் ஆள், பின் உருவம், பின் கதைகள், பின் தத்துவம், பின் வாழும் மரபு, இறுதியில் சான்று.",
    soon: "எழுதப்படுகிறது",
    stages: "நிலைகள்", verses: "சுலோகங்கள்", words: "சொற்கள்",
  },
  pledge: { eyebrow: "தரம்", title: "எங்கள் உறுதிமொழி" },
  footer: {
    library: "நூலகம்", courses: "பாடங்கள்", project: "இந்தத் திட்டம்",
    mapL: "வரைபடம்", storiesL: "கதைகள்", lensesL: "மூன்று பார்வைகள்",
    srutaL: "ஶ்ருத · 2027-இல்",
    report: "பிழையைத் தெரிவிக்க", privacy: "தனியுரிமை", terms: "விதிகள் & மூலங்கள்", contact: "தொடர்பு",
    comfort: "வாசிப்பு வசதி",
    comfortBody:
      "எழுத்து அளவு, மொழி, ஒளி அல்லது இருள் — அனைத்தும் ஒவ்வொரு பக்கத்தின் மேலேயும் உள்ளன, உங்கள் தேர்வு நினைவில் வைக்கப்படும். நான்கு அளவுகள், 132% வரை.",
    rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    note:
      "மூல நூல்கள் பழமையானவை, அனைவருக்கும் உரியவை. இங்குள்ள எழுத்து, மொழிபெயர்ப்பு, வடிவமைப்பு எங்களுடையது.",
    top: "மேலே செல்ல ↑",
  },
  partial:
    "விரிவான குறிப்புகள் தற்போது ஆங்கிலத்தில் உள்ளன. தமிழ் மொழிபெயர்ப்பு நடந்து வருகிறது — சரியாக இருக்கும்போது மட்டுமே வெளியிடப்படும்.",
};

export const DICT: Record<Locale, Dict> = { en, hi, ta };
