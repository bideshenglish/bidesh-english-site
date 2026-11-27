window.LESSON = {
  "id": "professors-advisors",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    1,
    5,
    6,
    7,
    8
  ],
  "who": "প্রফেসর",
  "title": "Talking to Professors & Advisors",
  "titleBn": "প্রফেসর ও অ্যাডভাইজারের সাথে কথা",
  "next": {
    "title": "Library, Labs & Campus Services",
    "id": "library-labs-services"
  },
  "scene": "প্রফেসরের কাছে যেতে ভয় লাগে? অফিস আওয়ারে যাওয়াই নিয়ম। আগে নাম, ক্লাস আর কী জানতে চান, বলুন।",
  "hook": {
    "en": "I have a question about the assignment.",
    "bn": "অ্যাসাইনমেন্ট নিয়ে আমার একটা প্রশ্ন আছে।"
  },
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "Hello, Professor Smith. I'm Rahim from your Tuesday class.",
      "bn": "হ্যালো, প্রফেসর স্মিথ। আমি আপনার মঙ্গলবারের ক্লাসের রহিম।",
      "pr": "হ্যালো, প্রফেসর স্মিথ। আয়াম রহিম ফ্রম ইয়োর টিউজডে ক্লাস।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Do you have a few minutes?",
      "bn": "আপনার কি কয়েক মিনিট সময় আছে?",
      "pr": "ডু ইউ হ্যাভ আ ফিউ মিনিটস?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I have a question about the assignment.",
      "bn": "অ্যাসাইনমেন্ট নিয়ে আমার একটা প্রশ্ন আছে।",
      "pr": "আই হ্যাভ আ কোয়েশ্চন অ্যাবাউট দি অ্যাসাইনমেন্ট।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I can't make your office hours. Could we meet at another time?",
      "bn": "আপনার অফিস আওয়ারে আসতে পারব না। অন্য সময় দেখা করা যাবে?",
      "pr": "আই ক্যান্ট মেইক ইয়োর অফিস আওয়ার্স। কুড উই মিট অ্যাট অ্যানাদার টাইম?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "What can I do to improve my work?",
      "bn": "আমার কাজ ভালো করতে কী করতে পারি?",
      "pr": "হোয়াট ক্যান আই ডু টু ইমপ্রুভ মাই ওয়ার্ক?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Thank you for your time.",
      "bn": "আপনার সময়ের জন্য ধন্যবাদ।",
      "pr": "থ্যাঙ্ক ইউ ফর ইয়োর টাইম।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "What can I help you with?",
      "bn": "আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
      "pr": "হোয়াট ক্যান আই হেল্প ইউ উইথ?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Come by during my office hours.",
      "bn": "আমার অফিস আওয়ারে আসুন।",
      "pr": "কাম বাই ডিউরিং মাই অফিস আওয়ার্স।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "It's in the syllabus.",
      "bn": "এটা সিলেবাসে আছে।",
      "pr": "ইটস ইন দি সিলেবাস।"
    }
  ],
  "traps": [
    {
      "title": "ইমেইলের শুরু ও শেষ",
      "intro": "প্রফেসরকে ইমেইল লেখার নিয়ম সহজ। বিষয়ে সংক্ষেপে কারণ লিখুন, শুরুতে ভদ্র সম্বোধন দিন।",
      "items": [
        {
          "en": "Dear Professor Smith,",
          "note": "সবচেয়ে নিরাপদ সম্বোধন",
          "say": "Dear Professor Smith"
        },
        {
          "en": "Question about Week 3 reading",
          "note": "বিষয়ের উদাহরণ: কোর্স নম্বর বা সপ্তাহসহ",
          "say": "Question about Week 3 reading"
        },
        {
          "en": "Thank you for your time. Best regards, Rahim",
          "note": "সময়ের জন্য ধন্যবাদ। শুভেচ্ছান্তে, রহিম",
          "say": "Thank you for your time. Best regards, Rahim"
        }
      ],
      "tip": "উত্তর ক্যারোলাইনা বিশ্ববিদ্যালয়ের লার্নিং সেন্টার বলে: \"Dear Professor [পদবি]\" সবচেয়ে নিরাপদ। \"Hey Professor\" লিখবেন না। বানান আর বিরামচিহ্ন ঠিক রাখুন।"
    },
    {
      "title": "অফিস আওয়ারে কী বলবেন",
      "intro": "অফিস আওয়ার মানে প্রফেসর নির্দিষ্ট সময় অফিসে থাকেন। সেখানে যাওয়া স্বাভাবিক। লাইন থাকলে অপেক্ষা করুন।",
      "items": [
        {
          "en": "I'm in your Tuesday class. May I ask about the assignment?",
          "note": "আমি আপনার মঙ্গলবারের ক্লাসে। অ্যাসাইনমেন্ট নিয়ে জিজ্ঞেস করতে পারি?",
          "say": "I'm in your Tuesday class. May I ask about the assignment?"
        },
        {
          "en": "I'd like to meet, but I can't make your office hours.",
          "note": "দেখা করতে চাই, কিন্তু আপনার অফিস আওয়ারে আসতে পারব না",
          "say": "I'd like to meet, but I can't make your office hours."
        },
        {
          "en": "Could I make an appointment?",
          "note": "আমি কি সময় ঠিক করে নিতে পারি?",
          "say": "Could I make an appointment?"
        }
      ],
      "tip": "ওরেগন বিশ্ববিদ্যালয়ের নির্দেশিকা: অফিস আওয়ারে সাধারণত যে আগে আসে সে আগে সুযোগ পায়। প্রশ্ন লিখে নিন, লেখা ও নোট সাথে আনুন। দরকারি হলে নিজের নাম, ক্লাস আর কী জানতে চান বলুন।"
    },
    {
      "title": "সাবধান! ইমেইলে যা করবেন না",
      "intro": "কিছু ভুল প্রফেসরকে বিরক্ত করে। এগুলো আগে থেকে জানা থাকলে বেঁচে যাবেন।",
      "items": [
        {
          "en": "I checked the syllabus, but I couldn't find the answer.",
          "note": "সিলেবাসে দেখেছি, কিন্তু উত্তর পাইনি",
          "say": "I checked the syllabus, but I couldn't find the answer."
        },
        {
          "en": "Could we talk about my grade in person?",
          "note": "আমার গ্রেড নিয়ে সামনাসামনি কথা বলা যাবে?",
          "say": "Could we talk about my grade in person?"
        },
        {
          "en": "Thank you for your reply.",
          "note": "উত্তরের জন্য ধন্যবাদ",
          "say": "Thank you for your reply."
        }
      ],
      "tip": "সিলেবাসে আছে এমন প্রশ্ন ইমেইলে করবেন না। সাথে সাথে উত্তর আশা করবেন না, সাধারণত ২৪ ঘণ্টা সময় ধরা হয়। গ্রেড নিয়ে অভিযোগ ইমেইলে নয়, সামনাসামনি করুন। উত্তর পেলে ধন্যবাদ জানান।"
    }
  ],
  "listening": [
    {
      "say": "My office hours are Monday from two to four.",
      "options": [
        {
          "t": "আমার অফিস আওয়ার সোমবার দুইটা থেকে চারটা",
          "ok": true
        },
        {
          "t": "আমার অফিস আওয়ার মঙ্গলবার দুইটা থেকে চারটা",
          "ok": false
        },
        {
          "t": "আমার অফিস আওয়ার সোমবার বারোটা থেকে চারটা",
          "ok": false
        }
      ],
      "why": "Monday = সোমবার। two = ২, four = ৪। দিন আর সময় দুটোই লিখে নিন।"
    },
    {
      "say": "Please email me before you come.",
      "options": [
        {
          "t": "আসার আগে আমাকে ইমেইল করুন",
          "ok": true
        },
        {
          "t": "আসার পরে আমাকে ইমেইল করুন",
          "ok": false
        },
        {
          "t": "আজ আসবেন না",
          "ok": false
        }
      ],
      "why": "before = আগে। after = পরে। দুটো মিলিয়ে ফেলবেন না।"
    },
    {
      "say": "I'm out of the office this week. Come next Wednesday.",
      "options": [
        {
          "t": "এই সপ্তাহে আমি অফিসে নেই। আগামী বুধবার আসুন",
          "ok": true
        },
        {
          "t": "এই সপ্তাহে আমি অফিসে আছি। আজই আসুন",
          "ok": false
        },
        {
          "t": "আগামী বুধবার ক্লাস নেই",
          "ok": false
        }
      ],
      "why": "out of the office = অফিসের বাইরে। next Wednesday = আগামী বুধবার।"
    },
    {
      "say": "Bring your paper and your questions.",
      "options": [
        {
          "t": "আপনার লেখা আর প্রশ্নগুলো নিয়ে আসুন",
          "ok": true
        },
        {
          "t": "শুধু বই নিয়ে আসুন",
          "ok": false
        },
        {
          "t": "কিছু আনতে হবে না",
          "ok": false
        }
      ],
      "why": "paper = লেখা বা পেপার। bring = সাথে আনা।"
    }
  ],
  "typing": [
    {
      "ask": "কত নম্বর রুম? সংখ্যা লিখুন",
      "say": "My office is in room thirty.",
      "num": true,
      "answers": [
        "30"
      ],
      "show": "30",
      "why": "thirty = ৩০। thirteen হলে ১৩।",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Could we meet at another ___?",
      "answers": [
        "time"
      ],
      "show": "time",
      "why": "another time = অন্য সময়",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "What can I do to ___ my work?",
      "answers": [
        "improve"
      ],
      "show": "improve",
      "why": "improve = উন্নত করা",
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
      "boss": "Come in. What can I help you with?",
      "bn": "ভেতরে আসুন। আমি কীভাবে সাহায্য করতে পারি? (প্রফেসরের অফিসের দরজায়)",
      "choices": [
        {
          "stars": 3,
          "en": "Hello, Professor Smith. I'm Rahim from your Tuesday class. I have a question about the assignment.",
          "reply": "Sure. Which part?",
          "replyBn": "অবশ্যই। কোন অংশ?",
          "tip": "নাম, ক্লাস আর কী জানতে চান, তিনটাই বলেছেন। প্রফেসর সাথে সাথে বুঝে যান।"
        },
        {
          "stars": 2,
          "en": "Hello. I have a question.",
          "reply": "Which class are you in?",
          "replyBn": "তুমি কোন ক্লাসে?",
          "tip": "ঠিক, কিন্তু প্রফেসর আপনাকে চেনেন না। নাম আর ক্লাস আগে বলুন।"
        },
        {
          "stars": 1,
          "en": "I don't understand anything.",
          "reply": "Hmm. Please be more specific.",
          "replyBn": "হুম। একটু নির্দিষ্ট করে বলুন।",
          "tip": "\"কিছুই বুঝি না\" বললে প্রফেসর সাহায্য করতে পারেন না। কোন অংশ বোঝেননি, সেটা বলুন।"
        }
      ]
    },
    {
      "boss": "Your last paper was below average.",
      "bn": "তোমার আগের পেপারটা গড়ের নিচে ছিল। (প্রফেসর শান্তভাবে বলছেন)",
      "choices": [
        {
          "stars": 3,
          "en": "Thank you for telling me. What can I do to improve my next paper?",
          "reply": "Start earlier, and show me an outline.",
          "replyBn": "আগে শুরু করো, আর আমাকে একটা রূপরেখা দেখাও।",
          "tip": "ধন্যবাদ আর উন্নতির উপায় জিজ্ঞেস করা, দুটোই ভালো। ওরেগন বিশ্ববিদ্যালয়ের পরামর্শও এটাই।"
        },
        {
          "stars": 2,
          "en": "Can I still get an A?",
          "reply": "Let's focus on your next paper first.",
          "replyBn": "আগে পরের পেপারের কথা ভাবি।",
          "tip": "গ্রেডের কথা না তুলে কীভাবে ভালো করা যায় তা জিজ্ঞেস করুন।"
        },
        {
          "stars": 1,
          "en": "That is not fair!",
          "reply": "Please stay calm.",
          "replyBn": "শান্ত থাকুন।",
          "tip": "রাগ দেখালে কথা এগোয় না। শান্তভাবে কারণ জিজ্ঞেস করুন।"
        }
      ]
    },
    {
      "boss": "See me after class if you have questions.",
      "bn": "প্রশ্ন থাকলে ক্লাসের পর আমার সাথে দেখা করো। (কিন্তু আপনার আরেকটা ক্লাস আছে)",
      "choices": [
        {
          "stars": 3,
          "en": "Thank you. I have another class after this. Could we meet on Wednesday afternoon?",
          "reply": "Sure, Wednesday at three.",
          "replyBn": "অবশ্যই, বুধবার তিনটায়।",
          "tip": "কেন পারছেন না তা বলেছেন আর অন্য সময় প্রস্তাব দিয়েছেন। এটাই সঠিক পথ।"
        },
        {
          "stars": 2,
          "en": "I'm busy.",
          "reply": "Then email me.",
          "replyBn": "তাহলে ইমেইল করো।",
          "tip": "রুক্ষ শোনায়। কেন ব্যস্ত তা বলুন আর অন্য সময় চান।"
        },
        {
          "stars": 1,
          "en": "Okay.",
          "reply": "See you.",
          "replyBn": "দেখা হবে।",
          "tip": "যেতে না পারলে বলে দিন। না গেলে প্রশ্নের উত্তর পাবেন না।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "ইমেইলে \"Dear Professor [পদবি],\" কি সবচেয়ে নিরাপদ সম্বোধন?",
      "a": true,
      "why": "হ্যাঁ। প্রফেসরের ডিগ্রি জানা না থাকলেও এটা ভুল হয় না।"
    },
    {
      "q": "প্রফেসরকে ইমেইলে \"Hey Professor\" লেখা কি ভদ্র?",
      "a": false,
      "why": "না। \"Dear Professor Smith,\" লিখুন।"
    },
    {
      "q": "অফিস আওয়ারে লাইন থাকলে চলে যাওয়া কি ঠিক?",
      "a": false,
      "why": "না। লাইন থাকা স্বাভাবিক। অপেক্ষা করুন, বা অন্য সময় চান।"
    },
    {
      "q": "ইমেইল পাঠিয়ে সাথে সাথে উত্তর আশা করা কি ঠিক?",
      "a": false,
      "why": "না। সাধারণত ২৪ ঘণ্টা সময় ধরা হয়। উত্তর পেলে ধন্যবাদ জানান।"
    },
    {
      "q": "\"What can I do to improve?\" বলা কি ভালো?",
      "a": true,
      "why": "হ্যাঁ। প্রফেসরকে বোঝায় যে আপনি ভালো করার চেষ্টা করছেন।"
    }
  ]
};
