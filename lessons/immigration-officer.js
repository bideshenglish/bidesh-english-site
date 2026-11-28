window.LESSON = {
  "id": "immigration-officer",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    3,
    4,
    8
  ],
  "who": "ইমিগ্রেশন অফিসার",
  "title": "Immigration Officer Questions",
  "titleBn": "ইমিগ্রেশন অফিসারের প্রশ্ন",
  "next": {
    "title": "Arriving: Pickup, Check-in & First Day",
    "id": "arriving-first-day"
  },
  "scene": "ইমিগ্রেশনে প্রশ্ন সহজ, কিন্তু ভয়ে ভুল হয়। উত্তর ছোট দিন, সত্য বলুন, কাগজের সাথে মিলিয়ে।",
  "hook": {
    "en": "I am here to work.",
    "bn": "আমি কাজ করতে এসেছি।"
  },
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "I am here to work.",
      "bn": "আমি কাজ করতে এসেছি।",
      "pr": "আই অ্যাম হিয়ার টু ওয়ার্ক।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I will work for ABC Company.",
      "bn": "আমি এবিসি কোম্পানিতে কাজ করব।",
      "pr": "আই উইল ওয়ার্ক ফর এবিসি কোম্পানি।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I will stay in the company camp.",
      "bn": "আমি কোম্পানির ক্যাম্পে থাকব।",
      "pr": "আই উইল স্টে ইন দ্য কোম্পানি ক্যাম্প।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I packed my bag myself.",
      "bn": "আমি নিজেই ব্যাগ গুছিয়েছি।",
      "pr": "আই প্যাকড মাই ব্যাগ মাইসেলফ।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I have nothing to declare.",
      "bn": "জানানোর মতো আমার কিছু নেই।",
      "pr": "আই হ্যাভ নাথিং টু ডিক্লেয়ার।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Do you want to see my contract?",
      "bn": "আপনি কি আমার চুক্তি দেখতে চান?",
      "pr": "ডু ইউ ওয়ান্ট টু সি মাই কন্ট্র্যাক্ট?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "What is the purpose of your visit?",
      "bn": "আপনার আসার উদ্দেশ্য কী?",
      "pr": "হোয়াট ইজ দ্য পারপাস অব ইওর ভিজিট?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Did anyone give you anything to carry?",
      "bn": "কেউ কি আপনাকে কিছু বহন করতে দিয়েছে?",
      "pr": "ডিড এনিওয়ান গিভ ইউ এনিথিং টু ক্যারি?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "How much cash do you have?",
      "bn": "সাথে কত নগদ টাকা আছে?",
      "pr": "হাউ মাচ ক্যাশ ডু ইউ হ্যাভ?"
    }
  ],
  "traps": [
    {
      "title": "purpose, destination আর duration",
      "intro": "অফিসার তিনটা জিনিস জানতে চান।",
      "items": [
        {
          "en": "purpose",
          "note": "আসার উদ্দেশ্য",
          "say": "purpose"
        },
        {
          "en": "destination",
          "note": "গন্তব্য",
          "say": "destination"
        },
        {
          "en": "duration",
          "note": "কতদিন থাকবেন",
          "say": "duration"
        }
      ],
      "tip": "\"How long will you stay?\" প্রশ্নে সময় বলুন, যেমন \"Two years.\" \"I don't know\" বলবেন না।"
    },
    {
      "title": "declare আর cash",
      "intro": "বিমানবন্দরে টাকা আর জিনিস নিয়ে প্রশ্ন হয়।",
      "items": [
        {
          "en": "declare",
          "note": "অফিসারকে জানানো",
          "say": "declare"
        },
        {
          "en": "cash",
          "note": "নগদ টাকা",
          "say": "cash"
        },
        {
          "en": "to carry",
          "note": "বহন করা",
          "say": "to carry"
        }
      ],
      "tip": "বেশি টাকা বা জিনিস থাকলে সত্য বলুন। না থাকলে: \"I have nothing to declare.\""
    },
    {
      "title": "অন্যের প্যাকেট নেবেন না",
      "intro": "কেউ \"একটু নিয়ে যান\" বলে প্যাকেট দিলে বিপদ হতে পারে। ব্যাগে যা পাওয়া যাবে, দায় আপনার।",
      "items": [
        {
          "en": "package",
          "note": "প্যাকেট",
          "say": "package"
        },
        {
          "en": "stranger",
          "note": "অচেনা মানুষ",
          "say": "stranger"
        },
        {
          "en": "myself",
          "note": "নিজে",
          "say": "myself"
        }
      ],
      "tip": "কেউ কিছু দিতে চাইলে বলুন: \"No, I packed my bag myself.\""
    }
  ],
  "listening": [
    {
      "say": "What is the purpose of your visit?",
      "options": [
        {
          "t": "আপনার আসার উদ্দেশ্য কী?",
          "ok": true
        },
        {
          "t": "আপনার নাম কী?",
          "ok": false
        },
        {
          "t": "কতদিন থাকবেন?",
          "ok": false
        }
      ],
      "why": "purpose = উদ্দেশ্য। visit = আসা।"
    },
    {
      "say": "How long will you stay?",
      "options": [
        {
          "t": "কোথায় থাকবেন?",
          "ok": false
        },
        {
          "t": "কতদিন থাকবেন?",
          "ok": true
        },
        {
          "t": "কত টাকা আছে?",
          "ok": false
        }
      ],
      "why": "How long = কতদিন। stay = থাকা।"
    },
    {
      "say": "Did anyone give you anything to carry?",
      "options": [
        {
          "t": "ব্যাগ কে গুছিয়েছে?",
          "ok": false
        },
        {
          "t": "ব্যাগ খুলুন",
          "ok": false
        },
        {
          "t": "কেউ কি কিছু বহন করতে দিয়েছে?",
          "ok": true
        }
      ],
      "why": "carry = বহন করা। anything = কিছু।"
    },
    {
      "say": "Please step aside.",
      "options": [
        {
          "t": "ভিতরে যান",
          "ok": false
        },
        {
          "t": "একপাশে সরে দাঁড়ান",
          "ok": true
        },
        {
          "t": "ফিরে যান",
          "ok": false
        }
      ],
      "why": "step aside = সরে দাঁড়ানো। এটা বললে ঘাবড়াবেন না। কাগজ হাতে রেখে শান্ত থাকুন।"
    }
  ],
  "typing": [
    {
      "ask": "কত ডলার? সংখ্যা লিখুন",
      "say": "I have two hundred dollars.",
      "num": true,
      "answers": [
        "200"
      ],
      "show": "200",
      "why": "two hundred = ২০০",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "I have nothing to ___.",
      "answers": [
        "declare"
      ],
      "show": "declare",
      "why": "declare = জানানো",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "I packed my bag ___.",
      "answers": [
        "myself"
      ],
      "show": "myself",
      "why": "myself = নিজে",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [
    0,
    3,
    4
  ],
  "dialogue": [
    {
      "boss": "What is the purpose of your visit?",
      "bn": "আপনার আসার উদ্দেশ্য কী?",
      "choices": [
        {
          "stars": 3,
          "en": "I am here to work. I have a work visa and a contract.",
          "reply": "Okay. Who is your employer?",
          "replyBn": "ঠিক আছে। আপনার নিয়োগকর্তা কে?",
          "tip": "সত্য আর ছোট উত্তর। কাগজ মিলে গেলে ভয় নেই।"
        },
        {
          "stars": 2,
          "en": "Work.",
          "reply": "Where will you work?",
          "replyBn": "কোথায় কাজ করবেন?",
          "tip": "এক শব্দে আরও প্রশ্ন আসে। পুরো বাক্যে বলুন: \"I am here to work.\""
        },
        {
          "stars": 1,
          "en": "Tourist.",
          "reply": "Show me your return ticket.",
          "replyBn": "ফেরার টিকিট দেখান।",
          "tip": "ভিসার সাথে না মিললে ফিরিয়ে দিতে পারে। সব সময় সত্য বলুন।"
        }
      ]
    },
    {
      "boss": "Did anyone give you anything to carry?",
      "bn": "কেউ কি আপনাকে কিছু বহন করতে দিয়েছে?",
      "choices": [
        {
          "stars": 3,
          "en": "No, sir. I packed my bag myself.",
          "reply": "Okay. Thank you.",
          "replyBn": "ঠিক আছে। ধন্যবাদ।",
          "tip": "পরিষ্কার উত্তর। কারও প্যাকেট কখনো নেবেন না।"
        },
        {
          "stars": 2,
          "en": "I do not understand.",
          "reply": "Anyone give you a packet?",
          "replyBn": "কেউ প্যাকেট দিয়েছে?",
          "tip": "না বুঝলে বলুন: \"Please say it again slowly.\""
        },
        {
          "stars": 1,
          "en": "Yes, my friend gave me a small packet.",
          "reply": "Please step aside.",
          "replyBn": "একপাশে সরে দাঁড়ান।",
          "tip": "প্যাকেটে কী আছে না জানলেও দায় আপনার। এমন প্যাকেট কখনো নেবেন না।"
        }
      ]
    },
    {
      "boss": "How much cash do you have?",
      "bn": "সাথে কত নগদ টাকা আছে?",
      "choices": [
        {
          "stars": 3,
          "en": "I have two hundred dollars.",
          "reply": "Okay.",
          "replyBn": "ঠিক আছে।",
          "tip": "ঠিক অঙ্ক বলুন। আগেই গুনে রাখুন।"
        },
        {
          "stars": 2,
          "en": "A little.",
          "reply": "How much exactly?",
          "replyBn": "ঠিক কত?",
          "tip": "\"A little\" নয়, নির্দিষ্ট অঙ্ক বলুন।"
        },
        {
          "stars": 1,
          "en": "I have no money.",
          "reply": "Please step aside.",
          "replyBn": "একপাশে সরে দাঁড়ান।",
          "tip": "একদম টাকা না থাকলে সন্দেহ হতে পারে। সাথে কিছু টাকা রাখা ভালো।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "ইমিগ্রেশনে সত্য আর কাগজের সাথে মেলানো উত্তর দেওয়া কি ভালো?",
      "a": true,
      "why": "ঠিক। উত্তর আর কাগজ না মিললে সমস্যা হয়।"
    },
    {
      "q": "কেউ প্যাকেট দিয়ে \"একটু নিয়ে যান\" বললে নেওয়া কি নিরাপদ?",
      "a": false,
      "why": "না। ব্যাগে যা পাওয়া যায়, দায় আপনার। বলুন: \"No, I packed my bag myself.\""
    },
    {
      "q": "\"purpose of your visit\" মানে কি \"কত টাকা আছে\"?",
      "a": false,
      "why": "না। purpose = উদ্দেশ্য। অর্থাৎ \"কেন এসেছেন?\""
    },
    {
      "q": "\"Please step aside\" শুনলে শান্ত থেকে কাগজ হাতে রাখা কি ভালো?",
      "a": true,
      "why": "ঠিক। অনেক সময় অতিরিক্ত প্রশ্নের জন্য ডাকে। ঘাবড়াবেন না।"
    },
    {
      "q": "প্রশ্ন না বুঝলে অনুমানে উত্তর দেওয়া কি ঠিক?",
      "a": false,
      "why": "না। বলুন: \"Sorry, please say it again slowly.\""
    }
  ],
  "mission": {
    "title": "আজ বলুন",
    "intro": "আজ বাস্তবে অন্তত একবার এই বাক্যগুলোর একটা বলে দেখুন।",
    "items": [
      {
        "en": "I am here to work.",
        "bn": "আমি কাজ করতে এসেছি।"
      },
      {
        "en": "I packed my bag myself.",
        "bn": "আমি নিজেই ব্যাগ গুছিয়েছি।"
      },
      {
        "en": "I have nothing to declare.",
        "bn": "জানানোর মতো আমার কিছু নেই।"
      }
    ],
    "tip": "শেখা বাক্য বাস্তবে একবার বললেই মনে থাকে। সাধারণ সচেতনতার জন্য।"
  },
  "spot": [
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "What is the purpose of your visit? — আপনার আসার উদ্দেশ্য কী?",
      "options": [
        {
          "t": "Tourist.",
          "ok": true
        },
        {
          "t": "I am here to work. I have a work visa and a contract.",
          "ok": false
        },
        {
          "t": "Work.",
          "ok": false
        }
      ],
      "why": "ভিসার সাথে না মিললে ফিরিয়ে দিতে পারে। সব সময় সত্য বলুন।"
    },
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "How much cash do you have? — সাথে কত নগদ টাকা আছে?",
      "options": [
        {
          "t": "I have no money.",
          "ok": true
        },
        {
          "t": "I have two hundred dollars.",
          "ok": false
        },
        {
          "t": "A little.",
          "ok": false
        }
      ],
      "why": "একদম টাকা না থাকলে সন্দেহ হতে পারে। সাথে কিছু টাকা রাখা ভালো।"
    }
  ]
};
