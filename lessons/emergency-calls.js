window.LESSON = {
  "id": "emergency-calls",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    3,
    6,
    7
  ],
  "who": "জরুরি অপারেটর",
  "title": "Emergency Calls: Police, Fire & Ambulance",
  "titleBn": "জরুরি ফোন: পুলিশ, ফায়ার ও অ্যাম্বুলেন্স",
  "next": {
    "title": "Police & ID Checks: What to Say",
    "id": "police-id-checks"
  },
  "scene": "জরুরি ফোনে প্রথমে সেবার নাম, তারপর কোথায়, তারপর কী হয়েছে। এই ক্রম মুখস্থ করুন।",
  "hook": {
    "en": "I need an ambulance.",
    "bn": "আমার অ্যাম্বুলেন্স দরকার।"
  },
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "I need an ambulance.",
      "bn": "আমার অ্যাম্বুলেন্স দরকার।",
      "pr": "আই নিড অ্যান অ্যাম্বুলেন্স।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "There is a fire in our building.",
      "bn": "আমাদের বিল্ডিংয়ে আগুন লেগেছে।",
      "pr": "দেয়ার ইজ আ ফায়ার ইন আওয়ার বিল্ডিং।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "There was an accident. A man is badly hurt.",
      "bn": "দুর্ঘটনা হয়েছে। একজন গুরুতর আহত।",
      "pr": "দেয়ার ওয়জ অ্যান অ্যাক্সিডেন্ট। আ ম্যান ইজ ব্যাডলি হার্ট।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "He is not breathing.",
      "bn": "সে শ্বাস নিচ্ছে না।",
      "pr": "হি ইজ নট ব্রিদিং।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "We are near the mosque, at Gate Two.",
      "bn": "আমরা মসজিদের কাছে, গেট টু-তে।",
      "pr": "উই আর নিয়ার দ্য মস্ক, অ্যাট গেট টু।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Please speak slowly. My English is not good.",
      "bn": "ধীরে বলুন। আমার ইংরেজি ভালো না।",
      "pr": "প্লিজ স্পিক স্লোলি। মাই ইংলিশ ইজ নট গুড।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "What is the address of your emergency?",
      "bn": "আপনার জরুরি অবস্থার ঠিকানা কী?",
      "pr": "হোয়াট ইজ দ্য অ্যাড্রেস অব ইয়োর ইমার্জেন্সি?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Is he breathing? Is he awake?",
      "bn": "সে কি শ্বাস নিচ্ছে? জেগে আছে?",
      "pr": "ইজ হি ব্রিদিং? ইজ হি অ্যাওয়েক?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Leave the building now. Don't use the lift.",
      "bn": "এখনই বিল্ডিং ছাড়ুন। লিফট ব্যবহার করবেন না।",
      "pr": "লিভ দ্য বিল্ডিং নাউ। ডোন্ট ইউজ দ্য লিফট।"
    }
  ],
  "traps": [
    {
      "title": "প্রথম শব্দটাই সেবার নাম",
      "intro": "ফোন ধরলে অপারেটর জানতে চান, কোন সেবা। এক শব্দে বলুন।",
      "items": [
        {
          "en": "Police",
          "note": "চুরি, মারামারি, বিপদ",
          "say": "Police"
        },
        {
          "en": "Ambulance",
          "note": "আহত বা অসুস্থ মানুষ",
          "say": "Ambulance"
        },
        {
          "en": "Fire",
          "note": "আগুন বা ধোঁয়া",
          "say": "Fire"
        }
      ],
      "tip": "ফোন ধরলে প্রথমে বলুন: \"Ambulance, please.\" বা \"Fire!\" তারপর কোথায়, তারপর কী হয়েছে। যেকোনো ঘটনায় একাধিক সেবা লাগলে বলুন।"
    },
    {
      "title": "ঠিকানা না জানলে আশেপাশের চিহ্ন বলুন",
      "intro": "ক্যাম্প বা সাইটে অনেকেই ঠিকানা জানেন না। তখন চেনা জায়গা, গেট আর তলার নাম বলুন।",
      "items": [
        {
          "en": "next to the mosque",
          "note": "মসজিদের পাশে",
          "say": "We are next to the mosque."
        },
        {
          "en": "behind the blue building",
          "note": "নীল বিল্ডিংয়ের পেছনে",
          "say": "We are behind the blue building."
        },
        {
          "en": "third floor, room twelve",
          "note": "তৃতীয় তলা, বারো নম্বর ঘর",
          "say": "Third floor, room twelve."
        }
      ],
      "tip": "ক্যাম্পের নাম, গেট নম্বর আর কাছের বড় চিহ্ন আগেই ফোনে লিখে রাখুন। ফায়ার সার্ভিসের নির্দেশনায়ও ঠিকানা না জানলে রাস্তার নাম আর চিহ্ন বলতে বলা হয়।"
    },
    {
      "title": "ফোন কাটবেন না, অন্যের ওপর ভরসা করবেন না",
      "intro": "\"কেউ না কেউ নিশ্চয়ই ফোন করেছে\" ভেবে বসে থাকবেন না। আর লাইনে থাকলে অপারেটর কী করতে হবে বলে দেন।",
      "items": [
        {
          "en": "Stay on the line.",
          "note": "লাইনে থাকুন",
          "say": "Stay on the line."
        },
        {
          "en": "Okay, I am doing it now.",
          "note": "ঠিক আছে, আমি এখন করছি",
          "say": "Okay, I am doing it now."
        },
        {
          "en": "Is help coming?",
          "note": "সাহায্য কি আসছে?",
          "say": "Is help coming?"
        }
      ],
      "tip": "অপারেটর নিজে বলার আগে ফোন কাটবেন না। তিনি প্রাথমিক সাহায্যের নির্দেশ দিতে পারেন। আগুন লাগলে আগে বাইরে বেরোন, আর ফিরে যাবেন না।"
    }
  ],
  "listening": [
    {
      "say": "What is the address of your emergency?",
      "options": [
        {
          "t": "আপনার জরুরি অবস্থার ঠিকানা কী?",
          "ok": true
        },
        {
          "t": "আপনার নাম কী?",
          "ok": false
        },
        {
          "t": "কে আপনাকে ফোন করতে বলেছে?",
          "ok": false
        }
      ],
      "why": "address = ঠিকানা। না জানলে চিহ্ন বলুন: \"next to the mosque.\""
    },
    {
      "say": "Is he breathing? Is he awake?",
      "options": [
        {
          "t": "সে কি শ্বাস নিচ্ছে? জেগে আছে?",
          "ok": true
        },
        {
          "t": "সে কি হাঁটতে পারে?",
          "ok": false
        },
        {
          "t": "সে কি আপনার বন্ধু?",
          "ok": false
        }
      ],
      "why": "breathing = শ্বাস নেওয়া। awake = জেগে থাকা। দেখে উত্তর দিন।"
    },
    {
      "say": "Leave the building now. Don't use the lift.",
      "options": [
        {
          "t": "এখনই বিল্ডিং ছাড়ুন। লিফট ব্যবহার করবেন না",
          "ok": true
        },
        {
          "t": "লিফটে উঠুন",
          "ok": false
        },
        {
          "t": "ঘরে অপেক্ষা করুন",
          "ok": false
        }
      ],
      "why": "leave = ছাড়া। lift = লিফট। আগুনে সিঁড়ি ব্যবহার করুন।"
    },
    {
      "say": "Help is coming. Stay on the line.",
      "options": [
        {
          "t": "সাহায্য আসছে। লাইনে থাকুন",
          "ok": true
        },
        {
          "t": "সাহায্য আসবে না। ফোন কেটে দিন",
          "ok": false
        },
        {
          "t": "আবার ফোন করবেন",
          "ok": false
        }
      ],
      "why": "stay on the line = ফোন কাটবেন না।"
    }
  ],
  "typing": [
    {
      "ask": "কত নম্বর ঘর? সংখ্যা লিখুন",
      "say": "The room number is twelve.",
      "num": true,
      "answers": [
        "12"
      ],
      "show": "12",
      "why": "twelve = ১২। twenty হলে ২০।",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "I need an ___.",
      "answers": [
        "ambulance"
      ],
      "show": "ambulance",
      "why": "ambulance = অ্যাম্বুলেন্স",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "There is a ___ in our building.",
      "answers": [
        "fire"
      ],
      "show": "fire",
      "why": "fire = আগুন",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [
    0,
    4,
    5
  ],
  "dialogue": [
    {
      "boss": "Emergency. Which service?",
      "bn": "জরুরি সেবা। কোন সেবা লাগবে? (আপনাদের ক্যাম্পের রান্নাঘরে আগুন, ধোঁয়া ছড়াচ্ছে)",
      "choices": [
        {
          "stars": 3,
          "en": "Fire! There is a fire in our camp kitchen. Labour Camp Three, near the blue gate. Two people may be inside.",
          "reply": "Okay. Everyone get out. Don't go back in.",
          "replyBn": "ঠিক আছে। সবাই বেরিয়ে আসুন। ভেতরে ফিরবেন না।",
          "tip": "সেবা, জায়গা আর কে ভেতরে আছে, তিনটাই বলেছেন। এটাই সবচেয়ে কাজের উত্তর।"
        },
        {
          "stars": 2,
          "en": "Fire! Please come!",
          "reply": "Where are you?",
          "replyBn": "আপনি কোথায়?",
          "tip": "সেবা বলেছেন, কিন্তু কোথায় বলেননি। প্রথম বাক্যেই জায়গা বলুন।"
        },
        {
          "stars": 1,
          "en": "Help! Help!",
          "reply": "Which service? Where are you?",
          "replyBn": "কোন সেবা? আপনি কোথায়?",
          "tip": "শুধু \"Help\" বললে অপারেটর কিছু বোঝেন না। সেবার নাম আর জায়গা বলুন।"
        }
      ]
    },
    {
      "boss": "Ambulance. Is he breathing? Is he awake?",
      "bn": "অ্যাম্বুলেন্স। সে কি শ্বাস নিচ্ছে? জেগে আছে? (আপনার সহকর্মী মাটিতে পড়ে আছে, আপনি দেখছেন)",
      "choices": [
        {
          "stars": 3,
          "en": "He is breathing, but he is not awake. We are at Gate Two, near the mosque.",
          "reply": "Okay. Stay with him. Help is coming.",
          "replyBn": "ঠিক আছে। তার সাথে থাকুন। সাহায্য আসছে।",
          "tip": "শ্বাস আর জ্ঞান, দুটোর উত্তর আর ঠিকানাও দিয়েছেন। যা দেখছেন তাই বলুন, আন্দাজে নয়।"
        },
        {
          "stars": 2,
          "en": "He is lying down.",
          "reply": "Is he breathing?",
          "replyBn": "সে কি শ্বাস নিচ্ছে?",
          "tip": "সরাসরি প্রশ্নের উত্তর দিন: \"Yes, he is breathing.\" বা \"No.\""
        },
        {
          "stars": 1,
          "en": "I don't know! Please come!",
          "reply": "Look at his chest. Is it moving?",
          "replyBn": "তার বুক দেখুন। নড়ছে?",
          "tip": "ঘাবড়ে যাবেন না। অপারেটর কী দেখতে হবে বলে দেন, শান্ত থাকুন।"
        }
      ]
    },
    {
      "boss": "Police. What happened? Where? How many people?",
      "bn": "পুলিশ। কী হয়েছে? কোথায়? কতজন? (রাস্তায় গাড়ির দুর্ঘটনা, অপারেটর দ্রুত বলছেন)",
      "choices": [
        {
          "stars": 3,
          "en": "Sorry, please speak slowly. There was a car accident near the petrol station on the main road. Two people are hurt.",
          "reply": "Okay. Ambulance is coming. Stay on the line.",
          "replyBn": "ঠিক আছে। অ্যাম্বুলেন্স আসছে। লাইনে থাকুন।",
          "tip": "ধীরে বলতে বলে ঘটনা, জায়গা আর আহতের সংখ্যা বলেছেন। ভদ্র আর কাজের।"
        },
        {
          "stars": 2,
          "en": "Accident. Please come.",
          "reply": "Where? How many?",
          "replyBn": "কোথায়? কতজন?",
          "tip": "প্রথমেই জায়গা আর কতজন আহত, বলুন।"
        },
        {
          "stars": 1,
          "en": "(Hangs up because they speak too fast)",
          "reply": "Hello? Hello?",
          "replyBn": "হ্যালো? হ্যালো?",
          "tip": "না বুঝলে ফোন কাটবেন না। বলুন: \"Please speak slowly.\""
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "জরুরি ফোনে প্রথমে সেবার নাম বলা (Fire, Ambulance, Police) কি ভালো?",
      "a": true,
      "why": "ঠিক। তারপর জায়গা, তারপর কী হয়েছে।"
    },
    {
      "q": "ঠিকানা না জানলে মসজিদ বা গেটের মতো চেনা চিহ্ন বলা কি ঠিক?",
      "a": true,
      "why": "ঠিক। ক্যাম্পের নাম আর গেট নম্বর আগেই ফোনে লিখে রাখুন।"
    },
    {
      "q": "\"অন্য কেউ হয়তো ফোন করেছে\" ভেবে নিজে ফোন না করা কি ঠিক?",
      "a": false,
      "why": "না। নিজে ফোন করুন। ডবল ফোন হলেও ক্ষতি নেই।"
    },
    {
      "q": "অপারেটর না বলা পর্যন্ত লাইনে থাকা কি ভালো?",
      "a": true,
      "why": "ঠিক। তিনি আরও প্রশ্ন করবেন আর কী করতে হবে বলে দেবেন।"
    },
    {
      "q": "আগুন লাগলে লিফটে করে নামা কি নিরাপদ?",
      "a": false,
      "why": "না। \"Don't use the lift.\" সিঁড়ি দিয়ে বেরোন।"
    }
  ],
  "mission": {
    "title": "আজ বলুন",
    "intro": "আজ বাস্তবে অন্তত একবার এই বাক্যগুলোর একটা বলে দেখুন।",
    "items": [
      {
        "en": "I need an ambulance.",
        "bn": "আমার অ্যাম্বুলেন্স দরকার।"
      },
      {
        "en": "We are near the mosque, at Gate Two.",
        "bn": "আমরা মসজিদের কাছে, গেট টু-তে।"
      },
      {
        "en": "Please speak slowly. My English is not good.",
        "bn": "ধীরে বলুন। আমার ইংরেজি ভালো না।"
      }
    ],
    "tip": "শেখা বাক্য বাস্তবে একবার বললেই মনে থাকে। সাধারণ সচেতনতার জন্য।"
  },
  "spot": [
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Emergency. Which service? — জরুরি সেবা। কোন সেবা লাগবে? (আপনাদের ক্যাম্পের রান্নাঘরে আগুন, ধোঁয়া ছড়াচ্ছে)",
      "options": [
        {
          "t": "Help! Help!",
          "ok": true
        },
        {
          "t": "Fire! There is a fire in our camp kitchen. Labour Camp Three, near the blue gate. Two people may be inside.",
          "ok": false
        },
        {
          "t": "Fire! Please come!",
          "ok": false
        }
      ],
      "why": "শুধু \"Help\" বললে অপারেটর কিছু বোঝেন না। সেবার নাম আর জায়গা বলুন।"
    },
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Police. What happened? Where? How many people? — পুলিশ। কী হয়েছে? কোথায়? কতজন? (রাস্তায় গাড়ির দুর্ঘটনা, অপারেটর দ্রুত বলছেন)",
      "options": [
        {
          "t": "(Hangs up because they speak too fast)",
          "ok": true
        },
        {
          "t": "Sorry, please speak slowly. There was a car accident near the petrol station on the main road. Two people are hurt.",
          "ok": false
        },
        {
          "t": "Accident. Please come.",
          "ok": false
        }
      ],
      "why": "না বুঝলে ফোন কাটবেন না। বলুন: \"Please speak slowly.\""
    }
  ]
};
