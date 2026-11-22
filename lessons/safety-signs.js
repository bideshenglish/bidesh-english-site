window.LESSON = {
  "id": "safety-signs",
  "type": "A",
  "who": "সুপারভাইজার",
  "title": "Safety Signs & Warnings",
  "titleBn": "নিরাপত্তার চিহ্ন ও সতর্কবার্তা",
  "next": {
    "title": "Accident, Injury or Feeling Unwell",
    "id": "accident-unwell"
  },
  "scene": "লাল-হলুদ চিহ্নের মানে না জানলে বিপদ হতে পারে। আজ দরকারি চিহ্ন চিনবেন।",
  "phrases": [
    {
      "tag": "চিহ্নে লেখা থাকে, বুঝে নিন",
      "en": "Danger! Keep out.",
      "bn": "বিপদ! ভেতরে ঢুকবেন না।",
      "pr": "ডেঞ্জার! কিপ আউট।"
    },
    {
      "tag": "চিহ্নে লেখা থাকে, বুঝে নিন",
      "en": "No entry.",
      "bn": "ঢোকা নিষেধ।",
      "pr": "নো এন্ট্রি।"
    },
    {
      "tag": "চিহ্নে লেখা থাকে, বুঝে নিন",
      "en": "High voltage. Do not touch.",
      "bn": "উচ্চ বিদ্যুৎ। ছোঁবেন না।",
      "pr": "হাই ভোল্টেজ। ডু নট টাচ।"
    },
    {
      "tag": "চিহ্নে লেখা থাকে, বুঝে নিন",
      "en": "Emergency exit.",
      "bn": "জরুরি বের হওয়ার পথ।",
      "pr": "ইমারজেন্সি এক্সিট।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "What does this sign mean?",
      "bn": "এই চিহ্নের মানে কী?",
      "pr": "হোয়াট ডাজ দিস সাইন মিন?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Is it safe to go in here?",
      "bn": "এখানে ঢোকা কি নিরাপদ?",
      "pr": "ইজ ইট সেফ টু গো ইন হিয়ার?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Where is the emergency exit?",
      "bn": "জরুরি বের হওয়ার পথ কোথায়?",
      "pr": "হোয়ার ইজ দ্য ইমারজেন্সি এক্সিট?"
    }
  ],
  "listening": [
    {
      "say": "Danger! Keep out.",
      "options": [
        {
          "t": "বিপদ! ভেতরে ঢুকবেন না",
          "ok": true
        },
        {
          "t": "এখানে খাবার পাওয়া যায়",
          "ok": false
        },
        {
          "t": "এখানে বসুন",
          "ok": false
        }
      ],
      "why": "danger মানে বিপদ, keep out মানে ভেতরে ঢুকবেন না।"
    },
    {
      "say": "High voltage. Do not touch.",
      "options": [
        {
          "t": "পানি খান, ঠান্ডা আছে",
          "ok": false
        },
        {
          "t": "উচ্চ বিদ্যুৎ, ছোঁবেন না",
          "ok": true
        },
        {
          "t": "আলো জ্বালান",
          "ok": false
        }
      ],
      "why": "voltage মানে বিদ্যুতের চাপ। এই চিহ্নের জিনিস ছুঁলে মারাত্মক আঘাত লাগতে পারে।"
    },
    {
      "say": "Emergency exit.",
      "options": [
        {
          "t": "ঢোকার পথ বন্ধ",
          "ok": false
        },
        {
          "t": "টয়লেট এদিকে",
          "ok": false
        },
        {
          "t": "জরুরি বের হওয়ার পথ",
          "ok": true
        }
      ],
      "why": "exit মানে বের হওয়ার পথ। আগুন বা বিপদে এই পথ দিয়ে বের হতে হয়।"
    }
  ],
  "speak": [
    4,
    5,
    6
  ],
  "dialogue": [
    {
      "boss": "Do not go in there. It's dangerous.",
      "bn": "ওখানে ঢুকো না। বিপজ্জনক।",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. I understand. Thank you.",
          "reply": "Good. Stay safe.",
          "replyBn": "ভালো। নিরাপদে থাকো।",
          "tip": "ঠিক! বিপদের নির্দেশ বুঝলে পরিষ্কার জানিয়ে দিন।"
        },
        {
          "stars": 2,
          "en": "Okay.",
          "reply": "Please say \"Yes, sir.\" so I know you understood.",
          "replyBn": "\"Yes, sir\" বলো, যাতে আমি বুঝি তুমি বুঝেছ।",
          "tip": "শুধু \"Okay\" বললে সুপারভাইজার বোঝেন না আপনি বুঝেছেন কি না। বলুন: \"Yes, sir. I understand.\""
        },
        {
          "stars": 1,
          "en": "Why? I need to go in.",
          "reply": "No. Danger. Stay out.",
          "replyBn": "না। বিপদ। বাইরে থাকো।",
          "tip": "নিরাপত্তার নির্দেশে তর্ক করবেন না। দরকার থাকলে বলুন: \"Is there another way, sir?\""
        }
      ]
    },
    {
      "boss": "Stay away from the red sign. It says high voltage.",
      "bn": "লাল চিহ্ন থেকে দূরে থাকো। ওখানে লেখা উচ্চ বিদ্যুৎ।",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. I will not touch it.",
          "reply": "Good. Thank you.",
          "replyBn": "ভালো। ধন্যবাদ।",
          "tip": "চমৎকার! বিদ্যুতের চিহ্নের কাছে না যাওয়াই নিরাপদ।"
        },
        {
          "stars": 2,
          "en": "What?",
          "reply": "Do not touch the red box. It is dangerous.",
          "replyBn": "লাল বাক্স ছোঁবে না। এটা বিপজ্জনক।",
          "tip": "শুধু \"What?\" বললে রূঢ় শোনায়। বলুন: \"Sorry, sir. Please say that again.\""
        },
        {
          "stars": 1,
          "en": "Okay, I can touch. No problem.",
          "reply": "No! Do not touch it! It's dangerous!",
          "replyBn": "না! ছোঁবে না! এটা বিপজ্জনক!",
          "tip": "চিহ্নের মানে না জানলে ছুঁবেন না। জিজ্ঞেস করুন: \"What does this sign mean?\""
        }
      ]
    },
    {
      "boss": "Fire! Go to the emergency exit now!",
      "bn": "আগুন! এখনই জরুরি বের হওয়ার পথে যাও!",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir! Which way is the exit?",
          "reply": "That way! Go now!",
          "replyBn": "ওই দিকে! এখনই যাও!",
          "tip": "দারুণ! জরুরি অবস্থায় ছোট করে পথ জিজ্ঞেস করুন আর দ্রুত বের হন।"
        },
        {
          "stars": 2,
          "en": "What? Please say again.",
          "reply": "Fire! Exit! Go now!",
          "replyBn": "আগুন! বের হও! এখনই যাও!",
          "tip": "জরুরি অবস্থায় সময় কম। কাজে যোগ দেওয়ার প্রথম দিনই জেনে রাখুন বের হওয়ার পথ কোথায়।"
        },
        {
          "stars": 1,
          "en": "Wait, I take my bag first.",
          "reply": "Leave it! Go now!",
          "replyBn": "ওটা রেখে যাও! এখনই যাও!",
          "tip": "আগুনে জিনিস নিতে থামবেন না। জীবন আগে, জিনিস পরে।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "\"Danger\" লেখা চিহ্ন দেখলে একটু ভেতরে গিয়ে দেখে আসা কি ঠিক?",
      "a": false,
      "why": "না। danger মানে বিপদ। ভেতরে যাবেন না, আর কী বিপদ জানতে সুপারভাইজারকে জিজ্ঞেস করুন।"
    },
    {
      "q": "চিহ্নের মানে না বুঝলে \"What does this sign mean?\" বলে জিজ্ঞেস করা কি ঠিক?",
      "a": true,
      "why": "ঠিক। না বুঝে কিছু করার চেয়ে ভদ্রভাবে জিজ্ঞেস করা অনেক নিরাপদ।"
    },
    {
      "q": "\"High voltage. Do not touch.\" এর মানে কি \"ছুঁয়ে দেখুন\"?",
      "a": false,
      "why": "না। এর মানে উচ্চ বিদ্যুৎ, ছোঁবেন না। ছুঁলে মারাত্মক আঘাত লাগতে পারে।"
    },
    {
      "q": "কাজে যোগ দিয়ে প্রথম দিনই \"Emergency exit\" কোথায় তা জেনে রাখা কি ভালো?",
      "a": true,
      "why": "ঠিক। আগুন বা বিপদে খোঁজার সময় থাকে না। আগে থেকে পথ চিনে রাখলে দ্রুত বের হতে পারবেন।"
    }
  ],
  "hook": {
    "en": "What does this sign mean?",
    "bn": "এই চিহ্নের মানে কী?"
  },
  "traps": [
    {
      "title": "রং দেখে চিনুন",
      "intro": "চিহ্নের রং আপনাকে আগেই বলে দেয়।",
      "items": [
        {
          "en": "Red",
          "note": "নিষেধ বা বিপদ",
          "say": "red"
        },
        {
          "en": "Yellow",
          "note": "সাবধান",
          "say": "yellow"
        },
        {
          "en": "Blue",
          "note": "এটা করতেই হবে",
          "say": "blue"
        },
        {
          "en": "Green",
          "note": "নিরাপদ বা বেরোনোর পথ",
          "say": "green"
        }
      ],
      "tip": "রং দেখেই বুঝুন, তারপর লেখা পড়ুন।"
    },
    {
      "title": "Danger আর Caution",
      "intro": "দুটোই বিপদের কথা, কিন্তু মাত্রা আলাদা।",
      "items": [
        {
          "en": "Danger",
          "note": "বড় বিপদ, ঢুকবেন না",
          "say": "Danger"
        },
        {
          "en": "Caution",
          "note": "সাবধান, ঝুঁকি আছে",
          "say": "Caution"
        }
      ],
      "tip": "Danger দেখলে থামুন।"
    },
    {
      "title": "Entry আর Exit",
      "intro": "উল্টো মানে।",
      "items": [
        {
          "en": "No entry",
          "note": "ঢোকা নিষেধ",
          "say": "No entry"
        },
        {
          "en": "Emergency exit",
          "note": "জরুরি বেরোনোর পথ",
          "say": "Emergency exit"
        }
      ],
      "tip": "বিপদে green \"Exit\" চিহ্ন ধরে এগোন।"
    }
  ],
  "typing": [
    {
      "ask": "বেরোনোর পথ বোঝায় যে শব্দ, সেটা লিখুন",
      "say": "Emergency exit.",
      "num": false,
      "answers": [
        "exit"
      ],
      "show": "exit",
      "why": "exit = বেরোনোর পথ",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "___! Keep out.",
      "answers": [
        "danger"
      ],
      "show": "danger",
      "why": "danger = বিপদ",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "What does this ___ mean?",
      "answers": [
        "sign"
      ],
      "show": "sign",
      "why": "sign = চিহ্ন",
      "ph": "ইংরেজি শব্দ"
    }
  ]
};
