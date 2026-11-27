window.LESSON = {
  "id": "site-instructions",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    2,
    3,
    4
  ],
  "who": "সুপারভাইজার",
  "title": "Understanding Instructions on Site",
  "titleBn": "কাজের জায়গায় নির্দেশ বোঝা",
  "next": {
    "title": "Asking for Tools & Materials",
    "id": "tools-materials"
  },
  "scene": "প্রথম দিনে সুপারভাইজার দ্রুত নির্দেশ দেন। না বুঝলে কী বলবেন, আজ সেটাই শিখবেন।",
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "Please repeat that, sir.",
      "bn": "স্যার, দয়া করে আবার বলুন।",
      "pr": "প্লিজ রিপিট দ্যাট, স্যার।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I don't understand. Please show me.",
      "bn": "আমি বুঝতে পারিনি। দয়া করে দেখিয়ে দিন।",
      "pr": "আই ডোন্ট আন্ডারস্ট্যান্ড। প্লিজ শো মি।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can you speak slowly, please?",
      "bn": "আপনি কি আস্তে বলতে পারবেন, দয়া করে?",
      "pr": "ক্যান ইউ স্পিক স্লোলি, প্লিজ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Yes, sir. I understand.",
      "bn": "জি স্যার। আমি বুঝেছি।",
      "pr": "ইয়েস, স্যার। আই আন্ডারস্ট্যান্ড।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Where should I put this?",
      "bn": "এটা কোথায় রাখব?",
      "pr": "হোয়ার শুড আই পুট দিস?"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Wear your helmet and safety shoes.",
      "bn": "হেলমেট আর সেফটি জুতা পরুন।",
      "pr": "ওয়্যার ইওর হেলমেট অ্যান্ড সেফটি শুজ।"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Be careful. The floor is wet.",
      "bn": "সাবধান। মেঝে ভেজা।",
      "pr": "বি কেয়ারফুল। দ্য ফ্লোর ইজ ওয়েট।"
    }
  ],
  "listening": [
    {
      "say": "Wear your helmet and safety shoes.",
      "options": [
        {
          "t": "হেলমেট আর সেফটি জুতা পরুন",
          "ok": true
        },
        {
          "t": "বাড়ি চলে যান",
          "ok": false
        },
        {
          "t": "কাজ বন্ধ করুন",
          "ok": false
        }
      ],
      "why": "helmet মানে হেলমেট, safety shoes মানে নিরাপত্তার জুতা।"
    },
    {
      "say": "Be careful. The floor is wet.",
      "options": [
        {
          "t": "এখানে বসুন",
          "ok": false
        },
        {
          "t": "মেঝে পরিষ্কার করুন",
          "ok": false
        },
        {
          "t": "সাবধান, মেঝে ভেজা",
          "ok": true
        }
      ],
      "why": "careful মানে সাবধান, wet মানে ভেজা।"
    }
  ],
  "speak": [
    0,
    1,
    3
  ],
  "dialogue": [
    {
      "boss": "Bring these boxes to the store room.",
      "bn": "এই বাক্সগুলো স্টোর রুমে নিয়ে যাও।",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. Where is the store room?",
          "reply": "It's behind that building. Follow me.",
          "replyBn": "ওই ভবনের পেছনে। আমার সাথে এসো।",
          "tip": "দারুণ! বুঝেছেন জানিয়েছেন, আর যা জানেন না তা জিজ্ঞেস করেছেন।"
        },
        {
          "stars": 2,
          "en": "Okay.",
          "reply": "Do you know where it is?",
          "replyBn": "তুমি কি জানো ওটা কোথায়?",
          "tip": "শুধু \"Okay\" বললে সুপারভাইজার বোঝেন না আপনি আসলে বুঝেছেন কি না। জানা না থাকলে জিজ্ঞেস করুন: \"Where is the store room?\""
        },
        {
          "stars": 1,
          "en": "Yes, yes. No problem.",
          "reply": "Good. Then go.",
          "replyBn": "ভালো। তাহলে যাও।",
          "tip": "না বুঝে বা না জেনে \"Yes\" বলা ঠিক নয়, পরে ভুল হলে সমস্যা বাড়ে। বলুন: \"Please show me.\""
        }
      ]
    },
    {
      "boss": "Wear your helmet and safety shoes before you enter.",
      "bn": "ভেতরে ঢোকার আগে হেলমেট আর সেফটি জুতা পরো।",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. I understand.",
          "reply": "Good. Safety first.",
          "replyBn": "ভালো। আগে নিরাপত্তা।",
          "tip": "ঠিক। নিরাপত্তার নির্দেশ বুঝলে পরিষ্কার জানিয়ে দিন।"
        },
        {
          "stars": 2,
          "en": "Okay, okay.",
          "reply": "Please say \"Yes, sir.\" so I know you understood.",
          "replyBn": "\"Yes, sir\" বলো, যাতে আমি বুঝি তুমি বুঝেছ।",
          "tip": "সুপারভাইজার জানতে চান আপনি বুঝেছেন কি না। বলুন: \"Yes, sir. I understand.\""
        },
        {
          "stars": 1,
          "en": "Why?",
          "reply": "Because it's the rule. Safety first.",
          "replyBn": "কারণ এটা নিয়ম। আগে নিরাপত্তা।",
          "tip": "শুধু \"Why?\" বললে রূঢ় শোনায়। আগে বলুন: \"Yes, sir. I understand.\""
        }
      ]
    },
    {
      "boss": "Be careful. The floor is wet. Clean this area first.",
      "bn": "সাবধান। মেঝে ভেজা। আগে এই জায়গাটা পরিষ্কার করো।",
      "choices": [
        {
          "stars": 3,
          "en": "Sorry, sir. Please say that again slowly.",
          "reply": "Clean this area first. Use the mop.",
          "replyBn": "আগে এই জায়গাটা পরিষ্কার করো। মপ ব্যবহার করো।",
          "tip": "চমৎকার! না বুঝলে ভদ্রভাবে আস্তে আবার বলতে বলাই সবচেয়ে ভালো।"
        },
        {
          "stars": 2,
          "en": "What?",
          "reply": "Clean this area. Be careful.",
          "replyBn": "এই জায়গা পরিষ্কার করো। সাবধান।",
          "tip": "শুধু \"What?\" বললে রূঢ় শোনায়। বলুন: \"Please repeat that, sir.\""
        },
        {
          "stars": 1,
          "en": "Yes, sir.",
          "reply": "Okay, go.",
          "replyBn": "ঠিক আছে, যাও।",
          "tip": "না বুঝে \"Yes\" বললে ভুল কাজ হতে পারে, বিশেষ করে ভেজা মেঝেতে। না বুঝলে আবার বলতে বলুন।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "সুপারভাইজারের নির্দেশ না বুঝলে চুপ করে \"Yes\" বলে দেওয়া কি ভালো?",
      "a": false,
      "why": "না বুঝে কাজ করলে ভুল হয়, নিরাপত্তার ক্ষেত্রে ঝুঁকিও হয়। বলুন: \"Please repeat that, sir.\""
    },
    {
      "q": "\"Can you speak slowly, please?\" বলে আস্তে বলতে বলা কি ঠিক?",
      "a": true,
      "why": "ঠিক। ভদ্রভাবে আস্তে বলতে বলা সম্পূর্ণ স্বাভাবিক, এতে কেউ রাগ করে না।"
    },
    {
      "q": "\"Be careful. The floor is wet.\" এর মানে কি \"মেঝে শুকনো\"?",
      "a": false,
      "why": "wet মানে ভেজা। এই বাক্য শুনলে পিছলে পড়ার ঝুঁকি আছে, সাবধানে চলুন।"
    }
  ],
  "hook": {
    "en": "Please repeat that, sir.",
    "bn": "স্যার, আবার বলবেন?"
  },
  "traps": [
    {
      "title": "Wear আর Where",
      "intro": "দ্রুত বললে প্রায় এক শোনায়।",
      "items": [
        {
          "en": "Wear your helmet.",
          "note": "হেলমেট পরুন",
          "say": "Wear your helmet."
        },
        {
          "en": "Where is your helmet?",
          "note": "আপনার হেলমেট কোথায়?",
          "say": "Where is your helmet?"
        }
      ],
      "tip": "wear = পরুন। where = কোথায়।"
    },
    {
      "title": "before আর after",
      "intro": "নির্দেশের ক্রম বোঝায়।",
      "items": [
        {
          "en": "before you enter",
          "note": "ঢোকার আগে",
          "say": "before you enter"
        },
        {
          "en": "after you finish",
          "note": "শেষ করার পরে",
          "say": "after you finish"
        }
      ],
      "tip": "before = আগে। after = পরে।"
    },
    {
      "title": "here আর there",
      "intro": "জায়গার নির্দেশ।",
      "items": [
        {
          "en": "Put it here.",
          "note": "এখানে রাখুন",
          "say": "Put it here."
        },
        {
          "en": "Put it there.",
          "note": "ওখানে রাখুন",
          "say": "Put it there."
        }
      ],
      "tip": "here = কাছে। there = দূরে। সন্দেহ হলে দেখিয়ে দিতে বলুন।"
    }
  ],
  "typing": [
    {
      "ask": "কী পরতে বলছে? ইংরেজি শব্দ লিখুন",
      "say": "Wear your helmet.",
      "num": false,
      "answers": [
        "helmet"
      ],
      "show": "helmet",
      "why": "helmet = হেলমেট",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "___ you enter, wear your helmet.",
      "answers": [
        "before"
      ],
      "show": "before",
      "why": "before = আগে",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "আবার বলতে বলছেন। ফাঁকা ঘরে কী বসবে?",
      "en": "Please ___ that, sir.",
      "answers": [
        "repeat"
      ],
      "show": "repeat",
      "why": "repeat = আবার বলা",
      "ph": "ইংরেজি শব্দ"
    }
  ]
};
