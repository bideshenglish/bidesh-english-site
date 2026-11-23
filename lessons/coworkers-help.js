window.LESSON = {
  "id": "coworkers-help",
  "type": "A",
  "who": "সহকর্মী",
  "title": "Asking Coworkers for Help & Sharing Tasks",
  "titleBn": "সহকর্মীর সাহায্য চাওয়া ও কাজ ভাগ করা",
  "next": { "title": "Sick Leave, Emergency Leave & Going Home", "id": "sick-leave-home" },
  "scene": "সাইটে সহকর্মীরা নানা দেশের, ভাষাও মেশানো। আজ সাহায্য চাওয়া, কাজ ভাগ করা আর বুঝে নেওয়া শিখবেন।",
  "hook": { "en": "Can you show me how, please?", "bn": "কীভাবে করতে হয়, দেখিয়ে দেবেন, দয়া করে?" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "Can you show me how, please?", "bn": "কীভাবে করতে হয়, দেখিয়ে দেবেন, দয়া করে?", "pr": "ক্যান ইউ শো মি হাউ, প্লিজ?" },
    { "tag": "আপনি বলবেন", "en": "Can you help me with this?", "bn": "এটাতে একটু সাহায্য করবেন?", "pr": "ক্যান ইউ হেল্প মি উইথ দিস?" },
    { "tag": "আপনি বলবেন", "en": "I will do this. You do that.", "bn": "আমি এটা করি, আপনি ওটা করুন।", "pr": "আই উইল ডু দিস। ইউ ডু দ্যাট।" },
    { "tag": "আপনি বলবেন", "en": "Ready? Lift on three.", "bn": "তৈরি? তিন গুনে তুলব।", "pr": "রেডি? লিফট অন থ্রি।" },
    { "tag": "আপনি বলবেন", "en": "Do you mean this one?", "bn": "আপনি কি এটা বোঝাচ্ছেন?", "pr": "ডু ইউ মিন দিস ওয়ান?" },
    { "tag": "আপনি বলবেন", "en": "Do you need help?", "bn": "আপনার কি সাহায্য লাগবে?", "pr": "ডু ইউ নিড হেল্প?" },
    { "tag": "বুঝে নিন", "en": "Wait. I am busy now.", "bn": "একটু অপেক্ষা করুন। আমি এখন ব্যস্ত।", "pr": "ওয়েট। আই অ্যাম বিজি নাউ।" },
    { "tag": "বুঝে নিন", "en": "Hold this side.", "bn": "এই দিকটা ধরুন।", "pr": "হোল্ড দিস সাইড।" },
    { "tag": "বুঝে নিন", "en": "Stop! Put it down.", "bn": "থামুন! নামিয়ে রাখুন।", "pr": "স্টপ! পুট ইট ডাউন।" }
  ],
  "traps": [
    {
      "title": "বুঝেছেন কি না, নিজে বলে মিলিয়ে নিন",
      "intro": "মাথা নেড়ে \"yes\" বললে সহকর্মী ধরে নেয় আপনি বুঝেছেন। ভুল হলে ঝুঁকি আপনার।",
      "items": [
        { "en": "So I carry this to Block B, right?", "note": "তাহলে এটা ব্লক বি-তে নেব, ঠিক?", "say": "So I carry this to Block B, right?" },
        { "en": "Like this?", "note": "এভাবে?", "say": "Like this?" },
        { "en": "Do you mean this one?", "note": "আপনি কি এটা বোঝাচ্ছেন?", "say": "Do you mean this one?" }
      ],
      "tip": "কাজ শুরুর আগে নিজের কথায় একবার বলুন: \"So I..., right?\" ভুল থাকলে সাথে সাথে ধরা পড়বে।"
    },
    {
      "title": "সাইটে শোনা আরবি শব্দ",
      "intro": "এগুলো ইংরেজি নয়, আরবি। অনেক সাইটে সহকর্মীরা এভাবে মিশিয়ে বলে (গালফ দেশে)।",
      "items": [
        { "en": "yalla", "note": "চলো, জলদি করো", "say": "yalla" },
        { "en": "khalas", "note": "শেষ, থামো", "say": "khalas" },
        { "en": "mafi", "note": "নেই", "say": "mafi" }
      ],
      "tip": "কেউ \"Yalla!\" বললে জলদি করতে বলছে। তাড়ায় ঝুঁকি নেবেন না, দরকারে বলুন: \"Wait, I am not ready.\""
    },
    {
      "title": "stop আর wait",
      "intro": "দুটো শব্দ কাছাকাছি, কিন্তু গুরুত্ব আলাদা।",
      "items": [
        { "en": "stop", "note": "এখনই থামুন (জরুরি)", "say": "stop" },
        { "en": "wait", "note": "একটু অপেক্ষা করুন", "say": "wait" },
        { "en": "careful", "note": "সাবধান", "say": "careful" }
      ],
      "tip": "\"Stop!\" শুনলে সাথে সাথে থামুন। আগে থামুন, পরে জিজ্ঞেস করুন।"
    }
  ],
  "listening": [
    {
      "say": "Hold this side.",
      "options": [
        { "t": "এই দিকটা ধরুন", "ok": true },
        { "t": "এই দিকটা ফেলে দিন", "ok": false },
        { "t": "ওই দিকে যান", "ok": false }
      ],
      "why": "hold = ধরা। side = দিক।"
    },
    {
      "say": "Wait. I am busy now.",
      "options": [
        { "t": "আমি এখন ছুটিতে", "ok": false },
        { "t": "একটু অপেক্ষা করুন, আমি এখন ব্যস্ত", "ok": true },
        { "t": "দ্রুত আসুন", "ok": false }
      ],
      "why": "busy = ব্যস্ত। wait = অপেক্ষা করা।"
    },
    {
      "say": "Stop! Put it down.",
      "options": [
        { "t": "আরও তাড়াতাড়ি চলুন", "ok": false },
        { "t": "এটা আমাকে দিন", "ok": false },
        { "t": "থামুন! নামিয়ে রাখুন", "ok": true }
      ],
      "why": "put down = নামিয়ে রাখা। Stop শুনলে সাথে সাথে থামুন।"
    },
    {
      "say": "Ready? Lift on three.",
      "options": [
        { "t": "তৈরি? তিন গুনে তুলুন", "ok": true },
        { "t": "তিনজন তুলবে", "ok": false },
        { "t": "তিন ঘণ্টা অপেক্ষা", "ok": false }
      ],
      "why": "Lift on three = এক, দুই, তিন বলার সাথে সাথে তোলা।"
    }
  ],
  "typing": [
    {
      "ask": "কত গুনে তুলবেন? সংখ্যা লিখুন",
      "say": "Ready? Lift on three.",
      "num": true,
      "answers": ["3"],
      "show": "3",
      "why": "three = ৩",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Can you ___ me how, please?",
      "answers": ["show"],
      "show": "show",
      "why": "show = দেখানো",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "I will do this. You do ___.",
      "answers": ["that"],
      "show": "that",
      "why": "that = ওটা",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [0, 3, 4],
  "dialogue": [
    {
      "boss": "Carry these pipes to Block B.",
      "bn": "এই পাইপগুলো ব্লক বি-তে নিয়ে যাও। (সহকর্মী বলছে, আপনি নতুন, পথ জানেন না)",
      "choices": [
        { "stars": 3, "en": "Sure. So I carry these pipes to Block B, right? Which way?", "reply": "Yes. Go straight, then left.", "replyBn": "হ্যাঁ। সোজা যাও, তারপর বাঁয়ে।", "tip": "নিজের কথায় মিলিয়ে নিয়েছেন আর পথ জিজ্ঞেস করেছেন। এতে ভুল কমে।" },
        { "stars": 2, "en": "Okay.", "reply": "Go.", "replyBn": "যাও।", "tip": "পথ না জানলে জিজ্ঞেস করুন: \"Which way?\"" },
        { "stars": 1, "en": "Yes, yes.", "reply": "Okay, go.", "replyBn": "ঠিক আছে, যাও।", "tip": "না বুঝে \"yes\" বললে ভুল জায়গায় যেতে পারেন। আগে মিলিয়ে নিন।" }
      ]
    },
    {
      "boss": "This is too heavy for one person.",
      "bn": "এটা একজনের জন্য বেশি ভারী। (সহকর্মী পাশে দাঁড়িয়ে)",
      "choices": [
        { "stars": 3, "en": "Yes. Ready? Lift on three. One, two, three.", "reply": "Lift!", "replyBn": "তোলো!", "tip": "একজন গোনে, সবাই একসাথে তোলে। কেউ আগে বা পরে তুললে একজনের পিঠে চাপ পড়ে।" },
        { "stars": 2, "en": "I will lift alone.", "reply": "No, it is heavy!", "replyBn": "না, এটা ভারী!", "tip": "একা তুললে চোট লাগতে পারে। সাহায্য নিন।" },
        { "stars": 1, "en": "Quick, quick!", "reply": "Wait! Not ready!", "replyBn": "দাঁড়াও! আমি তৈরি না!", "tip": "তাড়াহুড়ো করে তুললে একজনের ঘাড়ে চাপ পড়ে। আগে \"Ready?\" বলুন।" }
      ]
    },
    {
      "boss": "Can you help me? I need two hands here.",
      "bn": "আমাকে একটু সাহায্য করবে? এখানে দুই হাত লাগবে। (আপনি এখন অন্য কাজে ব্যস্ত)",
      "choices": [
        { "stars": 3, "en": "Sorry, I am busy now. I can help in five minutes.", "reply": "Okay, thanks.", "replyBn": "ঠিক আছে, ধন্যবাদ।", "tip": "ভদ্রভাবে সময় বলেছেন। কথা রাখুন, পাঁচ মিনিট পরে যান।" },
        { "stars": 2, "en": "No.", "reply": "Okay...", "replyBn": "আচ্ছা...", "tip": "শুধু \"No\" রূঢ় শোনায়। কারণ আর সময় বলুন।" },
        { "stars": 1, "en": "Yes, yes.", "reply": "Okay, I wait.", "replyBn": "ঠিক আছে, আমি অপেক্ষা করছি।", "tip": "হ্যাঁ বলে না গেলে সহকর্মী ভরসা হারায়। যা পারবেন না, সত্য বলুন।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "নতুন কাজ বুঝতে না পারলে \"Can you show me how?\" বলা কি ভালো?",
      "a": true,
      "why": "ঠিক। না জেনে করলে ভুল আর ঝুঁকি দুটোই বাড়ে।"
    },
    {
      "q": "ভারী জিনিস তোলার আগে \"Ready? Lift on three\" বলে একসাথে তোলা কি ভালো?",
      "a": true,
      "why": "ঠিক। একজন গোনে, সবাই একসাথে তোলে।"
    },
    {
      "q": "কেউ \"Stop!\" বললে আগে কাজ শেষ করে তারপর থামা কি ভালো?",
      "a": false,
      "why": "না। \"Stop!\" শুনলে সাথে সাথে থামুন। আগে থামুন, পরে জিজ্ঞেস করুন।"
    },
    {
      "q": "না বুঝে \"Yes, yes\" বলে কাজ শুরু করা কি ভালো?",
      "a": false,
      "why": "না। বলুন: \"So I..., right?\" মিলিয়ে নিন।"
    },
    {
      "q": "\"Do you mean this one?\" মানে কি \"আপনি কি এটা বোঝাচ্ছেন?\"",
      "a": true,
      "why": "ঠিক। আঙুল দিয়ে দেখিয়ে জিজ্ঞেস করলে ভুল কমে।"
    }
  ]
};
