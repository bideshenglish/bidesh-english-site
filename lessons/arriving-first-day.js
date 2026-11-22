window.LESSON = {
  "id": "arriving-first-day",
  "type": "A",
  "who": "কোম্পানির ড্রাইভার / সুপারভাইজার",
  "title": "Arriving: Pickup, Check-in & First Day",
  "titleBn": "পৌঁছানো: পিকআপ, ক্যাম্পে ওঠা ও প্রথম দিন",
  "next": { "title": "Talking to Your Boss", "id": "boss" },
  "scene": "নতুন দেশে নেমে কেউ নিতে না এলে? অচেনা লোক ডাকলে? আজ এই প্রথম দিনের ইংরেজি শিখবেন।",
  "hook": { "en": "Can I call my company, please?", "bn": "আমি কি আমার কোম্পানিকে ফোন করতে পারি, দয়া করে?" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "I am looking for the company driver.", "bn": "আমি কোম্পানির ড্রাইভারকে খুঁজছি।", "pr": "আই অ্যাম লুকিং ফর দ্য কোম্পানি ড্রাইভার।" },
    { "tag": "আপনি বলবেন", "en": "Can I call my company, please?", "bn": "আমি কি আমার কোম্পানিকে ফোন করতে পারি, দয়া করে?", "pr": "ক্যান আই কল মাই কোম্পানি, প্লিজ?" },
    { "tag": "আপনি বলবেন", "en": "Where is the baggage claim?", "bn": "ব্যাগ ওঠার জায়গা কোথায়?", "pr": "হোয়্যার ইজ দ্য ব্যাগেজ ক্লেইম?" },
    { "tag": "আপনি বলবেন", "en": "Where can I buy a SIM card?", "bn": "সিম কার্ড কোথায় কিনতে পারি?", "pr": "হোয়্যার ক্যান আই বাই আ সিম কার্ড?" },
    { "tag": "আপনি বলবেন", "en": "When will I get my passport back?", "bn": "আমার পাসপোর্ট কখন ফেরত পাব?", "pr": "হোয়েন উইল আই গেট মাই পাসপোর্ট ব্যাক?" },
    { "tag": "আপনি বলবেন", "en": "Please write the address and your phone number.", "bn": "ঠিকানা আর আপনার ফোন নম্বর লিখে দিন।", "pr": "প্লিজ রাইট দ্য অ্যাড্রেস অ্যান্ড ইওর ফোন নাম্বার।" },
    { "tag": "বুঝে নিন", "en": "I am your driver. Please come with me.", "bn": "আমি আপনার ড্রাইভার। আমার সাথে আসুন।", "pr": "আই অ্যাম ইওর ড্রাইভার। প্লিজ কাম উইথ মি।" },
    { "tag": "বুঝে নিন", "en": "We need your passport for the residence permit.", "bn": "বসবাসের অনুমতির জন্য আপনার পাসপোর্ট লাগবে।", "pr": "উই নিড ইওর পাসপোর্ট ফর দ্য রেসিডেন্স পারমিট।" },
    { "tag": "বুঝে নিন", "en": "Tomorrow, we will go for your medical test.", "bn": "কাল আপনার মেডিকেল পরীক্ষায় যাব।", "pr": "টুমরো, উই উইল গো ফর ইওর মেডিকেল টেস্ট।" }
  ],
  "traps": [
    {
      "title": "পিকআপের লোক চিনবেন কীভাবে",
      "intro": "অচেনা কারও সাথে সরাসরি যাবেন না। আগে নিশ্চিত হোন।",
      "items": [
        { "en": "pickup", "note": "নিতে আসা", "say": "pickup" },
        { "en": "company name", "note": "কোম্পানির নাম", "say": "company name" },
        { "en": "taxi", "note": "ভাড়ার গাড়ি", "say": "taxi" }
      ],
      "tip": "জিজ্ঞেস করুন: \"Which company are you from?\" আর কোম্পানিকে ফোন করে নিশ্চিত হোন।"
    },
    {
      "title": "passport আর residence permit",
      "intro": "প্রথম কয়েক দিনে কাগজপত্র নিয়ে কথা হয়।",
      "items": [
        { "en": "residence permit", "note": "থাকার অনুমতি", "say": "residence permit" },
        { "en": "ID card", "note": "পরিচয়পত্র", "say": "ID card" },
        { "en": "return", "note": "ফেরত দেওয়া", "say": "return" }
      ],
      "tip": "পাসপোর্ট দিলে জিজ্ঞেস করুন: \"When will I get it back?\" আর একটা কপি রাখুন।"
    },
    {
      "title": "emergency আর contact",
      "intro": "বিপদে কাকে ফোন করবেন, আগেই ঠিক রাখুন।",
      "items": [
        { "en": "emergency", "note": "জরুরি অবস্থা", "say": "emergency" },
        { "en": "embassy", "note": "দূতাবাস", "say": "embassy" },
        { "en": "contact", "note": "যোগাযোগ", "say": "contact" }
      ],
      "tip": "ফোনে আর কাগজে লিখে রাখুন: কোম্পানির নম্বর, বাংলাদেশ দূতাবাসের নম্বর, পরিবারের নম্বর।"
    }
  ],
  "listening": [
    {
      "say": "I am your driver. Please come with me.",
      "options": [
        { "t": "আমি আপনার ড্রাইভার, আমার সাথে আসুন", "ok": true },
        { "t": "আমার গাড়ি নেই", "ok": false },
        { "t": "আপনি ড্রাইভার", "ok": false }
      ],
      "why": "driver = ড্রাইভার। come with me = আমার সাথে আসুন।"
    },
    {
      "say": "Please wait here. Your manager is coming.",
      "options": [
        { "t": "ফিরে যান", "ok": false },
        { "t": "এখানে অপেক্ষা করুন, ম্যানেজার আসছেন", "ok": true },
        { "t": "ম্যানেজার চলে গেছেন", "ok": false }
      ],
      "why": "wait = অপেক্ষা করা। coming = আসছেন।"
    },
    {
      "say": "We need your passport for the residence permit.",
      "options": [
        { "t": "আপনার পাসপোর্ট হারিয়ে গেছে", "ok": false },
        { "t": "বসবাসের অনুমতির জন্য পাসপোর্ট লাগবে", "ok": true },
        { "t": "পাসপোর্ট আপনি রাখুন", "ok": false }
      ],
      "why": "need = দরকার। কবে ফেরত পাবেন, জিজ্ঞেস করুন।"
    },
    {
      "say": "Tomorrow, we will go for your medical test.",
      "options": [
        { "t": "আজ মেডিকেল পরীক্ষা শেষ", "ok": false },
        { "t": "কাল আপনার ছুটি", "ok": false },
        { "t": "কাল মেডিকেল পরীক্ষায় যাব", "ok": true }
      ],
      "why": "tomorrow = কাল। medical test = মেডিকেল পরীক্ষা।"
    }
  ],
  "typing": [
    {
      "ask": "কয়টায় শুরু? সংখ্যা লিখুন",
      "say": "Tomorrow, you start at six o'clock.",
      "num": true,
      "answers": ["6"],
      "show": "6",
      "why": "six = ৬",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Where is the baggage ___?",
      "answers": ["claim"],
      "show": "claim",
      "why": "baggage claim = ব্যাগ ওঠার জায়গা",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Can I call my ___, please?",
      "answers": ["company"],
      "show": "company",
      "why": "company = কোম্পানি",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [1, 3, 4],
  "dialogue": [
    {
      "boss": "Taxi? Come with me. I take you to your company.",
      "bn": "ট্যাক্সি? আমার সাথে আসুন। আপনাকে কোম্পানিতে নিয়ে যাব। (অচেনা লোক বলছে)",
      "choices": [
        { "stars": 3, "en": "No, thank you. My company driver is coming.", "reply": "Okay.", "replyBn": "ঠিক আছে।", "tip": "অচেনা লোকের সাথে যাবেন না। কোম্পানির লোকের জন্য অপেক্ষা করুন।" },
        { "stars": 2, "en": "Which company?", "reply": "Any company. Come, come.", "replyBn": "যেকোনো কোম্পানি। আসুন, আসুন।", "tip": "জিজ্ঞেস করা ভালো। কিন্তু উত্তর স্পষ্ট না হলে সাথে যাবেন না।" },
        { "stars": 1, "en": "Okay, let's go.", "reply": "This way.", "replyBn": "এদিকে।", "tip": "অচেনা লোকের সাথে যাওয়া ঝুঁকিপূর্ণ। আগে কোম্পানিকে ফোন করুন।" }
      ]
    },
    {
      "boss": "Can I help you? Are you waiting for someone?",
      "bn": "সাহায্য করতে পারি? কারও জন্য অপেক্ষা করছেন? (বিমানবন্দরের কর্মী)",
      "choices": [
        { "stars": 3, "en": "Yes. My company driver is not here. Can I call my company, please?", "reply": "Yes, please use this phone.", "replyBn": "হ্যাঁ, এই ফোন ব্যবহার করুন।", "tip": "কোম্পানির নম্বর আগেই কাগজে লিখে রাখুন। তাহলে সহজে ফোন করা যায়।" },
        { "stars": 2, "en": "Driver not come.", "reply": "Which company?", "replyBn": "কোন কোম্পানি?", "tip": "বোঝা গেছে, তবে পুরো বাক্যে বললে আরও দ্রুত সাহায্য মেলে।" },
        { "stars": 1, "en": "No, thank you.", "reply": "Okay.", "replyBn": "ঠিক আছে।", "tip": "সাহায্য দরকার হলে না বলবেন না। বিমানবন্দরের কর্মীকে জিজ্ঞেস করা নিরাপদ।" }
      ]
    },
    {
      "boss": "Give me your passport. We need it for the residence permit.",
      "bn": "আপনার পাসপোর্ট দিন। বসবাসের অনুমতির জন্য লাগবে। (ক্যাম্প সুপারভাইজার)",
      "choices": [
        { "stars": 3, "en": "Okay. When will I get it back? Can I keep a copy?", "reply": "In one week. Yes, take a copy.", "replyBn": "এক সপ্তাহে। হ্যাঁ, কপি রাখুন।", "tip": "ফেরতের সময় জিজ্ঞেস করুন আর কপি রাখুন। সমস্যা হলে বাংলাদেশ দূতাবাসকে জানান।" },
        { "stars": 2, "en": "When will I get it back?", "reply": "Next week.", "replyBn": "আগামী সপ্তাহ।", "tip": "ভালো প্রশ্ন। সাথে কপি রাখতেও চান।" },
        { "stars": 1, "en": "No, I will not give.", "reply": "Then we cannot make your permit.", "replyBn": "তাহলে অনুমতি করা যাবে না।", "tip": "রাগ না করে জিজ্ঞেস করুন কেন লাগবে, কবে ফেরত পাবেন।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "অচেনা লোক \"ট্যাক্সি, চলুন\" বললে সাথে যাওয়া কি নিরাপদ?",
      "a": false,
      "why": "না। বলুন: \"No, thank you. My company driver is coming.\""
    },
    {
      "q": "কেউ নিতে না এলে চুপ করে অপেক্ষা করা কি ভালো?",
      "a": false,
      "why": "না। বলুন: \"Can I call my company, please?\""
    },
    {
      "q": "\"baggage claim\" মানে কি ব্যাগ ওঠার জায়গা?",
      "a": true,
      "why": "ঠিক। নামার পর আগে এখানে যান।"
    },
    {
      "q": "পাসপোর্ট দিলে কবে ফেরত পাবেন জিজ্ঞেস করা কি ভালো?",
      "a": true,
      "why": "ঠিক। জিজ্ঞেস করুন: \"When will I get it back?\""
    },
    {
      "q": "কোম্পানি আর দূতাবাসের ফোন নম্বর আগেই লিখে রাখা কি ভালো?",
      "a": true,
      "why": "ঠিক। বিপদে ঘাবড়ে নম্বর খুঁজতে হবে না।"
    }
  ]
};
