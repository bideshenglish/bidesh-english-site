window.LESSON = {
  "id": "phone-calls",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    2,
    4,
    6,
    7
  ],
  "who": "সুপারভাইজার / রিসেপশন / অজানা কলার",
  "title": "Phone Calls in English",
  "titleBn": "ইংরেজিতে ফোনে কথা",
  "next": {
    "title": "Getting Around: Taxi, Bus & Train",
    "id": "getting-around"
  },
  "scene": "ফোনে মুখ দেখা যায় না, তাই বোঝা কঠিন। আজ ফোনের সহজ বাক্য আর ঠকবাজ কল চেনা শিখবেন।",
  "hook": {
    "en": "Can you spell that, please?",
    "bn": "বানান করে বলবেন, দয়া করে?"
  },
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "Hello, this is Rahim.",
      "bn": "হ্যালো, আমি রহিম বলছি।",
      "pr": "হ্যালো, দিস ইজ রহিম।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I speak to Mr. Karim, please?",
      "bn": "করিম সাহেবের সাথে কথা বলতে পারি, দয়া করে?",
      "pr": "ক্যান আই স্পিক টু মিস্টার করিম, প্লিজ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can you spell that, please?",
      "bn": "বানান করে বলবেন, দয়া করে?",
      "pr": "ক্যান ইউ স্পেল দ্যাট, প্লিজ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can you send me a message?",
      "bn": "আমাকে একটা মেসেজ পাঠাবেন?",
      "pr": "ক্যান ইউ সেন্ড মি আ মেসেজ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Let me repeat the number.",
      "bn": "নম্বরটা আমি আবার বলছি।",
      "pr": "লেট মি রিপিট দ্য নাম্বার।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I will call you back.",
      "bn": "আমি আপনাকে আবার ফোন করব।",
      "pr": "আই উইল কল ইউ ব্যাক।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Who is calling, please?",
      "bn": "কে ফোন করছেন, দয়া করে?",
      "pr": "হু ইজ কলিং, প্লিজ?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Please hold on.",
      "bn": "একটু লাইনে থাকুন।",
      "pr": "প্লিজ হোল্ড অন।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "He is not here. Can I take a message?",
      "bn": "উনি এখানে নেই। কোনো বার্তা রাখব?",
      "pr": "হি ইজ নট হিয়ার। ক্যান আই টেক আ মেসেজ?"
    }
  ],
  "traps": [
    {
      "title": "OTP কাউকে বলবেন না",
      "intro": "ব্যাংক বা পুলিশ পরিচয় দিয়ে ফোন করে ঠকবাজরা ফোনে আসা কোড চায়।",
      "items": [
        {
          "en": "OTP",
          "note": "ফোনে আসা গোপন কোড",
          "say": "O T P"
        },
        {
          "en": "verify",
          "note": "যাচাই করা",
          "say": "verify"
        },
        {
          "en": "hang up",
          "note": "ফোন কেটে দেওয়া",
          "say": "hang up"
        }
      ],
      "tip": "ব্যাংক বা সরকারি সংস্থা ফোনে OTP চায় না। বলুন: \"I will not share it. I will call you back.\" তারপর ফোন কেটে দিন।"
    },
    {
      "title": "hold on, call back আর message",
      "intro": "ফোনে এই তিনটা কথা সবচেয়ে বেশি শোনা যায়।",
      "items": [
        {
          "en": "hold on",
          "note": "লাইনে থাকুন",
          "say": "hold on"
        },
        {
          "en": "call back",
          "note": "আবার ফোন করা",
          "say": "call back"
        },
        {
          "en": "leave a message",
          "note": "বার্তা রেখে যাওয়া",
          "say": "leave a message"
        }
      ],
      "tip": "\"Hold on\" মানে ফোন কাটবেন না। অপেক্ষা করুন।"
    },
    {
      "title": "ফোনে নম্বর বলার ধরন",
      "intro": "অনেকে একই অঙ্ক পরপর থাকলে ছোট করে বলে।",
      "items": [
        {
          "en": "double five",
          "note": "৫৫",
          "say": "double five"
        },
        {
          "en": "triple two",
          "note": "২২২",
          "say": "triple two"
        },
        {
          "en": "oh",
          "note": "শূন্য (০)",
          "say": "oh"
        }
      ],
      "tip": "না বুঝলে বলুন: \"Can you say the number one by one, please?\""
    }
  ],
  "listening": [
    {
      "say": "Who is calling, please?",
      "options": [
        {
          "t": "কে ফোন করছেন?",
          "ok": true
        },
        {
          "t": "আপনি কোথায় আছেন?",
          "ok": false
        },
        {
          "t": "কখন আসবেন?",
          "ok": false
        }
      ],
      "why": "calling = ফোন করা। Who = কে।"
    },
    {
      "say": "Please hold on. I will call him.",
      "options": [
        {
          "t": "ফোন কেটে দিন",
          "ok": false
        },
        {
          "t": "একটু লাইনে থাকুন, আমি ওনাকে ডাকছি",
          "ok": true
        },
        {
          "t": "উনি আসবেন না",
          "ok": false
        }
      ],
      "why": "hold on = লাইনে থাকুন।"
    },
    {
      "say": "He is not here. Can I take a message?",
      "options": [
        {
          "t": "উনি এখানে নেই, বার্তা রাখব?",
          "ok": true
        },
        {
          "t": "উনি এখনই আসছেন",
          "ok": false
        },
        {
          "t": "আমি উনি",
          "ok": false
        }
      ],
      "why": "not here = নেই। message = বার্তা।"
    },
    {
      "say": "I will call you back in ten minutes.",
      "options": [
        {
          "t": "দশ মিনিট আগে ফোন করেছিলাম",
          "ok": false
        },
        {
          "t": "আমি আর ফোন করব না",
          "ok": false
        },
        {
          "t": "দশ মিনিট পরে ফোন করব",
          "ok": true
        }
      ],
      "why": "call you back = আপনাকে আবার ফোন করব। ten = ১০।"
    }
  ],
  "typing": [
    {
      "ask": "কত মিনিট পরে? সংখ্যা লিখুন",
      "say": "I will call you back in ten minutes.",
      "num": true,
      "answers": [
        "10"
      ],
      "show": "10",
      "why": "ten = ১০",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Can you ___ that, please?",
      "answers": [
        "spell"
      ],
      "show": "spell",
      "why": "spell = বানান করা",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Can I take a ___?",
      "answers": [
        "message"
      ],
      "show": "message",
      "why": "message = বার্তা",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [
    1,
    2,
    5
  ],
  "dialogue": [
    {
      "boss": "Hello, ABC Company. How can I help you?",
      "bn": "হ্যালো, এবিসি কোম্পানি। কীভাবে সাহায্য করতে পারি? (আপনি সুপারভাইজার মিস্টার খানকে চাইছেন)",
      "choices": [
        {
          "stars": 3,
          "en": "Hello, can I speak to Mr. Khan, please?",
          "reply": "Please hold on.",
          "replyBn": "একটু লাইনে থাকুন।",
          "tip": "ভদ্র শুরু, স্পষ্ট চাওয়া। এরপর লাইনে থাকুন।"
        },
        {
          "stars": 2,
          "en": "Khan?",
          "reply": "Which Khan?",
          "replyBn": "কোন খান?",
          "tip": "এক শব্দে ফোনে বোঝানো কঠিন। বলুন: \"Can I speak to Mr. Khan?\""
        },
        {
          "stars": 1,
          "en": "Where is Khan?",
          "reply": "Who is this?",
          "replyBn": "আপনি কে?",
          "tip": "আগে \"Hello\" আর নিজের পরিচয় বলুন।"
        }
      ]
    },
    {
      "boss": "Hello? Who is this?",
      "bn": "হ্যালো? কে? (আপনি অসুস্থ, সুপারভাইজারকে জানাতে ফোন করেছেন)",
      "choices": [
        {
          "stars": 3,
          "en": "Hello, sir. This is Rahim. I am sick today. I cannot come to work.",
          "reply": "Okay. Please call me tomorrow.",
          "replyBn": "ঠিক আছে। কাল আমাকে ফোন করুন।",
          "tip": "নাম, সমস্যা আর কী করতে পারছেন না, তিনটাই বলেছেন। সকাল সকাল জানান।"
        },
        {
          "stars": 2,
          "en": "Sir, Rahim. Sick.",
          "reply": "Okay. Tomorrow you come?",
          "replyBn": "ঠিক আছে। কাল আসবে?",
          "tip": "বোঝা গেছে। পুরো বাক্যে বললে স্পষ্ট হয়।"
        },
        {
          "stars": 1,
          "en": "I will not come.",
          "reply": "Why?",
          "replyBn": "কেন?",
          "tip": "কারণ না বলে \"আসব না\" বললে সমস্যা হয়। কারণ আর নাম বলুন।"
        }
      ]
    },
    {
      "boss": "This is your bank. There is a problem with your account. Tell me the code on your phone.",
      "bn": "আমরা আপনার ব্যাংক। অ্যাকাউন্টে সমস্যা আছে। ফোনে আসা কোডটা বলুন। (অচেনা নম্বর থেকে)",
      "choices": [
        {
          "stars": 3,
          "en": "Sorry, I will not share the code. I will call the bank myself.",
          "reply": "Wait! It is urgent!",
          "replyBn": "দাঁড়ান! খুব জরুরি!",
          "tip": "\"জরুরি\" বলে তাড়া দেওয়া ঠকবাজের চাল। ফোন কেটে দিন, ব্যাংকের আসল নম্বরে নিজে ফোন করুন।"
        },
        {
          "stars": 2,
          "en": "Which bank?",
          "reply": "ABC Bank. Tell me the code.",
          "replyBn": "এবিসি ব্যাংক। কোডটা বলুন।",
          "tip": "ব্যাংকের নাম বলল বলেই বিশ্বাস করবেন না। কোড কাউকে দেবেন না।"
        },
        {
          "stars": 1,
          "en": "Okay. The code is four, eight, two, nine.",
          "reply": "Thank you.",
          "replyBn": "ধন্যবাদ।",
          "tip": "কোড দিলে আপনার টাকা চলে যেতে পারে। কখনো ফোনে OTP বলবেন না।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "ব্যাংক বা পুলিশ পরিচয় দিয়ে ফোনে OTP চাইলে দেওয়া কি নিরাপদ?",
      "a": false,
      "why": "না। ব্যাংক বা সরকারি সংস্থা ফোনে OTP চায় না। ফোন কেটে দিন।"
    },
    {
      "q": "না বুঝলে \"Can you spell that, please?\" বলা কি ঠিক?",
      "a": true,
      "why": "ঠিক। নাম বা শব্দ বুঝতে বানান চাওয়া ভালো।"
    },
    {
      "q": "\"Please hold on\" মানে কি \"ফোন কেটে দিন\"?",
      "a": false,
      "why": "না। মানে \"একটু লাইনে থাকুন\"।"
    },
    {
      "q": "ফোনে নম্বর শুনে আবার বলে মিলিয়ে নেওয়া কি ভালো?",
      "a": true,
      "why": "ঠিক। বলুন: \"Let me repeat the number.\""
    },
    {
      "q": "অচেনা কলার \"জরুরি\" বলে তাড়া দিলে সাথে সাথে কথা মেনে নেওয়া কি ভালো?",
      "a": false,
      "why": "না। তাড়া দেওয়া ঠকবাজের চাল। বলুন: \"I will call you back.\" তারপর ফোন কেটে দিন।"
    }
  ],
  "mission": {
    "title": "আজ বলুন",
    "intro": "আজ বাস্তবে অন্তত একবার এই বাক্যগুলোর একটা বলে দেখুন।",
    "items": [
      {
        "en": "Can I speak to Mr. Karim, please?",
        "bn": "করিম সাহেবের সাথে কথা বলতে পারি, দয়া করে?"
      },
      {
        "en": "Can you spell that, please?",
        "bn": "বানান করে বলবেন, দয়া করে?"
      },
      {
        "en": "I will call you back.",
        "bn": "আমি আপনাকে আবার ফোন করব।"
      }
    ],
    "tip": "শেখা বাক্য বাস্তবে একবার বললেই মনে থাকে। সাধারণ সচেতনতার জন্য।"
  },
  "spot": [
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Hello, ABC Company. How can I help you? — হ্যালো, এবিসি কোম্পানি। কীভাবে সাহায্য করতে পারি? (আপনি সুপারভাইজার মিস্টার খানকে চাইছেন)",
      "options": [
        {
          "t": "Where is Khan?",
          "ok": true
        },
        {
          "t": "Hello, can I speak to Mr. Khan, please?",
          "ok": false
        },
        {
          "t": "Khan?",
          "ok": false
        }
      ],
      "why": "আগে \"Hello\" আর নিজের পরিচয় বলুন।"
    },
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "This is your bank. There is a problem with your account. Tell me the code on your phone. — আমরা আপনার ব্যাংক। অ্যাকাউন্টে সমস্যা আছে। ফোনে আসা কোডটা বলুন। (অচেনা নম্বর থেকে)",
      "options": [
        {
          "t": "Okay. The code is four, eight, two, nine.",
          "ok": true
        },
        {
          "t": "Sorry, I will not share the code. I will call the bank myself.",
          "ok": false
        },
        {
          "t": "Which bank?",
          "ok": false
        }
      ],
      "why": "কোড দিলে আপনার টাকা চলে যেতে পারে। কখনো ফোনে OTP বলবেন না।"
    }
  ]
};
