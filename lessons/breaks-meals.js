window.LESSON = {
  "id": "breaks-meals",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    2,
    3,
    5
  ],
  "who": "সুপারভাইজার",
  "title": "Breaks, Meals & Prayer Time",
  "titleBn": "বিরতি, খাবার ও নামাজের সময়",
  "next": {
    "title": "Salary & Payday",
    "id": "salary-payday"
  },
  "scene": "বিরতি, খাবার আর নামাজের জন্য ভদ্রভাবে অনুমতি চাইলে বেশিরভাগ সুপারভাইজার সাহায্য করেন।",
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "What time is the lunch break?",
      "bn": "দুপুরের খাওয়ার বিরতি কখন?",
      "pr": "হোয়াট টাইম ইজ দ্য লাঞ্চ ব্রেক?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "How long is the break?",
      "bn": "বিরতি কতক্ষণের?",
      "pr": "হাউ লং ইজ দ্য ব্রেক?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I drink water, please?",
      "bn": "আমি কি একটু পানি খেতে পারি, দয়া করে?",
      "pr": "ক্যান আই ড্রিংক ওয়াটার, প্লিজ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Where can I pray?",
      "bn": "আমি কোথায় নামাজ পড়তে পারি?",
      "pr": "হোয়ার ক্যান আই প্রে?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I go for Friday prayer?",
      "bn": "আমি কি জুমার নামাজে যেতে পারি?",
      "pr": "ক্যান আই গো ফর ফ্রাইডে প্রেয়ার?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Is this food halal?",
      "bn": "এই খাবার কি হালাল?",
      "pr": "ইজ দিস ফুড হালাল?"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Lunch is at twelve. Come back at one.",
      "bn": "দুপুরের খাওয়া বারোটায়। একটায় ফিরে এসো।",
      "pr": "লাঞ্চ ইজ অ্যাট টুয়েলভ। কাম ব্যাক অ্যাট ওয়ান।"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "You have thirty minutes for your break.",
      "bn": "বিরতির জন্য তোমার ত্রিশ মিনিট আছে।",
      "pr": "ইউ হ্যাভ থার্টি মিনিটস ফর ইওর ব্রেক।"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "You can pray in that room.",
      "bn": "তুমি ওই ঘরে নামাজ পড়তে পারো।",
      "pr": "ইউ ক্যান প্রে ইন দ্যাট রুম।"
    }
  ],
  "listening": [
    {
      "say": "Lunch is at twelve. Come back at one.",
      "options": [
        {
          "t": "দুপুরের খাওয়া একটায়। বারোটায় ফিরে এসো।",
          "ok": false
        },
        {
          "t": "দুপুরের খাওয়া বারোটায়। একটায় ফিরে এসো।",
          "ok": true
        },
        {
          "t": "আজ দুপুরে কাজ নেই।",
          "ok": false
        }
      ],
      "why": "twelve মানে বারো, one মানে এক। come back মানে ফিরে এসো। অর্থাৎ বারোটায় খাওয়া, একটায় ফেরা।"
    },
    {
      "say": "You have thirty minutes for your break.",
      "options": [
        {
          "t": "তোমার বিরতি তিন ঘণ্টার",
          "ok": false
        },
        {
          "t": "তোমার বিরতি বাতিল",
          "ok": false
        },
        {
          "t": "বিরতির জন্য তোমার ত্রিশ মিনিট আছে",
          "ok": true
        }
      ],
      "why": "thirty minutes মানে ত্রিশ মিনিট। break মানে বিরতি। সময়টা মনে রাখুন, নইলে দেরি হবে।"
    },
    {
      "say": "You can pray in that room.",
      "options": [
        {
          "t": "তুমি ওই ঘরে নামাজ পড়তে পারো",
          "ok": true
        },
        {
          "t": "ওই ঘরে ঢোকা নিষেধ",
          "ok": false
        },
        {
          "t": "ওই ঘরে খাবার আছে",
          "ok": false
        }
      ],
      "why": "pray মানে প্রার্থনা বা নামাজ পড়া। that room মানে ওই ঘর। You can মানে তুমি পারো।"
    }
  ],
  "speak": [
    0,
    3,
    4
  ],
  "dialogue": [
    {
      "boss": "Lunch break is at twelve. You have thirty minutes.",
      "bn": "দুপুরের বিরতি বারোটায়। তোমার ত্রিশ মিনিট আছে।",
      "choices": [
        {
          "stars": 3,
          "en": "Thank you, sir. Twelve o'clock, thirty minutes. I will be back on time.",
          "reply": "Good. Enjoy your lunch.",
          "replyBn": "ভালো। খাওয়া উপভোগ করো।",
          "tip": "দারুণ! সময় আর কতক্ষণ, দুটোই বলে নিশ্চিত করেছেন। এতে ভুল হয় না।"
        },
        {
          "stars": 2,
          "en": "Okay.",
          "reply": "Please come back on time.",
          "replyBn": "সময়মতো ফিরে এসো।",
          "tip": "শুধু \"Okay\" বললে বোঝা যায় না আপনি সময় বুঝেছেন কি না। সময়টা বলে নিশ্চিত করুন: \"Twelve o'clock, thirty minutes.\""
        },
        {
          "stars": 1,
          "en": "Thirty minutes is too short.",
          "reply": "That is the rule here. Please follow it.",
          "replyBn": "এখানকার নিয়ম এটাই। মেনে চলো।",
          "tip": "বিরতির নিয়ম নিয়ে সরাসরি আপত্তি না করে বুঝে নিন। কিছু জানতে চাইলে বলুন: \"Sir, how long is the break?\""
        }
      ]
    },
    {
      "boss": "I see you stopped work. What do you need?",
      "bn": "দেখছি তুমি কাজ থামিয়েছ। তোমার কী দরকার?",
      "choices": [
        {
          "stars": 3,
          "en": "Sir, it is prayer time. Can I pray for ten minutes, please? Where can I pray?",
          "reply": "Yes. You can pray in that room. Come back quickly.",
          "replyBn": "ঠিক আছে। ওই ঘরে পড়তে পারো। তাড়াতাড়ি ফিরে এসো।",
          "tip": "চমৎকার! কারণ, কতক্ষণ লাগবে, আর কোথায় পড়বেন, সব ভদ্রভাবে বলেছেন।"
        },
        {
          "stars": 2,
          "en": "Prayer.",
          "reply": "Prayer now? How long?",
          "replyBn": "এখন নামাজ? কতক্ষণ?",
          "tip": "একটা শব্দ যথেষ্ট নয়। পুরো বাক্যে বলুন: \"Can I pray for ten minutes, please?\""
        },
        {
          "stars": 1,
          "en": "I go to pray now. Don't stop me.",
          "reply": "Please talk politely. We can discuss it.",
          "replyBn": "ভদ্রভাবে কথা বলো। আমরা আলোচনা করতে পারি।",
          "tip": "অনুমতি না চেয়ে হুকুমের সুরে বললে সুপারভাইজার বিরক্ত হন। অনুমতি চান: \"Sir, can I pray, please?\""
        }
      ]
    },
    {
      "boss": "Tomorrow is Friday. Do you need anything?",
      "bn": "কাল শুক্রবার। তোমার কি কিছু লাগবে?",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. Can I go for Friday prayer? I will come back after one hour.",
          "reply": "Okay. Please finish your work first.",
          "replyBn": "ঠিক আছে। আগে কাজ শেষ করো।",
          "tip": "ঠিক! আগে থেকে জানিয়ে রাখলে আর কতক্ষণ লাগবে বললে অনুমতি পাওয়া সহজ হয়।"
        },
        {
          "stars": 2,
          "en": "Friday prayer.",
          "reply": "What time? How long?",
          "replyBn": "কটায়? কতক্ষণ?",
          "tip": "শুধু \"Friday prayer\" বললে বোঝা যায় না আপনি কী চাইছেন। বলুন: \"Can I go for Friday prayer, please?\""
        },
        {
          "stars": 1,
          "en": "I will go. I don't care.",
          "reply": "You must ask first. This is important.",
          "replyBn": "আগে জিজ্ঞেস করতে হবে। এটা জরুরি।",
          "tip": "না জানিয়ে চলে গেলে সমস্যা হতে পারে। আগে ভদ্রভাবে জিজ্ঞেস করুন।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "বিরতির সময় আর কতক্ষণ, তা না বুঝেই \"Okay\" বলা কি ভালো?",
      "a": false,
      "why": "না। সময় না বুঝলে দেরি হতে পারে। সময়টা বলে নিশ্চিত করুন: \"Twelve o'clock, thirty minutes.\""
    },
    {
      "q": "নামাজের আগে \"Can I pray, please?\" বলে অনুমতি চাওয়া কি ভালো?",
      "a": true,
      "why": "ঠিক। ভদ্রভাবে অনুমতি চাইলে সুপারভাইজার সাধারণত সাহায্য করেন।"
    },
    {
      "q": "\"Thirty minutes\" মানে কি ত্রিশ মিনিট?",
      "a": true,
      "why": "ঠিক। thirty মানে ত্রিশ, minutes মানে মিনিট।"
    },
    {
      "q": "\"Is this food halal?\" মানে কি \"এই খাবার কি হালাল?\"",
      "a": true,
      "why": "ঠিক। খাবারের আগে এই প্রশ্ন করলে ভুল খাবার এড়ানো যায়।"
    }
  ],
  "hook": {
    "en": "Where can I pray?",
    "bn": "আমি কোথায় নামাজ পড়তে পারি?"
  },
  "traps": [
    {
      "title": "শূকরের মাংসের নাম",
      "intro": "খাবারে সন্দেহ হলে এই শব্দগুলো চিনে রাখুন।",
      "items": [
        {
          "en": "pork",
          "note": "শূকরের মাংস",
          "say": "pork"
        },
        {
          "en": "bacon",
          "note": "সাধারণত শূকরের মাংস",
          "say": "bacon"
        },
        {
          "en": "ham",
          "note": "সাধারণত শূকরের মাংস",
          "say": "ham"
        }
      ],
      "tip": "সন্দেহ হলে জিজ্ঞেস করুন: \"Does it have pork?\""
    },
    {
      "title": "at one আর for one hour",
      "intro": "সময়ের দুই রকম মানে।",
      "items": [
        {
          "en": "Come back at one.",
          "note": "১টায় ফিরুন",
          "say": "Come back at one."
        },
        {
          "en": "A break for one hour.",
          "note": "১ ঘণ্টার বিরতি",
          "say": "A break for one hour."
        }
      ],
      "tip": "at = কখন। for = কতক্ষণ।"
    }
  ],
  "typing": [
    {
      "ask": "কত মিনিট বিরতি? সংখ্যা লিখুন",
      "say": "You have thirty minutes for your break.",
      "num": true,
      "answers": [
        "30"
      ],
      "show": "30",
      "why": "thirty = ৩০",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Where can I ___?",
      "answers": [
        "pray"
      ],
      "show": "pray",
      "why": "pray = নামাজ পড়া/প্রার্থনা",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Is this food ___?",
      "answers": [
        "halal"
      ],
      "show": "halal",
      "why": "halal = হালাল",
      "ph": "ইংরেজি শব্দ"
    }
  ]
};
