window.LESSON = {
  "id": "appointments-messages",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    4,
    6,
    8
  ],
  "who": "রিসেপশনিস্ট",
  "title": "Making Appointments & Leaving Messages",
  "titleBn": "অ্যাপয়েন্টমেন্ট নেওয়া ও মেসেজ রেখে যাওয়া",
  "next": {
    "title": "Talking to Neighbors & Building Community",
    "id": "neighbors-community"
  },
  "scene": "ডাক্তার, অফিস বা দূতাবাস, সবখানে সময় নিতে হয়। সময় আর নাম পরিষ্কার বললে বারবার যেতে হয় না।",
  "hook": {
    "en": "I would like to make an appointment.",
    "bn": "আমি একটা অ্যাপয়েন্টমেন্ট নিতে চাই।"
  },
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "I would like to make an appointment.",
      "bn": "আমি একটা অ্যাপয়েন্টমেন্ট নিতে চাই।",
      "pr": "আই উড লাইক টু মেক অ্যান অ্যাপয়েন্টমেন্ট।"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Do you have any time on Friday?",
      "bn": "শুক্রবারে কি সময় আছে?",
      "pr": "ডু ইউ হ্যাভ এনি টাইম অন ফ্রাইডে?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "I finish work at five. Do you have anything after five?",
      "bn": "আমার কাজ পাঁচটায় শেষ। পাঁচটার পরে কিছু আছে?",
      "pr": "আই ফিনিশ ওয়ার্ক অ্যাট ফাইভ। ডু ইউ হ্যাভ এনিথিং আফটার ফাইভ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Just to confirm, Friday at six thirty, right?",
      "bn": "নিশ্চিত হতে, শুক্রবার সাড়ে ছয়টায়, ঠিক?",
      "pr": "জাস্ট টু কনফার্ম, ফ্রাইডে অ্যাট সিক্স থার্টি, রাইট?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I change my appointment to Saturday?",
      "bn": "আমার অ্যাপয়েন্টমেন্ট শনিবারে করা যাবে?",
      "pr": "ক্যান আই চেঞ্জ মাই অ্যাপয়েন্টমেন্ট টু স্যাটার্ডে?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I leave a message? Please ask him to call me back.",
      "bn": "মেসেজ রেখে যেতে পারি? ওনাকে আমাকে ফোন করতে বলবেন।",
      "pr": "ক্যান আই লিভ আ মেসেজ? প্লিজ আস্ক হিম টু কল মি ব্যাক।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "We have an opening at three o'clock.",
      "bn": "আমাদের তিনটায় একটা সময় ফাঁকা আছে।",
      "pr": "উই হ্যাভ অ্যান ওপেনিং অ্যাট থ্রি ও'ক্লক।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "He is in a meeting. I will ask him to call you back.",
      "bn": "উনি মিটিংয়ে আছেন। আমি ওনাকে আপনাকে ফোন করতে বলব।",
      "pr": "হি ইজ ইন আ মিটিং। আই উইল আস্ক হিম টু কল ইউ ব্যাক।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Please arrive ten minutes early.",
      "bn": "দশ মিনিট আগে আসবেন।",
      "pr": "প্লিজ অ্যারাইভ টেন মিনিটস আর্লি।"
    }
  ],
  "traps": [
    {
      "title": "this Friday, next Friday আর after five",
      "intro": "দিন আর সময়ের ছোট শব্দেই ভুল হয়। ভুল বুঝলে অ্যাপয়েন্টমেন্ট মিস।",
      "items": [
        {
          "en": "this Friday",
          "note": "এই সপ্তাহের শুক্রবার",
          "say": "this Friday"
        },
        {
          "en": "next Friday",
          "note": "আগামী সপ্তাহের শুক্রবার",
          "say": "next Friday"
        },
        {
          "en": "after five",
          "note": "পাঁচটার পরে",
          "say": "after five"
        }
      ],
      "tip": "শেষে নিজে বলে নিশ্চিত করুন: \"Just to confirm, this Friday, the twenty-eighth, at six thirty, right?\" তারিখ আর সময় ফোনে নোট করুন।"
    },
    {
      "title": "সময় বদলানো, বাতিল, পিছিয়ে দেওয়া",
      "intro": "যেতে না পারলে না জানিয়ে চুপ থাকবেন না। আগে জানালে অন্য কেউ সময়টা পায়।",
      "items": [
        {
          "en": "reschedule",
          "note": "সময় বদলানো",
          "say": "reschedule"
        },
        {
          "en": "cancel",
          "note": "বাতিল করা",
          "say": "cancel"
        },
        {
          "en": "I am running late.",
          "note": "আমার দেরি হচ্ছে",
          "say": "I am running late."
        }
      ],
      "tip": "দেরি হলে ফোন করে বলুন: \"I am running late. I will be there in fifteen minutes. Is that okay?\" না যেতে পারলে আগে থেকে জানান: \"Can I reschedule?\""
    },
    {
      "title": "মেসেজ রাখার তিন লাইন",
      "intro": "ফোন কেউ না ধরলে বা কেউ নেই বললে সংক্ষেপে নাম, নম্বর আর কারণ বলুন।",
      "items": [
        {
          "en": "This is Rahim.",
          "note": "আমি রহিম বলছি",
          "say": "This is Rahim."
        },
        {
          "en": "Please call me back.",
          "note": "দয়া করে ফোন করবেন",
          "say": "Please call me back."
        },
        {
          "en": "It is about my visa.",
          "note": "এটা আমার ভিসার ব্যাপারে",
          "say": "It is about my visa."
        }
      ],
      "tip": "নম্বর ধীরে বলুন, দুবার বলুন। সম্ভব হলে নম্বর মেসেজ করে পাঠান, ভুল কমে। নামের বানান জিজ্ঞেস করলে একটা একটা অক্ষর বলুন।"
    }
  ],
  "listening": [
    {
      "say": "We have an opening at three o'clock.",
      "options": [
        {
          "t": "তিনটায় একটা সময় ফাঁকা আছে",
          "ok": true
        },
        {
          "t": "আমরা তিনটায় বন্ধ হই",
          "ok": false
        },
        {
          "t": "তিন দিন পরে আসুন",
          "ok": false
        }
      ],
      "why": "opening = ফাঁকা সময়। o'clock = ঠিক ঘণ্টায়।"
    },
    {
      "say": "He is in a meeting. Can I take a message?",
      "options": [
        {
          "t": "উনি মিটিংয়ে আছেন। মেসেজ রাখব?",
          "ok": true
        },
        {
          "t": "উনি ছুটিতে আছেন",
          "ok": false
        },
        {
          "t": "উনি এখনই আসছেন",
          "ok": false
        }
      ],
      "why": "in a meeting = মিটিংয়ে। take a message = বার্তা নেওয়া।"
    },
    {
      "say": "Please arrive ten minutes early.",
      "options": [
        {
          "t": "দশ মিনিট আগে আসবেন",
          "ok": true
        },
        {
          "t": "দশ মিনিট পরে আসবেন",
          "ok": false
        },
        {
          "t": "দশ ঘণ্টা আগে আসবেন",
          "ok": false
        }
      ],
      "why": "early = আগে। ten = ১০। late হলে দেরি।"
    },
    {
      "say": "Sorry, that time is not available. Do you want Saturday?",
      "options": [
        {
          "t": "দুঃখিত, ওই সময় ফাঁকা নেই। শনিবার চলবে?",
          "ok": true
        },
        {
          "t": "ওই সময়ে আসুন",
          "ok": false
        },
        {
          "t": "শনিবার আমরা বন্ধ",
          "ok": false
        }
      ],
      "why": "not available = ফাঁকা নেই। উত্তরে: \"Yes, Saturday is fine.\" বা \"Sorry, I cannot.\""
    }
  ],
  "typing": [
    {
      "ask": "কত মিনিট আগে আসতে হবে? সংখ্যা লিখুন",
      "say": "Please arrive ten minutes early.",
      "num": true,
      "answers": [
        "10"
      ],
      "show": "10",
      "why": "ten = ১০। তেরো হলে thirteen।",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "I would like to make an ___.",
      "answers": [
        "appointment"
      ],
      "show": "appointment",
      "why": "appointment = আগে থেকে ঠিক করা সময়",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Can I leave a ___?",
      "answers": [
        "message"
      ],
      "show": "message",
      "why": "message = বার্তা",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [
    0,
    2,
    3
  ],
  "dialogue": [
    {
      "boss": "Good morning, City Clinic. How can I help you?",
      "bn": "সুপ্রভাত, সিটি ক্লিনিক। কীভাবে সাহায্য করতে পারি? (আপনি ডাক্তারের সময় নিতে ফোন করেছেন, কাজ শেষ হয় পাঁচটায়)",
      "choices": [
        {
          "stars": 3,
          "en": "Good morning. I would like to make an appointment for Friday. I finish work at five. Do you have anything after five?",
          "reply": "Yes. We have six thirty on Friday.",
          "replyBn": "হ্যাঁ। শুক্রবার সাড়ে ছয়টায় আছে।",
          "tip": "কী চান, কোন দিন আর কখন পারবেন, সবই বলেছেন। সময় খুঁজতে সহজ।"
        },
        {
          "stars": 2,
          "en": "Appointment, please.",
          "reply": "Which day and time?",
          "replyBn": "কোন দিন আর কখন?",
          "tip": "ঠিক আছে। দিন আর সময়ের কথা প্রথমেই বললে ভালো।"
        },
        {
          "stars": 1,
          "en": "I want doctor now.",
          "reply": "Sir, you need an appointment.",
          "replyBn": "স্যার, অ্যাপয়েন্টমেন্ট লাগবে।",
          "tip": "জরুরি না হলে আগে সময় নিতে হয়। ভদ্রভাবে \"I would like to make an appointment\" বলুন।"
        }
      ]
    },
    {
      "boss": "We have six thirty on Friday. Is that okay?",
      "bn": "শুক্রবার সাড়ে ছয়টায় আছে। চলবে? (রিসেপশনিস্ট দ্রুত বলছেন)",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, that is fine. Just to confirm, Friday at six thirty, right? Can you send me a message?",
          "reply": "Yes, Friday, six thirty. I will send a message.",
          "replyBn": "হ্যাঁ, শুক্রবার সাড়ে ছয়টা। আমি মেসেজ পাঠাব।",
          "tip": "দিন-সময় নিজে বলে নিশ্চিত করেছেন, আর মেসেজ চেয়েছেন। মিস হওয়ার ঝুঁকি কমল।"
        },
        {
          "stars": 2,
          "en": "Okay.",
          "reply": "See you on Friday.",
          "replyBn": "শুক্রবার দেখা হবে।",
          "tip": "ঠিক আছে। দিন-সময় নিজে বলে মিলিয়ে নেওয়া আরও ভালো।"
        },
        {
          "stars": 1,
          "en": "Yes, yes. (does not understand the time)",
          "reply": "Okay, six thirty.",
          "replyBn": "ঠিক আছে, সাড়ে ছয়টা।",
          "tip": "না বুঝে \"yes\" বললে সময় ভুল হতে পারে। আবার বলতে বলুন।"
        }
      ]
    },
    {
      "boss": "Mr. Karim is in a meeting. Can I take a message?",
      "bn": "করিম সাহেব মিটিংয়ে আছেন। মেসেজ রাখব? (আপনি অফিসে ফোন করেছেন, দরকারি কথা)",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, please. This is Rahim. Please ask him to call me back after five. It is about my leave.",
          "reply": "Okay. Rahim, call back after five, about leave.",
          "replyBn": "ঠিক আছে। রহিম, পাঁচটার পরে ফোন, ছুটির ব্যাপারে।",
          "tip": "নাম, কখন আর কীসের ব্যাপারে, তিনটাই বলেছেন। ওপাশে বলে মিলিয়ে নিয়েছে, এটাই ভালো।"
        },
        {
          "stars": 2,
          "en": "Call me.",
          "reply": "Who are you?",
          "replyBn": "আপনি কে?",
          "tip": "নাম আর কারণ বলুন, নইলে ওনারা বুঝবেন না।"
        },
        {
          "stars": 1,
          "en": "(Hangs up)",
          "reply": "Hello? Hello?",
          "replyBn": "হ্যালো? হ্যালো?",
          "tip": "ফোন কেটে দিলে কেউ জানে না আপনি কে। মেসেজ রেখে যান।"
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "অ্যাপয়েন্টমেন্টের পরে দিন আর সময় নিজে বলে নিশ্চিত করা কি ভালো?",
      "a": true,
      "why": "ঠিক। বলুন: \"Just to confirm, Friday at six thirty, right?\""
    },
    {
      "q": "যেতে না পারলে কিছু না জানিয়ে চুপ থাকা কি ঠিক?",
      "a": false,
      "why": "না। আগে জানান: \"Can I reschedule?\" অন্য কেউ সময়টা পাবে।"
    },
    {
      "q": "\"next Friday\" মানে কি এই সপ্তাহের শুক্রবার?",
      "a": false,
      "why": "না। next Friday = আগামী সপ্তাহের শুক্রবার। এই সপ্তাহ হলো this Friday।"
    },
    {
      "q": "ফোনে মেসেজ রাখার সময় নাম, নম্বর আর কারণ বলা কি ভালো?",
      "a": true,
      "why": "ঠিক। ধীরে বলুন, নম্বর দুবার বলুন।"
    },
    {
      "q": "দেরি হলে ফোন করে \"I am running late\" বলা কি ঠিক?",
      "a": true,
      "why": "ঠিক। কখন পৌঁছাবেন, সেটাও বলুন।"
    }
  ],
  "mission": {
    "title": "আজ বলুন",
    "intro": "আজ বাস্তবে অন্তত একবার এই বাক্যগুলোর একটা বলে দেখুন।",
    "items": [
      {
        "en": "I would like to make an appointment.",
        "bn": "আমি একটা অ্যাপয়েন্টমেন্ট নিতে চাই।"
      },
      {
        "en": "I finish work at five. Do you have anything after five?",
        "bn": "আমার কাজ পাঁচটায় শেষ। পাঁচটার পরে কিছু আছে?"
      },
      {
        "en": "Just to confirm, Friday at six thirty, right?",
        "bn": "নিশ্চিত হতে, শুক্রবার সাড়ে ছয়টায়, ঠিক?"
      }
    ],
    "tip": "শেখা বাক্য বাস্তবে একবার বললেই মনে থাকে। সাধারণ সচেতনতার জন্য।"
  },
  "spot": [
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Good morning, City Clinic. How can I help you? — সুপ্রভাত, সিটি ক্লিনিক। কীভাবে সাহায্য করতে পারি? (আপনি ডাক্তারের সময় নিতে ফোন করেছেন, কাজ শেষ হয় পাঁচটায়)",
      "options": [
        {
          "t": "I want doctor now.",
          "ok": true
        },
        {
          "t": "Good morning. I would like to make an appointment for Friday. I finish work at five. Do you have anything after five?",
          "ok": false
        },
        {
          "t": "Appointment, please.",
          "ok": false
        }
      ],
      "why": "জরুরি না হলে আগে সময় নিতে হয়। ভদ্রভাবে \"I would like to make an appointment\" বলুন।"
    },
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Mr. Karim is in a meeting. Can I take a message? — করিম সাহেব মিটিংয়ে আছেন। মেসেজ রাখব? (আপনি অফিসে ফোন করেছেন, দরকারি কথা)",
      "options": [
        {
          "t": "(Hangs up)",
          "ok": true
        },
        {
          "t": "Yes, please. This is Rahim. Please ask him to call me back after five. It is about my leave.",
          "ok": false
        },
        {
          "t": "Call me.",
          "ok": false
        }
      ],
      "why": "ফোন কেটে দিলে কেউ জানে না আপনি কে। মেসেজ রেখে যান।"
    }
  ]
};
