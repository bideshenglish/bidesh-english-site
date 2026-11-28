window.LESSON = {
  "id": "send-money-home",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    1,
    2,
    5,
    6,
    8
  ],
  "who": "এক্সচেঞ্জ হাউসের কর্মী",
  "title": "Sending Money Home",
  "titleBn": "দেশে টাকা পাঠানো",
  "next": {
    "title": "Bills, Fines & Official Letters",
    "id": "bills-fines-letters"
  },
  "scene": "কষ্টের টাকা, তাই রেট, চার্জ আর রসিদ পরিষ্কার জেনে পাঠান। ছোট প্রশ্নেই অনেক টাকা বাঁচে।",
  "hook": {
    "en": "How much will my family receive?",
    "bn": "আমার পরিবার কত পাবে?"
  },
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "I want to send money to Bangladesh.",
      "bn": "আমি বাংলাদেশে টাকা পাঠাতে চাই।",
      "pr": "আই ওয়ান্ট টু সেন্ড মানি টু বাংলাদেশ।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "What is today's exchange rate?",
      "bn": "আজকের রেট কত?",
      "pr": "হোয়াট ইজ টুডেজ এক্সচেঞ্জ রেট?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "What is the fee?",
      "bn": "চার্জ কত?",
      "pr": "হোয়াট ইজ দ্য ফি?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "How much will my family receive?",
      "bn": "আমার পরিবার মোট কত পাবে?",
      "pr": "হাউ মাচ উইল মাই ফ্যামিলি রিসিভ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I have a receipt, please?",
      "bn": "রসিদ পেতে পারি, দয়া করে?",
      "pr": "ক্যান আই হ্যাভ আ রিসিট, প্লিজ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "How long will it take?",
      "bn": "কতক্ষণ লাগবে?",
      "pr": "হাউ লং উইল ইট টেক?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Please check the receiver's details.",
      "bn": "প্রাপকের তথ্য দেখে নিন।",
      "pr": "প্লিজ চেক দ্য রিসিভারস ডিটেইলস।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "The money will arrive in two working days.",
      "bn": "টাকা দুই কর্মদিবসে পৌঁছাবে।",
      "pr": "দ্য মানি উইল অ্যারাইভ ইন টু ওয়ার্কিং ডেইজ।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Here is your reference number.",
      "bn": "এই নিন আপনার রেফারেন্স নম্বর।",
      "pr": "হিয়ার ইজ ইয়োর রেফারেন্স নাম্বার।"
    }
  ],
  "traps": [
    {
      "title": "রেট আর ফি আলাদা, শেষে কত পাবে সেটাই আসল",
      "intro": "\"কোনো ফি নেই\" শুনে খুশি হবেন না। খরচ কখনো রেটের মধ্যে লুকিয়ে থাকে।",
      "items": [
        {
          "en": "exchange rate",
          "note": "এক ডলারে কত টাকা",
          "say": "exchange rate"
        },
        {
          "en": "fee",
          "note": "পাঠানোর চার্জ",
          "say": "fee"
        },
        {
          "en": "How much will my family receive?",
          "note": "পরিবার মোট কত পাবে?",
          "say": "How much will my family receive?"
        }
      ],
      "tip": "দুই-তিন জায়গায় একই প্রশ্ন করুন: \"How much will my family receive?\" যেখানে পরিবার সবচেয়ে বেশি পাবে, সেখানে পাঠান। Gulf News-এর চেকলিস্টেও এটাই পরামর্শ।"
    },
    {
      "title": "প্রাপকের নাম আর নম্বর মিলিয়ে নিন",
      "intro": "একটা অক্ষর বা অঙ্ক ভুল হলে টাকা ভুল জায়গায় যায়।",
      "items": [
        {
          "en": "receiver's name",
          "note": "প্রাপকের নাম",
          "say": "receiver's name"
        },
        {
          "en": "account number",
          "note": "অ্যাকাউন্ট নম্বর",
          "say": "account number"
        },
        {
          "en": "Can you read it back to me?",
          "note": "আমাকে পড়ে শোনাবেন?",
          "say": "Can you read it back to me?"
        }
      ],
      "tip": "পাঠানোর আগে নাম, নম্বর আর টাকার অঙ্ক পড়ে শোনাতে বলুন। রসিদ আর রেফারেন্স নম্বর ফোনে ছবি তুলে রাখুন, পরিবারকে জানান।"
    },
    {
      "title": "বৈধ পথে পাঠান, হুন্ডিতে নয়",
      "intro": "\"আমি সস্তায় পাঠিয়ে দেব, রসিদ লাগবে না\" শুনলে সাবধান। টাকা হারানোর ঝুঁকি আপনার।",
      "items": [
        {
          "en": "licensed exchange house",
          "note": "অনুমোদিত এক্সচেঞ্জ হাউস",
          "say": "licensed exchange house"
        },
        {
          "en": "No receipt? No, thank you.",
          "note": "রসিদ নেই? না, ধন্যবাদ",
          "say": "No receipt? No, thank you."
        },
        {
          "en": "Is the government incentive included?",
          "note": "সরকারি প্রণোদনা কি যুক্ত?",
          "say": "Is the government incentive included?"
        }
      ],
      "tip": "বৈধ চ্যানেলে পাঠালে বাংলাদেশ সরকারের প্রণোদনা (Western Union-এর ২০২৬ সালের লেখায় ২.৫%, শর্ত প্রযোজ্য) পরিবার পায়। হুন্ডিতে ঠকার ঝুঁকি আছে। প্রণোদনা বদলাতে পারে, তাই জিজ্ঞেস করে নিন।"
    }
  ],
  "listening": [
    {
      "say": "Please check the receiver's details.",
      "options": [
        {
          "t": "প্রাপকের তথ্য দেখে নিন",
          "ok": true
        },
        {
          "t": "টাকা গুনে নিন",
          "ok": false
        },
        {
          "t": "কাল আসুন",
          "ok": false
        }
      ],
      "why": "check = দেখে নেওয়া। details = তথ্য। নাম আর নম্বর মিলিয়ে নিন।"
    },
    {
      "say": "The money will arrive in two working days.",
      "options": [
        {
          "t": "টাকা দুই কর্মদিবসে পৌঁছাবে",
          "ok": true
        },
        {
          "t": "টাকা আজই পৌঁছাবে",
          "ok": false
        },
        {
          "t": "টাকা পৌঁছাবে না",
          "ok": false
        }
      ],
      "why": "arrive = পৌঁছানো। working days = ছুটি বাদে কাজের দিন।"
    },
    {
      "say": "The fee is five dollars.",
      "options": [
        {
          "t": "চার্জ পাঁচ ডলার",
          "ok": true
        },
        {
          "t": "চার্জ পনেরো ডলার",
          "ok": false
        },
        {
          "t": "কোনো চার্জ নেই",
          "ok": false
        }
      ],
      "why": "five = ৫, fifteen = ১৫। পরিষ্কার না হলে লিখে দিতে বলুন।"
    },
    {
      "say": "Here is your receipt and reference number.",
      "options": [
        {
          "t": "এই নিন আপনার রসিদ আর রেফারেন্স নম্বর",
          "ok": true
        },
        {
          "t": "রসিদ নেই",
          "ok": false
        },
        {
          "t": "আপনার টাকা ফেরত",
          "ok": false
        }
      ],
      "why": "receipt = রসিদ। reference number = ট্র্যাক করার নম্বর। ছবি তুলে রাখুন।"
    }
  ],
  "typing": [
    {
      "ask": "ফি কত ডলার? সংখ্যা লিখুন",
      "say": "The fee is five dollars.",
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
      "en": "What is today's exchange ___?",
      "answers": [
        "rate"
      ],
      "show": "rate",
      "why": "rate = রেট",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "How much will my family ___?",
      "answers": [
        "receive",
        "get"
      ],
      "show": "receive",
      "why": "receive = পাওয়া",
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
      "boss": "How can I help you?",
      "bn": "কীভাবে সাহায্য করতে পারি? (এক্সচেঞ্জ হাউসের কাউন্টার)",
      "choices": [
        {
          "stars": 3,
          "en": "I want to send two hundred dollars to Bangladesh. What is today's rate and the fee? How much will my family receive?",
          "reply": "Rate is good today. Fee is five dollars. I will calculate.",
          "replyBn": "আজ রেট ভালো। ফি পাঁচ ডলার। আমি হিসাব করে দিচ্ছি।",
          "tip": "কত পাঠাবেন, রেট, ফি আর পরিবার কত পাবে, সবই জিজ্ঞেস করেছেন। সেরা প্রশ্ন।"
        },
        {
          "stars": 2,
          "en": "Send money to Bangladesh.",
          "reply": "How much?",
          "replyBn": "কত?",
          "tip": "ঠিক আছে। কত পাঠাবেন আর রেট-ফি জিজ্ঞেস করলে আরও ভালো হয়।"
        },
        {
          "stars": 1,
          "en": "Here is my money. Send it.",
          "reply": "Okay.",
          "replyBn": "আচ্ছা।",
          "tip": "রেট আর ফি না জেনে টাকা দিলে কম পাঠানো হতে পারে। আগে জিজ্ঞেস করুন।"
        }
      ]
    },
    {
      "boss": "Please give me the receiver's name and phone number.",
      "bn": "প্রাপকের নাম আর ফোন নম্বর দিন। (কর্মী কম্পিউটারে লিখছেন)",
      "choices": [
        {
          "stars": 3,
          "en": "Her name is Rahima Begum. Can you read the name and number back to me, please?",
          "reply": "Rahima Begum. Number is... Is it correct?",
          "replyBn": "রহিমা বেগম। নম্বর হলো... ঠিক আছে?",
          "tip": "পড়ে শোনাতে বলেছেন। ভুল থাকলে এখনই ধরা পড়বে, টাকা ভুল জায়গায় যাবে না।"
        },
        {
          "stars": 2,
          "en": "Rahima Begum.",
          "reply": "Okay, done.",
          "replyBn": "ঠিক আছে, হয়ে গেছে।",
          "tip": "নাম ঠিক। সবসময় পড়ে শোনাতে বলুন: \"Can you read it back?\""
        },
        {
          "stars": 1,
          "en": "Okay, okay. (does not check)",
          "reply": "Done.",
          "replyBn": "হয়ে গেছে।",
          "tip": "না দেখে হয়ে গেলে ভুল নম্বরে টাকা যেতে পারে। দেখে নিন।"
        }
      ]
    },
    {
      "boss": "Hey brother, don't go to the exchange house. Give me the money. I send it cheaper, no receipt, no problem.",
      "bn": "ভাই, এক্সচেঞ্জ হাউসে যেও না। আমাকে টাকা দাও। আমি সস্তায় পাঠিয়ে দেব, রসিদ ছাড়াই, কোনো সমস্যা নেই। (এক অচেনা লোক বলছে)",
      "choices": [
        {
          "stars": 3,
          "en": "No, thank you. I will use the exchange house and take a receipt.",
          "reply": "Okay, okay.",
          "replyBn": "ঠিক আছে, ঠিক আছে।",
          "tip": "ভদ্রভাবে না বলেছেন আর রসিদের কথা বলেছেন। রসিদ ছাড়া পাঠালে টাকা হারানোর প্রমাণ থাকে না।"
        },
        {
          "stars": 2,
          "en": "Maybe later.",
          "reply": "Okay, call me.",
          "replyBn": "আচ্ছা, ফোন করো।",
          "tip": "\"Maybe later\" বললে সে আবার আসবে। স্পষ্ট বলুন: \"No, thank you.\""
        },
        {
          "stars": 1,
          "en": "Okay, here is five hundred dollars.",
          "reply": "Thank you, brother.",
          "replyBn": "ধন্যবাদ, ভাই।",
          "tip": "অচেনাকে রসিদ ছাড়া টাকা দিলে সব হারাতে পারেন। কখনো দেবেন না।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "টাকা পাঠানোর আগে \"How much will my family receive?\" জিজ্ঞেস করা কি ভালো?",
      "a": true,
      "why": "ঠিক। রেট আর ফি দুটোর মোট ফল এই প্রশ্নেই পাবেন।"
    },
    {
      "q": "\"No fee\" শুনলে কি খরচ নেই ধরে নেওয়া যায়?",
      "a": false,
      "why": "না। খরচ রেটের মধ্যে লুকিয়ে থাকতে পারে। পরিবার কত পাবে, সেটা দেখুন।"
    },
    {
      "q": "অচেনা কেউ \"সস্তায় পাঠাব, রসিদ লাগবে না\" বললে টাকা দেওয়া কি নিরাপদ?",
      "a": false,
      "why": "না। অনুমোদিত এক্সচেঞ্জ হাউসে রসিদ নিয়ে পাঠান।"
    },
    {
      "q": "পাঠানোর আগে প্রাপকের নাম আর নম্বর পড়ে শোনাতে বলা কি ঠিক?",
      "a": true,
      "why": "ঠিক। বলুন: \"Can you read it back to me?\""
    },
    {
      "q": "রসিদ আর রেফারেন্স নম্বরের ছবি ফোনে রাখা কি দরকার?",
      "a": true,
      "why": "ঠিক। সমস্যা হলে এগুলোই আপনার প্রমাণ।"
    }
  ],
  "mission": {
    "title": "আজ বলুন",
    "intro": "আজ বাস্তবে অন্তত একবার এই বাক্যগুলোর একটা বলে দেখুন।",
    "items": [
      {
        "en": "I want to send money to Bangladesh.",
        "bn": "আমি বাংলাদেশে টাকা পাঠাতে চাই।"
      },
      {
        "en": "How much will my family receive?",
        "bn": "আমার পরিবার মোট কত পাবে?"
      },
      {
        "en": "Can I have a receipt, please?",
        "bn": "রসিদ পেতে পারি, দয়া করে?"
      }
    ],
    "tip": "শেখা বাক্য বাস্তবে একবার বললেই মনে থাকে। সাধারণ সচেতনতার জন্য।"
  },
  "spot": [
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "How can I help you? — কীভাবে সাহায্য করতে পারি? (এক্সচেঞ্জ হাউসের কাউন্টার)",
      "options": [
        {
          "t": "Here is my money. Send it.",
          "ok": true
        },
        {
          "t": "I want to send two hundred dollars to Bangladesh. What is today's rate and the fee? How much will my family receive?",
          "ok": false
        },
        {
          "t": "Send money to Bangladesh.",
          "ok": false
        }
      ],
      "why": "রেট আর ফি না জেনে টাকা দিলে কম পাঠানো হতে পারে। আগে জিজ্ঞেস করুন।"
    },
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Hey brother, don't go to the exchange house. Give me the money. I send it cheaper, no receipt, no problem. — ভাই, এক্সচেঞ্জ হাউসে যেও না। আমাকে টাকা দাও। আমি সস্তায় পাঠিয়ে দেব, রসিদ ছাড়াই, কোনো সমস্যা নেই। (এক অচেনা লোক বলছে)",
      "options": [
        {
          "t": "Okay, here is five hundred dollars.",
          "ok": true
        },
        {
          "t": "No, thank you. I will use the exchange house and take a receipt.",
          "ok": false
        },
        {
          "t": "Maybe later.",
          "ok": false
        }
      ],
      "why": "অচেনাকে রসিদ ছাড়া টাকা দিলে সব হারাতে পারেন। কখনো দেবেন না।"
    }
  ]
};
