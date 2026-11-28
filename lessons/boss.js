window.LESSON = {
  "id": "boss",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    2,
    3,
    4,
    5,
    6
  ],
  "title": "Talking to Your Boss",
  "titleBn": "বসের সাথে কথা বলা",
  "next": {
    "title": "Asking Coworkers for Help & Sharing Tasks",
    "id": "coworkers-help"
  },
  "scene": "ভুল হলে বস আপনাকে ডাকেন। তখন কী বলবেন, আজ সেটাই শিখবেন।",
  "phrases": [
    {
      "en": "Good morning, sir. You wanted to see me?",
      "bn": "সুপ্রভাত, স্যার। আপনি আমাকে দেখতে চেয়েছিলেন?",
      "pr": "গুড মর্নিং, স্যার। ইউ ওয়ান্টেড টু সি মি?"
    },
    {
      "en": "I finished the task you gave me yesterday.",
      "bn": "গতকাল আপনি যে কাজ দিয়েছিলেন তা আমি শেষ করেছি।",
      "pr": "আই ফিনিশ্ট দ্য টাস্ক ইউ গেইভ মি ইয়েস্টারডে।"
    },
    {
      "en": "I'm sorry, I'll fix that right away.",
      "bn": "দুঃখিত, আমি এখনই এটা ঠিক করে দিচ্ছি।",
      "pr": "আয়াম সরি, আয়িল ফিক্স দ্যাট রাইট অ্যাওয়ে।"
    },
    {
      "en": "Thank you for letting me know.",
      "bn": "আমাকে জানানোর জন্য ধন্যবাদ।",
      "pr": "থ্যাংক ইউ ফর লেটিং মি নো।"
    },
    {
      "en": "I'll do better next time.",
      "bn": "পরের বার আমি আরও ভালো করব।",
      "pr": "আয়িল ডু বেটার নেক্সট টাইম।"
    },
    {
      "en": "I'll send it by 3 o'clock.",
      "bn": "আমি তিনটার মধ্যে পাঠিয়ে দেব।",
      "pr": "আয়িল সেন্ড ইট বাই থ্রি ও'ক্লক।"
    },
    {
      "en": "Could I have more time, please?",
      "bn": "আমি কি আরও একটু সময় পেতে পারি?",
      "pr": "কুড আই হ্যাভ মোর টাইম, প্লিজ?"
    }
  ],
  "listening": [
    {
      "say": "I'll do better next time.",
      "options": [
        {
          "t": "আমি পরের বার আরও ভালো করব",
          "ok": true
        },
        {
          "t": "আমি আজকে আসিনি",
          "ok": false
        },
        {
          "t": "আমার আরও সময় লাগবে",
          "ok": false
        }
      ],
      "why": "better মানে আরও ভালো, আর next time মানে পরের বার।"
    },
    {
      "say": "Thank you for letting me know.",
      "options": [
        {
          "t": "আমি আপনাকে জানাব না",
          "ok": false
        },
        {
          "t": "আমাকে জানানোর জন্য ধন্যবাদ",
          "ok": true
        },
        {
          "t": "আমি এটা জানতাম না",
          "ok": false
        }
      ],
      "why": "letting me know মানে আমাকে জানানো।"
    }
  ],
  "speak": [
    0,
    2,
    4
  ],
  "dialogue": [
    {
      "boss": "There was a small mistake in yesterday's report.",
      "bn": "গতকালের রিপোর্টে একটা ছোট ভুল ছিল।",
      "choices": [
        {
          "stars": 3,
          "en": "I'm very sorry, I'll fix it right now.",
          "reply": "Good, thank you for taking responsibility.",
          "replyBn": "ভালো, দায়িত্ব নেওয়ার জন্য ধন্যবাদ।",
          "tip": "চমৎকার! ভুল স্বীকার করে সমাধানের কথা বলেছেন।"
        },
        {
          "stars": 2,
          "en": "Oh... okay.",
          "reply": "Please make sure to fix it today.",
          "replyBn": "আজই ঠিক করে দেবেন, দয়া করে।",
          "tip": "আরেকটু দায়িত্ব নিয়ে বললে আরও ভালো হতো। যেমন: \"I'll fix it right now.\""
        },
        {
          "stars": 1,
          "en": "It wasn't my fault.",
          "reply": "Let's talk about this later.",
          "replyBn": "এ নিয়ে পরে কথা বলব।",
          "tip": "ভুল হলে আগে স্বীকার করাই ভালো, এতে বস বেশি আস্থা রাখেন।"
        }
      ]
    },
    {
      "boss": "Can you send me the corrected version by 3 o'clock?",
      "bn": "আপনি কি ৩টার মধ্যে ঠিক করা সংস্করণটা পাঠাতে পারবেন?",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. I'll send it by 3 o'clock.",
          "reply": "Perfect. Thank you.",
          "replyBn": "দারুণ। ধন্যবাদ।",
          "tip": "পরিষ্কার সময় জানিয়ে উত্তর দিয়েছেন, বস ঠিক এটাই চান।"
        },
        {
          "stars": 2,
          "en": "Maybe. I will try.",
          "reply": "I need a clear answer, please.",
          "replyBn": "আমার একটা পরিষ্কার উত্তর দরকার।",
          "tip": "\"Maybe\" শুনলে বস নিশ্চিত হতে পারেন না। সময় বলে দিন: \"I'll send it by 3 o'clock.\""
        },
        {
          "stars": 1,
          "en": "That is too difficult.",
          "reply": "I see. Tell me what the problem is.",
          "replyBn": "বুঝেছি। সমস্যাটা কী বলুন।",
          "tip": "সমস্যা থাকলে বিনয়ের সাথে বলুন: \"Could I have more time, please?\""
        }
      ]
    },
    {
      "boss": "Good. Is there anything you need from me?",
      "bn": "ঠিক আছে। আমার কাছ থেকে কি আপনার কিছু লাগবে?",
      "choices": [
        {
          "stars": 3,
          "en": "No, thank you, sir. I'll let you know if I need anything.",
          "reply": "Alright. Thank you.",
          "replyBn": "ঠিক আছে। ধন্যবাদ।",
          "tip": "ভদ্র ও পরিষ্কার উত্তর।"
        },
        {
          "stars": 2,
          "en": "Can I leave early today?",
          "reply": "Let's finish the report first.",
          "replyBn": "আগে রিপোর্টটা শেষ করা যাক।",
          "tip": "এখন ছুটি চাওয়ার সময় নয়। আগে কাজ শেষ করে পরে ভদ্রভাবে চাইতে পারেন।"
        },
        {
          "stars": 1,
          "en": "No.",
          "reply": "...Okay.",
          "replyBn": "...ঠিক আছে।",
          "tip": "শুধু \"No\" বললে রূঢ় শোনায়। বলুন: \"No, thank you, sir.\""
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "বস আপনার ভুল দেখালে সাথে সাথে \"It wasn't my fault\" বলা কি ভালো?",
      "a": false,
      "why": "ভুল হলে আগে স্বীকার করুন, যেমন: \"I'm sorry, I'll fix it right now.\""
    },
    {
      "q": "ভুল স্বীকার করে \"I'll fix it right now\" বলা কি ভালো অভ্যাস?",
      "a": true,
      "why": "ঠিক। এতে বস বোঝেন আপনি দায়িত্ব নিচ্ছেন।"
    },
    {
      "q": "কাজ কখন পাঠাবেন জিজ্ঞেস করলে \"Maybe. I will try.\" বলা কি পরিষ্কার উত্তর?",
      "a": false,
      "why": "পরিষ্কার সময় বলুন: \"I'll send it by 3 o'clock.\""
    }
  ],
  "hook": {
    "en": "I'll fix that right away.",
    "bn": "আমি এখনই ঠিক করে দিচ্ছি।"
  },
  "traps": [
    {
      "title": "by আর at",
      "intro": "দুটো প্রায় একই শোনায়, কিন্তু সময়ের মানে আলাদা।",
      "items": [
        {
          "en": "at three o'clock",
          "note": "ঠিক ৩টায়",
          "say": "at three o'clock"
        },
        {
          "en": "by three o'clock",
          "note": "৩টার মধ্যে (আগে)",
          "say": "by three o'clock"
        }
      ],
      "tip": "বস \"by 3\" বললে ৩টার আগে কাজ দিতে হবে।"
    },
    {
      "title": "I'll, I'm: ছোট রূপ",
      "intro": "দ্রুত বললে I will আর I am ছোট হয়ে যায়।",
      "items": [
        {
          "en": "I'll = I will",
          "note": "আমি করব",
          "say": "I'll fix it."
        },
        {
          "en": "I'm = I am",
          "note": "আমি আছি/আমি",
          "say": "I'm sorry."
        }
      ],
      "tip": "দুটোর মানে একই। শুধু ছোট করে বলা হয়।"
    },
    {
      "title": "Sorry আর Excuse me",
      "intro": "দুটো আলাদা সময়ে বলতে হয়।",
      "items": [
        {
          "en": "Sorry.",
          "note": "ভুল করেছি, দুঃখিত",
          "say": "Sorry."
        },
        {
          "en": "Excuse me.",
          "note": "একটু শুনবেন? (ডাকতে বা থামাতে)",
          "say": "Excuse me."
        }
      ],
      "tip": "ভুল হলে Sorry। কথা শুরু করতে Excuse me।"
    }
  ],
  "typing": [
    {
      "ask": "যা শুনলেন, কখনের মধ্যে? সংখ্যা লিখুন",
      "say": "I'll send it by three o'clock.",
      "num": true,
      "answers": [
        "3"
      ],
      "show": "3",
      "why": "by three = ৩টার মধ্যে",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ভুল ঠিক করার কথা। ফাঁকা ঘরে কী বসবে?",
      "en": "I'm sorry, I'll ___ that right away.",
      "answers": [
        "fix"
      ],
      "show": "fix",
      "why": "fix = ঠিক করা",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Thank you for letting me ___.",
      "answers": [
        "know"
      ],
      "show": "know",
      "why": "letting me know = আমাকে জানানোর জন্য",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "mission": {
    "title": "আজ বলুন",
    "intro": "আজ বাস্তবে অন্তত একবার এই বাক্যগুলোর একটা বলে দেখুন।",
    "items": [
      {
        "en": "Good morning, sir. You wanted to see me?",
        "bn": "সুপ্রভাত, স্যার। আপনি আমাকে দেখতে চেয়েছিলেন?"
      },
      {
        "en": "I'm sorry, I'll fix that right away.",
        "bn": "দুঃখিত, আমি এখনই এটা ঠিক করে দিচ্ছি।"
      },
      {
        "en": "I'll do better next time.",
        "bn": "পরের বার আমি আরও ভালো করব।"
      }
    ],
    "tip": "শেখা বাক্য বাস্তবে একবার বললেই মনে থাকে। সাধারণ সচেতনতার জন্য।"
  },
  "spot": [
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "There was a small mistake in yesterday's report. — গতকালের রিপোর্টে একটা ছোট ভুল ছিল।",
      "options": [
        {
          "t": "It wasn't my fault.",
          "ok": true
        },
        {
          "t": "I'm very sorry, I'll fix it right now.",
          "ok": false
        },
        {
          "t": "Oh... okay.",
          "ok": false
        }
      ],
      "why": "ভুল হলে আগে স্বীকার করাই ভালো, এতে বস বেশি আস্থা রাখেন।"
    },
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Good. Is there anything you need from me? — ঠিক আছে। আমার কাছ থেকে কি আপনার কিছু লাগবে?",
      "options": [
        {
          "t": "No.",
          "ok": true
        },
        {
          "t": "No, thank you, sir. I'll let you know if I need anything.",
          "ok": false
        },
        {
          "t": "Can I leave early today?",
          "ok": false
        }
      ],
      "why": "শুধু \"No\" বললে রূঢ় শোনায়। বলুন: \"No, thank you, sir.\""
    }
  ]
};
