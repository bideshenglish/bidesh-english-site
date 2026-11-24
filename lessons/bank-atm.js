window.LESSON = {
  "id": "bank-atm",
  "type": "A",
  "who": "ব্যাংক কর্মী",
  "title": "Opening a Bank Account & Using ATM",
  "titleBn": "ব্যাংক অ্যাকাউন্ট খোলা ও এটিএম ব্যবহার",
  "next": { "title": "Sending Money Home", "id": "send-money-home" },
  "scene": "নিজের নামে অ্যাকাউন্ট, নিজের হাতে এটিএম। টাকা আর পিন নিজের কাছেই রাখুন।",
  "hook": { "en": "I would like to open a salary account.", "bn": "আমি একটা স্যালারি অ্যাকাউন্ট খুলতে চাই।" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "I would like to open a salary account.", "bn": "আমি একটা স্যালারি অ্যাকাউন্ট খুলতে চাই।", "pr": "আই উড লাইক টু ওপেন আ স্যালারি অ্যাকাউন্ট।" },
    { "tag": "আপনি বলবেন", "en": "What documents do I need?", "bn": "কী কী কাগজ লাগবে?", "pr": "হোয়াট ডকুমেন্টস ডু আই নিড?" },
    { "tag": "আপনি বলবেন", "en": "Is there a minimum balance?", "bn": "ন্যূনতম জমা কি রাখতে হবে?", "pr": "ইজ দেয়ার আ মিনিমাম ব্যালেন্স?" },
    { "tag": "আপনি বলবেন", "en": "Are there any monthly fees?", "bn": "মাসিক কোনো চার্জ আছে?", "pr": "আর দেয়ার এনি মান্থলি ফিজ?" },
    { "tag": "আপনি বলবেন", "en": "I want to withdraw one hundred dollars.", "bn": "আমি একশো ডলার তুলতে চাই।", "pr": "আই ওয়ান্ট টু উইথড্র ওয়ান হান্ড্রেড ডলারস।" },
    { "tag": "আপনি বলবেন", "en": "The ATM kept my card. What should I do?", "bn": "এটিএম আমার কার্ড রেখে দিয়েছে। কী করব?", "pr": "দি এটিএম কেপ্ট মাই কার্ড। হোয়াট শুড আই ডু?" },
    { "tag": "বুঝে নিন", "en": "Please enter your PIN.", "bn": "আপনার পিন দিন।", "pr": "প্লিজ এন্টার ইয়োর পিন।" },
    { "tag": "বুঝে নিন", "en": "Insufficient balance.", "bn": "অ্যাকাউন্টে যথেষ্ট টাকা নেই।", "pr": "ইনসাফিশিয়েন্ট ব্যালেন্স।" },
    { "tag": "বুঝে নিন", "en": "Your card will be ready in three working days.", "bn": "আপনার কার্ড তিন কর্মদিবসে তৈরি হবে।", "pr": "ইয়োর কার্ড উইল বি রেডি ইন থ্রি ওয়ার্কিং ডেইজ।" }
  ],
  "traps": [
    {
      "title": "withdraw, deposit আর balance",
      "intro": "এটিএম আর ব্যাংকে এই তিন শব্দ সবচেয়ে বেশি আসে। উল্টো বুঝলে টাকা ভুল জায়গায় যায়।",
      "items": [
        { "en": "withdraw", "note": "তোলা", "say": "withdraw" },
        { "en": "deposit", "note": "জমা দেওয়া", "say": "deposit" },
        { "en": "balance", "note": "অ্যাকাউন্টে কত টাকা আছে", "say": "balance" }
      ],
      "tip": "টাকা তুলতে withdraw, জমা দিতে deposit। টাকা কত আছে দেখতে \"balance\" চাপুন। কাজ শেষে রসিদ নিন।"
    },
    {
      "title": "চার্জ আর ন্যূনতম জমা আগে জিজ্ঞেস করুন",
      "intro": "অ্যাকাউন্ট খোলার পরে অনেকে চার্জ দেখে অবাক হয়। আগে জেনে নিন।",
      "items": [
        { "en": "monthly fee", "note": "প্রতি মাসের চার্জ", "say": "monthly fee" },
        { "en": "minimum balance", "note": "ন্যূনতম যত টাকা রাখতে হয়", "say": "minimum balance" },
        { "en": "Can you write the charges?", "note": "চার্জগুলো লিখে দেবেন?", "say": "Can you write the charges?" }
      ],
      "tip": "বেতনের অ্যাকাউন্ট নিজের নামে হওয়া উচিত। ইউএইর ব্যাংকিং গাইডে লেখা, ওয়েজ প্রোটেকশন সিস্টেমে বেতন কর্মীর নিজের নামের অ্যাকাউন্টে যায়। অন্যের নামে অ্যাকাউন্ট ব্যবহার করবেন না।"
    },
    {
      "title": "পিন কাউকে বলবেন না",
      "intro": "ব্যাংকের কর্মীকেও না, সাহায্য করতে আসা অচেনাকেও না। ব্যাংক পিন জিজ্ঞেস করে না।",
      "items": [
        { "en": "I never share my PIN.", "note": "আমি পিন কাউকে বলি না", "say": "I never share my PIN." },
        { "en": "No, thank you. I can do it myself.", "note": "না, ধন্যবাদ। আমি নিজে পারব", "say": "No, thank you. I can do it myself." },
        { "en": "I will call the bank myself.", "note": "আমি নিজে ব্যাংকে ফোন করব", "say": "I will call the bank myself." }
      ],
      "tip": "পিন দেওয়ার সময় অন্য হাত দিয়ে ঢেকে নিন। মেশিন সন্দেহজনক মনে হলে অন্য মেশিনে যান। কার্ড আটকে গেলে অচেনা কারো কাছে নয়, ব্যাংকে জানান।"
    }
  ],
  "listening": [
    {
      "say": "Please enter your PIN.",
      "options": [
        { "t": "আপনার পিন দিন", "ok": true },
        { "t": "আপনার নাম লিখুন", "ok": false },
        { "t": "কার্ড বের করুন", "ok": false }
      ],
      "why": "enter = টাইপ করা। PIN = গোপন নম্বর। এটা মেশিনে দিন, কাউকে বলবেন না।"
    },
    {
      "say": "Insufficient balance.",
      "options": [
        { "t": "অ্যাকাউন্টে যথেষ্ট টাকা নেই", "ok": true },
        { "t": "কার্ড বন্ধ", "ok": false },
        { "t": "টাকা জমা হয়েছে", "ok": false }
      ],
      "why": "insufficient = অপর্যাপ্ত। balance = অ্যাকাউন্টের টাকা। কম টাকা তুলুন।"
    },
    {
      "say": "Your card will be ready in three working days.",
      "options": [
        { "t": "আপনার কার্ড তিন কর্মদিবসে তৈরি হবে", "ok": true },
        { "t": "আপনার কার্ড তিন দিন আগে তৈরি", "ok": false },
        { "t": "আপনার কার্ড হারিয়ে গেছে", "ok": false }
      ],
      "why": "working days = কাজের দিন (ছুটি বাদে)। ready = তৈরি।"
    },
    {
      "say": "Do you want to withdraw or deposit?",
      "options": [
        { "t": "আপনি কি তুলবেন, না জমা দেবেন?", "ok": true },
        { "t": "আপনি কি কার্ড বদলাবেন?", "ok": false },
        { "t": "আপনি কি অ্যাকাউন্ট বন্ধ করবেন?", "ok": false }
      ],
      "why": "withdraw = তোলা। deposit = জমা দেওয়া।"
    }
  ],
  "typing": [
    {
      "ask": "মাসিক চার্জ কত ডলার? সংখ্যা লিখুন",
      "say": "The monthly fee is ten dollars.",
      "num": true,
      "answers": ["10"],
      "show": "10",
      "why": "ten = ১০",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "I would like to ___ a bank account.",
      "answers": ["open"],
      "show": "open",
      "why": "open = খোলা",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Please enter your ___.",
      "answers": ["pin"],
      "show": "PIN",
      "why": "PIN = গোপন নম্বর",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [0, 1, 5],
  "dialogue": [
    {
      "boss": "Good morning. How can I help you?",
      "bn": "সুপ্রভাত। কীভাবে সাহায্য করতে পারি? (ব্যাংকের কাউন্টার)",
      "choices": [
        { "stars": 3, "en": "Good morning. I would like to open a salary account. What documents do I need?", "reply": "Passport, ID and a letter from your company.", "replyBn": "পাসপোর্ট, আইডি আর কোম্পানির চিঠি।", "tip": "কী চান আর কী কাগজ লাগবে, দুটোই বলেছেন। সময় বাঁচে।" },
        { "stars": 2, "en": "Account, please.", "reply": "What kind of account?", "replyBn": "কী ধরনের অ্যাকাউন্ট?", "tip": "ঠিক আছে। \"salary account\" বললে দ্রুত কাজ হয়।" },
        { "stars": 1, "en": "My friend will open for me.", "reply": "No, you must come yourself.", "replyBn": "না, আপনাকে নিজে আসতে হবে।", "tip": "অ্যাকাউন্ট নিজের নামে নিজে খুলতে হয়। অন্যকে কাগজ বা পিন দেবেন না।" }
      ]
    },
    {
      "boss": "Minimum balance five hundred dollars. Monthly fee ten dollars. Okay?",
      "bn": "ন্যূনতম জমা পাঁচশো ডলার। মাসিক চার্জ দশ ডলার। ঠিক আছে? (কর্মী দ্রুত বলছেন)",
      "choices": [
        { "stars": 3, "en": "Sorry, can you write the charges, please? Is there an account with no minimum balance?", "reply": "Yes. I will show you the options.", "replyBn": "হ্যাঁ। আমি বিকল্পগুলো দেখাচ্ছি।", "tip": "চার্জ লিখে দিতে বলেছেন আর কম শর্তের অ্যাকাউন্ট জানতে চেয়েছেন। বুদ্ধিমানের কাজ।" },
        { "stars": 2, "en": "How much?", "reply": "Five hundred and ten.", "replyBn": "পাঁচশো দশ।", "tip": "ঠিক আছে। লিখে দিতে বলুন, নইলে পরে ভুলে যাবেন।" },
        { "stars": 1, "en": "Okay, okay. Open it.", "reply": "Please sign here.", "replyBn": "এখানে সই করুন।", "tip": "না বুঝে \"okay\" বললে মাসে মাসে টাকা কাটতে পারে। আগে চার্জ বুঝে নিন।" }
      ]
    },
    {
      "boss": "Let me help you. Give me your card and your PIN. I will take the money.",
      "bn": "আমি সাহায্য করি। আপনার কার্ড আর পিন দিন। আমি টাকা তুলে দিই। (এটিএমের সামনে এক অচেনা লোক)",
      "choices": [
        { "stars": 3, "en": "No, thank you. I can do it myself.", "reply": "Okay.", "replyBn": "ঠিক আছে।", "tip": "কার্ড বা পিন অচেনাকে কখনো দেবেন না। ভদ্রভাবে \"না\" বলাই যথেষ্ট।" },
        { "stars": 2, "en": "No.", "reply": "Hmm.", "replyBn": "হুম।", "tip": "ঠিক। \"No, thank you. I can do it myself.\" বললে আরও ভদ্র শোনায়।" },
        { "stars": 1, "en": "Okay. My PIN is one, two, three, four.", "reply": "Thank you.", "replyBn": "ধন্যবাদ।", "tip": "পিন কাউকে বললে টাকা চলে যেতে পারে। কখনো বলবেন না।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "ব্যাংকের কর্মী বা সাহায্যকারী অচেনাকে পিন বলা কি নিরাপদ?",
      "a": false,
      "why": "না। পিন কাউকে বলবেন না। বলুন: \"I never share my PIN.\""
    },
    {
      "q": "\"withdraw\" মানে কি টাকা জমা দেওয়া?",
      "a": false,
      "why": "না। withdraw = তোলা। জমা দেওয়া হলো deposit।"
    },
    {
      "q": "অ্যাকাউন্ট খোলার আগে চার্জ জিজ্ঞেস করা কি ভালো?",
      "a": true,
      "why": "ঠিক। বলুন: \"Are there any monthly fees? Can you write them?\""
    },
    {
      "q": "বেতনের অ্যাকাউন্ট বন্ধুর নামে রাখা কি ভালো?",
      "a": false,
      "why": "না। নিজের নামে নিজে খুলুন। ঝুঁকি আর ঝামেলা কমে।"
    },
    {
      "q": "\"Insufficient balance\" মানে কি অ্যাকাউন্টে যথেষ্ট টাকা নেই?",
      "a": true,
      "why": "ঠিক। কম টাকা তুলুন বা টাকা জমা দিন।"
    }
  ]
};
