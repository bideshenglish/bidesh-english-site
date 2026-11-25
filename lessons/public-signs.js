window.LESSON = {
  "id": "public-signs",
  "type": "A",
  "who": "গার্ড / স্টাফ",
  "title": "Reading Public Signs & Notices",
  "titleBn": "পাবলিক সাইন ও নোটিস পড়া",
  "next": { "title": "Making Appointments & Leaving Messages" },
  "scene": "মেট্রো, দোকান, অফিস, সব জায়গায় সাইন আছে। না পড়লে জরিমানা বা ঝামেলা হতে পারে।",
  "hook": { "en": "What does this sign say?", "bn": "এই সাইনে কী লেখা?" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "What does this sign say?", "bn": "এই সাইনে কী লেখা?", "pr": "হোয়াট ডাজ দিস সাইন সে?" },
    { "tag": "আপনি বলবেন", "en": "Is eating allowed here?", "bn": "এখানে খাওয়া চলে?", "pr": "ইজ ইটিং অ্যালাউড হিয়ার?" },
    { "tag": "আপনি বলবেন", "en": "Can I take a photo here?", "bn": "এখানে ছবি তোলা যায়?", "pr": "ক্যান আই টেক আ ফটো হিয়ার?" },
    { "tag": "আপনি বলবেন", "en": "Is this seat reserved?", "bn": "এই সিটটা কি রিজার্ভ?", "pr": "ইজ দিস সিট রিজার্ভড?" },
    { "tag": "আপনি বলবেন", "en": "Where is the prayer room?", "bn": "নামাজের জায়গা কোথায়?", "pr": "হোয়ার ইজ দ্য প্রেয়ার রুম?" },
    { "tag": "আপনি বলবেন", "en": "Sorry, I didn't see the sign.", "bn": "দুঃখিত, আমি সাইনটা দেখিনি।", "pr": "সরি, আই ডিডন্ট সি দ্য সাইন।" },
    { "tag": "বুঝে নিন", "en": "Out of order.", "bn": "নষ্ট, চলছে না।", "pr": "আউট অব অর্ডার।" },
    { "tag": "বুঝে নিন", "en": "Authorised personnel only.", "bn": "শুধু অনুমোদিত কর্মীরা।", "pr": "অথোরাইজড পার্সোনেল অনলি।" },
    { "tag": "বুঝে নিন", "en": "Please take a ticket and wait.", "bn": "টিকিট নিয়ে অপেক্ষা করুন।", "pr": "প্লিজ টেক আ টিকেট অ্যান্ড ওয়েট।" }
  ],
  "traps": [
    {
      "title": "ঢোকা নিষেধ, জায়গার সাইন",
      "intro": "দরজা খোলা দেখলেই ঢুকবেন না। এই সাইনগুলো মানে সবার জন্য নয়।",
      "items": [
        { "en": "Staff only", "note": "শুধু কর্মীদের জন্য", "say": "Staff only" },
        { "en": "Authorised personnel only", "note": "শুধু অনুমোদিত লোক", "say": "Authorised personnel only" },
        { "en": "Restricted area", "note": "নিষিদ্ধ এলাকা", "say": "Restricted area" }
      ],
      "tip": "দুবাই মেট্রোর নিয়মে নিষিদ্ধ এলাকায় ঢুকলে জরিমানা (Gulf News)। ভুলে ঢুকে গেলে বলুন: \"Sorry, I didn't see the sign.\" আর বেরিয়ে আসুন।"
    },
    {
      "title": "খাওয়া, ধূমপান আর ছবি তোলা",
      "intro": "এই কাজগুলো সব জায়গায় চলে না। সাইন না দেখলে জিজ্ঞেস করুন।",
      "items": [
        { "en": "No eating or drinking", "note": "খাওয়া বা পানীয় নিষেধ", "say": "No eating or drinking" },
        { "en": "No smoking", "note": "ধূমপান নিষেধ", "say": "No smoking" },
        { "en": "No photography", "note": "ছবি তোলা নিষেধ", "say": "No photography" }
      ],
      "tip": "ইউএইয়ের নিয়মে মানুষের অনুমতি ছাড়া তার ছবি তোলা বা পোস্ট করা গুরুতর অপরাধ, সরকারি ভবনের ছবিও অনুমতি ছাড়া নয় (The National)। সন্দেহ হলে আগে জিজ্ঞেস করুন।"
    },
    {
      "title": "চলছে না, বন্ধ, রিজার্ভ",
      "intro": "এই তিন সাইন দেখলে সময় নষ্ট না করে অন্য ব্যবস্থা দেখুন।",
      "items": [
        { "en": "Out of order", "note": "নষ্ট, চলছে না", "say": "Out of order" },
        { "en": "Closed", "note": "বন্ধ", "say": "Closed" },
        { "en": "Reserved", "note": "রিজার্ভ, অন্যের জন্য", "say": "Reserved" }
      ],
      "tip": "এটিএম বা লিফটে \"Out of order\" দেখলে অন্যটায় যান। \"Reserved\" সিটে বসবেন না, নারী বা প্রবীণদের জন্য হতে পারে, জরিমানাও হতে পারে।"
    }
  ],
  "listening": [
    {
      "say": "Out of order.",
      "options": [
        { "t": "নষ্ট, চলছে না", "ok": true },
        { "t": "লাইন ঠিক আছে", "ok": false },
        { "t": "খোলা আছে", "ok": false }
      ],
      "why": "order = চালু অবস্থা। out of order = চলছে না। অন্য মেশিনে যান।"
    },
    {
      "say": "Authorised personnel only.",
      "options": [
        { "t": "শুধু অনুমোদিত কর্মীরা", "ok": true },
        { "t": "সবাই ঢুকতে পারেন", "ok": false },
        { "t": "টিকিট নিয়ে ঢুকুন", "ok": false }
      ],
      "why": "authorised = অনুমতিপ্রাপ্ত। আপনি অনুমতিপ্রাপ্ত না হলে ঢুকবেন না।"
    },
    {
      "say": "Please take a ticket and wait.",
      "options": [
        { "t": "টিকিট নিয়ে অপেক্ষা করুন", "ok": true },
        { "t": "টিকিট ছিঁড়ে ফেলুন", "ok": false },
        { "t": "কাল আসুন", "ok": false }
      ],
      "why": "ticket = নম্বরওয়ালা কাগজ। wait = অপেক্ষা। নম্বর ডাকার জন্য মনিটর দেখুন।"
    },
    {
      "say": "No photos here, sir.",
      "options": [
        { "t": "এখানে ছবি তোলা যাবে না", "ok": true },
        { "t": "এখানে ছবি তুলতে পারেন", "ok": false },
        { "t": "ছবি নিয়ে আসুন", "ok": false }
      ],
      "why": "No photos = ছবি নয়। শান্তভাবে \"Sorry\" বলুন আর ক্যামেরা নামিয়ে রাখুন।"
    }
  ],
  "typing": [
    {
      "ask": "কত নম্বর কাউন্টার? সংখ্যা লিখুন",
      "say": "Please go to counter seven.",
      "num": true,
      "answers": ["7"],
      "show": "7",
      "why": "seven = ৭। seventeen হলে ১৭।",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "This lift is out of ___.",
      "answers": ["order"],
      "show": "order",
      "why": "out of order = চলছে না",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "No ___ allowed here.",
      "answers": ["photography", "photos", "smoking", "eating"],
      "show": "photography",
      "why": "photography = ছবি তোলা",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [0, 1, 5],
  "dialogue": [
    {
      "boss": "Sir, this area is staff only. You cannot enter.",
      "bn": "স্যার, এটা শুধু কর্মীদের জায়গা। আপনি ঢুকতে পারবেন না। (গার্ড বলছেন, আপনি টয়লেট খুঁজতে ঢুকে পড়েছেন)",
      "choices": [
        { "stars": 3, "en": "Sorry, I didn't see the sign. Where is the toilet, please?", "reply": "It is on the left, behind the café.", "replyBn": "বাঁ দিকে, ক্যাফের পেছনে।", "tip": "ক্ষমা চেয়ে কী চান বলেছেন। গার্ড সাহায্য করবে।" },
        { "stars": 2, "en": "Sorry.", "reply": "Please go out.", "replyBn": "বেরিয়ে যান।", "tip": "ঠিক আছে। কী খুঁজছিলেন, সেটা বললে গার্ড পথ বলে দেবে।" },
        { "stars": 1, "en": "The door was open!", "reply": "It's still staff only.", "replyBn": "তবুও এটা শুধু কর্মীদের।", "tip": "তর্ক করলে ঝামেলা বাড়ে। ক্ষমা চেয়ে বেরিয়ে আসুন।" }
      ]
    },
    {
      "boss": "Sir, no eating in the station. There is a fine.",
      "bn": "স্যার, স্টেশনে খাওয়া নিষেধ। জরিমানা আছে। (আপনি চিপস খাচ্ছিলেন)",
      "choices": [
        { "stars": 3, "en": "Sorry, I didn't know. I will put it away. Thank you.", "reply": "Thank you. Have a nice day.", "replyBn": "ধন্যবাদ। ভালো দিন কাটুক।", "tip": "ক্ষমা চেয়ে সাথে সাথে বন্ধ করেছেন। বেশিরভাগ ক্ষেত্রে এতেই শেষ।" },
        { "stars": 2, "en": "Okay, okay.", "reply": "Please stop now.", "replyBn": "এখনই থামুন।", "tip": "ঠিক আছে। \"Sorry\" আর \"I will put it away\" বললে ভদ্র শোনায়।" },
        { "stars": 1, "en": "Everybody eats here!", "reply": "Sir, it is the rule.", "replyBn": "স্যার, এটাই নিয়ম।", "tip": "অন্যের দোষ দিলে লাভ নেই। নিয়ম মানলে ঝামেলা হয় না।" }
      ]
    },
    {
      "boss": "Sir, no photos here. This is a government building.",
      "bn": "স্যার, এখানে ছবি তোলা নিষেধ। এটা সরকারি ভবন। (আপনি ফোনে বিল্ডিংয়ের ছবি তুলছিলেন)",
      "choices": [
        { "stars": 3, "en": "Sorry, officer. I didn't know. I will not take photos.", "reply": "Thank you. No problem.", "replyBn": "ধন্যবাদ। কোনো সমস্যা নেই।", "tip": "ক্ষমা চেয়ে কথা দিয়েছেন। শান্ত থাকলে সমস্যা বাড়ে না।" },
        { "stars": 2, "en": "Okay.", "reply": "Please put your phone away.", "replyBn": "ফোনটা সরিয়ে রাখুন।", "tip": "ঠিক আছে। \"Sorry\" বলুন, ভদ্র শোনায়।" },
        { "stars": 1, "en": "It's just a photo. Why not?", "reply": "Sir, please stop.", "replyBn": "স্যার, দয়া করে থামুন।", "tip": "সরকারি ভবনের ছবিতে অনুমতি লাগে। তর্ক নয়, থেমে যান।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "\"Staff only\" সাইনের দরজা খোলা দেখলে ঢোকা কি ঠিক?",
      "a": false,
      "why": "না। \"Staff only\" মানে শুধু কর্মীরা। ঢুকলে জরিমানা বা ঝামেলা হতে পারে।"
    },
    {
      "q": "\"Out of order\" মানে কি চলছে না?",
      "a": true,
      "why": "ঠিক। অন্য মেশিন বা লিফট ব্যবহার করুন।"
    },
    {
      "q": "অচেনা কারো অনুমতি ছাড়া তার ছবি তোলা বা পোস্ট করা কি নিরাপদ?",
      "a": false,
      "why": "না। ইউএইয়ে এটা গুরুতর অপরাধ হতে পারে। আগে অনুমতি নিন।"
    },
    {
      "q": "নিয়ম না জানলে \"Sorry, I didn't know\" বলে বন্ধ করা কি ভালো?",
      "a": true,
      "why": "ঠিক। ক্ষমা আর সাথে সাথে থামা, দুটোই দরকার।"
    },
    {
      "q": "\"Please take a ticket and wait\" মানে কি টিকিট ছিঁড়ে ফেলা?",
      "a": false,
      "why": "না। টিকিট নিন আর নম্বর ডাকা পর্যন্ত অপেক্ষা করুন।"
    }
  ]
};
