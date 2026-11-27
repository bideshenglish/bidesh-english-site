window.LESSON = {
  "id": "con-tools",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    2,
    3,
    5
  ],
  "who": "ফোরম্যান",
  "title": "Common Tools & Equipment",
  "titleBn": "নির্মাণ কাজের সাধারণ যন্ত্রপাতি",
  "next": {
    "title": "Cement, Sand, Bricks & Rods",
    "id": "con-materials"
  },
  "scene": "ফোরম্যান যন্ত্রের নাম ধরে ডাকেন। নাম না চিনলে ভুল জিনিস আনবেন, সময় নষ্ট হবে।",
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "Pass me the hammer, please.",
      "bn": "হাতুড়িটা আমাকে দিন, দয়া করে।",
      "pr": "পাস মি দ্য হ্যামার, প্লিজ।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Where is the measuring tape?",
      "bn": "মাপার ফিতা কোথায়?",
      "pr": "হোয়ার ইজ দ্য মেজারিং টেপ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I need a bigger spanner.",
      "bn": "আমার আরও বড় স্প্যানার লাগবে।",
      "pr": "আই নিড আ বিগার স্প্যানার।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Please hold the ladder.",
      "bn": "দয়া করে মইটা ধরে রাখুন।",
      "pr": "প্লিজ হোল্ড দ্য ল্যাডার।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "How do I use this drill?",
      "bn": "এই ড্রিল কীভাবে চালাব?",
      "pr": "হাউ ডু আই ইউজ দিস ড্রিল?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "The drill is not working.",
      "bn": "ড্রিলটা কাজ করছে না।",
      "pr": "দ্য ড্রিল ইজ নট ওয়ার্কিং।"
    },
    {
      "tag": "ফোরম্যান বলবেন, বুঝে নিন",
      "en": "Bring the shovel and the bucket.",
      "bn": "বেলচা আর বালতি আনো।",
      "pr": "ব্রিং দ্য শোভেল অ্যান্ড দ্য বাকেট।"
    },
    {
      "tag": "ফোরম্যান বলবেন, বুঝে নিন",
      "en": "Take the wheelbarrow to the sand.",
      "bn": "ঠেলাগাড়ি নিয়ে বালির কাছে যাও।",
      "pr": "টেক দ্য হুইলব্যারো টু দ্য স্যান্ড।"
    },
    {
      "tag": "ফোরম্যান বলবেন, বুঝে নিন",
      "en": "Use the right tool for the job.",
      "bn": "কাজের জন্য সঠিক যন্ত্রটা ব্যবহার করো।",
      "pr": "ইউজ দ্য রাইট টুল ফর দ্য জব।"
    },
    {
      "tag": "ফোরম্যান বলবেন, বুঝে নিন",
      "en": "Don't use this machine without training.",
      "bn": "প্রশিক্ষণ ছাড়া এই মেশিন চালাবে না।",
      "pr": "ডোন্ট ইউজ দিস মেশিন উইদাউট ট্রেনিং।"
    }
  ],
  "listening": [
    {
      "say": "Bring the shovel and the bucket.",
      "options": [
        {
          "t": "বেলচা আর বালতি আনো",
          "ok": true
        },
        {
          "t": "হাতুড়ি আর মই আনো",
          "ok": false
        },
        {
          "t": "বেলচা আর বালতি রেখে যাও",
          "ok": false
        }
      ],
      "why": "shovel মানে বেলচা, bucket মানে বালতি, bring মানে আনো।"
    },
    {
      "say": "Take the wheelbarrow to the sand.",
      "options": [
        {
          "t": "ঠেলাগাড়ি নিয়ে বালির কাছে যাও",
          "ok": true
        },
        {
          "t": "বালি ঠেলাগাড়ি থেকে নামাও",
          "ok": false
        },
        {
          "t": "ঠেলাগাড়ি ভেঙে গেছে",
          "ok": false
        }
      ],
      "why": "wheelbarrow মানে ঠেলাগাড়ি, sand মানে বালি। take ... to মানে ... এর কাছে নিয়ে যাও।"
    },
    {
      "say": "Use the right tool for the job.",
      "options": [
        {
          "t": "যেকোনো যন্ত্র ধরো, কাজ হয়ে যাবে",
          "ok": false
        },
        {
          "t": "কাজের জন্য সঠিক যন্ত্রটা ব্যবহার করো",
          "ok": true
        },
        {
          "t": "আজ কাজ নেই",
          "ok": false
        }
      ],
      "why": "right মানে সঠিক। ভুল যন্ত্র দিয়ে কাজ করলে যন্ত্র নষ্ট হয়, আর আপনিও আঘাত পেতে পারেন।"
    },
    {
      "say": "Don't use this machine without training.",
      "options": [
        {
          "t": "এই মেশিন দ্রুত চালাও",
          "ok": false
        },
        {
          "t": "প্রশিক্ষণ ছাড়া এই মেশিন চালাবে না",
          "ok": true
        },
        {
          "t": "এই মেশিন আমার",
          "ok": false
        }
      ],
      "why": "Don't মানে করবে না। without training মানে প্রশিক্ষণ ছাড়া। না জেনে মেশিন চালালে বড় বিপদ হতে পারে।"
    }
  ],
  "speak": [
    0,
    1,
    3
  ],
  "dialogue": [
    {
      "boss": "Rahim! Bring the hammer and the measuring tape.",
      "bn": "রহিম! হাতুড়ি আর মাপার ফিতা আনো।",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. Where is the measuring tape?",
          "reply": "It is in the tool box, near the gate.",
          "replyBn": "টুল বক্সে আছে, গেটের কাছে।",
          "tip": "দারুণ! আদেশ বুঝেছেন, আর যেটা জানেন না সেটা জিজ্ঞেস করেছেন। এটাই ঠিক পদ্ধতি।"
        },
        {
          "stars": 2,
          "en": "Okay.",
          "reply": "Go quickly. We are waiting.",
          "replyBn": "তাড়াতাড়ি যাও। আমরা অপেক্ষা করছি।",
          "tip": "\"Okay\" বলে চলে গেলে ফিতা কোথায় জানবেন না। জিজ্ঞেস করুন: \"Where is the measuring tape?\""
        },
        {
          "stars": 1,
          "en": "I don't know hammer.",
          "reply": "What? Ask someone. Don't waste time.",
          "replyBn": "কী? কাউকে জিজ্ঞেস করো। সময় নষ্ট কোরো না।",
          "tip": "\"Hammer\" মানে হাতুড়ি। না চিনলে বলুন: \"Sorry, sir. Which one is the hammer? Please show me.\""
        }
      ]
    },
    {
      "boss": "Use this drill and make a hole here.",
      "bn": "এই ড্রিল দিয়ে এখানে একটা গর্ত করো।",
      "choices": [
        {
          "stars": 3,
          "en": "Sir, I have not used this drill before. Please show me first.",
          "reply": "Good. Watch me. Then you try.",
          "replyBn": "ভালো। আমাকে দেখো। তারপর তুমি করো।",
          "tip": "চমৎকার! না জেনে চালাবেন না, এটা সাহসের কাজ। ফোরম্যান এটা পছন্দ করেন।"
        },
        {
          "stars": 2,
          "en": "Okay, I try.",
          "reply": "Be careful. Wear your glasses.",
          "replyBn": "সাবধান। চশমা পরো।",
          "tip": "না জেনে ড্রিল চালানো বিপজ্জনক। আগে বলুন: \"Please show me first.\""
        },
        {
          "stars": 1,
          "en": "Yes, I know. Give me.",
          "reply": "Okay. But be careful.",
          "replyBn": "ঠিক আছে। তবে সাবধান।",
          "tip": "না জেনে \"I know\" বলবেন না। এতে আপনি বা অন্য কেউ আঘাত পেতে পারে।"
        }
      ]
    },
    {
      "boss": "Why is the spanner broken? Did you break it?",
      "bn": "স্প্যানারটা ভাঙা কেন? তুমি ভেঙেছ?",
      "choices": [
        {
          "stars": 3,
          "en": "No, sir. It was small for this bolt. I need a bigger spanner.",
          "reply": "Okay. Take the bigger one from the store.",
          "replyBn": "ঠিক আছে। স্টোর থেকে বড়টা নাও।",
          "tip": "ঠিক! শান্তভাবে কারণ বুঝিয়ে বলেছেন, আর কী চান সেটাও বলেছেন।"
        },
        {
          "stars": 2,
          "en": "Not me.",
          "reply": "Then who? Tell me clearly.",
          "replyBn": "তাহলে কে? পরিষ্কার করে বলো।",
          "tip": "শুধু \"Not me\" বললে সন্দেহ বাড়ে। কী হয়েছিল সেটা বলুন।"
        },
        {
          "stars": 1,
          "en": "You give me bad tool!",
          "reply": "Don't shout. Talk politely.",
          "replyBn": "চেঁচাবে না। ভদ্রভাবে কথা বলো।",
          "tip": "দোষ চাপালে ঝগড়া হয়। ঠান্ডা মাথায় বলুন: \"Sorry, sir. I need a bigger spanner.\""
        }
      ]
    },
    {
      "boss": "Put the tools back in the box after work.",
      "bn": "কাজ শেষে যন্ত্রগুলো বাক্সে ফিরিয়ে রেখো।",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. I will put all the tools back in the box.",
          "reply": "Good. Count them also.",
          "replyBn": "ভালো। গুনেও নিও।",
          "tip": "দারুণ! নিজের মুখে বলে নিশ্চিত করেছেন। যন্ত্র হারালে সমস্যা হয়, তাই ফিরিয়ে রাখা জরুরি।"
        },
        {
          "stars": 2,
          "en": "Okay.",
          "reply": "Don't forget.",
          "replyBn": "ভুলে যেও না।",
          "tip": "\"Okay\" ঠিক আছে, তবে পুরো বাক্যে বললে আত্মবিশ্বাস বোঝা যায়: \"Yes, sir. I will put them back.\""
        },
        {
          "stars": 1,
          "en": "Someone else will do.",
          "reply": "No. Everyone puts back their own tools.",
          "replyBn": "না। সবাই নিজের যন্ত্র নিজে ফেরত রাখে।",
          "tip": "অন্যের ঘাড়ে কাজ চাপাবেন না। \"Yes, sir. I will do it.\" বলুন।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "না জানা মেশিন \"I know\" বলে চালানো কি ঠিক?",
      "a": false,
      "why": "না। আগে বলুন: \"Please show me first.\" ভুল করে চালালে আঘাত পেতে পারেন।"
    },
    {
      "q": "\"Hammer\" মানে কি হাতুড়ি?",
      "a": true,
      "why": "ঠিক। hammer মানে হাতুড়ি, spanner মানে স্প্যানার বা নাট খোলার যন্ত্র।"
    },
    {
      "q": "কাজ শেষে যন্ত্র ফিরিয়ে রাখা কি ভালো অভ্যাস?",
      "a": true,
      "why": "ঠিক। না রাখলে যন্ত্র হারায়, আর পরের দিন কাজে দেরি হয়।"
    },
    {
      "q": "\"Wheelbarrow\" মানে কি ঠেলাগাড়ি?",
      "a": true,
      "why": "ঠিক। বালি, ইট বা সিমেন্ট বহনে এটা ব্যবহার হয়।"
    },
    {
      "q": "ফোরম্যানের কথা না বুঝলে চুপ করে থাকা কি ভালো?",
      "a": false,
      "why": "না। বলুন: \"Sorry, sir. Please say that again.\" বুঝে কাজ করলে ভুল কম হয়।"
    }
  ],
  "hook": {
    "en": "Pass me the hammer, please.",
    "bn": "হাতুড়িটা দিন, দয়া করে।"
  },
  "traps": [
    {
      "title": "hold আর hole",
      "intro": "প্রায় একই শোনায়।",
      "items": [
        {
          "en": "Hold the ladder.",
          "note": "মইটা ধরে রাখুন",
          "say": "Hold the ladder."
        },
        {
          "en": "Dig a hole.",
          "note": "গর্ত খুঁড়ুন",
          "say": "Dig a hole."
        }
      ],
      "tip": "hold = ধরা। hole = গর্ত।"
    },
    {
      "title": "Bring আর Take",
      "intro": "আনা আর নিয়ে যাওয়া আলাদা।",
      "items": [
        {
          "en": "Bring the shovel.",
          "note": "বেলচা এখানে আনুন",
          "say": "Bring the shovel."
        },
        {
          "en": "Take the wheelbarrow to the sand.",
          "note": "ঠেলাগাড়ি ওখানে নিয়ে যান",
          "say": "Take the wheelbarrow to the sand."
        }
      ],
      "tip": "Bring = আমার দিকে আনুন। Take = ওদিকে নিয়ে যান।"
    },
    {
      "title": "with আর without",
      "intro": "একটা শব্দে অনুমতি, আরেকটায় নিষেধ।",
      "items": [
        {
          "en": "with training",
          "note": "প্রশিক্ষণসহ (চলবে)",
          "say": "with training"
        },
        {
          "en": "without training",
          "note": "প্রশিক্ষণ ছাড়া (নিষেধ)",
          "say": "without training"
        }
      ],
      "tip": "\"without training\" শুনলে মেশিনে হাত দেবেন না।"
    }
  ],
  "typing": [
    {
      "ask": "প্রথম কী আনতে বলছে? ইংরেজি শব্দ লিখুন",
      "say": "Bring the shovel and the bucket.",
      "num": false,
      "answers": [
        "shovel"
      ],
      "show": "shovel",
      "why": "shovel = বেলচা",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Please ___ the ladder.",
      "answers": [
        "hold"
      ],
      "show": "hold",
      "why": "hold = ধরে রাখা",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Don't use this machine ___ training.",
      "answers": [
        "without"
      ],
      "show": "without",
      "why": "without = ছাড়া",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "order": [
    {
      "ask": "ড্রিল দিয়ে গর্ত করবেন। কোন ক্রমে?",
      "steps": [
        {
          "en": "Ask how to use it",
          "bn": "কীভাবে চালাতে হয় জিজ্ঞেস করুন"
        },
        {
          "en": "Check the tool",
          "bn": "যন্ত্র দেখে নিন"
        },
        {
          "en": "Mark the spot",
          "bn": "জায়গা চিহ্নিত করুন"
        },
        {
          "en": "Start slowly",
          "bn": "ধীরে শুরু করুন"
        }
      ],
      "why": "না জানা যন্ত্র আগে জিজ্ঞেস করে শিখুন, তারপর চালান। নিজের আন্দাজে নয়।"
    },
    {
      "ask": "কাজ শেষ। কোন ক্রমে গোছাবেন?",
      "steps": [
        {
          "en": "Stop the machine",
          "bn": "মেশিন বন্ধ করুন"
        },
        {
          "en": "Clean the tool",
          "bn": "যন্ত্র পরিষ্কার করুন"
        },
        {
          "en": "Put it back in the box",
          "bn": "বাক্সে রেখে দিন"
        },
        {
          "en": "Tell the foreman",
          "bn": "ফোরম্যানকে জানান"
        }
      ],
      "why": "যন্ত্র জায়গামতো না রাখলে পরের জন যন্ত্র খুঁজে পাবে না, ক্ষতিও হবে।"
    }
  ],
  "spot": [
    {
      "q": "কোনটা ভুল?",
      "scene": "ফোরম্যান একটা নতুন ড্রিল দিলেন।",
      "options": [
        {
          "t": "I say \"I know\" but I don't. (জানি না, তবু \"জানি\" বলি)",
          "ok": true
        },
        {
          "t": "I say: How do I use this drill? (জিজ্ঞেস করি)",
          "ok": false
        },
        {
          "t": "I wait for training. (ট্রেনিংয়ের অপেক্ষা করি)",
          "ok": false
        }
      ],
      "why": "না জেনে \"I know\" বললে দুর্ঘটনা হতে পারে। জিজ্ঞেস করা বুদ্ধিমানের কাজ।"
    },
    {
      "q": "কোনটা ভুল?",
      "scene": "একটা স্প্যানার ভেঙে গেছে।",
      "options": [
        {
          "t": "I use it and say nothing. (চুপচাপ ব্যবহার করি)",
          "ok": true
        },
        {
          "t": "I say: The spanner is broken. (ভাঙা বলি)",
          "ok": false
        },
        {
          "t": "I put it aside. (আলাদা করে রাখি)",
          "ok": false
        }
      ],
      "why": "ভাঙা যন্ত্র নিয়ে কাজ করলে হাত কাটতে পারে। ফোরম্যানকে জানান।"
    },
    {
      "q": "কোনটা ভুল?",
      "scene": "কাজ শেষ হয়েছে।",
      "options": [
        {
          "t": "I leave the tools on the floor. (যন্ত্র মেঝেতে রেখে যাই)",
          "ok": true
        },
        {
          "t": "I put the tools in the box. (বাক্সে রাখি)",
          "ok": false
        },
        {
          "t": "I clean the tools first. (আগে পরিষ্কার করি)",
          "ok": false
        }
      ],
      "why": "মেঝেতে পড়ে থাকা যন্ত্রে পা লেগে কেউ পড়ে যেতে পারে।"
    }
  ],
  "mission": {
    "title": "আজ কাজে বলুন",
    "intro": "আজ কাজে অন্তত একবার এই তিনটি বাক্যের একটা ব্যবহার করুন।",
    "items": [
      {
        "en": "Pass me the hammer, please.",
        "bn": "হাতুড়িটা দিন, প্লিজ।"
      },
      {
        "en": "How do I use this drill?",
        "bn": "এই ড্রিল কীভাবে চালাব?"
      },
      {
        "en": "The drill is not working.",
        "bn": "ড্রিল কাজ করছে না।"
      }
    ],
    "tip": "না বুঝলে জিজ্ঞেস করাই সঠিক। এটা দুর্বলতা নয়।"
  }
};
