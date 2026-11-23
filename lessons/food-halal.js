window.LESSON = {
  "id": "food-halal",
  "type": "A",
  "who": "রেস্তোরাঁর কর্মী",
  "title": "Ordering Food & Asking About Halal",
  "titleBn": "খাবার অর্ডার ও হালাল জিজ্ঞেস করা",
  "next": { "title": "Basic Shopping & Asking Prices", "id": "shopping-prices" },
  "scene": "সব দোকানের খাবার হালাল নাও হতে পারে। আজ অর্ডার করা আর ঠিকমতো জিজ্ঞেস করা শিখবেন।",
  "hook": { "en": "Is this halal?", "bn": "এটা কি হালাল?" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "Is this halal?", "bn": "এটা কি হালাল?", "pr": "ইজ দিস হালাল?" },
    { "tag": "আপনি বলবেন", "en": "Does it contain pork or alcohol?", "bn": "এতে কি শূকরের মাংস বা অ্যালকোহল আছে?", "pr": "ডাজ ইট কনটেইন পর্ক অর অ্যালকোহল?" },
    { "tag": "আপনি বলবেন", "en": "Is the meat halal certified?", "bn": "মাংস কি হালাল সার্টিফায়েড?", "pr": "ইজ দ্য মিট হালাল সার্টিফায়েড?" },
    { "tag": "আপনি বলবেন", "en": "I would like chicken rice, please.", "bn": "আমি চিকেন রাইস নিতে চাই, দয়া করে।", "pr": "আই উড লাইক চিকেন রাইস, প্লিজ।" },
    { "tag": "আপনি বলবেন", "en": "Not spicy, please.", "bn": "ঝাল দেবেন না, দয়া করে।", "pr": "নট স্পাইসি, প্লিজ।" },
    { "tag": "আপনি বলবেন", "en": "Can I have the bill, please?", "bn": "বিলটা দিতে পারেন, দয়া করে?", "pr": "ক্যান আই হ্যাভ দ্য বিল, প্লিজ?" },
    { "tag": "বুঝে নিন", "en": "Eat here or take away?", "bn": "এখানে খাবেন, নাকি প্যাক করে নেবেন?", "pr": "ইট হিয়ার অর টেক অ্যাওয়ে?" },
    { "tag": "বুঝে নিন", "en": "Anything to drink?", "bn": "কিছু পান করবেন?", "pr": "এনিথিং টু ড্রিংক?" },
    { "tag": "বুঝে নিন", "en": "Sorry, this has pork.", "bn": "দুঃখিত, এতে শূকরের মাংস আছে।", "pr": "সরি, দিস হ্যাজ পর্ক।" }
  ],
  "traps": [
    {
      "title": "lard, gelatin আর alcohol",
      "intro": "এই তিনটি জিনিস খাবারের ভেতরে লুকিয়ে থাকতে পারে।",
      "items": [
        { "en": "lard", "note": "শূকরের চর্বি, রান্নায় ব্যবহার হয়", "say": "lard" },
        { "en": "gelatin", "note": "জেলাটিন, মিষ্টি বা ক্যান্ডিতে থাকে, উৎস অজানা হতে পারে", "say": "gelatin" },
        { "en": "alcohol", "note": "অ্যালকোহল, সস বা রান্নায় থাকে", "say": "alcohol" }
      ],
      "tip": "শুধু \"yes\" শুনে নিশ্চিন্ত হবেন না। জিজ্ঞেস করুন: \"Is there lard, gelatin or alcohol in it?\""
    },
    {
      "title": "vegetarian মানেই হালাল নয়",
      "intro": "নিরামিষ খাবারেও সস বা ঝোলে সমস্যা থাকতে পারে।",
      "items": [
        { "en": "vegetarian", "note": "নিরামিষ", "say": "vegetarian" },
        { "en": "broth", "note": "মাংস বা হাড়ের ঝোল", "say": "broth" },
        { "en": "sauce", "note": "সস", "say": "sauce" }
      ],
      "tip": "জিজ্ঞেস করুন: \"Is there meat broth or alcohol in the sauce?\""
    },
    {
      "title": "eat here, take away আর bill",
      "intro": "দোকানে অর্ডারের সময় এই কথাগুলো বারবার আসে।",
      "items": [
        { "en": "eat here", "note": "এখানে বসে খাওয়া", "say": "eat here" },
        { "en": "take away", "note": "প্যাক করে নেওয়া", "say": "take away" },
        { "en": "bill", "note": "খাবারের হিসাব", "say": "bill" }
      ],
      "tip": "প্যাক করে নিতে চাইলে বলুন: \"Take away, please.\""
    }
  ],
  "listening": [
    {
      "say": "Eat here or take away?",
      "options": [
        { "t": "এখানে খাবেন, নাকি প্যাক করে নেবেন?", "ok": true },
        { "t": "কত টাকা দেবেন?", "ok": false },
        { "t": "কী খাবেন?", "ok": false }
      ],
      "why": "take away = প্যাক করে নেওয়া।"
    },
    {
      "say": "Anything to drink?",
      "options": [
        { "t": "আর কিছু খাবেন?", "ok": false },
        { "t": "কিছু পান করবেন?", "ok": true },
        { "t": "পানি শেষ", "ok": false }
      ],
      "why": "drink = পান করা। উত্তর: \"Water, please.\""
    },
    {
      "say": "Sorry, this has pork.",
      "options": [
        { "t": "দুঃখিত, এতে শূকরের মাংস আছে", "ok": true },
        { "t": "দুঃখিত, এটা শেষ", "ok": false },
        { "t": "দুঃখিত, এটা হালাল", "ok": false }
      ],
      "why": "pork = শূকরের মাংস। এই কথা শুনলে অন্য খাবার নিন।"
    },
    {
      "say": "It is not spicy.",
      "options": [
        { "t": "এটা খুব ঝাল", "ok": false },
        { "t": "এটা ঝাল নয়", "ok": true },
        { "t": "এটা ঠান্ডা", "ok": false }
      ],
      "why": "spicy = ঝাল। not spicy = ঝাল নয়।"
    }
  ],
  "typing": [
    {
      "ask": "কত ডলার? সংখ্যা লিখুন",
      "say": "It is ten dollars.",
      "num": true,
      "answers": ["10"],
      "show": "10",
      "why": "ten = ১০",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Is this ___?",
      "answers": ["halal"],
      "show": "halal",
      "why": "halal = হালাল",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "I would like chicken rice, ___.",
      "answers": ["please"],
      "show": "please",
      "why": "please = দয়া করে",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [0, 1, 5],
  "dialogue": [
    {
      "boss": "Hi. What would you like?",
      "bn": "হাই। কী নেবেন? (রেস্তোরাঁর কর্মী)",
      "choices": [
        { "stars": 3, "en": "I would like chicken rice, please. Is it halal?", "reply": "Yes, the chicken is halal.", "replyBn": "হ্যাঁ, মুরগি হালাল।", "tip": "অর্ডার আর হালাল প্রশ্ন একসাথে। \"I would like...\" ভদ্র শোনায়।" },
        { "stars": 2, "en": "Chicken rice.", "reply": "Anything else?", "replyBn": "আর কিছু?", "tip": "চলে। তবে হালাল কি না জিজ্ঞেস করে নিন।" },
        { "stars": 1, "en": "Give me chicken.", "reply": "Okay.", "replyBn": "ঠিক আছে।", "tip": "\"Give me\" রূঢ় শোনায়। বলুন: \"I would like..., please.\"" }
      ]
    },
    {
      "boss": "This dish is vegetarian. No problem.",
      "bn": "এটা নিরামিষ। কোনো সমস্যা নেই।",
      "choices": [
        { "stars": 3, "en": "Thank you. Is there meat broth or alcohol in the sauce?", "reply": "Let me check with the chef.", "replyBn": "আমি রাঁধুনিকে জিজ্ঞেস করে আসছি।", "tip": "নিরামিষ হলেও সস বা ঝোলে সমস্যা থাকতে পারে। বিস্তারিত জিজ্ঞেস করা ভালো।" },
        { "stars": 2, "en": "Halal?", "reply": "Yes, yes.", "replyBn": "হ্যাঁ, হ্যাঁ।", "tip": "\"Yes, yes\" যথেষ্ট নয়। \"What is in the sauce?\" জিজ্ঞেস করুন।" },
        { "stars": 1, "en": "Okay, thanks.", "reply": "Enjoy.", "replyBn": "ভালো লাগুক।", "tip": "জিজ্ঞেস না করলে লুকানো উপাদান জানা যায় না।" }
      ]
    },
    {
      "boss": "I think it is halal. I am not sure.",
      "bn": "আমার মনে হয় হালাল। আমি নিশ্চিত না।",
      "choices": [
        { "stars": 3, "en": "Thank you for telling me. I will choose something else.", "reply": "Try the fish. It is fresh.", "replyBn": "মাছ নিন। এটা তাজা।", "tip": "নিশ্চিত না হলে অন্য খাবার নিন। সত্য বলার জন্য ধন্যবাদ দেওয়া ভালো।" },
        { "stars": 2, "en": "Maybe okay.", "reply": "I do not know.", "replyBn": "আমি জানি না।", "tip": "\"হয়তো\" বলে ঝুঁকি নেবেন না। অন্য খাবার নিন বা আবার জিজ্ঞেস করুন।" },
        { "stars": 1, "en": "It is okay. I will eat.", "reply": "Okay.", "replyBn": "ঠিক আছে।", "tip": "আপনার নিয়ম মানতে চাইলে নিশ্চিত না হয়ে খাবেন না।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "\"vegetarian\" মানেই কি সবসময় হালাল?",
      "a": false,
      "why": "না। সস বা ঝোলে অ্যালকোহল বা প্রাণীজ উপাদান থাকতে পারে। জিজ্ঞেস করুন।"
    },
    {
      "q": "\"lard\" মানে কি শূকরের চর্বি?",
      "a": true,
      "why": "ঠিক। রান্নায় ব্যবহার হতে পারে। জিজ্ঞেস করুন: \"Is there lard in it?\""
    },
    {
      "q": "কেউ শুধু \"yes, yes\" বললে আর প্রশ্ন না করা কি ভালো?",
      "a": false,
      "why": "না। \"What is in it?\" জিজ্ঞেস করে স্পষ্ট জেনে নিন।"
    },
    {
      "q": "\"take away\" মানে কি এখানে বসে খাওয়া?",
      "a": false,
      "why": "না। take away = প্যাক করে নেওয়া। এখানে খাওয়া মানে eat here।"
    },
    {
      "q": "\"Is the meat halal certified?\" জিজ্ঞেস করা কি ভালো?",
      "a": true,
      "why": "ঠিক। মাংসের উৎস নিয়ে নিশ্চিত হওয়ার ভালো প্রশ্ন।"
    }
  ]
};
