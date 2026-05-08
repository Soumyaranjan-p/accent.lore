export type Word = {
  word: string;
  language: string;
  meaning: string;
  category: "Daily" | "Meme" | "Funny" | "Internet" | "Emotional";
  usage: string;
  translation?: string;
  region: string;
  votes: number;
  emoji: string;
};

export const trendingWords: Word[] = [
  {
    word: "Semma",
    language: "Tamil",
    meaning: "Awesome / fire",
    category: "Meme",
    usage: "Semma edit da.",
    translation: "That edit is fire.",
    region: "Tamil Nadu",
    votes: 1280,
    emoji: "🔥",
  },
  {
    word: "Bhala",
    language: "Odia",
    meaning: "Good / nice",
    category: "Daily",
    usage: "Bhala achi bhai.",
    translation: "I’m good, bro.",
    region: "Odisha",
    votes: 932,
    emoji: "✨",
  },
  {
    word: "Maga",
    language: "Kannada",
    meaning: "Dude / bro",
    category: "Daily",
    usage: "Maga, reel nodidya?",
    translation: "Bro, did you watch the reel?",
    region: "Karnataka",
    votes: 1104,
    emoji: "🤝",
  },
  {
    word: "Lite teesko",
    language: "Telugu",
    meaning: "Take it easy",
    category: "Internet",
    usage: "Exam poindi, lite teesko.",
    translation: "The exam is over, take it easy.",
    region: "Telangana / Andhra Pradesh",
    votes: 876,
    emoji: "😌",
  },
  {
    word: "Ayyo",
    language: "Tamil / Kannada",
    meaning: "Oh no / expressive surprise",
    category: "Funny",
    usage: "Ayyo, typo again!",
    translation: "Oh no, typo again!",
    region: "South India",
    votes: 1510,
    emoji: "😅",
  },
  {
    word: "OP",
    language: "Internet",
    meaning: "Overpowered / too good",
    category: "Meme",
    usage: "This comeback is OP.",
    translation: "This comeback is too good.",
    region: "Gaming / comments",
    votes: 2204,
    emoji: "⚡",
  },
  {
    word: "Jhakaas",
    language: "Hindi Slang",
    meaning: "Fantastic / stylish",
    category: "Funny",
    usage: "Fit pura jhakaas lag raha hai.",
    translation: "The outfit looks fantastic.",
    region: "North / West India",
    votes: 754,
    emoji: "🕺",
  },
  {
    word: "Sakkat",
    language: "Kannada",
    meaning: "Superb / very good",
    category: "Daily",
    usage: "Sakkat idea guru.",
    translation: "Superb idea, friend.",
    region: "Karnataka",
    votes: 668,
    emoji: "🌶️",
  },
];

export const languages = [
  {
    name: "Odia",
    region: "Odisha",
    count: "60+ words",
    samples: ["Bhala", "Hau", "Bujhilu"],
    tone: "from-amber-100 to-orange-100",
  },
  {
    name: "Telugu",
    region: "Telangana / Andhra Pradesh",
    count: "95+ words",
    samples: ["Lite teesko", "Mama", "Baane undi"],
    tone: "from-orange-100 to-rose-100",
  },
  {
    name: "Tamil",
    region: "Tamil Nadu",
    count: "80+ words",
    samples: ["Semma", "Vera level", "Macha"],
    tone: "from-yellow-100 to-orange-100",
  },
  {
    name: "Kannada",
    region: "Karnataka",
    count: "80+ words",
    samples: ["Maga", "Sakkat", "Guru"],
    tone: "from-peach to-yellow/80",
  },
  {
    name: "Hindi Slang",
    region: "North + internet wide",
    count: "140+ words",
    samples: ["Jhakaas", "Scene", "Bhai"],
    tone: "from-orange/25 to-accent/20",
    wide: true,
  },
];

export const recentWords: Word[] = [
  {
    word: "Scene",
    language: "Hindi Slang",
    meaning: "Situation / plan / vibe",
    category: "Internet",
    usage: "Kal ka scene kya hai?",
    region: "Pan-India",
    votes: 421,
    emoji: "📍",
  },
  {
    word: "Vera level",
    language: "Tamil",
    meaning: "Next level",
    category: "Meme",
    usage: "Vera level performance.",
    region: "Tamil Nadu",
    votes: 603,
    emoji: "🚀",
  },
  {
    word: "Guru",
    language: "Kannada",
    meaning: "Friend / dude",
    category: "Daily",
    usage: "Guru, coffee hogona?",
    region: "Karnataka",
    votes: 512,
    emoji: "☕",
  },
];

export const heroChips = ["Bhala", "Semma", "Ayyo", "Maga", "OP", "Lite teesko"];
