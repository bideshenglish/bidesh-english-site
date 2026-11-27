window.LESSON = {
  "id": "accident-unwell",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    2,
    4,
    5
  ],
  "who": "সুপারভাইজার",
  "title": "Accident, Injury or Feeling Unwell",
  "titleBn": "দুর্ঘটনা, আঘাত বা শরীর খারাপ হলে",
  "next": {
    "title": "Shift, Attendance & Overtime Hours",
    "id": "shift-overtime"
  },
  "scene": "আঘাত বা অসুস্থতায় চুপ থাকবেন না। পরিষ্কার জানানোই আপনার নিরাপত্তা।",
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "I am hurt. I need help.",
      "bn": "আমি আঘাত পেয়েছি। আমার সাহায্য দরকার।",
      "pr": "আই অ্যাম হার্ট। আই নিড হেল্প।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "My leg hurts a lot.",
      "bn": "আমার পায়ে অনেক ব্যথা।",
      "pr": "মাই লেগ হার্টস আ লট।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I feel dizzy. I don't feel well.",
      "bn": "আমার মাথা ঘুরছে। ভালো লাগছে না।",
      "pr": "আই ফিল ডিজি। আই ডোন্ট ফিল ওয়েল।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I cannot work today. I am sick.",
      "bn": "আজ আমি কাজ করতে পারব না। আমি অসুস্থ।",
      "pr": "আই ক্যানট ওয়ার্ক টুডে। আই অ্যাম সিক।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I need to see a doctor.",
      "bn": "আমাকে ডাক্তার দেখাতে হবে।",
      "pr": "আই নিড টু সি আ ডক্টর।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Please call an ambulance.",
      "bn": "দয়া করে অ্যাম্বুলেন্স ডাকুন।",
      "pr": "প্লিজ কল অ্যান অ্যাম্বুলেন্স।"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Are you okay? Where does it hurt?",
      "bn": "তুমি ঠিক আছ? কোথায় ব্যথা?",
      "pr": "আর ইউ ওকে? হোয়ার ডাজ ইট হার্ট?"
    },
    {
      "tag": "সুপারভাইজার বলবেন, বুঝে নিন",
      "en": "Don't move. I will call for help.",
      "bn": "নড়ো না। আমি সাহায্য ডাকছি।",
      "pr": "ডোন্ট মুভ। আই উইল কল ফর হেল্প।"
    }
  ],
  "listening": [
    {
      "say": "Are you okay? Where does it hurt?",
      "options": [
        {
          "t": "তোমার নাম কী?",
          "ok": false
        },
        {
          "t": "তুমি ঠিক আছ? কোথায় ব্যথা?",
          "ok": true
        },
        {
          "t": "তুমি কোথায় থাকো?",
          "ok": false
        }
      ],
      "why": "hurt মানে ব্যথা করা। \"Where does it hurt?\" মানে কোথায় ব্যথা?"
    },
    {
      "say": "Don't move. I will call for help.",
      "options": [
        {
          "t": "দৌড়ে যাও, কাজ চালিয়ে যাও",
          "ok": false
        },
        {
          "t": "বাড়ি চলে যাও",
          "ok": false
        },
        {
          "t": "নড়ো না, আমি সাহায্য ডাকছি",
          "ok": true
        }
      ],
      "why": "\"Don't move\" মানে নড়ো না। আঘাত পেলে নড়াচড়া করলে ক্ষতি বাড়তে পারে, তাই সাহায্য আসা পর্যন্ত থেমে থাকুন।"
    },
    {
      "say": "Please call an ambulance.",
      "options": [
        {
          "t": "দয়া করে অ্যাম্বুলেন্স ডাকুন",
          "ok": true
        },
        {
          "t": "দয়া করে দরজা খুলুন",
          "ok": false
        },
        {
          "t": "দয়া করে আলো জ্বালান",
          "ok": false
        }
      ],
      "why": "ambulance মানে অ্যাম্বুলেন্স, যা অসুস্থ বা আহত মানুষকে হাসপাতালে নেয়।"
    }
  ],
  "speak": [
    0,
    2,
    4
  ],
  "dialogue": [
    {
      "boss": "Are you okay? Where does it hurt?",
      "bn": "তুমি ঠিক আছ? কোথায় ব্যথা?",
      "choices": [
        {
          "stars": 3,
          "en": "My hand hurts. I need help.",
          "reply": "Sit down here. I will call the clinic.",
          "replyBn": "এখানে বসো। আমি ক্লিনিকে ফোন করছি।",
          "tip": "দারুণ! কোথায় ব্যথা আর কী দরকার, দুটোই পরিষ্কার বলেছেন।"
        },
        {
          "stars": 2,
          "en": "I'm okay.",
          "reply": "Are you sure? Your hand is bleeding.",
          "replyBn": "নিশ্চিত? তোমার হাত থেকে রক্ত পড়ছে।",
          "tip": "আঘাত ছোট মনে হলেও চেপে যাবেন না। বলুন: \"My hand hurts.\""
        },
        {
          "stars": 1,
          "en": "Nothing. No problem.",
          "reply": "You must tell me if you are hurt.",
          "replyBn": "আঘাত পেলে আমাকে বলতেই হবে।",
          "tip": "ভয়ে আঘাত লুকালে পরে সমস্যা বাড়তে পারে। সুপারভাইজারকে সঙ্গে সঙ্গে জানান।"
        }
      ]
    },
    {
      "boss": "You look pale. Are you sick?",
      "bn": "তোমাকে ফ্যাকাসে দেখাচ্ছে। তুমি কি অসুস্থ?",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. I feel dizzy. I don't feel well.",
          "reply": "Sit in the shade and rest. Don't work now.",
          "replyBn": "ছায়ায় বসে বিশ্রাম নাও। এখন কাজ করো না।",
          "tip": "চমৎকার! শরীর খারাপ লাগলে নিজে থেকে জানানোই সবচেয়ে ভালো।"
        },
        {
          "stars": 2,
          "en": "A little. I can work.",
          "reply": "You look weak. Please sit down.",
          "replyBn": "তোমাকে দুর্বল দেখাচ্ছে। দয়া করে বসো।",
          "tip": "শরীর খারাপ নিয়ে কাজ করলে বিপদ বাড়তে পারে, বিশেষ করে গরমে। বলুন: \"I don't feel well.\""
        },
        {
          "stars": 1,
          "en": "No, no. I am strong.",
          "reply": "You are not well. Sit down now.",
          "replyBn": "তুমি ভালো নেই। এখনই বসো।",
          "tip": "লজ্জা বা ভয়ে শরীর খারাপ লুকাবেন না। জানালে সাহায্য পাওয়া সহজ হয়।"
        }
      ]
    },
    {
      "boss": "You should see a doctor. Do you want to go to the clinic?",
      "bn": "তোমার ডাক্তার দেখানো উচিত। তুমি কি ক্লিনিকে যেতে চাও?",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. I need to see a doctor.",
          "reply": "Okay. I will arrange a car.",
          "replyBn": "ঠিক আছে। আমি গাড়ির ব্যবস্থা করছি।",
          "tip": "ঠিক! ডাক্তার দেখাতে হলে পরিষ্কার জানিয়ে দিন।"
        },
        {
          "stars": 2,
          "en": "Maybe later.",
          "reply": "Please go now. Your health is important.",
          "replyBn": "এখনই যাও। তোমার স্বাস্থ্য গুরুত্বপূর্ণ।",
          "tip": "দেরি করলে সমস্যা বাড়তে পারে। প্রয়োজন হলে বলুন: \"I need to see a doctor.\""
        },
        {
          "stars": 1,
          "en": "No doctor. I can work.",
          "reply": "Please don't work. Let us go to the clinic first.",
          "replyBn": "কাজ করো না। আগে ক্লিনিকে যাই।",
          "tip": "ডাক্তার না দেখিয়ে কাজ করলে সমস্যা বাড়তে পারে। খরচ নিয়ে চিন্তা থাকলে সুপারভাইজারকে জানান।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "কাজের সময় ছোট আঘাত পেলেও সুপারভাইজারকে জানানো কি ভালো?",
      "a": true,
      "why": "ঠিক। জানালে দ্রুত সাহায্য ও চিকিৎসা পাওয়া সহজ হয়। আঘাত লুকালে পরে সমস্যা বাড়তে পারে।"
    },
    {
      "q": "শরীর খারাপ লাগলেও চুপচাপ ভারী কাজ চালিয়ে যাওয়া কি ঠিক?",
      "a": false,
      "why": "না। বিশেষ করে গরমে অসুস্থ শরীরে কাজ করলে বিপদ বাড়ে। বলুন: \"I don't feel well.\""
    },
    {
      "q": "\"My leg hurts a lot.\" এর মানে কি \"আমার পা ঠিক আছে\"?",
      "a": false,
      "why": "না। hurts মানে ব্যথা করছে, a lot মানে অনেক। অর্থাৎ \"আমার পায়ে অনেক ব্যথা\"।"
    },
    {
      "q": "গুরুতর আঘাত বা জরুরি অবস্থায় \"Please call an ambulance.\" বলা কি ঠিক?",
      "a": true,
      "why": "ঠিক। গুরুতর অবস্থায় দেরি না করে অ্যাম্বুলেন্স ডাকতে বলুন।"
    }
  ],
  "hook": {
    "en": "I am hurt. I need help.",
    "bn": "আমি আহত। আমার সাহায্য দরকার।"
  },
  "traps": [
    {
      "title": "hurt আর hurts",
      "intro": "একটা আপনার অবস্থা, আরেকটা ব্যথার জায়গা।",
      "items": [
        {
          "en": "I am hurt.",
          "note": "আমি আহত",
          "say": "I am hurt."
        },
        {
          "en": "My leg hurts.",
          "note": "আমার পা ব্যথা করছে",
          "say": "My leg hurts."
        }
      ],
      "tip": "পুরো আপনি আহত হলে hurt। শরীরের জায়গা ব্যথা করলে hurts।"
    },
    {
      "title": "শরীরের জায়গা",
      "intro": "\"Where does it hurt?\" এর উত্তরে এগুলো বলবেন।",
      "items": [
        {
          "en": "head",
          "note": "মাথা",
          "say": "head"
        },
        {
          "en": "hand",
          "note": "হাত",
          "say": "hand"
        },
        {
          "en": "leg",
          "note": "পা",
          "say": "leg"
        },
        {
          "en": "back",
          "note": "পিঠ",
          "say": "back"
        }
      ],
      "tip": "ব্যথার জায়গা বলুন, সাথে দেখিয়েও দিন।"
    }
  ],
  "typing": [
    {
      "ask": "কী করতে নিষেধ করছে? ইংরেজি শব্দ লিখুন",
      "say": "Don't move.",
      "num": false,
      "answers": [
        "move"
      ],
      "show": "move",
      "why": "Don't move = নড়বেন না",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "My leg ___ a lot.",
      "answers": [
        "hurts"
      ],
      "show": "hurts",
      "why": "hurts = ব্যথা করছে",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Please call an ___.",
      "answers": [
        "ambulance"
      ],
      "show": "ambulance",
      "why": "ambulance = অ্যাম্বুলেন্স",
      "ph": "ইংরেজি শব্দ"
    }
  ]
};
