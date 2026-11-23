window.LESSON = {
  "id": "directions",
  "type": "A",
  "who": "পথচারী / দোকানদার",
  "title": "Asking for Directions",
  "titleBn": "পথ জিজ্ঞেস করা",
  "next": { "title": "Ordering Food & Asking About Halal" },
  "scene": "অনেক শহরে রাস্তার নাম নয়, পরিচিত দোকান-ভবন দিয়ে পথ বলে। আজ পথ জিজ্ঞেস করা আর মিলিয়ে নেওয়া শিখবেন।",
  "hook": { "en": "Can you show me on the map?", "bn": "ম্যাপে দেখিয়ে দিতে পারবেন?" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "Excuse me, where is the nearest mosque?", "bn": "মাফ করবেন, সবচেয়ে কাছের মসজিদ কোথায়?", "pr": "এক্সকিউজ মি, হোয়্যার ইজ দ্য নিয়ারেস্ট মস্ক?" },
    { "tag": "আপনি বলবেন", "en": "Is it far from here?", "bn": "এখান থেকে কি দূরে?", "pr": "ইজ ইট ফার ফ্রম হিয়ার?" },
    { "tag": "আপনি বলবেন", "en": "Can you show me on the map?", "bn": "ম্যাপে দেখিয়ে দিতে পারবেন?", "pr": "ক্যান ইউ শো মি অন দ্য ম্যাপ?" },
    { "tag": "আপনি বলবেন", "en": "How long does it take on foot?", "bn": "হেঁটে কতক্ষণ লাগবে?", "pr": "হাউ লং ডাজ ইট টেক অন ফুট?" },
    { "tag": "আপনি বলবেন", "en": "Let me check: straight, then left. Right?", "bn": "মিলিয়ে নিই: সোজা, তারপর বাঁয়ে। ঠিক?", "pr": "লেট মি চেক: স্ট্রেইট, দেন লেফট। রাইট?" },
    { "tag": "আপনি বলবেন", "en": "Is there a landmark near it?", "bn": "এর কাছে কি কোনো পরিচিত জায়গা আছে?", "pr": "ইজ দেয়ার আ ল্যান্ডমার্ক নিয়ার ইট?" },
    { "tag": "বুঝে নিন", "en": "Go straight, then turn left.", "bn": "সোজা যান, তারপর বাঁয়ে ঘুরুন।", "pr": "গো স্ট্রেইট, দেন টার্ন লেফট।" },
    { "tag": "বুঝে নিন", "en": "It is next to the supermarket, on your right.", "bn": "সুপারমার্কেটের পাশে, আপনার ডান দিকে।", "pr": "ইট ইজ নেক্সট টু দ্য সুপারমার্কেট, অন ইওর রাইট।" },
    { "tag": "বুঝে নিন", "en": "Cross the road at the traffic lights.", "bn": "ট্রাফিক লাইটে রাস্তা পার হন।", "pr": "ক্রস দ্য রোড অ্যাট দ্য ট্রাফিক লাইটস।" }
  ],
  "traps": [
    {
      "title": "left, right আর straight",
      "intro": "\"right\" শব্দের দুটো মানে আছে: ডান আর ঠিক।",
      "items": [
        { "en": "left", "note": "বাঁ", "say": "left" },
        { "en": "right", "note": "ডান, আবার \"ঠিক\"-ও", "say": "right" },
        { "en": "straight", "note": "সোজা", "say": "straight" }
      ],
      "tip": "\"Yes, right\" শুনে ডান-বাঁ গুলিয়ে ফেলবেন না। জিজ্ঞেস করুন: \"Left or right?\" আর আঙুল দিয়ে দেখিয়ে নিন।"
    },
    {
      "title": "next to, opposite আর behind",
      "intro": "জায়গা কোথায়, এই তিন শব্দে বোঝানো হয়।",
      "items": [
        { "en": "next to", "note": "পাশে", "say": "next to" },
        { "en": "opposite", "note": "রাস্তার ঠিক ওপারে", "say": "opposite" },
        { "en": "behind", "note": "পিছনে", "say": "behind" }
      ],
      "tip": "\"Opposite the mosque\" মানে মসজিদের পাশে নয়, রাস্তার ওপারে।"
    },
    {
      "title": "landmark, roundabout আর traffic lights",
      "intro": "পথ বলার সময় পরিচিত চিহ্ন ধরে বলে।",
      "items": [
        { "en": "landmark", "note": "পরিচিত চিহ্ন, যেমন বড় দোকান বা ভবন", "say": "landmark" },
        { "en": "roundabout", "note": "গোল চক্কর", "say": "roundabout" },
        { "en": "traffic lights", "note": "সিগন্যাল বাতি", "say": "traffic lights" }
      ],
      "tip": "অনেক শহরে লোকে দোকান বা ভবনের নাম দিয়ে পথ বলে। জিজ্ঞেস করুন: \"Is there a landmark near it?\""
    }
  ],
  "listening": [
    {
      "say": "Go straight, then turn left.",
      "options": [
        { "t": "সোজা যান, তারপর বাঁয়ে ঘুরুন", "ok": true },
        { "t": "সোজা যান, তারপর ডানে ঘুরুন", "ok": false },
        { "t": "ফিরে যান", "ok": false }
      ],
      "why": "straight = সোজা। left = বাঁ।"
    },
    {
      "say": "It is opposite the mosque.",
      "options": [
        { "t": "মসজিদের পিছনে", "ok": false },
        { "t": "মসজিদের রাস্তার ওপারে", "ok": true },
        { "t": "মসজিদের ভিতরে", "ok": false }
      ],
      "why": "opposite = ঠিক উল্টো দিকে, ওপারে।"
    },
    {
      "say": "Turn right at the roundabout.",
      "options": [
        { "t": "চক্করে বাঁয়ে ঘুরুন", "ok": false },
        { "t": "চক্করে থামুন", "ok": false },
        { "t": "চক্করে ডানে ঘুরুন", "ok": true }
      ],
      "why": "right = ডান। roundabout = গোল চক্কর।"
    },
    {
      "say": "It is about a ten minute walk.",
      "options": [
        { "t": "হেঁটে প্রায় দশ মিনিট", "ok": true },
        { "t": "গাড়িতে দশ মিনিট", "ok": false },
        { "t": "হেঁটে দশ ঘণ্টা", "ok": false }
      ],
      "why": "walk = হাঁটা। minute = মিনিট।"
    }
  ],
  "typing": [
    {
      "ask": "হেঁটে কত মিনিট? সংখ্যা লিখুন",
      "say": "It is about a ten minute walk.",
      "num": true,
      "answers": ["10"],
      "show": "10",
      "why": "ten = ১০",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Go ___, then turn left.",
      "answers": ["straight"],
      "show": "straight",
      "why": "straight = সোজা",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Is it ___ from here?",
      "answers": ["far"],
      "show": "far",
      "why": "far = দূরে",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [0, 2, 4],
  "dialogue": [
    {
      "boss": "Go straight, then take the second right, then left at the big supermarket, then straight.",
      "bn": "সোজা যান, দ্বিতীয় রাস্তায় ডানে, তারপর বড় সুপারমার্কেটে বাঁয়ে, তারপর সোজা। (এক নিঃশ্বাসে বলে ফেললেন)",
      "choices": [
        { "stars": 3, "en": "Sorry, that is a lot. Can you tell me the first step only?", "reply": "Okay. First, go straight to the traffic lights.", "replyBn": "ঠিক আছে। আগে ট্রাফিক লাইট পর্যন্ত সোজা যান।", "tip": "লম্বা নির্দেশ মনে থাকে না। এক ধাপ করে জিজ্ঞেস করুন, পথে আবার কাউকে জিজ্ঞেস করুন।" },
        { "stars": 2, "en": "Can you say it slowly, please?", "reply": "Go straight... then second right...", "replyBn": "সোজা যান... তারপর দ্বিতীয় ডানে...", "tip": "ধীরে বলতে বলা ভালো। তবে এক ধাপ করে চাইলে মনে রাখা সহজ।" },
        { "stars": 1, "en": "Yes, yes. Okay, thank you.", "reply": "Bye.", "replyBn": "বিদায়।", "tip": "না বুঝে \"ঠিক আছে\" বললে পথ হারাবেন। আগেই জিজ্ঞেস করুন।" }
      ]
    },
    {
      "boss": "It is near the mosque. You cannot miss it.",
      "bn": "মসজিদের কাছেই। ভুল হবে না। (অস্পষ্ট নির্দেশ)",
      "choices": [
        { "stars": 3, "en": "Is there a landmark near it? Can you show me on the map?", "reply": "Yes, next to the big pharmacy. Here, on the map.", "replyBn": "হ্যাঁ, বড় ফার্মেসির পাশে। এই যে ম্যাপে।", "tip": "অস্পষ্ট কথায় চিহ্ন আর ম্যাপ চান। ঠিকানা ফোনে রাখুন।" },
        { "stars": 2, "en": "Which mosque?", "reply": "The big mosque.", "replyBn": "বড় মসজিদ।", "tip": "ভালো প্রশ্ন, কিন্তু উত্তরেও অস্পষ্ট। ম্যাপে দেখাতে বলুন।" },
        { "stars": 1, "en": "Okay.", "reply": "Good luck.", "replyBn": "শুভকামনা।", "tip": "অস্পষ্ট নির্দেশ নিয়ে রওনা দিলে ঘুরে মরবেন। আরও জিজ্ঞেস করুন।" }
      ]
    },
    {
      "boss": "Sorry, I don't know this place.",
      "bn": "দুঃখিত, আমি এই জায়গাটা চিনি না।",
      "choices": [
        { "stars": 3, "en": "No problem, thank you. I will ask someone else.", "reply": "Good luck.", "replyBn": "শুভকামনা।", "tip": "একজন না জানলে আরেকজনকে জিজ্ঞেস করুন। দুজনের উত্তর মিললে নিশ্চিত হোন।" },
        { "stars": 2, "en": "You must know.", "reply": "I really don't.", "replyBn": "সত্যিই জানি না।", "tip": "জোর করবেন না। আন্দাজে বললে ভুল পথ পাবেন।" },
        { "stars": 1, "en": "Okay, I go that way.", "reply": "Hmm... okay.", "replyBn": "উম... আচ্ছা।", "tip": "আন্দাজে হাঁটলে আরও হারাবেন। কাউকে জিজ্ঞেস করুন বা ম্যাপ দেখুন।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "নির্দেশ লম্বা হলে এক ধাপ করে জিজ্ঞেস করা কি ভালো?",
      "a": true,
      "why": "ঠিক। বলুন: \"Can you tell me the first step only?\""
    },
    {
      "q": "\"Turn right\" মানে কি বাঁয়ে ঘুরুন?",
      "a": false,
      "why": "না। right = ডান। left = বাঁ।"
    },
    {
      "q": "\"Opposite the mosque\" মানে কি মসজিদের পাশে?",
      "a": false,
      "why": "না। opposite = রাস্তার ঠিক ওপারে। পাশে মানে next to।"
    },
    {
      "q": "না বুঝে \"ঠিক আছে, ধন্যবাদ\" বলে চলে যাওয়া কি ভালো?",
      "a": false,
      "why": "না। না বুঝলে আবার জিজ্ঞেস করুন, ম্যাপে দেখান।"
    },
    {
      "q": "ফোনের ম্যাপে দেখিয়ে \"Can you show me on the map?\" বলা কি ভালো?",
      "a": true,
      "why": "ঠিক। দেখিয়ে বললে ভুল কমে।"
    }
  ]
};
