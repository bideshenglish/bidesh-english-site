window.LESSON = {
  "id": "visa-embassy",
  "type": "A",
  "who": "দূতাবাস / ভিসা অফিসের লোক",
  "title": "Visa & Embassy Questions",
  "titleBn": "ভিসা ও দূতাবাসের প্রশ্ন",
  "next": { "title": "Airport Check-in, Security & Transit" },
  "scene": "ভিসার কাজে কাগজ দেখানো, আঙুলের ছাপ, কয়েকটা প্রশ্ন। ধাপ দেশভেদে আলাদা, তাই এখানে শুধু ইংরেজি শিখবেন।",
  "hook": { "en": "What job is written on my visa?", "bn": "আমার ভিসায় কী কাজ লেখা আছে?" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "I have an appointment today.", "bn": "আজ আমার অ্যাপয়েন্টমেন্ট আছে।", "pr": "আই হ্যাভ অ্যান অ্যাপয়েন্টমেন্ট টুডে।" },
    { "tag": "আপনি বলবেন", "en": "Here is my passport.", "bn": "এই যে আমার পাসপোর্ট।", "pr": "হিয়ার ইজ মাই পাসপোর্ট।" },
    { "tag": "আপনি বলবেন", "en": "What job is written on my visa?", "bn": "আমার ভিসায় কী কাজ লেখা আছে?", "pr": "হোয়াট জব ইজ রিটন অন মাই ভিসা?" },
    { "tag": "আপনি বলবেন", "en": "How long is my visa valid?", "bn": "আমার ভিসা কতদিন চালু থাকবে?", "pr": "হাউ লং ইজ মাই ভিসা ভ্যালিড?" },
    { "tag": "আপনি বলবেন", "en": "Can you check my name and passport number?", "bn": "আমার নাম আর পাসপোর্ট নম্বর মিলিয়ে দেখবেন?", "pr": "ক্যান ইউ চেক মাই নেম অ্যান্ড পাসপোর্ট নাম্বার?" },
    { "tag": "আপনি বলবেন", "en": "Which document is missing?", "bn": "কোন কাগজ কম আছে?", "pr": "হুইচ ডকুমেন্ট ইজ মিসিং?" },
    { "tag": "বুঝে নিন", "en": "Please put your fingers here.", "bn": "আঙুল এখানে রাখুন।", "pr": "প্লিজ পুট ইওর ফিঙ্গারস হিয়ার।" },
    { "tag": "বুঝে নিন", "en": "Look at the camera.", "bn": "ক্যামেরার দিকে তাকান।", "pr": "লুক অ্যাট দ্য ক্যামেরা।" },
    { "tag": "বুঝে নিন", "en": "Come back next week to collect your passport.", "bn": "পাসপোর্ট নিতে আগামী সপ্তাহে আসুন।", "pr": "কাম ব্যাক নেক্সট উইক টু কালেক্ট ইওর পাসপোর্ট।" }
  ],
  "traps": [
    {
      "title": "visa job আর আপনার কাজ",
      "intro": "ভিসায় একটা কাজ লেখা থাকে। সেটা আপনার চুক্তির কাজের সাথে মেলা চাই।",
      "items": [
        { "en": "profession", "note": "ভিসায় লেখা পেশা বা কাজ", "say": "profession" },
        { "en": "sponsor", "note": "যে কোম্পানি বা ব্যক্তি ভিসা দিয়েছে", "say": "sponsor" },
        { "en": "employer", "note": "যিনি কাজ দেন", "say": "employer" }
      ],
      "tip": "মিল না থাকলে জিজ্ঞেস করুন: \"Is this the same job as my contract?\""
    },
    {
      "title": "valid আর expired",
      "intro": "পাসপোর্ট ও ভিসা, দুটোরই মেয়াদ দেখতে হয়।",
      "items": [
        { "en": "valid", "note": "চালু আছে", "say": "valid" },
        { "en": "expired", "note": "মেয়াদ শেষ", "say": "expired" },
        { "en": "expiry date", "note": "মেয়াদ শেষের তারিখ", "say": "expiry date" }
      ],
      "tip": "জিজ্ঞেস করুন: \"When does it expire?\""
    },
    {
      "title": "submit আর collect",
      "intro": "কাগজ জমা দেওয়া আর ফেরত নেওয়া, দুটো আলাদা দিন হতে পারে।",
      "items": [
        { "en": "submit", "note": "জমা দেওয়া", "say": "submit" },
        { "en": "collect", "note": "নিয়ে নেওয়া", "say": "collect" },
        { "en": "appointment", "note": "আগে ঠিক করা সময়", "say": "appointment" }
      ],
      "tip": "জিজ্ঞেস করুন: \"When and where do I collect my passport?\""
    }
  ],
  "listening": [
    {
      "say": "Please put your fingers here.",
      "options": [
        { "t": "আঙুল এখানে রাখুন", "ok": true },
        { "t": "এখানে সই করুন", "ok": false },
        { "t": "ছবি তুলুন", "ok": false }
      ],
      "why": "fingers = আঙুল। এটা আঙুলের ছাপের সময় বলা হয়।"
    },
    {
      "say": "Your visa is valid for two years.",
      "options": [
        { "t": "ভিসা দুই মাসে শেষ", "ok": false },
        { "t": "ভিসা দুই বছর চালু", "ok": true },
        { "t": "ভিসা বাতিল", "ok": false }
      ],
      "why": "valid = চালু। years = বছর।"
    },
    {
      "say": "One document is missing.",
      "options": [
        { "t": "সব কাগজ ঠিক আছে", "ok": false },
        { "t": "পাসপোর্ট হারিয়ে গেছে", "ok": false },
        { "t": "একটা কাগজ কম আছে", "ok": true }
      ],
      "why": "missing = কম বা নেই। document = কাগজ।"
    },
    {
      "say": "Come back next week to collect your passport.",
      "options": [
        { "t": "আজ পাসপোর্ট নিয়ে যান", "ok": false },
        { "t": "আগামী সপ্তাহে পাসপোর্ট নিতে আসুন", "ok": true },
        { "t": "গত সপ্তাহে আসার কথা ছিল", "ok": false }
      ],
      "why": "next week = আগামী সপ্তাহ। collect = নিয়ে নেওয়া।"
    }
  ],
  "typing": [
    {
      "ask": "কত দিন পর আসবেন? সংখ্যা লিখুন",
      "say": "Please come back in five days.",
      "num": true,
      "answers": ["5"],
      "show": "5",
      "why": "five = ৫",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Here is my ___.",
      "answers": ["passport"],
      "show": "passport",
      "why": "passport = পাসপোর্ট",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "How long is my visa ___?",
      "answers": ["valid"],
      "show": "valid",
      "why": "valid = চালু",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [0, 2, 3],
  "dialogue": [
    {
      "boss": "Please show your passport and appointment slip.",
      "bn": "পাসপোর্ট আর অ্যাপয়েন্টমেন্ট স্লিপ দেখান।",
      "choices": [
        { "stars": 3, "en": "Here you are, sir. This is my passport and appointment slip.", "reply": "Thank you. Please sit.", "replyBn": "ধন্যবাদ। বসুন।", "tip": "পুরো বাক্যে ভদ্রভাবে দিয়েছেন। কাগজ আগের রাতে গুছিয়ে রাখুন।" },
        { "stars": 2, "en": "Passport.", "reply": "Appointment slip also, please.", "replyBn": "অ্যাপয়েন্টমেন্ট স্লিপও দিন।", "tip": "এক শব্দে কাজ চলে, কিন্তু \"Here is my...\" বললে ভালো শোনায়।" },
        { "stars": 1, "en": "I do not have the slip.", "reply": "Then please come another day.", "replyBn": "তাহলে অন্য দিন আসুন।", "tip": "কাগজ ছাড়া গেলে ফিরে আসতে হয়। আগের রাতে সব কাগজ মিলিয়ে নিন।" }
      ]
    },
    {
      "boss": "Your visa says cleaner. What is your job?",
      "bn": "আপনার ভিসায় ক্লিনার লেখা। আপনার কাজ কী? (আপনার চুক্তিতে ইলেকট্রিশিয়ান লেখা)",
      "choices": [
        { "stars": 3, "en": "My contract says electrician. Can you check, please?", "reply": "Let me check.", "replyBn": "আমি দেখছি।", "tip": "কাগজ দেখিয়ে ভদ্রভাবে মেলাতে বলুন। না মিললে আগে এজেন্সিকে জিজ্ঞেস করুন।" },
        { "stars": 2, "en": "I do not know.", "reply": "Please ask your agency.", "replyBn": "আপনার এজেন্সিকে জিজ্ঞেস করুন।", "tip": "নিজের কাজ আর ভিসার কাজ জানা চাই। আগেই কাগজ দেখে নিন।" },
        { "stars": 1, "en": "Okay. Any job is fine.", "reply": "Okay.", "replyBn": "ঠিক আছে।", "tip": "কাজ অন্য হলে বেতন আর অবস্থা বদলে যেতে পারে। চুপ করে মেনে নেবেন না।" }
      ]
    },
    {
      "boss": "Leave your passport with me.",
      "bn": "পাসপোর্ট আমার কাছে রেখে যান। (এজেন্সির লোক বলছে)",
      "choices": [
        { "stars": 3, "en": "Can you give me a receipt? When will I get it back?", "reply": "Okay. You will get it on Monday.", "replyBn": "ঠিক আছে। সোমবার পাবেন।", "tip": "রসিদ আর ফেরত পাওয়ার তারিখ, দুটোই নিয়েছেন। খুব ভালো।" },
        { "stars": 2, "en": "When will I get it back?", "reply": "Next week.", "replyBn": "আগামী সপ্তাহ।", "tip": "তারিখ জেনেছেন। সাথে লিখিত রসিদও চান।" },
        { "stars": 1, "en": "Okay.", "reply": "Good.", "replyBn": "ভালো।", "tip": "পাসপোর্ট আপনার সবচেয়ে জরুরি কাগজ। রসিদ আর তারিখ ছাড়া হাতছাড়া করবেন না।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "ভিসার কাজ আর চুক্তির কাজ মিলিয়ে দেখা কি ভালো?",
      "a": true,
      "why": "ঠিক। বলুন: \"Is this the same job as my contract?\""
    },
    {
      "q": "\"expired\" মানে কি মেয়াদ আছে?",
      "a": false,
      "why": "না। expired = মেয়াদ শেষ। valid = চালু।"
    },
    {
      "q": "পাসপোর্ট কারও কাছে রেখে এলে রসিদ আর ফেরতের তারিখ নেওয়া কি ভালো?",
      "a": true,
      "why": "ঠিক। জিজ্ঞেস করুন: \"When will I get it back?\""
    },
    {
      "q": "\"valid\" মানে কি চালু আছে?",
      "a": true,
      "why": "ঠিক। ভিসা valid মানে এখনো চলবে।"
    },
    {
      "q": "ভিসার কাগজ নিজে না দেখে অন্যের কথায় বিশ্বাস করা কি নিরাপদ?",
      "a": false,
      "why": "না। নাম, পাসপোর্ট নম্বর, কাজ আর মেয়াদ নিজে দেখুন। বুঝতে না পারলে জিজ্ঞেস করুন।"
    }
  ]
};
