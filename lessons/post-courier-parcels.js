window.LESSON = {
  "id": "post-courier-parcels",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    2,
    3,
    4,
    5,
    6
  ],
  "who": "কুরিয়ার কর্মী",
  "title": "Post Office, Courier & Parcels",
  "titleBn": "ডাকঘর, কুরিয়ার ও পার্সেল",
  "next": {
    "title": "Reading Public Signs & Notices",
    "id": "public-signs"
  },
  "scene": "দেশে উপহার পাঠানো আর নিজের পার্সেল নেওয়া, দুটোতেই ইংরেজি লাগে। সত্য বলুন, রসিদ নিন।",
  "hook": {
    "en": "Can I have a tracking number?",
    "bn": "ট্র্যাকিং নম্বর পেতে পারি?"
  },
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "I want to send this parcel to Bangladesh.",
      "bn": "আমি এই পার্সেলটা বাংলাদেশে পাঠাতে চাই।",
      "pr": "আই ওয়ান্ট টু সেন্ড দিস পার্সেল টু বাংলাদেশ।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "How much does it cost? How long will it take?",
      "bn": "কত খরচ? কতদিন লাগবে?",
      "pr": "হাউ মাচ ডাজ ইট কস্ট? হাউ লং উইল ইট টেক?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "It has clothes and shoes inside.",
      "bn": "ভেতরে জামাকাপড় আর জুতা আছে।",
      "pr": "ইট হ্যাজ ক্লোদস অ্যান্ড শুজ ইনসাইড।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Is this item allowed?",
      "bn": "এই জিনিস পাঠানো যায়?",
      "pr": "ইজ দিস আইটেম অ্যালাউড?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I have a tracking number?",
      "bn": "ট্র্যাকিং নম্বর পেতে পারি?",
      "pr": "ক্যান আই হ্যাভ আ ট্র্যাকিং নাম্বার?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Please call me before you come.",
      "bn": "আসার আগে আমাকে ফোন করবেন।",
      "pr": "প্লিজ কল মি বিফোর ইউ কাম।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "What is inside the parcel?",
      "bn": "পার্সেলের ভেতরে কী আছে?",
      "pr": "হোয়াট ইজ ইনসাইড দ্য পার্সেল?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Please write the receiver's address and phone number.",
      "bn": "প্রাপকের ঠিকানা আর ফোন নম্বর লিখুন।",
      "pr": "প্লিজ রাইট দ্য রিসিভারস অ্যাড্রেস অ্যান্ড ফোন নাম্বার।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Delivery failed. We will try again tomorrow.",
      "bn": "ডেলিভারি হয়নি। আমরা কাল আবার চেষ্টা করব।",
      "pr": "ডেলিভারি ফেইলড। উই উইল ট্রাই অ্যাগেইন টুমরো।"
    }
  ],
  "traps": [
    {
      "title": "ভেতরে কী আছে, সত্য বলুন",
      "intro": "কুরিয়ার জিজ্ঞেস করবেই। ভুল বা লুকানো তথ্য দিলে পার্সেল আটকাতে পারে।",
      "items": [
        {
          "en": "clothes",
          "note": "জামাকাপড়",
          "say": "clothes"
        },
        {
          "en": "gifts",
          "note": "উপহার",
          "say": "gifts"
        },
        {
          "en": "Is this item allowed?",
          "note": "এটা পাঠানো যায়?",
          "say": "Is this item allowed?"
        }
      ],
      "tip": "DHL-এর তালিকায় বিস্ফোরক, মাদক, অস্ত্র নিষিদ্ধ। ওষুধ, লিথিয়াম ব্যাটারি, অ্যালকোহল, খাবার বিশেষ নিয়মে যায়। সন্দেহ হলে আগেই জিজ্ঞেস করুন, পরে ঝামেলা হবে না।"
    },
    {
      "title": "রসিদ আর ট্র্যাকিং নম্বর",
      "intro": "পার্সেল হারালে বা দেরি হলে এই দুটোই আপনার প্রমাণ।",
      "items": [
        {
          "en": "tracking number",
          "note": "পার্সেল কোথায়, দেখার নম্বর",
          "say": "tracking number"
        },
        {
          "en": "receipt",
          "note": "রসিদ",
          "say": "receipt"
        },
        {
          "en": "fragile",
          "note": "ভঙ্গুর, সাবধানে",
          "say": "fragile"
        }
      ],
      "tip": "রসিদ আর ট্র্যাকিং নম্বরের ছবি ফোনে রাখুন, পরিবারকে পাঠান। কাচ বা ভঙ্গুর জিনিস হলে বলুন: \"It is fragile.\""
    },
    {
      "title": "নিজের পার্সেল নেওয়ার সময়",
      "intro": "ডেলিভারির লোক ফোন করে দ্রুত বলে। আর কিছু প্রতারক নকল ডেলিভারির নামে টাকা চায়।",
      "items": [
        {
          "en": "Can you come after six?",
          "note": "ছয়টার পরে আসতে পারবেন?",
          "say": "Can you come after six?"
        },
        {
          "en": "I didn't order anything.",
          "note": "আমি কিছু অর্ডার করিনি",
          "say": "I didn't order anything."
        },
        {
          "en": "I will not pay by link.",
          "note": "আমি লিংকে টাকা দেব না",
          "say": "I will not pay by link."
        }
      ],
      "tip": "Emirates Post-এর নামে ভুয়া মেসেজ ঘোরে। সরকারি সতর্কতা: পেমেন্ট লিংকে ক্লিক নয়, শুধু অফিসিয়াল সাইট বা অ্যাপে। যা অর্ডার করেননি, তার জন্য টাকা দেবেন না।"
    }
  ],
  "listening": [
    {
      "say": "What is inside the parcel?",
      "options": [
        {
          "t": "পার্সেলের ভেতরে কী আছে?",
          "ok": true
        },
        {
          "t": "পার্সেল কার জন্য?",
          "ok": false
        },
        {
          "t": "পার্সেল কত ভারী?",
          "ok": false
        }
      ],
      "why": "inside = ভেতরে। সত্য আর ছোট করে বলুন: \"Clothes and shoes.\""
    },
    {
      "say": "It will take five days.",
      "options": [
        {
          "t": "পাঁচ দিন লাগবে",
          "ok": true
        },
        {
          "t": "পনেরো দিন লাগবে",
          "ok": false
        },
        {
          "t": "আজই পৌঁছাবে",
          "ok": false
        }
      ],
      "why": "five = ৫, fifteen = ১৫। নিশ্চিত না হলে লিখে দিতে বলুন।"
    },
    {
      "say": "Delivery failed. We will try again tomorrow.",
      "options": [
        {
          "t": "ডেলিভারি হয়নি। কাল আবার চেষ্টা করব",
          "ok": true
        },
        {
          "t": "ডেলিভারি হয়ে গেছে",
          "ok": false
        },
        {
          "t": "পার্সেল হারিয়ে গেছে",
          "ok": false
        }
      ],
      "why": "failed = ব্যর্থ হয়েছে। try again = আবার চেষ্টা। tomorrow = কাল।"
    },
    {
      "say": "I am at your gate. Where are you?",
      "options": [
        {
          "t": "আমি আপনার গেটে। আপনি কোথায়?",
          "ok": true
        },
        {
          "t": "আমি আপনার ঘরে নেই",
          "ok": false
        },
        {
          "t": "আমি কাল আসব",
          "ok": false
        }
      ],
      "why": "gate = গেট। ছোট উত্তর: \"I am at work. Please wait ten minutes.\""
    }
  ],
  "typing": [
    {
      "ask": "কত দিন লাগবে? সংখ্যা লিখুন",
      "say": "It will take five days.",
      "num": true,
      "answers": [
        "5"
      ],
      "show": "5",
      "why": "five = ৫। fifteen হলে ১৫।",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "What is ___ the parcel?",
      "answers": [
        "inside"
      ],
      "show": "inside",
      "why": "inside = ভেতরে",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Can I have a tracking ___?",
      "answers": [
        "number"
      ],
      "show": "number",
      "why": "tracking number = ট্র্যাকিং নম্বর",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [
    0,
    3,
    4
  ],
  "dialogue": [
    {
      "boss": "What is inside the parcel?",
      "bn": "পার্সেলের ভেতরে কী আছে? (কুরিয়ারের কাউন্টার)",
      "choices": [
        {
          "stars": 3,
          "en": "Clothes, shoes and two phone chargers. Is that allowed? And I need a tracking number, please.",
          "reply": "Yes, allowed. Here is your tracking number.",
          "replyBn": "হ্যাঁ, চলবে। এই নিন ট্র্যাকিং নম্বর।",
          "tip": "ভেতরের জিনিস সত্য বলেছেন, চলবে কি না আর ট্র্যাকিং নম্বর জিজ্ঞেস করেছেন। সেরা উত্তর।"
        },
        {
          "stars": 2,
          "en": "Gifts.",
          "reply": "What kind of gifts?",
          "replyBn": "কী ধরনের উপহার?",
          "tip": "\"gifts\" বললে হবে না। কী কী আছে, নাম বলুন।"
        },
        {
          "stars": 1,
          "en": "Nothing. Just send it.",
          "reply": "I must check. Open it.",
          "replyBn": "আমাকে দেখতে হবে। খুলুন।",
          "tip": "লুকালে পার্সেল আটকাতে পারে। সত্য বলুন।"
        }
      ]
    },
    {
      "boss": "Hello! I am at your gate with a parcel. Where are you?",
      "bn": "হ্যালো! আমি আপনার গেটে পার্সেল নিয়ে। আপনি কোথায়? (ডেলিভারির লোক, আপনি কাজে আছেন)",
      "choices": [
        {
          "stars": 3,
          "en": "Sorry, I am at work. Can you come after six, please? Please call me before you come.",
          "reply": "Okay. I will call you at six.",
          "replyBn": "ঠিক আছে। ছয়টায় ফোন করব।",
          "tip": "কোথায় আছেন, কবে আসতে পারবেন আর ফোন করতে বলেছেন। ভদ্র আর পরিষ্কার।"
        },
        {
          "stars": 2,
          "en": "I am not here.",
          "reply": "Then I go back.",
          "replyBn": "তাহলে আমি ফিরে যাই।",
          "tip": "ঠিক আছে। কখন আসতে পারবেন, সেটা বলুন: \"Can you come after six?\""
        },
        {
          "stars": 1,
          "en": "Yes, yes, wait.",
          "reply": "Okay, I wait.",
          "replyBn": "আচ্ছা, আমি অপেক্ষা করছি।",
          "tip": "আসতে না পারলে সত্য বলুন। মিথ্যা বললে সে অপেক্ষা করে সময় নষ্ট করে।"
        }
      ]
    },
    {
      "boss": "This parcel is for you. Pay twenty dollars cash for delivery.",
      "bn": "এই পার্সেল আপনার জন্য। ডেলিভারির জন্য বিশ ডলার নগদ দিন। (আপনি কিছু অর্ডার করেননি)",
      "choices": [
        {
          "stars": 3,
          "en": "Sorry, I didn't order anything. I will not pay. Please check the name and address.",
          "reply": "Hmm, okay. Maybe wrong address.",
          "replyBn": "হুম, ঠিক আছে। হয়তো ভুল ঠিকানা।",
          "tip": "অর্ডার করেননি, তাই টাকা দেননি। নাম-ঠিকানা মেলাতে বলেছেন। প্রতারণা থেকে বেঁচেছেন।"
        },
        {
          "stars": 2,
          "en": "Why twenty dollars?",
          "reply": "Delivery fee. Pay now.",
          "replyBn": "ডেলিভারি ফি। এখনই দিন।",
          "tip": "ভালো প্রশ্ন। কিন্তু অর্ডার না করলে সরাসরি \"I will not pay\" বলুন।"
        },
        {
          "stars": 1,
          "en": "Okay, here is the money.",
          "reply": "Thank you.",
          "replyBn": "ধন্যবাদ।",
          "tip": "যা অর্ডার করেননি, তার জন্য টাকা দেবেন না। এটা প্রতারণা হতে পারে।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "কুরিয়ারে ভেতরের জিনিস সত্য বলা কি ঠিক?",
      "a": true,
      "why": "ঠিক। লুকালে পার্সেল আটকাতে পারে।"
    },
    {
      "q": "ট্র্যাকিং নম্বর আর রসিদের ছবি ফোনে রাখা কি দরকার?",
      "a": true,
      "why": "ঠিক। হারালে বা দেরি হলে এগুলোই প্রমাণ।"
    },
    {
      "q": "যা অর্ডার করেননি, তার ডেলিভারি ফি দেওয়া কি নিরাপদ?",
      "a": false,
      "why": "না। বলুন: \"I didn't order anything. I will not pay.\""
    },
    {
      "q": "মেসেজে \"পার্সেলের জন্য এই লিংকে টাকা দিন\" এলে ক্লিক করা কি ঠিক?",
      "a": false,
      "why": "না। লিংকে ক্লিক করবেন না। অফিসিয়াল সাইট বা অ্যাপে যাচাই করুন।"
    },
    {
      "q": "ডেলিভারির লোক ফোন করলে \"Can you come after six?\" বলা কি ঠিক?",
      "a": true,
      "why": "ঠিক। আসতে না পারলে সময় বলুন।"
    }
  ]
};
