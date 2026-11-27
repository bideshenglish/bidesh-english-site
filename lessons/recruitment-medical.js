window.LESSON = {
  "id": "recruitment-medical",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    4,
    6,
    8
  ],
  "who": "এজেন্সির লোক / ডাক্তার",
  "title": "Recruitment Agency & Medical Test",
  "titleBn": "এজেন্সি ও মেডিকেল পরীক্ষা",
  "next": {
    "title": "Visa & Embassy Questions",
    "id": "visa-embassy"
  },
  "scene": "টাকা দেওয়া আর ডাক্তারের পরীক্ষা, দুটোতেই ইংরেজি লাগে। এটা ইংরেজির লেসন, সরকারি নিয়মের বিকল্প নয়।",
  "hook": {
    "en": "Can I get a receipt, please?",
    "bn": "রসিদ পেতে পারি, দয়া করে?"
  },
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "What is the total cost?",
      "bn": "মোট খরচ কত?",
      "pr": "হোয়াট ইজ দ্য টোটাল কস্ট?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "What does this payment include?",
      "bn": "এই টাকায় কী কী ধরা আছে?",
      "pr": "হোয়াট ডাজ দিস পেমেন্ট ইনক্লুড?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I get a receipt, please?",
      "bn": "রসিদ পেতে পারি, দয়া করে?",
      "pr": "ক্যান আই গেট আ রিসিট, প্লিজ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can you write the cost on paper?",
      "bn": "খরচটা কাগজে লিখে দিতে পারেন?",
      "pr": "ক্যান ইউ রাইট দ্য কস্ট অন পেপার?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Which company is my employer?",
      "bn": "আমার নিয়োগকর্তা কোন কোম্পানি?",
      "pr": "হুইচ কোম্পানি ইজ মাই এমপ্লয়ার?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I see my medical report?",
      "bn": "আমার মেডিকেল রিপোর্ট দেখতে পারি?",
      "pr": "ক্যান আই সি মাই মেডিকেল রিপোর্ট?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Please give a blood sample.",
      "bn": "রক্তের নমুনা দিন।",
      "pr": "প্লিজ গিভ আ ব্লাড স্যাম্পল।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Take a deep breath and hold it.",
      "bn": "গভীর শ্বাস নিয়ে ধরে রাখুন।",
      "pr": "টেক আ ডিপ ব্রেথ অ্যান্ড হোল্ড ইট।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "You are fit for work.",
      "bn": "আপনি কাজের জন্য উপযুক্ত।",
      "pr": "ইউ আর ফিট ফর ওয়ার্ক।"
    }
  ],
  "traps": [
    {
      "title": "fit আর unfit",
      "intro": "মেডিকেল রিপোর্টে এই দুটো শব্দ সবচেয়ে জরুরি।",
      "items": [
        {
          "en": "fit",
          "note": "কাজের উপযুক্ত",
          "say": "fit"
        },
        {
          "en": "unfit",
          "note": "উপযুক্ত নয়",
          "say": "unfit"
        },
        {
          "en": "repeat test",
          "note": "আবার পরীক্ষা",
          "say": "repeat test"
        }
      ],
      "tip": "রিপোর্টে কী লেখা, না বুঝলে জিজ্ঞেস করুন: \"Am I fit?\""
    },
    {
      "title": "receipt আর payment",
      "intro": "টাকা দেওয়া আর তার প্রমাণ আলাদা জিনিস।",
      "items": [
        {
          "en": "payment",
          "note": "টাকা দেওয়া",
          "say": "payment"
        },
        {
          "en": "receipt",
          "note": "টাকা দেওয়ার রসিদ",
          "say": "receipt"
        },
        {
          "en": "extra charge",
          "note": "বাড়তি খরচ",
          "say": "extra charge"
        }
      ],
      "tip": "টাকা দিলে রসিদ নিন। বাড়তি খরচ চাইলে জিজ্ঞেস করুন: \"What is this for?\""
    },
    {
      "title": "promise আর in writing",
      "intro": "মুখের কথা আর লিখিত কথা এক নয়।",
      "items": [
        {
          "en": "promise",
          "note": "মুখের কথা",
          "say": "promise"
        },
        {
          "en": "in writing",
          "note": "কাগজে লিখিত",
          "say": "in writing"
        }
      ],
      "tip": "বেতন, কাজ, খরচের কথা বললে বলুন: \"Can you give it in writing?\""
    }
  ],
  "listening": [
    {
      "say": "Please give a blood sample.",
      "options": [
        {
          "t": "রক্তের নমুনা দিন",
          "ok": true
        },
        {
          "t": "প্রস্রাবের নমুনা দিন",
          "ok": false
        },
        {
          "t": "ওজন মাপুন",
          "ok": false
        }
      ],
      "why": "blood = রক্ত। sample = নমুনা।"
    },
    {
      "say": "Take a deep breath and hold it.",
      "options": [
        {
          "t": "হাত তুলুন",
          "ok": false
        },
        {
          "t": "গভীর শ্বাস নিয়ে ধরে রাখুন",
          "ok": true
        },
        {
          "t": "দৌড়ে আসুন",
          "ok": false
        }
      ],
      "why": "এক্স-রের সময় এটা বলা হয়। breath = শ্বাস।"
    },
    {
      "say": "You are fit for work.",
      "options": [
        {
          "t": "আপনি অসুস্থ",
          "ok": false
        },
        {
          "t": "আবার পরীক্ষা লাগবে",
          "ok": false
        },
        {
          "t": "আপনি কাজের জন্য উপযুক্ত",
          "ok": true
        }
      ],
      "why": "fit = উপযুক্ত। উল্টো শব্দ unfit।"
    },
    {
      "say": "Please pay at the counter and take a receipt.",
      "options": [
        {
          "t": "কাউন্টারে টাকা দিয়ে রসিদ নিন",
          "ok": true
        },
        {
          "t": "টাকা আমাকে দিন",
          "ok": false
        },
        {
          "t": "কাল টাকা দেবেন",
          "ok": false
        }
      ],
      "why": "pay = টাকা দেওয়া। receipt = রসিদ।"
    }
  ],
  "typing": [
    {
      "ask": "রিপোর্ট কত দিনে? সংখ্যা লিখুন",
      "say": "Your report will be ready in three days.",
      "num": true,
      "answers": [
        "3"
      ],
      "show": "3",
      "why": "three = ৩",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "রসিদ চাইছেন। ফাঁকা ঘরে কী বসবে?",
      "en": "Can I get a ___, please?",
      "answers": [
        "receipt"
      ],
      "show": "receipt",
      "why": "receipt = রসিদ",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "What is the total ___?",
      "answers": [
        "cost",
        "price"
      ],
      "show": "cost",
      "why": "cost = খরচ",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [
    2,
    0,
    3
  ],
  "dialogue": [
    {
      "boss": "Give me the money today. No need for a receipt.",
      "bn": "আজ টাকা দিন। রসিদ লাগবে না।",
      "choices": [
        {
          "stars": 3,
          "en": "Sorry, I need a receipt, please.",
          "reply": "Okay, I will write it.",
          "replyBn": "ঠিক আছে, আমি লিখে দেব।",
          "tip": "ভদ্রভাবে স্পষ্ট বলেছেন। রসিদ আপনার প্রমাণ।"
        },
        {
          "stars": 2,
          "en": "Is a receipt necessary?",
          "reply": "Not really.",
          "replyBn": "তেমন না।",
          "tip": "প্রশ্ন করলে উত্তর \"না\" আসতে পারে। বলুন: \"I need a receipt.\""
        },
        {
          "stars": 1,
          "en": "Okay. Here is the money.",
          "reply": "Good.",
          "replyBn": "ভালো।",
          "tip": "রসিদ ছাড়া টাকা দিলে পরে প্রমাণ থাকে না।"
        }
      ]
    },
    {
      "boss": "You must pay extra for the visa.",
      "bn": "ভিসার জন্য বাড়তি টাকা দিতে হবে।",
      "choices": [
        {
          "stars": 3,
          "en": "What is this extra payment for? Can you write it down?",
          "reply": "I will write the details.",
          "replyBn": "আমি বিস্তারিত লিখে দেব।",
          "tip": "কীসের জন্য আর লিখিত, দুটোই চেয়েছেন। খুব ভালো।"
        },
        {
          "stars": 2,
          "en": "How much extra?",
          "reply": "Three hundred dollars.",
          "replyBn": "তিনশো ডলার।",
          "tip": "কত জেনেছেন। এবার কীসের জন্য, আর লিখিত চান।"
        },
        {
          "stars": 1,
          "en": "Okay, I will pay.",
          "reply": "Thank you.",
          "replyBn": "ধন্যবাদ।",
          "tip": "কীসের টাকা না জেনে দেবেন না।"
        }
      ]
    },
    {
      "boss": "Your report shows a problem. You need a repeat test.",
      "bn": "রিপোর্টে সমস্যা দেখা যাচ্ছে। আবার পরীক্ষা করতে হবে। (ডাক্তার বলছেন)",
      "choices": [
        {
          "stars": 3,
          "en": "What is the problem, doctor? Can I see the report?",
          "reply": "Yes, let me show you.",
          "replyBn": "হ্যাঁ, দেখাচ্ছি।",
          "tip": "শান্ত থেকে সমস্যা আর রিপোর্ট দেখতে চেয়েছেন।"
        },
        {
          "stars": 2,
          "en": "Am I fit?",
          "reply": "Not yet. Come after the test.",
          "replyBn": "এখনো না। পরীক্ষার পর আসুন।",
          "tip": "ভালো প্রশ্ন। সমস্যাটা কী, সেটাও জিজ্ঞেস করুন।"
        },
        {
          "stars": 1,
          "en": "Please make me fit. I will pay you.",
          "reply": "That is not allowed.",
          "replyBn": "এটা অনুমোদিত নয়।",
          "tip": "ভুয়া রিপোর্ট বিপদ ডাকে। বিদেশে ধরা পড়লে চাকরি যেতে পারে।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "টাকা দিলে রসিদ চাওয়া কি ঠিক?",
      "a": true,
      "why": "ঠিক। বলুন: \"Can I get a receipt, please?\""
    },
    {
      "q": "মুখের কথাই যথেষ্ট, লিখিত লাগে না?",
      "a": false,
      "why": "না। বলুন: \"Can you give it in writing?\""
    },
    {
      "q": "\"unfit\" মানে কি কাজের উপযুক্ত?",
      "a": false,
      "why": "না। unfit = উপযুক্ত নয়। fit = উপযুক্ত।"
    },
    {
      "q": "\"blood sample\" মানে কি রক্তের নমুনা?",
      "a": true,
      "why": "ঠিক। blood = রক্ত, sample = নমুনা।"
    },
    {
      "q": "কেউ টাকা নিয়ে পরীক্ষা ছাড়াই রিপোর্ট দিতে চাইলে নেওয়া কি নিরাপদ?",
      "a": false,
      "why": "না। ভুয়া রিপোর্ট বিদেশে ধরা পড়তে পারে। চাকরি যেতে পারে।"
    }
  ]
};
