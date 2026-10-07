/* =====================================================================
   كل بيانات الموقع هنا ✏️
   عدّلي هذا الملف فقط — لا تحتاجين لتعديل أي ملف آخر.
   كل نص له نسختان: en (إنجليزي) و ar (عربي)
   ===================================================================== */

const CONTENT = {

/* =========================== ENGLISH =========================== */
en: {
  dir: "ltr",
  lang: "en",

  nav: [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["certs", "Certificates"],
    ["projects", "Projects"],
    ["experience", "Experience"],
    ["contact", "Contact"]
  ],

  logo: ["Alaa", "Al-Rajawi"],
  logoMark: "A",

  hero: {
    pill: "Available for work & training",
    title: 'I am <span class="grad">Alaa Mohsen Al-Rajawi</span>',
    typed: ["Cybersecurity", "Threat Analysis", "Network Security", "Incident Response"],
    desc: "Cybersecurity specialist focused on protecting systems, analyzing threats and responding to incidents. Explore my certificates, projects and experience below.",
    btn1: "View my projects",
    btn2: "Contact me",
    badges: ["Blue Team", "CORE", "Cyber"],
    stats: [
      [2, "Certificates"],
      [6, "Projects"],
      [5, "Security labs"],
      [15, "Technical skills"]
    ]
  },

  about: {
    tag: "// about me",
    title: "Who am I?",
    text: [
      'I am <strong>Alaa Mohsen Al-Rajawi</strong>, a cybersecurity specialist passionate about protecting networks and systems, detecting threats, and stopping attacks before they happen.',
      "I keep improving my skills through hands-on labs, certified training and real projects — because cybersecurity is a continuous responsibility, not a task that ever ends."
    ],
    facts: [
      ["Major", "Cybersecurity"],
      ["Location", "Jordan 🇯🇴"],
      ["Languages", "Arabic, English"],
      ["Status", "Open to work & training"]
    ],
    cta: "Download CV",
    terminal: [
      "$ whoami",
      "alaa_alrajawi",
      "$ cat role.txt",
      "Cybersecurity Specialist",
      "$ cat focus.json",
      '{ "soc": true, "pentest": true,',
      '  "network": true, "dfir": true }',
      "$ status",
      "● ready to work_"
    ]
  },

  skills: {
    tag: "// skills",
    title: "What I do",
    sub: "Core areas I work on every day.",
    cards: [
      ["🛡️", "Threat Analysis", "Monitoring alerts, triaging incidents and classifying threats using MITRE ATT&CK.", ["SIEM", "Wazuh", "Snort"]],
      ["🔍", "Penetration Testing", "Reconnaissance, vulnerability scanning and authorized testing of apps and networks.", ["Kali", "Nessus", "Nmap"]],
      ["🌐", "Network Security", "Secure network design, firewalls, segmentation and traffic analysis with packet capture.", ["Wireshark", "Firewall", "VPN"]],
      ["🚨", "Incident Response", "Containment, digital forensics, root-cause analysis and clear reporting.", ["DFIR", "Artifacts", "Reporting"]],
      ["💻", "Automation", "Scripts and tools that automate repetitive security tasks and save time.", ["Python", "Bash", "PowerShell"]],
      ["🐧", "Systems & Servers", "Administering and hardening Linux systems and securing services.", ["Linux", "Hardening", "Auditing"]]
    ],
    bars: [
      ["Threat Analysis", 90],
      ["Network Security", 85],
      ["Penetration Testing", 78],
      ["Python / Automation", 80]
    ]
  },

  certs: {
    tag: "// certificates",
    title: "My certificates",
    sub: "Verified certifications and completed practical labs.",
    list: [
      ["Hackviser", "Certified Cybersecurity Foundations (CORE)",
       "Official Certificate of Completion covering fundamental cybersecurity concepts, network analysis and hands-on lab exercises.",
       "2025", "https://www.linkedin.com/in/ala-a-mohsen-750746428/"],
      ["TryHackMe", "Snort Lab — Practical IDS",
       "Successfully finished the Snort lab on TryHackMe as part of practical security coursework: packet analysis and IDS rule writing.",
       "2026", "https://www.linkedin.com/in/ala-a-mohsen-750746428/"]
    ],
    link: "View certificate"
  },

  projects: {
    tag: "// projects",
    title: "My work",
    sub: "Selected academic and personal projects I have delivered.",
    list: [
      ["AI / Machine Learning", "Smart Stock AI Agent",
       "An intelligent agent that processes live market data, trains and compares multiple machine-learning models with hyperparameter tuning, selects the best performer, and answers user questions in Arabic and English.",
       ["Python", "Machine Learning", "Live Data"],
       ["View project", "GitHub"], "https://github.com/Ala-22"],

      ["Mobile / Flutter", "HomeStyle — Furniture & Interior Design",
       "A modern Flutter application for browsing furniture by category, viewing product details and managing favorites and cart — with a full authentication and backend system, plus AI-assisted room redesign ideas.",
       ["Flutter", "Dart", "Backend"],
       ["View project", "GitHub"], "https://github.com/Ala-22"],

      ["Offensive & Defensive Security", "Linux OS Security Hardening",
       "Identified and mitigated vulnerabilities in a Linux environment: vulnerability assessment, firewall configuration, service hardening, auditing and malware protection — with security scans before and after remediation to measure the improvement.",
       ["Linux", "Nessus", "Hardening"],
       ["View project", "GitHub"], "https://github.com/Ala-22"],

      ["Digital Forensics", "Digital Forensics Investigation",
       "Investigated digital evidence, analyzed artifacts, identified suspicious activity and reconstructed security incidents using standard forensic investigation techniques in a controlled lab.",
       ["DFIR", "Artifacts", "Reporting"],
       ["View project", "GitHub"], "https://github.com/Ala-22"],

      ["Security Architecture", "Cybersecurity Architecture & Secure Design",
       "Designed a layered security architecture using defense-in-depth, network segmentation, access control and threat modeling — including a live attack simulation with Kali Linux followed by defensive monitoring and detection with Wazuh.",
       ["Kali", "Wazuh", "Threat Modeling"],
       ["View project", "GitHub"], "https://github.com/Ala-22"],

      ["Malware / Education", "Python File Virus — Security Simulation",
       "A controlled, educational malware simulation built in Python to demonstrate how file-based malware interacts with a system — developed in an isolated environment to explore detection, prevention and response.",
       ["Python", "Malware Analysis", "Sandbox"],
       ["View project", "GitHub"], "https://github.com/Ala-22"]
    ]
  },

  experience: {
    tag: "// experience",
    title: "My journey",
    list: [
      ["2026 — Now", "Cybersecurity Trainee — Security Labs", "University Coursework",
       "Hands-on offensive and defensive exercises: simulated network attacks using Kali Linux, defensive monitoring and detection with Wazuh, vulnerability scanning and remediation with Nessus, Linux hardening and digital forensics investigations.",
       ["Kali", "Wazuh", "Nessus", "DFIR"]],

      ["2025 — 2026", "Application & AI Developer", "Independent Projects",
       "Built HomeStyle, a Flutter furniture and interior-design app with authentication and backend, and Smart Stock AI Agent, a machine-learning stock analysis agent using live market data with bilingual answers.",
       ["Flutter", "Python", "Machine Learning"]],

      ["2024 — 2025", "Security Research — Malware Simulation & Forensics", "Academic Project",
       "Developed an educational Python file-virus simulation in an isolated environment and conducted a digital forensics investigation to reconstruct a security incident end to end.",
       ["Python", "Forensics", "Malware Analysis"]]
    ]
  },

  contact: {
    tag: "// contact",
    title: "Let's work together",
    sub: "For any question, opportunity or collaboration — drop me a line.",
    links: [
      ["✉️", "Email", "Alaaalrajawi5@gmail.com", "mailto:Alaaalrajawi5@gmail.com"],
      ["💬", "WhatsApp", "+962 77 833 0703", "https://wa.me/962778330703"],
      ["💼", "LinkedIn", "in/ala-a-mohsen-750746428", "https://www.linkedin.com/in/ala-a-mohsen-750746428/"],
      ["🐙", "GitHub", "github.com/Ala-22", "https://github.com/Ala-22"]
    ],
    form: {
      name: "Your name",
      mail: "Your email",
      msg: "Your message",
      send: "Send message",
      ok: "Opening your email app...",
      err: "Please fill in all fields."
    }
  },

  footer: {
    copy: "© {year} Alaa Mohsen Al-Rajawi — All rights reserved.",
    made: "Designed with 💗"
  },

  cv: "assets/cv.pdf"
},

/* =========================== العربية =========================== */
ar: {
  dir: "rtl",
  lang: "ar",

  nav: [
    ["home", "الرئيسية"],
    ["about", "نبذة عني"],
    ["skills", "المهارات"],
    ["certs", "الشهادات"],
    ["projects", "المشاريع"],
    ["experience", "الخبرات"],
    ["contact", "تواصل معي"]
  ],

  logo: ["الآاء", "الرجوي"],
  logoMark: "آ",

  hero: {
    pill: "متوفرة للعمل والتدريب",
    title: 'أنا <span class="grad">الآاء محسن الرجوي</span>',
    typed: ["الأمن السيبراني", "تحليل التهديدات", "أمن الشبكات", "الاستجابة للحوادث"],
    desc: "متخصصة في الأمن السيبراني: حماية الأنظمة، تحليل التهديدات، والاستجابة للحوادث. تابعي شهاداتي ومشاريعي وخبراتي هنا.",
    btn1: "شاهد مشاريعي",
    btn2: "تواصلي معي",
    badges: ["فريق الدفاع", "CORE", "سيبراني"],
    stats: [
      [2, "شهادة معتمدة"],
      [6, "مشروع منجز"],
      [5, "مختبر أمني"],
      [15, "مهارة تقنية"]
    ]
  },

  about: {
    tag: "// نبذة عني",
    title: "مَن أنا؟",
    text: [
      'أنا <strong>الآاء محسن محسن الرجوي</strong>، متخصصة في الأمن السيبراني، شغوفة بحماية الشبكات والأنظمة، واكتشاف التهديدات، ومنع الهجمات قبل وقوعها.',
      "أطوّر مهاراتي باستمرار عبر المختبرات العملية والتدريبات المعتمدة والمشاريع الحقيقية، لأن الأمن السيبراني مسؤولية مستمرة لا تنتهي يوماً."
    ],
    facts: [
      ["التخصص", "الأمن السيبراني"],
      ["الموقع", "الأردن 🇯🇴"],
      ["اللغات", "العربية، الإنجليزية"],
      ["الحالة", "مفتوحة للعمل والتدريب"]
    ],
    cta: "تحميل السيرة الذاتية",
    terminal: [
      "$ whoami",
      "alaa_alrajawi",
      "$ cat role.txt",
      "متخصصة في الأمن السيبراني",
      "$ cat focus.json",
      '{ "soc": true, "pentest": true,',
      '  "network": true, "dfir": true }',
      "$ status",
      "● جاهزة للعمل_"
    ]
  },

  skills: {
    tag: "// المهارات",
    title: "ماذا أقدّم",
    sub: "مجالات العمل التي أمارسها يومياً.",
    cards: [
      ["🛡️", "تحليل التهديدات", "مراقبة الإنذارات، فرز الحوادث، وتصنيف التهديدات وفق MITRE ATT&CK.", ["SIEM", "Wazuh", "Snort"]],
      ["🔍", "اختبار الاختراق", "استخبارات، فحص الثغرات، واختبار تطبيقات وشبكات ضمن نطاق مصرّح.", ["Kali", "Nessus", "Nmap"]],
      ["🌐", "أمن الشبكات", "تصميم شبكات آمنة، جدران الحماية، التجزئة، وتحليل الحركة بالتقاط الحزم.", ["Wireshark", "Firewall", "VPN"]],
      ["🚨", "الاستجابة للحوادث", "الاحتواء، التحقيق الرقمي، تحليل السبب الجذري، وإعداد التقارير.", ["DFIR", "Artifacts", "Reporting"]],
      ["💻", "الأتمتة والبرمجة", "أدوات وسكربتات تؤتمت المهام الأمنية المتكررة وتوفّر الوقت.", ["Python", "Bash", "PowerShell"]],
      ["🐧", "الأنظمة والخوادم", "إدارة أنظمة لينكس وتقوية إعدادات النظام وتأمين الخدمات.", ["Linux", "Hardening", "Auditing"]]
    ],
    bars: [
      ["تحليل التهديدات", 90],
      ["أمن الشبكات", 85],
      ["اختبار الاختراق", 78],
      ["بايثون / الأتمتة", 80]
    ]
  },

  certs: {
    tag: "// الشهادات",
    title: "شهاداتي",
    sub: "شهادات معتمدة ومختبرات عملية مكتملة.",
    list: [
      ["Hackviser", "شهادة أساسيات الأمن السيبراني (CORE)",
       "شهادة إتمام رسمية تغطي المفاهيم الأساسية للأمن السيبراني، تحليل الشبكات، والتمارين العملية في المختبرات.",
       "2025", "https://www.linkedin.com/in/ala-a-mohsen-750746428/"],
      ["TryHackMe", "مختبر Snort — كشف التسلل العملي",
       "إتمام مختبر Snort على منصة TryHackMe ضمن مقررات الأمن العملي: تحليل الحزم وكتابة قواعد IDS.",
       "2026", "https://www.linkedin.com/in/ala-a-mohsen-750746428/"]
    ],
    link: "عرض الشهادة"
  },

  projects: {
    tag: "// مشاريعي",
    title: "أعمالي",
    sub: "نماذج من مشاريعي الأكاديمية والشخصية التي نفّذتها.",
    list: [
      ["ذكاء اصطناعي / تعلّم آلي", "وكيل الأسهم الذكي (Smart Stock AI Agent)",
       "وكيل ذكي يعالج بيانات السوق الحية، درّب وقارن عدة نماذج تعلّم آلي مع ضبط المعاملات، يختار أفضل نموذج، ويجيب على أسئلة المستخدم بالعربية والإنجليزية.",
       ["Python", "Machine Learning", "Live Data"],
       ["عرض المشروع", "GitHub"], "https://github.com/Ala-22"],

      ["تطبيقات جوال / فلاتر", "HomeStyle — الأثاث وتصميم الديكور",
       "تطبيق فلاتر حديث لتصفح الأثاث حسب الفئة، عرض تفاصيل المنتجات، وإدارة المفضلة والسلة — مع نظام مصادقة وخلفية متكامل، وإضافة ذكاء اصطناعي لإعادة تصميم الغرف.",
       ["Flutter", "Dart", "Backend"],
       ["عرض المشروع", "GitHub"], "https://github.com/Ala-22"],

      ["أمن هجومي ودفاعي", "تقوية نظام لينكس (Linux Hardening)",
       "تحديد الثغرات ومعالجتها في بيئة لينكس: تقييم الثغرات، ضبط جدران الحماية، تقوية الخدمات، التدقيق وحماية البرمجيات الخبيثة — مع عمليات فحص قبل وبعد المعالجة لقياس التحسّن.",
       ["Linux", "Nessus", "Hardening"],
       ["عرض المشروع", "GitHub"], "https://github.com/Ala-22"],

      ["التحقيق الجنائي الرقمي", "مشروع التحقيق الجنائي الرقمي",
       "التحقيق في الأدلة الرقمية، تحليل المفاتيح الرقمية، رصد النشاط المشبوه، وإعادة بناء الحوادث الأمنية باستخدام تقنيات التحقيق الجنائي الرقمي المعتمدة في مختبر محكوم.",
       ["DFIR", "Artifacts", "Reporting"],
       ["عرض المشروع", "GitHub"], "https://github.com/Ala-22"],

      ["معمارية أمنية", "معمارية الأمن السيبراني والتصميم الآمن",
       "تصميم معمارية أمنية متعددة الطبقات باستخدام مبدأ الدفاع بالعمق، تجزئة الشبكات، التحكم في الوصول، ونمذجة التهديدات — بما فيها محاكاة هجوم حيّ بـ Kali Linux ثم المراقبة الدفاعية عبر Wazuh.",
       ["Kali", "Wazuh", "Threat Modeling"],
       ["عرض المشروع", "GitHub"], "https://github.com/Ala-22"],

      ["برمجيات خبيثة / تعليم", "فيروس ملفات بايثون — محاكاة أمنية",
       "محاكاة أمنية تعليمية مكتوبة بلغة Python لعرض كيفية تفاعل برامج الفيروسات المبنية على الملفات مع النظام — نُفّذت في بيئة معزولة لاستكشاف الكشف والمنع والاستجابة.",
       ["Python", "Malware Analysis", "Sandbox"],
       ["عرض المشروع", "GitHub"], "https://github.com/Ala-22"]
    ]
  },

  experience: {
    tag: "// الخبرات",
    title: "مسيرتي المهنية",
    list: [
      ["2026 — الآن", "متدربة أمن سيبراني — مختبرات أمنية", "مقررات جامعية",
       "تمارين عملية هجومية ودفاعية: محاكاة هجومات شبكات باستخدام Kali Linux، مراقبة وكشف عبر Wazuh، فحص الثغرات ومعالجتها بـ Nessus، تقوية أنظمة لينكس، والتحقيق الجنائي الرقمي.",
       ["Kali", "Wazuh", "Nessus", "DFIR"]],

      ["2025 — 2026", "مطوّرة تطبيقات وذكاء اصطناعي", "مشاريع شخصية",
       "تطوير HomeStyle، تطبيق فلاتر للأثاث وتصميم الديكور مع نظام مصادقة وخلفية، ووكيل Smart Stock AI لتحليل الأسهم بالتعلّم الآلي على بيانات حية مع إجابات بالعربية والإنجليزية.",
       ["Flutter", "Python", "Machine Learning"]],

      ["2024 — 2025", "باحثة أمنية — محاكاة البرمجيات الخبيثة والتحقيق الرقمي", "مشروع أكاديمي",
       "تطوير محاكاة فيروس ملفات تعليمية بلغة Python في بيئة معزولة، وتنفيذ تحقيق جنائي رقمي لإعادة بناء حادثة أمنية من البداية للنهاية.",
       ["Python", "Forensics", "Malware Analysis"]]
    ]
  },

  contact: {
    tag: "// تواصل معي",
    title: "لنعمل معاً",
    sub: "لأي استفسار، فرصة عمل أو تعاُن — راسليني.",
    links: [
      ["✉️", "البريد الإلكتروني", "Alaaalrajawi5@gmail.com", "mailto:Alaaalrajawi5@gmail.com"],
      ["💬", "واتساب", "+962 77 833 0703", "https://wa.me/962778330703"],
      ["💼", "لينكدإن", "in/ala-a-mohsen-750746428", "https://www.linkedin.com/in/ala-a-mohsen-750746428/"],
      ["🐙", "GitHub", "github.com/Ala-22", "https://github.com/Ala-22"]
    ],
    form: {
      name: "الاسم",
      mail: "البريد الإلكتروني",
      msg: "الرسالة",
      send: "إرسال الرسالة",
      ok: "جارٍ فتح تطبيق البريد...",
      err: "الرجاء تعبئة جميع الحقول."
    }
  },

  footer: {
    copy: "© {year} الآاء محسن محسن الرجوي — كل الحقوق محفوظة.",
    made: "صُمّم بحب 💗"
  },

  cv: "assets/cv.pdf"
}
};
