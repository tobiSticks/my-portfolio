import React, { useState } from 'react';
import {
  Code,
  Layers,
  BarChart3,
  BookOpen,
  Mail,
  Linkedin,
  Github,
  Award,
  Calendar,
  Download,
  School,
  Briefcase,
  Database,
  SquareCode,
  Menu,
  X,
  Terminal,
  Smartphone,
  ListTodo,
  TrendingUp,
  Sparkles,
  ExternalLink,
  Zap,
  Cpu,
} from 'lucide-react';

// --- Configuration ---
const portfolioData = {
  name: "Oluwatobi Adeniji",
  title: "Front-End Developer · AI Engineer · Full-Stack Builder",
  bio: "Results-driven Front-End Developer with 2+ years of experience building production-ready web applications. Proficient in JavaScript, TypeScript, React.js, and Next.js, with a strong track record of delivering high-performance, accessible, and scalable UI systems. Currently expanding into full-stack development with Node.js and Supabase, while actively shipping AI-powered SaaS products as an indie developer. Passionate about combining technical depth, creative problem-solving, and emerging AI tooling to build impactful products one release at a time.",

  contact: {
    email: "jsoluwatobi2@gmail.com",
    linkedin: "https://www.linkedin.com/in/oluwatobiadebayo-2b5514397",
    github: "https://github.com/tobiSticks",
    cvUrl: "./assets/Oluwatobi_Adeniji_CV.pdf",
  },

  skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python"],
    frameworks: ["React.js", "Next.js 14", "Tailwind CSS", "Node.js", "Framer Motion"],
    backend: ["Supabase (PostgreSQL)", "RLS & Auth", "REST APIs", "Vercel"],
    ai: ["Groq API (Llama 3.3)", "Anthropic Claude API", "Prompt Engineering", "SaaS Development"],
    payments: ["Stripe (Subscriptions & Webhooks)", "Paystack (HMAC Verification)"],
    tools: ["Git / GitHub", "VS Code", "Trello", "Component-Driven Architecture"],
    concepts: ["Performance Optimization", "Responsive UI", "Web Accessibility (WCAG)"],
  },

  projects: [
    {
      id: 0,
      title: "onePost — AI Content Repurposing SaaS",
      icon: Sparkles,
      description: "Full-stack SaaS enabling content creators to transform long-form content into platform-optimized posts for LinkedIn, Twitter/X, Instagram, TikTok, newsletters, and SEO — in under 10 seconds. Built a custom tone profiles system, YouTube transcript extraction, blog scraping, and a complete Paystack billing stack with webhook-driven plan enforcement.",
      technologies: ["Next.js 15", "TypeScript", "Claude API", "Supabase", "Paystack", "Tailwind CSS"],
      link: "https://one-post-rho.vercel.app",
      linkLabel: "Live Demo",
      status: "Live · Production",
      featured: true,
    },
    {
      id: 7,
      title: "RoboLearn — AI-Powered Robotics Learning Platform",
      icon: Cpu,
      description: "Full-stack robotics learning platform with structured tracks across Software (Python, ROS 2, simulation), Mechanical (CAD, joints, mechanisms), and Electrical (circuits, microcontrollers, sensors) engineering. Features an AI tutor powered by Claude that answers questions in the exact context of the active lesson, quiz generation with progress tracking, a community hub, and a leaderboard — all with MDX-rendered lesson content.",
      technologies: ["Next.js 15", "TypeScript", "Claude API", "Supabase", "MDX", "Tailwind CSS"],
      status: "In Development",
      featured: false,
    },
    {
      id: 1,
      title: "ForexEdge Marketplace",
      icon: TrendingUp,
      description: "Full-stack FinTech marketplace enabling traders to list, sell, and track performance metrics for algorithmic and manual strategies. Features Paystack webhooks with HMAC verification, digital asset gating via Supabase Signed URLs, and real-time PnL / Win Rate dashboards via optimized PostgreSQL queries.",
      technologies: ["Next.js 14", "Supabase", "PostgreSQL", "Paystack", "Tailwind CSS"],
      link: "CLASSIFIED",
      status: "Production Ready",
    },
    {
      id: 2,
      title: "Skin Cancer Predictive Model",
      icon: BarChart3,
      description: "Multimodal machine learning model predicting skin cancer malignancy from clinical images and patient metadata. Employed transfer learning and feature engineering to achieve high diagnostic accuracy across a full data science pipeline.",
      technologies: ["Python", "TensorFlow / Keras", "NumPy", "Pandas", "Computer Vision"],
      link: "CLASSIFIED",
      status: "Model Complete",
    },
    {
      id: 3,
      title: "Fashion Designer E-Commerce",
      icon: Layers,
      description: "Visually appealing and fully responsive e-commerce web app for a local fashion designer. Features dynamic product listings, high-resolution image galleries, and a user-friendly contact form.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      link: "https://nma-finese.vercel.app/",
      linkLabel: "Live Demo",
      status: "Deployed",
    },
    {
      id: 4,
      title: "Task Management App",
      icon: ListTodo,
      description: "Productivity-focused task management app with full offline capability via Service Workers and IndexedDB for client-side persistence — ensuring zero data loss without network connectivity.",
      technologies: ["React.js", "IndexedDB", "Service Workers"],
      status: "Completed",
    },
    {
      id: 5,
      title: "CLI File Management System",
      icon: Terminal,
      description: "Python automation tool that intelligently organizes, renames, and manages files based on type, date, and custom rules — eliminating manual file management overhead.",
      technologies: ["Python", "OS Module", "Shutil"],
      status: "Completed",
    },
    {
      id: 6,
      title: "Chat App Onboarding (Flutter)",
      icon: Smartphone,
      description: "Smooth 4-page onboarding flow for a mobile chat application in production. Focused on user experience, clean UI transitions, and mobile-first accessibility.",
      technologies: ["Flutter", "Dart"],
      status: "In Production",
    },
  ],

  experience: [
    {
      type: "Work",
      role: "Front-End Developer",
      organization: "Nexapay",
      date: "Nov 2025 – Present · Remote",
      description: "Developing and maintaining responsive user interfaces using React.js, TypeScript, HTML5, and CSS3, directly contributing to product features used by live customers. Architecting reusable, accessible UI component libraries aligned with design system specifications. Integrating RESTful APIs for dynamic data rendering and real-time state updates, while collaborating cross-functionally in an Agile environment.",
      icon: Briefcase,
    },
    {
      type: "Internship",
      role: "IT / Data Intern",
      organization: "Abuja Electricity Distribution Company (AEDC)",
      date: "Summer 2024",
      description: "Worked extensively with large datasets in Excel, performing data cleaning, aggregation, and analysis. Prepared key statistical reports and visual presentations utilized by senior management for operational planning and decision-making.",
      icon: Briefcase,
    },
    {
      type: "Education",
      role: "B.Sc. Computer Science",
      organization: "Landmark University, Omu-Aran, Nigeria",
      date: "2021 – 2025",
      description: "Focused coursework in Data Structures, Database Management, Software Engineering, and Artificial Intelligence fundamentals. Graduated with a strong foundation in both theoretical and practical aspects of computing.",
      icon: School,
    },
  ],
};

// --- Reusable Components ---

const SectionTitle = ({ children, icon: Icon }) => (
  <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center border-b-2 border-indigo-200 pb-3">
    <Icon className="w-7 h-7 mr-3 text-indigo-500" />
    {children}
  </h2>
);

const Pill = ({ children }) => (
  <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2 border border-indigo-100 transition hover:bg-indigo-100">
    {children}
  </span>
);

const ProjectCard = ({ project }) => {
  const Icon = project.icon;
  const isLive = project.link && project.link !== "CLASSIFIED";

  return (
    <div className={`relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col ${project.featured ? 'border-2 border-indigo-400 ring-1 ring-indigo-200' : 'border border-gray-100'}`}>
      {project.featured && (
        <div className="absolute -top-3 left-5">
          <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm tracking-wide uppercase">
            Featured
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-2 mt-1">
        <h3 className="text-lg font-bold text-gray-900 pr-2 leading-snug">{project.title}</h3>
        <div className={`p-2 rounded-lg shrink-0 ${project.featured ? 'bg-indigo-100' : 'bg-gray-50'}`}>
          <Icon className={`w-5 h-5 ${project.featured ? 'text-indigo-600' : 'text-gray-500'}`} />
        </div>
      </div>

      <span className={`text-xs font-semibold mb-3 ${project.status.includes('Live') || project.status === 'Deployed' || project.status === 'In Production' ? 'text-emerald-600' : 'text-indigo-500'}`}>
        ● {project.status}
      </span>

      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

      <div className="mt-auto">
        <div className="flex flex-wrap mb-4">
          {project.technologies.map(tech => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>

        {isLive && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition duration-150"
          >
            <ExternalLink className="w-4 h-4" />
            {project.linkLabel || "View Project"}
          </a>
        )}
      </div>
    </div>
  );
};

const ExperienceItem = ({ item, isLast }) => {
  const Icon = item.icon;
  return (
    <div className={`flex relative ${!isLast ? 'pb-10' : 'pb-2'}`}>
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        {!isLast && <div className="h-full w-0.5 bg-indigo-100 pointer-events-none"></div>}
      </div>
      <div className="shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 shadow-md">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-grow pl-6">
        <span className="font-bold text-gray-900 text-base">{item.role}</span>
        <div className="text-sm text-indigo-600 font-medium mt-0.5">{item.organization}</div>
        <div className="text-xs text-gray-400 font-medium mt-1 mb-3 flex items-center gap-1">
          <Calendar className="w-3 h-3" />{item.date}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};


// --- Main App Component ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-extrabold text-indigo-600 tracking-tight">
            Oluwatobi Adeniji
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-8 text-gray-500 font-medium items-center text-sm">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-indigo-600 transition duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href={portfolioData.contact.cvUrl}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 shadow-sm ml-2"
              download="Oluwatobi_Adeniji_CV.pdf"
            >
              Download CV <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 text-indigo-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-100 pb-4">
            <div className="px-4 pt-2 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={portfolioData.contact.cvUrl}
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                download="Oluwatobi_Adeniji_CV.pdf"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 mt-3 text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition"
              >
                Download CV <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero / About */}
        <section id="about" className="pt-8 pb-16 mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />
            <div className="p-8 sm:p-12">
              <div className="md:flex md:items-center md:gap-10">
                <div className="flex-shrink-0 mb-8 md:mb-0">
                  <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-indigo-100 shadow-lg">
                    <img
                      src="./assets/TOBI.jpg"
                      alt="Oluwatobi Adeniji"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
                    {portfolioData.name}
                  </h1>
                  <p className="text-lg text-indigo-600 font-semibold mb-5 tracking-wide">
                    {portfolioData.title}
                  </p>
                  <p className="text-gray-600 leading-relaxed max-w-3xl mb-6 text-sm sm:text-base">
                    {portfolioData.bio}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
                    >
                      <Mail className="w-4 h-4" /> {portfolioData.contact.email}
                    </a>
                    <a
                      href={portfolioData.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
                    >
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a
                      href={portfolioData.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-12">
          <SectionTitle icon={Code}>Technical Skills</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-2 uppercase tracking-widest">
                <SquareCode className="w-4 h-4 text-indigo-500" /> Languages
              </h3>
              <div className="flex flex-wrap">
                {portfolioData.skills.languages.map(s => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-2 uppercase tracking-widest">
                <Layers className="w-4 h-4 text-indigo-500" /> Frameworks
              </h3>
              <div className="flex flex-wrap">
                {portfolioData.skills.frameworks.map(s => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-2 uppercase tracking-widest">
                <Zap className="w-4 h-4 text-indigo-500" /> AI & Backend
              </h3>
              <div className="flex flex-wrap">
                {portfolioData.skills.backend.map(s => <Pill key={s}>{s}</Pill>)}
                {portfolioData.skills.ai.map(s => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-2 uppercase tracking-widest">
                <BookOpen className="w-4 h-4 text-indigo-500" /> Tools & Payments
              </h3>
              <div className="flex flex-wrap">
                {portfolioData.skills.payments.map(s => <Pill key={s}>{s}</Pill>)}
                {portfolioData.skills.tools.map(s => <Pill key={s}>{s}</Pill>)}
                {portfolioData.skills.concepts.map(s => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12">
          <SectionTitle icon={Layers}>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-12">
          <SectionTitle icon={Award}>Experience & Education</SectionTitle>
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            {portfolioData.experience.map((item, index) => (
              <ExperienceItem
                key={index}
                item={item}
                isLast={index === portfolioData.experience.length - 1}
              />
            ))}
          </div>
        </section>

      </main>

      <footer className="bg-gray-900 text-gray-400 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm">
          <p className="font-medium text-white mb-1">Oluwatobi Adeniji</p>
          <p>Front-End Developer · AI Engineer · Full-Stack Builder</p>
          <p className="mt-3 text-gray-600 text-xs">&copy; {new Date().getFullYear()} · Built with React & Tailwind CSS</p>
        </div>
      </footer>

    </div>
  );
}
