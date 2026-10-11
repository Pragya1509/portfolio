/* ==========================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
   Everything on the site (links, projects, skills, posters)
   comes from here. Save, push to GitHub, and the site updates.
   ========================================================== */

const SITE = {
  name: "Pragya Sharma",
  email: "pragya1509sharma@gmail.com",
  github: "https://github.com/Pragya1509",
  linkedin: "https://www.linkedin.com/in/pragya-sharma15/",
  canva: "https://canva.link/aba564gzi4jha97",
  resume: "resume.pdf",      // replace the resume.pdf file to update
  photo: "profile.jpg"
};

/* ---------- PROJECTS ----------
   To add a project, copy one block and change the text.
   image:  optional, e.g. "images/projects/crowd-sense.png" ("" = colour cover)
   github: put the repo link (set to your profile for now)
   live:   optional live demo link ("" hides the button)
*/
const PROJECTS = [
  {
    title: "Crowd Sense",
    meta: "Computer vision | Hack With Rajasthan, 2025",
    description:
      "Real-time crowd safety system that uses YOLOv8 and OpenCV to detect people and track density and movement. A Streamlit dashboard shows density heatmaps and sends Twilio alerts when 5 or more people cluster in a zone.",
    tags: ["Python", "YOLOv8", "OpenCV", "Streamlit", "Twilio"],
    image: "",
    color: "#1E3A5F",
    github: SITE.github,
    live: ""
  },
  {
    title: "HireMind",
    meta: "LLM and full-stack | 2025",
    description:
      "Interview platform with an AI interviewer powered by Groq's LLM and real-time response analysis over WebRTC and Socket.IO. Adds voice interaction, eye-contact tracking, and secure login with JWT and bcrypt.",
    tags: ["MongoDB", "Express", "React", "Node.js", "WebRTC", "Socket.IO", "Groq API", "face-api.js"],
    image: "",
    color: "#2F5DA8",
    github: SITE.github,
    live: ""
  },
  {
    title: "Algo Trading Screener",
    meta: "Python and APIs | Internship project, 2026",
    description:
      "Python system that pulls live data for 5 to 10 stocks through the ICICI Direct Breeze Connect API and gives BUY, SELL or WAIT signals from a weighted scoring engine.",
    tags: ["Python", "Breeze Connect API", "Data analysis", "Signal scoring"],
    image: "",
    color: "#1F5F6B",
    github: SITE.github,
    live: ""
  },
  {
    title: "Stock Market Screener",
    meta: "Data analysis | Microsoft Excel, 2026",
    description:
      "Excel screening framework for NIFTY 200 companies using OHLC, LTP, Stochastic and volume intensity. Detects Hammer, Bullish Engulfing, Morning Star and Blended Hammer patterns and brings everything into one comparison table.",
    tags: ["Microsoft Excel", "Data analysis", "NIFTY 200"],
    image: "",
    color: "#3F4E66",
    github: SITE.github,
    live: ""
  }
];

/* ---------- EXPERIENCE ---------- */
const EXPERIENCE = [
  {
    role: "Algorithmic Trading Intern",
    org: "Rajasthan Technical University",
    period: "May 2026 to June 2026",
    points: [
      "Built a Python multi-stock screening system on the ICICI Direct Breeze Connect API for live analysis of 5 to 10 stocks at the same time.",
      "Designed a weighted signal engine using RSI, Stochastic, VWAP and bullish candlestick patterns to produce BUY, SELL and WAIT signals.",
      "Refined the scoring logic and fixed API payload and runtime issues while debugging live data workflows."
    ]
  }
];

/* ---------- SKILLS ----------
   Remove anything you cannot explain in an interview.
*/
const SKILLS = [
  { group: "Programming", items: ["Python", "Java", "C", "JavaScript", "SQL"] },
  { group: "AI and machine learning", items: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "LLM applications", "Model evaluation"] },
  { group: "Libraries and frameworks", items: ["NumPy", "Pandas", "scikit-learn", "Matplotlib", "OpenCV", "YOLOv8", "Streamlit", "React", "Node.js", "Express"] },
  { group: "Data and databases", items: ["MySQL", "MongoDB", "Microsoft Excel", "Power BI"] },
  { group: "Computer science core", items: ["Data Structures and Algorithms", "OOPs", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Canva"] },
  { group: "Product management", items: ["Product thinking", "User research", "Roadmapping", "Prioritization (RICE)", "Writing PRDs", "Agile and Scrum", "Product metrics", "A/B testing", "Wireframing"] },
  { group: "More AI tools", items: ["PyTorch", "TensorFlow", "Model deployment", "MLOps basics", "Docker"] }
];

/* ---------- CERTIFICATIONS ---------- */
const CERTIFICATIONS = [
  "Microsoft Excel, Udemy (2025)",
  "TCS iON Career Edge, Young Professional (2025)",
  "Hack With Rajasthan, Devnovate (2025)",
  "Revive & Thrive, E-Cell, Banasthali Vidyapith (2024)",
  "Microsoft Ideathon, Participation (2024)",
  "Bobble AI Hackathon, Participation (2024)"
];

/* ---------- ACTIVITIES ---------- */
const ACTIVITIES = [
  "Design Sub-Core Member, Mayukh Tech Fest (2025)",
  "Technical Team Member, Mayukh Tech Fest (2024)",
  "Volunteer, National Service Scheme (NSS)",
  "Technical Team Member, German Events"
];

/* ---------- POSTERS (optional gallery) ----------
   All posters are already linked through your Canva button.
   To also show some on the page: add images to images/posters/ and list them here.
*/
const POSTERS = [
  // { title: "Mayukh Tech Fest 2025 poster", image: "images/posters/mayukh-2025.jpg" },
];
