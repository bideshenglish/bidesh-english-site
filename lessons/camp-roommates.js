window.LESSON = {
  id: "camp-roommates",
  type: "A",
  who: "ক্যাম্পের সঙ্গী",
  title: "Camp Life & Roommates",
  titleBn: "ক্যাম্পে থাকা ও রুমমেটদের সাথে চলা",

  scene: "বিদেশে অনেকেই কোম্পানির ক্যাম্পে অন্যদের সাথে এক ঘরে থাকেন। কার কোন বিছানা, রান্নাঘর কখন, রাতে শব্দ, পানি না থাকা, জিনিস ধার নেওয়া, এসব নিয়েই বেশিরভাগ ঝামেলা হয়। ভদ্রভাবে আর পরিষ্কার করে বলতে পারলে ঝগড়া এড়ানো যায়, আর ক্যাম্প বসও আপনার কথা গুরুত্ব দেন। আজ এই কথাগুলো ইংরেজিতে শিখুন।",

  phrases: [
    { tag: "আপনি বলবেন", en: "Which bed is mine?", bn: "কোন বিছানাটা আমার?", pr: "হুইচ বেড ইজ মাইন?" },
    { tag: "আপনি বলবেন", en: "Can I use the kitchen now?", bn: "আমি কি এখন রান্নাঘর ব্যবহার করতে পারি?", pr: "ক্যান আই ইউজ দ্য কিচেন নাউ?" },
    { tag: "আপনি বলবেন", en: "Sorry, I will clean it now.", bn: "দুঃখিত, আমি এখনই পরিষ্কার করছি।", pr: "সরি, আই উইল ক্লিন ইট নাউ।" },
    { tag: "আপনি বলবেন", en: "Can I borrow this? I will give it back.", bn: "আমি কি এটা ধার নিতে পারি? আমি ফেরত দেব।", pr: "ক্যান আই বরো দিস? আই উইল গিভ ইট ব্যাক।" },
    { tag: "আপনি বলবেন", en: "Please keep the noise down. I have an early shift.", bn: "দয়া করে শব্দ কম করুন। আমার সকালে কাজ আছে।", pr: "প্লিজ কিপ দ্য নয়েজ ডাউন। আই হ্যাভ অ্যান আর্লি শিফট।" },
    { tag: "আপনি বলবেন", en: "Please don't take my things without asking.", bn: "দয়া করে জিজ্ঞেস না করে আমার জিনিস নেবেন না।", pr: "প্লিজ ডোন্ট টেক মাই থিংস উইদাউট আস্কিং।" },
    { tag: "আপনি বলবেন", en: "There is no water in the bathroom.", bn: "বাথরুমে পানি নেই।", pr: "দেয়ার ইজ নো ওয়াটার ইন দ্য বাথরুম।" },
    { tag: "আপনি বলবেন", en: "Can you please fix it today?", bn: "আপনি কি দয়া করে আজই এটা ঠিক করে দিতে পারেন?", pr: "ক্যান ইউ প্লিজ ফিক্স ইট টুডে?" },
    { tag: "ক্যাম্প বস বা সঙ্গী বলবেন, বুঝে নিন", en: "No visitors are allowed in the camp.", bn: "ক্যাম্পে বাইরের লোক আনা নিষেধ।", pr: "নো ভিজিটরস আর অ্যালাউড ইন দ্য ক্যাম্প।" },
    { tag: "ক্যাম্প বস বা সঙ্গী বলবেন, বুঝে নিন", en: "Everyone cleans the room in turn.", bn: "সবাই পালা করে ঘর পরিষ্কার করে।", pr: "এভরিওয়ান ক্লিনস দ্য রুম ইন টার্ন।" },
    { tag: "ক্যাম্প বস বা সঙ্গী বলবেন, বুঝে নিন", en: "Lights off at ten o'clock.", bn: "রাত দশটায় বাতি বন্ধ।", pr: "লাইটস অফ অ্যাট টেন ও'ক্লক।" },
    { tag: "ক্যাম্প বস বা সঙ্গী বলবেন, বুঝে নিন", en: "Lock your box. Don't keep money in the open.", bn: "তোমার বাক্স তালা দাও। টাকা খোলা জায়গায় রেখো না।", pr: "লক ইওর বক্স। ডোন্ট কিপ মানি ইন দ্য ওপেন।" }
  ],

  listening: [
    {
      say: "No visitors are allowed in the camp.",
      options: [
        { t: "ক্যাম্পে বাইরের লোক আনা নিষেধ", ok: true },
        { t: "ক্যাম্পে সবাই আসতে পারে", ok: false },
        { t: "আজ ক্যাম্প বন্ধ", ok: false }
      ],
      why: "visitors মানে অতিথি বা বাইরের লোক। not allowed মানে অনুমতি নেই। আগে অনুমতি না নিলে কাউকে আনবেন না।"
    },
    {
      say: "Lights off at ten o'clock.",
      options: [
        { t: "রাত দশটায় ঘুম থেকে ওঠো", ok: false },
        { t: "রাত দশটায় বাতি বন্ধ", ok: true },
        { t: "দশটায় রান্নাঘর খোলা", ok: false }
      ],
      why: "lights off মানে বাতি বন্ধ। ten o'clock মানে দশটা। রাতে বাতি জ্বালিয়ে রাখলে অন্যের ঘুমে সমস্যা হয়।"
    },
    {
      say: "Lock your box. Don't keep money in the open.",
      options: [
        { t: "বাক্স খুলে রাখো। টাকা বাইরে রাখো", ok: false },
        { t: "তোমার বাক্স বিক্রি করে দাও", ok: false },
        { t: "তোমার বাক্স তালা দাও। টাকা খোলা জায়গায় রেখো না", ok: true }
      ],
      why: "lock মানে তালা দেওয়া। in the open মানে খোলা জায়গায়। ক্যাম্পে টাকা আর কাগজপত্র তালা দিয়ে রাখা নিরাপদ।"
    },
    {
      say: "Everyone cleans the room in turn.",
      options: [
        { t: "সবাই একসাথে বাইরে যায়", ok: false },
        { t: "শুধু নতুন লোক ঘর পরিষ্কার করে", ok: false },
        { t: "সবাই পালা করে ঘর পরিষ্কার করে", ok: true }
      ],
      why: "in turn মানে পালা করে। পালা এলে নিজের কাজটা সময়মতো করুন, নইলে রুমমেটরা বিরক্ত হয়।"
    }
  ],

  speak: [0, 4, 5, 6, 7],

  dialogue: [
    {
      boss: "Welcome to the camp. This is your bed. Do you have any question?",
      bn: "ক্যাম্পে স্বাগতম। এটা তোমার বিছানা। তোমার কোনো প্রশ্ন আছে?",
      choices: [
        { stars: 3, en: "Thank you, sir. Can I use the kitchen now? And when is lights off?", reply: "Yes, you can. Kitchen is open. Lights off at ten.", replyBn: "হ্যাঁ, পারো। রান্নাঘর খোলা। রাত দশটায় বাতি বন্ধ।", tip: "দারুণ! প্রথম দিনেই রান্নাঘর আর বাতি বন্ধের সময় জেনে নিলেন। এতে পরে ঝামেলা হয় না।" },
        { stars: 2, en: "No.", reply: "Okay. Ask me if you need anything.", replyBn: "ঠিক আছে। কিছু লাগলে আমাকে জিজ্ঞেস করো।", tip: "প্রথম দিনে নিয়ম না জানলে পরে ভুল হয়। জিজ্ঞেস করুন: \"When is lights off, sir?\"" },
        { stars: 1, en: "This bed is bad. Give me another.", reply: "This is your bed. Please be polite.", replyBn: "এটাই তোমার বিছানা। ভদ্র হও।", tip: "প্রথম দিনেই অভিযোগ ভালো না। সমস্যা থাকলে ভদ্রভাবে বলুন: \"Sir, is another bed possible, please?\"" }
      ]
    },
    {
      boss: "Hey, why are you using my pot? I did not give it to you.",
      bn: "আরে, তুমি আমার হাঁড়ি কেন নিয়েছ? আমি তো দিইনি।",
      choices: [
        { stars: 3, en: "Sorry, brother. I will clean it now. Next time, I will ask first.", reply: "Okay. No problem. You can use it if you ask.", replyBn: "ঠিক আছে। সমস্যা নেই। জিজ্ঞেস করলে নিতে পারো।", tip: "চমৎকার! দুঃখ প্রকাশ, সমাধান আর আগামীতে কী করবেন, তিনটিই বলেছেন। এতে ঝগড়া মিটে যায়।" },
        { stars: 2, en: "Sorry.", reply: "Please ask me first next time.", replyBn: "পরের বার আগে জিজ্ঞেস কোরো।", tip: "শুধু \"Sorry\" কম। কী করবেন তাও বলুন: \"I will ask first next time.\"" },
        { stars: 1, en: "It is just a pot. Why are you angry?", reply: "It is my pot. You must ask me!", replyBn: "এটা আমার হাঁড়ি। তোমাকে জিজ্ঞেস করতে হবে!", tip: "অন্যের জিনিসকে ছোট করে দেখলে ঝগড়া বাড়ে। আগে দুঃখ প্রকাশ করুন: \"Sorry, I will ask first.\"" }
      ]
    },
    {
      boss: "Your phone is very loud. I cannot sleep. I have an early shift.",
      bn: "তোমার ফোনের শব্দ অনেক জোরে। আমি ঘুমাতে পারছি না। আমার সকালে কাজ আছে।",
      choices: [
        { stars: 3, en: "I am sorry, brother. I will keep the noise down. I will use headphones.", reply: "Thank you. I appreciate it.", replyBn: "ধন্যবাদ। আমি কৃতজ্ঞ।", tip: "ঠিক! নিজের ভুল মেনে সমাধান দিয়েছেন। রুমমেটের সাথে সম্পর্ক ভালো থাকবে।" },
        { stars: 2, en: "Okay, okay.", reply: "Please make the sound low.", replyBn: "শব্দটা কমাও।", tip: "\"Okay, okay\" কথায় আন্তরিকতা কম। বলুন: \"Sorry, I will keep the noise down.\"" },
        { stars: 1, en: "It is my phone. I will do what I want.", reply: "Then I will tell the camp boss.", replyBn: "তাহলে আমি ক্যাম্প বসকে বলব।", tip: "এমন উত্তরে ঝগড়া হয় আর বসের কাছে অভিযোগ যায়। শান্তভাবে সমাধান দিন।" }
      ]
    },
    {
      boss: "I am the camp boss. Is there any problem? Tell me.",
      bn: "আমি ক্যাম্প বস। কোনো সমস্যা আছে? আমাকে বলো।",
      choices: [
        { stars: 3, en: "Yes, sir. There is no water in the bathroom since morning. Can you please fix it today?", reply: "Okay. I will call the plumber today. Thank you for telling me.", replyBn: "ঠিক আছে। আমি আজই প্লাম্বার ডাকব। আমাকে জানানোর জন্য ধন্যবাদ।", tip: "দারুণ! কী সমস্যা, কখন থেকে, আর কী চান, সব পরিষ্কার বলেছেন। এতে দ্রুত সমাধান মেলে।" },
        { stars: 2, en: "Water problem.", reply: "Where? Which room? Please tell me clearly.", replyBn: "কোথায়? কোন ঘরে? পরিষ্কার করে বলো।", tip: "দুই শব্দে বোঝা কঠিন। পুরো বাক্যে বলুন: \"There is no water in the bathroom.\"" },
        { stars: 1, en: "This camp is very dirty. Everything is bad.", reply: "Please tell me the exact problem.", replyBn: "নির্দিষ্ট সমস্যাটা বলো।", tip: "সবকিছুর বদনাম না করে নির্দিষ্ট সমস্যাটা বলুন। তাহলে বস সেটা ঠিক করতে পারেন।" }
      ]
    }
  ],

  quiz: [
    { q: "রুমমেটের জিনিস জিজ্ঞেস না করে নেওয়া কি ঠিক?", a: false, why: "না। আগে জিজ্ঞেস করুন: \"Can I borrow this? I will give it back.\"" },
    { q: "ক্যাম্পে টাকা আর কাগজপত্র তালা দিয়ে রাখা কি ভালো?", a: true, why: "ঠিক। \"Lock your box.\" মানে বাক্স তালা দাও। চুরির ঝুঁকি কমে।" },
    { q: "\"Lights off at ten o'clock\" মানে কি রাত দশটায় বাতি বন্ধ?", a: true, why: "ঠিক। lights off মানে বাতি বন্ধ। এটা মেনে চললে সবাই শান্তিতে ঘুমাতে পারে।" },
    { q: "অনুমতি না নিয়ে বাইরের লোককে ক্যাম্পে আনা কি ঠিক?", a: false, why: "না। \"No visitors are allowed.\" আগে ক্যাম্প বসকে জিজ্ঞেস করুন। নইলে আপনি সমস্যায় পড়তে পারেন।" },
    { q: "ক্যাম্প বসকে সমস্যা জানাতে কি পুরো বাক্যে বলা ভালো?", a: true, why: "ঠিক। \"There is no water in the bathroom. Can you please fix it today?\" এভাবে বললে বস সহজে বোঝেন।" }
  ]
};
