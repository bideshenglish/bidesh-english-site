window.LESSON = {
  "id": "shift-overtime",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    2,
    7,
    8
  ],
  "who": "সুপারভাইজার",
  "title": "Shift, Attendance & Overtime Hours",
  "titleBn": "শিফট, হাজিরা ও ওভারটাইম",
  "next": {
    "title": "Breaks, Meals & Prayer Time",
    "id": "breaks-meals"
  },
  "scene": "শিফট, ছুটি আর বাড়তি কাজ না বুঝলে ভুল বোঝাবুঝি হয়। আজ ভদ্রভাবে জানতে শিখবেন।",
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "What time does my shift start?",
      "bn": "আমার শিফট কখন শুরু?",
      "pr": "হোয়াট টাইম ডাজ মাই শিফট স্টার্ট?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "What time do I finish today?",
      "bn": "আজ আমি কখন কাজ শেষ করব?",
      "pr": "হোয়াট টাইম ডু আই ফিনিশ টুডে?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Which day is my day off?",
      "bn": "আমার সাপ্তাহিক ছুটি কোন দিন?",
      "pr": "হুইচ ডে ইজ মাই ডে অফ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I am sorry. I will be late.",
      "bn": "দুঃখিত। আমার দেরি হবে।",
      "pr": "আই অ্যাম সরি। আই উইল বি লেট।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Is this overtime? Will it be paid?",
      "bn": "এটা কি ওভারটাইম? এর টাকা কি দেওয়া হবে?",
      "pr": "ইজ দিস ওভারটাইম? উইল ইট বি পেইড?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I take a day off, please?",
      "bn": "আমি কি একদিন ছুটি নিতে পারি, দয়া করে?",
      "pr": "ক্যান আই টেক আ ডে অফ, প্লিজ?"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Your shift starts at seven. Don't be late.",
      "bn": "তোমার শিফট সাতটায় শুরু। দেরি করো না।",
      "pr": "ইওর শিফট স্টার্টস অ্যাট সেভেন। ডোন্ট বি লেট।"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Today you work two extra hours.",
      "bn": "আজ তুমি দুই ঘণ্টা বেশি কাজ করবে।",
      "pr": "টুডে ইউ ওয়ার্ক টু এক্সট্রা আওয়ার্স।"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Tomorrow is your day off.",
      "bn": "কাল তোমার সাপ্তাহিক ছুটি।",
      "pr": "টুমরো ইজ ইওর ডে অফ।"
    }
  ],
  "listening": [
    {
      "say": "Your shift starts at seven. Don't be late.",
      "options": [
        {
          "t": "তোমার শিফট সাতটায় শেষ। বাড়ি যাও।",
          "ok": false
        },
        {
          "t": "তোমার শিফট সাতটায় শুরু। দেরি করো না।",
          "ok": true
        },
        {
          "t": "আজ তোমার ছুটি।",
          "ok": false
        }
      ],
      "why": "starts মানে শুরু হয়, late মানে দেরি। seven মানে সাত।"
    },
    {
      "say": "Today you work two extra hours.",
      "options": [
        {
          "t": "আজ তুমি দুই ঘণ্টা আগে ছুটি পাবে",
          "ok": false
        },
        {
          "t": "আজ তোমার কাজ নেই",
          "ok": false
        },
        {
          "t": "আজ তুমি দুই ঘণ্টা বেশি কাজ করবে",
          "ok": true
        }
      ],
      "why": "extra মানে বাড়তি, hours মানে ঘণ্টা। বাড়তি সময়ের কাজকেই ওভারটাইম বলে।"
    },
    {
      "say": "Tomorrow is your day off.",
      "options": [
        {
          "t": "কাল তোমার সাপ্তাহিক ছুটি",
          "ok": true
        },
        {
          "t": "কাল তোমাকে দেরিতে আসতে হবে",
          "ok": false
        },
        {
          "t": "কাল তোমার বেতন দেওয়া হবে",
          "ok": false
        }
      ],
      "why": "day off মানে কাজ থেকে ছুটির দিন। tomorrow মানে কাল।"
    }
  ],
  "speak": [
    0,
    3,
    4
  ],
  "dialogue": [
    {
      "boss": "Your shift starts at seven tomorrow. Don't be late.",
      "bn": "কাল তোমার শিফট সাতটায় শুরু। দেরি করো না।",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. Seven o'clock. I will be on time.",
          "reply": "Good. See you tomorrow.",
          "replyBn": "ভালো। কাল দেখা হবে।",
          "tip": "দারুণ! সময়টা নিজে মুখে বলে নিশ্চিত করেছেন। এতে ভুল বোঝাবুঝি হয় না।"
        },
        {
          "stars": 2,
          "en": "Okay.",
          "reply": "What time? Please say the time.",
          "replyBn": "কটায়? সময়টা বলো।",
          "tip": "শুধু \"Okay\" বললে বোঝা যায় না আপনি সময় বুঝেছেন কি না। সময়টা বলে নিশ্চিত করুন: \"Yes, sir. Seven o'clock.\""
        },
        {
          "stars": 1,
          "en": "Why so early?",
          "reply": "That is your shift. Please be on time.",
          "replyBn": "এটাই তোমার শিফট। সময়মতো এসো।",
          "tip": "শিফটের সময় নিয়ে প্রশ্ন না করে আগে বুঝে নিন। জানতে চাইলে বলুন: \"What time do I finish, sir?\""
        }
      ]
    },
    {
      "boss": "You were late today. What happened?",
      "bn": "আজ তুমি দেরি করেছ। কী হয়েছে?",
      "choices": [
        {
          "stars": 3,
          "en": "I am sorry, sir. The bus was late. I will come early tomorrow.",
          "reply": "Okay. Please call me next time.",
          "replyBn": "ঠিক আছে। পরের বার আমাকে ফোন করো।",
          "tip": "চমৎকার! দুঃখ প্রকাশ, কারণ আর সমাধান, তিনটিই বলেছেন।"
        },
        {
          "stars": 2,
          "en": "Sorry.",
          "reply": "Why were you late?",
          "replyBn": "দেরি করলে কেন?",
          "tip": "শুধু \"Sorry\" যথেষ্ট নয়। কারণ আর আগামীতে কী করবেন তাও বলুন।"
        },
        {
          "stars": 1,
          "en": "It is not my fault.",
          "reply": "You must come on time. This is important.",
          "replyBn": "সময়মতো আসতে হবে। এটা জরুরি।",
          "tip": "দোষ অন্যের ঘাড়ে না চাপিয়ে ভদ্রভাবে বলুন: \"I am sorry, sir. I will be on time.\""
        }
      ]
    },
    {
      "boss": "Please work two extra hours today. We have a lot of work.",
      "bn": "আজ দুই ঘণ্টা বেশি কাজ করো। অনেক কাজ আছে।",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. Is this overtime? Will it be paid?",
          "reply": "Good question. Please ask the office to confirm.",
          "replyBn": "ভালো প্রশ্ন। অফিসে জিজ্ঞেস করে নিশ্চিত হও।",
          "tip": "ঠিক! ভদ্রভাবে ওভারটাইমের নিয়ম জেনে নেওয়া সম্পূর্ণ স্বাভাবিক।"
        },
        {
          "stars": 2,
          "en": "Okay.",
          "reply": "Okay. Thank you.",
          "replyBn": "ঠিক আছে। ধন্যবাদ।",
          "tip": "না জেনে বাড়তি কাজ করলে পরে সমস্যা হতে পারে। ভদ্রভাবে জিজ্ঞেস করুন: \"Is this overtime?\""
        },
        {
          "stars": 1,
          "en": "No. I am tired. I don't work.",
          "reply": "Please talk to me politely.",
          "replyBn": "ভদ্রভাবে কথা বলো।",
          "tip": "ক্লান্ত হলে রূঢ়ভাবে না বলে ভদ্রভাবে জানান: \"Sorry, sir. I am very tired. Can I go home today?\""
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "শিফট কখন শুরু তা না বুঝেই \"Okay\" বলে দেওয়া কি ভালো?",
      "a": false,
      "why": "না। সময় না বুঝলে ভুল হবে। সময়টা মুখে বলে নিশ্চিত করুন: \"Yes, sir. Seven o'clock.\""
    },
    {
      "q": "দেরি হলে শুধু \"Sorry\" না বলে কারণও জানানো কি ভালো?",
      "a": true,
      "why": "ঠিক। কারণ আর আগামীতে কী করবেন তা বললে সুপারভাইজার সহজে বোঝেন।"
    },
    {
      "q": "\"Overtime\" মানে কি নির্ধারিত সময়ের বাইরে বাড়তি কাজের সময়?",
      "a": true,
      "why": "ঠিক। ওভারটাইম হলো বাড়তি সময়ের কাজ। জিজ্ঞেস করুন: \"Is this overtime? Will it be paid?\""
    },
    {
      "q": "\"I will be late.\" মানে কি \"আমি আগে আসব\"?",
      "a": false,
      "why": "না। late মানে দেরি। অর্থাৎ \"আমার দেরি হবে\"।"
    }
  ],
  "hook": {
    "en": "What time does my shift start?",
    "bn": "আমার শিফট কখন শুরু?"
  },
  "traps": [
    {
      "title": "সকাল নাকি সন্ধ্যা",
      "intro": "শুধু \"seven\" শুনলে বোঝা যায় না কোন সাতটা।",
      "items": [
        {
          "en": "seven in the morning",
          "note": "সকাল ৭টা",
          "say": "seven in the morning"
        },
        {
          "en": "seven in the evening",
          "note": "সন্ধ্যা ৭টা",
          "say": "seven in the evening"
        }
      ],
      "tip": "সন্দেহ হলে জিজ্ঞেস করুন: \"Morning or evening?\""
    },
    {
      "title": "day off আর leave",
      "intro": "দুটোই ছুটি, কিন্তু আলাদা।",
      "items": [
        {
          "en": "day off",
          "note": "সাপ্তাহিক ছুটির দিন",
          "say": "day off"
        },
        {
          "en": "sick leave",
          "note": "অসুস্থতার ছুটি",
          "say": "sick leave"
        }
      ],
      "tip": "day off নিয়মিত ছুটি। leave আবেদন করে নিতে হয়।"
    },
    {
      "title": "late আর later",
      "intro": "একটা অক্ষরের তফাত।",
      "items": [
        {
          "en": "I will be late.",
          "note": "আমার দেরি হবে",
          "say": "I will be late."
        },
        {
          "en": "I will come later.",
          "note": "আমি পরে আসব",
          "say": "I will come later."
        }
      ],
      "tip": "late = দেরি। later = পরে।"
    }
  ],
  "typing": [
    {
      "ask": "শিফট কখন শুরু? সংখ্যা লিখুন",
      "say": "Your shift starts at seven.",
      "num": true,
      "answers": [
        "7"
      ],
      "show": "7",
      "why": "seven = ৭",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Today you work two ___ hours.",
      "answers": [
        "extra"
      ],
      "show": "extra",
      "why": "extra = বাড়তি",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Which day is my day ___?",
      "answers": [
        "off"
      ],
      "show": "off",
      "why": "day off = ছুটির দিন",
      "ph": "ইংরেজি শব্দ"
    }
  ]
};
