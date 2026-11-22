window.LESSON = {
  "id": "con-materials",
  "type": "A",
  "who": "ফোরম্যান",
  "title": "Cement, Sand, Bricks & Rods",
  "titleBn": "সিমেন্ট, বালি, ইট ও রড",
  "next": {
    "title": "Scaffolding & Working at Height",
    "id": "con-height"
  },
  "scene": "ভারী মাল আর সিমেন্টের মিশ্রণে ভুল হলে কাজ নষ্ট হয়, পিঠে ব্যথা হয়।",
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "How many bags of cement do you need?",
      "bn": "আপনার কয় বস্তা সিমেন্ট লাগবে?",
      "pr": "হাউ মেনি ব্যাগস অফ সিমেন্ট ডু ইউ নিড?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Where should I stack the bricks?",
      "bn": "ইটগুলো কোথায় সাজিয়ে রাখব?",
      "pr": "হোয়ার শুড আই স্ট্যাক দ্য ব্রিকস?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Is the mix okay now?",
      "bn": "মিশ্রণটা কি এখন ঠিক আছে?",
      "pr": "ইজ দ্য মিক্স ওকে নাউ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "The mix is too wet.",
      "bn": "মিশ্রণটা বেশি ভেজা।",
      "pr": "দ্য মিক্স ইজ টু ওয়েট।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "This bag is too heavy. Can someone help me?",
      "bn": "এই বস্তাটা অনেক ভারী। কেউ কি সাহায্য করবে?",
      "pr": "দিস ব্যাগ ইজ টু হেভি। ক্যান সামওয়ান হেল্প মি?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "How many steel rods should I bring?",
      "bn": "কয়টা লোহার রড আনব?",
      "pr": "হাউ মেনি স্টিল রডস শুড আই ব্রিং?"
    },
    {
      "tag": "ফোরম্যান বলবেন, বুঝে নিন",
      "en": "Mix the cement with sand and water.",
      "bn": "সিমেন্ট, বালি আর পানি মিশিয়ে নাও।",
      "pr": "মিক্স দ্য সিমেন্ট উইথ স্যান্ড অ্যান্ড ওয়াটার।"
    },
    {
      "tag": "ফোরম্যান বলবেন, বুঝে নিন",
      "en": "Add more water. It is too dry.",
      "bn": "আরও পানি দাও। এটা বেশি শুকনো।",
      "pr": "অ্যাড মোর ওয়াটার। ইট ইজ টু ড্রাই।"
    },
    {
      "tag": "ফোরম্যান বলবেন, বুঝে নিন",
      "en": "Carry the bricks carefully. Don't drop them.",
      "bn": "ইটগুলো সাবধানে বহন করো। ফেলে দিও না।",
      "pr": "ক্যারি দ্য ব্রিকস কেয়ারফুলি। ডোন্ট ড্রপ দেম।"
    },
    {
      "tag": "ফোরম্যান বলবেন, বুঝে নিন",
      "en": "Keep the cement dry. Cover it.",
      "bn": "সিমেন্ট শুকনো রাখো। ঢেকে দাও।",
      "pr": "কিপ দ্য সিমেন্ট ড্রাই। কাভার ইট।"
    },
    {
      "tag": "ফোরম্যান বলবেন, বুঝে নিন",
      "en": "Lift with your legs, not with your back.",
      "bn": "পিঠ দিয়ে না, পা দিয়ে তোলো।",
      "pr": "লিফট উইথ ইওর লেগস, নট উইথ ইওর ব্যাক।"
    }
  ],
  "listening": [
    {
      "say": "Add more water. It is too dry.",
      "options": [
        {
          "t": "আরও পানি দাও। এটা বেশি শুকনো",
          "ok": true
        },
        {
          "t": "পানি ফেলে দাও। এটা বেশি ভেজা",
          "ok": false
        },
        {
          "t": "আজ মিশ্রণ বন্ধ",
          "ok": false
        }
      ],
      "why": "add মানে যোগ করো, dry মানে শুকনো, wet মানে ভেজা। উল্টো বুঝলে মিশ্রণ নষ্ট হবে।"
    },
    {
      "say": "Carry the bricks carefully. Don't drop them.",
      "options": [
        {
          "t": "ইটগুলো ছুড়ে দাও",
          "ok": false
        },
        {
          "t": "ইটগুলো সাবধানে বহন করো। ফেলে দিও না",
          "ok": true
        },
        {
          "t": "ইট আজ লাগবে না",
          "ok": false
        }
      ],
      "why": "carefully মানে সাবধানে, drop মানে ফেলে দেওয়া। Don't drop them মানে ফেলে দিও না।"
    },
    {
      "say": "Keep the cement dry. Cover it.",
      "options": [
        {
          "t": "সিমেন্ট ভিজিয়ে রাখো",
          "ok": false
        },
        {
          "t": "সিমেন্ট শুকনো রাখো। ঢেকে দাও",
          "ok": true
        },
        {
          "t": "সিমেন্ট ফেলে দাও",
          "ok": false
        }
      ],
      "why": "cover মানে ঢাকা। বৃষ্টি বা পানি লাগলে সিমেন্ট জমে নষ্ট হয়ে যায়।"
    },
    {
      "say": "Lift with your legs, not with your back.",
      "options": [
        {
          "t": "পিঠ দিয়ে তোলো",
          "ok": false
        },
        {
          "t": "পা দিয়ে না, পিঠ দিয়ে তোলো",
          "ok": false
        },
        {
          "t": "পিঠ দিয়ে না, পা দিয়ে তোলো",
          "ok": true
        }
      ],
      "why": "lift মানে তোলা। পা বাঁকিয়ে তুললে পিঠে চাপ কম পড়ে, তাই ব্যথা কম হয়।"
    }
  ],
  "speak": [
    0,
    1,
    3
  ],
  "dialogue": [
    {
      "boss": "We need cement for the wall. Bring ten bags.",
      "bn": "দেয়ালের জন্য সিমেন্ট লাগবে। দশ বস্তা আনো।",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. Ten bags of cement. Where should I put them?",
          "reply": "Put them inside the store room. Keep them dry.",
          "replyBn": "স্টোর রুমের ভেতরে রাখো। শুকনো রাখো।",
          "tip": "দারুণ! সংখ্যা আবার বলে নিশ্চিত করেছেন, আর কোথায় রাখবেন সেটাও জিজ্ঞেস করেছেন।"
        },
        {
          "stars": 2,
          "en": "Okay.",
          "reply": "How many bags did I say?",
          "replyBn": "আমি কয় বস্তা বললাম?",
          "tip": "\"Okay\" বললে সংখ্যা ভুল হতে পারে। বলুন: \"Ten bags of cement, sir.\""
        },
        {
          "stars": 1,
          "en": "Ten bags is too many. I can't carry.",
          "reply": "Take help from others. Go.",
          "replyBn": "অন্যদের সাহায্য নাও। যাও।",
          "tip": "না বলার আগে সাহায্য চান: \"Sir, can someone help me?\""
        }
      ]
    },
    {
      "boss": "Look at the mix. Is it okay?",
      "bn": "মিশ্রণটা দেখো। ঠিক আছে?",
      "choices": [
        {
          "stars": 3,
          "en": "Sir, I think it is too wet. Should I add more sand?",
          "reply": "Yes, add some sand. Mix it again.",
          "replyBn": "হ্যাঁ, কিছু বালি দাও। আবার মেশাও।",
          "tip": "চমৎকার! নিজের মত বলেছেন, আর কী করবেন তাও জিজ্ঞেস করেছেন।"
        },
        {
          "stars": 2,
          "en": "Yes, okay.",
          "reply": "Are you sure? Look again.",
          "replyBn": "নিশ্চিত? আবার দেখো।",
          "tip": "না দেখে \"okay\" বললে ভুল মিশ্রণে কাজ হয়ে যাবে। ভালো করে দেখে বলুন।"
        },
        {
          "stars": 1,
          "en": "I don't know. I am new.",
          "reply": "You must learn. Watch carefully.",
          "replyBn": "তোমাকে শিখতে হবে। ভালো করে দেখো।",
          "tip": "\"I don't know\" না বলে শিখতে চান: \"Sir, please show me how the mix looks when it is okay.\""
        }
      ]
    },
    {
      "boss": "Stack the bricks near the wall. Not on the road.",
      "bn": "ইটগুলো দেয়ালের কাছে সাজাও। রাস্তায় না।",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, sir. Near the wall, not on the road. How high can I stack them?",
          "reply": "Not more than one meter. Then they fall.",
          "replyBn": "এক মিটারের বেশি না। নইলে পড়ে যাবে।",
          "tip": "ঠিক! নিয়ম আর নিরাপত্তা, দুটোই জেনে নিলেন।"
        },
        {
          "stars": 2,
          "en": "Okay, sir.",
          "reply": "Do it now.",
          "replyBn": "এখনই করো।",
          "tip": "ঠিক আছে, তবে কতটা উঁচু করবেন জিজ্ঞেস করলে আরও নিরাপদ হতো।"
        },
        {
          "stars": 1,
          "en": "Why not on the road? It is easy.",
          "reply": "Because it blocks the way. Move them.",
          "replyBn": "কারণ এতে পথ আটকায়। সরাও।",
          "tip": "নিয়ম নিয়ে তর্ক না করে বুঝে নিন: \"Yes, sir. Near the wall.\""
        }
      ]
    },
    {
      "boss": "Your back hurts? What happened?",
      "bn": "তোমার পিঠে ব্যথা? কী হয়েছে?",
      "choices": [
        {
          "stars": 3,
          "en": "Sorry, sir. I lifted the bag with my back. I will lift with my legs.",
          "reply": "Good. Take rest for ten minutes.",
          "replyBn": "ভালো। দশ মিনিট বিশ্রাম নাও।",
          "tip": "দারুণ! কারণ বলেছেন আর ঠিক কী করবেন তা বলেছেন। শরীরের কষ্ট চেপে না রেখে জানানোই ভালো।"
        },
        {
          "stars": 2,
          "en": "A little pain.",
          "reply": "Show me where. Sit down.",
          "replyBn": "কোথায় দেখাও। বসো।",
          "tip": "শুধু \"pain\" বললে বোঝা কঠিন। বলুন: \"My back hurts, sir.\""
        },
        {
          "stars": 1,
          "en": "Nothing. I am fine.",
          "reply": "Okay. Don't lift heavy things then.",
          "replyBn": "ঠিক আছে। তাহলে ভারী জিনিস তুলো না।",
          "tip": "ব্যথা চেপে রাখলে সমস্যা বাড়ে। সত্যি বলুন: \"My back hurts.\""
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "ভারী বস্তা পিঠ বাঁকিয়ে তোলা কি ঠিক?",
      "a": false,
      "why": "না। \"Lift with your legs, not with your back.\" পা দিয়ে তুললে পিঠ ভালো থাকে।"
    },
    {
      "q": "সিমেন্ট ঢেকে শুকনো রাখা কি জরুরি?",
      "a": true,
      "why": "ঠিক। \"Keep the cement dry. Cover it.\" ভিজলে সিমেন্ট জমে যায়।"
    },
    {
      "q": "\"Too wet\" মানে কি বেশি ভেজা?",
      "a": true,
      "why": "ঠিক। wet মানে ভেজা, dry মানে শুকনো, আর too মানে বেশি।"
    },
    {
      "q": "ইট রাস্তায় সাজিয়ে রাখলে কি সমস্যা নেই?",
      "a": false,
      "why": "না। এতে পথ আটকায় আর দুর্ঘটনা হতে পারে। ফোরম্যান বলেছেন: \"Not on the road.\""
    },
    {
      "q": "পিঠে ব্যথা পেলে চেপে যাওয়া কি ভালো?",
      "a": false,
      "why": "না। বলুন: \"My back hurts, sir.\" ব্যথা চেপে রাখলে সমস্যা বাড়ে।"
    }
  ],
  "hook": {
    "en": "How many bags of cement do you need?",
    "bn": "কয় বস্তা সিমেন্ট লাগবে?"
  },
  "traps": [
    {
      "title": "too wet আর too dry",
      "intro": "মিশ্রণ ঠিক করতে এই দুটো শব্দ জরুরি।",
      "items": [
        {
          "en": "too wet",
          "note": "বেশি ভেজা",
          "say": "too wet"
        },
        {
          "en": "too dry",
          "note": "বেশি শুকনো",
          "say": "too dry"
        }
      ],
      "tip": "dry হলে পানি দিন। wet হলে আর পানি নয়।"
    },
    {
      "title": "bag আর back",
      "intro": "প্রায় একই শোনায়।",
      "items": [
        {
          "en": "a bag of cement",
          "note": "এক বস্তা সিমেন্ট",
          "say": "a bag of cement"
        },
        {
          "en": "my back",
          "note": "আমার পিঠ",
          "say": "my back"
        }
      ],
      "tip": "bag = বস্তা। back = পিঠ। ভারী মাল পিঠ দিয়ে নয়, পা দিয়ে তুলুন।"
    },
    {
      "title": "How many আর How much",
      "intro": "গোনা যায় কি না, তার ওপর নির্ভর।",
      "items": [
        {
          "en": "How many bags?",
          "note": "কয়টা বস্তা?",
          "say": "How many bags?"
        },
        {
          "en": "How much water?",
          "note": "কতটুকু পানি?",
          "say": "How much water?"
        }
      ],
      "tip": "many = গুনতে পারা যায়। much = মাপতে হয়।"
    }
  ],
  "typing": [
    {
      "ask": "মিশ্রণ কেমন? wet নাকি dry লিখুন",
      "say": "Add more water. It is too dry.",
      "num": false,
      "answers": [
        "dry"
      ],
      "show": "dry",
      "why": "too dry = বেশি শুকনো, তাই পানি দিন",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Lift with your legs, not with your ___.",
      "answers": [
        "back"
      ],
      "show": "back",
      "why": "back = পিঠ",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "How ___ bags of cement?",
      "answers": [
        "many"
      ],
      "show": "many",
      "why": "many = কয়টা",
      "ph": "ইংরেজি শব্দ"
    }
  ]
};
