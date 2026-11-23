window.LESSON = {
  "id": "greetings-small-talk",
  "type": "A",
  "who": "প্রতিবেশী / সহকর্মী",
  "title": "Greetings & Small Talk",
  "titleBn": "সালাম-হ্যালো ও ছোট কথাবার্তা",
  "next": { "title": "Phone Calls in English" },
  "scene": "ভুল ইংরেজি বললেও চলে, চুপ থাকাটাই বেশি ক্ষতি করে। আজ সহজ উত্তরে কথা শুরু করুন।",
  "hook": { "en": "I'm good, thank you. And you?", "bn": "ভালো আছি, ধন্যবাদ। আপনি?" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "I'm good, thank you. And you?", "bn": "ভালো আছি, ধন্যবাদ। আপনি?", "pr": "আই'ম গুড, থ্যাঙ্ক ইউ। অ্যান্ড ইউ?" },
    { "tag": "আপনি বলবেন", "en": "Nice to meet you.", "bn": "আপনার সাথে দেখা হয়ে ভালো লাগল।", "pr": "নাইস টু মিট ইউ।" },
    { "tag": "আপনি বলবেন", "en": "I am new here.", "bn": "আমি এখানে নতুন।", "pr": "আই অ্যাম নিউ হিয়ার।" },
    { "tag": "আপনি বলবেন", "en": "Sorry, I didn't catch that.", "bn": "দুঃখিত, আমি বুঝতে পারিনি।", "pr": "সরি, আই ডিডন্ট ক্যাচ দ্যাট।" },
    { "tag": "আপনি বলবেন", "en": "Can you speak slowly, please?", "bn": "ধীরে বলবেন, দয়া করে?", "pr": "ক্যান ইউ স্পিক স্লোলি, প্লিজ?" },
    { "tag": "আপনি বলবেন", "en": "I am from Bangladesh.", "bn": "আমি বাংলাদেশ থেকে এসেছি।", "pr": "আই অ্যাম ফ্রম বাংলাদেশ।" },
    { "tag": "বুঝে নিন", "en": "How's it going?", "bn": "কেমন চলছে?", "pr": "হাউজ ইট গোয়িং?" },
    { "tag": "বুঝে নিন", "en": "How long have you been here?", "bn": "এখানে কতদিন ধরে আছেন?", "pr": "হাউ লং হ্যাভ ইউ বিন হিয়ার?" },
    { "tag": "বুঝে নিন", "en": "What's up?", "bn": "কী খবর?", "pr": "হোয়াটস আপ?" }
  ],
  "traps": [
    {
      "title": "\"How's it going?\" হ্যাঁ-না প্রশ্ন নয়",
      "intro": "এই তিনটি আসলে একই কথা, \"কেমন আছেন?\"। উত্তর ছোট হয়।",
      "items": [
        { "en": "How are you?", "note": "কেমন আছেন?", "say": "How are you?" },
        { "en": "How's it going?", "note": "কেমন চলছে?", "say": "How's it going?" },
        { "en": "What's up?", "note": "কী খবর?", "say": "What's up?" }
      ],
      "tip": "তিনটারই উত্তর: \"Good, thanks. And you?\" \"Yes\" বা \"No\" বলবেন না।"
    },
    {
      "title": "sorry, excuse me আর pardon",
      "intro": "তিনটা ভদ্র শব্দ, কিন্তু কাজ আলাদা।",
      "items": [
        { "en": "sorry", "note": "ভুল করলে দুঃখিত", "say": "sorry" },
        { "en": "excuse me", "note": "ডাকতে বা পাশ কাটাতে", "say": "excuse me" },
        { "en": "pardon?", "note": "আবার বলুন", "say": "pardon" }
      ],
      "tip": "না শুনলে চুপ থাকবেন না। বলুন: \"Pardon?\" বা \"Sorry, I didn't catch that.\""
    },
    {
      "title": "ব্যক্তিগত প্রশ্ন, বেতন আর টাকা",
      "intro": "অনেকে গল্পছলে বেতন বা বিয়ের কথা জিজ্ঞেস করে। সবার কাছে সত্য উত্তর দেওয়া জরুরি নয়।",
      "items": [
        { "en": "How much do you earn?", "note": "আপনি কত বেতন পান?", "say": "How much do you earn?" },
        { "en": "Are you married?", "note": "আপনি কি বিবাহিত?", "say": "Are you married?" },
        { "en": "I'd rather not say.", "note": "বলতে চাই না", "say": "I'd rather not say." }
      ],
      "tip": "অচেনা কাউকে বেতন বা টাকার অঙ্ক বলবেন না। হেসে বলুন: \"Sorry, I'd rather not say.\""
    }
  ],
  "listening": [
    {
      "say": "How's it going?",
      "options": [
        { "t": "কেমন চলছে?", "ok": true },
        { "t": "আপনি কোথায় যাচ্ছেন?", "ok": false },
        { "t": "আপনার নাম কী?", "ok": false }
      ],
      "why": "How's it going? = কেমন চলছে? উত্তর: \"Good, thanks. And you?\""
    },
    {
      "say": "How long have you been here?",
      "options": [
        { "t": "আপনি কোথা থেকে এসেছেন?", "ok": false },
        { "t": "এখানে কতদিন ধরে আছেন?", "ok": true },
        { "t": "কখন যাবেন?", "ok": false }
      ],
      "why": "How long = কতদিন। উত্তর: \"Two months.\""
    },
    {
      "say": "Nice to meet you.",
      "options": [
        { "t": "আপনাকে আমি চিনি না", "ok": false },
        { "t": "আপনি দেরি করেছেন", "ok": false },
        { "t": "আপনার সাথে দেখা হয়ে ভালো লাগল", "ok": true }
      ],
      "why": "প্রথম দেখায় বলে। উত্তরে বলুন: \"Nice to meet you too.\""
    },
    {
      "say": "Where are you from?",
      "options": [
        { "t": "আপনি কোথায় যাচ্ছেন?", "ok": false },
        { "t": "আপনি কোথা থেকে এসেছেন?", "ok": true },
        { "t": "আপনার নাম কী?", "ok": false }
      ],
      "why": "from = থেকে। উত্তর: \"I am from Bangladesh.\""
    }
  ],
  "typing": [
    {
      "ask": "কত মাস? সংখ্যা লিখুন",
      "say": "I have been here for two months.",
      "num": true,
      "answers": ["2"],
      "show": "2",
      "why": "two = ২",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Nice to ___ you.",
      "answers": ["meet"],
      "show": "meet",
      "why": "meet = দেখা হওয়া",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Can you speak ___, please?",
      "answers": ["slowly"],
      "show": "slowly",
      "why": "slowly = ধীরে",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [0, 3, 4],
  "dialogue": [
    {
      "boss": "Hi! How's it going?",
      "bn": "হাই! কেমন চলছে? (প্রতিবেশী বলছেন)",
      "choices": [
        { "stars": 3, "en": "I'm good, thank you. And you?", "reply": "Doing great, thanks!", "replyBn": "খুব ভালো, ধন্যবাদ!", "tip": "ছোট উত্তর, শেষে \"And you?\" দিয়ে কথা এগিয়েছেন।" },
        { "stars": 2, "en": "Good.", "reply": "Nice.", "replyBn": "ভালো।", "tip": "ঠিক আছে। শেষে \"And you?\" যোগ করলে কথা চলে।" },
        { "stars": 1, "en": "Yes.", "reply": "Um... okay.", "replyBn": "উম... আচ্ছা।", "tip": "\"How's it going?\" হ্যাঁ-না প্রশ্ন নয়। বলুন: \"Good, thanks.\"" }
      ]
    },
    {
      "boss": "Hey, are you new here? Where're you from, man?",
      "bn": "আরে, তুমি কি এখানে নতুন? কোথা থেকে এসেছ? (সহকর্মী দ্রুত বলছে)",
      "choices": [
        { "stars": 3, "en": "Sorry, I didn't catch that. Can you speak slowly, please?", "reply": "Sure. Are you new here? Where are you from?", "replyBn": "অবশ্যই। তুমি কি নতুন? কোথা থেকে এসেছ?", "tip": "ভদ্রভাবে ধীরে বলতে বলেছেন। এতে লজ্জার কিছু নেই।" },
        { "stars": 2, "en": "Sorry?", "reply": "Are you new? Where are you from?", "replyBn": "তুমি কি নতুন? কোথা থেকে এসেছ?", "tip": "\"Sorry?\" কাজ করেছে। \"Slowly, please\" যোগ করলে আরও ভালো।" },
        { "stars": 1, "en": "Yes, yes.", "reply": "Yes what? Where are you from?", "replyBn": "কীসের \"হ্যাঁ\"? কোথা থেকে এসেছ?", "tip": "না বুঝে \"yes\" বললে ভুল বোঝাবুঝি হয়। না বুঝলে বলুন, লজ্জা নেই।" }
      ]
    },
    {
      "boss": "How much do you earn here?",
      "bn": "এখানে তুমি কত বেতন পাও? (নতুন পরিচিত একজন জিজ্ঞেস করছে)",
      "choices": [
        { "stars": 3, "en": "Sorry, I'd rather not say.", "reply": "No problem.", "replyBn": "কোনো সমস্যা নেই।", "tip": "ভদ্রভাবে এড়িয়ে গেছেন। বেতন আর টাকার কথা অচেনাদের বলবেন না।" },
        { "stars": 2, "en": "Enough.", "reply": "Okay, okay.", "replyBn": "আচ্ছা, আচ্ছা।", "tip": "এড়িয়ে গেছেন, ভালো। \"I'd rather not say\" আরও ভদ্র শোনায়।" },
        { "stars": 1, "en": "Eight hundred dollars, and I send money home every month.", "reply": "Interesting...", "replyBn": "মজার তো...", "tip": "বেতন আর টাকা পাঠানোর কথা অচেনাকে বললে ঝুঁকি বাড়ে। নিজের কাছে রাখুন।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "\"How's it going?\" প্রশ্নের উত্তরে কি \"Yes\" বলা ঠিক?",
      "a": false,
      "why": "না। এটা হ্যাঁ-না প্রশ্ন নয়। বলুন: \"Good, thanks. And you?\""
    },
    {
      "q": "না শুনলে \"Sorry, I didn't catch that\" বলা কি ঠিক?",
      "a": true,
      "why": "ঠিক। চুপ থাকার চেয়ে এটা বলা ভালো।"
    },
    {
      "q": "অচেনা কাউকে নিজের সঠিক বেতন বলা কি নিরাপদ?",
      "a": false,
      "why": "না। বলুন: \"Sorry, I'd rather not say.\""
    },
    {
      "q": "\"Nice to meet you\" কি প্রথম দেখায় বলা হয়?",
      "a": true,
      "why": "ঠিক। উত্তরে: \"Nice to meet you too.\""
    },
    {
      "q": "\"Where are you from?\" মানে কি \"আপনি কোথায় যাচ্ছেন?\"",
      "a": false,
      "why": "না। মানে \"আপনি কোথা থেকে এসেছেন?\" উত্তর: \"I am from Bangladesh.\""
    }
  ]
};
