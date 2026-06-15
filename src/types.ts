export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  id: string;
  stage: string;
  period: string;
  institution: string;
  streamOrMajor: string;
  details: string[];
  iconType: 'school' | 'college' | 'university';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  details: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  category: 'Programming Languages' | 'Web Development' | 'Artificial Intelligence' | 'Database & Tools';
  level?: number; // Optional level
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  badge: string;
  category: string;
}

export interface CareerGoal {
  id: string;
  title: string;
  description: string;
  timeframe: string;
  status: 'planning' | 'in-progress' | 'target';
}

// Portfolio Static Data
export const PROJECTS_DATA: Project[] = [
  {
    id: "attendance-system",
    title: "AI-Based Automated Attendance System",
    category: "Computer Vision",
    description: "A real-time face recognition attendance system developed using Python and OpenCV, featuring automated tracking to improve accuracy and reduce manual paperwork.",
    features: [
      "Developed a real-time face recognition attendance system using Python and OpenCV.",
      "Implemented automated tracking to improve accuracy and reduce manual processing.",
      "Facilitated seamless computational logs with low latency face detection."
    ],
    tags: ["Python", "OpenCV", "Face Recognition", "Visual Analytics"],
    metrics: "Real-time Tracking"
  },
  {
    id: "ecobloom",
    title: "Eco Bloom – Smart Urban Greenery Planner",
    category: "Sustainability",
    description: "Designed a prototype sustainability-focused application with soil detection and plant recommendation features, incorporating green mapping for smart city eco-planning.",
    features: [
      "Designed a prototype sustainability-focused application with soil detection and plant recommendation features.",
      "Integrated green mapping concepts to support smart city eco-planning.",
      "Saves community carbon footprints and charts local green indexes."
    ],
    tags: ["Plant Recommendation", "Soil Detection", "Eco-Planning", "React"],
    metrics: "+1200 Co2 Liters Saved"
  },
  {
    id: "solar-saver",
    title: "Sun Saver – Solar Energy Awareness Initiative",
    category: "Renewable Energy",
    description: "Built a web-based calculator for monthly/yearly solar energy usage analysis and promoted renewable energy adoption through data-driven awareness solutions.",
    features: [
      "Built a web-based calculator for monthly/yearly solar energy usage analysis.",
      "Promoted renewable energy adoption through data-driven awareness solutions.",
      "Evaluates payback estimation, panel sizing, and local grid savings."
    ],
    tags: ["React", "Solar Calculator", "Usage Analysis", "Lucide React"],
    metrics: "22% Energy Bill Savings"
  },
  {
    id: "cookbook",
    title: "Cookbook",
    category: "AI Recipe Platform",
    description: "An intelligent recipe discovery engine tailored to suggest dynamic meal preparation strategies based on real-time inventory items and customized nutritional preferences.",
    features: [
      "Smart culinary search engine featuring instant keyword filtering",
      "Modular ingredient-based query algorithm minimizing kitchen waste",
      "AI recommendations matching caloric, nutrient, and flavor preferences",
      "Personalized daily meal plan guides and interactive shopping lists"
    ],
    tags: ["Generative AI", "JavaScript", "React", "Nutritional APIs"],
    metrics: "AI-Generated Culinary Magic",
    liveUrl: "https://cookbook-ebon.vercel.app/"
  },
  {
    id: "stylep",
    title: "StyleP",
    category: "Fashion & Clothing Platform",
    description: "A gorgeous, immersive online apparel showcase modeling modern clothing lineups and sleek interactive retail design patterns.",
    features: [
      "Dynamic fashion catalog featuring grid animations and high-resolution visuals",
      "Highly interactive, immersive collection filter menus",
      "Slick layout optimizations built desktop-first, mobile-designed",
      "Responsive navigation drawer and micro-interactive custom cards"
    ],
    tags: ["React", "Motion", "Tailwind CSS", "Grid Layouts"],
    metrics: "Premium Modern Front-End",
    liveUrl: "https://stylep.vercel.app"
  },
  {
    id: "novacart",
    title: "NovaCart",
    category: "E-Commerce Platform",
    description: "A responsive, feature-rich virtual commercial storefront featuring lightning-fast catalogs and multi-state cart mechanics.",
    features: [
      "Advanced product management panels with intuitive categorization boards",
      "Instant query filters across multiple categories and price margins",
      "Fully responsive state-managed shopping cart with checkout flow",
      "Seamless client-side order orchestration and history sheets"
    ],
    tags: ["React hooks", "State Management", "Tailwind CSS", "Lucide React"],
    metrics: "Optimized Checkout Funnel",
    liveUrl: "https://novacart-blue.vercel.app/"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "btech",
    stage: "Bachelor of Technology (BTech)",
    period: "2023 – Present",
    institution: "Vignan's Institute of Engineering for Women, Vizag",
    streamOrMajor: "Computer Science & Engineering (Artificial Intelligence)",
    iconType: "university",
    details: [
      "Board / Affiliate: JNTU-GV • Academic standing: CGPA: 7.96",
      "Specializing in Machine Learning models, Computer Vision basics, and intelligent automation systems.",
      "Engaged in data-driven engineering, Object-Oriented Programming (OOP), Data Structures and Algorithms.",
      "Actively building project frameworks with Python, SQL, OpenCV, and modern web integration stacks."
    ]
  },
  {
    id: "intermediate",
    stage: "MPC (Intermediate - Class XII)",
    period: "2021 – 2023",
    institution: "St. joseph college for women, Visakhapatnam",
    streamOrMajor: "Mathematics, Physics, Chemistry (MPC)",
    iconType: "college",
    details: [
      "Board: BIE AP • Academic evaluation: Marks: 752",
      "Mastered fundamental advanced mathematics, molecular structures, and physical sciences.",
      "Cultivated a persistent analytical mindset and problem-solving capability."
    ]
  },
  {
    id: "schooling",
    stage: "SSC (Secondary School - Class X)",
    period: "2020 – 2021",
    institution: "Jamia English Medium High School, Visakhapatnam",
    streamOrMajor: "General Secondary Curriculum",
    iconType: "school",
    details: [
      "Board: BSE AP • Academic excellence: GPA: 9.93",
      "Instilled highly robust foundational logical and scientific structures.",
      "Discovered an early, intense interest in computational logic and technology frameworks."
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "datavalley-intern",
    role: "Foundations of AI & ML Intern",
    company: "Datavalley",
    period: "2024",
    details: [
      "Successfully completed a comprehensive professional internship specializing in foundational Artificial Intelligence and Machine Learning models.",
      "Gained robust hands-on experience training classifiers, supervised regression frameworks, and deep cognitive patterns.",
      "Engineered automated feature selection techniques and worked heavily with math-driven algorithms under professional mentorship."
    ],
    skills: ["AI Foundations", "Machine Learning", "Python", "Data Analysis", "Predictive Modeling"]
  }
];

export const SKILLS_DATA: Skill[] = [
  // Programming Languages
  { name: "Python", category: "Programming Languages" },
  { name: "Java", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },
  { name: "C", category: "Programming Languages" },

  // Web Development
  { name: "HTML", category: "Web Development" },
  { name: "CSS", category: "Web Development" },
  { name: "React", category: "Web Development" },
  { name: "Responsive Design", category: "Web Development" },

  // Artificial Intelligence
  { name: "Generative AI", category: "Artificial Intelligence" },
  { name: "Prompt Engineering", category: "Artificial Intelligence" },
  { name: "AI Tools", category: "Artificial Intelligence" },
  { name: "Automation Workflows", category: "Artificial Intelligence" },

  // Database & Tools
  { name: "SQL", category: "Database & Tools" },
  { name: "GitHub", category: "Database & Tools" },
  { name: "VS Code", category: "Database & Tools" },
  { name: "Google AI Studio", category: "Database & Tools" }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "cert-1",
    title: "AI Internship Certification",
    description: "Completed professional AI foundations and model development internship with Data Valley.",
    badge: "Data Valley Certified",
    category: "Certifications"
  },
  {
    id: "cert-2",
    title: "AI ASCEND by Accenture",
    description: "Evaluated competency in data processing, data acquisition pipelines, and exploratory data analysis (EDA).",
    badge: "Accenture AI ASCEND",
    category: "Certifications"
  },
  {
    id: "cert-3",
    title: "National STTP & Full Stack Mastery",
    description: "Acquired Java Full Stack with React JS & AI credentials from National Short-Term Training; plus Full Stack credentials from Infosys Springboard.",
    badge: "Full Stack Master",
    category: "Certifications"
  },
  {
    id: "cert-4",
    title: "Google WOW Hackathon Contender",
    description: "Successfully participated in the prestigious 24-hour Google WOW Hackathon at GITAM University and local college ideathons.",
    badge: "Hackathon Participant",
    category: "Hackathons & Events"
  },
  {
    id: "cert-5",
    title: "Cybersecurity & Ethical Hacking",
    description: "Participated in hands-on defense metrics, network vulnerabilities, and cybersecurity workshop labs.",
    badge: "Security Analyst",
    category: "Workshops"
  }
];

export const CAREER_GOALS_DATA: CareerGoal[] = [
  {
    id: "goal-1",
    title: "Become an AI Engineer",
    description: "Transition deep academic knowledge of neural pathways, model fine-tuning, and LLM integrations into production-ready industry roles.",
    timeframe: "Post-Graduation",
    status: "target"
  },
  {
    id: "goal-2",
    title: "Develop Impactful Tech Products",
    description: "Engineer practical, real-world utility assets (such as solar tracking or sustainable carbon calculators) that bridge artificial intelligence and social welfare.",
    timeframe: "Ongoing & Future",
    status: "in-progress"
  },
  {
    id: "goal-3",
    title: "Advance Knowledge in generative AI & Agents",
    description: "Focus deep learning research on agentic workflows, multi-agent frameworks, and complex computer vision tasks to unlock absolute workflow automation.",
    timeframe: "Continuous Study",
    status: "in-progress"
  },
  {
    id: "goal-4",
    title: "Incorporate Machine Learning into Scalable Web Apps",
    description: "Create next-generation interactive applications combining real-time database endpoints with server-side AI model workflows.",
    timeframe: "Immediate Goal",
    status: "in-progress"
  }
];
