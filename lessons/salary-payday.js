window.LESSON = {
  "id": "salary-payday",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    2,
    5,
    7
  ],
  "who": "সুপারভাইজার",
  "title": "Salary & Payday",
  "titleBn": "বেতন ও পেমেন্টের দিন",
  "next": {
    "title": "Camp Life & Roommates",
    "id": "camp-roommates"
  },
  "scene": "বেতন কবে, কত, কেন কাটা, এসব জানা আপনার অধিকার। ভদ্রভাবে জিজ্ঞেস করতে শিখবেন।",
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "When is payday?",
      "bn": "বেতন কবে দেওয়া হয়?",
      "pr": "হোয়েন ইজ পে-ডে?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "How much is my salary?",
      "bn": "আমার বেতন কত?",
      "pr": "হাউ মাচ ইজ মাই স্যালারি?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Is overtime included?",
      "bn": "ওভারটাইম কি এর মধ্যে ধরা আছে?",
      "pr": "ইজ ওভারটাইম ইনক্লুডেড?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I see my payslip, please?",
      "bn": "আমি কি আমার বেতনের হিসাব (পে-স্লিপ) দেখতে পারি, দয়া করে?",
      "pr": "ক্যান আই সি মাই পে-স্লিপ, প্লিজ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I did not get my salary yet.",
      "bn": "আমি এখনো বেতন পাইনি।",
      "pr": "আই ডিড নট গেট মাই স্যালারি ইয়েট।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Why is this amount deducted?",
      "bn": "এই টাকাটা কেন কাটা হয়েছে?",
      "pr": "হোয়াই ইজ দিস অ্যামাউন্ট ডিডাক্টেড?"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Salary comes on the fifth of every month.",
      "bn": "প্রতি মাসের পাঁচ তারিখে বেতন আসে।",
      "pr": "স্যালারি কামস অন দ্য ফিফথ অফ এভরি মান্থ।"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "We pay by bank transfer.",
      "bn": "আমরা ব্যাংকের মাধ্যমে টাকা দিই।",
      "pr": "উই পে বাই ব্যাংক ট্রান্সফার।"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Please ask the accounts office.",
      "bn": "অনুগ্রহ করে হিসাব বিভাগে জিজ্ঞেস করুন।",
      "pr": "প্লিজ আস্ক দ্য অ্যাকাউন্টস অফিস।"
    }
  ],
  "listening": [
    {
      "say": "Salary comes on the fifth of every month.",
      "options": [
        {
          "t": "প্রতি মাসের পাঁচ তারিখে বেতন আসে",
          "ok": true
        },
        {
          "t": "প্রতি পাঁচ মাসে একবার বেতন আসে",
          "ok": false
        },
        {
          "t": "এই মাসে বেতন নেই",
          "ok": false
        }
      ],
      "why": "fifth মানে পাঁচ তারিখ, every month মানে প্রতি মাসে। তারিখটা মনে রাখুন।"
    },
    {
      "say": "We pay by bank transfer.",
      "options": [
        {
          "t": "আমরা হাতে হাতে নগদ দিই",
          "ok": false
        },
        {
          "t": "আমরা ব্যাংকের মাধ্যমে টাকা দিই",
          "ok": true
        },
        {
          "t": "আমরা আজ টাকা দিই না",
          "ok": false
        }
      ],
      "why": "bank transfer মানে ব্যাংকের মাধ্যমে টাকা পাঠানো। তাই ব্যাংক অ্যাকাউন্ট থাকা দরকার।"
    },
    {
      "say": "Please ask the accounts office.",
      "options": [
        {
          "t": "অনুগ্রহ করে বাড়ি যান",
          "ok": false
        },
        {
          "t": "অনুগ্রহ করে কাজ শেষ করুন",
          "ok": false
        },
        {
          "t": "অনুগ্রহ করে হিসাব বিভাগে জিজ্ঞেস করুন",
          "ok": true
        }
      ],
      "why": "ask মানে জিজ্ঞেস করা, accounts office মানে হিসাব বিভাগ। বেতনের প্রশ্নের জন্য সেখানেই যেতে হয়।"
    }
  ],
  "speak": [
    0,
    3,
    4
  ],
  "dialogue": [
    {
      "boss": "Your first month is finished. Do you have any question?",
      "bn": "তোমার প্রথম মাস শেষ। তোমার কোনো প্রশ্ন আছে?",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. When is payday? And how will I get the salary?",
          "reply": "Salary comes on the fifth. We pay by bank transfer.",
          "replyBn": "পাঁচ তারিখে বেতন আসে। আমরা ব্যাংকের মাধ্যমে দিই।",
          "tip": "দারুণ! কবে পাবেন আর কীভাবে পাবেন, দুটোই জেনে নিলেন।"
        },
        {
          "stars": 2,
          "en": "No question.",
          "reply": "Okay. Please ask if you need anything.",
          "replyBn": "ঠিক আছে। কিছু লাগলে জিজ্ঞেস করো।",
          "tip": "বেতনের তারিখ না জানলে পরে চিন্তা বাড়ে। জিজ্ঞেস করুন: \"When is payday, sir?\""
        },
        {
          "stars": 1,
          "en": "Give me money now.",
          "reply": "Please talk politely. Payday is not today.",
          "replyBn": "ভদ্রভাবে কথা বলো। আজ বেতনের দিন নয়।",
          "tip": "হুকুমের সুরে না বলে ভদ্রভাবে জিজ্ঞেস করুন: \"When is payday, please?\""
        }
      ]
    },
    {
      "boss": "Yes? What is the matter?",
      "bn": "হ্যাঁ? কী ব্যাপার?",
      "choices": [
        {
          "stars": 3,
          "en": "Sorry, sir. I did not get my salary yet. Can you please check?",
          "reply": "Okay. I will ask the accounts office today.",
          "replyBn": "ঠিক আছে। আমি আজ হিসাব বিভাগে জিজ্ঞেস করব।",
          "tip": "চমৎকার! দুঃখ প্রকাশ করে ভদ্রভাবে সমস্যা জানিয়েছেন। এতে সমাধান দ্রুত হয়।"
        },
        {
          "stars": 2,
          "en": "No salary.",
          "reply": "What do you mean? Please tell me clearly.",
          "replyBn": "মানে কী? পরিষ্কার করে বলো।",
          "tip": "দুই শব্দে বোঝা কঠিন। পুরো বাক্যে বলুন: \"I did not get my salary yet.\""
        },
        {
          "stars": 1,
          "en": "You did not pay me. You are a cheat.",
          "reply": "Please don't say that. Let me check.",
          "replyBn": "এমন বোলো না। আমাকে দেখতে দাও।",
          "tip": "অভিযোগ বা গালমন্দ করলে সমস্যা বাড়ে। শান্তভাবে বলুন: \"I did not get my salary yet. Can you check, please?\""
        }
      ]
    },
    {
      "boss": "Here is your payslip. Please check it.",
      "bn": "এই নাও তোমার পে-স্লিপ। দেখে নাও।",
      "choices": [
        {
          "stars": 3,
          "en": "Thank you, sir. Why is this amount deducted? Can you explain, please?",
          "reply": "That is for food. It is in your contract.",
          "replyBn": "এটা খাবারের জন্য। এটা তোমার চুক্তিতে আছে।",
          "tip": "ঠিক! ভদ্রভাবে কাটার কারণ জিজ্ঞেস করা সম্পূর্ণ স্বাভাবিক। চুক্তির কাগজটাও সবসময় নিজের কাছে রাখুন।"
        },
        {
          "stars": 2,
          "en": "Okay.",
          "reply": "Good. Please sign here.",
          "replyBn": "ভালো। এখানে সই করো।",
          "tip": "না বুঝে সই করবেন না। কোনো টাকা কাটা থাকলে জিজ্ঞেস করুন: \"Why is this deducted?\""
        },
        {
          "stars": 1,
          "en": "This is wrong! Give me full money!",
          "reply": "Please calm down. We can check it together.",
          "replyBn": "শান্ত হও। আমরা একসাথে দেখতে পারি।",
          "tip": "রেগে দাবি করার আগে কারণ জিজ্ঞেস করুন। তাতে সমাধান সহজ হয়।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "বেতনের তারিখ না জেনেই কাজ চালিয়ে যাওয়া কি ভালো?",
      "a": false,
      "why": "না। শুরুতেই জেনে নিন: \"When is payday?\" এতে পরে ভুল বোঝাবুঝি হয় না।"
    },
    {
      "q": "\"Payslip\" মানে কি বেতনের হিসাবের কাগজ?",
      "a": true,
      "why": "ঠিক। পে-স্লিপে বেতন, ওভারটাইম আর কাটা টাকার হিসাব থাকে। এটা নিজের কাছে রাখুন।"
    },
    {
      "q": "বেতন না পেলে ভদ্রভাবে \"I did not get my salary yet\" বলা কি ভালো?",
      "a": true,
      "why": "ঠিক। শান্ত আর পরিষ্কার করে বললে সমস্যা দ্রুত মেটে।"
    },
    {
      "q": "\"Deducted\" মানে কি বেতন থেকে টাকা কাটা?",
      "a": true,
      "why": "ঠিক। কাটা থাকলে জিজ্ঞেস করুন: \"Why is this amount deducted?\""
    }
  ],
  "hook": {
    "en": "Can I see my payslip, please?",
    "bn": "আমি কি আমার পে-স্লিপ দেখতে পারি?"
  },
  "traps": [
    {
      "title": "বেতনের তিন শব্দ",
      "intro": "একই কাগজে এই শব্দগুলো থাকে।",
      "items": [
        {
          "en": "salary",
          "note": "মাসের বেতন",
          "say": "salary"
        },
        {
          "en": "payslip",
          "note": "বেতনের হিসাবের কাগজ",
          "say": "payslip"
        },
        {
          "en": "deduction",
          "note": "কেটে নেওয়া টাকা",
          "say": "deduction"
        }
      ],
      "tip": "টাকা কম মনে হলে payslip দেখে deduction মিলিয়ে নিন।"
    },
    {
      "title": "included আর not included",
      "intro": "ওভারটাইম ধরা আছে কি না।",
      "items": [
        {
          "en": "Overtime is included.",
          "note": "ওভারটাইম ধরা আছে",
          "say": "Overtime is included."
        },
        {
          "en": "Overtime is not included.",
          "note": "ওভারটাইম ধরা নেই",
          "say": "Overtime is not included."
        }
      ],
      "tip": "not শুনলে মানে উল্টে যায়। সন্দেহ হলে আবার জিজ্ঞেস করুন।"
    }
  ],
  "typing": [
    {
      "ask": "কত তারিখে বেতন? সংখ্যা লিখুন",
      "say": "Salary comes on the fifth of every month.",
      "num": true,
      "answers": [
        "5"
      ],
      "show": "5",
      "why": "fifth = ৫ম",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Can I see my ___, please?",
      "answers": [
        "payslip"
      ],
      "show": "payslip",
      "why": "payslip = বেতনের কাগজ",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Why is this amount ___?",
      "answers": [
        "deducted"
      ],
      "show": "deducted",
      "why": "deducted = কেটে নেওয়া হয়েছে",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "mission": {
    "title": "আজ বলুন",
    "intro": "আজ বাস্তবে অন্তত একবার এই বাক্যগুলোর একটা বলে দেখুন।",
    "items": [
      {
        "en": "When is payday?",
        "bn": "বেতন কবে দেওয়া হয়?"
      },
      {
        "en": "Can I see my payslip, please?",
        "bn": "আমি কি আমার বেতনের হিসাব (পে-স্লিপ) দেখতে পারি, দয়া করে?"
      },
      {
        "en": "I did not get my salary yet.",
        "bn": "আমি এখনো বেতন পাইনি।"
      }
    ],
    "tip": "শেখা বাক্য বাস্তবে একবার বললেই মনে থাকে। সাধারণ সচেতনতার জন্য।"
  },
  "spot": [
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Your first month is finished. Do you have any question? — তোমার প্রথম মাস শেষ। তোমার কোনো প্রশ্ন আছে?",
      "options": [
        {
          "t": "Give me money now.",
          "ok": true
        },
        {
          "t": "Yes, sir. When is payday? And how will I get the salary?",
          "ok": false
        },
        {
          "t": "No question.",
          "ok": false
        }
      ],
      "why": "হুকুমের সুরে না বলে ভদ্রভাবে জিজ্ঞেস করুন: \"When is payday, please?\""
    },
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Here is your payslip. Please check it. — এই নাও তোমার পে-স্লিপ। দেখে নাও।",
      "options": [
        {
          "t": "This is wrong! Give me full money!",
          "ok": true
        },
        {
          "t": "Thank you, sir. Why is this amount deducted? Can you explain, please?",
          "ok": false
        },
        {
          "t": "Okay.",
          "ok": false
        }
      ],
      "why": "রেগে দাবি করার আগে কারণ জিজ্ঞেস করুন। তাতে সমাধান সহজ হয়।"
    }
  ]
};
