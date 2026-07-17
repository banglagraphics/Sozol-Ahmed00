export interface TimelineItem {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: {
    title: string;
    description: string;
  }[];
}

export interface SkillItem {
  title: string;
  description: string;
  emoji: string;
  score: number; // 0-100 for elegant animated progress meters
  details: string[]; // Extra visual details for competitive depth
}

export interface LanguageItem {
  name: string;
  percentage: number;
}

export interface DishItem {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string;
  technique: string;
  category: string;
}

export interface ResumeTranslation {
  languageName: string;
  name: string;
  title: string;
  summary: string;
  objective: string;
  contactLabels: {
    address: string;
    phone: string;
    email: string;
    linkedin: string;
    location: string;
  };
  journey: {
    sectionTitle: string;
    role: string;
    company: string;
    period: string;
    responsibilities: {
      title: string;
      desc: string;
    }[];
  };
  skillsSection: {
    sectionTitle: string;
    skills: {
      title: string;
      desc: string;
    }[];
  };
  educationSection: {
    sectionTitle: string;
    degree: string;
    school: string;
    period: string;
    equivalence: string;
  };
  achievementsSection: {
    sectionTitle: string;
    items: string[];
  };
  additionalLanguagesLabel: string;
  interestsSection: {
    sectionTitle: string;
    items: string[];
  };
  referencesLabel: string;
  referencesText: string;
}

export const portfolioData = {
  hero: {
    headline: "Crafting Culinary Excellence. Elevating Plate Standards.",
    subHeadline: "Sozol Ahmed — Professional Commis Chef at Grand Hyatt Doha Hotel & Villas. Bringing precision, speed, and 5-star international standards to the modern kitchen.",
    ctaSkills: "View Signature Skills",
    ctaResume: "Download Resume",
    bgImage: "/src/assets/images/gourmet_plating_hero_1784207965219.jpg"
  },
  about: {
    title: "About the Chef",
    portrait: "/src/assets/images/sozol_ahmed_new_pic.png",
    philosophy: "As a dedicated Commis Chef at Grand Hyatt Doha, I specialize in maintaining absolute precision in fast-paced, high-pressure environments. From scaling bulk operations with strict quality control to mastering complex butchery and knife skills, my culinary philosophy revolves around discipline, safety, and visual perfection on every single plate."
  },
  timeline: {
    title: "Professional Journey",
    role: "Commis Chef",
    company: "Grand Hyatt Doha Hotel & Villas",
    location: "Doha, Qatar",
    period: "November 2021 — Present",
    responsibilities: [
      {
        title: "Quality Control",
        description: "Enforced strict quality standards to significantly reduce customer complaints."
      },
      {
        title: "Operational Support",
        description: "Carried out tasks assigned by Chef De Partie with speed and precision in a high-volume environment."
      },
      {
        title: "Supply Management",
        description: "Forecasted ingredient demand and ordered optimum levels to prevent spoilage and reduce downtime."
      },
      {
        title: "Kitchen Supervision",
        description: "Monitored and supported kitchen support staff to run smooth daily operations."
      }
    ] as TimelineItem['responsibilities']
  },
  skills: [
    {
      title: "Knife Handling & Veg Carving",
      description: "Flawless precision cuts and aesthetic vegetable carving.",
      emoji: "🔪",
      score: 95,
      details: ["Brumoise, Julienne, Chiffonade", "Advanced vegetable and fruit carving", "Surgical knife safety & daily honing"]
    },
    {
      title: "Butchery & Prep Techniques",
      description: "Expert level butchery and cold food preparation.",
      emoji: "🥩",
      score: 92,
      details: ["Poultry, beef & seafood primals", "Portion weight precision to the gram", "Sous-vide pre-searing vacuum prep"]
    },
    {
      title: "Portion & Waste Control",
      description: "Minimizing waste through strategic inventory management.",
      emoji: "📊",
      score: 90,
      details: ["Yield analysis & scrap reduction", "FIFO stock management system", "Ingredient shelf-life optimization"]
    },
    {
      title: "Health & Safety Compliance",
      description: "Strict adherence to food hygiene standards and kitchen safety.",
      emoji: "🛡️",
      score: 98,
      details: ["HACCP certified operational flow", "Critical temperature tracking", "Cross-contamination prevention protocols"]
    },
    {
      title: "High Energy Level",
      description: "Exceptional prioritisation skills during heavy service rushes.",
      emoji: "⚡",
      score: 96,
      details: ["Multi-station simultaneous support", "Stress threshold under 200+ covers", "Rapid order execution & plating speed"]
    }
  ] as SkillItem[],
  highlights: {
    education: {
      title: "Education",
      degree: "Secondary School Certificate",
      equivalence: "A-Levels Equivalent",
      school: "Kumulli Nmdar High School",
      location: "Tangail, Bangladesh"
    },
    languages: [
      { name: "Bengali (Native)", percentage: 100 },
      { name: "English (Advanced / Professional)", percentage: 85 },
      { name: "Hindi (Advanced / Conversational)", percentage: 80 }
    ] as LanguageItem[],
    interests: ["Traveling ✈️", "Music 🎵", "Gaming 🎮"]
  },
  contact: {
    address: "Grand Hyatt Doha Hotel & Villas, Doha, Qatar", // Hidden precise street details for security and elegance
    phone: "+974 50634607",
    email: "sozolahmed91@gmail.com",
    linkedin: "https://linkedin.com/in/sozol-ahmed-115171215",
    linkedinLabel: "linkedin.com/in/sozol-ahmed-115171215"
  },
  designer: {
    name: "Sozol Ahmed",
    url: "https://linkedin.com/in/sozol-ahmed-115171215"
  }
};

export const signatureCreations: DishItem[] = [
  {
    id: "dish-1",
    title: "Smoked Wagyu Strip Loin",
    category: "Signature Main",
    description: "Perfectly cooked premium Wagyu seared under heavy cast-iron, infused with cherrywood smoke under glass, served with coarse sea salt crystals and a luxurious black truffle oil glaze.",
    image: "/src/assets/images/wagyu_steak_1784208574467.jpg",
    ingredients: "Japanese Wagyu Beef, Fresh Rosemary Sprig, Coarse Fleur de Sel, Black Truffle Oil, Confit Garlic Bulb.",
    technique: "Precision sous-vide bath cooking at exactly 54°C, quick high-heat flash-sear, and captured table-side cherrywood dome smoking."
  },
  {
    id: "dish-2",
    title: "Pan-Seared Saffron Sea Bass",
    category: "Entrée",
    description: "Pan-seared Mediterranean Sea Bass fillet with a crisp skin, resting over micro-beaded saffron and lemon emulsion foam, paired with charred baby asparagus spears and edible pansies.",
    image: "/src/assets/images/gourmet_seabass_1784208562430.jpg",
    ingredients: "Wild Mediterranean Sea Bass, Saffron Threads, Squeezed Lemon Juice, Fresh Baby Asparagus, Edible Pansies.",
    technique: "Sautéed skin-side down under press weight for flawless crispness, accompanied by molecular nitrogen-whipped warm saffron foam."
  },
  {
    id: "dish-3",
    title: "Golden Poached Pear & Berry Symphony",
    category: "Dessert",
    description: "A slow-poached spiced Anjou pear decorated with gold leaf flakes, positioned over a tart organic raspberry coulis reduction, garnished with wild berries and fresh microgreens.",
    image: "/src/assets/images/gourmet_dessert_1784208550668.jpg",
    ingredients: "Anjou Pear, 24k Edible Gold Leaf, Fresh Wild Raspberries, Whole Cardamom Seeds, Organic Mint Leaves.",
    technique: "Infusion poaching in cardamom-spiced syrup, shell-lacquering with premium gold foil sheets, and low-temperature coulis reduction."
  },
  {
    id: "dish-4",
    title: "Artisanal Lobster Noodle Consommé",
    category: "Soup / Appetizer",
    description: "Delicately poached Atlantic lobster tail nested in hand-pulled organic wheat noodles, bathed in a double-clarified golden seafood consommé with spring onion curls.",
    image: "/src/assets/images/lobster_noodles_1784208586279.jpg",
    ingredients: "Atlantic Lobster Tail, Hand-Pulled Organic Wheat Flour, Double-Clarified Fish Stock, Spring Onion Curls, Gold Flakes.",
    technique: "Traditional double clarification of shellfish stock utilizing egg white raft, low-temperature lobster poaching, and artisan hand-pulling dough stretching."
  }
];

export const cvTranslations: Record<string, ResumeTranslation> = {
  en: {
    languageName: "English",
    name: "Sozol Ahmed",
    title: "Professional Commis Chef",
    summary: "Dedicated and disciplined Commis Chef with over 4 years of hands-on culinary experience at 5-star international hospitality landmarks. Proven track record of supporting fast-paced fine dining kitchen lines, enforcing immaculate food hygiene standards, and delivering flawless plate precision under pressure.",
    objective: "To leverage my speed, knife precision, and 5-star international hotel experiences to support executive culinary brigades in crafting award-winning gastronomic experiences, while elevating daily food safety and operational standards.",
    contactLabels: {
      address: "Address",
      phone: "Phone",
      email: "Email",
      linkedin: "LinkedIn",
      location: "Doha, Qatar"
    },
    journey: {
      sectionTitle: "Professional Experience",
      role: "Commis Chef",
      company: "Grand Hyatt Doha Hotel & Villas",
      period: "November 2021 — Present",
      responsibilities: [
        {
          title: "Quality Control & Taste Standards",
          desc: "Enforced strict temperature logs, ingredient validation, and plating precision under Chef De Partie's guidelines to reduce plate rejections and significantly lower customer complaints."
        },
        {
          title: "High-Volume Operational Support",
          desc: "Prepared culinary mis-en-place with speed and consistency, managing active sauté, grill, and cold food stations in a highly demanding 200+ cover fine dining atmosphere."
        },
        {
          title: "Yield Optimization & Supply Control",
          desc: "Forecasted ingredient requirements weekly, oversaw stock rotation (FIFO), and optimized portion yields to prevent spoilage, saving overall food cost and minimizing kitchen downtime."
        },
        {
          title: "Kitchen Supervision & Sanitation",
          desc: "Supervised and guided junior kitchen stewards on state hygiene, sanitizing all workspaces, and maintaining strict compliance with local municipality food health regulations."
        }
      ]
    },
    skillsSection: {
      sectionTitle: "Culinary Toolkit & Expertise",
      skills: [
        { title: "Knife Handling & Veg Carving", desc: "Expert precision in classic French cuts (brunoise, julienne, chiffonade) and high-level aesthetic vegetable carvings." },
        { title: "Butchery & Meat Fabrication", desc: "Clean, consistent portioning and pre-prep of poultry, premium beef primals, and fresh local catches." },
        { title: "Portion & Food Waste Control", desc: "Reducing operational waste through meticulous yield testing and smart inventory tracking." },
        { title: "HACCP & Health Compliance", desc: "Uncompromising compliance with international health codes, temperature control logs, and sanitation standards." },
        { title: "High-Volume Performance & Stamina", desc: "Thriving under high-stakes kitchen environments, managing multiple hot stations during peak hotel dinner rushes." }
      ]
    },
    educationSection: {
      sectionTitle: "Education & Academy",
      degree: "Secondary School Certificate",
      school: "Kumulli Nmdar High School",
      period: "Completed with Honors",
      equivalence: "A-Levels / High School Equivalent"
    },
    achievementsSection: {
      sectionTitle: "Key Achievements & Credentials",
      items: [
        "Certified HACCP Food Safety Level 2 Practitioner.",
        "Aided in reducing guest complaints by 15% through meticulous plating temperature control.",
        "Spearheaded waste reduction audit, decreasing prep scrap weight by 8%.",
        "Trained 5+ new kitchen apprentices on hotel sanitation protocols and knife security."
      ]
    },
    additionalLanguagesLabel: "Linguistic Fluency",
    interestsSection: {
      sectionTitle: "Personal Interests",
      items: ["Culinary Travel ✈️", "Classical Music 🎵", "Strategy Gaming 🎮"]
    },
    referencesLabel: "Professional References",
    referencesText: "Excellent references from Executive Chef, Sous Chefs, and Chef de Parties at Grand Hyatt Doha available immediately upon request."
  },
  bn: {
    languageName: "বাংলা (Bengali)",
    name: "সজল আহমেদ",
    title: "পেশাদার কমিস শেফ",
    summary: "৫-তারকা আন্তর্জাতিক মানের হোটেল এবং রিসোর্টে ৪ বছরেরও বেশি অভিজ্ঞতাসম্পন্ন একজন অত্যন্ত নিবেদিত ও শৃঙ্খলাবদ্ধ কিচেন পেশাদার। কিচেনের প্রতিটি কাজে দ্রুততা, ছুরির নিখুঁত ব্যবহার এবং সর্বোচ্চ খাদ্য নিরাপত্তা ও স্বাস্থ্যবিধি বজায় রাখতে আমি প্রতিশ্রুতিবদ্ধ।",
    objective: "৫-তারকা হোটেলের দীর্ঘ অভিজ্ঞতা ও রন্ধনশিল্পের দক্ষতা কাজে লাগিয়ে চমৎকার ও নান্দনিক খাবার তৈরি করা এবং কিচেনের দৈনিক কার্যক্রম আরও উন্নত করা আমার মূল লক্ষ্য।",
    contactLabels: {
      address: "ঠিকানা",
      phone: "ফোন",
      email: "ইমেইল",
      linkedin: "লিঙ্কডইন",
      location: "দোহা, কাতার"
    },
    journey: {
      sectionTitle: "পেশাদার অভিজ্ঞতা",
      role: "কমিস শেফ",
      company: "গ্র্যান্ড হায়াত দোহা হোটেল অ্যান্ড ভিলাস",
      period: "নভেম্বর ২০২১ — বর্তমান",
      responsibilities: [
        {
          title: "মান নিয়ন্ত্রণ এবং স্বাদ নিশ্চিতকরণ",
          desc: "প্রতিটি প্লেটের তাপমাত্রা এবং গুণমান কঠোরভাবে তদারকি করেছি, যা গ্রাহকদের সন্তুষ্টি বাড়াতে এবং কিচেনের সুনাম অক্ষুণ্ণ রাখতে সাহায্য করেছে।"
        },
        {
          title: "উচ্চ-ভলিউম কিচেন সাপোর্ট",
          desc: "একসাথে ২০০-র বেশি অতিথিদের খাবারের অর্ডার পরিচালনার জন্য অত্যন্ত দ্রুততার সাথে মিস-এন-প্লেস প্রস্তুত ও একটিভ কিচেন লাইন পরিচালনা করেছি।"
        },
        {
          title: "উপাদান ব্যবস্থাপনা এবং বাজেট সাশ্রয়",
          desc: "সাপ্তাহিক উপাদানের সঠিক চাহিদা পূর্বাভাস করে মজুদ অপচয় হ্রাস করেছি এবং 'FIFO' পদ্ধতি কার্যকর করে সামগ্রিক খাদ্য খরচ নিয়ন্ত্রণে ভূমিকা রেখেছি।"
        },
        {
          title: "কিচেন তদারকি এবং পরিচ্ছন্নতা",
          desc: "কিচেনের সমস্ত কর্মক্ষেত্রের পরিচ্ছন্নতা নিশ্চিত করতে জুনিয়র কর্মীদের পরিচালনা করেছি এবং স্থানীয় পৌরসভার নিয়মাবলী নিখুঁতভাবে মেনে চলেছি।"
        }
      ]
    },
    skillsSection: {
      sectionTitle: "রন্ধনশিল্পের বিশেষ দক্ষতা",
      skills: [
        { title: "ছুরি চালনা ও সবজি খোদাই", desc: "ফরাসি ঐতিহ্যবাহী ক্লাসিক কাট (ব্রুনোয়াইজ, জুলিয়েন) এবং নান্দনিক সবজি খোদাইকরণে বিশেষ দক্ষতা।" },
        { title: "কসাইখানা ও মাংসের কারুকাজ", desc: "মুরগি, প্রিমিয়াম গরুর মাংস এবং সামুদ্রিক মাছের নিখুঁত ও ওজন-ভিত্তিক সঠিক অংশ প্রস্তুত করা।" },
        { title: "খাদ্য অপচয় এবং স্টক নিয়ন্ত্রণ", desc: "যথাযথ ফলন পরীক্ষা এবং দক্ষ তালিকা ট্র্যাকিংয়ের মাধ্যমে কিচেনের অপচয় সর্বনিম্ন করা।" },
        { title: "HACCP এবং স্বাস্থ্যবিধি মেনে চলা", desc: "আন্তর্জাতিক খাদ্য নিরাপত্তা বিধি, ক্রিটিক্যাল তাপমাত্রা ট্র্যাকিং এবং স্যানিটেশন ব্যবস্থার পুঙ্খানুপুঙ্খ বাস্তবায়ন।" },
        { title: "উচ্চ কর্মক্ষমতা ও দীর্ঘস্থায়ী ধৈর্য", desc: "কিচেনের চরম ব্যস্ত সময়েও শান্ত থেকে নিখুঁত প্লেটিং এবং দ্রুত গতিতে রন্ধন কার্যক্রম সফলভাবে পরিচালনা করা।" }
      ]
    },
    educationSection: {
      sectionTitle: "শিক্ষাগত যোগ্যতা",
      degree: "মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)",
      school: "কুমুল্লি নামদার উচ্চ বিদ্যালয়",
      period: "কৃতিত্বের সাথে সমাপ্ত",
      equivalence: "এ-লেভেল / উচ্চ মাধ্যমিক সমমানের"
    },
    achievementsSection: {
      sectionTitle: "প্রধান সাফল্য ও লাইসেন্স",
      items: [
        "সার্টিফাইড HACCP ফুড সেফটি লেভেল ২ লাইসেন্সধারী।",
        "খাবারের নিখুঁত মান এবং পরিবেশন নিয়ন্ত্রণ করে গ্রাহক অভিযোগ ১৫% হ্রাস করতে ভূমিকা পালন করেছি।",
        "সঠিক উপাদান ব্যবহারের মাধ্যমে অপচয় নিরসন করে কিচেন স্ক্র্যাপ ৮% কমিয়েছি।",
        "হোটেল স্যানিটেশন এবং নাইফ নিরাপত্তা বিষয়ে ৫ জনেরও বেশি নতুন কিচেন শিক্ষানবিসদের প্রশিক্ষণ দিয়েছি।"
      ]
    },
    additionalLanguagesLabel: "ভাষাগত দক্ষতা",
    interestsSection: {
      sectionTitle: "ব্যক্তিগত আগ্রহ",
      items: ["রন্ধনভিত্তিক ভ্রমণ ✈️", "শাস্ত্রীয় সঙ্গীত 🎵", "কৌশলগত গেইমিং 🎮"]
    },
    referencesLabel: "পেশাদার রেফারেন্স",
    referencesText: "গ্র্যান্ড হায়াত দোহার এক্সিকিউটিভ শেফ এবং সু শেফদের পেশাদার সুপারিশপত্র অনুরোধ সাপেক্ষে তাৎক্ষণিকভাবে সরবরাহ করা হবে।"
  },
  ar: {
    languageName: "العربية (Arabic)",
    name: "سوزول أحمد",
    title: "شيف كوميس محترف",
    summary: "شيف كوميس منضبط ولديه أكثر من ٤ سنوات من الخبرة العملية في فنادق الـ ٥ نجوم العالمية. ملتزم بتقديم أطباق راقية، وتطبيق معايير HACCP العالمية لسلامة الغذاء، وضمان الجودة والسرعة الفائقة تحت ضغط الخدمة المكثفة.",
    objective: "السعي لتقديم أرقى مستويات الخدمة الفندقية من فئة 5 نجوم في فندق جراند حياة الدوحة مع المساهمة في إعداد تجارب طهي استثنائية.",
    contactLabels: {
      address: "العنوان",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      linkedin: "لينكد إن",
      location: "الدوحة، قطر"
    },
    journey: {
      sectionTitle: "الخبرة المهنية",
      role: "شيف كوميس (مساعد طاهٍ)",
      company: "فندق وفيلات جراند حياة الدوحة",
      period: "نوفمبر ٢٠٢١ — حتى الآن",
      responsibilities: [
        {
          title: "مراقبة الجودة ومعايير المذاق",
          desc: "الحفاظ على سجلات درجات الحرارة بدقة، والتحقق من المكونات لضمان جودة الأطباق وتقليل شكاوى العملاء بنسبة كبيرة."
        },
        {
          title: "دعم العمليات ذات الحجم الكبير",
          desc: "تجهيز الـ Mis-en-place بسرعة واتساق تام، وإدارة محطات الطهي الساخنة والباردة لخدمة أكثر من ٢٠٠ زائر يوميًا."
        },
        {
          title: "إدارة المخزون وتقليل الهدر",
          desc: "التنبؤ بمتطلبات المكونات أسبوعيًا وتطبيق نظام FIFO لتدوير المخزون مما قلل التكاليف الإجمالية للأغذية."
        },
        {
          title: "الإشراف والتعقيم داخل المطبخ",
          desc: "توجيه مساعدي المطبخ في معايير النظافة العامة وضمان الالتزام الصارم بلوائح صحة الأغذية في بلدية الدوحة."
        }
      ]
    },
    skillsSection: {
      sectionTitle: "المهارات وأدوات الطهي",
      skills: [
        { title: "استخدام السكاكين ونحت الخضار", desc: "دقة متناهية في القطع الفرنسية الكلاسيكية ونحت الخضار والفواكه بشكل جمالي راقٍ." },
        { title: "أعمال الجزارة وتجهيز اللحوم", desc: "تقطيع متسق ودقيق للدواجن ولحوم البقر الفاخرة والمأكولات البحرية الطازجة حسب الأوزان." },
        { title: "التحكم في حصص الطعام والهدر", desc: "تقليل الفاقد التشغيلي عبر إجراء اختبارات دقيقة للمواد الخام ومتابعة حركة المخازن." },
        { title: "معايير سلامة الغذاء HACCP", desc: "امتثال كامل وغير مشروط للأكواد الصحية العالمية لسلامة الغذاء والنظافة والتعقيم الشامل." },
        { title: "العمل بكفاءة في أوقات الذروة", desc: "طاقة حركية استثنائية وقدرة عالية على تحمل ضغط العمل في المطبخ الفاخر خلال ساعات الذروة الفندقية." }
      ]
    },
    educationSection: {
      sectionTitle: "التعليم والأكاديمية",
      degree: "شهادة المدرسة الثانوية العامة",
      school: "مدرسة كومولي نمدار الثانوية",
      period: "تخرج بمرتبة الشرف",
      equivalence: "ما يعادل شهادة الثانوية العامة البريطانية A-Levels"
    },
    achievementsSection: {
      sectionTitle: "الإنجازات والاعتمادات الأساسية",
      items: [
        "حاصل على شهادة سلامة الأغذية HACCP المستوى الثاني.",
        "المساهمة في خفض شكاوى النزلاء بنسبة ١٥٪ من خلال المراقبة الصارمة لدرجة حرارة الخدمة وطرق التقديم.",
        "تطبيق خطة لتقليل الهدر مما أدى إلى خفض وزن مخلفات التحضير بنسبة ٨٪.",
        "تدريب أكثر من ٥ متدربين جدد على بروتوكولات التعقيم والسلامة في الفنادق العالمية."
      ]
    },
    additionalLanguagesLabel: "الطلاقة اللغوية",
    interestsSection: {
      sectionTitle: "الاهتمامات الشخصية",
      items: ["السفر واستكشاف الطهي ✈️", "الموسيقى الكلاسيكية 🎵", "ألعاب التخطيط الإستراتيجي 🎮"]
    },
    referencesLabel: "المراجع المهنية",
    referencesText: "المراجع المهنية الممتازة من الشيف التنفيذي ومساعدي الشيف في جراند حياة الدوحة متاحة فوراً عند الطلب."
  },
  ur: {
    languageName: "اردو (Urdu)",
    name: "سوزول احمد",
    title: "پروفیشنل کومیس شیف",
    summary: "5 اسٹار انٹرنیشنل ہوٹلوں میں 4 سال سے زیادہ کا عملی تجربہ رکھنے والے ایک انتہائی سرگرم اور منضبط شیف۔ کچن میں تیزی، چاقو کے بہترین استعمال، اور بین الاقوامی فوڈ ہائیجین اور سیفٹی کے اصولوں پر سختی سے عمل کرنے میں مہارت۔",
    objective: "گرینڈ حیات دوحہ ہوٹل اینڈ ولاز میں اپنے پاک فن کے ہنر کو بروئے کار لاتے ہوئے اعلیٰ ترین پکوان اور شاندار ذائقے تیار کرنا۔",
    contactLabels: {
      address: "پتہ",
      phone: "فون",
      email: "ای میل",
      linkedin: "لنکڈ ان",
      location: "دوحہ، قطر"
    },
    journey: {
      sectionTitle: "پیشہ ورانہ تجربہ",
      role: "کومیس شیف",
      company: "گرینڈ حیات دوحہ ہوٹل اینڈ ولاز",
      period: "نومبر 2021 — موجودہ",
      responsibilities: [
        {
          title: "معیار اور ذائقے کا کنٹرول",
          desc: "ہر پلیٹ کے درجہ حرارت اور معیار کی سخت نگرانی کی، جس سے گاہکوں کے اطمینان میں اضافہ ہوا اور شکایات میں نمایاں کمی آئی۔"
        },
        {
          title: "بڑے پیمانے پر آپریشنل سپورٹ",
          desc: "ایک ہی وقت میں 200 سے زیادہ مہمانوں کے آرڈرز کو سنبھالنے کے لیے مِز این پلیس کو تیزی اور تسلسل کے ساتھ تیار کیا۔"
        },
        {
          title: "اسٹاک مینجمنٹ اور بچت",
          desc: "ہفتہ وار بنیادوں پر درکار اجزاء کی درست پیش گوئی کی اور FIFO سسٹم کو اپنا کر کچن کے فضلے کو کم سے کم کیا۔"
        },
        {
          title: "کچن سینیٹیشن اور نگرانی",
          desc: "کچن کے تمام ورکنگ ایریاز کی صفائی کو یقینی بنانے کے لیے جونیئر عملے کی رہنمائی کی اور بلدیہ کے قوانین پر سختی سے عمل کیا۔"
        }
      ]
    },
    skillsSection: {
      sectionTitle: "پکوان کی مہارتیں",
      skills: [
        { title: "چاقو کا استعمال اور سبزیوں کی تراش", desc: "کلاسک فرینچ کٹنگ (برونوائز، جولین) اور سبزیوں کی خوبصورت تراش خراش میں مہارت حاصل ہے۔" },
        { title: "قصابی اور گوشت کی تیاری", desc: "چکن، بیف اور سی فوڈ کے وزن کے مطابق درست اور یکساں حصے تیار کرنا۔" },
        { title: "فوڈ ویسٹ کنٹرول", desc: "طریقہ کار کے ساتھ اجزاء کی پیمائش کر کے کچن کے فضول خرچ کو کنٹرول کرنا۔" },
        { title: "HACCP اور سیفٹی تعمیل", desc: "بین الاقوامی فوڈ سیفٹی قوانین، درجہ حرارت کی نگرانی اور سینیٹیشن کے اصولوں پر مکمل عمل۔" },
        { title: "تیز رفتاری اور توانائی", desc: "انتہائی مصروف اوقات اور بڑے پیمانے پر ڈنر سروس کے دوران کچن کے ہاٹ اور کولڈ اسٹیشنز کو تیزی سے چلانا۔" }
      ]
    },
    educationSection: {
      sectionTitle: "تعلیم و تربیت",
      degree: "سیکنڈری اسکول سرٹیفکیٹ",
      school: "کومولی نمدار ہائی اسکول",
      period: "اعزاز کے ساتھ پاس کیا",
      equivalence: "برطانوی اے لیولز کے مساوی تعلیمی سند"
    },
    achievementsSection: {
      sectionTitle: "اہم کامیابیاں",
      items: [
        "سرٹیفائیڈ HACCP فوڈ سیفٹی لیول 2 ہولڈر۔",
        "کھانوں کے معیار کو برقرار رکھ کر گاہکوں کی شکایات میں 15 فیصد کمی لانے کا ریکارڈ۔",
        "کچن کی ویسٹ مینجمنٹ سے ویسٹ مٹیریل کے وزن میں 8 فیصد کمی لائی۔",
        "کچن کے 5 سے زائد نئے شاگردوں کو ہوٹل کے سینیٹیشن اور چاقو کی حفاظت کے قوانین سکھائے۔"
      ]
    },
    additionalLanguagesLabel: "زبانوں پر مہارت",
    interestsSection: {
      sectionTitle: "شخصی دلچسپیاں",
      items: ["پکوان سے متعلق سفر ✈️", "کلاسک موسیقی 🎵", "حکمت عملی والے گیمز 🎮"]
    },
    referencesLabel: "پیشہ ورانہ حوالے",
    referencesText: "گرینڈ حیات دوحہ کے ایگزیکٹو شیف اور دیگر شیف حضرات کے سفارشی خطوط مانگنے پر فوری پیش کیے جائیں گے۔"
  },
  fr: {
    languageName: "Français (French)",
    name: "Sozol Ahmed",
    title: "Commis de Cuisine Professionnel",
    summary: "Commis de cuisine dévoué et rigoureux, fort de plus de 4 ans d'expérience au sein d'établissements hôteliers 5 étoiles de renommée internationale. Reconnu pour sa rapidité d'exécution, son sens de la précision lors du dressage des assiettes et son strict respect des normes d'hygiène HACCP.",
    objective: "Mettre à profit mon dynamisme, ma maîtrise de la découpe et mes expériences dans l'hôtellerie de luxe internationale pour soutenir une brigade d'excellence, tout en garantissant des standards de sécurité alimentaire irréprochables.",
    contactLabels: {
      address: "Adresse",
      phone: "Téléphone",
      email: "E-mail",
      linkedin: "LinkedIn",
      location: "Doha, Qatar"
    },
    journey: {
      sectionTitle: "Expérience Professionnelle",
      role: "Commis de Cuisine",
      company: "Grand Hyatt Doha Hotel & Villas",
      period: "Novembre 2021 — Présent",
      responsibilities: [
        {
          title: "Contrôle Qualité & Dressage de Précision",
          desc: "Surveillance rigoureuse des températures de service et respect des fiches techniques sous la direction du Chef De Partie, réduisant de manière significative les retours d'assiettes."
        },
        {
          title: "Support Opérationnel à Fort Volume",
          desc: "Préparation rapide et uniforme de la mise-en-place, gestion active des postes chaud, grill et garde-manger pour des services exigeants de plus de 200 couverts."
        },
        {
          title: "Gestion des Rendements & Approvisionnement",
          desc: "Anticipation hebdomadaire des stocks de matières premières, rotation rigoureuse selon la méthode FIFO, optimisant les coûts et évitant le gaspillage alimentaire."
        },
        {
          title: "Supervision de la Brigade & Nettoyage",
          desc: "Supervision des commis de débarras et plongeurs, maintien de l'hygiène globale des plans de travail en stricte conformité avec les règlements de la municipalité de Doha."
        }
      ]
    },
    skillsSection: {
      sectionTitle: "Compétences & Toolkit Culinaire",
      skills: [
        { title: "Maîtrise de la Découpe & Sculpture", desc: "Grande précision dans les découpes classiques françaises (brunoise, julienne, chiffonnade) et sculpture esthétique de fruits et légumes." },
        { title: "Boucherie & Parage des Viandes", desc: "Portionnage propre et régulier des volailles, pièces de bœuf premium et produits de la mer locaux." },
        { title: "Contrôle des Portions & Pertes", desc: "Optimisation de l'utilisation des denrées pour un gaspillage de matières premières proche de zéro." },
        { title: "Normes d'Hygiène & HACCP", desc: "Respect intransigeant des procédures de sécurité alimentaire, suivi de la chaîne du froid et désinfection complète." },
        { title: "Endurance & Rapidité en Service", desc: "Capacité à performer sous haute pression, en assurant l'envoi rapide et soigné des plats durant les pics de fréquentation." }
      ]
    },
    educationSection: {
      sectionTitle: "Éducation & Diplômes",
      degree: "Secondary School Certificate (Baccalauréat)",
      school: "Kumulli Nmdar High School",
      period: "Obtenu avec Mention",
      equivalence: "Équivalent Baccalauréat / A-Levels"
    },
    achievementsSection: {
      sectionTitle: "Réalisations Clés & Certifications",
      items: [
        "Praticien certifié de niveau 2 en sécurité alimentaire (HACCP).",
        "Contribution active à la réduction de 15% des plaintes des clients grâce à un contrôle parfait des températures de service.",
        "Réduction de 8% des pertes de préparation par un travail minutieux des rendements de découpe.",
        "Formation et encadrement de 5+ apprentis sur les règles de sécurité des couteaux et l'hygiène en cuisine."
      ]
    },
    additionalLanguagesLabel: "Maîtrise des Langues",
    interestsSection: {
      sectionTitle: "Centres d'Intérêt",
      items: ["Voyages Culinaire ✈️", "Musique Classique 🎵", "Jeux de Stratégie 🎮"]
    },
    referencesLabel: "Références Professionnelles",
    referencesText: "Excellentes références du Chef Exécutif, des Sous-Chefs et des Chefs de Partie du Grand Hyatt Doha disponibles sur demande."
  }
};
