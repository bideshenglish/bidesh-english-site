window.LESSON = {
  "id": "library-labs-services",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    1,
    2,
    6,
    7,
    8
  ],
  "who": "লাইব্রেরিয়ান",
  "title": "Library, Labs & Campus Services",
  "titleBn": "লাইব্রেরি, ল্যাব ও ক্যাম্পাস সেবা",
  "next": {
    "title": "Exams, Deadlines & Asking for Extensions",
    "id": "exams-deadlines-extensions"
  },
  "scene": "ক্যাম্পাসে অনেক সেবা বিনামূল্যে পাওয়া যায়, কিন্তু না জিজ্ঞেস করলে কেউ বলে না।",
  "hook": {
    "en": "How do I borrow this book?",
    "bn": "এই বইটা কীভাবে ধার নেব?"
  },
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "How do I borrow this book?",
      "bn": "এই বইটা কীভাবে ধার নেব?",
      "pr": "হাউ ডু আই বরো দিস বুক?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I renew this book?",
      "bn": "এই বইয়ের মেয়াদ বাড়ানো যাবে?",
      "pr": "ক্যান আই রিনিউ দিস বুক?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "When is it due?",
      "bn": "কবে ফেরত দিতে হবে?",
      "pr": "হোয়েন ইজ ইট ডিউ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Where can I print my assignment?",
      "bn": "আমার অ্যাসাইনমেন্ট কোথায় প্রিন্ট করব?",
      "pr": "হোয়ার ক্যান আই প্রিন্ট মাই অ্যাসাইনমেন্ট?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "How do I book a study room?",
      "bn": "স্টাডি রুম কীভাবে বুক করব?",
      "pr": "হাউ ডু আই বুক আ স্টাডি রুম?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Could you help me find this book?",
      "bn": "এই বইটা খুঁজে পেতে সাহায্য করবেন?",
      "pr": "কুড ইউ হেল্প মি ফাইন্ড দিস বুক?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Please swipe your student ID.",
      "bn": "আপনার স্টুডেন্ট আইডি স্ক্যান করুন।",
      "pr": "প্লিজ সোয়াইপ ইয়োর স্টুডেন্ট আইডি।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "It's a short loan item.",
      "bn": "এটা অল্প সময়ের জন্য ধার নেওয়ার বই।",
      "pr": "ইটস আ শর্ট লোন আইটেম।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Please keep your voice down.",
      "bn": "দয়া করে আস্তে কথা বলুন।",
      "pr": "প্লিজ কিপ ইয়োর ভয়েস ডাউন।"
    }
  ],
  "traps": [
    {
      "title": "আইডি কার্ড আর ধার নেওয়া",
      "intro": "অনেক বিশ্ববিদ্যালয়ে স্টুডেন্ট আইডি কার্ডই লাইব্রেরি কার্ড। বই কতদিন রাখা যাবে, তা বইয়ের ধরনের ওপর নির্ভর করে।",
      "items": [
        {
          "en": "Here is my student ID card.",
          "note": "এই আমার স্টুডেন্ট আইডি কার্ড",
          "say": "Here is my student ID card."
        },
        {
          "en": "How long can I keep this book?",
          "note": "এই বই কতদিন রাখতে পারব?",
          "say": "How long can I keep this book?"
        },
        {
          "en": "Is this a reference book?",
          "note": "এটা কি শুধু লাইব্রেরিতে পড়ার বই?",
          "say": "Is this a reference book?"
        }
      ],
      "tip": "লন্ডনের ইউসিএল-এর নিয়ম: আইডি কার্ড দিয়েই ঢোকা ও ধার নেওয়া যায়। \"Reference\" বই বাড়ি নেওয়া যায় না। \"Short loan\" বই মেয়াদ বাড়ানো যায় না। নিয়ম বিশ্ববিদ্যালয়ভেদে আলাদা, তাই লাইব্রেরির ডেস্কে জিজ্ঞেস করুন।"
    },
    {
      "title": "সাবধান! দেরি আর জরিমানা",
      "intro": "বই দেরিতে ফেরত দিলে জরিমানা হতে পারে। আগে থেকে মেয়াদ বাড়ানোর চেষ্টা করুন।",
      "items": [
        {
          "en": "Can I renew this book online?",
          "note": "অনলাইনে মেয়াদ বাড়ানো যাবে?",
          "say": "Can I renew this book online?"
        },
        {
          "en": "Someone has requested this book.",
          "note": "কেউ এই বই চেয়েছে (তাই মেয়াদ বাড়বে না)",
          "say": "Someone has requested this book."
        },
        {
          "en": "I'm sorry, it's late. Is there a fine?",
          "note": "দুঃখিত, দেরি হয়ে গেছে। জরিমানা আছে?",
          "say": "I'm sorry, it's late. Is there a fine?"
        }
      ],
      "tip": "ইউসিএল-এ বই অন্য কেউ না চাইলে স্বয়ংক্রিয়ভাবে মেয়াদ বাড়ে। কেউ চেয়ে রাখলে ফেরত দিতেই হয়, দেরি করলে জরিমানা। নিজের লাইব্রেরি অ্যাকাউন্টে দেখে নিন। পাসওয়ার্ড কাউকে দেবেন না।"
    },
    {
      "title": "সাহায্য চাইতে লজ্জা নেই",
      "intro": "লাইব্রেরিয়ানরা সাহায্যের জন্যই আছেন। বই খোঁজা, রিসার্চ, স্টাডি রুম বুক, সবই জিজ্ঞেস করা যায়।",
      "items": [
        {
          "en": "Excuse me, could you help me find sources for my essay?",
          "note": "আমার রচনার জন্য তথ্য খুঁজে পেতে সাহায্য করবেন?",
          "say": "Excuse me, could you help me find sources for my essay?"
        },
        {
          "en": "Is there a chat service?",
          "note": "চ্যাটে জিজ্ঞেস করার সুবিধা আছে?",
          "say": "Is there a chat service?"
        },
        {
          "en": "Could I make an appointment with a librarian?",
          "note": "লাইব্রেরিয়ানের সাথে সময় ঠিক করা যাবে?",
          "say": "Could I make an appointment with a librarian?"
        }
      ],
      "tip": "ওয়্যোমিং বিশ্ববিদ্যালয়ে লাইব্রেরিয়ানের সাথে চ্যাট, ইমেইল, সময় ঠিক করে দেখা, সবই চলে। বিষয়ভিত্তিক লাইব্রেরিয়ান আর ছাত্র-সহায়ক (peer coach) আছেন। স্টাডি রুম অনলাইনে আগে বুক করে রাখা ভালো।"
    }
  ],
  "listening": [
    {
      "say": "Swipe your student ID here.",
      "options": [
        {
          "t": "আপনার স্টুডেন্ট আইডি এখানে স্ক্যান করুন",
          "ok": true
        },
        {
          "t": "আপনার স্টুডেন্ট আইডি আমাকে দিন",
          "ok": false
        },
        {
          "t": "আপনার স্টুডেন্ট আইডি হারিয়ে গেছে",
          "ok": false
        }
      ],
      "why": "swipe = কার্ড মেশিনে স্পর্শ বা স্লাইড করা। here = এখানে।"
    },
    {
      "say": "Please return it in two weeks.",
      "options": [
        {
          "t": "দুই সপ্তাহের মধ্যে ফেরত দিন",
          "ok": true
        },
        {
          "t": "দুই দিনের মধ্যে ফেরত দিন",
          "ok": false
        },
        {
          "t": "ফেরত দিতে হবে না",
          "ok": false
        }
      ],
      "why": "two weeks = দুই সপ্তাহ। days = দিন। দুটো মিলিয়ে ফেলবেন না।"
    },
    {
      "say": "The study room is booked until three.",
      "options": [
        {
          "t": "স্টাডি রুম তিনটা পর্যন্ত বুক করা আছে",
          "ok": true
        },
        {
          "t": "স্টাডি রুম তেরোটা পর্যন্ত বুক করা আছে",
          "ok": false
        },
        {
          "t": "স্টাডি রুম ফাঁকা আছে",
          "ok": false
        }
      ],
      "why": "three = ৩, thirteen = ১৩। booked = বুক করা আছে। until = পর্যন্ত।"
    },
    {
      "say": "Someone has requested this book, so I can't renew it.",
      "options": [
        {
          "t": "কেউ এই বই চেয়েছে, তাই মেয়াদ বাড়াতে পারব না",
          "ok": true
        },
        {
          "t": "কেউ এই বই ফেরত দিয়েছে",
          "ok": false
        },
        {
          "t": "বইয়ের মেয়াদ বাড়ানো হয়েছে",
          "ok": false
        }
      ],
      "why": "requested = চেয়ে রেখেছে। can't renew = মেয়াদ বাড়ানো যাবে না।"
    }
  ],
  "typing": [
    {
      "ask": "কয়টা বই? সংখ্যা লিখুন",
      "say": "You can borrow ten books.",
      "num": true,
      "answers": [
        "10"
      ],
      "show": "10",
      "why": "ten = ১০। tenth হলে দশম।",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "How do I ___ this book?",
      "answers": [
        "borrow"
      ],
      "show": "borrow",
      "why": "borrow = ধার নেওয়া",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Can I ___ it for another week?",
      "answers": [
        "renew"
      ],
      "show": "renew",
      "why": "renew = মেয়াদ বাড়ানো",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [
    0,
    1,
    4
  ],
  "dialogue": [
    {
      "boss": "Hi. How can I help you?",
      "bn": "হাই। আমি কীভাবে সাহায্য করতে পারি? (লাইব্রেরির ডেস্কে)",
      "choices": [
        {
          "stars": 3,
          "en": "Hi. I'd like to borrow this book. Here is my student ID.",
          "reply": "Sure. You can keep it for two weeks.",
          "replyBn": "অবশ্যই। আপনি এটা দুই সপ্তাহ রাখতে পারবেন।",
          "tip": "কী চান আর আইডি, দুটোই দিয়েছেন। কাজ সহজে হয়ে গেল।"
        },
        {
          "stars": 2,
          "en": "Borrow.",
          "reply": "Okay. ID card, please?",
          "replyBn": "ঠিক আছে। আইডি কার্ড দেবেন?",
          "tip": "বোঝা যায়, কিন্তু একটা শব্দ রুক্ষ। \"I'd like to borrow this book\" বলুন।"
        },
        {
          "stars": 1,
          "en": "Can I just take it home?",
          "reply": "You need to check it out first with your ID.",
          "replyBn": "আগে আইডি দিয়ে বইটা নিবন্ধন করাতে হবে।",
          "tip": "নিবন্ধন ছাড়া বই নেওয়া যায় না। আইডি কার্ড দেখান আর \"How do I borrow this book?\" জিজ্ঞেস করুন।"
        }
      ]
    },
    {
      "boss": "This book is due tomorrow.",
      "bn": "এই বই কাল ফেরত দিতে হবে। (লাইব্রেরিয়ান)",
      "choices": [
        {
          "stars": 3,
          "en": "Could I renew it for another week, please?",
          "reply": "Let me check. Someone has requested it, so I can't renew it. Please return it tomorrow.",
          "replyBn": "দেখছি। কেউ এটা চেয়ে রেখেছে, তাই মেয়াদ বাড়ানো যাবে না। কাল ফেরত দিন।",
          "tip": "ভদ্রভাবে জিজ্ঞেস করেছেন আর উত্তর জেনে গেলেন। এখন কাল ফেরত দিলেই জরিমানা নেই।"
        },
        {
          "stars": 2,
          "en": "I will return it late.",
          "reply": "There may be a fine.",
          "replyBn": "জরিমানা হতে পারে।",
          "tip": "দেরি করা ঝুঁকির। আগে মেয়াদ বাড়াতে চান।"
        },
        {
          "stars": 1,
          "en": "I'll keep it. I'm still reading.",
          "reply": "Please return it. Others are waiting.",
          "replyBn": "ফেরত দিন। অন্যরা অপেক্ষায় আছে।",
          "tip": "অন্য কেউ চেয়ে থাকলে রাখা যায় না। আগে জিজ্ঞেস করুন।"
        }
      ]
    },
    {
      "boss": "Study rooms are booked online. Would you like to book one?",
      "bn": "স্টাডি রুম অনলাইনে বুক করতে হয়। আপনি কি একটা বুক করবেন? (ডেস্কের কর্মী)",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, please. Is there a room free tomorrow at three?",
          "reply": "Yes. Room four is free.",
          "replyBn": "হ্যাঁ। চার নম্বর রুম ফাঁকা।",
          "tip": "সময় আর প্রশ্ন, দুটোই পরিষ্কার। এভাবেই জায়গা পাবেন।"
        },
        {
          "stars": 2,
          "en": "Where is the website?",
          "reply": "I'll show you.",
          "replyBn": "আমি দেখিয়ে দিচ্ছি।",
          "tip": "ভালো প্রশ্ন। সময়ও বলুন, তাহলে কাজ দ্রুত হবে।"
        },
        {
          "stars": 1,
          "en": "I'll just sit in an empty room.",
          "reply": "Please don't. It may be booked.",
          "replyBn": "দয়া করে না। বুক করা থাকতে পারে।",
          "tip": "ফাঁকা দেখালেও রুম বুক থাকতে পারে। আগে জিজ্ঞেস করুন।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "অনেক বিশ্ববিদ্যালয়ে স্টুডেন্ট আইডি কার্ডই কি লাইব্রেরি কার্ড?",
      "a": true,
      "why": "হ্যাঁ, ইউসিএল-এর নিয়ম এমন। তবে নিজের বিশ্ববিদ্যালয়ে ডেস্কে জিজ্ঞেস করে নিন।"
    },
    {
      "q": "\"Short loan\" বইয়ের মেয়াদ কি বাড়ানো যায়?",
      "a": false,
      "why": "না। সময় শেষে ফেরত দিতে হয়। ইউসিএল-এর নিয়ম এমন।"
    },
    {
      "q": "\"Reference\" বই কি বাড়ি নেওয়া যায়?",
      "a": false,
      "why": "না। এটা লাইব্রেরিতে বসে পড়তে হয়।"
    },
    {
      "q": "অন্য কেউ বই চেয়ে রাখলে কি মেয়াদ বাড়ানো যায়?",
      "a": false,
      "why": "না। তখন সময়মতো ফেরত দিন, নইলে জরিমানা হতে পারে।"
    },
    {
      "q": "রিসার্চে সাহায্যের জন্য লাইব্রেরিয়ানকে জিজ্ঞেস করা কি ঠিক?",
      "a": true,
      "why": "হ্যাঁ। লাইব্রেরিয়ানরা সাহায্যের জন্যই আছেন। চ্যাট বা সময় ঠিক করে দেখাও করা যায়।"
    }
  ],
  "mission": {
    "title": "আজ বলুন",
    "intro": "আজ বাস্তবে অন্তত একবার এই বাক্যগুলোর একটা বলে দেখুন।",
    "items": [
      {
        "en": "How do I borrow this book?",
        "bn": "এই বইটা কীভাবে ধার নেব?"
      },
      {
        "en": "Can I renew this book?",
        "bn": "এই বইয়ের মেয়াদ বাড়ানো যাবে?"
      },
      {
        "en": "How do I book a study room?",
        "bn": "স্টাডি রুম কীভাবে বুক করব?"
      }
    ],
    "tip": "শেখা বাক্য বাস্তবে একবার বললেই মনে থাকে। সাধারণ সচেতনতার জন্য।"
  },
  "spot": [
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Hi. How can I help you? — হাই। আমি কীভাবে সাহায্য করতে পারি? (লাইব্রেরির ডেস্কে)",
      "options": [
        {
          "t": "Can I just take it home?",
          "ok": true
        },
        {
          "t": "Hi. I'd like to borrow this book. Here is my student ID.",
          "ok": false
        },
        {
          "t": "Borrow.",
          "ok": false
        }
      ],
      "why": "নিবন্ধন ছাড়া বই নেওয়া যায় না। আইডি কার্ড দেখান আর \"How do I borrow this book?\" জিজ্ঞেস করুন।"
    },
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Study rooms are booked online. Would you like to book one? — স্টাডি রুম অনলাইনে বুক করতে হয়। আপনি কি একটা বুক করবেন? (ডেস্কের কর্মী)",
      "options": [
        {
          "t": "I'll just sit in an empty room.",
          "ok": true
        },
        {
          "t": "Yes, please. Is there a room free tomorrow at three?",
          "ok": false
        },
        {
          "t": "Where is the website?",
          "ok": false
        }
      ],
      "why": "ফাঁকা দেখালেও রুম বুক থাকতে পারে। আগে জিজ্ঞেস করুন।"
    }
  ]
};
