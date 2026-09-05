# Abinand E S — Developer Portfolio & Interactive Nature Landscape

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Motion](https://img.shields.io/badge/Motion-v12-black?style=flat&logo=framer&logoColor=white)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

A modern, nature-landscape inspired portfolio web application for **Abinand E S** (Full-Stack Developer & BCA Data Analytics Student at Kristu Jayanti University, Bengaluru; originally from Wayanad, Kerala). 

Built with React 19, TypeScript, Tailwind CSS v4, Motion, and HTML5 Canvas, this project showcases a light-themed aesthetic, dynamic multi-layer parallax engine, fluid custom cursor, interactive CLI terminal, and inspection cards for featured projects.

---

## 🌟 Key Highlights & Features

- 🌿 **Nature Multi-Layer Parallax Engine**:
  - Procedural Canvas rendering floating dandelion seeds, sun motes, and gentle leaves responding to cursor velocity.
  - Multi-layer scroll transitions: rising/sinking sun, distant mountain silhouettes, rolling mid-hills, and morning mist layers.
- 💻 **Interactive CLI Terminal**:
  - Fully interactive terminal emulator supporting commands like `help`, `skills`, `projects`, `experience`, `education`, `contact`, `clear`, and `whoami`.
- 🖱️ **Fluid Cursor & Scroll Navigation**:
  - Custom fluid mouse cursor with dynamic trailing physics and toggle support.
  - Scroll progress bar and floating elevator navigation to jump seamlessly between key sections.
- 🗂️ **Showcased Projects & Modal Inspector**:
  - Full-stack tools and applications including **Smart Diagram Studio** (React Flow & Firebase), **Skycast Atlas** (60 FPS canvas weather engine), **NEO-SPEEDSTER**, **Sci-Calculator** (Android/Kotlin), and **Data Pulse Explorer** (Python data analytics).
  - Modal view with deep-dive technical highlights, architecture details, and direct live/repo links.
- 📊 **Skill & Capability Matrix**:
  - Categorized breakdown across Frontend & Creative Engineering, Backend & Data Analytics, AI & Intelligent Systems, and Methodologies & Tooling.
- 📬 **Interactive Contact & Social Hub**:
  - Contact form with celebratory confetti response, quick email clipboard copy, and verified social links.

---

## 🛠️ Tech Stack

### **Frontend & Frameworks**
- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Space Grotesk, Outfit, JetBrains Mono

### **Motion & Interactions**
- **Animations**: [Motion](https://motion.dev/) (Framer Motion v12)
- **Graphics**: HTML5 2D Canvas (Procedural floating particle physics)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Icons**: [Lucide React](https://lucide.dev/)

### **AI & Backend Ready**
- **Google GenAI SDK**: `@google/genai` configured for server-side Gemini API workflows
- **Backend Utilities**: Express 4, tsx, dotenv

---

## 📂 Project Structure

```text
Abinand-E-S/
├── public/                 # Static assets (favicons, manifest, etc.)
├── src/
│   ├── components/         # Modular React components
│   │   ├── AboutSection.tsx        # Bio, background, and stats
│   │   ├── ContactSection.tsx      # Contact form, social links & confetti
│   │   ├── CustomCursor.tsx        # Physics-driven fluid mouse pointer
│   │   ├── ExperienceSection.tsx   # Professional internship & roles
│   │   ├── Footer.tsx              # Quick navigation & copyright
│   │   ├── HeroSection.tsx         # Hero introduction & CTA
│   │   ├── InteractiveTerminal.tsx # Simulated CLI shell with custom commands
│   │   ├── Navbar.tsx              # Sticky navigation & cursor toggles
│   │   ├── ParallaxBackground.tsx  # Multi-layer parallax hills, sun & canvas particles
│   │   ├── ProjectModal.tsx        # Deep-dive project modal dialog
│   │   ├── ProjectsSection.tsx     # Filterable project portfolio grid
│   │   ├── ScrollElevator.tsx      # Section quick-jump side elevator
│   │   ├── ScrollProgress.tsx      # Reading / scroll progress bar
│   │   ├── ServicesSection.tsx     # Full-stack, Analytics & UI services
│   │   ├── SkillsSection.tsx       # Tech stack proficiency matrix
│   │   ├── TiltCard.tsx            # 3D perspective hover tilt effect
│   │   └── TimelineSection.tsx     # Academic and education timeline
│   ├── data/
│   │   └── portfolioData.ts        # Centralized data store (skills, projects, bio)
│   ├── App.tsx             # Root application orchestrator
│   ├── index.css           # Tailwind CSS imports & global design tokens
│   ├── main.tsx            # Application DOM mounting point
│   └── types.ts            # TypeScript interfaces and data models
├── .env.example            # Environment variable template
├── index.html              # HTML5 entry document
├── package.json            # Scripts & project dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build & Tailwind configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/) / [pnpm](https://pnpm.io/)

### 1. Clone the Repository

```bash
git clone https://github.com/abinand705/Abinand-E-S.git
cd Abinand-E-S
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables (Optional)

If utilizing Gemini AI or server-side endpoints:

```bash
cp .env.example .env
```

Configure `GEMINI_API_KEY` and `APP_URL` inside `.env`.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server on port `3000` (`--host=0.0.0.0`) |
| `npm run build` | Compiles and builds production-ready distribution assets into `dist/` |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Type-checks code using TypeScript (`tsc --noEmit`) |
| `npm run clean` | Removes build artifacts (`dist`, `server.js`) |

---

## 👤 About Abinand E S

- **Location**: From Wayanad, Kerala • Currently in Bengaluru, Karnataka, India
- **Education**: BCA in Data Analytics, Kristu Jayanti University
- **Specialization**: Full-Stack Web Development, Data Analytics (Python/Pandas/SQL), Interactive UI/UX
- **GitHub**: [@abinand705](https://github.com/abinand705)
- **LinkedIn**: [Abinand E S](https://www.linkedin.com/in/abinand-e-s-0ab0a5252)
- **Email**: [abinand705@gmail.com](mailto:abinand705@gmail.com)
- **Live Portfolio**: [abinandes.vercel.app](https://abinandes.vercel.app/)

---

## 📄 License

This project is licensed under the [Apache-2.0 License](LICENSE).

# Abinand E S — Developer Portfolio & Interactive Nature Landscape

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Motion](https://img.shields.io/badge/Motion-v12-black?style=flat&logo=framer&logoColor=white)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

A modern, nature-landscape inspired portfolio web application for **Abinand E S** (Full-Stack Developer & BCA Data Analytics Student at Kristu Jayanti University, Bengaluru; originally from Wayanad, Kerala). 

Built with React 19, TypeScript, Tailwind CSS v4, Motion, and HTML5 Canvas, this project showcases a light-themed aesthetic, dynamic multi-layer parallax engine, fluid custom cursor, interactive CLI terminal, and inspection cards for featured projects.

---

## 🌟 Key Highlights & Features

- 🌿 **Nature Multi-Layer Parallax Engine**:
  - Procedural Canvas rendering floating dandelion seeds, sun motes, and gentle leaves responding to cursor velocity.
  - Multi-layer scroll transitions: rising/sinking sun, distant mountain silhouettes, rolling mid-hills, and morning mist layers.
- 💻 **Interactive CLI Terminal**:
  - Fully interactive terminal emulator supporting commands like `help`, `skills`, `projects`, `experience`, `education`, `contact`, `clear`, and `whoami`.
- 🖱️ **Fluid Cursor & Scroll Navigation**:
  - Custom fluid mouse cursor with dynamic trailing physics and toggle support.
  - Scroll progress bar and floating elevator navigation to jump seamlessly between key sections.
- 🗂️ **Showcased Projects & Modal Inspector**:
  - Full-stack tools and applications including **Smart Diagram Studio** (React Flow & Firebase), **Skycast Atlas** (60 FPS canvas weather engine), **NEO-SPEEDSTER**, **Sci-Calculator** (Android/Kotlin), and **Data Pulse Explorer** (Python data analytics).
  - Modal view with deep-dive technical highlights, architecture details, and direct live/repo links.
- 📊 **Skill & Capability Matrix**:
  - Categorized breakdown across Frontend & Creative Engineering, Backend & Data Analytics, AI & Intelligent Systems, and Methodologies & Tooling.
- 📬 **Interactive Contact & Social Hub**:
  - Contact form with celebratory confetti response, quick email clipboard copy, and verified social links.

---

## 🛠️ Tech Stack

### **Frontend & Frameworks**
- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Space Grotesk, Outfit, JetBrains Mono

### **Motion & Interactions**
- **Animations**: [Motion](https://motion.dev/) (Framer Motion v12)
- **Graphics**: HTML5 2D Canvas (Procedural floating particle physics)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Icons**: [Lucide React](https://lucide.dev/)

### **AI & Backend Ready**
- **Google GenAI SDK**: `@google/genai` configured for server-side Gemini API workflows
- **Backend Utilities**: Express 4, tsx, dotenv

---

## 📂 Project Structure

```text
Abinand-E-S/
├── public/                 # Static assets (favicons, manifest, etc.)
├── src/
│   ├── components/         # Modular React components
│   │   ├── AboutSection.tsx        # Bio, background, and stats
│   │   ├── ContactSection.tsx      # Contact form, social links & confetti
│   │   ├── CustomCursor.tsx        # Physics-driven fluid mouse pointer
│   │   ├── ExperienceSection.tsx   # Professional internship & roles
│   │   ├── Footer.tsx              # Quick navigation & copyright
│   │   ├── HeroSection.tsx         # Hero introduction & CTA
│   │   ├── InteractiveTerminal.tsx # Simulated CLI shell with custom commands
│   │   ├── Navbar.tsx              # Sticky navigation & cursor toggles
│   │   ├── ParallaxBackground.tsx  # Multi-layer parallax hills, sun & canvas particles
│   │   ├── ProjectModal.tsx        # Deep-dive project modal dialog
│   │   ├── ProjectsSection.tsx     # Filterable project portfolio grid
│   │   ├── ScrollElevator.tsx      # Section quick-jump side elevator
│   │   ├── ScrollProgress.tsx      # Reading / scroll progress bar
│   │   ├── ServicesSection.tsx     # Full-stack, Analytics & UI services
│   │   ├── SkillsSection.tsx       # Tech stack proficiency matrix
│   │   ├── TiltCard.tsx            # 3D perspective hover tilt effect
│   │   └── TimelineSection.tsx     # Academic and education timeline
│   ├── data/
│   │   └── portfolioData.ts        # Centralized data store (skills, projects, bio)
│   ├── App.tsx             # Root application orchestrator
│   ├── index.css           # Tailwind CSS imports & global design tokens
│   ├── main.tsx            # Application DOM mounting point
│   └── types.ts            # TypeScript interfaces and data models
├── .env.example            # Environment variable template
├── index.html              # HTML5 entry document
├── package.json            # Scripts & project dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build & Tailwind configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/) / [pnpm](https://pnpm.io/)

### 1. Clone the Repository

```bash
git clone https://github.com/abinand705/Abinand-E-S.git
cd Abinand-E-S
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables (Optional)

If utilizing Gemini AI or server-side endpoints:

```bash
cp .env.example .env
```

Configure `GEMINI_API_KEY` and `APP_URL` inside `.env`.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server on port `3000` (`--host=0.0.0.0`) |
| `npm run build` | Compiles and builds production-ready distribution assets into `dist/` |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Type-checks code using TypeScript (`tsc --noEmit`) |
| `npm run clean` | Removes build artifacts (`dist`, `server.js`) |

---

## 👤 About Abinand E S

- **Location**: From Wayanad, Kerala • Currently in Bengaluru, Karnataka, India
- **Education**: BCA in Data Analytics, Kristu Jayanti University
- **Specialization**: Full-Stack Web Development, Data Analytics (Python/Pandas/SQL), Interactive UI/UX
- **GitHub**: [@abinand705](https://github.com/abinand705)
- **LinkedIn**: [Abinand E S](https://www.linkedin.com/in/abinand-e-s-0ab0a5252)
- **Email**: [abinand705@gmail.com](mailto:abinand705@gmail.com)
- **Live Portfolio**: [abinandes.vercel.app](https://abinandes.vercel.app/)

---

## 📄 License

This project is licensed under the [Apache-2.0 License](LICENSE).
