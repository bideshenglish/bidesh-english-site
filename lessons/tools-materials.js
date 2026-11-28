window.LESSON = {
  "id": "tools-materials",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    2,
    4,
    6
  ],
  "who": "সুপারভাইজার",
  "title": "Asking for Tools & Materials",
  "titleBn": "যন্ত্রপাতি ও জিনিস চেয়ে নেওয়া",
  "next": {
    "title": "Safety Signs & Warnings",
    "id": "safety-signs"
  },
  "scene": "যন্ত্র বা সরঞ্জাম লাগলে ভদ্রভাবে কীভাবে চাইবেন, আজ সেটাই শিখবেন।",
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "Do you have gloves for me?",
      "bn": "আমার জন্য গ্লাভস আছে?",
      "pr": "ডু ইউ হ্যাভ গ্লাভস ফর মি?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Where can I find a broom?",
      "bn": "ঝাড়ু কোথায় পাব?",
      "pr": "হোয়ার ক্যান আই ফাইন্ড আ ব্রুম?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I need a bucket and a mop.",
      "bn": "আমার একটা বালতি ও মপ দরকার।",
      "pr": "আই নিড আ বাকেট অ্যান্ড আ মপ।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "This one is broken. Can I get another?",
      "bn": "এটা ভাঙা। আরেকটা পেতে পারি?",
      "pr": "দিস ওয়ান ইজ ব্রোকেন। ক্যান আই গেট অ্যানাদার?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I use this machine?",
      "bn": "আমি কি এই মেশিনটা ব্যবহার করতে পারি?",
      "pr": "ক্যান আই ইউজ দিস মেশিন?"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Take this box to the third floor.",
      "bn": "এই বাক্সটা তিনতলায় নিয়ে যাও।",
      "pr": "টেক দিস বক্স টু দ্য থার্ড ফ্লোর।"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Return the tools when you finish.",
      "bn": "কাজ শেষে যন্ত্রপাতি ফেরত দাও।",
      "pr": "রিটার্ন দ্য টুলস হোয়েন ইউ ফিনিশ।"
    }
  ],
  "listening": [
    {
      "say": "I need a bucket and a mop.",
      "options": [
        {
          "t": "আমার একটা বালতি ও মপ দরকার",
          "ok": true
        },
        {
          "t": "আমার ছুটি দরকার",
          "ok": false
        },
        {
          "t": "আমি বাড়ি যাব",
          "ok": false
        }
      ],
      "why": "need মানে দরকার, bucket মানে বালতি।"
    },
    {
      "say": "Return the tools when you finish.",
      "options": [
        {
          "t": "কাল সকালে এসো",
          "ok": false
        },
        {
          "t": "কাজ শেষে যন্ত্রপাতি ফেরত দাও",
          "ok": true
        },
        {
          "t": "নতুন যন্ত্র কিনে আনো",
          "ok": false
        }
      ],
      "why": "return মানে ফেরত দেওয়া, tools মানে যন্ত্রপাতি, finish মানে শেষ করা।"
    }
  ],
  "speak": [
    0,
    2,
    3
  ],
  "dialogue": [
    {
      "boss": "Do you need anything before you start?",
      "bn": "কাজ শুরুর আগে তোমার কিছু লাগবে?",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. I need gloves and a bucket.",
          "reply": "Okay. They are in the store room.",
          "replyBn": "ঠিক আছে। ওগুলো স্টোর রুমে আছে।",
          "tip": "দারুণ! পরিষ্কারভাবে কী দরকার বলেছেন।"
        },
        {
          "stars": 2,
          "en": "No.",
          "reply": "Are you sure? You need gloves for this work.",
          "replyBn": "নিশ্চিত? এই কাজে গ্লাভস লাগবে।",
          "tip": "দরকার থাকলে চুপ না থেকে জিজ্ঞেস করুন: \"Do you have gloves for me?\""
        },
        {
          "stars": 1,
          "en": "Give me gloves.",
          "reply": "Please ask politely.",
          "replyBn": "ভদ্রভাবে চাও।",
          "tip": "\"Give me\" আদেশের মতো শোনায়। বলুন: \"Do you have gloves for me?\""
        }
      ]
    },
    {
      "boss": "Take this mop and clean the hall.",
      "bn": "এই মপ নিয়ে হলঘর পরিষ্কার করো।",
      "choices": [
        {
          "stars": 3,
          "en": "Sorry, sir. This one is broken. Can I get another?",
          "reply": "Oh, wait. I'll bring you a new one.",
          "replyBn": "ও, দাঁড়াও। আমি নতুন একটা এনে দিচ্ছি।",
          "tip": "চমৎকার! ভাঙা যন্ত্র দিয়ে কাজ না করে ভদ্রভাবে জানিয়েছেন।"
        },
        {
          "stars": 2,
          "en": "Okay, I will try.",
          "reply": "Good. Go ahead.",
          "replyBn": "ভালো। শুরু করো।",
          "tip": "ভাঙা যন্ত্রে কাজ ভালো হয় না, আঘাতও লাগতে পারে। জানিয়ে দিন: \"This one is broken.\""
        },
        {
          "stars": 1,
          "en": "Why you give me this?",
          "reply": "Excuse me?",
          "replyBn": "কী বললে?",
          "tip": "এভাবে বললে রূঢ় শোনায়। ভদ্রভাবে বলুন: \"This one is broken. Can I get another?\""
        }
      ]
    },
    {
      "boss": "Take this box to the third floor, then return the tools.",
      "bn": "এই বাক্সটা তিনতলায় নিয়ে যাও, তারপর যন্ত্রপাতি ফেরত দাও।",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. I'll return the tools when I finish.",
          "reply": "Good. Thank you.",
          "replyBn": "ভালো। ধন্যবাদ।",
          "tip": "ঠিক! নির্দেশ বুঝেছেন তা পরিষ্কার জানিয়েছেন।"
        },
        {
          "stars": 2,
          "en": "Okay.",
          "reply": "Please say \"Yes, sir.\" so I know you understood.",
          "replyBn": "\"Yes, sir\" বলো, যাতে আমি বুঝি তুমি বুঝেছ।",
          "tip": "শুধু \"Okay\" বললে বোঝা যায় না আপনি বুঝেছেন কি না। বলুন: \"Yes, sir. I understand.\""
        },
        {
          "stars": 1,
          "en": "Where? I don't know.",
          "reply": "Third floor. Ask someone if you need help.",
          "replyBn": "তিনতলা। সাহায্য লাগলে কাউকে জিজ্ঞেস করো।",
          "tip": "জিজ্ঞেস করা ভালো, কিন্তু ভদ্রভাবে বলুন: \"Sorry, sir. Where is the third floor?\""
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "যন্ত্র ভাঙা পেলে চুপচাপ সেটা দিয়েই কাজ করা কি ভালো?",
      "a": false,
      "why": "না। ভাঙা যন্ত্রে আঘাত লাগতে পারে। বলুন: \"This one is broken. Can I get another?\""
    },
    {
      "q": "\"I need a bucket and a mop.\" বলে দরকারি জিনিস চাওয়া কি ঠিক?",
      "a": true,
      "why": "ঠিক। পরিষ্কার ও ভদ্রভাবে চাইলে সুপারভাইজার সহজেই বোঝেন।"
    },
    {
      "q": "\"Return the tools when you finish.\" এর মানে কি \"যন্ত্রপাতি নিজের কাছে রেখে দাও\"?",
      "a": false,
      "why": "return মানে ফেরত দেওয়া। কাজ শেষে যন্ত্রপাতি জায়গামতো ফেরত দিতে হবে।"
    }
  ],
  "hook": {
    "en": "Do you have gloves for me?",
    "bn": "আমার জন্য গ্লাভস আছে?"
  },
  "traps": [
    {
      "title": "three আর third",
      "intro": "একটা সংখ্যা, আরেকটা ক্রম।",
      "items": [
        {
          "en": "three boxes",
          "note": "৩টা বাক্স",
          "say": "three boxes"
        },
        {
          "en": "the third floor",
          "note": "৩য় তলা",
          "say": "the third floor"
        }
      ],
      "tip": "three = ৩। third = ৩য়। তলা বা ক্রম বোঝাতে third।"
    },
    {
      "title": "Return আর Take",
      "intro": "ফেরত দেওয়া আর নিয়ে যাওয়া আলাদা।",
      "items": [
        {
          "en": "Return the tools.",
          "note": "যন্ত্র ফেরত দিন",
          "say": "Return the tools."
        },
        {
          "en": "Take the tools.",
          "note": "যন্ত্র নিয়ে যান",
          "say": "Take the tools."
        }
      ],
      "tip": "কাজ শেষে \"Return\" শুনলে জায়গামতো ফেরত দিন।"
    }
  ],
  "typing": [
    {
      "ask": "কত তলায়? সংখ্যা লিখুন",
      "say": "Take this box to the third floor.",
      "num": true,
      "answers": [
        "3"
      ],
      "show": "3",
      "why": "third floor = ৩য় তলা",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "This one is ___. Can I get another?",
      "answers": [
        "broken"
      ],
      "show": "broken",
      "why": "broken = ভাঙা",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "___ the tools when you finish.",
      "answers": [
        "return"
      ],
      "show": "return",
      "why": "return = ফেরত দিন",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "mission": {
    "title": "আজ বলুন",
    "intro": "আজ বাস্তবে অন্তত একবার এই বাক্যগুলোর একটা বলে দেখুন।",
    "items": [
      {
        "en": "Do you have gloves for me?",
        "bn": "আমার জন্য গ্লাভস আছে?"
      },
      {
        "en": "I need a bucket and a mop.",
        "bn": "আমার একটা বালতি ও মপ দরকার।"
      },
      {
        "en": "This one is broken. Can I get another?",
        "bn": "এটা ভাঙা। আরেকটা পেতে পারি?"
      }
    ],
    "tip": "শেখা বাক্য বাস্তবে একবার বললেই মনে থাকে। সাধারণ সচেতনতার জন্য।"
  },
  "spot": [
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Do you need anything before you start? — কাজ শুরুর আগে তোমার কিছু লাগবে?",
      "options": [
        {
          "t": "Give me gloves.",
          "ok": true
        },
        {
          "t": "Yes, sir. I need gloves and a bucket.",
          "ok": false
        },
        {
          "t": "No.",
          "ok": false
        }
      ],
      "why": "\"Give me\" আদেশের মতো শোনায়। বলুন: \"Do you have gloves for me?\""
    },
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Take this box to the third floor, then return the tools. — এই বাক্সটা তিনতলায় নিয়ে যাও, তারপর যন্ত্রপাতি ফেরত দাও।",
      "options": [
        {
          "t": "Where? I don't know.",
          "ok": true
        },
        {
          "t": "Yes, sir. I'll return the tools when I finish.",
          "ok": false
        },
        {
          "t": "Okay.",
          "ok": false
        }
      ],
      "why": "জিজ্ঞেস করা ভালো, কিন্তু ভদ্রভাবে বলুন: \"Sorry, sir. Where is the third floor?\""
    }
  ]
};
