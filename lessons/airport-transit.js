window.LESSON = {
  "id": "airport-transit",
  "type": "A",
  "who": "এয়ারলাইনের কর্মী / সিকিউরিটি",
  "title": "Airport Check-in, Security & Transit",
  "titleBn": "বিমানবন্দর: চেক-ইন, সিকিউরিটি ও ট্রানজিট",
  "next": { "title": "Immigration Officer Questions" },
  "scene": "প্রথমবার বিমানে উঠলে সবচেয়ে বেশি ভয় লাগে বিমানবন্দরে। আজ কাউন্টার, সিকিউরিটি আর ট্রানজিটের ইংরেজি শিখবেন।",
  "hook": { "en": "Which gate is my flight?", "bn": "আমার ফ্লাইট কোন গেটে?" },
  "phrases": [
    { "tag": "আপনি বলবেন", "en": "Where is the check-in counter?", "bn": "চেক-ইন কাউন্টার কোথায়?", "pr": "হোয়্যার ইজ দ্য চেক-ইন কাউন্টার?" },
    { "tag": "আপনি বলবেন", "en": "Is my bag too heavy?", "bn": "আমার ব্যাগ কি বেশি ভারী?", "pr": "ইজ মাই ব্যাগ টু হেভি?" },
    { "tag": "আপনি বলবেন", "en": "Can I carry this in my hand bag?", "bn": "এটা কি হাতের ব্যাগে নিতে পারি?", "pr": "ক্যান আই ক্যারি দিস ইন মাই হ্যান্ড ব্যাগ?" },
    { "tag": "আপনি বলবেন", "en": "Which gate is my flight?", "bn": "আমার ফ্লাইট কোন গেটে?", "pr": "হুইচ গেট ইজ মাই ফ্লাইট?" },
    { "tag": "আপনি বলবেন", "en": "Where is the transfer desk?", "bn": "ট্রান্সফার ডেস্ক কোথায়?", "pr": "হোয়্যার ইজ দ্য ট্রান্সফার ডেস্ক?" },
    { "tag": "আপনি বলবেন", "en": "Is my bag checked through to the final destination?", "bn": "আমার ব্যাগ কি শেষ গন্তব্য পর্যন্ত যাবে?", "pr": "ইজ মাই ব্যাগ চেকড থ্রু টু দ্য ফাইনাল ডেস্টিনেশন?" },
    { "tag": "বুঝে নিন", "en": "Please put your bag on the scale.", "bn": "ব্যাগটা মাপার যন্ত্রে রাখুন।", "pr": "প্লিজ পুট ইওর ব্যাগ অন দ্য স্কেল।" },
    { "tag": "বুঝে নিন", "en": "Remove your belt and empty your pockets.", "bn": "বেল্ট খুলুন আর পকেট খালি করুন।", "pr": "রিমুভ ইওর বেল্ট অ্যান্ড এমটি ইওর পকেটস।" },
    { "tag": "বুঝে নিন", "en": "Boarding starts at gate twelve.", "bn": "বারো নম্বর গেটে ওঠা শুরু হবে।", "pr": "বোর্ডিং স্টার্টস অ্যাট গেট টুয়েলভ।" }
  ],
  "traps": [
    {
      "title": "checked bag আর hand bag",
      "intro": "দুই রকম ব্যাগ, দুই জায়গায় যায়।",
      "items": [
        { "en": "checked baggage", "note": "কাউন্টারে জমা দেওয়া বড় ব্যাগ", "say": "checked baggage" },
        { "en": "hand baggage", "note": "সাথে নেওয়া ছোট ব্যাগ", "say": "hand baggage" },
        { "en": "boarding pass", "note": "বিমানে ওঠার কার্ড", "say": "boarding pass" }
      ],
      "tip": "কোনো জিনিস কোথায় রাখবেন সন্দেহ হলে জিজ্ঞেস করুন: \"Can I carry this in my hand bag?\""
    },
    {
      "title": "transit আর final destination",
      "intro": "অনেক ফ্লাইট পথে এক জায়গায় থামে, তারপর অন্য বিমানে যেতে হয়।",
      "items": [
        { "en": "transit", "note": "পথে থামা", "say": "transit" },
        { "en": "connecting flight", "note": "পরের ফ্লাইট", "say": "connecting flight" },
        { "en": "final destination", "note": "শেষ গন্তব্য", "say": "final destination" }
      ],
      "tip": "ট্রানজিটে নেমে \"Transfer\" লেখা সাইন ধরে এগোন। বুঝতে না পারলে কর্মীকে জিজ্ঞেস করুন।"
    },
    {
      "title": "gate, terminal আর delayed",
      "intro": "বোর্ডে এই তিনটা শব্দ বেশি দেখা যায়।",
      "items": [
        { "en": "gate", "note": "বিমানে ওঠার দরজা", "say": "gate" },
        { "en": "terminal", "note": "বিমানবন্দরের আলাদা ভবন", "say": "terminal" },
        { "en": "delayed", "note": "দেরি হচ্ছে", "say": "delayed" }
      ],
      "tip": "ফ্লাইট দেরি হলে জিজ্ঞেস করুন: \"Is my flight delayed? What time now?\""
    }
  ],
  "listening": [
    {
      "say": "Please put your bag on the scale.",
      "options": [
        { "t": "ব্যাগটা মাপার যন্ত্রে রাখুন", "ok": true },
        { "t": "ব্যাগ খুলুন", "ok": false },
        { "t": "ব্যাগ রেখে যান", "ok": false }
      ],
      "why": "scale = ওজন মাপার যন্ত্র।"
    },
    {
      "say": "Remove your belt and empty your pockets.",
      "options": [
        { "t": "জুতা পরুন", "ok": false },
        { "t": "বেল্ট খুলুন আর পকেট খালি করুন", "ok": true },
        { "t": "মোবাইল বন্ধ করুন", "ok": false }
      ],
      "why": "remove = খোলা। empty = খালি করা। সিকিউরিটিতে এটা বলে।"
    },
    {
      "say": "Your flight is delayed by one hour.",
      "options": [
        { "t": "ফ্লাইট এক ঘণ্টা আগে ছাড়বে", "ok": false },
        { "t": "ফ্লাইট বাতিল", "ok": false },
        { "t": "ফ্লাইট এক ঘণ্টা দেরি হবে", "ok": true }
      ],
      "why": "delayed = দেরি। one hour = এক ঘণ্টা।"
    },
    {
      "say": "Boarding starts at gate twelve.",
      "options": [
        { "t": "বারো নম্বর গেটে ওঠা শুরু", "ok": true },
        { "t": "দুই নম্বর গেটে ওঠা শুরু", "ok": false },
        { "t": "বারোটায় গেট বন্ধ", "ok": false }
      ],
      "why": "twelve = ১২। gate = গেট।"
    }
  ],
  "typing": [
    {
      "ask": "কত নম্বর গেট? সংখ্যা লিখুন",
      "say": "Boarding starts at gate twelve.",
      "num": true,
      "answers": ["12"],
      "show": "12",
      "why": "twelve = ১২",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Where is the check-in ___?",
      "answers": ["counter"],
      "show": "counter",
      "why": "counter = কাউন্টার",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ব্যাগের ওজন নিয়ে জিজ্ঞেস করছেন। ফাঁকা ঘরে কী বসবে?",
      "en": "Is my bag too ___?",
      "answers": ["heavy"],
      "show": "heavy",
      "why": "heavy = ভারী",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [1, 4, 5],
  "dialogue": [
    {
      "boss": "Your bag is too heavy. You must pay extra.",
      "bn": "আপনার ব্যাগ বেশি ভারী। বাড়তি টাকা দিতে হবে।",
      "choices": [
        { "stars": 3, "en": "How much is the extra charge? Can I take something out?", "reply": "Yes. Please take out five kilos.", "replyBn": "হ্যাঁ। পাঁচ কেজি বের করুন।", "tip": "কত টাকা আর কমানোর উপায়, দুটোই জিজ্ঞেস করেছেন। ভালো।" },
        { "stars": 2, "en": "Why?", "reply": "The limit is thirty kilos.", "replyBn": "সীমা ত্রিশ কেজি।", "tip": "\"Why?\" একটু কড়া শোনায়। জিজ্ঞেস করুন: \"What is the limit?\"" },
        { "stars": 1, "en": "I will not pay.", "reply": "Then your bag cannot go.", "replyBn": "তাহলে ব্যাগ যাবে না।", "tip": "না বলে লাভ নেই। দাম আর কমানোর উপায় জিজ্ঞেস করুন।" }
      ]
    },
    {
      "boss": "Can I help you?",
      "bn": "সাহায্য করতে পারি? (আপনি ট্রানজিটে, পরের ফ্লাইটের গেট খুঁজছেন)",
      "choices": [
        { "stars": 3, "en": "Yes, please. I have a connecting flight. Which gate, please?", "reply": "Show me your boarding pass. Gate twenty.", "replyBn": "বোর্ডিং পাস দেখান। বিশ নম্বর গেট।", "tip": "বোর্ডিং পাস হাতে রাখুন। হারিয়ে গেলে লজ্জা না পেয়ে জিজ্ঞেস করুন।" },
        { "stars": 2, "en": "Gate?", "reply": "Which flight?", "replyBn": "কোন ফ্লাইট?", "tip": "এক শব্দে বোঝানো কঠিন। বলুন: \"I have a connecting flight.\"" },
        { "stars": 1, "en": "No, thank you.", "reply": "Okay.", "replyBn": "ঠিক আছে।", "tip": "পথ না জানলে ফ্লাইট মিস হতে পারে। সাহায্য নিন।" }
      ]
    },
    {
      "boss": "Do you have a power bank or any liquids in your bag?",
      "bn": "ব্যাগে পাওয়ার ব্যাংক বা তরল কিছু আছে?",
      "choices": [
        { "stars": 3, "en": "Yes, I have a power bank. Where should I put it?", "reply": "Please put it in the tray.", "replyBn": "ট্রেতে রাখুন।", "tip": "সত্য বলুন আর জিজ্ঞেস করুন। নিয়ম এয়ারলাইনভেদে আলাদা হতে পারে।" },
        { "stars": 2, "en": "I do not understand.", "reply": "Battery. Power bank. Liquid.", "replyBn": "ব্যাটারি, পাওয়ার ব্যাংক, তরল।", "tip": "বলুন: \"Please say it slowly.\" আর জিনিস দেখিয়ে দিন।" },
        { "stars": 1, "en": "No.", "reply": "Please open your bag.", "replyBn": "ব্যাগ খুলুন।", "tip": "থাকা জিনিস \"না\" বললে সমস্যা বাড়ে। সত্য বলুন।" }
      ]
    }
  ],
  "quiz": [
    {
      "q": "বোর্ডিং পাস পেয়ে গেট নম্বর দেখে নেওয়া কি ভালো?",
      "a": true,
      "why": "ঠিক। জিজ্ঞেস করুন: \"Which gate is my flight?\""
    },
    {
      "q": "\"delayed\" মানে কি ফ্লাইট আগে ছাড়বে?",
      "a": false,
      "why": "না। delayed = দেরি হবে।"
    },
    {
      "q": "ট্রানজিটে পথ না চিনলে \"Where is the transfer desk?\" জিজ্ঞেস করা যায় কি?",
      "a": true,
      "why": "ঠিক। কর্মীকে বোর্ডিং পাস দেখান।"
    },
    {
      "q": "\"hand baggage\" মানে কি কাউন্টারে জমা দেওয়া ব্যাগ?",
      "a": false,
      "why": "না। hand baggage = সাথে নেওয়া ছোট ব্যাগ। জমা দেওয়াটা checked baggage।"
    },
    {
      "q": "সিকিউরিটিকে না বলে সন্দেহজনক জিনিস নেওয়া কি নিরাপদ?",
      "a": false,
      "why": "না। জিনিস আছে বললে সমস্যা মেটে। লুকালে বড় সমস্যা।"
    }
  ]
};
