window.LESSON = {
  "id": "lost-help",
  "type": "A",
  "who": "পুলিশ / এয়ারলাইনের কর্মী / সাহায্যকারী",
  "title": "Lost Passport, Lost Bag & Asking for Help",
  "titleBn": "পাসপোর্ট বা ব্যাগ হারালে সাহায্য চাওয়া",
  "next": { "title": "Talking to Your Boss", "id": "boss" },
  "scene": "পাসপোর্ট বা ব্যাগ হারালে ঘাবড়ে গেলে ভুল হয়। আজ কাকে কী বলবেন, সেটা শিখবেন।",
  "hook": { "en": "I lost my passport.", "bn": "আমার পাসপোর্ট হারিয়ে গেছে।" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "I lost my passport.", "bn": "আমার পাসপোর্ট হারিয়ে গেছে।", "pr": "আই লস্ট মাই পাসপোর্ট।" },
    { "tag": "আপনি বলবেন", "en": "I need a police report.", "bn": "আমার একটা পুলিশ রিপোর্ট দরকার।", "pr": "আই নিড আ পুলিশ রিপোর্ট।" },
    { "tag": "আপনি বলবেন", "en": "My bag is missing.", "bn": "আমার ব্যাগ পাওয়া যাচ্ছে না।", "pr": "মাই ব্যাগ ইজ মিসিং।" },
    { "tag": "আপনি বলবেন", "en": "Is there anyone who speaks Bengali?", "bn": "বাংলা বলতে পারেন এমন কেউ আছেন?", "pr": "ইজ দেয়ার এনিওয়ান হু স্পিকস বেঙ্গলি?" },
    { "tag": "আপনি বলবেন", "en": "Where is the Bangladesh Embassy?", "bn": "বাংলাদেশ দূতাবাস কোথায়?", "pr": "হোয়্যার ইজ দ্য বাংলাদেশ এমব্যাসি?" },
    { "tag": "আপনি বলবেন", "en": "Can I have a copy of the report?", "bn": "রিপোর্টের একটা কপি পেতে পারি?", "pr": "ক্যান আই হ্যাভ আ কপি অব দ্য রিপোর্ট?" },
    { "tag": "বুঝে নিন", "en": "When and where did you lose it?", "bn": "কখন আর কোথায় হারিয়েছেন?", "pr": "হোয়েন অ্যান্ড হোয়্যার ডিড ইউ লুজ ইট?" },
    { "tag": "বুঝে নিন", "en": "Please fill in this form.", "bn": "এই ফর্মটা পূরণ করুন।", "pr": "প্লিজ ফিল ইন দিস ফর্ম।" },
    { "tag": "বুঝে নিন", "en": "We will contact you if we find your bag.", "bn": "আপনার ব্যাগ পেলে আমরা যোগাযোগ করব।", "pr": "উই উইল কন্টাক্ট ইউ ইফ উই ফাইন্ড ইওর ব্যাগ।" }
  ],
  "traps": [
    {
      "title": "lost আর stolen",
      "intro": "পুলিশকে সত্য বলুন। দুটো শব্দ আলাদা।",
      "items": [
        { "en": "lost", "note": "হারিয়ে গেছে", "say": "lost" },
        { "en": "stolen", "note": "চুরি হয়েছে", "say": "stolen" },
        { "en": "report", "note": "অভিযোগ বা রিপোর্ট", "say": "report" }
      ],
      "tip": "নিশ্চিত না হলে \"stolen\" বলবেন না। বলুন: \"I think I lost it.\" পাসপোর্টের জন্য আগে পুলিশ রিপোর্ট লাগে, তারপর দূতাবাসে যাবেন।"
    },
    {
      "title": "emergency, police আর embassy",
      "intro": "বিপদে এই তিনটা শব্দ কাজে লাগে।",
      "items": [
        { "en": "emergency", "note": "জরুরি অবস্থা", "say": "emergency" },
        { "en": "police", "note": "পুলিশ", "say": "police" },
        { "en": "embassy", "note": "দূতাবাস", "say": "embassy" }
      ],
      "tip": "জরুরি নম্বর দেশে দেশে আলাদা (যেমন UAE-তে পুলিশ ৯৯৯, অ্যাম্বুলেন্স ৯৯৮)। পৌঁছেই নিজের দেশের নম্বর আর দূতাবাসের নম্বর ফোনে লিখে রাখুন।"
    },
    {
      "title": "delayed আর lost baggage",
      "intro": "ব্যাগ না এলে বিমানবন্দর ছাড়ার আগেই কাজ করতে হয়।",
      "items": [
        { "en": "delayed", "note": "দেরিতে আসছে", "say": "delayed" },
        { "en": "missing", "note": "পাওয়া যাচ্ছে না", "say": "missing" },
        { "en": "report form", "note": "অভিযোগ ফর্ম", "say": "report form" }
      ],
      "tip": "বিমানবন্দর ছাড়ার আগে এয়ারলাইনের ডেস্কে রিপোর্ট করুন। ফর্মের কপি আর ফোন নম্বর নিন।"
    }
  ],
  "listening": [
    {
      "say": "When and where did you lose it?",
      "options": [
        { "t": "কখন আর কোথায় হারিয়েছেন?", "ok": true },
        { "t": "কে হারিয়েছে?", "ok": false },
        { "t": "কত টাকার ছিল?", "ok": false }
      ],
      "why": "When = কখন। where = কোথায়। lose = হারানো।"
    },
    {
      "say": "Please fill in this form.",
      "options": [
        { "t": "এই ফর্মটা ফেরত দিন", "ok": false },
        { "t": "এই ফর্মটা পূরণ করুন", "ok": true },
        { "t": "ফর্ম লাগবে না", "ok": false }
      ],
      "why": "fill in = পূরণ করা।"
    },
    {
      "say": "We will contact you if we find your bag.",
      "options": [
        { "t": "আপনার ব্যাগ পাওয়া যাবে না", "ok": false },
        { "t": "ব্যাগ পেলে আমরা যোগাযোগ করব", "ok": true },
        { "t": "আপনি কাল আসুন", "ok": false }
      ],
      "why": "contact = যোগাযোগ করা। ফোন নম্বর দিয়ে যান।"
    },
    {
      "say": "You need a police report first.",
      "options": [
        { "t": "আগে পুলিশ রিপোর্ট লাগবে", "ok": true },
        { "t": "পুলিশ ডাকবেন না", "ok": false },
        { "t": "পুলিশ রিপোর্ট শেষ", "ok": false }
      ],
      "why": "first = আগে। পাসপোর্ট হারালে পুলিশ রিপোর্ট প্রথম ধাপ।"
    }
  ],
  "typing": [
    {
      "ask": "কত দিন পরে? সংখ্যা লিখুন",
      "say": "Please come back in fifteen days.",
      "num": true,
      "answers": ["15"],
      "show": "15",
      "why": "fifteen = ১৫",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "I lost my ___.",
      "answers": ["passport"],
      "show": "passport",
      "why": "passport = পাসপোর্ট",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Can I have a ___ of the report?",
      "answers": ["copy"],
      "show": "copy",
      "why": "copy = কপি",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [0, 3, 4],
  "dialogue": [
    {
      "boss": "When and where did you lose your passport?",
      "bn": "আপনি কখন আর কোথায় পাসপোর্ট হারিয়েছেন? (পুলিশ জিজ্ঞেস করছেন)",
      "choices": [
        { "stars": 3, "en": "Yesterday evening, near the bus station. I think I lost it on the bus.", "reply": "Okay. Please fill in this form.", "replyBn": "ঠিক আছে। এই ফর্মটা পূরণ করুন।", "tip": "কখন, কোথায়, কীভাবে, তিনটাই বলেছেন। আর \"I think\" বলে সত্য রেখেছেন।" },
        { "stars": 2, "en": "I don't know.", "reply": "Please try to remember.", "replyBn": "মনে করার চেষ্টা করুন।", "tip": "আন্দাজ করে সময় আর জায়গা বলুন, \"I think...\" দিয়ে শুরু করুন।" },
        { "stars": 1, "en": "Somebody stole it.", "reply": "Do you have proof?", "replyBn": "প্রমাণ আছে?", "tip": "নিশ্চিত না হলে \"stolen\" বলবেন না। মিথ্যা বললে রিপোর্টে সমস্যা হয়।" }
      ]
    },
    {
      "boss": "Sorry, your bag did not come.",
      "bn": "দুঃখিত, আপনার ব্যাগ আসেনি। (এয়ারলাইনের ডেস্ক)",
      "choices": [
        { "stars": 3, "en": "Can I fill in a report here? Please give me a copy and your phone number.", "reply": "Yes. Here is the form. We will call you.", "replyBn": "হ্যাঁ। এই নিন ফর্ম। আমরা ফোন করব।", "tip": "বিমানবন্দর ছাড়ার আগেই রিপোর্ট করেছেন। কপি আর যোগাযোগের নম্বর রাখুন।" },
        { "stars": 2, "en": "When will it come?", "reply": "We don't know. Please fill in the form.", "replyBn": "জানি না। ফর্ম পূরণ করুন।", "tip": "ফর্মটা আগে পূরণ করুন, কারণ ওটাই ব্যাগ খোঁজার প্রমাণ।" },
        { "stars": 1, "en": "Okay.", "reply": "Bye.", "replyBn": "বিদায়।", "tip": "রিপোর্ট ছাড়া চলে গেলে ব্যাগ খুঁজে পাওয়া কঠিন হয়। আগে রিপোর্ট করুন।" }
      ]
    },
    {
      "boss": "Do you need help?",
      "bn": "আপনার কি সাহায্য লাগবে? (পথচারী বা পুলিশ)",
      "choices": [
        { "stars": 3, "en": "Yes, please. Is there anyone who speaks Bengali? Where is the Bangladesh Embassy?", "reply": "Wait. I will call someone.", "replyBn": "অপেক্ষা করুন। আমি কাউকে ডাকছি।", "tip": "ভাষা জানা কাউকে চাওয়া আর দূতাবাসের ঠিকানা জানা, দুটোই বুদ্ধিমানের কাজ।" },
        { "stars": 2, "en": "Help me.", "reply": "What help?", "replyBn": "কী সাহায্য?", "tip": "সমস্যাটা বলুন: \"I lost my passport.\"" },
        { "stars": 1, "en": "No, thank you.", "reply": "Okay.", "replyBn": "ঠিক আছে।", "tip": "বিপদে সাহায্য নিতে লজ্জা নেই। আগে বলুন কী হয়েছে।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "পাসপোর্ট হারালে আগে পুলিশ রিপোর্ট নেওয়া কি ভালো?",
      "a": true,
      "why": "ঠিক। পুলিশ রিপোর্ট নিয়ে তারপর দূতাবাসে যেতে হয়।"
    },
    {
      "q": "নিশ্চিত না হয়েও \"stolen\" (চুরি) বলা কি ঠিক?",
      "a": false,
      "why": "না। \"I think I lost it\" বলুন। সত্য বলাই নিরাপদ।"
    },
    {
      "q": "ব্যাগ না এলে বিমানবন্দর ছাড়ার আগে এয়ারলাইনের ডেস্কে রিপোর্ট করা কি ভালো?",
      "a": true,
      "why": "ঠিক। ফর্মের কপি আর ফোন নম্বর নিন।"
    },
    {
      "q": "\"delayed\" মানে কি ব্যাগ চিরতরে হারিয়ে গেছে?",
      "a": false,
      "why": "না। delayed = দেরিতে আসছে। হারিয়ে গেলে missing বা lost।"
    },
    {
      "q": "জরুরি নম্বর আর দূতাবাসের নম্বর পৌঁছেই লিখে রাখা কি ভালো?",
      "a": true,
      "why": "ঠিক। বিপদে ঘাবড়ে নম্বর খুঁজতে হবে না।"
    }
  ]
};
