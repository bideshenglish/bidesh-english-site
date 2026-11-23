window.LESSON = {
  "id": "sim-wifi",
  "type": "A",
  "who": "মোবাইল দোকানের কর্মী",
  "title": "SIM Card, Wi-Fi & Calling Home",
  "titleBn": "সিম কার্ড, ওয়াই-ফাই ও দেশে ফোন",
  "next": { "title": "Lost Passport, Lost Bag & Asking for Help", "id": "lost-help" },
  "scene": "দেশে পরিবারের সাথে কথা বলা সবার আগে দরকার। আজ সিম কেনা, ডেটা আর কলের ইংরেজি শিখবেন।",
  "hook": { "en": "Does WhatsApp calling work here?", "bn": "এখানে কি হোয়াটসঅ্যাপে ফোন চলে?" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "I would like a prepaid SIM card, please.", "bn": "আমি একটা প্রিপেইড সিম কার্ড চাই, দয়া করে।", "pr": "আই উড লাইক আ প্রিপেইড সিম কার্ড, প্লিজ।" },
    { "tag": "আপনি বলবেন", "en": "Which plan is good for calling Bangladesh?", "bn": "বাংলাদেশে ফোনের জন্য কোন প্ল্যান ভালো?", "pr": "হুইচ প্ল্যান ইজ গুড ফর কলিং বাংলাদেশ?" },
    { "tag": "আপনি বলবেন", "en": "How many GB is it, and how long is it valid?", "bn": "কত জিবি, আর কতদিন চলবে?", "pr": "হাউ ম্যানি জিবি ইজ ইট, অ্যান্ড হাউ লং ইজ ইট ভ্যালিড?" },
    { "tag": "আপনি বলবেন", "en": "Is there any extra charge?", "bn": "কোনো বাড়তি খরচ আছে?", "pr": "ইজ দেয়ার এনি এক্সট্রা চার্জ?" },
    { "tag": "আপনি বলবেন", "en": "Does WhatsApp calling work here?", "bn": "এখানে কি হোয়াটসঅ্যাপে ফোন চলে?", "pr": "ডাজ হোয়াটসঅ্যাপ কলিং ওয়ার্ক হিয়ার?" },
    { "tag": "আপনি বলবেন", "en": "What is the Wi-Fi password?", "bn": "ওয়াই-ফাইয়ের পাসওয়ার্ড কী?", "pr": "হোয়াট ইজ দ্য ওয়াই-ফাই পাসওয়ার্ড?" },
    { "tag": "বুঝে নিন", "en": "Please show your ID. We must register the SIM.", "bn": "আইডি দেখান। সিমটা নিবন্ধন করতে হবে।", "pr": "প্লিজ শো ইওর আইডি। উই মাস্ট রেজিস্টার দ্য সিম।" },
    { "tag": "বুঝে নিন", "en": "Your balance is five dollars.", "bn": "আপনার ব্যালেন্স পাঁচ ডলার।", "pr": "ইওর ব্যালেন্স ইজ ফাইভ ডলারস।" },
    { "tag": "বুঝে নিন", "en": "Your data is finished.", "bn": "আপনার ডেটা শেষ।", "pr": "ইওর ডেটা ইজ ফিনিশড।" }
  ],
  "traps": [
    {
      "title": "prepaid আর postpaid",
      "intro": "সিম নেওয়ার সময় প্রথম প্রশ্নই এটা।",
      "items": [
        { "en": "prepaid", "note": "আগে টাকা ভরে ব্যবহার", "say": "prepaid" },
        { "en": "postpaid", "note": "ব্যবহারের পর মাসিক বিল, চুক্তি থাকে", "say": "postpaid" },
        { "en": "top up", "note": "ব্যালেন্সে টাকা ভরা", "say": "top up" }
      ],
      "tip": "নতুনদের জন্য prepaid সহজ। বিল বেশি আসার ভয় কম।"
    },
    {
      "title": "data, balance আর validity",
      "intro": "দোকানে প্ল্যান বোঝার জন্য এই তিন শব্দ লাগে।",
      "items": [
        { "en": "data", "note": "ইন্টারনেট (GB)", "say": "data" },
        { "en": "balance", "note": "ব্যালেন্সে বাকি টাকা", "say": "balance" },
        { "en": "valid for thirty days", "note": "ত্রিশ দিন চলবে", "say": "valid for thirty days" }
      ],
      "tip": "কেনার আগে জিজ্ঞেস করুন: কত GB, কতদিন চলবে, আর নিজে নিজে নবায়ন হয় কি না।"
    },
    {
      "title": "WhatsApp কল সব দেশে চলে না",
      "intro": "কিছু দেশে WhatsApp মেসেজ চলে, কিন্তু ভয়েস কল বন্ধ থাকে।",
      "items": [
        { "en": "voice call", "note": "কথা বলার কল", "say": "voice call" },
        { "en": "message", "note": "লিখিত মেসেজ", "say": "message" },
        { "en": "approved app", "note": "অনুমোদিত কলিং অ্যাপ", "say": "approved app" }
      ],
      "tip": "জিজ্ঞেস করুন: \"Which app is allowed for calling?\" কল ব্লক এড়াতে VPN ব্যবহার করবেন না, কিছু দেশে (যেমন UAE) তা আইনে নিষিদ্ধ ধরা হয়।"
    }
  ],
  "listening": [
    {
      "say": "Please show your ID. We must register the SIM.",
      "options": [
        { "t": "আইডি দেখান, সিম নিবন্ধন করতে হবে", "ok": true },
        { "t": "সিম ফ্রি, আইডি লাগবে না", "ok": false },
        { "t": "সিম শেষ", "ok": false }
      ],
      "why": "register = নিবন্ধন করা। ID = পরিচয়পত্র।"
    },
    {
      "say": "Your balance is five dollars.",
      "options": [
        { "t": "আপনার ব্যালেন্স পাঁচ ডলার", "ok": true },
        { "t": "আপনার ডেটা পাঁচ জিবি", "ok": false },
        { "t": "পাঁচ ডলার দিন", "ok": false }
      ],
      "why": "balance = ব্যালেন্সে বাকি টাকা।"
    },
    {
      "say": "Your data is finished.",
      "options": [
        { "t": "আপনার ডেটা বাড়ানো হয়েছে", "ok": false },
        { "t": "আপনার সিম হারিয়েছে", "ok": false },
        { "t": "আপনার ডেটা শেষ", "ok": true }
      ],
      "why": "finished = শেষ। ডেটা শেষ হলে top up করুন।"
    },
    {
      "say": "This plan is valid for thirty days.",
      "options": [
        { "t": "ত্রিশ দিন চলবে", "ok": true },
        { "t": "তিন দিন চলবে", "ok": false },
        { "t": "ত্রিশ জিবি", "ok": false }
      ],
      "why": "valid = চলবে। thirty = ৩০।"
    }
  ],
  "typing": [
    {
      "ask": "কত দিন চলবে? সংখ্যা লিখুন",
      "say": "This plan is valid for thirty days.",
      "num": true,
      "answers": ["30"],
      "show": "30",
      "why": "thirty = ৩০",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Is there any extra ___?",
      "answers": ["charge"],
      "show": "charge",
      "why": "charge = খরচ",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "What is the Wi-Fi ___?",
      "answers": ["password"],
      "show": "password",
      "why": "password = পাসওয়ার্ড",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [1, 3, 4],
  "dialogue": [
    {
      "boss": "Hello. How can I help you?",
      "bn": "হ্যালো। কীভাবে সাহায্য করতে পারি? (মোবাইল দোকানের কর্মী)",
      "choices": [
        { "stars": 3, "en": "I would like a prepaid SIM card, please. Which plan is good for calling Bangladesh?", "reply": "This one. Fifteen dollars. Thirty days.", "replyBn": "এটা। পনেরো ডলার। ত্রিশ দিন।", "tip": "কী চান আর কেন চান, দুটোই বলেছেন। এতে সঠিক প্ল্যান পাওয়া সহজ।" },
        { "stars": 2, "en": "SIM card.", "reply": "Prepaid or postpaid?", "replyBn": "প্রিপেইড, নাকি পোস্টপেইড?", "tip": "আপনি \"prepaid\" বলতে পারেন। সাথে কোথায় ফোন করবেন, সেটাও বলুন।" },
        { "stars": 1, "en": "Cheap one.", "reply": "Which one?", "replyBn": "কোনটা?", "tip": "\"সস্তা\" বললে ভুল প্ল্যান পেতে পারেন। কত GB আর কতদিন, জিজ্ঞেস করুন।" }
      ]
    },
    {
      "boss": "This plan is twenty dollars. It renews automatically every month.",
      "bn": "এই প্ল্যান কুড়ি ডলার। প্রতি মাসে নিজে নিজে নবায়ন হয়।",
      "choices": [
        { "stars": 3, "en": "Can I stop the automatic renewal if I do not need it?", "reply": "Yes. You can stop it. I will show you.", "replyBn": "হ্যাঁ, বন্ধ করা যায়। আমি দেখিয়ে দেব।", "tip": "নিজে নিজে নবায়ন হলে প্রতি মাসে টাকা কাটতে পারে। কেনার আগেই জিজ্ঞেস করুন, লিখে নিন।" },
        { "stars": 2, "en": "How many GB?", "reply": "Ten GB.", "replyBn": "দশ জিবি।", "tip": "ভালো প্রশ্ন। সাথে নবায়ন আর বাড়তি খরচ নিয়েও জিজ্ঞেস করুন।" },
        { "stars": 1, "en": "Okay.", "reply": "Please sign here.", "replyBn": "এখানে সই করুন।", "tip": "না বুঝে সই করবেন না। \"What does this mean?\" জিজ্ঞেস করুন।" }
      ]
    },
    {
      "boss": "WhatsApp calling does not work here. Use this app for calls.",
      "bn": "এখানে হোয়াটসঅ্যাপে কল চলে না। কলের জন্য এই অ্যাপ ব্যবহার করুন।",
      "choices": [
        { "stars": 3, "en": "Thank you. Is this app allowed here? How much is it?", "reply": "Yes, it is approved. Ten dollars a month.", "replyBn": "হ্যাঁ, অনুমোদিত। মাসে দশ ডলার।", "tip": "অনুমোদিত অ্যাপ আর খরচ জেনে নিয়েছেন। মেসেজ আর ভয়েস নোট অনেক সময় চলে।" },
        { "stars": 2, "en": "Why not work?", "reply": "It is the government rule.", "replyBn": "এটা সরকারের নিয়ম।", "tip": "নিয়ম মেনে চলাই নিরাপদ। \"Which app is allowed?\" জিজ্ঞেস করুন।" },
        { "stars": 1, "en": "I will use a VPN.", "reply": "Please be careful.", "replyBn": "সাবধান থাকবেন।", "tip": "কিছু দেশে VPN দিয়ে ব্লক এড়ানো নিষিদ্ধ। ঝুঁকি নেবেন না।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "\"prepaid\" মানে কি আগে টাকা ভরে ব্যবহার করা?",
      "a": true,
      "why": "ঠিক। postpaid হলো ব্যবহারের পর মাসিক বিল।"
    },
    {
      "q": "WhatsApp ভয়েস কল কি সব দেশে সব সময় চলে?",
      "a": false,
      "why": "না। কিছু দেশে মেসেজ চলে, কিন্তু কল বন্ধ। জিজ্ঞেস করুন: \"Which app is allowed for calling?\""
    },
    {
      "q": "সিম কেনার সময় কত GB আর কতদিন চলবে, জিজ্ঞেস করা কি ভালো?",
      "a": true,
      "why": "ঠিক। বলুন: \"How many GB, and how long is it valid?\""
    },
    {
      "q": "\"balance\" মানে কি ইন্টারনেটের পরিমাণ?",
      "a": false,
      "why": "না। balance = ব্যালেন্সে বাকি টাকা। ইন্টারনেট হলো data।"
    },
    {
      "q": "কল ব্লক এড়াতে যেকোনো VPN ব্যবহার করা কি নিরাপদ?",
      "a": false,
      "why": "না। কিছু দেশে এটা আইনে নিষিদ্ধ। অনুমোদিত অ্যাপ ব্যবহার করুন।"
    }
  ]
};
