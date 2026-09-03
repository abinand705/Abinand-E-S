import { Project, SkillCategory, Service, TimelineItem, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Abinand E S",
  role: "Full-Stack Developer & Data Analytics Enthusiast",
  headline: "Crafting intelligent, parallax-driven web experiences and data-powered systems.",
  education: "BCA Analytics Student at Kristu Jayanti University",
  hometown: "Wayanad, Kerala, India",
  currentLocation: "Bengaluru, Karnataka, India (Studies)",
  location: "From Wayanad, Kerala • In Bengaluru for Studies",
  email: "abinand705@gmail.com",
  socials: {
    github: "https://github.com/abinand705",
    linkedin: "https://www.linkedin.com/in/abinand-e-s-0ab0a5252",
    instagram: "https://www.instagram.com/abi_a_d_____/?hl=en",
    portfolio: "https://abinandes.vercel.app/"
  },
  status: "Available for high-impact roles, internships & freelance projects",
  bioShort: "From Wayanad district, Kerala, currently in Bengaluru pursuing BCA in Data Analytics at Kristu Jayanti University. Combining modern frontend craft with data analytics and systems engineering.",
  stats: [
    { label: "Active Repositories", value: "6+" },
    { label: "Academic Specialization", value: "BCA Analytics" },
    { label: "Core Technologies", value: "React • Python • Node" },
    { label: "Industry Experience", value: "Kenmerk Softwares" }
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Web Development Intern",
    company: "Kenmerk Softwares Pvt Ltd",
    duration: "30-day internship",
    type: "Internship",
    location: "Bengaluru, India",
    description: "Contributed to ChefCo Hospitality Partners, a live B2B procurement platform, working across the React.js frontend and Node.js backend — including building out category-filter navigation with URL query-param routing.",
    contributions: [
      "Engineered dynamic category-filter navigation with synchronized URL query-parameter state for shareable, persistent catalog browsing",
      "Developed responsive React.js interface components tailored for hospitality businesses, restaurants, and wholesale buyers",
      "Connected and integrated Node.js backend API routes to efficiently fetch, filter, and paginate procurement catalogs",
      "Collaborated on live production codebases with Git version control, performing code reviews and quality assurance"
    ],
    technologies: ["React.js", "Node.js", "JavaScript", "URL Query Routing", "REST APIs", "Tailwind CSS", "Git"],
    projectName: "ChefCo Hospitality Partners",
    projectLink: "https://buyatchefco.com"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "BCA in Data Analytics",
    institution: "Kristu Jayanti University",
    period: "2024 — Present",
    year: "Ongoing",
    location: "Bengaluru, Karnataka (Hometown: Wayanad, Kerala)",
    specialization: "Computational Analytics, Python, Relational Databases & Statistics",
    description: "Originally from Wayanad district, Kerala, currently based in Bengaluru pursuing a specialized Bachelor of Computer Applications with a focus on statistical analysis, computational data modeling, and modern software engineering.",
    highlights: [
      "Specialized coursework in mathematical statistics, computational data modeling, and big data architectures",
      "Hands-on development of full-stack data applications and algorithmic problem solving",
      "Active participant in academic technical initiatives and software development symposiums"
    ],
    coursework: ["Data Analytics", "Python Programming", "Relational Database Management (SQL)", "Probability & Statistics", "Data Structures & Algorithms", "Web Engineering"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "chefco-hospitality",
    title: "ChefCo Hospitality Partners",
    tagline: "Live B2B Procurement Platform for Hospitality & Food Service",
    description: "Contributed to ChefCo Hospitality Partners, a live production B2B procurement platform connecting restaurants, hotels, bakeries, and cafes with wholesale packaging and supplies. Engineered key features across the React.js frontend and Node.js backend during a 30-day internship at Kenmerk Softwares Pvt Ltd, including dynamic category-filter navigation with URL query-param routing.",
    category: "fullstack",
    tags: ["React.js", "Node.js", "URL Query Routing", "REST APIs", "B2B Procurement", "Tailwind CSS"],
    link: "https://buyatchefco.com",
    githubLink: "https://github.com/abinand705",
    featured: true,
    accentColor: "emerald",
    highlights: [
      "Built category-filter navigation with synchronized URL query-param routing for seamless catalog exploration",
      "Integrated React.js frontend components with Node.js backend endpoints for high-throughput product searches",
      "Contributed to live production code serving commercial kitchens, cafes, and hospitality businesses"
    ],
    stats: { label: "Deployment", value: "Production B2B" }
  },
  {
    id: "smart-diagram-studio",
    title: "Smart Diagram Studio",
    tagline: "Interactive Full-Stack Architecture & ER Diagramming Studio",
    description: "A full-featured diagramming and conceptual design suite featuring multi-page canvas workflows, relational ER diagram connections, snap-to-grid layouts, and cloud-based state persistence with Firebase.",
    category: "fullstack",
    tags: ["React Flow", "TypeScript", "Node.js", "Firebase", "Tailwind CSS", "Canvas"],
    link: "https://diagram-studio.onrender.com",
    githubLink: "https://github.com/abinand705/diagram-studio",
    featured: true,
    accentColor: "indigo",
    highlights: [
      "Dynamic node linking with bezier curves, custom shapes, and reactive edge connectors",
      "Multi-page state management with undo/redo action stacks and canvas history",
      "Cloud project persistence with Firebase and instant export to SVG/JSON/PNG schemas"
    ],
    stats: { label: "Architecture", value: "Cloud Sync" }
  },
  {
    id: "skycast-atlas",
    title: "Skycast Atlas",
    tagline: "Procedural Weather Visualizer with Dynamic Atmospheric Canvas",
    description: "An immersive meteorological engine combining live global weather API feeds with dynamic procedural canvas simulations that shift lighting, particle precipitation, and clouds in real time based on solar elevation angles.",
    category: "creative",
    tags: ["React", "HTML5 Canvas", "Weather API", "Dynamic Physics", "CSS Glassmorphism"],
    link: "https://sky-atlas-7sd.vercel.app/",
    githubLink: "https://github.com/abinand705/sky-atlas",
    featured: true,
    accentColor: "cyan",
    highlights: [
      "Procedural physics engine rendering rain, snow, lightning, and atmospheric haze",
      "Automatic day-to-night lighting transitions calculated by real-time solar elevation",
      "Instant telemetry search with 5-day predictive meteorological metrics and wind vectors"
    ],
    stats: { label: "Visuals", value: "60 FPS Canvas" }
  },
  {
    id: "neo-speedster",
    title: "NEO-SPEEDSTER",
    tagline: "High-Frequency Network Telemetry & Bandwidth Diagnostic Suite",
    description: "An intuitive, lightweight client-side network utility for precision broadband performance testing, ping jitter quantification, and downlink/uplink throughput analysis.",
    category: "tools",
    tags: ["JavaScript", "Web Performance APIs", "Network Workers", "Telemetry", "Chart.js"],
    link: "https://github.com/abinand705/NEO-SPEEDSTER",
    githubLink: "https://github.com/abinand705/NEO-SPEEDSTER",
    featured: false,
    accentColor: "emerald",
    highlights: [
      "Multi-stream socket-free bandwidth testing using chunked HTTP streams",
      "Instant jitter calculation and latency distribution histograms",
      "Zero telemetry leakage with entirely client-side runtime evaluation"
    ],
    stats: { label: "Benchmark", value: "Sub-ms Precision" }
  },
  {
    id: "sci-calculator",
    title: "Sci-Calculator",
    tagline: "Android Scientific Computation & Equation Solver",
    description: "A native Android scientific calculator application written in Kotlin, featuring complex trigonometric, logarithmic, and algebraic functions packaged within a distraction-free Material Design UI.",
    category: "tools",
    tags: ["Android", "Kotlin", "Material Design", "Parser Algorithms", "Data Structures"],
    link: "https://github.com/abinand705/Sci-Calculator",
    githubLink: "https://github.com/abinand705/Sci-Calculator",
    featured: false,
    accentColor: "purple",
    highlights: [
      "Custom shunting-yard algorithmic parser for parentheses and operator precedence",
      "Trigonometric, logarithmic, and exponential calculation engine with angle unit switching",
      "Persistent calculation history reel with quick expression reuse"
    ],
    stats: { label: "Platform", value: "Native Android" }
  },
  {
    id: "analytics-insight-hub",
    title: "Data Pulse Explorer",
    tagline: "Statistical Clustering & Exploratory Data Analysis Workbench",
    description: "An analytical platform bridging Python statistical modeling with exploratory visual dashboards to surface correlations, cluster groupings, and predictive trends from multidimensional datasets.",
    category: "analytics",
    tags: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "FastAPI", "NumPy"],
    link: "https://github.com/abinand705",
    githubLink: "https://github.com/abinand705",
    featured: false,
    accentColor: "amber",
    highlights: [
      "Automated exploratory data profiling for distributions and outlier anomalies",
      "K-Means clustering and dimensionality reduction visualizations",
      "Clean REST API layer bridging Python computational kernels with web clients"
    ],
    stats: { label: "Analytics", value: "Data Science" }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend & Creative Engineering",
    iconName: "Layout",
    description: "Building responsive, tactile user interfaces that feel alive with smooth micro-interactions and rigorous visual hierarchy.",
    color: "from-cyan-500/20 to-blue-500/20",
    skills: [
      { name: "React 19 & Next.js", level: 92, experience: "Primary Framework", category: "Core" },
      { name: "TypeScript & JavaScript (ESNext)", level: 90, experience: "Strict Type Systems", category: "Core" },
      { name: "Tailwind CSS & Modern CSS", level: 95, experience: "Utility Styling & Tokens", category: "Styling" },
      { name: "Motion & Parallax Animation", level: 88, experience: "Physics-based Motion", category: "Interactive" },
      { name: "HTML5 Canvas API", level: 82, experience: "Procedural Rendering", category: "Interactive" },
      { name: "Responsive & Adaptive Design", level: 94, experience: "Mobile-First Precision", category: "UI/UX" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Data Analytics",
    iconName: "Database",
    description: "Leveraging structured data models, Python statistical libraries, and scalable server APIs to deliver reliable digital infrastructure.",
    color: "from-emerald-500/20 to-teal-500/20",
    skills: [
      { name: "Python (Data Analytics & Automation)", level: 86, experience: "Pandas, NumPy, EDA", category: "Data" },
      { name: "Node.js & Express", level: 84, experience: "REST APIs & Middleware", category: "Backend" },
      { name: "SQL & Relational Modeling", level: 85, experience: "PostgreSQL, MySQL", category: "Database" },
      { name: "Firebase & Cloud Firestore", level: 88, experience: "Auth, Real-time Sync", category: "Cloud" },
      { name: "Data Visualization & Metrics", level: 89, experience: "Charts, Dashboards, Insights", category: "Analytics" },
      { name: "API Integration & Webhooks", level: 90, experience: "Third-party Services", category: "Backend" }
    ]
  },
  {
    id: "ai-systems",
    title: "AI & Intelligent Systems",
    iconName: "Cpu",
    description: "Integrating modern generative models and machine learning pipelines into practical, user-centric software tools.",
    color: "from-purple-500/20 to-indigo-500/20",
    skills: [
      { name: "LLM Orchestration & APIs", level: 85, experience: "Gemini SDK, OpenAI APIs", category: "AI" },
      { name: "Prompt Engineering & Structuring", level: 88, experience: "Structured JSON Output", category: "AI" },
      { name: "Machine Learning Fundamentals", level: 80, experience: "Regression, Clustering", category: "Data" },
      { name: "Intelligent UI Prototyping", level: 86, experience: "Context-aware Experiences", category: "Engineering" }
    ]
  },
  {
    id: "engineering",
    title: "Methodologies & Tooling",
    iconName: "GitBranch",
    description: "Developing robust software with version control, methodical debugging, and continuous algorithmic problem-solving.",
    color: "from-amber-500/20 to-orange-500/20",
    skills: [
      { name: "Git, GitHub & Branching", level: 90, experience: "Source Control", category: "Tools" },
      { name: "Android SDK (Kotlin)", level: 78, experience: "Native App Development", category: "Mobile" },
      { name: "Linux / Terminal CLI", level: 85, experience: "Dev Environment & Scripting", category: "Tools" },
      { name: "Algorithmic Problem Solving", level: 86, experience: "Data Structures & Logic", category: "Fundamentals" }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Modern Web Engineering",
    shortDesc: "End-to-end full-stack web applications engineered with modern React, TypeScript, and clean backend APIs.",
    deliverables: [
      "Ultra-responsive, high-performance web applications",
      "Seamless REST / Firebase real-time integrations",
      "Dark mode aesthetic and fluid user journeys"
    ],
    iconName: "Code",
    badge: "Full-Stack"
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Insight Pipelines",
    shortDesc: "Transforming raw data collections into statistical metrics, clear visualizations, and actionable intelligence.",
    deliverables: [
      "Exploratory data analysis using Python and Pandas",
      "Custom analytical dashboards and telemetry tracking",
      "Statistical modeling and correlation mapping"
    ],
    iconName: "BarChart3",
    badge: "Analytics"
  },
  {
    id: "creative-ui",
    title: "Interactive UI/UX & Motion Systems",
    shortDesc: "Bringing static layouts to life with smooth parallax scrolling, custom mouse physics, and micro-interactions.",
    deliverables: [
      "Smooth parallax and mouse scroll-driven effects",
      "Custom shaders, canvas visualizers, and 3D card tilt",
      "Accessible, high-contrast dark theme palettes"
    ],
    iconName: "Sparkles",
    badge: "Creative"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024 — Present",
    period: "Ongoing",
    title: "BCA in Data Analytics",
    institution: "Kristu Jayanti University",
    location: "Bengaluru, Karnataka (Hometown: Wayanad, Kerala)",
    type: "education",
    description: "Hailing from Wayanad district, Kerala, and currently studying in Bengaluru at Kristu Jayanti University. Specializing in computational data analytics, mathematical statistics, advanced Python programming, relational database systems, and full-stack software development.",
    achievements: [
      "Deepening expertise in statistical algorithms, machine learning concepts, and big data architectures",
      "Building practical academic and personal engineering projects spanning web and analytics",
      "Collaborating with peers on technology symposiums and algorithmic competitions"
    ],
    skills: ["Data Analytics", "Python", "SQL", "Statistics", "Data Structures", "System Design"]
  }
];
