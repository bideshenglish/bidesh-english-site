window.LESSON = {
  id: "spelling-forms",
  type: "A",
  who: "কাউন্টারের লোক",
  title: "Spelling Your Name & Filling Out Forms",
  titleBn: "নামের বানান বলা ও ফর্ম পূরণ, একটা অক্ষর ভুল হলেই ঝামেলা",

  next: { title: "Introducing Yourself & Your Experience" },

  scene: "কাউন্টারে ফর্ম হাতে দাঁড়িয়ে আছেন। \"Surname\" ঘরে কী লিখবেন? আপনার তো একটাই নাম। আবার ফোনে বা কাউন্টারে নামের বানান বলতে গেলে M আর N, B আর P গুলিয়ে যায়। অথচ পাসপোর্টের সাথে একটা অক্ষর না মিললে টিকিট, ভিসা বা ফর্ম আটকে যেতে পারে। আজ শিখবেন কীভাবে নাম ঠিকভাবে বানান করে বলবেন, ফর্মের ঘরগুলো বুঝবেন, আর না বুঝলে কী বলে জেনে নেবেন।",

  phrases: [
    { tag: "আপনি বলবেন", en: "My first name is Rahim. My last name is Uddin.", bn: "আমার প্রথম নাম রহিম। শেষ নাম উদ্দিন।", pr: "মাই ফার্স্ট নেম ইজ রহিম। মাই লাস্ট নেম ইজ উদ্দিন।" },
    { tag: "আপনি বলবেন", en: "Let me spell it. R, A, H, I, M.", bn: "আমি বানান করে বলছি। আর, এ, এইচ, আই, এম।", pr: "লেট মি স্পেল ইট। আর, এ, এইচ, আই, এম।" },
    { tag: "আপনি বলবেন", en: "That is M as in Mike, not N.", bn: "ওটা M, মাইক-এর M। N নয়।", pr: "দ্যাট ইজ এম অ্যাজ ইন মাইক, নট এন।" },
    { tag: "আপনি বলবেন", en: "Please write my name exactly like my passport.", bn: "আমার নাম পাসপোর্টের মতো হুবহু লিখুন।", pr: "প্লিজ রাইট মাই নেম এক্সাক্টলি লাইক মাই পাসপোর্ট।" },
    { tag: "আপনি বলবেন", en: "I have only one name.", bn: "আমার একটাই নাম।", pr: "আই হ্যাভ ওনলি ওয়ান নেম।" },
    { tag: "আপনি বলবেন", en: "Can you help me fill out this form, please?", bn: "এই ফর্মটা পূরণে একটু সাহায্য করবেন?", pr: "ক্যান ইউ হেল্প মি ফিল আউট দিস ফর্ম, প্লিজ?" },
    { tag: "আপনি বলবেন", en: "I don't understand this word. What does it mean?", bn: "এই শব্দটা বুঝতে পারছি না। এর মানে কী?", pr: "আই ডোন্ট আন্ডারস্ট্যান্ড দিস ওয়ার্ড। হোয়াট ডাজ ইট মিন?" },
    { tag: "আপনি বলবেন", en: "Where do I sign?", bn: "আমি কোথায় সই করব?", pr: "হোয়ার ডু আই সাইন?" },
    { tag: "আপনি বলবেন", en: "I made a mistake. Can I have a new form, please?", bn: "আমার ভুল হয়েছে। একটা নতুন ফর্ম পেতে পারি?", pr: "আই মেড আ মিসটেক। ক্যান আই হ্যাভ আ নিউ ফর্ম, প্লিজ?" },
    { tag: "আপনি বলবেন", en: "Could you check my form, please?", bn: "আমার ফর্মটা একটু দেখে দেবেন?", pr: "কুড ইউ চেক মাই ফর্ম, প্লিজ?" },
    { tag: "বুঝে নিন", en: "How do you spell your last name?", bn: "আপনার শেষ নামের বানান কী?", pr: "হাউ ডু ইউ স্পেল ইওর লাস্ট নেম?" },
    { tag: "বুঝে নিন", en: "Please print your name in capital letters.", bn: "আপনার নাম বড় হাতের অক্ষরে লিখুন।", pr: "প্লিজ প্রিন্ট ইওর নেম ইন ক্যাপিটাল লেটার্স।" },
    { tag: "বুঝে নিন", en: "Write your permanent address here, and your current address here.", bn: "এখানে স্থায়ী ঠিকানা, আর এখানে বর্তমান ঠিকানা লিখুন।", pr: "রাইট ইওর পারমানেন্ট অ্যাড্রেস হিয়ার, অ্যান্ড ইওর কারেন্ট অ্যাড্রেস হিয়ার।" },
    { tag: "বুঝে নিন", en: "Please sign here and write today's date.", bn: "এখানে সই করুন আর আজকের তারিখ লিখুন।", pr: "প্লিজ সাইন হিয়ার অ্যান্ড রাইট টুডেজ ডেট।" }
  ],

  traps: [
    {
      title: "First name, Last name, Surname, Given name",
      intro: "ফর্মে নামের ঘরের নাম আলাদা, কিন্তু মানে মিলে যায়।",
      items: [
        { en: "First name = Given name", say: "first name", note: "আপনার নিজের নাম, যেমন Rahim" },
        { en: "Last name = Surname = Family name", say: "surname", note: "শেষ নাম বা পদবি, যেমন Uddin" }
      ],
      tip: "অনেকের একটাই নাম, পদবি নেই। তখন নিজে আন্দাজে কিছু বানাবেন না। পাসপোর্টে যেভাবে আছে সেভাবে লিখুন, বা জিজ্ঞেস করুন: \"I have only one name. What should I write?\""
    },
    {
      title: "বানান বলার সময় এই অক্ষরগুলো গুলিয়ে যায়",
      intro: "ফোনে বা ভিড়ের কাউন্টারে B আর P, M আর N প্রায় একই শোনায়। তাই অক্ষরের সাথে একটা সহজ শব্দ জুড়ে দেওয়া হয়।",
      items: [
        { en: "B as in Bravo", say: "B as in Bravo", note: "বি, ব্রাভো-র B" },
        { en: "P as in Papa", say: "P as in Papa", note: "পি, পাপা-র P" },
        { en: "M as in Mike", say: "M as in Mike", note: "এম, মাইক-এর M" },
        { en: "N as in November", say: "N as in November", note: "এন, নভেম্বর-এর N" }
      ],
      tip: "বানান ধীরে বলুন, একটা একটা অক্ষর করে। যেটা গুলিয়ে যেতে পারে সেটার সাথে শব্দ জুড়ুন, যেমন \"M as in Mike\"। অন্যজন বুঝতে না পারলে আবার বলুন।"
    },
    {
      title: "তিন রকম তারিখ: জন্ম, ইস্যু, মেয়াদ",
      intro: "ফর্মে তারিখের ঘর অনেকগুলো। তিনটাই আলাদা।",
      items: [
        { en: "Date of birth = জন্মতারিখ", say: "date of birth", note: "আপনি কবে জন্মেছেন" },
        { en: "Date of issue = পাওয়ার তারিখ", say: "date of issue", note: "পাসপোর্ট কবে দেওয়া হয়েছে" },
        { en: "Date of expiry = মেয়াদ শেষের তারিখ", say: "date of expiry", note: "পাসপোর্ট কবে বাতিল হয়ে যাবে" }
      ],
      tip: "ভুল ঘরে লিখলে ফর্ম নতুন করে করতে হতে পারে। পাসপোর্টের পাতা সামনে রেখে দেখে দেখে মিলিয়ে লিখুন।"
    },
    {
      title: "Permanent address আর Current address",
      intro: "দুটো ঠিকানা একই নয়, আর দুটোই চাওয়া হতে পারে।",
      items: [
        { en: "Permanent address = স্থায়ী ঠিকানা", say: "permanent address", note: "দেশের বাড়ির ঠিকানা, পাসপোর্টে যা থাকে" },
        { en: "Current address = বর্তমান ঠিকানা", say: "current address", note: "এখন যেখানে থাকেন" }
      ],
      tip: "দুটো আলাদা হলে আলাদা ঘরে লিখুন। বর্তমান ঠিকানা আর ফোন নম্বর স্পষ্ট করে দিন, কারণ অফিস যোগাযোগ করলে এখানেই করবে।"
    },
    {
      title: "সই, ছাপা নাম আর ফাঁকা ঘর",
      intro: "ফর্মের শেষ দিকে তিনটা জিনিস আলাদা করে দেখে নিন।",
      items: [
        { en: "Signature = আপনার সই", say: "signature", note: "নিজের হাতে, নিজের সই" },
        { en: "Print name = ছাপা অক্ষরে নাম", say: "print name", note: "বড় হাতের অক্ষরে: RAHIM UDDIN" },
        { en: "N/A = Not applicable", say: "not applicable", note: "এই ঘর আমার জন্য নয়" }
      ],
      tip: "সইয়ের ঘরে নাম ছাপবেন না, আর Print name-এর ঘরে সই করবেন না। যে ঘর আপনার জন্য নয়, ফাঁকা না রেখে N/A লিখুন। ফাঁকা থাকলে অনেক অফিস ফর্ম ফেরত দেয়।"
    }
  ],

  listening: [
    {
      say: "How do you spell your last name?",
      options: [
        { t: "আপনার শেষ নামের বানান কী?", ok: true },
        { t: "আপনার বয়স কত?", ok: false },
        { t: "আপনার ঠিকানা কী?", ok: false }
      ],
      why: "spell মানে বানান করা। last name মানে শেষ নাম বা পদবি।"
    },
    {
      say: "Please print your name in capital letters.",
      options: [
        { t: "এখানে সই করুন", ok: false },
        { t: "নামটা বড় হাতের অক্ষরে লিখুন", ok: true },
        { t: "নামটা মুখে বলুন", ok: false }
      ],
      why: "print মানে ছাপার মতো পরিষ্কার করে লেখা। capital letters মানে বড় হাতের অক্ষর, যেমন RAHIM।"
    },
    {
      say: "Write your permanent address here, and your current address here.",
      options: [
        { t: "এখানে ই-মেইল, আর এখানে ফোন নম্বর লিখুন", ok: false },
        { t: "এখানে বর্তমান ঠিকানা, আর এখানে অফিসের ঠিকানা লিখুন", ok: false },
        { t: "এখানে স্থায়ী ঠিকানা, আর এখানে বর্তমান ঠিকানা লিখুন", ok: true }
      ],
      why: "permanent মানে স্থায়ী, current মানে বর্তমান। দুটো আলাদা ঘরে লিখতে হবে।"
    },
    {
      say: "Is that M as in Mike, or N as in November?",
      options: [
        { t: "অক্ষরটা M নাকি N, তা জানতে চাইছে", ok: true },
        { t: "আপনার নাম মাইক কি না জানতে চাইছে", ok: false },
        { t: "আপনি নভেম্বরে এসেছেন কি না জানতে চাইছে", ok: false }
      ],
      why: "\"M as in Mike\" মানে মাইক শব্দের M। কাউন্টারের লোক নিশ্চিত হতে চাইছে আপনি M বলেছেন নাকি N।"
    },
    {
      say: "Your passport expires on the tenth of May.",
      options: [
        { t: "আপনার পাসপোর্ট ১০ মে দেওয়া হয়েছে", ok: false },
        { t: "আপনার পাসপোর্টের মেয়াদ ১০ মে শেষ হবে", ok: true },
        { t: "আপনি ১০ মে জন্মেছেন", ok: false }
      ],
      why: "expires মানে মেয়াদ শেষ হয়। issue মানে দেওয়া, birth মানে জন্ম। tenth মানে ১০ম (১০ তারিখ)।"
    },
    {
      say: "Please sign here and write today's date.",
      options: [
        { t: "এখানে সই করুন আর আজকের তারিখ লিখুন", ok: true },
        { t: "এখানে নাম লিখুন আর জন্মতারিখ লিখুন", ok: false },
        { t: "এখানে ফোন নম্বর লিখুন আর বাড়ি যান", ok: false }
      ],
      why: "sign মানে সই করা। today's date মানে আজকের তারিখ।"
    }
  ],

  speak: [0, 3, 5, 6, 7],

  dialogue: [
    {
      boss: "How do you spell your name?",
      bn: "আপনার নামের বানান কী?",
      choices: [
        { stars: 3, en: "It is Rahim. R, A, H, I, M. That is M as in Mike.", reply: "R, A, H, I, M. Thank you.", replyBn: "আর, এ, এইচ, আই, এম। ধন্যবাদ।", tip: "দারুণ! ধীরে একটা একটা অক্ষর বলেছেন, আর M-এর সাথে \"as in Mike\" জুড়ে দিয়েছেন। এতে ভুল হওয়ার সুযোগ কমে যায়।" },
        { stars: 2, en: "Rahim.", reply: "Sorry, how do you spell that?", replyBn: "দুঃখিত, বানান কী?", tip: "শুধু নাম বললে কাউন্টারের লোক ভুল শুনতে পারে। বানান করে বলুন: \"R, A, H, I, M.\"" },
        { stars: 1, en: "Rahim or Rohim, both are okay.", reply: "No, it must be exactly like your passport.", replyBn: "না, পাসপোর্টের মতো হুবহু হতে হবে।", tip: "দুটো বানান একসাথে ঠিক হয় না। পাসপোর্টে যেভাবে লেখা, ঠিক সেভাবেই বানান বলুন। না মিললে টিকিট বা ভিসায় সমস্যা হতে পারে।" }
      ]
    },
    {
      boss: "Please write your surname here.",
      bn: "এখানে আপনার শেষ নাম (surname) লিখুন।",
      choices: [
        { stars: 3, en: "I have only one name. What should I write, please?", reply: "Please check your passport and write the same.", replyBn: "পাসপোর্ট দেখুন আর ঠিক তেমনই লিখুন।", tip: "চমৎকার! আপনার আসল অবস্থাটা (একটাই নাম) জানিয়ে জিজ্ঞেস করেছেন। এতে নিজে আন্দাজে লিখে ভুল করার ঝুঁকি থাকে না।" },
        { stars: 2, en: "What is surname?", reply: "Your family name. The last name.", replyBn: "পারিবারিক নাম। শেষ নাম।", tip: "মানে জানার চেষ্টা ভালো। কিন্তু সমস্যাটা (আপনার একটাই নাম) বলেননি। আসল সমস্যা বললে সরাসরি সমাধান পাবেন।" },
        { stars: 1, en: "Okay.", reply: "Please fill in all the boxes.", replyBn: "সব ঘর পূরণ করুন।", tip: "না বুঝে \"Okay\" বললে ঘর ফাঁকা থাকতে পারে, আর অনেক অফিস ফাঁকা ফর্ম ফেরত দেয়। না বুঝলে জিজ্ঞেস করুন।" }
      ]
    },
    {
      boss: "There is a mistake here. This box is for date of issue, not date of birth.",
      bn: "এখানে ভুল আছে। এই ঘর date of issue-র, জন্মতারিখের নয়।",
      choices: [
        { stars: 3, en: "Sorry, my mistake. Can I have a new form, please?", reply: "Yes, here you are. Please use capital letters.", replyBn: "হ্যাঁ, এই নিন। বড় হাতের অক্ষরে লিখুন।", tip: "ঠিক! ভুল স্বীকার করে নতুন ফর্ম চেয়েছেন। কাটাকাটি করা ফর্মের চেয়ে পরিষ্কার নতুন ফর্ম সবসময় ভালো।" },
        { stars: 2, en: "Sorry. I will cross it out.", reply: "No, please don't cross it out. Take a new form.", replyBn: "না, কাটবেন না। নতুন ফর্ম নিন।", tip: "অনেক অফিস কাটাকাটি করা ফর্ম নেয় না। ভুল হলে ভদ্রভাবে নতুন ফর্ম চেয়ে নিন।" },
        { stars: 1, en: "It is not my mistake.", reply: "Please check again.", replyBn: "আবার দেখুন।", tip: "তর্ক না করে ভুলটা মেনে নিলে কাজ দ্রুত হয়। বলুন: \"Sorry, my mistake. Can I have a new form?\"" }
      ]
    },
    {
      boss: "Please read the declaration and sign here.",
      bn: "ঘোষণাটা (declaration) পড়ুন আর এখানে সই করুন।",
      choices: [
        { stars: 3, en: "Sorry, I don't understand \"declaration\". What does it mean?", reply: "It means a statement. You say all your answers are true.", replyBn: "মানে একটা বিবৃতি। আপনি বলছেন আপনার সব উত্তর সত্য।", tip: "দারুণ! সই করার আগে জেনে নিয়েছেন। declaration মানে ঘোষণা, অর্থাৎ আপনি লিখিতভাবে বলছেন সব তথ্য সত্য। সই মানে দায়িত্ব নেওয়া।" },
        { stars: 2, en: "Okay. Where do I sign?", reply: "Here, please.", replyBn: "এখানে।", tip: "না বুঝে সই করলে আপনি কী মেনে নিচ্ছেন তা জানেন না। যেকোনো কাগজে সই করার আগে মানে জিজ্ঞেস করুন।" },
        { stars: 1, en: "Can you sign for me?", reply: "No. You must sign yourself.", replyBn: "না। আপনাকে নিজেই সই করতে হবে।", tip: "সই সবসময় নিজের হাতে করতে হয়। অন্য কাউকে দিয়ে সই করানো যায় না। না বুঝলে মানে জিজ্ঞেস করুন।" }
      ]
    }
  ],

  quiz: [
    { q: "\"Surname\" মানে কি পদবি বা শেষ নাম?", a: true, why: "ঠিক। surname = last name = family name।" },
    { q: "ফর্মের যে ঘর আপনার জন্য নয়, সেটা ফাঁকা রাখাই ভালো?", a: false, why: "না। ফাঁকা না রেখে N/A (Not applicable) লিখুন। ফাঁকা থাকলে অনেক অফিস ফর্ম ফেরত দেয়।" },
    { q: "\"Date of expiry\" মানে কি মেয়াদ শেষের তারিখ?", a: true, why: "ঠিক। পাসপোর্ট কবে বাতিল হবে সেই তারিখ। জন্মতারিখ হলো date of birth।" },
    { q: "\"Permanent address\" মানে কি এখন যেখানে থাকেন সেই ঠিকানা?", a: false, why: "না। permanent মানে স্থায়ী, অর্থাৎ দেশের বাড়ির ঠিকানা। এখনকার ঠিকানা হলো current address।" },
    { q: "ফর্মে নামের বানান কি পাসপোর্টের সাথে হুবহু মিলতে হবে?", a: true, why: "ঠিক। এক অক্ষর ভুল হলেও টিকিট, ভিসা বা ফর্মে সমস্যা হতে পারে।" },
    { q: "মানে না বুঝে ফর্মে সই করা কি নিরাপদ?", a: false, why: "না। সই মানে দায়িত্ব নেওয়া। না বুঝলে বলুন: \"What does it mean?\"" },
    { q: "\"M as in Mike\" বলার উদ্দেশ্য কি M অক্ষরটা স্পষ্ট করে বোঝানো?", a: true, why: "ঠিক। M আর N প্রায় একই শোনায়, তাই Mike শব্দ জুড়ে M-কে আলাদা করা হয়।" }
  ],

  card: {
    title: "নাম ও ফর্ম",
    lines: [
      "First name = নিজের নাম, Surname = শেষ নাম বা পদবি",
      "বানান বলুন ধীরে: \"M as in Mike\"",
      "নাম লিখুন পাসপোর্টের মতো হুবহু",
      "Issue = পাওয়ার তারিখ, Expiry = মেয়াদ শেষ",
      "না বুঝে সই নয়: \"What does it mean?\"; ঘর খাটে না হলে N/A"
    ]
  }
};
