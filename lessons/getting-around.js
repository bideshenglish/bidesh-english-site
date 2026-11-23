window.LESSON = {
  "id": "getting-around",
  "type": "A",
  "who": "ট্যাক্সি ড্রাইভার / বাসের কর্মী",
  "title": "Getting Around: Taxi, Bus & Train",
  "titleBn": "ট্যাক্সি, বাস ও ট্রেনে চলাফেরা",
  "next": { "title": "Asking for Directions" },
  "scene": "ভাড়া নিয়ে ঠকা আর ভুল স্টপে নামা, নতুনদের বড় ভয়। আজ ঠিকানা দেখানো আর জিজ্ঞেস করা শিখবেন।",
  "hook": { "en": "Please use the meter.", "bn": "মিটার চালান, দয়া করে।" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "Please use the meter.", "bn": "মিটার চালান, দয়া করে।", "pr": "প্লিজ ইউজ দ্য মিটার।" },
    { "tag": "আপনি বলবেন", "en": "How much to this address?", "bn": "এই ঠিকানা পর্যন্ত কত ভাড়া?", "pr": "হাউ মাচ টু দিস অ্যাড্রেস?" },
    { "tag": "আপনি বলবেন", "en": "Please stop here.", "bn": "এখানে থামান, দয়া করে।", "pr": "প্লিজ স্টপ হিয়ার।" },
    { "tag": "আপনি বলবেন", "en": "Does this bus go to the station?", "bn": "এই বাস কি স্টেশনে যায়?", "pr": "ডাজ দিস বাস গো টু দ্য স্টেশন?" },
    { "tag": "আপনি বলবেন", "en": "Where do I get off?", "bn": "আমি কোথায় নামব?", "pr": "হোয়্যার ডু আই গেট অফ?" },
    { "tag": "আপনি বলবেন", "en": "Where can I buy a ticket?", "bn": "টিকিট কোথায় কিনতে পারি?", "pr": "হোয়্যার ক্যান আই বাই আ টিকেট?" },
    { "tag": "বুঝে নিন", "en": "The meter is not working.", "bn": "মিটার চলছে না।", "pr": "দ্য মিটার ইজ নট ওয়ার্কিং।" },
    { "tag": "বুঝে নিন", "en": "Next stop, Central Station.", "bn": "পরের স্টপ সেন্ট্রাল স্টেশন।", "pr": "নেক্সট স্টপ, সেন্ট্রাল স্টেশন।" },
    { "tag": "বুঝে নিন", "en": "This area is for ladies only.", "bn": "এই অংশ শুধু মহিলাদের জন্য।", "pr": "দিস এরিয়া ইজ ফর লেডিস ওনলি।" }
  ],
  "traps": [
    {
      "title": "meter আর fixed price",
      "intro": "ট্যাক্সিতে ভাড়া নিয়ে ঠকার সবচেয়ে বেশি সুযোগ থাকে।",
      "items": [
        { "en": "meter", "note": "ভাড়া মাপার যন্ত্র", "say": "meter" },
        { "en": "fixed price", "note": "আগে ঠিক করা ভাড়া", "say": "fixed price" },
        { "en": "change", "note": "ফেরত টাকা", "say": "change" }
      ],
      "tip": "ড্রাইভার \"মিটার নষ্ট\" বলে বেশি ভাড়া চাইলে অন্য ট্যাক্সি নিন। বড় নোট দিলে মুখে অঙ্ক বলুন আর ফেরত টাকা গুনে নিন।"
    },
    {
      "title": "fare, card আর tap",
      "intro": "বাস বা মেট্রোতে সাধারণত কার্ড বা টিকিট লাগে।",
      "items": [
        { "en": "fare", "note": "ভাড়া", "say": "fare" },
        { "en": "card", "note": "ভাড়ার কার্ড", "say": "card" },
        { "en": "tap", "note": "কার্ড ছুঁইয়ে ভাড়া দেওয়া", "say": "tap" }
      ],
      "tip": "ভাড়া না দিয়ে উঠলে জরিমানা হতে পারে। না বুঝলে জিজ্ঞেস করুন: \"How do I use this card?\""
    },
    {
      "title": "get on, get off আর stop",
      "intro": "ভুল স্টপে নামাই নতুনদের সবচেয়ে বড় সমস্যা।",
      "items": [
        { "en": "get on", "note": "ওঠা", "say": "get on" },
        { "en": "get off", "note": "নামা", "say": "get off" },
        { "en": "next stop", "note": "পরের স্টপ", "say": "next stop" }
      ],
      "tip": "বলুন: \"Please tell me when to get off.\" আর গন্তব্যের নাম ফোনে লিখে রাখুন।"
    }
  ],
  "listening": [
    {
      "say": "The meter is not working. Ten dollars.",
      "options": [
        { "t": "মিটার চলছে না, দশ ডলার", "ok": true },
        { "t": "মিটার ঠিক আছে, ভাড়া দশ ডলার", "ok": false },
        { "t": "ভাড়া লাগবে না", "ok": false }
      ],
      "why": "not working = চলছে না। এখানে আগে ভাড়া ঠিক করতে চাইছে।"
    },
    {
      "say": "Next stop, Central Station.",
      "options": [
        { "t": "এটা শেষ স্টপ", "ok": false },
        { "t": "পরের স্টপ সেন্ট্রাল স্টেশন", "ok": true },
        { "t": "সেন্ট্রাল স্টেশন বন্ধ", "ok": false }
      ],
      "why": "next stop = পরের স্টপ।"
    },
    {
      "say": "This area is for ladies only.",
      "options": [
        { "t": "সবাই বসতে পারেন", "ok": false },
        { "t": "এখানে বসা নিষেধ", "ok": false },
        { "t": "এই অংশ শুধু মহিলাদের জন্য", "ok": true }
      ],
      "why": "ladies only = শুধু মহিলাদের জন্য। সেখানে বসবেন না।"
    },
    {
      "say": "Where do you want to go?",
      "options": [
        { "t": "কোথায় যেতে চান?", "ok": true },
        { "t": "কখন যাবেন?", "ok": false },
        { "t": "কত টাকা দেবেন?", "ok": false }
      ],
      "why": "Where = কোথায়। go = যাওয়া।"
    }
  ],
  "typing": [
    {
      "ask": "ভাড়া কত ডলার? সংখ্যা লিখুন",
      "say": "The fare is five dollars.",
      "num": true,
      "answers": ["5"],
      "show": "5",
      "why": "five = ৫",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Please use the ___.",
      "answers": ["meter"],
      "show": "meter",
      "why": "meter = ভাড়া মাপার যন্ত্র",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Where do I get ___?",
      "answers": ["off"],
      "show": "off",
      "why": "get off = নামা",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [0, 2, 4],
  "dialogue": [
    {
      "boss": "Where to?",
      "bn": "কোথায় যাবেন? (ট্যাক্সি ড্রাইভার)",
      "choices": [
        { "stars": 3, "en": "To this address, please. Please use the meter.", "reply": "Okay.", "replyBn": "ঠিক আছে।", "tip": "ঠিকানা ফোনে বা কাগজে দেখান আর মিটার চালাতে বলুন।" },
        { "stars": 2, "en": "To the camp.", "reply": "Which camp?", "replyBn": "কোন ক্যাম্প?", "tip": "শুধু \"camp\" বললে বোঝা যায় না। ঠিকানা লিখে নিয়ে যান।" },
        { "stars": 1, "en": "Just drive.", "reply": "Where?", "replyBn": "কোথায়?", "tip": "গন্তব্য না বললে ড্রাইভার আন্দাজে চালাতে পারে, ভাড়াও বাড়ে।" }
      ]
    },
    {
      "boss": "Where are you going?",
      "bn": "কোথায় যাচ্ছেন? (বাস ড্রাইভার)",
      "choices": [
        { "stars": 3, "en": "Does this bus go to Central Station? Please tell me when to get off.", "reply": "Yes. I will tell you.", "replyBn": "হ্যাঁ। আমি বলে দেব।", "tip": "বাস আর নামার স্টপ, দুটোই জেনে নিয়েছেন।" },
        { "stars": 2, "en": "Station?", "reply": "Which station?", "replyBn": "কোন স্টেশন?", "tip": "পুরো নাম বলুন বা ফোনে লেখা নাম দেখান।" },
        { "stars": 1, "en": "I will see.", "reply": "Okay.", "replyBn": "ঠিক আছে।", "tip": "চুপ থাকলে ভুল স্টপে নামার ঝুঁকি। আগে জিজ্ঞেস করুন।" }
      ]
    },
    {
      "boss": "The meter is broken. Fixed price, fifty dollars.",
      "bn": "মিটার নষ্ট। ভাড়া পঞ্চাশ ডলার। (ড্রাইভার)",
      "choices": [
        { "stars": 3, "en": "Sorry, please use the meter. Otherwise I will take another taxi.", "reply": "Okay, okay. Meter.", "replyBn": "ঠিক আছে, ঠিক আছে। মিটার।", "tip": "ভদ্র কিন্তু শক্ত। না মানলে অন্য ট্যাক্সি নিন, লজ্জা নেই।" },
        { "stars": 2, "en": "Too much. Twenty dollars.", "reply": "No, no.", "replyBn": "না, না।", "tip": "দর করার আগে সাধারণ ভাড়া কত, কাউকে জিজ্ঞেস করে নিন।" },
        { "stars": 1, "en": "Okay.", "reply": "Let's go.", "replyBn": "চলুন।", "tip": "বেশি ভাড়া মেনে নিলে ঠকা হয়। মিটার চাইতে শিখুন।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "ট্যাক্সিতে ওঠার আগে \"Meter, please\" বলা কি ভালো?",
      "a": true,
      "why": "ঠিক। মিটার চালালে ঠকার সুযোগ কমে।"
    },
    {
      "q": "ড্রাইভার \"মিটার নষ্ট\" বলে অনেক বেশি ভাড়া চাইলে মেনে নেওয়া কি ভালো?",
      "a": false,
      "why": "না। অন্য ট্যাক্সি নিন বা বলুন: \"Please use the meter.\""
    },
    {
      "q": "বড় নোট দেওয়ার সময় মুখে অঙ্ক বলা আর ফেরত গুনে নেওয়া কি ভালো?",
      "a": true,
      "why": "ঠিক। নোট বদলে ফেলার ঠকবাজি এভাবে ঠেকানো যায়।"
    },
    {
      "q": "\"get off\" মানে কি বাসে ওঠা?",
      "a": false,
      "why": "না। get off = নামা। get on = ওঠা।"
    },
    {
      "q": "চিহ্নহীন অচেনা গাড়ি ট্যাক্সি ভেবে উঠে পড়া কি নিরাপদ?",
      "a": false,
      "why": "না। বিমানবন্দর বা স্টেশনে নকল ট্যাক্সি থাকে। চিহ্নযুক্ত লাইসেন্সধারী ট্যাক্সি বা অ্যাপের গাড়ি নিন।"
    }
  ]
};
