window.LESSON = {
  "id": "shopping-prices",
  "type": "A",
  "build": true,
  "game": true,
  "match": [
    0,
    1,
    6,
    7,
    8
  ],
  "who": "দোকানদার / ক্যাশিয়ার",
  "title": "Basic Shopping & Asking Prices",
  "titleBn": "কেনাকাটা ও দাম জিজ্ঞেস করা",
  "next": {
    "title": "SIM Card, Wi-Fi & Calling Home",
    "id": "sim-wifi"
  },
  "scene": "দোকানে দাম, ফেরত আর রসিদ নিয়ে ভুল বোঝাবুঝিতে টাকা যায়। আজ কেনার আগে কী জিজ্ঞেস করবেন শিখবেন।",
  "hook": {
    "en": "Is this the final price?",
    "bn": "এটাই কি শেষ দাম?"
  },
  "phrases": [
    {
      "tag": "আপনি বলবেন",
      "en": "How much is this?",
      "bn": "এটার দাম কত?",
      "pr": "হাউ মাচ ইজ দিস?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Is this the final price?",
      "bn": "এটাই কি শেষ দাম?",
      "pr": "ইজ দিস দ্য ফাইনাল প্রাইস?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I open the box and check it?",
      "bn": "বক্স খুলে দেখে নিতে পারি?",
      "pr": "ক্যান আই ওপেন দ্য বক্স অ্যান্ড চেক ইট?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can I return or exchange it?",
      "bn": "এটা ফেরত দিতে বা বদলাতে পারব?",
      "pr": "ক্যান আই রিটার্ন অর এক্সচেঞ্জ ইট?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Do you have a smaller size?",
      "bn": "ছোট সাইজ আছে?",
      "pr": "ডু ইউ হ্যাভ আ স্মলার সাইজ?"
    },
    {
      "tag": "আপনি বলবেন",
      "en": "Can you give a discount?",
      "bn": "কিছু কমাবেন?",
      "pr": "ক্যান ইউ গিভ আ ডিসকাউন্ট?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Cash or card?",
      "bn": "নগদ, নাকি কার্ড?",
      "pr": "ক্যাশ অর কার্ড?"
    },
    {
      "tag": "বুঝে নিন",
      "en": "Here is your change.",
      "bn": "এই নিন আপনার ফেরত টাকা।",
      "pr": "হিয়ার ইজ ইওর চেঞ্জ।"
    },
    {
      "tag": "বুঝে নিন",
      "en": "No refund. Only exchange.",
      "bn": "টাকা ফেরত নেই। শুধু বদল।",
      "pr": "নো রিফান্ড। অনলি এক্সচেঞ্জ।"
    }
  ],
  "traps": [
    {
      "title": "price, final price আর tax",
      "intro": "দাম শোনার পর বাড়তি চার্জ চাইলে বিপদ।",
      "items": [
        {
          "en": "price",
          "note": "দাম",
          "say": "price"
        },
        {
          "en": "final price",
          "note": "সব মিলিয়ে শেষ দাম",
          "say": "final price"
        },
        {
          "en": "tax",
          "note": "কর",
          "say": "tax"
        }
      ],
      "tip": "দাম শুনে জিজ্ঞেস করুন: \"Is this the final price? Is tax included?\""
    },
    {
      "title": "refund, exchange আর receipt",
      "intro": "ফেরতের নিয়ম দোকানভেদে আলাদা। অনেক দোকান টাকা ফেরত দেয় না।",
      "items": [
        {
          "en": "refund",
          "note": "টাকা ফেরত",
          "say": "refund"
        },
        {
          "en": "exchange",
          "note": "অন্য জিনিসে বদল",
          "say": "exchange"
        },
        {
          "en": "receipt",
          "note": "কেনার রসিদ",
          "say": "receipt"
        }
      ],
      "tip": "কেনার আগে জিজ্ঞেস করুন: \"Can I return or exchange it?\" আর রসিদ রেখে দিন।"
    },
    {
      "title": "খুব সস্তা দামে সাবধান",
      "intro": "ফোন বা দামি জিনিস কেনার আগে ঠিকমতো দেখুন।",
      "items": [
        {
          "en": "brand new",
          "note": "একদম নতুন",
          "say": "brand new"
        },
        {
          "en": "second-hand",
          "note": "পুরনো ব্যবহার করা",
          "say": "second-hand"
        },
        {
          "en": "fake",
          "note": "নকল",
          "say": "fake"
        }
      ],
      "tip": "দোকান ছাড়ার আগে বক্স খুলে চালু করে দেখুন। না দেখতে দিলে কিনবেন না।"
    }
  ],
  "listening": [
    {
      "say": "Cash or card?",
      "options": [
        {
          "t": "নগদ, নাকি কার্ড?",
          "ok": true
        },
        {
          "t": "কত টাকা?",
          "ok": false
        },
        {
          "t": "কোন রং?",
          "ok": false
        }
      ],
      "why": "cash = নগদ। card = কার্ড।"
    },
    {
      "say": "Here is your change.",
      "options": [
        {
          "t": "এটা নতুন জিনিস",
          "ok": false
        },
        {
          "t": "এই নিন আপনার ফেরত টাকা",
          "ok": true
        },
        {
          "t": "আরও টাকা দিন",
          "ok": false
        }
      ],
      "why": "change = খুচরা বা ফেরত টাকা। গুনে নিন।"
    },
    {
      "say": "No refund. Only exchange.",
      "options": [
        {
          "t": "পুরো টাকা ফেরত পাবেন",
          "ok": false
        },
        {
          "t": "জিনিস ফেরত নেওয়া হবে না",
          "ok": false
        },
        {
          "t": "টাকা ফেরত নেই, শুধু বদল",
          "ok": true
        }
      ],
      "why": "refund = টাকা ফেরত। exchange = বদল।"
    },
    {
      "say": "It is on sale. Half price.",
      "options": [
        {
          "t": "ছাড়ে আছে, অর্ধেক দাম",
          "ok": true
        },
        {
          "t": "দোকান বন্ধ",
          "ok": false
        },
        {
          "t": "দাম দ্বিগুণ",
          "ok": false
        }
      ],
      "why": "on sale = ছাড়ে। half = অর্ধেক।"
    }
  ],
  "typing": [
    {
      "ask": "কত ডলার? সংখ্যা লিখুন",
      "say": "It is twenty dollars.",
      "num": true,
      "answers": [
        "20"
      ],
      "show": "20",
      "why": "twenty = ২০",
      "ph": "সংখ্যা লিখুন"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Is this the final ___?",
      "answers": [
        "price"
      ],
      "show": "price",
      "why": "price = দাম",
      "ph": "ইংরেজি শব্দ"
    },
    {
      "ask": "ফাঁকা ঘরে কী বসবে?",
      "en": "Can I open the ___ and check it?",
      "answers": [
        "box"
      ],
      "show": "box",
      "why": "box = বক্স",
      "ph": "ইংরেজি শব্দ"
    }
  ],
  "speak": [
    1,
    2,
    3
  ],
  "dialogue": [
    {
      "boss": "Brand new phone. Very cheap. Two hundred dollars. Only today!",
      "bn": "একদম নতুন ফোন। খুব সস্তা। দুইশো ডলার। শুধু আজ! (রাস্তার বিক্রেতা)",
      "choices": [
        {
          "stars": 3,
          "en": "Can I open the box and turn it on first?",
          "reply": "No, no. The box is sealed. Only today!",
          "replyBn": "না, না। বক্স সিল করা। শুধু আজ!",
          "tip": "খুলতে না দিলে কিনবেন না। \"শুধু আজ\" বলে তাড়া দেওয়াও সন্দেহের চিহ্ন।"
        },
        {
          "stars": 2,
          "en": "Is it new?",
          "reply": "Yes, yes. Brand new.",
          "replyBn": "হ্যাঁ, হ্যাঁ। একদম নতুন।",
          "tip": "\"Yes, yes\" যথেষ্ট না। খুলে চালু করে দেখতে চান।"
        },
        {
          "stars": 1,
          "en": "Okay, I will take it.",
          "reply": "Good price.",
          "replyBn": "ভালো দাম।",
          "tip": "না দেখে কিনলে ফোনের জায়গায় অন্য কিছু পাওয়ার ঝুঁকি থাকে।"
        }
      ]
    },
    {
      "boss": "That is thirty dollars.",
      "bn": "এটা তিরিশ ডলার। (ছোট দোকানদার)",
      "choices": [
        {
          "stars": 3,
          "en": "Is this the final price? Can you give a discount?",
          "reply": "Okay, twenty-five dollars.",
          "replyBn": "ঠিক আছে, পঁচিশ ডলার।",
          "tip": "বাজার বা ছোট দোকানে ভদ্রভাবে জিজ্ঞেস করলে দাম কমতে পারে। সুপারমার্কেটে সাধারণত দাম ঠিক করা থাকে।"
        },
        {
          "stars": 2,
          "en": "Too expensive.",
          "reply": "Twenty-eight.",
          "replyBn": "আটাশ।",
          "tip": "কাজ হয়েছে, তবে ভদ্রভাবে \"Can you give a discount?\" বলুন।"
        },
        {
          "stars": 1,
          "en": "Okay.",
          "reply": "Thank you.",
          "replyBn": "ধন্যবাদ।",
          "tip": "জিজ্ঞেস করলে হয়তো কম হতো। অন্তত \"Is this the final price?\" জিজ্ঞেস করুন।"
        }
      ]
    },
    {
      "boss": "Sorry, no refund. Only exchange. Do you have the receipt?",
      "bn": "দুঃখিত, টাকা ফেরত নেই। শুধু বদল। রসিদ আছে? (ক্যাশিয়ার)",
      "choices": [
        {
          "stars": 3,
          "en": "Yes, here is my receipt. I will take an exchange.",
          "reply": "Okay.",
          "replyBn": "ঠিক আছে।",
          "tip": "রসিদ রাখাই কাজে লাগল। কেনার পর রসিদ ফেলবেন না।"
        },
        {
          "stars": 2,
          "en": "No receipt.",
          "reply": "Sorry, I cannot help.",
          "replyBn": "দুঃখিত, সাহায্য করতে পারব না।",
          "tip": "রসিদ ছাড়া বদল হয় না। পরেরবার রেখে দিন। ম্যানেজারকেও জিজ্ঞেস করে দেখতে পারেন।"
        },
        {
          "stars": 1,
          "en": "Give me my money!",
          "reply": "Please calm down.",
          "replyBn": "শান্ত হোন।",
          "tip": "রাগ করলে লাভ নেই। ভদ্রভাবে বলুন: \"Can I speak to the manager, please?\""
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "ফোন কেনার আগে বক্স খুলে চালু করে দেখা কি ভালো?",
      "a": true,
      "why": "ঠিক। দোকান ছাড়ার আগে দেখে নিন। না দেখতে দিলে কিনবেন না।"
    },
    {
      "q": "খুব কম দাম মানেই কি সবসময় ভালো সুযোগ?",
      "a": false,
      "why": "না। খুব কম দাম নকল বা ঠকানোর চিহ্ন হতে পারে।"
    },
    {
      "q": "\"exchange\" মানে কি টাকা ফেরত?",
      "a": false,
      "why": "না। exchange = বদল। টাকা ফেরত হলো refund।"
    },
    {
      "q": "কেনার পর রসিদ রেখে দেওয়া কি ভালো?",
      "a": true,
      "why": "ঠিক। ফেরত বা বদলের সময় রসিদ লাগে।"
    },
    {
      "q": "সুপারমার্কেটে দাম লেখা থাকলেও দর কষা কি সাধারণ?",
      "a": false,
      "why": "না। সুপারমার্কেটে সাধারণত দাম ঠিক করা থাকে। দরদাম বাজার বা ছোট দোকানে।"
    }
  ],
  "mission": {
    "title": "আজ বলুন",
    "intro": "আজ বাস্তবে অন্তত একবার এই বাক্যগুলোর একটা বলে দেখুন।",
    "items": [
      {
        "en": "Is this the final price?",
        "bn": "এটাই কি শেষ দাম?"
      },
      {
        "en": "Can I open the box and check it?",
        "bn": "বক্স খুলে দেখে নিতে পারি?"
      },
      {
        "en": "Can I return or exchange it?",
        "bn": "এটা ফেরত দিতে বা বদলাতে পারব?"
      }
    ],
    "tip": "শেখা বাক্য বাস্তবে একবার বললেই মনে থাকে। সাধারণ সচেতনতার জন্য।"
  },
  "spot": [
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Brand new phone. Very cheap. Two hundred dollars. Only today! — একদম নতুন ফোন। খুব সস্তা। দুইশো ডলার। শুধু আজ! (রাস্তার বিক্রেতা)",
      "options": [
        {
          "t": "Okay, I will take it.",
          "ok": true
        },
        {
          "t": "Can I open the box and turn it on first?",
          "ok": false
        },
        {
          "t": "Is it new?",
          "ok": false
        }
      ],
      "why": "না দেখে কিনলে ফোনের জায়গায় অন্য কিছু পাওয়ার ঝুঁকি থাকে।"
    },
    {
      "q": "কোন উত্তরটা সবচেয়ে ভুল?",
      "scene": "Sorry, no refund. Only exchange. Do you have the receipt? — দুঃখিত, টাকা ফেরত নেই। শুধু বদল। রসিদ আছে? (ক্যাশিয়ার)",
      "options": [
        {
          "t": "Give me my money!",
          "ok": true
        },
        {
          "t": "Yes, here is my receipt. I will take an exchange.",
          "ok": false
        },
        {
          "t": "No receipt.",
          "ok": false
        }
      ],
      "why": "রাগ করলে লাভ নেই। ভদ্রভাবে বলুন: \"Can I speak to the manager, please?\""
    }
  ]
};
